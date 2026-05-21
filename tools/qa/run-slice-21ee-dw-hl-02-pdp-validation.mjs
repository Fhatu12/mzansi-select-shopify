#!/usr/bin/env node
/** Slice 21EE — DW-HL-02 PDP revalidation + optional local regression (not committed). */
import fsp from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const STORE = 'https://dropshippoc.myshopify.com';
const THEME = '151207542967';
const evidenceRoot = path.join(ROOT, 'artifacts/qa/slice-21ee-dw-hl-02-pdp-validation');

const primary = {
  key: 'DW-HL-02',
  handle: 'five-division-drawer-divider-preview',
  titlePattern: /5-Division Drawer Divider.*Preview/i
};
const regression = [
  { key: 'DW-TA-01', handle: 'cable-tidies-set', titlePattern: /Cable Tidies Set/i },
  { key: 'DW-KS-04', handle: 'compact-cutlery-drawer-organiser-preview', titlePattern: /Compact Cutlery Drawer Organiser/i },
  { key: 'DW-OD-05', handle: 'adjustable-aluminium-phone-tablet-stand-preview', titlePattern: /Adjustable Aluminium Phone/i }
];
const viewports = [
  { key: 'desktop', width: 1366, height: 768 },
  { key: 'mobile', width: 390, height: 844 }
];

const args = new Set(process.argv.slice(2));
if (args.has('--help')) {
  console.log('Usage: node tools/qa/run-slice-21ee-dw-hl-02-pdp-validation.mjs --manual-unlock');
  process.exit(0);
}
if (!args.has('--manual-unlock')) {
  console.error('BLOCKED: --manual-unlock required');
  process.exit(2);
}

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

function norm(s) {
  return String(s || '').replace(/\s+/g, ' ').trim();
}

async function passwordGate(page) {
  if (/\/password/.test(page.url())) return true;
  const b = norm(await page.locator('body').innerText().catch(() => ''));
  return /enter store using password|store password/i.test(b);
}

