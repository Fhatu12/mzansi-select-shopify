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
const CONTROLLED_PILOT_PATH = `/collections/controlled-pilot?preview_theme_id=${PREVIEW_THEME_ID}`;
const GENERIC_REGRESSION_PATH = `/collections/not-a-real-controlled-pilot?preview_theme_id=${PREVIEW_THEME_ID}`;
const PASSWORD_URL = `${STORE_ORIGIN}/password`;
const UNLOCK_CHECK_URL = `${STORE_ORIGIN}/?preview_theme_id=${PREVIEW_THEME_ID}`;
const MANUAL_UNLOCK_TIMEOUT_MS = 12 * 60 * 1000;
const evidenceRoot = path.join(repoRoot, 'artifacts', 'qa', 'slice-21ch-controlled-pilot-rendered-validation');

const viewports = [
  { key: 'desktop', width: 1366, height: 768 },
  { key: 'mobile', width: 390, height: 844 }
];

const pilotHandles = [
  'beverage-bottle-oil-bottle-handle-holder',
  'usb-bag-sealer',
  'foldable-magnetic-phone-holder-desktop-tablet-stand'
];

const pilotTitles = [
  /Beverage.*Oil Bottle Holder/i,
  /USB Bag Sealer/i,
  /Foldable Magnetic Phone Holder/i
];

const recoveryLabels = [
  { label: /Homepage preview/i, hrefPattern: /\/(\?|$)/ },
  { label: /Home & Living/i, hrefPattern: /home-living|collections\/home/i },
  { label: /Kitchen & Storage/i, hrefPattern: /kitchen-storage|collections\/kitchen/i },
  { label: /Office & Desk/i, hrefPattern: /office-desk|collections\/office/i },
  { label: /Tech Accessories/i, hrefPattern: /tech-accessories|collections\/tech/i }
];

const commercePatterns =
  /\/cart|\/cart\/add|\/checkout|\/checkouts|\/account|customer|login|register|recover|payment|order/i;

const args = new Set(process.argv.slice(2));

if (args.has('--help')) {
  console.log(
    [
      'Usage: node tools/qa/run-slice-21cc-controlled-pilot-rendered-validation.mjs [--manual-unlock]',
      '',
      'Rendered validation for Slice 21CH controlled-pilot client-side fallback reveal',
      'after Slice 21CI preview sync. Includes generic 404 regression route.',
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
        console.log('Manual unlock detected. Continuing with controlled-pilot checks.');
        return;
      }
    }
  }
  throw new Error('Timed out waiting for manual storefront unlock.');
}

async function waitForControlledReveal(page) {
  await page.waitForFunction(
    () => {
      const shell = document.querySelector('[data-controlled-preview-shell]');
      const bodyActive = document.body.classList.contains('controlled-pilot-fallback-active');
      return Boolean(shell && !shell.hidden && bodyActive);
    },
    { timeout: 8000 }
  );
}

