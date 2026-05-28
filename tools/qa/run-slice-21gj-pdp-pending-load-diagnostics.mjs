#!/usr/bin/env node

/**
 * Slice 21GJ — global PDP pending-load diagnostics.
 * - Headed Playwright only
 * - Manual storefront unlock (password entered in the opened browser window)
 * - No storageState, trace, HAR, or video
 * - Writes summary JSON under artifacts/ only
 */

import fsp from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..', '..');
const requireFromHere = createRequire(import.meta.url);

const STORE_ORIGIN = 'https://sikhwarigroupdev.myshopify.com';
const PASSWORD_URL = `${STORE_ORIGIN}/password`;

const RETRO_HANDHELD_HANDLE =
  '128g-r36s-retro-handheld-video-game-console-linux-system-3-5-inch-ips-screen-r35s-pro-portable-pocket-video-player-64gb-games';

const DEFAULT_HANDLES = [
  RETRO_HANDHELD_HANDLE,
  '32-pieses-wooden-chess-standard-tournamen-staunton-wood-chessmen-8cm-king-height-chess-pieces-only-no-board',
  'monopoly-classic-board-game-family-property-trading-game-portable-kids-adults-party-table-game-educational-toy-gift',
  'premium-monopoly-global-village-board-game-exquisite-craftsmanship-for-tabletop-gamers-tabletop-gaming-english-version',
  'logitech-g-pro-x-60g-professional-grade-5-programmable-keys-44000-dpi'
];

const NAV_TIMEOUT_MS = Number(process.env.SLICE_21GJ_NAV_TIMEOUT_MS || 25_000);
const UNLOCK_TIMEOUT_MS = Number(process.env.SLICE_21GJ_UNLOCK_TIMEOUT_MS || 12 * 60 * 1000);
const SNAPSHOT_AT_MS = [15_000, 30_000];

const evidenceRoot = path.join(repoRoot, 'artifacts', 'qa', 'slice-21gj-global-pdp-pending-load');

function stamp() {
  return new Date().toISOString().replace(/[:.]/g, '-').replace('T', '-').slice(0, 19);
}

function normalizeText(value) {
  return String(value || '')
    .replace(/\s+/g, ' ')
    .trim();
}

function resolvePlaywright() {
  try {
    requireFromHere.resolve('playwright');
    return requireFromHere('playwright');
  } catch {
    throw new Error('Playwright not found. Run npm install in repo root.');
  }
}

