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
const PASSWORD_ENV = 'MZANSI_STOREFRONT_PASSWORD';
const MANUAL_UNLOCK_TIMEOUT_MS = 12 * 60 * 1000;
const evidenceRoot = path.join(repoRoot, 'artifacts', 'qa', 'slice-21cp-decorative-image-validation');

const viewports = [
  { key: 'desktop', width: 1366, height: 768 },
  { key: 'mobile', width: 390, height: 844 }
];

const commercePatterns =
  /\/cart|\/cart\/add|\/checkout|\/checkouts|\/account|customer|login|register|recover|payment|order/i;

const args = new Set(process.argv.slice(2));

if (args.has('--help')) {
  console.log(
    [
      'Usage: node tools/qa/run-slice-21cp-decorative-image-validation.mjs [--manual-unlock]',
      '',
      'Rendered decorative-image validation for preview theme 151207542967 (post Slice 21CO).',
      'Checks hero collage, category strip, promo banner, feature tiles, static-card fallbacks,',
      'responsive overflow, commerce safety, and CJ PDP media gate on desktop 1366x768 and mobile 390x844.',
      'Writes evidence under artifacts/qa/slice-21cp-decorative-image-validation/ only (not committed).',
      'Options: --manual-unlock (required unless MZANSI_STOREFRONT_PASSWORD is set for env unlock)'
    ].join('\n')
  );
  process.exit(0);
}

function resolvePlaywright() {
  const require = createRequire(import.meta.url);
  try {
    return require('playwright');
  } catch {
    throw new Error('Playwright not installed. Run: npm install');
  }
}

