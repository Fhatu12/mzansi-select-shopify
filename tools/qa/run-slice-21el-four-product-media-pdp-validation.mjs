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
const evidenceRoot = path.join(repoRoot, 'artifacts', 'qa', 'slice-21el-four-product-media-pdp-validation');

const localHandles = [
  {
    key: 'DW-TA-01',
    handle: 'cable-tidies-set',
    titlePattern: /Cable Tidies Set.*Preview/i,
    route: 'R3'
  },
  {
    key: 'DW-HL-02',
    handle: 'five-division-drawer-divider-preview',
    titlePattern: /5-Division Drawer Divider.*Preview/i,
    route: 'R2'
  },
  {
    key: 'DW-KS-04',
    handle: 'compact-cutlery-drawer-organiser-preview',
    titlePattern: /Compact Cutlery Drawer Organiser.*Preview/i,
    route: 'R3'
  },
  {
    key: 'DW-OD-05',
    handle: 'adjustable-aluminium-phone-tablet-stand-preview',
    titlePattern: /Adjustable Aluminium Phone.*Tablet Stand.*Preview/i,
    route: 'R2'
  }
];

const viewports = [
  { key: 'desktop', width: 1366, height: 768 },
  { key: 'mobile', width: 390, height: 844 }
];

const commercePatterns =
  /\/cart|\/cart\/add|\/checkout|\/checkouts|\/account|customer|login|register|recover|payment|order/i;

const blockedClaimPatterns =
  /supplier verified|fits all drawers|fits all kitchens|universal fit|magsafe|food-safe|food grade|heavy duty|guaranteed delivery|always in stock|warranty included/i;

function hasUnsafeNumericDelivery(text) {
  if (/will be confirmed|must be confirmed|to be confirmed|not final|before fulfilment|timing varies/i.test(text)) {
    return false;
  }
  return /\b\d+\s*(?:–|-|to)\s*\d+\s*(?:day|business)/i.test(text);
}

const args = new Set(process.argv.slice(2));

if (args.has('--help')) {
  console.log(
    [
      'Usage: node tools/qa/run-slice-21el-four-product-media-pdp-validation.mjs --manual-unlock',
      '',
      'Slice 21EL — four local-first PDP media validation (post 21EJ).',
      'Preview theme 151207542967. Desktop 1366x768 + mobile 390x844.',
      'Requires --manual-unlock. No passwords/HAR/trace/video/storageState stored.'
    ].join('\n')
  );
  process.exit(0);
}

function resolvePlaywright() {
  const require = createRequire(import.meta.url);
  try {
    return require('playwright');
  } catch {
    throw new Error('Playwright not installed.');
  }
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
  console.log('\n=== Manual storefront unlock (Slice 21EL) ===');
  console.log('Enter the password in Chromium only. Do not paste into terminal.');
  console.log(`Unlock check: ${UNLOCK_CHECK_URL}\n`);
  const started = Date.now();
  while (Date.now() - started < MANUAL_UNLOCK_TIMEOUT_MS) {
    await page.waitForTimeout(2000);
    if (!(await isPasswordGate(page))) {
      await page.goto(UNLOCK_CHECK_URL, { waitUntil: 'domcontentloaded', timeout: 45000 });
      await page.waitForTimeout(1000);
      if (!(await isPasswordGate(page))) {
        console.log('Unlock detected.\n');
        return;
      }
    }
  }
  throw new Error('Timed out waiting for manual unlock.');
}

