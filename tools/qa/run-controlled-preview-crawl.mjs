#!/usr/bin/env node

import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..', '..');

const PASSWORD_ENV = 'MZANSI_STOREFRONT_PASSWORD';
const STORE_ORIGIN = 'https://dropshippoc.myshopify.com';
const PREVIEW_THEME_ID = '151207542967';
const MAX_PAGES = 30;
const MAX_DEPTH = 2;

const evidenceRoot = path.join(repoRoot, 'artifacts', 'qa', 'slice-21ar-controlled-preview-crawl');

const seedPaths = [
  '/?preview_theme_id=' + PREVIEW_THEME_ID,
  '/collections/controlled-pilot?preview_theme_id=' + PREVIEW_THEME_ID,
  '/products/beverage-bottle-oil-bottle-handle-holder?preview_theme_id=' + PREVIEW_THEME_ID,
  '/products/usb-bag-sealer?preview_theme_id=' + PREVIEW_THEME_ID,
  '/products/foldable-magnetic-phone-holder-desktop-tablet-stand?preview_theme_id=' + PREVIEW_THEME_ID,
  '/search?q=beverage&type=product&preview_theme_id=' + PREVIEW_THEME_ID,
  '/search?q=sealer&type=product&preview_theme_id=' + PREVIEW_THEME_ID,
  '/search?q=magnetic&type=product&preview_theme_id=' + PREVIEW_THEME_ID
];

const viewports = [
  { key: 'desktop', width: 1366, height: 768 },
  { key: 'mobile', width: 390, height: 844 }
];

const cjHandles = [
  'beverage-bottle-oil-bottle-handle-holder',
  'usb-bag-sealer',
  'foldable-magnetic-phone-holder-desktop-tablet-stand'
];

const gadgetgyzHandles = [
  'world-map-extended-mouse-pad',
  'gizzu-usb-to-type-c-cable-2m',
  'ugreen-4-in-1-usb-2-0-hub',
  'acrylic-tablet-phone-stand'
];

