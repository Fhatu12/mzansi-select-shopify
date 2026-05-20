#!/usr/bin/env node

import fsp from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..', '..');

const PREVIEW_THEME_ID = '151207542967';
const STORE_ORIGIN = 'https://dropshippoc.myshopify.com';
const PASSWORD_URL = `${STORE_ORIGIN}/password`;
const UNLOCK_CHECK_URL = `${STORE_ORIGIN}/?preview_theme_id=${PREVIEW_THEME_ID}`;
const MANUAL_UNLOCK_TIMEOUT_MS = 12 * 60 * 1000;
const evidenceRoot = path.join(repoRoot, 'artifacts', 'qa', 'slice-21cb-search-rendered-validation');

const viewports = [
  { key: 'desktop', width: 1366, height: 768 },
  { key: 'mobile', width: 390, height: 844 }
];

const routes = [
  {
    key: 'organiser',
    path: `/search?q=organiser&type=product&preview_theme_id=${PREVIEW_THEME_ID}`,
    query: 'organiser',
    expectPerformed: true
  },
  {
    key: 'no-match',
    path: `/search?q=zzzz-no-match-preview&type=product&preview_theme_id=${PREVIEW_THEME_ID}`,
    query: 'zzzz-no-match-preview',
    expectPerformed: true,
    expectEmpty: true
  },
  {
    key: 'no-query',
    path: `/search?preview_theme_id=${PREVIEW_THEME_ID}`,
    query: '',
    expectPerformed: false
  }
];

const staticDemoPatterns = [
  /Premium Over-Ear Headphones/i,
  /Smart Watch – Black Edition/i,
  /Bamboo Lid Storage Container Set/i,
  /Insulated Vacuum Flask 500ml/i,
  /headphones-premium\.jpg/i
];

const commercePatterns =
  /\/cart|\/cart\/add|\/checkout|\/checkouts|\/account|customer|login|register|recover|payment|order/i;

const args = new Set(process.argv.slice(2));

if (args.has('--help')) {
  console.log(
    [
      'Usage: node tools/qa/run-slice-21cb-search-rendered-validation.mjs [--manual-unlock]',
      '',
      'Rendered validation for Slice 21CB search after Slice 21CD preview sync.',
      'Options: --manual-unlock'
    ].join('\n')
  );
  process.exit(0);
}

function normalizeText(value) {
  return String(value || '')
    .replace(/\s+/g, ' ')
    .trim();
}