async function isPasswordGate(page) {
  if (/\/password(?:[?#]|$)/.test(page.url())) return true;
  const body = normalizeText(await page.locator('body').innerText().catch(() => '')).toLowerCase();
  return body.includes('store password') || body.includes('enter store using password') || body.includes('enter using password');
}

async function waitForManualUnlock(page) {
  await page.goto(PASSWORD_URL, { waitUntil: 'domcontentloaded', timeout: 45_000 });
  console.log('');
  console.log('=== Manual storefront unlock ===');
  console.log('Enter the storefront password in the opened Chromium window only.');
  console.log(`Waiting up to ${Math.round(UNLOCK_TIMEOUT_MS / 60000)} minutes...`);
  console.log('');

  const started = Date.now();
  while (Date.now() - started < UNLOCK_TIMEOUT_MS) {
    await page.waitForTimeout(2000);
    if (!(await isPasswordGate(page))) return true;
  }
  return false;
}

function pickTopPending(pending, limit = 12) {
  return pending
    .slice()
    .sort((a, b) => (b.ageMs || 0) - (a.ageMs || 0))
    .slice(0, limit)
    .map((r) => ({
      url: r.url,
      method: r.method,
      resourceType: r.resourceType,
      ageMs: r.ageMs
    }));
}

async function run() {
  const playwright = resolvePlaywright();
  const runDir = path.join(evidenceRoot, stamp());
  await fsp.mkdir(runDir, { recursive: true });

  const summary = {
    slice: '21GJ',
    startedAt: new Date().toISOString(),
    storeOrigin: STORE_ORIGIN,
    navTimeoutMs: NAV_TIMEOUT_MS,
    unlockTimeoutMs: UNLOCK_TIMEOUT_MS,
    handles: DEFAULT_HANDLES,
    results: []
  };

  const browser = await playwright.chromium.launch({ headless: false });

  try {
    const context = await browser.newContext({ viewport: { width: 1366, height: 768 } });
    const page = await context.newPage();

    const consoleMessages = [];
    const pageErrors = [];
    const failedRequests = [];

    // Track in-flight requests to detect long-pending resources.
    const inflight = new Map();

    page.on('console', (msg) => {
      // Do not capture page text that could include secrets; only type + short message.
      consoleMessages.push({
        type: msg.type(),
        text: msg.text().slice(0, 500)
      });
    });

    page.on('pageerror', (err) => {
      pageErrors.push({ message: String(err?.message || err).slice(0, 800) });
    });

    page.on('request', (req) => {
      inflight.set(req, {
        url: req.url(),
        method: req.method(),
        resourceType: req.resourceType(),
        startedAt: Date.now()
      });
    });
    page.on('requestfinished', (req) => inflight.delete(req));
    page.on('requestfailed', (req) => {
      const meta = inflight.get(req);
      inflight.delete(req);
      failedRequests.push({
        url: req.url(),
        method: req.method(),
        resourceType: req.resourceType(),
        failure: req.failure()?.errorText || 'requestfailed'
      });
    });

    const unlocked = await waitForManualUnlock(page);
    if (!unlocked) throw new Error('Timed out waiting for manual storefront unlock.');

    for (const handle of DEFAULT_HANDLES) {
      const pdpPath = `/products/${handle}`;
      const attemptedUrl = `${STORE_ORIGIN}${pdpPath}`;
      const record = {
        handle,
        attemptedUrl,
        finalUrl: null,
        navStatus: null,
        navError: null,
        domContentLoaded: false,
        mainPresent: false,
        titlePresent: false,
        priceToConfirmVisible: false,
        previewNoteVisible: false,
        thumbCount: null,
        pendingAtMs: {},
        failedRequests: [],
        consoleErrors: [],
        pageErrors: []
      };

      // Reset per-page diagnostics between PDPs while keeping in-flight tracking global.
      consoleMessages.length = 0;
      pageErrors.length = 0;
      failedRequests.length = 0;
      inflight.clear();

      try {
        const resp = await page.goto(attemptedUrl, { waitUntil: 'domcontentloaded', timeout: NAV_TIMEOUT_MS });
        record.navStatus = resp ? resp.status() : null;
        record.domContentLoaded = true;
        record.finalUrl = page.url();
      } catch (err) {
        record.navError = String(err?.message || err);
        record.finalUrl = page.url();
      }

      // Snapshot pending/failed after 15s and 30s regardless of whether nav succeeded.
      const started = Date.now();
      for (const ms of SNAPSHOT_AT_MS) {
        const waitLeft = ms - (Date.now() - started);
        if (waitLeft > 0) await page.waitForTimeout(waitLeft);

        const pending = [];
        for (const meta of inflight.values()) {
          pending.push({
            ...meta,
            ageMs: Date.now() - meta.startedAt
          });
        }
        record.pendingAtMs[String(ms)] = {
          count: pending.length,
          top: pickTopPending(pending)
        };
      }

      // Lightweight usability signals.
      record.mainPresent = (await page.locator('main').count().catch(() => 0)) > 0;
      record.titlePresent = (await page.locator('h1').first().count().catch(() => 0)) > 0;
      const bodyText = normalizeText(await page.locator('body').innerText().catch(() => ''));
      record.priceToConfirmVisible = /Price to be confirmed/i.test(bodyText);
      record.previewNoteVisible = /being prepared for launch/i.test(bodyText);
      record.thumbCount = await page.locator('[data-gallery-thumb]').count().catch(() => null);

      // Capture only errors/warnings (bounded), and failed requests.
      record.consoleErrors = consoleMessages.filter((m) => m.type === 'error').slice(0, 50);
      record.pageErrors = pageErrors.slice(0, 25);
      record.failedRequests = failedRequests.slice(0, 80);

      summary.results.push(record);
      console.log(
        `[${handle}] status=${record.navStatus ?? 'n/a'} dcl=${record.domContentLoaded ? 'yes' : 'no'} ` +
          `pending30s=${record.pendingAtMs['30000']?.count ?? 'n/a'} thumbs=${record.thumbCount ?? 'n/a'}`
      );
    }

    summary.finishedAt = new Date().toISOString();
    summary.success = true;
  } catch (error) {
    summary.finishedAt = new Date().toISOString();
    summary.success = false;
    summary.error = String(error?.message || error);
    throw error;
  } finally {
    await fsp.writeFile(path.join(runDir, 'summary.json'), `${JSON.stringify(summary, null, 2)}\n`, 'utf8');
    await browser.close().catch(() => {});
  }
}

run().catch((error) => {
  console.error(`Slice 21GJ diagnostics failed: ${error.message}`);
  process.exit(1);
});