const previewSafePhrases = [
  'Price to be confirmed',
  'Preview only',
  'Imported supplier route under review',
  'Delivery timing still being validated'
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

const prohibitedIgnoreRules = {
  'public launch': [/not a public launch/i, /public launch approval (?:are|is) not granted/i],
  'guaranteed delivery': [/guaranteed delivery, and public launch approval are not granted/i],
  'in stock': [/not in stock/i, /not available to buy/i]
};

const blockedPatternDefinitions = [
  { name: 'cart-add', test: (url) => url.pathname.startsWith('/cart/add') || url.pathname === '/cart/add' },
  { name: 'checkout-navigation', test: (url) => url.pathname.startsWith('/checkouts/') || url.pathname === '/checkout' },
  { name: 'customer-account', test: (url) => url.pathname.startsWith('/account') || url.pathname.startsWith('/customer') },
  { name: 'wishlist', test: (url) => /wishlist|favourite|favorite/i.test(url.pathname) },
  { name: 'newsletter', test: (url) => /newsletter|subscribe/i.test(url.pathname) },
  { name: 'payment', test: (url) => /\/pay(?:ment)?/i.test(url.pathname) },
  {
    name: 'shopify-runtime-noise',
    test: (url) =>
      url.pathname.includes('/checkouts/internal/preloads.js') || url.host.includes('checkout-web')
  }
];

const excludePathPatterns = [
  /^\/cart(?:\/|$)/,
  /^\/cart\/add/,
  /^\/checkout(?:\/|$)/,
  /^\/checkouts(?:\/|$)/,
  /^\/account(?:\/|$)/,
  /^\/admin(?:\/|$)/,
  /^\/apps(?:\/|$)/
];

const excludeUrlSubstrings = [
  'customer',
  'payment',
  'order',
  'login',
  'register',
  'recover',
  'challenge'
];

function main() {
  const password = process.env[PASSWORD_ENV];
  if (!password) {
    printBlockedReport('MZANSI_STOREFRONT_PASSWORD is missing.');
    process.exit(2);
  }

  resolvePlaywright()
    .then((playwrightBundle) => runCrawl(password, playwrightBundle))
    .catch((error) => {
      printBlockedReport(error.message);
      process.exit(2);
    });
}

function printBlockedReport(reason) {
  console.log('=== Slice 21AR Controlled Preview Crawl ===');
  console.log('Verdict: BLOCKED');
  console.log(`Reason: ${reason}`);
  console.log('Evidence: (not created — setup or unlock blocked)');
  console.log('\nGit status:');
  console.log(getGitStatusText());
}

async function runCrawl(password, { playwright }) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').replace('T', '-').slice(0, 15);
  const runDir = path.join(evidenceRoot, timestamp);
  const screenshotsDir = path.join(runDir, 'screenshots');
  await fsp.mkdir(screenshotsDir, { recursive: true });

  const crawlRecords = [];
  const networkEntries = [];
  const consoleErrors = [];
  const discoveredUrls = [];

  const browser = await playwright.chromium.launch({
    headless: process.env.CRAWL_HEADFUL === '1' ? false : true
  });

  try {
    for (const viewport of viewports) {
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height }
      });
      const page = await context.newPage();
      let activeRoute = 'unlock';

      attachConsoleCapture(page, consoleErrors, password, () => activeRoute, viewport.key);
      attachNetworkCapture(page, networkEntries, password, () => activeRoute, viewport.key);

      const unlockUrl = toAbsoluteUrl(seedPaths[0]);
      activeRoute = 'unlock';
      const unlock = await unlockStorefront(page, unlockUrl, password);
      if (!unlock.unlocked) {
        await context.close();
        throw new Error(`Storefront password unlock failed for viewport ${viewport.key}.`);
      }

      const urlsForViewport =
        viewport.key === 'desktop'
          ? await discoverUrls(page, password, discoveredUrls)
          : discoveredUrls.map((entry) => entry.url);

      for (const crawlUrl of urlsForViewport) {
        activeRoute = crawlUrl;
        const record = await inspectCrawledRoute({
          page,
          crawlUrl,
          viewport,
          password,
          screenshotsDir,
          timestamp
        });
        crawlRecords.push(record);
      }

      await context.close();
    }

    const summaries = buildSummaries(crawlRecords, networkEntries, consoleErrors);
    const verdict = computeVerdict(summaries, crawlRecords, networkEntries);

    await writeEvidence(runDir, {
      timestamp,
      verdict,
      crawlRecords,
      summaries,
      networkEntries,
      consoleErrors,
      discoveredCount: discoveredUrls.length
    });

    printFinalReport({
      verdict,
      runDir,
      summaries,
      crawlRecords,
      networkEntries,
      consoleErrors
    });

    if (verdict === 'FAIL' || verdict === 'BLOCKED') {
      process.exitCode = 1;
    }
  } finally {
    await browser.close();
  }
}

function resolvePlaywright() {
  const requireFromHere = createRequire(import.meta.url);
  try {
    const playwright = requireFromHere('playwright');
    return Promise.resolve({ playwright, source: 'local' });
  } catch {
    return Promise.reject(
      new Error(
        'Playwright is not resolvable from repo node_modules. Run npm install in the repo root before QA execution.'
      )
    );
  }
}

function toAbsoluteUrl(pathOrUrl) {
  return new URL(pathOrUrl, STORE_ORIGIN).toString();
}

function shouldExcludeUrl(url) {
  const lower = `${url.pathname}${url.search}`.toLowerCase();
  if (excludePathPatterns.some((pattern) => pattern.test(url.pathname))) {
    return true;
  }
  if (excludeUrlSubstrings.some((part) => lower.includes(part))) {
    return true;
  }
  return false;
}

function normalizeCrawlUrl(href, baseUrl) {
  let url;
  try {
    url = new URL(href, baseUrl);
  } catch {
    return null;
  }
  if (url.origin !== STORE_ORIGIN) {
    return null;
  }
  if (shouldExcludeUrl(url)) {
    return null;
  }
  if (!url.searchParams.has('preview_theme_id')) {
    url.searchParams.set('preview_theme_id', PREVIEW_THEME_ID);
  }
  url.hash = '';
  return url.toString();
}

function urlKey(urlString) {
  const url = new URL(urlString);
  return `${url.pathname}${url.search}`;
}

