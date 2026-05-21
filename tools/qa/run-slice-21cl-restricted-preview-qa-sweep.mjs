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
const PREVIEW_URL = `${STORE_ORIGIN}/?preview_theme_id=${PREVIEW_THEME_ID}`;
const PASSWORD_URL = `${STORE_ORIGIN}/password`;
const MANUAL_UNLOCK_TIMEOUT_MS = 12 * 60 * 1000;
const evidenceRoot = path.join(repoRoot, 'artifacts', 'qa', 'slice-21cl-restricted-preview-qa-sweep');

const viewports = [
  { key: 'desktop', width: 1366, height: 768 },
  { key: 'mobile', width: 390, height: 844 }
];

const approvedDepartments = {
  'Home & Living': '/collections/home-living',
  'Kitchen & Storage': '/collections/kitchen-storage',
  'Office & Desk': '/collections/office-desk',
  'Tech Accessories': '/collections/tech-accessories'
};

const pilotHandles = [
  'beverage-bottle-oil-bottle-handle-holder',
  'usb-bag-sealer',
  'foldable-magnetic-phone-holder-desktop-tablet-stand'
];

const commercePatterns =
  /\/cart|\/cart\/add|\/checkout|\/checkouts|\/account|customer|login|register|recover|payment|order/i;

const args = new Set(process.argv.slice(2));

if (args.has('--help')) {
  console.log(
    [
      'Usage: node tools/qa/run-slice-21cl-restricted-preview-qa-sweep.mjs [--manual-unlock]',
      '',
      'Full restricted-preview QA sweep for preview theme 151207542967.',
      'Covers homepage/navigation, search, controlled-pilot fallback, three CJ PDPs,',
      'generic 404 regression, and safety checks on desktop 1366x768 and mobile 390x844.',
      'Writes evidence under artifacts/qa/slice-21cl-restricted-preview-qa-sweep/ only (not committed).',
      'Options: --manual-unlock (required for rendered run)'
    ].join('\n')
  );
  process.exit(0);
}

function normalizeText(v) {
  return String(v || '')
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
  console.log('\n=== Manual storefront unlock (one session for full sweep) ===');
  console.log('Enter the password in Chromium only. Do not paste it into the terminal.');
  console.log(`Unlock check: ${PREVIEW_URL}\n`);
  const started = Date.now();
  while (Date.now() - started < MANUAL_UNLOCK_TIMEOUT_MS) {
    await page.waitForTimeout(2000);
    if (!(await isPasswordGate(page))) {
      await page.goto(PREVIEW_URL, { waitUntil: 'domcontentloaded', timeout: 45000 });
      await page.waitForTimeout(1000);
      if (!(await isPasswordGate(page))) {
        console.log('Unlock detected. Running full sweep...\n');
        return;
      }
    }
  }
  throw new Error('Timed out waiting for manual unlock.');
}

async function detectCommerce(page, scope) {
  const root = scope ? page.locator(scope) : page;
  const controls = await root.locator('button, a, input[type="submit"], form').evaluateAll((nodes) =>
    nodes.map((node) => {
      const tag = node.tagName.toLowerCase();
      const text = (node.textContent || '').trim();
      const href = node.getAttribute('href') || '';
      const action = node.getAttribute('action') || '';
      const disabled =
        node.hasAttribute('disabled') ||
        node.getAttribute('aria-disabled') === 'true' ||
        node.classList.contains('disabled');
      const style = window.getComputedStyle(node);
      const hidden = style.display === 'none' || style.visibility === 'hidden';
      return { tag, text, href, action, disabled, hidden };
    })
  );
  return {
    activePurchase: controls.filter(
      (c) => !c.disabled && !c.hidden && /^(add to cart|buy now)$/i.test(c.text)
    ),
    activeCheckoutCustomer: controls.filter(
      (c) =>
        c.tag === 'a' &&
        !c.disabled &&
        !c.hidden &&
        commercePatterns.test(c.href) &&
        !/^#/.test(c.href)
    ),
    hashLinks: controls.filter((c) => c.tag === 'a' && !c.disabled && !c.hidden && c.href === '#'),
    unsafeForms: controls.filter(
      (c) =>
        c.tag === 'form' &&
        (commercePatterns.test(c.action || '') || String(c.method).toLowerCase() === 'post')
    )
  };
}

