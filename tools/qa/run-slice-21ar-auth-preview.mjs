#!/usr/bin/env node

import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { spawnSync } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..', '..');

const PASSWORD_ENV = 'MZANSI_STOREFRONT_PASSWORD';
const previewThemeId = '151207542967';
const evidenceRoot = path.join(
  repoRoot,
  'artifacts',
  'qa',
  'slice-21ar-authenticated-controlled-preview-validation-rerun'
);
const runnerRoot = path.join(evidenceRoot, '_runner');
const timestamp = new Date().toISOString().replace(/[:]/g, '').replace(/\..+/, '').replace('T', '-');
const runDir = path.join(evidenceRoot, timestamp);
const screenshotsDir = path.join(runDir, 'screenshots');

const expectedHandles = [
  'beverage-bottle-oil-bottle-handle-holder',
  'usb-bag-sealer',
  'foldable-magnetic-phone-holder-desktop-tablet-stand'
];

const removedHandles = [
  'world-map-extended-mouse-pad',
  'gizzu-usb-to-type-c-cable-2m',
  'ugreen-4-in-1-usb-2-0-hub',
  'acrylic-tablet-phone-stand'
];

const requiredPdpPhrases = [
  'Price to be confirmed',
  'Preview only',
  'Imported supplier route under review',
  'Delivery timing still being validated'
];

const supportingPdpPhrases = [
  'Pilot item',
  'Preview item',
  'Not available to buy yet',
  'Delivery timing will be confirmed before launch.',
  'Delivery details to be confirmed before launch.',
  'Invite-only controlled pilot visibility.',
  'Cart and checkout remain disabled',
  'Pricing is not final',
  'Final pricing, guaranteed delivery, and public launch approval are not granted on this page.',
  'Add to Cart, wishlist, checkout, and payments stay disabled here.',
  'Imported supplier-route item.',
  'Delivery estimate will be confirmed before fulfilment.'
];

const prohibitedPhrases = [
  'Supplier verified',
  'final price',
  'sale',
  'discount',
  'limited-time offer',
  'final delivery ETA',
  'in stock',
  'stock guarantee',
  'warranty claim',
  'product performance claim',
  'public launch',
  'ready to buy',
  'customer-ready',
  'best seller',
  'fast delivery',
  'local delivery',
  'guaranteed delivery',
  'checkout-ready',
  'payment-ready'
];

const prohibitedPhraseIgnoreRules = {
  'public launch': [/not a public launch/i, /public launch approval (?:are|is) not granted/i],
  'guaranteed delivery': [/guaranteed delivery, and public launch approval are not granted/i]
};

const blockedPatternDefinitions = [
  { name: 'cart-add', test: (url) => url.pathname.startsWith('/cart/add') },
  {
    name: 'shopify-runtime-noise',
    test: (url) =>
      url.pathname.includes('/checkouts/internal/preloads.js') || url.host.includes('checkout-web')
  },
  {
    name: 'checkout-navigation',
    test: (url) => url.pathname.startsWith('/checkouts/') || url.pathname === '/checkout'
  },
  {
    name: 'customer-account',
    test: (url) =>
      url.pathname.startsWith('/account') ||
      url.pathname.startsWith('/customer') ||
      url.pathname.includes('/customers/')
  },
  {
    name: 'wishlist',
    test: (url) => /wishlist/i.test(url.pathname)
  },
  {
    name: 'newsletter',
    test: (url) => /newsletter|subscribe/i.test(url.pathname)
  },
  {
    name: 'payment',
    test: (url) => /pay|payment/i.test(url.pathname) && !url.pathname.includes('/payments/')
  }
];