async function discoverUrls(page, password, discoveredUrls) {
  const queue = seedPaths.map((seedPath) => ({
    url: toAbsoluteUrl(seedPath),
    depth: 0
  }));
  const seen = new Set();

  while (queue.length > 0 && discoveredUrls.length < MAX_PAGES) {
    const { url, depth } = queue.shift();
    const key = urlKey(url);
    if (seen.has(key)) {
      continue;
    }
    seen.add(key);

    const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await page.waitForTimeout(800);

    if (await isPasswordPage(page)) {
      throw new Error(`Password gate visible during crawl discovery at ${url}`);
    }

    const status = response ? response.status() : null;
    discoveredUrls.push({ url, depth, status });

    if (depth >= MAX_DEPTH) {
      continue;
    }

    const hrefs = await page.locator('a[href]').evaluateAll((anchors) =>
      anchors.map((anchor) => anchor.getAttribute('href')).filter(Boolean)
    );

    for (const href of hrefs) {
      const normalized = normalizeCrawlUrl(href, url);
      if (!normalized) {
        continue;
      }
      const nextKey = urlKey(normalized);
      if (!seen.has(nextKey) && discoveredUrls.length + queue.length < MAX_PAGES) {
        queue.push({ url: normalized, depth: depth + 1 });
      }
    }
  }

  return discoveredUrls.map((entry) => entry.url);
}

async function inspectCrawledRoute({ page, crawlUrl, viewport, password, screenshotsDir, timestamp }) {
  const response = await page.goto(crawlUrl, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(1000);

  const passwordGateVisible = await isPasswordPage(page);
  const bodyText = sanitizeText(await page.locator('body').innerText(), password);
  const title = sanitizeText(await page.title(), password);
  const headings = await page.locator('h1, h2').evaluateAll((nodes) =>
    nodes.map((node) => sanitizeText(node.textContent || '', password)).filter(Boolean)
  );
  const h1 = headings[0] || '';
  const h2Texts = headings.slice(1);

  const productHandles = extractProductHandles(bodyText, page.url());
  const cjVisible = cjHandles.filter(
    (handle) => productHandles.includes(handle) || bodyText.toLowerCase().includes(handle.replace(/-/g, ' '))
  );
  const gadgetgyzVisible = gadgetgyzHandles.filter(
    (handle) => productHandles.includes(handle) || bodyText.toLowerCase().includes(handle.replace(/-/g, ' '))
  );

  const previewSafeHits = previewSafePhrases.filter((phrase) => bodyText.includes(phrase));
  const prohibitedHits = collectProhibitedHits(bodyText);
  const commerce = await inspectCommerceSignals(page, bodyText);
  const media = await inspectMediaSignals(page);
  const horizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth + 1
  );

  const routeSlug = new URL(crawlUrl).pathname.replace(/[^\w.-]+/g, '_').slice(0, 80);
  const screenshotFile = `${routeSlug}-${viewport.key}-${timestamp}.png`;
  const screenshotPath = path.join(screenshotsDir, screenshotFile);
  await page.screenshot({ path: screenshotPath, fullPage: true });

  return {
    route: new URL(crawlUrl).pathname + new URL(crawlUrl).search,
    viewport: viewport.key,
    finalUrl: page.url(),
    httpStatus: response ? response.status() : null,
    passwordGateVisible,
    title,
    h1,
    h2: h2Texts,
    productHandlesVisible: productHandles,
    cjProductTextVisible: cjVisible,
    gadgetgyzEraProductTextVisible: gadgetgyzVisible,
    previewSafeWordingHits: previewSafeHits,
    prohibitedWordingHits: prohibitedHits,
    enabledCommerceControls: commerce.enabledControls,
    cartAddFormsOrLinks: commerce.cartAddFormsOrLinks,
    checkoutAccountCustomerLinks: commerce.checkoutAccountCustomerLinks,
    productMediaImageCandidates: media.imageCandidates,
    horizontalOverflow,
    screenshotPath: path.relative(repoRoot, screenshotPath)
  };
}

function extractProductHandles(bodyText, pageUrl) {
  const handles = new Set();
  const matches = `${bodyText} ${pageUrl}`.matchAll(/\/products\/([a-z0-9-]+)/gi);
  for (const match of matches) {
    handles.add(match[1]);
  }
  return [...handles];
}