async function detectCommerce(page, scopeSelector) {
  const locator = scopeSelector ? page.locator(scopeSelector) : page;
  const controls = await locator.locator('button, a, input[type="submit"], form').evaluateAll((nodes) =>
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
  const unsafeForms = controls.filter(
    (item) =>
      item.tag === 'form' &&
      (commercePatterns.test(item.action || '') || String(item.method).toLowerCase() === 'post')
  );

  return { activePurchase, activeCheckoutCustomer, hashLinks, unsafeForms };
}

async function shellState(page) {
  return page.evaluate(() => {
    const generic = document.querySelector('[data-generic-404-shell]');
    const controlled = document.querySelector('[data-controlled-preview-shell]');
    return {
      bodyActive: document.body.classList.contains('controlled-pilot-fallback-active'),
      genericHidden: generic ? generic.hidden : null,
      controlledHidden: controlled ? controlled.hidden : null,
      controlledVisible: controlled
        ? !controlled.hidden && window.getComputedStyle(controlled).display !== 'none'
        : false
    };
  });
}

async function inspectControlledPilot({ page, viewport, screenshotsDir, timestamp }) {
  const url = `${STORE_ORIGIN}${CONTROLLED_PILOT_PATH}`;
  const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });

  const onPasswordGate = await isPasswordGate(page);
  let revealOk = false;
  if (!onPasswordGate) {
    try {
      await waitForControlledReveal(page);
      revealOk = true;
    } catch {
      revealOk = false;
    }
  }
  await page.waitForTimeout(500);

  const httpStatus = response ? response.status() : null;
  const title = normalizeText(await page.title());
  const shell = await shellState(page);
  const controlledScope = '[data-controlled-preview-shell]';
  const bodyText = normalizeText(await page.locator(controlledScope).innerText().catch(() => ''));
  const visibleBodyText = normalizeText(await page.locator('body').innerText().catch(() => ''));
  const commerce = await detectCommerce(page, controlledScope);

  const fallbackShell = await page.locator('.collection-shell--controlled-preview-fallback').count();
  const routeNotice = await page.locator('.controlled-preview-notice').count();
  const genericPageMissingVisible = await page.evaluate(() => {
    const generic = document.querySelector('[data-generic-404-shell]');
    if (!generic || generic.hidden) return false;
    const style = window.getComputedStyle(generic);
    return style.display !== 'none' && style.visibility !== 'hidden';
  });

  const explainsFallback =
    /Why this may look like a missing page/i.test(bodyText) &&
    /404/i.test(bodyText) &&
    /not as a native live collection grid/i.test(bodyText);
  const restrictedPreview =
    /restricted preview|invite-only|controlled pilot preview/i.test(bodyText);
  const notPurchasable =
    /not available for purchase|purchase.*disabled|not.*purchase|cart.*disabled|checkout.*disabled/i.test(
      bodyText
    );
  const notNativeGrid =
    /not as a native live collection grid|404 template|fallback surface/i.test(bodyText);
  const adminDeferred =
    /Shopify Admin|Admin collection publication|does not create or change Admin collections/i.test(
      bodyText
    );

  const liveCards = await page.locator(`${controlledScope} .product-card--live`).count();
  const fallbackCards = await page.locator(`${controlledScope} .product-card--controlled-fallback`).count();
  const gridCards = await page.locator(`${controlledScope} .controlled-preview-grid .product-card`).count();

  const handleSignals = await page.locator(`${controlledScope} a[href*="/products/"]`).evaluateAll((nodes) =>
    nodes.map((node) => node.getAttribute('href') || '')
  );
  const handlesVisible = pilotHandles.map((handle) =>
    handleSignals.some((href) => href.includes(`/products/${handle}`))
  );
  const titlesVisible = pilotTitles.map((pattern) => pattern.test(bodyText));

  const browseCtas = await page.locator(`${controlledScope} a.add-btn--browse, ${controlledScope} a.add-btn`).evaluateAll((nodes) =>
    nodes.map((node) => ({
      text: (node.textContent || '').trim(),
      href: node.getAttribute('href') || '',
      disabled: node.hasAttribute('disabled')
    }))
  );
  const invalidCtas = browseCtas.filter(
    (cta) => !/^view product$/i.test(cta.text) || !cta.href.includes('/products/')
  );

  const recoveryLinks = await page.locator('.controlled-preview-recovery__link').evaluateAll((nodes) =>
    nodes.map((node) => ({
      text: (node.textContent || '').trim(),
      href: node.getAttribute('href') || ''
    }))
  );
  const recoveryOk = recoveryLabels.every((expected) =>
    recoveryLinks.some(
      (link) => expected.label.test(link.text) && expected.hrefPattern.test(link.href)
    )
  );

  const horizontalOverflow = await page.evaluate(() => {
    const doc = document.documentElement;
    return doc.scrollWidth > doc.clientWidth + 2;
  });

  const notes = [];
  if (onPasswordGate) notes.push('password-gate');
  if (httpStatus === 404) notes.push('http-404-expected');
  else if (httpStatus && httpStatus >= 400) notes.push(`http-${httpStatus}`);
  if (!revealOk) notes.push('client-reveal-timeout');
  if (!shell.bodyActive) notes.push('missing-body-active-class');
  if (!shell.controlledVisible) notes.push('controlled-shell-not-visible');
  if (shell.genericHidden !== true) notes.push('generic-shell-not-hidden');
  if (genericPageMissingVisible) notes.push('generic-page-missing-still-visible');
  if (fallbackShell === 0) notes.push('missing-controlled-fallback-shell');
  if (routeNotice === 0) notes.push('missing-route-notice');
  if (!explainsFallback) notes.push('missing-fallback-explanation');
  if (!restrictedPreview) notes.push('missing-restricted-preview-wording');
  if (!notPurchasable) notes.push('missing-not-purchasable-wording');
  if (!notNativeGrid) notes.push('missing-non-native-grid-wording');
  if (!adminDeferred) notes.push('missing-admin-deferred-wording');
  if (gridCards < 3) notes.push(`grid-card-count-${gridCards}`);
  if (!handlesVisible.every(Boolean) && !titlesVisible.every(Boolean)) {
    notes.push('missing-pilot-handle-or-title-signals');
  }
  if (invalidCtas.length > 0) notes.push('invalid-product-cta');
  if (commerce.activePurchase.length > 0) notes.push('active-purchase-control');
  if (commerce.activeCheckoutCustomer.length > 0) notes.push('active-checkout-customer-link');
  if (commerce.hashLinks.length > 0) notes.push('active-hash-link');
  if (commerce.unsafeForms.length > 0) notes.push('unsafe-form');
  if (!recoveryOk) notes.push('recovery-links-incomplete');
  if (horizontalOverflow) notes.push('horizontal-overflow');
  if (/Page\s+Missing/i.test(visibleBodyText) && /Controlled pilot/i.test(visibleBodyText)) {
    notes.push('both-generic-and-controlled-copy-visible');
  }

  let verdict = 'PASS';
  if (onPasswordGate) verdict = 'BLOCKED';
  else if (
    notes.some(
      (n) =>
        n.startsWith('active-') ||
        n === 'client-reveal-timeout' ||
        n === 'controlled-shell-not-visible' ||
        n === 'generic-page-missing-still-visible' ||
        n === 'missing-controlled-fallback-shell' ||
        n === 'unsafe-form' ||
        n === 'invalid-product-cta'
    )
  ) {
    verdict = 'FAIL';
  } else if (notes.length > 0) {
    verdict = 'PASS WITH NOTES';
  }

  const screenshotName = `controlled-pilot-${viewport.key}-${timestamp}.png`;
  await page.screenshot({ path: path.join(screenshotsDir, screenshotName), fullPage: true });

  return {
    routeKey: 'controlled-pilot',
    route: CONTROLLED_PILOT_PATH,
    viewport: viewport.key,
    finalUrl: page.url(),
    httpStatus,
    title,
    unlocked: !onPasswordGate,
    revealOk,
    shell,
    genericPageMissingVisible,
    fallbackShell,
    routeNotice,
    explainsFallback,
    restrictedPreview,
    notPurchasable,
    notNativeGrid,
    adminDeferred,
    liveCards,
    fallbackCards,
    gridCards,
    handlesVisible,
    titlesVisible,
    browseCtas,
    recoveryLinks,
    recoveryOk,
    horizontalOverflow,
    notes,
    verdict,
    bodySnippet: bodyText.slice(0, 400)
  };
}