const routes = [
  {
    key: 'collection',
    kind: 'collection',
    required: true,
    url: `https://dropshippoc.myshopify.com/collections/controlled-pilot?preview_theme_id=${previewThemeId}`
  },
  {
    key: 'bottle-pdp',
    kind: 'pdp',
    handle: 'beverage-bottle-oil-bottle-handle-holder',
    required: true,
    url: `https://dropshippoc.myshopify.com/products/beverage-bottle-oil-bottle-handle-holder?preview_theme_id=${previewThemeId}`
  },
  {
    key: 'sealer-pdp',
    kind: 'pdp',
    handle: 'usb-bag-sealer',
    required: true,
    url: `https://dropshippoc.myshopify.com/products/usb-bag-sealer?preview_theme_id=${previewThemeId}`
  },
  {
    key: 'stand-pdp',
    kind: 'pdp',
    handle: 'foldable-magnetic-phone-holder-desktop-tablet-stand',
    required: true,
    url: `https://dropshippoc.myshopify.com/products/foldable-magnetic-phone-holder-desktop-tablet-stand?preview_theme_id=${previewThemeId}`
  },
  {
    key: 'search-beverage',
    kind: 'search',
    required: false,
    url: `https://dropshippoc.myshopify.com/search?q=beverage&type=product&preview_theme_id=${previewThemeId}`
  },
  {
    key: 'search-sealer',
    kind: 'search',
    required: false,
    url: `https://dropshippoc.myshopify.com/search?q=sealer&type=product&preview_theme_id=${previewThemeId}`
  },
  {
    key: 'search-magnetic',
    kind: 'search',
    required: false,
    url: `https://dropshippoc.myshopify.com/search?q=magnetic&type=product&preview_theme_id=${previewThemeId}`
  }
];

const viewports = [
  { key: 'desktop', width: 1366, height: 768 },
  { key: 'mobile', width: 390, height: 844 }
];

if (process.env.SLICE21AR_INCLUDE_TABLET === '1') {
  viewports.push({ key: 'tablet', width: 768, height: 1024 });
}

const runNotes = {
  script: path.relative(repoRoot, __filename),
  startedAt: new Date().toISOString(),
  repoRoot,
  evidenceRoot: path.relative(repoRoot, evidenceRoot),
  runDir: path.relative(repoRoot, runDir),
  passwordEnvPresent: false,
  playwrightSource: null,
  runnerRoot: path.relative(repoRoot, runnerRoot),
  browserInstallAttempted: false,
  browserLaunchValidated: false,
  storageStateSaved: false,
  harSaved: false,
  traceSaved: false,
  videoSaved: false,
  browserProfileSaved: false,
  viewports,
  routes: routes.map(({ key, kind, required, url }) => ({ key, kind, required, url })),
  note: 'Password is env-only and is never written to disk by this harness.'
};

const summary = {
  overallVerdict: 'BLOCKED',
  routeResults: [],
  networkEntries: [],
  consoleErrors: [],
  notes: []
};

async function main() {
  const password = process.env[PASSWORD_ENV];
  if (!password) {
    failFast(
      `BLOCKED: ${PASSWORD_ENV} is missing. Export it in the active Ubuntu shell, then rerun this harness.`,
      2
    );
  }

  runNotes.passwordEnvPresent = true;
  await ensureDir(screenshotsDir);

  let playwrightBundle;
  try {
    playwrightBundle = await resolvePlaywright();
    runNotes.playwrightSource = playwrightBundle.source;
    runNotes.playwrightModuleRoot = path.relative(repoRoot, playwrightBundle.moduleRoot);
    await ensureChromiumInstall(playwrightBundle);
    const launchResult = await validateChromiumLaunch(playwrightBundle.playwright);
    runNotes.browserLaunchValidated = launchResult.ok;
    summary.notes.push(launchResult.note);
  } catch (error) {
    await writeFailureArtifacts('BLOCKED', error);
    throw error;
  }

  const browser = await playwrightBundle.playwright.chromium.launch({
    headless: process.env.SLICE21AR_HEADFUL === '1' ? false : true
  });

  try {
    for (const viewport of viewports) {
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
        ignoreHTTPSErrors: false
      });

      const page = await context.newPage();
      let activeRouteKey = 'unlock';
      attachConsoleCapture(page, summary.consoleErrors, password, () => activeRouteKey, viewport.key);
      attachNetworkCapture(page, summary.networkEntries, password, () => activeRouteKey, viewport.key);

      const unlockState = await unlockStorefront(page, routes[0].url, password);
      summary.notes.push(`${viewport.key}: ${unlockState.note}`);

      if (!unlockState.unlocked) {
        await context.close();
        throw new Error(
          `BLOCKED: password unlock did not reach the storefront DOM for viewport ${viewport.key}.`
        );
      }

      for (const route of routes) {
        activeRouteKey = route.key;
        const routeResult = await inspectRoute({ page, route, viewport, password });
        summary.routeResults.push(routeResult);
      }

      await context.close();
    }

    await writeArtifacts();

    const overallVerdict = computeOverallVerdict();
    summary.overallVerdict = overallVerdict;
    if (overallVerdict === 'FAIL' || overallVerdict === 'BLOCKED') {
      process.exitCode = 1;
    }
  } catch (error) {
    await writeFailureArtifacts('FAIL', error);
    process.exitCode = 1;
  } finally {
    await browser.close();
  }
}