async function waitUnlock(page) {
  await page.goto(`${STORE}/password`, { waitUntil: 'domcontentloaded', timeout: 45000 });
  console.log('\n=== Manual unlock (21EE) ===\n');
  const t0 = Date.now();
  while (Date.now() - t0 < 12 * 60 * 1000) {
    await page.waitForTimeout(2000);
    if (!(await passwordGate(page))) {
      await page.goto(`${STORE}/?preview_theme_id=${THEME}`, { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(800);
      if (!(await passwordGate(page))) return;
    }
  }
  throw new Error('Unlock timeout');
}

async function commerce(page) {
  const c = await page.locator('button, a').evaluateAll((n) =>
    n.map((el) => ({
      text: (el.textContent || '').trim(),
      href: el.getAttribute('href') || '',
      disabled: el.hasAttribute('disabled') || el.getAttribute('aria-disabled') === 'true',
      hidden: window.getComputedStyle(el).display === 'none'
    }))
  );
  return {
    purchase: c.filter((x) => !x.disabled && !x.hidden && /^(add to cart|buy now)$/i.test(x.text)),
    checkout: c.filter(
      (x) =>
        !x.disabled &&
        !x.hidden &&
        /\/cart|\/checkout|\/account|payment/i.test(x.href) &&
        !x.href.startsWith('#')
    )
  };
}

async function inspectPdp(page, meta, vp, shotsDir, primaryCheck) {
  const url = `${STORE}/products/${meta.handle}?preview_theme_id=${THEME}`;
  const res = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(1200);
  const notes = [];
  if (await passwordGate(page)) {
    return { launchId: meta.key, handle: meta.handle, viewport: vp.key, url, httpStatus: res?.status(), verdict: 'INCONCLUSIVE', notes: ['password-gate'] };
  }
  const body = norm(await page.locator('body').innerText());
  const comm = await commerce(page);
  if (primaryCheck && (res?.status() === 404 || /404 PREVIEW|Page Missing/i.test(body))) notes.push('still-404');
  if (!meta.titlePattern.test(body)) notes.push('title-mismatch');
  if (/supplier verified/i.test(body)) notes.push('supplier-verified');
  if (!/price to be confirmed|not available to buy|preview item|not yet available/i.test(body)) notes.push('non-purchasable-weak');
  if (comm.purchase.length) notes.push('active-purchase');
  if (comm.checkout.length) notes.push('checkout-link');
  const imgs = await page.locator('.product__media img, .product-gallery img').evaluateAll((els) =>
    els.filter((i) => i.naturalWidth > 80 && !/placeholder\.svg/i.test(i.src || '')).length
  );
  if (imgs > 0) notes.push('supplier-media');
  const overflow =
    vp.key === 'mobile' &&
    (await page.evaluate(
      () =>
        document.documentElement.scrollWidth > document.documentElement.clientWidth + 2 ||
        document.body.scrollWidth > document.body.clientWidth + 2
    ));
  if (overflow) notes.push('horizontal-overflow');
  const shot = path.join(shotsDir, `pdp-${meta.handle.slice(0, 28)}-${vp.key}.png`);
  await page.screenshot({ path: shot, fullPage: false });
  let verdict = 'PASS';
  if (notes.some((n) => ['password-gate', 'still-404', 'active-purchase', 'checkout-link', 'supplier-verified', 'supplier-media', 'horizontal-overflow'].includes(n))) verdict = 'FAIL';
  else if (notes.length) verdict = 'PASS WITH NOTES';
  return {
    launchId: meta.key,
    handle: meta.handle,
    viewport: vp.key,
    url,
    httpStatus: res?.status(),
    notes,
    verdict,
    screenshot: path.relative(ROOT, shot),
    bodyExcerpt: body.slice(0, 300)
  };
}

async function smoke(page, vp, shotsDir) {
  const rows = [];
  await page.goto(`${STORE}/?preview_theme_id=${THEME}`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(600);
  const hComm = await commerce(page);
  const hShot = path.join(shotsDir, `homepage-${vp.key}.png`);
  await page.screenshot({ path: hShot });
  rows.push({ area: 'homepage', viewport: vp.key, verdict: hComm.purchase.length ? 'FAIL' : 'PASS', notes: [] });

  await page.goto(`${STORE}/collections/controlled-pilot?preview_theme_id=${THEME}`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(800);
  const cpNotes = [];
  try {
    await page.waitForFunction(
      () => document.body.classList.contains('controlled-pilot-fallback-active'),
      { timeout: 8000 }
    );
  } catch {
    cpNotes.push('reveal-timeout');
  }
  const cpShot = path.join(shotsDir, `controlled-pilot-${vp.key}.png`);
  await page.screenshot({ path: cpShot });
  rows.push({
    area: 'controlled-pilot',
    viewport: vp.key,
    verdict: cpNotes.includes('reveal-timeout') ? 'FAIL' : 'PASS',
    notes: cpNotes
  });
  return rows;
}

async function main() {
  const ts = new Date().toISOString().replace(/[:.]/g, '').slice(0, 15).replace('T', '-');
  const runDir = path.join(evidenceRoot, ts);
  const shotsDir = path.join(runDir, 'screenshots');
  await fsp.mkdir(shotsDir, { recursive: true });
  const browser = await chromium.launch({ headless: false });
  const checks = [];
  try {
    const page = await browser.newPage({ viewport: { width: 1366, height: 768 } });
    await waitUnlock(page);
    for (const vp of viewports) {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      checks.push(await inspectPdp(page, primary, vp, shotsDir, true));
      if (vp.key === 'desktop') {
        for (const r of regression) checks.push(await inspectPdp(page, r, vp, shotsDir, false));
        checks.push(...(await smoke(page, vp, shotsDir)));
      }
    }
    const primaryRows = checks.filter((c) => c.launchId === 'DW-HL-02');
    const overall =
      primaryRows.some((c) => c.verdict === 'FAIL')
        ? 'FAIL'
        : primaryRows.some((c) => c.verdict === 'INCONCLUSIVE')
          ? 'INCONCLUSIVE'
          : primaryRows.some((c) => c.verdict === 'PASS WITH NOTES')
            ? 'PASS WITH NOTES'
            : 'PASS';
    const summary = { slice: '21EE', capturedAt: new Date().toISOString(), previewThemeId: THEME, verdict: overall, checks };
    await fsp.writeFile(path.join(runDir, 'summary.json'), JSON.stringify(summary, null, 2));
    console.log(JSON.stringify({ verdict: overall, runDir: path.relative(ROOT, runDir) }, null, 2));
    process.exit(overall === 'FAIL' ? 1 : 0);
  } finally {
    await browser.close();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