async function inspectCommerceSignals(page, bodyText) {
  const controls = await page.locator('button, a, input[type="submit"]').evaluateAll((nodes) =>
    nodes
      .map((node) => {
        const text = (node.textContent || '').trim();
        const href = node.getAttribute('href') || '';
        const disabled =
          node.hasAttribute('disabled') ||
          node.getAttribute('aria-disabled') === 'true' ||
          node.classList.contains('disabled');
        const tag = node.tagName.toLowerCase();
        return { text, href, disabled, tag };
      })
      .filter((item) => item.text || item.href)
  );

  const enabledControls = controls.filter(
    (item) =>
      !item.disabled &&
      (/(add to cart|buy now)/i.test(item.text) || /\/cart\/add|\/checkout/i.test(item.href))
  );

  const cartAddFormsOrLinks = await page
    .locator('form[action*="/cart/add"], a[href*="/cart/add"]')
    .evaluateAll((nodes) =>
      nodes.map((node) => ({
        tag: node.tagName.toLowerCase(),
        actionOrHref: node.getAttribute('action') || node.getAttribute('href') || '',
        disabled: node.hasAttribute('disabled') || node.getAttribute('aria-disabled') === 'true'
      }))
    );

  const checkoutAccountCustomerLinks = await page.locator('a[href]').evaluateAll((anchors) =>
    anchors
      .filter((anchor) => {
        const style = window.getComputedStyle(anchor);
        const disabled = anchor.getAttribute('aria-disabled') === 'true';
        return style.visibility !== 'hidden' && style.display !== 'none' && !disabled;
      })
      .map((anchor) => anchor.getAttribute('href') || '')
      .filter((href) =>
        /\/checkout|\/checkouts|\/account|\/customer|login|register|recover|challenge|\/pay/i.test(href)
      )
  );

  return {
    enabledControls: enabledControls.map((item) => ({
      text: sanitizeText(item.text),
      href: sanitizeText(item.href)
    })),
    cartAddFormsOrLinks: cartAddFormsOrLinks.filter((item) => !item.disabled),
    checkoutAccountCustomerLinks: [...new Set(checkoutAccountCustomerLinks.map((href) => sanitizeText(href)))]
  };
}

async function inspectMediaSignals(page) {
  const imageCandidates = await page.locator('img[src]').evaluateAll((images) =>
    images
      .map((img) => ({
        srcPath: (() => {
          try {
            return new URL(img.getAttribute('src') || '', window.location.origin).pathname;
          } catch {
            return img.getAttribute('src') || '';
          }
        })(),
        alt: (img.getAttribute('alt') || '').trim(),
        inProductContext: Boolean(
          img.closest('.product-card, .product-gallery-main, .product-gallery-strip, .prod-img, main')
        )
      }))
      .filter((item) => item.srcPath && !item.srcPath.includes('data:image'))
  );

  return { imageCandidates };
}