function failFast(message, exitCode = 1) {
  console.error(message);
  process.exit(exitCode);
}

async function ensureDir(dirPath) {
  await fsp.mkdir(dirPath, { recursive: true });
}

function sanitizeText(value, password = process.env[PASSWORD_ENV] || '') {
  let next = String(value ?? '');
  if (password) {
    next = next.split(password).join('[REDACTED_PASSWORD]');
  }

  return next
    .replace(/([?&](?:access_token|token|authorization|auth|password)=)[^&\s]+/gi, '$1[REDACTED]')
    .replace(/\bBearer\s+[A-Za-z0-9._-]+\b/gi, 'Bearer [REDACTED]')
    .replace(/\b[A-Fa-f0-9]{32,}\b/g, '[REDACTED_HEX]')
    .replace(/\s+/g, ' ')
    .trim();
}

function timestampForFilename() {
  return new Date().toISOString().replace(/[:]/g, '').replace(/\..+/, '').replace('T', '-');
}

async function resolvePlaywright() {
  const requireFromHere = createRequire(import.meta.url);
  const local = tryLoadPlaywright(() => requireFromHere('playwright'), 'local');
  if (local) {
    return local;
  }

  await ensureDir(runnerRoot);
  const packageJsonPath = path.join(runnerRoot, 'package.json');
  if (!fs.existsSync(packageJsonPath)) {
    await fsp.writeFile(
      packageJsonPath,
      JSON.stringify(
        {
          name: 'slice-21ar-auth-preview-runner',
          private: true
        },
        null,
        2
      ) + '\n',
      'utf8'
    );
  }

  const runnerPackageRoot = path.join(runnerRoot, 'node_modules', 'playwright');
  if (!fs.existsSync(path.join(runnerPackageRoot, 'package.json'))) {
    const install = spawnSync('npm', ['install', '--no-save', '--no-audit', '--no-fund', 'playwright@1.55.0'], {
      cwd: runnerRoot,
      stdio: 'inherit',
      env: process.env
    });
    if (install.status !== 0) {
      throw new Error('BLOCKED: failed to install artifact-local Playwright runner under artifacts/_runner.');
    }
  }

  const runnerRequire = createRequire(path.join(runnerRoot, 'package.json'));
  const runner = tryLoadPlaywright(() => runnerRequire('playwright'), 'artifact-runner', runnerPackageRoot);
  if (!runner) {
    throw new Error('BLOCKED: Playwright could not be loaded from the artifact-local runner directory.');
  }
  return runner;
}

function tryLoadPlaywright(loader, source, packageRootOverride = null) {
  try {
    const playwright = loader();
    let moduleRoot = packageRootOverride;
    if (!moduleRoot) {
      const probeRequire = createRequire(import.meta.url);
      moduleRoot = path.dirname(probeRequire.resolve('playwright/package.json'));
    }
    return { playwright, source, moduleRoot };
  } catch {
    return null;
  }
}

async function ensureChromiumInstall(bundle) {
  const executablePath = bundle.playwright.chromium.executablePath();
  if (executablePath && fs.existsSync(executablePath)) {
    return;
  }

  runNotes.browserInstallAttempted = true;
  const cliPath = path.join(bundle.moduleRoot, 'cli.js');
  const install = spawnSync(process.execPath, [cliPath, 'install', 'chromium'], {
    cwd: path.dirname(bundle.moduleRoot),
    stdio: 'inherit',
    env: process.env
  });
  if (install.status !== 0) {
    throw new Error('BLOCKED: failed to install Chromium for the Playwright runner.');
  }
}

async function validateChromiumLaunch(playwright) {
  const browser = await playwright.chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://dropshippoc.myshopify.com/password', { waitUntil: 'domcontentloaded', timeout: 45000 });
  const title = sanitizeText(await page.title());
  await browser.close();
  return {
    ok: true,
    note: `Chromium launch validated against Shopify password route (title: ${title || 'n/a'}).`
  };
}

function attachConsoleCapture(page, target, password, getRouteKey, viewportKey) {
  page.on('console', (message) => {
    if (message.type() !== 'error') {
      return;
    }
    target.push({
      viewport: viewportKey,
      routeKey: getRouteKey(),
      text: sanitizeText(message.text(), password)
    });
  });

  page.on('pageerror', (error) => {
    target.push({
      viewport: viewportKey,
      routeKey: getRouteKey(),
      text: sanitizeText(error.message, password)
    });
  });
}

