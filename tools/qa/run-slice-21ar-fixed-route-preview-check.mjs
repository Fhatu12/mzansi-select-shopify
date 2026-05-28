#!/usr/bin/env node

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
const STORE_ORIGIN = 'https://sikhwarigroupdev.myshopify.com';
const PASSWORD_URL = `${STORE_ORIGIN}/password`;
const PREVIEW_THEME_ID = '162429075681';
const UNLOCK_CHECK_URL = `${STORE_ORIGIN}/?preview_theme_id=${PREVIEW_THEME_ID}`;
const MANUAL_UNLOCK_TIMEOUT_MS = 5 * 60 * 1000;

const evidenceRoot = path.join(repoRoot, 'artifacts', 'qa', 'slice-21ar-fixed-route-preview-check');

const routes = [
  {
    key: 'controlled-pilot',
    path: `/collections/controlled-pilot?preview_theme_id=${PREVIEW_THEME_ID}`,
    kind: 'collection'
  },
  {
    key: 'beverage-pdp',
    path: `/products/beverage-bottle-oil-bottle-handle-holder?preview_theme_id=${PREVIEW_THEME_ID}`,
    kind: 'pdp',
    handle: 'beverage-bottle-oil-bottle-handle-holder'
  },
  {
    key: 'sealer-pdp',
    path: `/products/usb-bag-sealer?preview_theme_id=${PREVIEW_THEME_ID}`,
    kind: 'pdp',
    handle: 'usb-bag-sealer'
  },
  {
    key: 'stand-pdp',
    path: `/products/foldable-magnetic-phone-holder-desktop-tablet-stand?preview_theme_id=${PREVIEW_THEME_ID}`,
    kind: 'pdp',
    handle: 'foldable-magnetic-phone-holder-desktop-tablet-stand'
  }
];

const viewports = [
  { key: 'desktop', width: 1366, height: 768 },
  { key: 'mobile', width: 390, height: 844 }
];

const cjSignals = [
  { handle: 'beverage-bottle-oil-bottle-handle-holder', text: 'Beverage & Oil Bottle Holder' },
  { handle: 'usb-bag-sealer', text: 'USB Bag Sealer' },
  { handle: 'foldable-magnetic-phone-holder-desktop-tablet-stand', text: 'Foldable Magnetic Phone Holder & Desktop Tablet Stand' }
];

const gadgetgyzSignals = [
  { handle: 'world-map-extended-mouse-pad', text: 'World Map Extended Mouse Pad' },
  { handle: 'gizzu-usb-to-type-c-cable-2m', text: 'Gizzu USB to Type-C Cable' },
  { handle: 'ugreen-4-in-1-usb-2-0-hub', text: 'UGREEN 4-in-1 USB 2.0 Hub' },
  { handle: 'acrylic-tablet-phone-stand', text: 'Acrylic Tablet & Phone Stand' }
];

const commercePatterns =
  /\/cart|\/cart\/add|\/checkout|\/checkouts|\/account|customer|login|register|recover|payment|order/i;