function buildSummaries(crawlRecords, networkEntries, consoleErrors) {
  const collectionRecords = crawlRecords.filter((record) => record.route.includes('/collections/controlled-pilot'));
  const uniqueRoutes = new Set(crawlRecords.map((record) => record.route));

  const cjHandlesSeen = new Set();
  for (const record of crawlRecords) {
    for (const handle of record.cjProductTextVisible) {
      cjHandlesSeen.add(handle);
    }
    for (const handle of record.productHandlesVisible) {
      if (cjHandles.includes(handle)) {
        cjHandlesSeen.add(handle);
      }
    }
  }

  const gadgetgyzSeen = new Set();
  for (const record of crawlRecords) {
    for (const handle of record.gadgetgyzEraProductTextVisible) {
      gadgetgyzSeen.add(handle);
    }
  }

  const collectionCjHandles = new Set();
  for (const record of collectionRecords) {
    for (const handle of record.productHandlesVisible) {
      if (cjHandles.includes(handle)) {
        collectionCjHandles.add(handle);
      }
    }
  }

  const activeCommerce = crawlRecords.filter(
    (record) =>
      record.enabledCommerceControls.length > 0 ||
      record.cartAddFormsOrLinks.length > 0 ||
      record.checkoutAccountCustomerLinks.length > 0
  );

  const prohibitedRecords = crawlRecords.filter((record) => record.prohibitedWordingHits.length > 0);
  const mediaRecords = crawlRecords.filter((record) =>
    record.productMediaImageCandidates.some((img) => img.inProductContext)
  );

  const runtimeNoise = networkEntries.filter((entry) => entry.blockedPattern === 'shopify-runtime-noise');
  const riskyNetwork = networkEntries.filter(
    (entry) =>
      entry.blockedPattern &&
      entry.blockedPattern !== 'shopify-runtime-noise' &&
      entry.blockedPatternMatched
  );

  return {
    routesCrawledCount: uniqueRoutes.size,
    routeViewportRecords: crawlRecords.length,
    controlledPilotFinding: {
      routesVisited: collectionRecords.length,
      cjHandlesOnCollection: [...collectionCjHandles],
      gadgetgyzOnCollection: collectionRecords.some((record) => record.gadgetgyzEraProductTextVisible.length > 0)
    },
    cjVisibility: {
      handlesSeen: [...cjHandlesSeen],
      allThreeSeen: cjHandles.every((handle) => cjHandlesSeen.has(handle))
    },
    gadgetgyzAbsence: {
      handlesSeen: [...gadgetgyzSeen],
      absent: gadgetgyzSeen.size === 0
    },
    commerce: {
      activeRouteCount: activeCommerce.length,
      routes: activeCommerce.map((record) => ({
        route: record.route,
        viewport: record.viewport,
        enabledCommerceControls: record.enabledCommerceControls,
        cartAddFormsOrLinks: record.cartAddFormsOrLinks,
        checkoutAccountCustomerLinks: record.checkoutAccountCustomerLinks
      }))
    },
    media: {
      routesWithProductImages: mediaRecords.map((record) => ({
        route: record.route,
        viewport: record.viewport,
        count: record.productMediaImageCandidates.length
      }))
    },
    network: {
      totalEntries: networkEntries.length,
      runtimeNoiseCount: runtimeNoise.length,
      riskyPatternCount: riskyNetwork.length,
      riskyPatterns: riskyNetwork
    },
    console: {
      errorCount: consoleErrors.length,
      errors: consoleErrors
    },
    prohibitedRecords: prohibitedRecords.map((record) => ({
      route: record.route,
      viewport: record.viewport,
      hits: record.prohibitedWordingHits
    }))
  };
}

function computeVerdict(summaries, crawlRecords, networkEntries) {
  if (crawlRecords.some((record) => record.passwordGateVisible)) {
    return 'BLOCKED';
  }

  const failCommerce =
    summaries.commerce.activeRouteCount > 0 ||
    networkEntries.some((entry) =>
      ['cart-add', 'checkout-navigation', 'customer-account', 'wishlist', 'newsletter', 'payment'].includes(
        entry.blockedPattern
      )
    );

  const failGadgetgyz = !summaries.gadgetgyzAbsence.absent;
  const failProhibited = summaries.prohibitedRecords.length > 0;
  const failMedia = summaries.media.routesWithProductImages.length > 0;

  if (failCommerce || failGadgetgyz || failProhibited || failMedia) {
    return 'FAIL';
  }

  if (summaries.network.runtimeNoiseCount > 0 || summaries.console.errorCount > 0) {
    return 'PASS WITH NOTES';
  }

  return 'PASS';
}