async function detectCommerce(page) {
  const controls = await page.locator('button, a, input[type="submit"], form').evaluateAll((nodes) =>
    nodes.map((node) => {
      const tag = node.tagName.toLowerCase();
      const text = (node.textContent || '').trim();
      const href = node.getAttribute('href') || '';
      const disabled =
        node.hasAttribute('disabled') ||
        node.getAttribute('aria-disabled') === 'true' ||
        node.classList.contains('disabled');
      const style = window.getComputedStyle(node);
      const hidden = style.display === 'none' || style.visibility === 'hidden';
      return { tag, text, href, disabled, hidden };
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
    )
  };
}

async function inspectPdp(page, handleMeta, viewport, shotsDir) {
  const url = `${STORE_ORIGIN}/products/${handleMeta.handle}?preview_theme_id=${PREVIEW_THEME_ID}`;
  const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(1500);

  if (await isPasswordGate(page)) {
    return {
      area: 'pdp',
      launchId: handleMeta.key,
      handle: handleMeta.handle,
      viewport: viewport.key,
      url,
      httpStatus: response?.status() ?? null,
      verdict: 'INCONCLUSIVE',
      notes: ['password-gate'],
      screenshot: null
    };
  }

  const body = normalizeText(await page.locator('body').innerText());
  const commerce = await detectCommerce(page);
  const productScope = page
    .locator(
      '.product, .product__info, .product-single, [data-product-detail], main .shopify-section--main-product, main'
    )
    .first();
  const scopeText = normalizeText(await productScope.innerText().catch(() => body));
  const descLocator = page.locator(
    '.product__description, .product-description, [data-product-description], .product .rte, main .rte'
  );
  const descriptionText =
    (await descLocator.count()) > 0 ? normalizeText(await descLocator.first().innerText()) : '';

  const notes = [];
  if (!handleMeta.titlePattern.test(scopeText)) notes.push('title-mismatch');
  if (/supplier verified/i.test(scopeText)) notes.push('supplier-verified');
  if (
    !/price to be confirmed|not available to buy|preview item|supplier proof in progress|to be confirmed/i.test(
      scopeText
    )
  ) {
    notes.push('non-purchasable-copy-weak');
  }
  if (descriptionText && hasUnsafeNumericDelivery(descriptionText)) notes.push('numeric-delivery-promise');
  if (descriptionText && blockedClaimPatterns.test(descriptionText)) notes.push('blocked-claim-phrase');
  if (commerce.activePurchase.length) notes.push('active-purchase');
  if (commerce.activeCheckoutCustomer.length) notes.push('checkout-customer');

  const themePlaceholder = await page.locator('.product-gallery-placeholder, .product-gallery-main svg').count();
  if (themePlaceholder > 0) notes.push('theme-placeholder-active');

  const productImages = await page
    .locator(
      '.product-gallery-main img, .product-gallery-strip img, .product__media img, .product-gallery img, [data-product-media] img'
    )
    .evaluateAll((imgs) =>
      imgs.map((img) => ({
        src: img.getAttribute('src') || '',
        alt: (img.getAttribute('alt') || '').trim(),
        naturalWidth: img.naturalWidth,
        complete: img.complete,
        visible: window.getComputedStyle(img).display !== 'none' && img.offsetWidth > 0
      }))
    )
    .catch(() => []);

  const shopifyMedia = productImages.filter(
    (img) =>
      img.visible &&
      img.naturalWidth > 80 &&
      /cdn\.shopify\.com/i.test(img.src) &&
      /\/files\//i.test(img.src)
  );
  const decorativePlaceholder = productImages.filter(
    (img) => img.visible && /decorative-placeholder|placeholder\.svg/i.test(img.src)
  );

  if (shopifyMedia.length === 0) notes.push('no-shopify-product-media');
  if (shopifyMedia.length === 0 && (themePlaceholder > 0 || decorativePlaceholder.length > 0)) {
    notes.push('theme-catalog-media-suppressed');
  }
  if (shopifyMedia.length > 1) notes.push(`gallery-count-${shopifyMedia.length}`);

  const hero = shopifyMedia[0];
  if (hero) {
    if (!hero.complete || hero.naturalWidth < 80) notes.push('hero-broken-or-small');
    if (handleMeta.handle === 'cable-tidies-set' && /100\s*pcs/i.test(hero.alt)) {
      notes.push('alt-100pcs-overclaim');
    }
  }

  const mediaScopeText = normalizeText(
    await page.locator('.product__media, .product-gallery, [data-product-media]').innerText().catch(() => '')
  );
  if (handleMeta.handle === 'cable-tidies-set' && /100\s*pcs/i.test(mediaScopeText)) {
    notes.push('media-scope-100pcs-text');
  }

  const overflow = await page.evaluate(() => ({
    doc: document.documentElement.scrollWidth > document.documentElement.clientWidth + 2,
    body: document.body.scrollWidth > document.body.clientWidth + 2
  }));
  if (viewport.key === 'mobile' && (overflow.doc || overflow.body)) notes.push('horizontal-overflow');

  const shotName = `pdp-${handleMeta.handle.slice(0, 36)}-${viewport.key}.png`;
  const shotPath = path.join(shotsDir, shotName);
  await page.screenshot({ path: shotPath, fullPage: false });

  const failNotes = [
    'password-gate',
    'active-purchase',
    'checkout-customer',
    'supplier-verified',
    'no-shopify-product-media',
    'theme-placeholder-only',
    'theme-catalog-media-suppressed',
    'hero-broken-or-small',
    'alt-100pcs-overclaim',
    'numeric-delivery-promise',
    'blocked-claim-phrase',
    'horizontal-overflow'
  ];
  let verdict = 'PASS';
  if (notes.some((n) => failNotes.includes(n))) verdict = 'FAIL';
  else if (notes.length) verdict = 'PASS WITH NOTES';

  return {
    area: 'pdp',
    launchId: handleMeta.key,
    handle: handleMeta.handle,
    route: handleMeta.route,
    viewport: viewport.key,
    url,
    httpStatus: response?.status() ?? null,
    shopifyMediaCount: shopifyMedia.length,
    themePlaceholderCount: themePlaceholder.length,
    heroAlt: hero?.alt?.slice(0, 120) ?? null,
    commerce,
    overflow,
    notes,
    verdict,
    screenshot: path.relative(repoRoot, shotPath)
  };
}

async function quickRegression(page, viewport, shotsDir) {
  const rows = [];

  await page.goto(`${STORE_ORIGIN}/?preview_theme_id=${PREVIEW_THEME_ID}`, {
    waitUntil: 'domcontentloaded',
    timeout: 45000
  });
  await page.waitForTimeout(800);
  const homeNotes = [];
  const homeCommerce = await detectCommerce(page);
  if (homeCommerce.activePurchase.length) homeNotes.push('active-purchase');
  const homeShot = path.join(shotsDir, `homepage-${viewport.key}.png`);
  await page.screenshot({ path: homeShot, fullPage: false });
  rows.push({
    area: 'homepage-regression',
    viewport: viewport.key,
    notes: homeNotes,
    verdict: homeNotes.includes('active-purchase') ? 'FAIL' : 'PASS',
    screenshot: path.relative(repoRoot, homeShot)
  });

  for (const q of ['cable', 'organiser', 'drawer divider']) {
    await page.goto(
      `${STORE_ORIGIN}/search?q=${encodeURIComponent(q)}&type=product&preview_theme_id=${PREVIEW_THEME_ID}`,
      { waitUntil: 'domcontentloaded', timeout: 45000 }
    );
    await page.waitForTimeout(800);
    const searchNotes = [];
    const liveCards = await page.locator('.product-card--live').count();
    if (liveCards === 0) searchNotes.push('no-live-cards');
    const searchCommerce = await detectCommerce(page);
    if (searchCommerce.activePurchase.length) searchNotes.push('active-purchase');
    if (/supplier verified/i.test(normalizeText(await page.locator('body').innerText()))) {
      searchNotes.push('supplier-verified');
    }
    const searchShot = path.join(shotsDir, `search-${q.replace(/\s+/g, '-')}-${viewport.key}.png`);
    await page.screenshot({ path: searchShot, fullPage: false });
    rows.push({
      area: `search-${q}-regression`,
      viewport: viewport.key,
      liveCards,
      notes: searchNotes,
      verdict: searchNotes.some((n) => ['active-purchase', 'supplier-verified'].includes(n))
        ? 'FAIL'
        : searchNotes.length
          ? 'PASS WITH NOTES'
          : 'PASS',
      screenshot: path.relative(repoRoot, searchShot)
    });
  }

  await page.goto(`${STORE_ORIGIN}/collections/controlled-pilot?preview_theme_id=${PREVIEW_THEME_ID}`, {
    waitUntil: 'domcontentloaded',
    timeout: 45000
  });
  await page.waitForTimeout(800);
  const cpNotes = [];
  try {
    await page.waitForFunction(
      () => {
        const shell = document.querySelector('[data-controlled-preview-shell]');
        return document.body.classList.contains('controlled-pilot-fallback-active') && shell && !shell.hidden;
      },
      { timeout: 8000 }
    );
  } catch {
    cpNotes.push('reveal-timeout');
  }
  const grid = await page.locator('[data-controlled-preview-shell] .controlled-preview-grid .product-card').count();
  if (grid < 3) cpNotes.push(`grid-${grid}`);
  const cpCommerce = await detectCommerce(page);
  if (cpCommerce.activePurchase.length) cpNotes.push('active-purchase');
  const cpShot = path.join(shotsDir, `controlled-pilot-${viewport.key}.png`);
  await page.screenshot({ path: cpShot, fullPage: false });
  rows.push({
    area: 'controlled-pilot-regression',
    viewport: viewport.key,
    grid,
    notes: cpNotes,
    verdict: cpNotes.includes('reveal-timeout') || cpNotes.includes('active-purchase') ? 'FAIL' : cpNotes.length ? 'PASS WITH NOTES' : 'PASS',
    screenshot: path.relative(repoRoot, cpShot)
  });

  const overflow = await page.evaluate(() => ({
    doc: document.documentElement.scrollWidth > document.documentElement.clientWidth + 2
  }));
  if (viewport.key === 'mobile' && overflow.doc) {
    rows.push({
      area: 'controlled-pilot-overflow',
      viewport: viewport.key,
      notes: ['horizontal-overflow'],
      verdict: 'FAIL'
    });
  }

  return rows;
}

function overallVerdict(rows) {
  if (rows.some((r) => r.verdict === 'FAIL')) return 'FAIL';
  if (rows.some((r) => r.verdict === 'INCONCLUSIVE')) return 'INCONCLUSIVE';
  if (rows.some((r) => r.verdict === 'PASS WITH NOTES')) return 'PASS WITH NOTES';
  return 'PASS';
}

async function main() {
  if (!args.has('--manual-unlock')) {
    console.error('BLOCKED: --manual-unlock is required.');
    process.exit(2);
  }

  const playwright = resolvePlaywright();
  const timestamp = new Date().toISOString().replace(/[:]/g, '').replace(/\..+/, '').replace('T', '-');
  const runDir = path.join(evidenceRoot, timestamp);
  const shotsDir = path.join(runDir, 'screenshots');
  await fsp.mkdir(shotsDir, { recursive: true });

  const browser = await playwright.chromium.launch({
    headless: false,
    args: ['--disable-dev-shm-usage']
  });

  const checks = [];

  try {
    const context = await browser.newContext({ viewport: { width: 1366, height: 768 } });
    const page = await context.newPage();
    await waitForManualUnlock(page);

    for (const vp of viewports) {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      for (const h of localHandles) {
        checks.push(await inspectPdp(page, h, vp, shotsDir));
      }
      checks.push(...(await quickRegression(page, vp, shotsDir)));
    }

    const verdict = overallVerdict(checks);
    const summary = {
      slice: '21EL',
      capturedAt: new Date().toISOString(),
      previewThemeId: PREVIEW_THEME_ID,
      unlockMode: 'manual-unlock',
      verdict,
      checks
    };

    await fsp.writeFile(path.join(runDir, 'summary.json'), JSON.stringify(summary, null, 2));
    await fsp.writeFile(
      path.join(runDir, 'notes.md'),
      [
        '# Slice 21EL run notes',
        '',
        `**Verdict:** ${verdict}`,
        `**Captured:** ${summary.capturedAt}`,
        '',
        ...checks.map(
          (c) =>
            `- **${c.area}** ${c.launchId || ''} / ${c.viewport}: **${c.verdict}** — ${c.notes?.join(', ') || 'ok'}${c.shopifyMediaCount != null ? ` (shopifyMedia=${c.shopifyMediaCount})` : ''}`
        )
      ].join('\n')
    );

    console.log(JSON.stringify({ verdict, runDir: path.relative(repoRoot, runDir) }, null, 2));
    process.exit(verdict === 'FAIL' ? 1 : 0);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