async function isPasswordGate(page) {
  if (/\/password(?:[?#]|$)/.test(page.url())) return true;
  const body = (await page.locator('body').innerText().catch(() => '')).replace(/\s+/g, ' ');
  return /enter store using password|store password/i.test(body);
}

async function unlockWithPassword(page, password) {
  await page.goto(PASSWORD_URL, { waitUntil: 'domcontentloaded', timeout: 45000 });
  const input = page.locator('input[type="password"]').first();
  await input.fill(password);
  await page.locator('button[type="submit"], input[type="submit"]').first().click();
  await page.waitForTimeout(2000);
  await page.goto(PREVIEW_URL, { waitUntil: 'domcontentloaded', timeout: 45000 });
}

async function waitForManualUnlock(page) {
  await page.goto(PASSWORD_URL, { waitUntil: 'domcontentloaded', timeout: 45000 });
  console.log('\n=== Manual storefront unlock ===');
  console.log('Enter the password in Chromium only. Do not paste it into the terminal.');
  console.log(`Unlock check: ${PREVIEW_URL}\n`);
  const started = Date.now();
  while (Date.now() - started < MANUAL_UNLOCK_TIMEOUT_MS) {
    await page.waitForTimeout(2000);
    if (!(await isPasswordGate(page))) {
      await page.goto(PREVIEW_URL, { waitUntil: 'domcontentloaded', timeout: 45000 });
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
    ),
    hashLinks: controls.filter((c) => c.tag === 'a' && !c.disabled && !c.hidden && c.href === '#')
  };
}

async function inspectDecorativeImages(page) {
  return page.evaluate(() => {
    const zones = [
      { zone: 'hero-collage', selector: '.hero-visual .decorative-img, .hero-visual .collage-grid img' },
      { zone: 'category-strip', selector: '.cat-icon:not(.svg-only) img.decorative-img, .cat-icon:not(.svg-only) img' },
      { zone: 'promo-banner', selector: '.promo-visual img.decorative-img, .promo-visual img' },
      { zone: 'feature-tiles', selector: '.arrivals-grid img.decorative-img, .arr-card img' },
      {
        zone: 'static-cards',
        selector: '.product-card--static .prod-img img.decorative-img, .product-card--static .prod-img img'
      }
    ];

    const rows = [];
    for (const { zone, selector } of zones) {
      document.querySelectorAll(selector).forEach((img, index) => {
        const src = img.getAttribute('src') || '';
        const alt = (img.getAttribute('alt') || '').trim();
        const loaded = img.complete && img.naturalWidth > 1 && img.naturalHeight > 1;
        const isFallback = /decorative-placeholder\.svg/i.test(src);
        const isBroken = img.complete && img.naturalWidth === 0;
        const isExternal = /^https?:\/\//i.test(src) && !/cdn\.shopify|myshopify/i.test(src);
        rows.push({
          zone,
          index,
          alt,
          loaded,
          isFallback,
          isBroken,
          isExternal,
          srcTail: src.split('/').slice(-2).join('/')
        });
      });
    }

    const overflow =
      document.documentElement.scrollWidth > document.documentElement.clientWidth + 2;

    return { rows, overflow };
  });
}

async function inspectPdpMediaGate(page) {
  await page.goto(
    `${STORE_ORIGIN}/products/beverage-bottle-oil-bottle-handle-holder?preview_theme_id=${PREVIEW_THEME_ID}`,
    { waitUntil: 'domcontentloaded', timeout: 45000 }
  );
  await page.waitForTimeout(1200);
  return page.evaluate(() => {
    const imgs = Array.from(
      document.querySelectorAll(
        '.product-gallery-main img, .product-gallery-strip img, .product-main-shell img[src]'
      )
    );
    const supplierLoaded = imgs.filter((img) => {
      const src = img.getAttribute('src') || '';
      const loaded = img.complete && img.naturalWidth > 1;
      return loaded && src && !/placeholder|decorative-placeholder/i.test(src);
    });
    const placeholderOnly =
      imgs.length === 0 ||
      imgs.every((img) => {
        const src = img.getAttribute('src') || '';
        return (
          !img.complete ||
          img.naturalWidth <= 1 ||
          /placeholder|decorative-placeholder|data:image/i.test(src)
        );
      });
    return {
      supplierCatalogMediaPresent: supplierLoaded.length > 0,
      placeholderOrNoMediaOnly: placeholderOnly,
      imageCount: imgs.length
    };
  });
}

function zoneVerdict(rows, zone) {
  const z = rows.filter((r) => r.zone === zone);
  if (!z.length) return { verdict: 'FAIL', notes: ['missing-images'] };
  const notes = [];
  const broken = z.filter((r) => r.isBroken);
  const unloaded = z.filter((r) => !r.loaded && !r.isFallback);
  const external = z.filter((r) => r.isExternal);
  const fallbacks = z.filter((r) => r.isFallback);
  if (broken.length) notes.push(`broken-${broken.length}`);
  if (unloaded.length) notes.push(`unloaded-${unloaded.length}`);
  if (external.length) notes.push(`external-host`);
  if (fallbacks.length) notes.push(`fallback-svg-${fallbacks.length}`);
  let verdict = 'PASS';
  if (broken.length || unloaded.length || external.length) verdict = 'FAIL';
  else if (fallbacks.length) verdict = 'PASS WITH NOTES';
  return { verdict, notes, count: z.length, fallbacks: fallbacks.length, loaded: z.filter((r) => r.loaded).length };
}

function overallVerdict(checks) {
  if (checks.some((c) => c.verdict === 'FAIL')) return 'FAIL';
  if (checks.some((c) => c.verdict === 'PASS WITH NOTES')) return 'PASS WITH NOTES';
  return 'PASS';
}

async function screenshot(page, dir, name) {
  const p = path.join(dir, name);
  await page.screenshot({ path: p, fullPage: true });
  return path.relative(repoRoot, p);
}

async function main() {
  const manualUnlock = args.has('--manual-unlock');
  const password = process.env[PASSWORD_ENV] || '';
  if (!manualUnlock && !password) {
    console.error(`BLOCKED: set ${PASSWORD_ENV} or use --manual-unlock`);
    process.exit(2);
  }

  const playwright = resolvePlaywright();
  const timestamp = new Date().toISOString().replace(/[:]/g, '').replace(/\..+/, '').replace('T', '-');
  const runDir = path.join(evidenceRoot, timestamp);
  const shotsDir = path.join(runDir, 'screenshots');
  await fsp.mkdir(shotsDir, { recursive: true });

  const browser = await playwright.chromium.launch({
    headless: !manualUnlock,
    args: ['--disable-dev-shm-usage']
  });

  const checks = [];
  let pdpGate = null;

  try {
    const context = await browser.newContext({ viewport: { width: 1366, height: 768 } });
    const page = await context.newPage();

    if (manualUnlock) await waitForManualUnlock(page);
    else await unlockWithPassword(page, password);

    for (const vp of viewports) {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto(PREVIEW_URL, { waitUntil: 'domcontentloaded', timeout: 45000 });
      await page.waitForLoadState('networkidle').catch(() => {});
      await page.waitForTimeout(1500);

      const { rows, overflow } = await inspectDecorativeImages(page);
      const commerce = await detectCommerce(page);

      for (const zone of ['hero-collage', 'category-strip', 'promo-banner', 'feature-tiles', 'static-cards']) {
        const zv = zoneVerdict(rows, zone);
        checks.push({
          area: zone,
          viewport: vp.key,
          ...zv,
          verdict: zv.verdict
        });
      }

      checks.push({
        area: 'responsive-overflow',
        viewport: vp.key,
        overflow,
        verdict: overflow ? 'FAIL' : 'PASS',
        notes: overflow ? ['horizontal-overflow'] : []
      });

      const safetyNotes = [];
      if (commerce.activePurchase.length) safetyNotes.push('active-purchase');
      if (commerce.hashLinks.length) safetyNotes.push('hash-links');
      if (commerce.activeCheckoutCustomer.length) safetyNotes.push('checkout-customer');
      checks.push({
        area: 'safety',
        viewport: vp.key,
        verdict: safetyNotes.length ? 'FAIL' : 'PASS',
        notes: safetyNotes
      });

      const shot = await screenshot(page, shotsDir, `homepage-decorative-${vp.key}.png`);
      checks.push({
        area: 'screenshot',
        viewport: vp.key,
        path: shot,
        verdict: 'PASS'
      });
    }

    pdpGate = await inspectPdpMediaGate(page);
    checks.push({
      area: 'pdp-media-gate',
      viewport: 'desktop',
      ...pdpGate,
      verdict: pdpGate.supplierCatalogMediaPresent ? 'FAIL' : 'PASS',
      notes: pdpGate.supplierCatalogMediaPresent ? ['supplier-media-leaked'] : []
    });

    const verdict = overallVerdict(checks.filter((c) => c.area !== 'screenshot'));

    await page.setViewportSize({ width: 1366, height: 768 });
    await page.goto(PREVIEW_URL, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1200);
    const finalDecorative = await inspectDecorativeImages(page);

    const summary = {
      slice: '21CP',
      verdict,
      previewThemeId: PREVIEW_THEME_ID,
      unlockMode: manualUnlock ? 'manual-unlock' : 'env-password',
      timestamp: new Date().toISOString(),
      checks,
      decorativeImageRows: finalDecorative.rows
    };

    await fsp.writeFile(path.join(runDir, 'summary.json'), JSON.stringify(summary, null, 2));
    await fsp.writeFile(
      path.join(runDir, 'notes.md'),
      [
        '# Slice 21CP decorative image validation',
        '',
        `- Verdict: **${verdict}**`,
        `- Theme: ${PREVIEW_THEME_ID} / Mzansi Select MVP Preview / unpublished`,
        `- Unlock: ${summary.unlockMode}`,
        '',
        'See summary.json for per-zone checks.'
      ].join('\n')
    );

    console.log(`\nVerdict: ${verdict}`);
    console.log(`Evidence: ${path.relative(repoRoot, runDir)}`);
    process.exit(verdict === 'FAIL' ? 1 : 0);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