async function writeEvidence(runDir, payload) {
  const {
    verdict,
    crawlRecords,
    summaries,
    networkEntries,
    consoleErrors,
    discoveredCount
  } = payload;

  const routeSummary = {
    verdict,
    discoveredUrlCount: discoveredCount,
    routesCrawledCount: summaries.routesCrawledCount,
    routeViewportRecords: summaries.routeViewportRecords,
    seeds: seedPaths,
    maxPages: MAX_PAGES,
    maxDepth: MAX_DEPTH
  };

  const visibleTextFindings = crawlRecords.map((record) => ({
    route: record.route,
    viewport: record.viewport,
    title: record.title,
    h1: record.h1,
    h2: record.h2,
    previewSafeWordingHits: record.previewSafeWordingHits,
    prohibitedWordingHits: record.prohibitedWordingHits,
    cjProductTextVisible: record.cjProductTextVisible,
    gadgetgyzEraProductTextVisible: record.gadgetgyzEraProductTextVisible
  }));

  const commerceSignalSummary = {
    verdict: summaries.commerce.activeRouteCount > 0 ? 'FAIL' : summaries.network.riskyPatternCount > 0 ? 'FAIL' : 'PASS',
    ...summaries.commerce,
    networkRiskyPatterns: summaries.network.riskyPatterns
  };

  const mediaSignalSummary = {
    verdict: summaries.media.routesWithProductImages.length > 0 ? 'FAIL' : 'PASS',
    ...summaries.media
  };

  const networkSummary = {
    verdict:
      summaries.network.riskyPatternCount > 0
        ? 'FAIL'
        : summaries.network.runtimeNoiseCount > 0
          ? 'PASS WITH NOTES'
          : 'PASS',
    entries: networkEntries
  };

  const csvHeader = [
    'route',
    'viewport',
    'final_url',
    'http_status',
    'password_gate_visible',
    'title',
    'h1',
    'h2',
    'product_handles_visible',
    'cj_product_text_visible',
    'gadgetgyz_era_product_text_visible',
    'preview_safe_wording_hits',
    'prohibited_wording_hits',
    'enabled_commerce_controls',
    'cart_add_forms_or_links',
    'checkout_account_customer_links',
    'product_media_image_candidates',
    'horizontal_overflow',
    'screenshot_path'
  ].join(',');

  const csvRows = crawlRecords.map((record) =>
    [
      csvEscape(record.route),
      csvEscape(record.viewport),
      csvEscape(record.finalUrl),
      record.httpStatus ?? '',
      record.passwordGateVisible,
      csvEscape(record.title),
      csvEscape(record.h1),
      csvEscape(record.h2.join(' | ')),
      csvEscape(record.productHandlesVisible.join('|')),
      csvEscape(record.cjProductTextVisible.join('|')),
      csvEscape(record.gadgetgyzEraProductTextVisible.join('|')),
      csvEscape(record.previewSafeWordingHits.join('|')),
      csvEscape(record.prohibitedWordingHits.join('|')),
      csvEscape(JSON.stringify(record.enabledCommerceControls)),
      csvEscape(JSON.stringify(record.cartAddFormsOrLinks)),
      csvEscape(JSON.stringify(record.checkoutAccountCustomerLinks)),
      csvEscape(JSON.stringify(record.productMediaImageCandidates)),
      record.horizontalOverflow,
      csvEscape(record.screenshotPath)
    ].join(',')
  );

  const report = buildMarkdownReport({
    verdict,
    runDir,
    summaries,
    crawlRecords,
    networkEntries,
    consoleErrors
  });

  await Promise.all([
    fsp.writeFile(path.join(runDir, 'qa-crawl-report.md'), report, 'utf8'),
    fsp.writeFile(path.join(runDir, 'crawl-route-table.csv'), [csvHeader, ...csvRows].join('\n') + '\n', 'utf8'),
    fsp.writeFile(path.join(runDir, 'crawl-route-summary.json'), JSON.stringify(routeSummary, null, 2) + '\n', 'utf8'),
    fsp.writeFile(
      path.join(runDir, 'visible-text-findings.json'),
      JSON.stringify(visibleTextFindings, null, 2) + '\n',
      'utf8'
    ),
    fsp.writeFile(
      path.join(runDir, 'commerce-signal-summary.json'),
      JSON.stringify(commerceSignalSummary, null, 2) + '\n',
      'utf8'
    ),
    fsp.writeFile(
      path.join(runDir, 'media-signal-summary.json'),
      JSON.stringify(mediaSignalSummary, null, 2) + '\n',
      'utf8'
    ),
    fsp.writeFile(path.join(runDir, 'network-summary.json'), JSON.stringify(networkSummary, null, 2) + '\n', 'utf8'),
    fsp.writeFile(
      path.join(runDir, 'console-errors.txt'),
      consoleErrors.map((entry) => `[${entry.viewport}/${entry.route}] ${entry.text}`).join('\n') +
        (consoleErrors.length ? '\n' : ''),
      'utf8'
    )
  ]);
}