function attachNetworkCapture(page, target, password, getRouteKey, viewportKey) {
  page.on('response', (response) => {
    const request = response.request();
    const url = new URL(request.url());
    const blockedPattern = detectBlockedPattern(url);
    if (!blockedPattern && !['document', 'xhr', 'fetch'].includes(request.resourceType())) {
      return;
    }

    target.push({
      viewport: viewportKey,
      routeKey: getRouteKey(),
      method: request.method(),
      host: url.host,
      path: sanitizeText(url.pathname, password),
      resourceType: request.resourceType(),
      status: response.status(),
      blockedPattern,
      blockedPatternMatched: Boolean(blockedPattern)
    });
  });
}

function detectBlockedPattern(url) {
  const match = blockedPatternDefinitions.find((definition) => definition.test(url));
  return match ? match.name : null;
}

async function unlockStorefront(page, routeUrl, password) {
  await page.goto(routeUrl, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(1000);

  if (!(await isPasswordPage(page))) {
    return { unlocked: true, note: `No password wall at initial route ${routeUrl}.` };
  }

  const passwordInput = page.locator('input[type="password"], input[name="password"], #Password');
  if ((await passwordInput.count()) === 0) {
    return { unlocked: false, note: 'Password page detected but no password input was found.' };
  }

  await passwordInput.first().fill(password);

  const submit = page.locator(
    'button[type="submit"], input[type="submit"], button:has-text("Enter"), button:has-text("Submit")'
  );

  if ((await submit.count()) > 0) {
    await Promise.allSettled([
      page.waitForLoadState('domcontentloaded', { timeout: 20000 }),
      submit.first().click()
    ]);
  } else {
    const form = page.locator('form');
    if ((await form.count()) === 0) {
      return { unlocked: false, note: 'Password input found, but no submit control or form was available.' };
    }
    await Promise.allSettled([
      page.waitForLoadState('domcontentloaded', { timeout: 20000 }),
      form.first().evaluate((node) => node.submit())
    ]);
  }

  await page.waitForTimeout(1500);
  await page.goto(routeUrl, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(1000);

  if (await isPasswordPage(page)) {
    return { unlocked: false, note: `Password page persisted after unlock attempt for ${routeUrl}.` };
  }

  return { unlocked: true, note: `Password unlock succeeded for ${routeUrl}.` };
}

async function isPasswordPage(page) {
  const currentUrl = page.url();
  if (currentUrl.includes('/password')) {
    return true;
  }

  const passwordInputs = await page.locator('input[type="password"], input[name="password"], #Password').count();
  if (passwordInputs > 0) {
    return true;
  }

  const bodyText = sanitizeText(await page.locator('body').innerText());
  return /enter using password|opening soon/i.test(bodyText);
}

async function inspectRoute({ page, route, viewport, password }) {
  await page.goto(route.url, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(1200);

  const routeBlocked = await isPasswordPage(page);
  const bodyText = sanitizeText(await page.locator('body').innerText(), password);
  const pageTitle = sanitizeText(await page.title(), password);
  const mainVisible = await isVisible(page, 'main, .product-main-shell, .products-grid, .section-inner');
  const headerVisible = await isVisible(page, 'header');
  const footerVisible = await isVisible(page, 'footer');
  const horizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth + 1
  );

  const screenshotFile = `${route.key}-${viewport.key}-${timestampForFilename()}.png`;
  const screenshotPath = path.join(screenshotsDir, screenshotFile);
  await page.screenshot({ path: screenshotPath, fullPage: true });

  const common = {
    key: route.key,
    kind: route.kind,
    required: route.required,
    viewport: viewport.key,
    requestedUrl: route.url,
    finalUrl: page.url(),
    title: pageTitle,
    domReached: !routeBlocked && mainVisible,
    notPasswordRoute: !routeBlocked,
    headerVisible,
    footerVisible,
    mainVisible,
    horizontalOverflow,
    screenshot: path.relative(repoRoot, screenshotPath),
    bodyTextSample: bodyText.slice(0, 400)
  };

  if (route.kind === 'collection') {
    return inspectCollectionRoute(page, common, bodyText);
  }

  if (route.kind === 'pdp') {
    return inspectPdpRoute(page, route.handle, common, bodyText);
  }

  return inspectSearchRoute(page, common, bodyText);
}

async function inspectCollectionRoute(page, common, bodyText) {
  const productCards = page.locator('.product-card');
  const productCardCount = await productCards.count();
  const cardSummaries = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-card')).map((card) => {
      const link = card.querySelector('.p-name a, .prod-img a, a[href*="/products/"]');
      const href = link?.getAttribute('href') || '';
      const handleMatch = href.match(/\/products\/([^/?#]+)/);
      const cta = card.querySelector('.add-btn');
      return {
        handle: handleMatch ? handleMatch[1] : null,
        ctaText: (cta?.textContent || '').trim(),
        ctaHref: cta?.getAttribute('href') || '',
        imageCount: card.querySelectorAll('.prod-img img').length,
        placeholderCount: card.querySelectorAll('.product-placeholder-svg, svg').length,
        previewBadgeText: (card.querySelector('.p-badge, .product-badge')?.textContent || '').trim()
      };
    });
  });

  const observedHandles = cardSummaries.map((card) => card.handle).filter(Boolean);
  const expectedOnly =
    observedHandles.length > 0 &&
    observedHandles.every((handle) => expectedHandles.includes(handle)) &&
    expectedHandles.every((handle) => observedHandles.includes(handle));
  const removedAbsent = removedHandles.every((handle) => !observedHandles.includes(handle));
  const noMediaImages = cardSummaries.every((card) => expectedHandles.includes(card.handle) ? card.imageCount === 0 : true);
  const placeholdersPresent = cardSummaries
    .filter((card) => expectedHandles.includes(card.handle))
    .every((card) => card.placeholderCount > 0);
  const activePurchaseCtas = cardSummaries.filter((card) =>
    /(add to cart|buy now)/i.test(card.ctaText) || /\/cart|\/checkout/i.test(card.ctaHref)
  );
  const prohibitedHits = collectProhibitedHits(bodyText);

  return {
    ...common,
    productCardCount,
    observedHandles,
    expectedOnly,
    removedAbsent,
    noMediaImages,
    placeholdersPresent,
    activePurchaseCtas,
    prohibitedHits,
    previewBadges: cardSummaries.map((card) => ({
      handle: card.handle,
      previewBadgeText: card.previewBadgeText,
      ctaText: card.ctaText
    })),
    verdict:
      common.domReached &&
      productCardCount === 3 &&
      expectedOnly &&
      removedAbsent &&
      noMediaImages &&
      activePurchaseCtas.length === 0
        ? 'PASS'
        : common.domReached
          ? 'FAIL'
          : 'BLOCKED',
    note:
      productCardCount === 0
        ? 'Collection grid did not render product cards.'
        : 'Collection route inspected after unlock.'
  };
}

async function inspectPdpRoute(page, handle, common, bodyText) {
  const requiredPhraseHits = Object.fromEntries(
    requiredPdpPhrases.map((phrase) => [phrase, bodyText.includes(phrase)])
  );
  const supportingPhraseHits = Object.fromEntries(
    supportingPdpPhrases.map((phrase) => [phrase, bodyText.includes(phrase)])
  );
  const prohibitedHits = collectProhibitedHits(bodyText);
  const galleryImageCount = await page.locator('.product-gallery-main img, .product-gallery-strip img').count();
  const placeholderCount = await page.locator('.product-gallery-placeholder, .product-gallery-main svg').count();
  const purchaseButtonTexts = await page
    .locator('button, a')
    .evaluateAll((nodes) =>
      nodes.map((node) => ({
        text: (node.textContent || '').trim(),
        disabled:
          node.hasAttribute('disabled') ||
          node.getAttribute('aria-disabled') === 'true' ||
          node.getAttribute('href') === null,
        href: node.getAttribute('href') || ''
      }))
    );

  const activePurchasePaths = purchaseButtonTexts.filter(
    (item) => /(add to cart|buy now)/i.test(item.text) && !item.disabled
  );
  const activeCheckoutPaths = purchaseButtonTexts.filter(
    (item) => /\/checkout|\/cart/.test(item.href) && !item.disabled
  );
  const cartForms = await page.locator('form[action*="/cart/add"]').count();
  const newsletterActive = await page
    .locator('input[type="email"]:not([disabled]), button:not([disabled])')
    .evaluateAll((nodes) =>
      nodes
        .map((node) => sanitizeText(node.getAttribute('aria-label') || node.textContent || ''))
        .filter((text) => /newsletter|subscribe|email updates/i.test(text))
    )
    .catch(() => []);
  const wishlistEnabledCount = await page
    .locator(
      'button:not([disabled])[aria-label*="Favourite"], button:not([disabled])[aria-label*="favorite"], button:not([disabled])[aria-label*="wish"]'
    )
    .count();

  return {
    ...common,
    handle,
    requiredPhraseHits,
    supportingPhraseHits,
    prohibitedHits,
    galleryImageCount,
    placeholderCount,
    cartForms,
    activePurchasePaths,
    activeCheckoutPaths,
    newsletterActive,
    wishlistEnabledCount,
    verdict:
      common.domReached &&
      Object.values(requiredPhraseHits).every(Boolean) &&
      prohibitedHits.length === 0 &&
      galleryImageCount === 0 &&
      placeholderCount > 0 &&
      activePurchasePaths.length === 0 &&
      activeCheckoutPaths.length === 0 &&
      cartForms === 0 &&
      newsletterActive.length === 0 &&
      wishlistEnabledCount === 0 &&
      !common.horizontalOverflow
        ? 'PASS'
        : common.domReached
          ? 'FAIL'
          : 'BLOCKED'
  };
}

async function inspectSearchRoute(page, common, bodyText) {
  const prohibitedHits = collectProhibitedHits(bodyText);
  return {
    ...common,
    prohibitedHits,
    verdict: common.domReached && prohibitedHits.length === 0 ? 'PASS' : common.domReached ? 'FAIL' : 'BLOCKED'
  };
}

async function isVisible(page, selector) {
  const locator = page.locator(selector).first();
  try {
    return await locator.isVisible({ timeout: 1500 });
  } catch {
    return false;
  }
}

function computeOverallVerdict() {
  const requiredResults = summary.routeResults.filter((result) => result.required);
  if (requiredResults.some((result) => result.verdict === 'BLOCKED')) {
    return 'BLOCKED';
  }
  if (requiredResults.some((result) => result.verdict === 'FAIL')) {
    return 'FAIL';
  }
  if (
    summary.networkEntries.some((entry) =>
      ['cart-add', 'checkout-navigation', 'customer-account', 'newsletter', 'wishlist', 'payment'].includes(
        entry.blockedPattern
      )
    )
  ) {
    return 'FAIL';
  }
  if (summary.consoleErrors.length > 0 || summary.routeResults.some((result) => result.verdict === 'PASS WITH NOTES')) {
    return 'PASS WITH NOTES';
  }
  return 'PASS';
}

function collectProhibitedHits(bodyText) {
  return prohibitedPhrases.filter((phrase) => {
    const lowerBody = bodyText.toLowerCase();
    if (!lowerBody.includes(phrase.toLowerCase())) {
      return false;
    }

    const ignoreRules = prohibitedPhraseIgnoreRules[phrase] || [];
    return !ignoreRules.some((pattern) => pattern.test(bodyText));
  });
}

async function writeArtifacts() {
  summary.overallVerdict = computeOverallVerdict();

  const collectionResults = summary.routeResults.filter((result) => result.kind === 'collection');
  const pdpResults = summary.routeResults.filter((result) => result.kind === 'pdp');
  const routeViewportSummary = {
    verdict: collectionResults.every((result) => result.domReached) && pdpResults.every((result) => result.domReached)
      ? 'PASS'
      : computeOverallVerdict() === 'BLOCKED'
        ? 'BLOCKED'
        : 'FAIL',
    routes: summary.routeResults.map((result) => ({
      key: result.key,
      kind: result.kind,
      viewport: result.viewport,
      finalUrl: result.finalUrl,
      domReached: result.domReached,
      notPasswordRoute: result.notPasswordRoute,
      headerVisible: result.headerVisible,
      footerVisible: result.footerVisible,
      mainVisible: result.mainVisible,
      horizontalOverflow: result.horizontalOverflow,
      screenshot: result.screenshot,
      verdict: result.verdict
    }))
  };

  const collectionSummary = {
    verdict:
      collectionResults.every((result) => result.verdict === 'PASS')
        ? 'PASS'
        : collectionResults.some((result) => result.verdict === 'BLOCKED')
          ? 'BLOCKED'
          : 'FAIL',
    results: collectionResults
  };

  const pdpSummary = {
    verdict:
      pdpResults.every((result) => result.verdict === 'PASS')
        ? 'PASS'
        : pdpResults.some((result) => result.verdict === 'BLOCKED')
          ? 'BLOCKED'
          : 'FAIL',
    results: pdpResults
  };

  const previewSafeSummary = {
    verdict:
      pdpResults.every((result) => Object.values(result.requiredPhraseHits || {}).every(Boolean))
        ? 'PASS'
        : pdpResults.some((result) => result.verdict === 'BLOCKED')
          ? 'BLOCKED'
          : 'FAIL',
    requiredPhrases: requiredPdpPhrases,
    supportingPhrases: supportingPdpPhrases,
    results: pdpResults.map((result) => ({
      handle: result.handle,
      viewport: result.viewport,
      requiredPhraseHits: result.requiredPhraseHits,
      supportingPhraseHits: result.supportingPhraseHits,
      screenshot: result.screenshot
    }))
  };

  const prohibitedWordingResults = summary.routeResults.map((result) => ({
    key: result.key,
    kind: result.kind,
    viewport: result.viewport,
    hits: result.prohibitedHits || [],
    screenshot: result.screenshot
  }));
  const prohibitedWordingSummary = {
    verdict:
      prohibitedWordingResults.every((result) => result.hits.length === 0)
        ? 'PASS'
        : prohibitedWordingResults.some((result) => result.hits.length > 0)
          ? 'FAIL'
          : 'BLOCKED',
    prohibitedPhrases,
    results: prohibitedWordingResults
  };

  const mediaSummary = {
    verdict:
      collectionResults.every((result) => result.noMediaImages && result.placeholdersPresent) &&
      pdpResults.every((result) => result.galleryImageCount === 0 && result.placeholderCount > 0)
        ? 'PASS'
        : pdpResults.some((result) => result.verdict === 'BLOCKED')
          ? 'BLOCKED'
          : 'FAIL',
    collection: collectionResults.map((result) => ({
      viewport: result.viewport,
      noMediaImages: result.noMediaImages,
      placeholdersPresent: result.placeholdersPresent,
      screenshot: result.screenshot
    })),
    pdps: pdpResults.map((result) => ({
      handle: result.handle,
      viewport: result.viewport,
      galleryImageCount: result.galleryImageCount,
      placeholderCount: result.placeholderCount,
      screenshot: result.screenshot
    }))
  };

  const activeBlockedPatterns = summary.networkEntries.filter((entry) =>
    ['cart-add', 'checkout-navigation', 'payment', 'customer-account', 'newsletter', 'wishlist'].includes(
      entry.blockedPattern
    )
  );

  const commerceSummary = {
    verdict:
      activeBlockedPatterns.length === 0 &&
      collectionResults.every((result) => (result.activePurchaseCtas || []).length === 0) &&
      pdpResults.every(
        (result) => result.activePurchasePaths.length === 0 && result.activeCheckoutPaths.length === 0 && result.cartForms === 0
      )
        ? summary.networkEntries.some((entry) => entry.blockedPattern === 'shopify-runtime-noise')
          ? 'PASS WITH NOTES'
          : 'PASS'
        : 'FAIL',
    blockedPatternMatches: activeBlockedPatterns,
    collection: collectionResults.map((result) => ({
      viewport: result.viewport,
      activePurchaseCtas: result.activePurchaseCtas,
      screenshot: result.screenshot
    })),
    pdps: pdpResults.map((result) => ({
      handle: result.handle,
      viewport: result.viewport,
      activePurchasePaths: result.activePurchasePaths,
      activeCheckoutPaths: result.activeCheckoutPaths,
      cartForms: result.cartForms,
      screenshot: result.screenshot
    }))
  };

  const checkoutCustomerSummary = {
    verdict:
      activeBlockedPatterns.length === 0
        ? summary.networkEntries.some((entry) => entry.blockedPattern === 'shopify-runtime-noise')
          ? 'PASS WITH NOTES'
          : 'PASS'
        : 'FAIL',
    blockedPatternMatches: activeBlockedPatterns,
    runtimeNoise: summary.networkEntries.filter((entry) => entry.blockedPattern === 'shopify-runtime-noise')
  };

  const networkSummary = {
    verdict:
      activeBlockedPatterns.length === 0
        ? summary.networkEntries.some((entry) => entry.blockedPattern === 'shopify-runtime-noise')
          ? 'PASS WITH NOTES'
          : 'PASS'
        : 'FAIL',
    entries: summary.networkEntries
  };

  const qaReport = buildQaReport({
    routeViewportSummary,
    collectionSummary,
    pdpSummary,
    previewSafeSummary,
    prohibitedWordingSummary,
    mediaSummary,
    commerceSummary,
    checkoutCustomerSummary,
    networkSummary
  });

  await Promise.all([
    writeJson('controlled-pilot-collection-summary.json', collectionSummary),
    writeJson('pdp-validation-summary.json', pdpSummary),
    writeJson('preview-safe-wording-summary.json', previewSafeSummary),
    writeJson('prohibited-wording-summary.json', prohibitedWordingSummary),
    writeJson('media-summary.json', mediaSummary),
    writeJson('commerce-action-summary.json', commerceSummary),
    writeJson('checkout-customer-access-summary.json', checkoutCustomerSummary),
    writeJson('route-viewport-summary.json', routeViewportSummary),
    writeJson('network-summary.json', networkSummary),
    writeJson('run-notes.json', runNotes),
    fsp.writeFile(path.join(runDir, 'qa-report.md'), qaReport, 'utf8'),
    fsp.writeFile(
      path.join(runDir, 'console-errors.txt'),
      summary.consoleErrors.map((entry) => `[${entry.viewport}/${entry.routeKey}] ${entry.text}`).join('\n') +
        (summary.consoleErrors.length ? '\n' : ''),
      'utf8'
    )
  ]);
}

function buildQaReport(sectionResults) {
  return `# Slice 21AR authenticated controlled-preview validation rerun

## QA verdict

**${summary.overallVerdict}**

## Harness

- Script: \`${path.relative(repoRoot, __filename)}\`
- Evidence: \`${path.relative(repoRoot, runDir)}\`
- Playwright source: \`${runNotes.playwrightSource}\`
- Viewports: ${viewports.map((viewport) => `${viewport.key} (${viewport.width}x${viewport.height})`).join(', ')}

## Section verdicts

| Section | Verdict |
| --- | --- |
| Controlled-pilot collection | ${sectionResults.collectionSummary.verdict} |
| PDP validation | ${sectionResults.pdpSummary.verdict} |
| Preview-safe wording | ${sectionResults.previewSafeSummary.verdict} |
| Prohibited wording | ${sectionResults.prohibitedWordingSummary.verdict} |
| Media / no-image posture | ${sectionResults.mediaSummary.verdict} |
| Add to Cart / Buy Now safety | ${sectionResults.commerceSummary.verdict} |
| Checkout / payment / customer-access safety | ${sectionResults.checkoutCustomerSummary.verdict} |
| Route / viewport layout | ${sectionResults.routeViewportSummary.verdict} |
| Network summary | ${sectionResults.networkSummary.verdict} |

## Notes

${summary.notes.map((note) => `- ${note}`).join('\n') || '- None'}

## Exit behaviour

- The harness exits non-zero for **FAIL** or **BLOCKED**.
- The harness does not write storageState, cookies, HAR, trace, video, or browser-profile data.
`;
}

async function writeJson(fileName, payload) {
  await fsp.writeFile(path.join(runDir, fileName), JSON.stringify(payload, null, 2) + '\n', 'utf8');
}

async function writeFailureArtifacts(verdict, error) {
  await ensureDir(screenshotsDir);
  summary.overallVerdict = verdict;
  summary.notes.push(sanitizeText(error.message));
  await Promise.all([
    writeJson('run-notes.json', runNotes),
    writeJson('route-viewport-summary.json', {
      verdict,
      routes: summary.routeResults
    }),
    writeJson('network-summary.json', {
      verdict,
      entries: summary.networkEntries
    }),
    writeJson('controlled-pilot-collection-summary.json', { verdict, results: [] }),
    writeJson('pdp-validation-summary.json', { verdict, results: [] }),
    writeJson('preview-safe-wording-summary.json', { verdict, results: [] }),
    writeJson('prohibited-wording-summary.json', { verdict, results: [] }),
    writeJson('media-summary.json', { verdict, results: [] }),
    writeJson('commerce-action-summary.json', { verdict, results: [] }),
    writeJson('checkout-customer-access-summary.json', { verdict, results: [] }),
    fsp.writeFile(
      path.join(runDir, 'console-errors.txt'),
      summary.consoleErrors.map((entry) => `[${entry.viewport}/${entry.routeKey}] ${entry.text}`).join('\n') +
        (summary.consoleErrors.length ? '\n' : ''),
      'utf8'
    ),
    fsp.writeFile(
      path.join(runDir, 'qa-report.md'),
      `# Slice 21AR authenticated controlled-preview validation rerun\n\n## QA verdict\n\n**${verdict}**\n\n## Failure note\n\n- ${sanitizeText(
        error.message
      )}\n`,
      'utf8'
    )
  ]);
}

main().catch((error) => {
  console.error(sanitizeText(error.stack || error.message));
  process.exitCode = process.exitCode || 1;
});