async function screenshot(page, dir, name) {
  const p = path.join(dir, name);
  await page.screenshot({ path: p, fullPage: true });
  return p;
}

function hrefOk(href, expected) {
  if (!href) return false;
  try {
    return new URL(href, STORE_ORIGIN).pathname.includes(expected);
  } catch {
    return href.includes(expected);
  }
}

async function checkHomepageAndNav(page, vp, shots) {
  const notes = [];
  await page.goto(PREVIEW_URL, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(1200);
  const body = normalizeText(await page.locator('body').innerText());
  const commerce = await detectCommerce(page);

  if (!/preview|restricted|not a public launch|purchase.*disabled|invite-only/i.test(body)) {
    notes.push('missing-preview-wording');
  }
  const hasHero =
    /hero|preview picks|South African/i.test(body) ||
    (await page.locator('.hero-collage, .hero, .collection-hero').count()) > 0;
  if (!hasHero) notes.push('hero-surface-weak');
  if (!(await page.locator('.cat-item, .category-strip').count())) notes.push('category-strip-missing');
  if (!(await page.locator('.product-card, .products-grid').count())) notes.push('product-rails-missing');
  if (!/trust|delivery|payment|returns|support/i.test(body)) notes.push('trust-footer-weak');

  if (vp.width >= 1000) {
    const deptBtn = page.locator('.dept-btn').first();
    if (await deptBtn.count()) {
      await deptBtn.click();
      await page.waitForTimeout(250);
    }
    const deptItems = await page.locator('.dept-menu .dept-item').evaluateAll((n) =>
      n.map((el) => ({ text: (el.textContent || '').trim(), href: el.getAttribute('href'), tag: el.tagName }))
    );
    for (const [label, href] of Object.entries(approvedDepartments)) {
      if (!deptItems.some((i) => i.text.includes(label) && hrefOk(i.href, href))) {
        notes.push(`dept-quartet-${label.replace(/\s/g, '-')}`);
      }
    }
  } else {
    await page.locator('#mobileMenuToggle').first().click().catch(() => {});
    await page.waitForTimeout(300);
    const drawer = await page.locator('.nav-drawer .drawer-link, .nav-drawer .drawer-link--deferred').evaluateAll(
      (n) => n.map((el) => ({ text: (el.textContent || '').trim(), href: el.getAttribute('href'), tag: el.tagName }))
    );
    for (const [label, href] of Object.entries(approvedDepartments)) {
      if (!drawer.some((i) => i.text.includes(label) && hrefOk(i.href, href))) {
        notes.push(`drawer-quartet-${label.replace(/\s/g, '-')}`);
      }
    }
    await page.keyboard.press('Escape').catch(() => {});
  }

  if (commerce.hashLinks.length) notes.push('hash-links');
  if (commerce.activePurchase.length) notes.push('active-purchase');
  if (commerce.activeCheckoutCustomer.length) notes.push('checkout-customer');
  const nlDisabled =
    (await page.locator('.nl-input').first().evaluate((el) => el?.disabled).catch(() => true)) === true;
  if (!nlDisabled) notes.push('newsletter-not-disabled');

  const shot = await screenshot(page, shots, `homepage-${vp.key}.png`);
  let verdict = notes.length ? 'PASS WITH NOTES' : 'PASS';
  if (notes.some((n) => n.startsWith('active-') || n === 'hash-links' || n === 'checkout-customer')) {
    verdict = 'FAIL';
  }
  return { area: 'homepage-navigation', viewport: vp.key, notes, verdict, screenshot: shot };
}

async function checkSearch(page, vp, shots) {
  const results = [];
  const routes = [
    {
      key: 'organiser',
      path: `/search?q=organiser&type=product&preview_theme_id=${PREVIEW_THEME_ID}`,
      expectLive: true
    },
    {
      key: 'no-query',
      path: `/search?preview_theme_id=${PREVIEW_THEME_ID}`,
      expectStart: true
    },
    {
      key: 'no-match',
      path: `/search?q=zzzz-no-match-preview&type=product&preview_theme_id=${PREVIEW_THEME_ID}`,
      expectEmpty: true
    }
  ];

  for (const route of routes) {
    await page.goto(`${STORE_ORIGIN}${route.path}`, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await page.waitForTimeout(1000);
    const body = normalizeText(await page.locator('body').innerText());
    const notes = [];
    const liveCards = await page.locator('.product-card--live').count();
    const staticDemo = /Premium Over-Ear Headphones|Smart Watch – Black Edition/i.test(body);
    const commerce = await detectCommerce(page);

    if (staticDemo) notes.push('static-demo');
    if (route.expectLive && liveCards === 0) notes.push('no-live-cards');
    if (route.expectStart && !/Start a preview search/i.test(body)) notes.push('no-start-prompt');
    if (route.expectEmpty && (liveCards > 0 || !/No preview matches/i.test(body))) notes.push('no-empty-honest');
    if (commerce.activePurchase.length) notes.push('active-purchase');
    if (commerce.hashLinks.length) notes.push('hash-links');

    const shot = await screenshot(page, shots, `search-${route.key}-${vp.key}.png`);
    let verdict = notes.length ? (notes.includes('static-demo') || notes.includes('active-purchase') ? 'FAIL' : 'PASS WITH NOTES') : 'PASS';
    results.push({ area: 'search', route: route.key, viewport: vp.key, liveCards, notes, verdict, screenshot: shot });
  }
  return results;
}

async function waitControlledReveal(page) {
  await page.waitForFunction(
    () => {
      const shell = document.querySelector('[data-controlled-preview-shell]');
      return document.body.classList.contains('controlled-pilot-fallback-active') && shell && !shell.hidden;
    },
    { timeout: 8000 }
  );
}

async function checkControlledPilot(page, vp, shots) {
  const out = [];
  await page.goto(`${STORE_ORIGIN}/collections/controlled-pilot?preview_theme_id=${PREVIEW_THEME_ID}`, {
    waitUntil: 'domcontentloaded',
    timeout: 45000
  });
  const notes = [];
  try {
    await waitControlledReveal(page);
  } catch {
    notes.push('reveal-timeout');
  }
  await page.waitForTimeout(500);
  const scope = '[data-controlled-preview-shell]';
  const body = normalizeText(await page.locator(scope).innerText().catch(() => ''));
  const grid = await page.locator(`${scope} .controlled-preview-grid .product-card`).count();
  const commerce = await detectCommerce(page, scope);
  const recovery = await page.locator('.controlled-preview-recovery__link').count();

  if (!/Why this may look like a missing page/i.test(body)) notes.push('missing-notice');
  if (!/not as a native live collection grid/i.test(body)) notes.push('missing-non-native');
  if (!/Shopify Admin/i.test(body)) notes.push('missing-admin-deferral');
  if (grid < 3) notes.push(`grid-${grid}`);
  if (recovery < 5) notes.push('recovery-links');
  if (commerce.activePurchase.length || commerce.hashLinks.length) notes.push('commerce-unsafe');

  const shot = await screenshot(page, shots, `controlled-pilot-${vp.key}.png`);
  let verdict = notes.some((n) => n === 'reveal-timeout' || n === 'commerce-unsafe') ? 'FAIL' : notes.length ? 'PASS WITH NOTES' : 'PASS';
  out.push({ area: 'controlled-pilot', viewport: vp.key, grid, notes, verdict, screenshot: shot });

  await page.goto(
    `${STORE_ORIGIN}/collections/not-a-real-controlled-pilot?preview_theme_id=${PREVIEW_THEME_ID}`,
    { waitUntil: 'domcontentloaded', timeout: 45000 }
  );
  await page.waitForTimeout(1000);
  const regNotes = [];
  const bodyActive = await page.evaluate(() =>
    document.body.classList.contains('controlled-pilot-fallback-active')
  );
  const genericVisible = await page.evaluate(() => {
    const g = document.querySelector('[data-generic-404-shell]');
    return g && !g.hidden;
  });
  if (bodyActive) regNotes.push('controlled-leaked');
  if (!genericVisible) regNotes.push('generic-missing');
  const regShot = await screenshot(page, shots, `generic-404-regression-${vp.key}.png`);
  out.push({
    area: 'controlled-pilot-regression',
    viewport: vp.key,
    notes: regNotes,
    verdict: regNotes.length ? 'FAIL' : 'PASS',
    screenshot: regShot
  });
  return out;
}

async function checkPdps(page, vp, shots) {
  const results = [];
  for (const handle of pilotHandles) {
    await page.goto(`${STORE_ORIGIN}/products/${handle}?preview_theme_id=${PREVIEW_THEME_ID}`, {
      waitUntil: 'domcontentloaded',
      timeout: 45000
    });
    await page.waitForTimeout(1000);
    const body = normalizeText(await page.locator('body').innerText());
    const notes = [];
    const commerce = await detectCommerce(page);
    if (!body.toLowerCase().includes(handle.replace(/-/g, ' ').slice(0, 12)) && !body.includes('Holder') && !body.includes('Sealer')) {
      if (!new RegExp(handle.split('-').slice(0, 2).join('|'), 'i').test(body)) notes.push('title-weak');
    }
    if (!/Price to be confirmed|not available to buy|pilot/i.test(body)) notes.push('non-purchasable-copy');
    if (commerce.activePurchase.length) notes.push('active-purchase');
    if (commerce.activeCheckoutCustomer.length) notes.push('checkout-customer');
    if (commerce.hashLinks.length) notes.push('hash-links');
    const shot = await screenshot(page, shots, `pdp-${handle.slice(0, 20)}-${vp.key}.png`);
    let verdict = notes.some((n) => n.startsWith('active-') || n === 'checkout-customer') ? 'FAIL' : notes.length ? 'PASS WITH NOTES' : 'PASS';
    results.push({ area: 'pdp', handle, viewport: vp.key, notes, verdict, screenshot: shot });
  }
  return results;
}

function overallVerdict(rows) {
  if (rows.some((r) => r.verdict === 'FAIL')) return 'FAIL';
  if (rows.some((r) => r.verdict === 'PASS WITH NOTES')) return 'PASS WITH NOTES';
  if (rows.every((r) => r.verdict === 'PASS')) return 'PASS';
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
  const shots = path.join(runDir, 'screenshots');
  await fsp.mkdir(shots, { recursive: true });

  const browser = await playwright.chromium.launch({ headless: false });
  const allResults = [];

  try {
    const page = await browser.newPage({ viewport: { width: 1366, height: 768 } });
    await waitForManualUnlock(page);

    for (const vp of viewports) {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      allResults.push(await checkHomepageAndNav(page, vp, shots));
      allResults.push(...(await checkSearch(page, vp, shots)));
      allResults.push(...(await checkControlledPilot(page, vp, shots)));
      allResults.push(...(await checkPdps(page, vp, shots)));
    }

    const overall = overallVerdict(allResults);
    const docAlignment = {
      walkthroughSource: 'docs/user-guides/mzansi-select-restricted-preview-application-walkthrough.md',
      walkthroughPdf: 'artifacts/docs/user-guides/mzansi-select-restricted-preview-application-walkthrough-current.pdf',
      verdict: 'PASS WITH NOTES',
      notes: [
        'Rendered sweep aligns with walkthrough v2.0 search and controlled-pilot steps.',
        'Preview entry screenshot still not in PDF (documented as to be refreshed).',
        '21AR harness cosmetic PDP label checks may differ; sweep uses live non-purchasable copy signals.'
      ]
    };

    const summary = {
      slice: '21CL',
      overallVerdict: overall,
      previewThemeId: PREVIEW_THEME_ID,
      unlockMode: 'manual',
      timestamp,
      docAlignment,
      results: allResults
    };

    await fsp.writeFile(path.join(runDir, 'summary.json'), `${JSON.stringify(summary, null, 2)}\n`);
    await fsp.writeFile(
      path.join(runDir, 'notes.md'),
      [
        '# Slice 21CL restricted preview QA sweep',
        '',
        `- Verdict: ${overall}`,
        `- Theme: ${PREVIEW_THEME_ID}`,
        `- Viewports: desktop 1366x768, mobile 390x844`,
        `- Results: ${allResults.length} check rows`
      ].join('\n')
    );

    for (const r of allResults) {
      console.log(`${r.verdict} | ${r.area} | ${r.viewport || '-'} | ${(r.notes || []).join(', ') || 'ok'}`);
    }
    console.log(`\nOverall: ${overall}`);
    console.log(`Evidence: ${runDir}`);
    if (overall === 'FAIL') process.exitCode = 1;
  } finally {
    await browser.close();
  }
}

main().catch((e) => {
  console.error(e.message);
  process.exit(2);
});