async function inspectGenericRegression({ page, viewport, screenshotsDir, timestamp }) {
  const url = `${STORE_ORIGIN}${GENERIC_REGRESSION_PATH}`;
  const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(1200);

  const onPasswordGate = await isPasswordGate(page);
  const httpStatus = response ? response.status() : null;
  const shell = await shellState(page);
  const bodyText = normalizeText(await page.locator('body').innerText());
  const genericVisible = await page.evaluate(() => {
    const generic = document.querySelector('[data-generic-404-shell]');
    if (!generic || generic.hidden) return false;
    const style = window.getComputedStyle(generic);
    return style.display !== 'none' && style.visibility !== 'hidden';
  });
  const controlledVisible = shell.controlledVisible;
  const genericCopy = /Page\s+Missing|We could not find that page/i.test(bodyText);
  const controlledCopy = /Why this may look like a missing page|Controlled pilot items/i.test(bodyText);

  const notes = [];
  if (onPasswordGate) notes.push('password-gate');
  if (httpStatus === 404) notes.push('http-404-expected');
  if (!genericVisible) notes.push('generic-shell-not-visible');
  if (controlledVisible || shell.bodyActive) notes.push('controlled-fallback-leaked');
  if (!genericCopy) notes.push('missing-generic-404-copy');
  if (controlledCopy) notes.push('controlled-copy-visible-on-unrelated-route');

  let verdict = 'PASS';
  if (onPasswordGate) verdict = 'BLOCKED';
  else if (notes.some((n) => n === 'controlled-fallback-leaked' || n === 'controlled-copy-visible-on-unrelated-route')) {
    verdict = 'FAIL';
  } else if (notes.length > 0) {
    verdict = 'PASS WITH NOTES';
  }

  const screenshotName = `generic-404-regression-${viewport.key}-${timestamp}.png`;
  await page.screenshot({ path: path.join(screenshotsDir, screenshotName), fullPage: true });

  return {
    routeKey: 'generic-404-regression',
    route: GENERIC_REGRESSION_PATH,
    viewport: viewport.key,
    finalUrl: page.url(),
    httpStatus,
    unlocked: !onPasswordGate,
    shell,
    genericVisible,
    controlledVisible,
    genericCopy,
    controlledCopy,
    notes,
    verdict,
    bodySnippet: bodyText.slice(0, 280)
  };
}