function buildMarkdownReport({ verdict, runDir, summaries, crawlRecords, networkEntries, consoleErrors }) {
  const relDir = path.relative(repoRoot, runDir);
  return `# Slice 21AR controlled preview crawl

**Verdict:** ${verdict}
**Evidence:** \`${relDir}/\`
**Generated:** ${new Date().toISOString()}

## Summary

- Routes crawled (unique): ${summaries.routesCrawledCount}
- Route/viewport records: ${summaries.routeViewportRecords}
- Controlled-pilot collection visits: ${summaries.controlledPilotFinding.routesVisited}
- CJ handles seen anywhere: ${summaries.cjVisibility.handlesSeen.join(', ') || '(none)'}
- Gadgetgyz-era handles seen: ${summaries.gadgetgyzAbsence.handlesSeen.join(', ') || '(none)'}

## Controlled-pilot route

- CJ handles on collection routes: ${summaries.controlledPilotFinding.cjHandlesOnCollection.join(', ') || '(none)'}
- Gadgetgyz on collection: ${summaries.controlledPilotFinding.gadgetgyzOnCollection ? 'yes' : 'no'}

## Commerce / action

- Active commerce routes: ${summaries.commerce.activeRouteCount}
- Risky network patterns: ${summaries.network.riskyPatternCount}

## Media

- Routes with in-context product images: ${summaries.media.routesWithProductImages.length}

## Network / console

- Network entries: ${summaries.network.totalEntries}
- Runtime noise entries: ${summaries.network.runtimeNoiseCount}
- Console errors: ${summaries.console.errorCount}

## Prohibited wording

${summaries.prohibitedRecords.length ? summaries.prohibitedRecords.map((row) => `- ${row.route} (${row.viewport}): ${row.hits.join(', ')}`).join('\n') : '- None observed'}

## Route table

| Route | Viewport | Password gate | CJ visible | Gadgetgyz | Prohibited | Commerce | Screenshot |
| --- | --- | --- | --- | --- | --- | --- | --- |
${crawlRecords
  .map(
    (record) =>
      `| ${record.route} | ${record.viewport} | ${record.passwordGateVisible} | ${record.cjProductTextVisible.join(', ') || '-'} | ${record.gadgetgyzEraProductTextVisible.join(', ') || '-'} | ${record.prohibitedWordingHits.join(', ') || '-'} | ${record.enabledCommerceControls.length ? 'yes' : 'no'} | ${record.screenshotPath} |`
  )
  .join('\n')}

## Notes

- Read-only GET crawl with password unlock only.
- No HAR, trace, video, cookies, storageState, or browser profile saved.
- Password is never written to evidence files.
`;
}

function printFinalReport({ verdict, runDir, summaries }) {
  const relDir = path.relative(repoRoot, runDir);
  console.log('=== Slice 21AR Controlled Preview Crawl ===');
  console.log(`Verdict: ${verdict}`);
  console.log(`Evidence: ${relDir}/`);
  console.log(`Routes crawled (unique): ${summaries.routesCrawledCount}`);
  console.log(
    `Controlled-pilot: collection visits=${summaries.controlledPilotFinding.routesVisited}; CJ on collection=${summaries.controlledPilotFinding.cjHandlesOnCollection.join(', ') || '(none)'}; Gadgetgyz on collection=${summaries.controlledPilotFinding.gadgetgyzOnCollection}`
  );
  console.log(
    `CJ visibility: handles seen=${summaries.cjVisibility.handlesSeen.join(', ') || '(none)'}; all three=${summaries.cjVisibility.allThreeSeen}`
  );
  console.log(
    `Gadgetgyz-era absence: absent=${summaries.gadgetgyzAbsence.absent}; seen=${summaries.gadgetgyzAbsence.handlesSeen.join(', ') || '(none)'}`
  );
  console.log(
    `Commerce/action: active routes=${summaries.commerce.activeRouteCount}; risky network patterns=${summaries.network.riskyPatternCount}`
  );
  console.log(`Media: routes with product-context images=${summaries.media.routesWithProductImages.length}`);
  console.log(
    `Network/console: network entries=${summaries.network.totalEntries}; runtime noise=${summaries.network.runtimeNoiseCount}; console errors=${summaries.console.errorCount}`
  );
  console.log('\nGit status:');
  console.log(getGitStatusText());

  if (verdict === 'BLOCKED') {
    console.log('\nBlockers: unlock or Playwright setup failed before a complete crawl.');
  } else if (verdict === 'FAIL') {
    console.log('\nBlockers/regressions: review commerce, media, prohibited wording, or Gadgetgyz exposure in evidence.');
  } else if (verdict === 'PASS WITH NOTES') {
    console.log('\nNotes: Shopify runtime/console noise or incomplete preview-safe wording on some routes.');
  }
}