async function isPasswordGate(page) {
  if (/\/password(?:[?#]|$)/.test(page.url())) return true;
  const body = normalizeText(await page.locator('body').innerText().catch(() => ''));
  return /enter store using password|store password/i.test(body);
}

async function waitForManualUnlock(page) {
  await page.goto(PASSWORD_URL, { waitUntil: 'domcontentloaded', timeout: 45000 });
  console.log('');
  console.log('=== Manual storefront unlock ===');
  console.log(
    'Enter the storefront password in the opened Chromium window only. Do not paste it into the terminal.'
  );
  console.log(`Waiting up to ${MANUAL_UNLOCK_TIMEOUT_MS / 60000} minutes...`);
  console.log(`Unlock check URL: ${UNLOCK_CHECK_URL}`);
  console.log('');

  const started = Date.now();
  while (Date.now() - started < MANUAL_UNLOCK_TIMEOUT_MS) {
    await page.waitForTimeout(2000);
    if (!(await isPasswordGate(page))) {
      await page.goto(UNLOCK_CHECK_URL, { waitUntil: 'domcontentloaded', timeout: 45000 });
      await page.waitForTimeout(1000);
      if (!(await isPasswordGate(page))) {
        console.log('Manual unlock detected. Continuing with search-route checks.');
        return;
      }
    }
  }
  throw new Error('Timed out waiting for manual storefront unlock.');
}

async function detectCommerce(page) {
  const controls = await page.locator('button, a, input[type="submit"], form').evaluateAll((nodes) =>
    nodes.map((node) => {
      const tag = node.tagName.toLowerCase();
      const text = (node.textContent || '').trim();
      const href = node.getAttribute('href') || '';
      const action = node.getAttribute('action') || '';
      const method = node.getAttribute('method') || '';
      const disabled =
        node.hasAttribute('disabled') ||
        node.getAttribute('aria-disabled') === 'true' ||
        node.classList.contains('disabled');
      const style = window.getComputedStyle(node);
      const hidden = style.display === 'none' || style.visibility === 'hidden';
      return { tag, text, href, action, method, disabled, hidden };
    })
  );

  const activePurchase = controls.filter(
    (item) => !item.disabled && !item.hidden && /^(add to cart|buy now)$/i.test(item.text)
  );
  const activeCheckoutCustomer = controls.filter(
    (item) =>
      item.tag === 'a' &&
      !item.disabled &&
      !item.hidden &&
      commercePatterns.test(item.href) &&
      !/^#/.test(item.href)
  );
  const hashLinks = controls.filter(
    (item) => item.tag === 'a' && !item.disabled && !item.hidden && item.href === '#'
  );
  const searchForms = controls.filter(
    (item) => item.tag === 'form' && /search/i.test(item.action || '') && String(item.method).toLowerCase() === 'get'
  );
  const unsafeForms = controls.filter(
    (item) =>
      item.tag === 'form' &&
      (commercePatterns.test(item.action || '') || String(item.method).toLowerCase() === 'post')
  );

  return { activePurchase, activeCheckoutCustomer, hashLinks, searchForms, unsafeForms };
}

async function inspectRoute({ page, route, viewport, screenshotsDir, timestamp }) {
  const url = `${STORE_ORIGIN}${route.path}`;
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(1000);

  const onPasswordGate = await isPasswordGate(page);
  const title = normalizeText(await page.title());
  const bodyText = normalizeText(await page.locator('body').innerText());
  const commerce = await detectCommerce(page);

  const queryInTitle = route.query ? new RegExp(route.query, 'i').test(bodyText.slice(0, 1200)) : false;
  const queryInSummary =
    route.query && /search-summary-copy/i.test(await page.locator('.search-summary-copy').innerHTML().catch(() => ''))
      ? new RegExp(route.query, 'i').test(await page.locator('.search-summary-copy').innerText().catch(() => ''))
      : route.query
        ? new RegExp(route.query, 'i').test(bodyText)
        : false;

  const staticDemoPresent = staticDemoPatterns.some((pattern) => pattern.test(bodyText));
  const startPrompt = /Start a preview search/i.test(bodyText);
  const noMatchHonest =
    /No preview matches|No preview products matched/i.test(bodyText) &&
    /Try another preview search/i.test(bodyText);
  const previewWording =
    /preview search|not a public launch|not the full catalogue|not final|purchase.*disabled|remain disabled/i.test(
      bodyText
    );
  const liveCards = await page.locator('.product-card--live').count();
  const staticFilledCards = await page
    .locator('.search-results-grid .product-card:not(.product-card--live)')
    .count();
  const inputValue = await page.locator('#SearchPageQuery').inputValue().catch(() => '');
  const horizontalOverflow = await page.evaluate(() => {
    const doc = document.documentElement;
    return doc.scrollWidth > doc.clientWidth + 2;
  });

  const viewProductLinks = await page.locator('a.add-btn--browse').evaluateAll((nodes) =>
    nodes.map((node) => ({
      text: (node.textContent || '').trim(),
      href: node.getAttribute('href') || '',
      disabled: node.hasAttribute('disabled')
    }))
  );

  const notes = [];
  if (onPasswordGate) notes.push('password-gate');
  if (staticDemoPresent) notes.push('static-demo-still-present');
  if (route.expectPerformed && route.query && !queryInSummary && !queryInTitle) notes.push('query-not-visible');
  if (route.expectPerformed === false && !startPrompt) notes.push('missing-start-prompt');
  if (route.expectEmpty && !noMatchHonest) notes.push('missing-no-match-copy');
  if (route.expectEmpty && (liveCards > 0 || staticFilledCards > 0)) notes.push('fake-results-on-no-match');
  if (route.key === 'organiser' && staticFilledCards > 0) notes.push('static-cards-on-organiser');
  if (!previewWording) notes.push('missing-preview-wording');
  if (commerce.activePurchase.length > 0) notes.push('active-purchase-control');
  if (commerce.activeCheckoutCustomer.length > 0) notes.push('active-checkout-customer-link');
  if (commerce.hashLinks.length > 0) notes.push('active-hash-link');
  if (commerce.unsafeForms.length > 0) notes.push('unsafe-form');
  if (horizontalOverflow) notes.push('horizontal-overflow');

  let verdict = 'PASS';
  if (onPasswordGate) verdict = 'BLOCKED';
  else if (notes.some((n) => n.startsWith('active-') || n === 'static-demo-still-present' || n === 'unsafe-form')) {
    verdict = 'FAIL';
  } else if (
    notes.length > 0 ||
    (route.key === 'organiser' && liveCards === 0 && !/No preview products matched/i.test(bodyText))
  ) {
    verdict = 'PASS WITH NOTES';
  }

  const screenshotName = `${route.key}-${viewport.key}-${timestamp}.png`;
  await page.screenshot({ path: path.join(screenshotsDir, screenshotName), fullPage: true });

  return {
    route: route.path,
    routeKey: route.key,
    viewport: viewport.key,
    finalUrl: page.url(),
    title,
    unlocked: !onPasswordGate,
    queryInTitle,
    queryInSummary,
    inputValue,
    liveCards,
    staticFilledCards,
    staticDemoPresent,
    startPrompt,
    noMatchHonest,
    previewWording,
    viewProductLinks,
    horizontalOverflow,
    notes,
    verdict,
    bodySnippet: bodyText.slice(0, 320)
  };
}

function computeOverall(results, unlockVerified) {
  if (!unlockVerified) return 'INCONCLUSIVE';
  const unlocked = results.filter((r) => r.unlocked);
  if (unlocked.some((r) => r.verdict === 'FAIL')) return 'FAIL';
  if (unlocked.some((r) => r.verdict === 'PASS WITH NOTES')) return 'PASS WITH NOTES';
  if (unlocked.every((r) => r.verdict === 'PASS')) return 'PASS';
  return 'INCONCLUSIVE';
}

async function main() {
  if (!args.has('--manual-unlock')) {
    console.error('Re-run with --manual-unlock');
    process.exit(2);
  }

  const requireFromHere = createRequire(import.meta.url);
  let playwright;
  try {
    playwright = requireFromHere('playwright');
  } catch {
    console.error('BLOCKED: Playwright not installed');
    process.exit(2);
  }

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').replace('T', '-').slice(0, 15);
  const runDir = path.join(evidenceRoot, timestamp);
  const screenshotsDir = path.join(runDir, 'screenshots');
  await fsp.mkdir(screenshotsDir, { recursive: true });

  const browser = await playwright.chromium.launch({ headless: false });
  const results = [];

  try {
    const page = await browser.newPage({ viewport: { width: 1366, height: 768 } });
    await waitForManualUnlock(page);

    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      for (const route of routes) {
        const result = await inspectRoute({ page, route, viewport, screenshotsDir, timestamp });
        results.push(result);
        console.log(`${result.verdict} | ${result.viewport} | ${result.routeKey} | ${result.notes.join(', ') || 'ok'}`);
      }
    }

    const overallVerdict = computeOverall(results, true);
    const summary = {
      overallVerdict,
      previewThemeId: PREVIEW_THEME_ID,
      implementationCommit: 'ab1de735cd05054e09a9477d17e81dfa99bbdac5',
      syncCommit: 'fdab470b4a9b2a48b15a1b019fe2353ebb68a8d0',
      unlockMode: 'manual',
      timestamp,
      results
    };
    await fsp.writeFile(path.join(runDir, 'summary.json'), `${JSON.stringify(summary, null, 2)}\n`);
    await fsp.writeFile(
      path.join(runDir, 'notes.md'),
      [
        '# Slice 21CB search rendered validation',
        '',
        `- Verdict: ${overallVerdict}`,
        `- Theme: ${PREVIEW_THEME_ID}`,
        `- Unlock: manual`,
        `- Routes: organiser, no-match, no-query`,
        `- Viewports: desktop 1366x768, mobile 390x844`
      ].join('\n')
    );
    console.log('');
    console.log(`Overall: ${overallVerdict}`);
    console.log(`Evidence: ${runDir}`);
    if (overallVerdict === 'FAIL') process.exitCode = 1;
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(2);
});