function parseArgs(argv) {
  const args = { manualUnlock: false, envUnlock: false, help: false };
  for (const arg of argv) {
    if (arg === '--manual-unlock') {
      args.manualUnlock = true;
    } else if (arg === '--env-unlock') {
      args.envUnlock = true;
    } else if (arg === '--help' || arg === '-h') {
      args.help = true;
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }
  return args;
}

function printHelp() {
  console.log(`Slice 21AR fixed-route preview check

Recommended:
  node tools/qa/run-slice-21ar-fixed-route-preview-check.mjs --manual-unlock

Opens a headed browser on the Shopify password page. Enter the storefront password
only in the browser window (never in the terminal). The script waits up to 5 minutes,
then runs fixed-route checks in the same browser context.

Secondary (not recommended):
  MZANSI_STOREFRONT_PASSWORD=... node tools/qa/run-slice-21ar-fixed-route-preview-check.mjs --env-unlock

Options:
  --manual-unlock   Headed browser; human unlocks password page manually
  --env-unlock      Automated unlock via MZANSI_STOREFRONT_PASSWORD (secondary)
  --help            Show this message
`);
}

function main() {
  let args;
  try {
    args = parseArgs(process.argv.slice(2));
  } catch (error) {
    printBlocked(error.message);
    process.exit(2);
  }

  if (args.help) {
    printHelp();
    return;
  }

  if (!args.manualUnlock && !args.envUnlock) {
    printHelp();
    printBlocked('No unlock mode selected. Re-run with --manual-unlock (recommended).');
    process.exit(2);
  }

  if (args.manualUnlock && args.envUnlock) {
    printBlocked('Use only one unlock mode: --manual-unlock or --env-unlock.');
    process.exit(2);
  }

  const unlockMode = args.manualUnlock ? 'manual' : 'env';
  const password = unlockMode === 'env' ? process.env[PASSWORD_ENV] : '';
  if (unlockMode === 'env' && !password) {
    printBlocked(`${PASSWORD_ENV} is missing for --env-unlock. Use --manual-unlock instead.`);
    process.exit(2);
  }

  resolvePlaywright()
    .then(({ playwright }) => runVerifier({ playwright, unlockMode, password }))
    .catch((error) => {
      printBlocked(error.message);
      process.exit(2);
    });
}

function resolvePlaywright() {
  const requireFromHere = createRequire(import.meta.url);
  try {
    requireFromHere.resolve('playwright');
    return Promise.resolve({ playwright: requireFromHere('playwright') });
  } catch {
    return Promise.reject(
      new Error(
        'Playwright is not resolvable from repo node_modules. Run npm install in the repo root before QA execution.'
      )
    );
  }
}

async function runVerifier({ playwright, unlockMode, password }) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').replace('T', '-').slice(0, 15);
  const runDir = path.join(evidenceRoot, timestamp);
  const screenshotsDir = path.join(runDir, 'screenshots');
  await fsp.mkdir(screenshotsDir, { recursive: true });

  const consoleErrors = [];
  const routeResults = [];
  let unlockVerified = false;

  const headless = unlockMode !== 'manual';
  let browser;
  try {
    browser = await playwright.chromium.launch({ headless });
  } catch (error) {
    throw new Error(
      unlockMode === 'manual'
        ? `Headed Chromium could not launch for manual unlock: ${error.message}`
        : `Chromium could not launch: ${error.message}`
    );
  }

  try {
    const context = await browser.newContext({
      viewport: { width: viewports[0].width, height: viewports[0].height }
    });
    const page = await context.newPage();
    attachConsoleCapture(page, consoleErrors, password);

    if (unlockMode === 'manual') {
      const unlock = await waitForManualUnlock(page);
      if (!unlock.ok) {
        throw new Error(unlock.reason || 'Manual unlock failed.');
      }
    } else {
      const unlock = await unlockStorefrontWithEnv(page, password);
      if (!unlock.ok) {
        throw new Error(unlock.reason || 'Password unlock failed.');
      }
    }
    unlockVerified = true;

    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.waitForTimeout(300);

      for (const route of routes) {
        const result = await inspectRoute({
          page,
          route,
          viewport,
          password,
          screenshotsDir,
          timestamp,
          unlockVerified
        });
        routeResults.push(result);
        printRouteLine(result);
      }
    }

    await context.close();

    const overallVerdict = computeOverallVerdict(routeResults, unlockVerified);
    const gitStatus = getGitStatusText();
    await writeEvidence(runDir, {
      overallVerdict,
      unlockVerified,
      unlockMode,
      routeResults,
      consoleErrors,
      gitStatus,
      timestamp
    });
    printFinalSummary({ overallVerdict, runDir, routeResults, unlockVerified, unlockMode, gitStatus });

    if (overallVerdict === 'FAIL' || overallVerdict === 'BLOCKED') {
      process.exitCode = 1;
    }
  } catch (error) {
    const overallVerdict = unlockVerified ? 'FAIL' : 'BLOCKED';
    const gitStatus = getGitStatusText();
    console.error(error.message);
    await writeFailureEvidence(runDir, {
      overallVerdict,
      unlockVerified,
      unlockMode,
      routeResults,
      consoleErrors,
      gitStatus,
      error: error.message
    }).catch(() => {});
    printFinalSummary({
      overallVerdict,
      runDir,
      routeResults,
      unlockVerified,
      unlockMode,
      gitStatus,
      error: error.message
    });
    process.exitCode = 1;
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

async function waitForManualUnlock(page) {
  await page.goto(PASSWORD_URL, { waitUntil: 'domcontentloaded', timeout: 45000 });

  console.log('');
  console.log('=== Manual storefront unlock ===');
  console.log(
    'Enter the storefront password in the opened browser window. Do not paste it into terminal. The script will continue after unlock.'
  );
  console.log(`Waiting up to ${MANUAL_UNLOCK_TIMEOUT_MS / 60000} minutes...`);
  console.log('');

  const started = Date.now();
  while (Date.now() - started < MANUAL_UNLOCK_TIMEOUT_MS) {
    await page.waitForTimeout(2000);

    if (!(await isPasswordGate(page))) {
      await page.goto(UNLOCK_CHECK_URL, { waitUntil: 'domcontentloaded', timeout: 45000 });
      await page.waitForTimeout(1000);
      if (!(await isPasswordGate(page))) {
        console.log('Manual unlock detected. Continuing with fixed-route checks.');
        return { ok: true };
      }
    }
  }

  return { ok: false, reason: 'Manual unlock did not complete within 5 minutes.' };
}

async function unlockStorefrontWithEnv(page, password) {
  await page.goto(PASSWORD_URL, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(800);

  const passwordInput = page.locator('input[type="password"], input[name="password"], #Password');
  if ((await passwordInput.count()) === 0) {
    return { ok: false, reason: 'Password page did not expose a password input.' };
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
      return { ok: false, reason: 'Password page had no submit control.' };
    }
    await Promise.allSettled([
      page.waitForLoadState('domcontentloaded', { timeout: 20000 }),
      form.first().evaluate((node) => node.submit())
    ]);
  }

  await page.waitForTimeout(1200);
  await page.goto(UNLOCK_CHECK_URL, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(1000);

  if (await isPasswordGate(page)) {
    return { ok: false, reason: 'Storefront still shows the password gate after env unlock submit.' };
  }

  return { ok: true };
}

async function inspectRoute({ page, route, viewport, password, screenshotsDir, timestamp, unlockVerified }) {
  const url = `${STORE_ORIGIN}${route.path}`;
  const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(1000);

  const onPasswordGate = await isPasswordGate(page);
  const unlocked = unlockVerified && !onPasswordGate;
  const title = sanitizeText(await page.title(), password);
  const bodyText = sanitizeText(await page.locator('body').innerText(), password);
  const textSnippet = bodyText.slice(0, 220);

  const cjVisibility = evaluateCjVisibility(route, bodyText, page.url());
  const gadgetgyzAbsent = !gadgetgyzSignals.some((signal) =>
    bodyTextIncludesSignal(bodyText, page.url(), signal)
  );

  const commerce = await detectCommerceSignals(page);
  const media = await detectCjProductMedia(page);

  const checks = [];
  if (!unlocked) {
    checks.push('password-gate-visible');
  }
  if (route.kind === 'collection' && cjVisibility.productSurfaceVisible && !cjVisibility.allExpectedVisible) {
    checks.push('cj-collection-incomplete');
  }
  if (route.kind === 'pdp' && cjVisibility.productSurfaceVisible && !cjVisibility.expectedVisible) {
    checks.push('cj-pdp-missing');
  }
  if (!gadgetgyzAbsent) {
    checks.push('gadgetgyz-present');
  }
  if (!commerce.addToCartBuyNowAbsent) {
    checks.push('active-purchase-control');
  }
  if (!commerce.checkoutCustomerAbsent) {
    checks.push('active-checkout-customer-link');
  }
  if (media.supplierProductMediaPresent) {
    checks.push('cj-product-media-present');
  }

  const httpStatus = response ? response.status() : null;
  const contractAssessment = assessRouteContract({ route, httpStatus, unlocked });

  let verdict = 'PASS';
  if (!contractAssessment.blocking) {
    verdict = 'INFO';
  } else if (!unlocked || checks.length > 0) {
    verdict = 'FAIL';
  } else if (media.onlyGenericPlaceholderVisuals) {
    verdict = 'PASS WITH NOTES';
  }

  const screenshotName = `${route.key}-${viewport.key}-${timestamp}.png`;
  const screenshotPath = path.join(screenshotsDir, screenshotName);
  await page.screenshot({ path: screenshotPath, fullPage: true });

  return {
    route: route.path,
    routeKey: route.key,
    viewport: viewport.key,
    finalUrl: page.url(),
    httpStatus,
    unlocked,
    title,
    textSnippet,
    expectedCjVisible: cjVisibility.summary,
    gadgetgyzAbsent,
    addToCartBuyNowAbsent: commerce.addToCartBuyNowAbsent,
    checkoutCustomerAbsent: commerce.checkoutCustomerAbsent,
    mediaPresent: media.mediaPresent,
    onlyGenericPlaceholderVisuals: media.onlyGenericPlaceholderVisuals,
    contractClassification: contractAssessment.classification,
    blocking: contractAssessment.blocking,
    contractNote: contractAssessment.note,
    failedChecks: checks,
    verdict
  };
}

function assessRouteContract({ route, httpStatus, unlocked }) {
  if (route.key === 'controlled-pilot' && unlocked && httpStatus === 404) {
    return {
      classification: 'informational/non-blocking 404',
      blocking: false,
      note:
        '/collections/controlled-pilot is informational only under the accepted Product Owner contract while Shopify serves it through 404 handling.'
    };
  }

  return {
    classification: 'blocking',
    blocking: true,
    note: ''
  };
}

function evaluateCjVisibility(route, bodyText, pageUrl) {
  const haystack = `${bodyText} ${pageUrl}`.toLowerCase();

  if (route.kind === 'collection') {
    const visibleSignals = cjSignals.filter((signal) => bodyTextIncludesSignal(bodyText, pageUrl, signal));
    const productSurfaceVisible =
      bodyText.includes('product') ||
      haystack.includes('/products/') ||
      visibleSignals.length > 0 ||
      /controlled pilot|preview/i.test(bodyText);
    return {
      productSurfaceVisible,
      allExpectedVisible: visibleSignals.length === cjSignals.length,
      expectedVisible: visibleSignals.length > 0,
      summary: productSurfaceVisible
        ? `${visibleSignals.length}/${cjSignals.length} CJ signals visible`
        : 'no product surface detected'
    };
  }

  const signal = cjSignals.find((item) => item.handle === route.handle);
  const expectedVisible = signal ? bodyTextIncludesSignal(bodyText, pageUrl, signal) : false;
  return {
    productSurfaceVisible: bodyText.length > 0,
    allExpectedVisible: expectedVisible,
    expectedVisible,
    summary: expectedVisible ? 'expected CJ PDP visible' : 'expected CJ PDP not visible'
  };
}

function bodyTextIncludesSignal(bodyText, pageUrl, signal) {
  const haystack = `${bodyText} ${pageUrl}`.toLowerCase();
  return haystack.includes(signal.handle) || haystack.includes(signal.text.toLowerCase());
}

async function detectCommerceSignals(page) {
  const controls = await page.locator('button, a, input[type="submit"], form').evaluateAll((nodes) =>
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

  const activePurchase = controls.filter(
    (item) => !item.disabled && !item.hidden && /(add to cart|buy now)/i.test(item.text)
  );

  const activeCheckoutCustomer = controls.filter(
    (item) =>
      item.tag === 'a' &&
      !item.disabled &&
      !item.hidden &&
      commercePatterns.test(item.href) &&
      !/^#/.test(item.href)
  );

  return {
    addToCartBuyNowAbsent: activePurchase.length === 0,
    checkoutCustomerAbsent: activeCheckoutCustomer.length === 0
  };
}

async function detectCjProductMedia(page) {
  const candidates = await page
    .locator(
      '.product-card img[src], .prod-img img[src], .product-gallery-main img[src], .product-gallery-strip img[src], main img[src]'
    )
    .evaluateAll((images) =>
      images.map((img) => {
        const src = img.getAttribute('src') || '';
        const alt = (img.getAttribute('alt') || '').trim();
        const inProductSurface = Boolean(
          img.closest('.product-card, .prod-img, .product-gallery-main, .product-gallery-strip, .product-main-shell')
        );
        const loaded = img.complete && img.naturalWidth > 1 && img.naturalHeight > 1;
        const isPlaceholder =
          !loaded ||
          !src ||
          src.startsWith('data:image') ||
          /placeholder|icon|logo|badge|svg/i.test(src) ||
          /placeholder|no media|preview/i.test(alt);
        return { inProductSurface, isPlaceholder };
      })
    );

  const productSurfaceImages = candidates.filter((item) => item.inProductSurface);
  const supplierProductMedia = productSurfaceImages.filter((item) => !item.isPlaceholder);
  const onlyGenericPlaceholderVisuals =
    productSurfaceImages.length > 0 && supplierProductMedia.length === 0;

  return {
    mediaPresent: supplierProductMedia.length > 0,
    supplierProductMediaPresent: supplierProductMedia.length > 0,
    onlyGenericPlaceholderVisuals
  };
}

function computeOverallVerdict(routeResults, unlockVerified) {
  if (!unlockVerified) {
    return 'BLOCKED';
  }
  const blockingResults = routeResults.filter((result) => result.blocking !== false);
  if (blockingResults.some((result) => !result.unlocked || result.verdict === 'FAIL')) {
    return 'FAIL';
  }
  if (blockingResults.some((result) => result.verdict === 'PASS WITH NOTES')) {
    return 'PASS WITH NOTES';
  }
  return 'PASS';
}

async function writeEvidence(runDir, payload) {
  const { overallVerdict, unlockVerified, unlockMode, routeResults, consoleErrors, gitStatus, timestamp } =
    payload;
  const relDir = path.relative(repoRoot, runDir);

  const report = buildMarkdownReport({
    overallVerdict,
    unlockVerified,
    unlockMode,
    routeResults,
    consoleErrors,
    relDir,
    timestamp
  });

  const csvHeader = [
    'route',
    'viewport',
    'unlocked',
    'title',
    'text_snippet',
    'expected_cj_visible',
    'gadgetgyz_absent',
    'add_to_cart_buy_now_absent',
    'checkout_customer_absent',
    'media_present',
    'contract_classification',
    'blocking',
    'verdict'
  ].join(',');

  const csvRows = routeResults.map((result) =>
    [
      csvEscape(result.route),
      csvEscape(result.viewport),
      result.unlocked,
      csvEscape(result.title),
      csvEscape(result.textSnippet),
      csvEscape(result.expectedCjVisible),
      result.gadgetgyzAbsent,
      result.addToCartBuyNowAbsent,
      result.checkoutCustomerAbsent,
      result.mediaPresent,
      csvEscape(result.contractClassification),
      result.blocking,
      csvEscape(result.verdict)
    ].join(',')
  );

  await Promise.all([
    fsp.writeFile(path.join(runDir, 'qa-fixed-route-report.md'), report, 'utf8'),
    fsp.writeFile(
      path.join(runDir, 'route-results.json'),
      JSON.stringify({ overallVerdict, unlockVerified, unlockMode, routeResults }, null, 2) + '\n',
      'utf8'
    ),
    fsp.writeFile(path.join(runDir, 'route-results.csv'), [csvHeader, ...csvRows].join('\n') + '\n', 'utf8'),
    fsp.writeFile(
      path.join(runDir, 'console-errors.txt'),
      consoleErrors.map((entry) => entry.text).join('\n') + (consoleErrors.length ? '\n' : ''),
      'utf8'
    ),
    fsp.writeFile(path.join(runDir, 'git-status-after.txt'), `${gitStatus}\n`, 'utf8')
  ]);
}

async function writeFailureEvidence(runDir, payload) {
  await fsp.mkdir(runDir, { recursive: true });
  await writeEvidence(runDir, { ...payload, timestamp: path.basename(runDir) });
}

function buildMarkdownReport({ overallVerdict, unlockVerified, unlockMode, routeResults, consoleErrors, relDir, timestamp }) {
  return `# Slice 21AR fixed-route preview check

**Verdict:** ${overallVerdict}
**Unlock mode:** ${unlockMode}
**Unlock verified before routes:** ${unlockVerified ? 'yes' : 'no'}
**Evidence:** \`${relDir}/\`
**Generated:** ${timestamp}

## Route results

| Route | Viewport | Unlocked | CJ | Gadgetgyz absent | Commerce absent | Media | Contract | Verdict |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
${routeResults
  .map(
    (result) =>
      `| ${result.route} | ${result.viewport} | ${result.unlocked ? 'yes' : 'no'} | ${result.expectedCjVisible} | ${result.gadgetgyzAbsent ? 'yes' : 'no'} | ${result.addToCartBuyNowAbsent && result.checkoutCustomerAbsent ? 'yes' : 'no'} | ${result.mediaPresent ? 'yes' : 'no'} | ${result.contractClassification} | ${result.verdict} |`
  )
  .join('\n')}

## Console errors

${consoleErrors.length ? consoleErrors.map((entry) => `- ${entry.text}`).join('\n') : '- None'}

## Notes

- Fixed routes only; no crawl or link following.
- Manual unlock: password entered only in the headed browser by the human operator.
- No password, cookies, storageState, HAR, trace, video, or browser profile saved.
- Same browser context reused after unlock for all route checks.
- Contract-aware verdicting: \`/collections/controlled-pilot\` remains recorded honestly, but when it is unlocked and still served through Shopify 404 handling it is treated as informational/non-blocking under the accepted Product Owner contract; overall verdicting is based on the three CJ PDP preview routes.
`;
}

function printRouteLine(result) {
  console.log(
    [
      `route=${result.route}`,
      `viewport=${result.viewport}`,
      `unlocked=${result.unlocked ? 'yes' : 'no'}`,
      `title="${result.title.slice(0, 80)}${result.title.length > 80 ? '…' : ''}"`,
      `snippet="${result.textSnippet.slice(0, 120)}${result.textSnippet.length > 120 ? '…' : ''}"`,
      `cj=${result.expectedCjVisible}`,
      `gadgetgyz_absent=${result.gadgetgyzAbsent ? 'yes' : 'no'}`,
      `add_to_cart_buy_now_absent=${result.addToCartBuyNowAbsent ? 'yes' : 'no'}`,
      `checkout_customer_absent=${result.checkoutCustomerAbsent ? 'yes' : 'no'}`,
      `media=${result.mediaPresent ? 'yes' : 'no'}`,
      `contract=${result.contractClassification}`,
      `verdict=${result.verdict}`
    ].join(' | ')
  );
}

function printFinalSummary({ overallVerdict, runDir, routeResults, unlockVerified, unlockMode, gitStatus, error }) {
  console.log('\n=== Slice 21AR Fixed-Route Preview Check ===');
  console.log(`Verdict: ${overallVerdict}`);
  console.log(`Unlock mode: ${unlockMode}`);
  console.log(`Evidence: ${path.relative(repoRoot, runDir)}/`);
  console.log(`Unlock verified before route checks: ${unlockVerified ? 'yes' : 'no'}`);
  console.log(`Route records: ${routeResults.length}`);
  if (error) {
    console.log(`Error: ${error}`);
  }
  console.log('\nGit status:');
  console.log(gitStatus);
}

function printBlocked(reason) {
  console.log('\n=== Slice 21AR Fixed-Route Preview Check ===');
  console.log('Verdict: BLOCKED');
  console.log(`Reason: ${reason}`);
  console.log('Evidence: (not created)');
  console.log('\nGit status:');
  console.log(getGitStatusText());
}

async function isPasswordGate(page) {
  if (page.url().includes('/password')) {
    return true;
  }
  if ((await page.locator('input[type="password"], input[name="password"], #Password').count()) > 0) {
    return true;
  }
  const bodyText = sanitizeText(await page.locator('body').innerText());
  return /enter using password|opening soon/i.test(bodyText);
}

function attachConsoleCapture(page, target, password) {
  page.on('console', (message) => {
    if (message.type() === 'error') {
      target.push({ text: sanitizeText(message.text(), password) });
    }
  });
  page.on('pageerror', (error) => {
    target.push({ text: sanitizeText(error.message, password) });
  });
}

function sanitizeText(value, password = '') {
  let next = String(value ?? '');
  if (password) {
    next = next.split(password).join('[REDACTED_PASSWORD]');
  }
  return next
    .replace(/([?&](?:access_token|token|authorization|auth|password)=)[^&\s]+/gi, '$1[REDACTED]')
    .replace(/\s+/g, ' ')
    .trim();
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

main();