function getGitStatusText() {
  return spawnSync('git', ['status', '--short', '--branch'], { cwd: repoRoot, encoding: 'utf8' }).stdout.trim();
}

function csvEscape(value) {
  const text = String(value ?? '');
  if (/[",\n]/.test(text)) {
    return `"${text.replace(/"/g, '""')}"`;
  }
  return text;
}

function sanitizeText(value, password = process.env[PASSWORD_ENV] || '') {
  let next = String(value ?? '');
  if (password) {
    next = next.split(password).join('[REDACTED_PASSWORD]');
  }
  return next
    .replace(/([?&](?:access_token|token|authorization|auth|password)=)[^&\s]+/gi, '$1[REDACTED]')
    .replace(/\bBearer\s+[A-Za-z0-9._-]+\b/gi, 'Bearer [REDACTED]')
    .replace(/\s+/g, ' ')
    .trim();
}

function collectProhibitedHits(bodyText) {
  return prohibitedPhrases.filter((phrase) => {
    const lowerBody = bodyText.toLowerCase();
    if (!lowerBody.includes(phrase.toLowerCase())) {
      return false;
    }
    const ignoreRules = prohibitedIgnoreRules[phrase] || [];
    return !ignoreRules.some((pattern) => pattern.test(bodyText));
  });
}

function detectBlockedPattern(url) {
  const match = blockedPatternDefinitions.find((definition) => definition.test(url));
  return match ? match.name : null;
}

function attachConsoleCapture(page, target, password, getRoute, viewportKey) {
  page.on('console', (message) => {
    if (message.type() !== 'error') {
      return;
    }
    target.push({
      viewport: viewportKey,
      route: getRoute(),
      text: sanitizeText(message.text(), password)
    });
  });
  page.on('pageerror', (error) => {
    target.push({
      viewport: viewportKey,
      route: getRoute(),
      text: sanitizeText(error.message, password)
    });
  });
}

function attachNetworkCapture(page, target, password, getRoute, viewportKey) {
  page.on('response', (response) => {
    const request = response.request();
    if (request.method() !== 'GET') {
      return;
    }
    let url;
    try {
      url = new URL(request.url());
    } catch {
      return;
    }
    const blockedPattern = detectBlockedPattern(url);
    if (!blockedPattern && !['document', 'xhr', 'fetch', 'script'].includes(request.resourceType())) {
      return;
    }
    target.push({
      viewport: viewportKey,
      route: getRoute(),
      method: request.method(),
      hostname: url.hostname,
      pathname: sanitizeText(url.pathname, password),
      resourceType: request.resourceType(),
      status: response.status(),
      blockedPattern,
      blockedPatternMatched: Boolean(blockedPattern)
    });
  });
}

async function unlockStorefront(page, routeUrl, password) {
  await page.goto(routeUrl, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(1000);

  if (!(await isPasswordPage(page))) {
    return { unlocked: true };
  }

  const passwordInput = page.locator('input[type="password"], input[name="password"], #Password');
  if ((await passwordInput.count()) === 0) {
    return { unlocked: false };
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
      return { unlocked: false };
    }
    await Promise.allSettled([
      page.waitForLoadState('domcontentloaded', { timeout: 20000 }),
      form.first().evaluate((node) => node.submit())
    ]);
  }

  await page.waitForTimeout(1500);
  await page.goto(routeUrl, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(1000);
  return { unlocked: !(await isPasswordPage(page)) };
}

async function isPasswordPage(page) {
  if (page.url().includes('/password')) {
    return true;
  }
  const passwordInputs = await page.locator('input[type="password"], input[name="password"], #Password').count();
  if (passwordInputs > 0) {
    return true;
  }
  const bodyText = sanitizeText(await page.locator('body').innerText());
  return /enter using password|opening soon/i.test(bodyText);
}

main();