function computeOverall(results, unlockVerified) {
  if (!unlockVerified) return 'INCONCLUSIVE';
  const unlocked = results.filter((r) => r.unlocked);
  if (unlocked.length === 0) return 'INCONCLUSIVE';
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
      const pilot = await inspectControlledPilot({ page, viewport, screenshotsDir, timestamp });
      results.push(pilot);
      console.log(
        `${pilot.verdict} | ${pilot.viewport} | ${pilot.routeKey} | ${pilot.notes.join(', ') || 'ok'}`
      );

      const regression = await inspectGenericRegression({ page, viewport, screenshotsDir, timestamp });
      results.push(regression);
      console.log(
        `${regression.verdict} | ${regression.viewport} | ${regression.routeKey} | ${regression.notes.join(', ') || 'ok'}`
      );
    }

    const overallVerdict = computeOverall(results, true);
    const summary = {
      overallVerdict,
      previewThemeId: PREVIEW_THEME_ID,
      implementationCommit: 'e8e4ff88903b1220d2bd0c4dd655b25e98d1634a',
      syncCommit: 'b3a8f44788099a9d0ef0db9fd4b4fcd01ecdbc2a',
      unlockMode: 'manual',
      timestamp,
      routes: [CONTROLLED_PILOT_PATH, GENERIC_REGRESSION_PATH],
      results
    };
    await fsp.writeFile(path.join(runDir, 'summary.json'), `${JSON.stringify(summary, null, 2)}\n`);
    await fsp.writeFile(
      path.join(runDir, 'notes.md'),
      [
        '# Slice 21CH controlled-pilot rendered validation',
        '',
        `- Verdict: ${overallVerdict}`,
        `- Theme: ${PREVIEW_THEME_ID}`,
        `- Controlled route: ${CONTROLLED_PILOT_PATH}`,
        `- Generic regression: ${GENERIC_REGRESSION_PATH}`,
        `- Unlock: manual`,
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
