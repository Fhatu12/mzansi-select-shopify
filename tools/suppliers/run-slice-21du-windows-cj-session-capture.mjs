#!/usr/bin/env node
/**
 * Slice 21DU — attach to an existing Windows Chrome/Edge CJ session via CDP.
 * Safety: no storageState, cookies, tokens, HAR, trace, video, or credential capture.
 * Evidence: artifacts/suppliers/slice-21du/ (gitignored; not committed).
 */

import fsp from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..', '..');
const evidenceRoot = path.join(repoRoot, 'artifacts', 'suppliers', 'slice-21du');
const summaryPath = path.join(evidenceRoot, 'slice-21du-run-summary.json');

const CJ_ORIGIN = 'https://www.cjdropshipping.com';
const DEFAULT_CDP_URL = 'http://127.0.0.1:9222';
const STEP_TIMEOUT_MS = 45_000;
const LOGIN_WAIT_MS = Number(process.env.SLICE_21DU_LOGIN_WAIT_MS || 10 * 60 * 1000);
const ASSIST_WAIT_MS = Number(process.env.SLICE_21DU_ASSIST_WAIT_MS || 8 * 60 * 1000);
const POLL_MS = 3000;

const PRODUCTS = [
  {
    id: 'DG-KS-01',
    shopifyHandle: 'beverage-bottle-oil-bottle-handle-holder',
    supplierSku: 'CJYD230000901AZ',
    variant: 'Blue',
    productName: 'Beverage & oil bottle handle holder',
    stale21ab: {
      shippingCost: '$6.21',
      landedCost: '~$7.40',
      deliveryEstimate: '20–60 days + 1–3 days processing'
    }
  },
  {
    id: 'DG-OD-01',
    shopifyHandle: 'foldable-magnetic-phone-holder-desktop-tablet-stand',
    supplierSku: 'CJYD245830501AZ',
    variant: 'Gun Gray',
    productName: 'Foldable magnetic phone holder & desktop tablet stand',
    stale21ab: {
      shippingCost: '$8.65',
      landedCost: '~$23.41',
      deliveryEstimate: '20–60 days + 1–3 days processing'
    }
  }
];

function resolvePlaywright() {
  return createRequire(import.meta.url)('playwright');
}

function nowIso() {
  return new Date().toISOString();
}

function getCliOption(name, fallback = null) {
  const args = process.argv.slice(2);
  for (let index = 0; index < args.length; index += 1) {
    if (args[index] === name) {
      return args[index + 1] ?? fallback;
    }
    if (args[index].startsWith(`${name}=`)) {
      return args[index].slice(name.length + 1);
    }
  }
  return fallback;
}

function hasFlag(name) {
  return process.argv.slice(2).includes(name);
}

function usage() {
  return [
    'Usage: node tools/suppliers/run-slice-21du-windows-cj-session-capture.mjs [--cdp-url http://127.0.0.1:9222]',
    '',
    'Slice 21DU: attach to an existing Windows Chrome/Edge CJ session via CDP and capture',
    'South Africa calculator proof for DG-KS-01 and DG-OD-01.',
    '',
    'Required operator setup:',
    '  1. Close all Chrome/Edge windows on Windows.',
    '  2. Relaunch Chrome or Edge with --remote-debugging-port=9222 using the normal profile.',
    '  3. Sign in to CJ in that Windows browser session.',
    '',
    'Safety:',
    '  - No fresh browser profile',
    '  - No storageState',
    '  - No password, cookie, token, HAR, trace, or video capture',
    '  - Evidence writes only to artifacts/suppliers/slice-21du/'
  ].join('\n');
}

function excerpt(text, max = 1800) {
  const clean = String(text || '').replace(/\s+/g, ' ').trim();
  return clean.length > max ? `${clean.slice(0, max)}…` : clean;
}

function toUsd(value) {
  if (value === null || value === undefined || value === '') return 'not captured';
  const numeric = typeof value === 'number' ? value : Number(String(value).replace(/[^\d.]/g, ''));
  if (!Number.isFinite(numeric)) return String(value);
  return `$${numeric.toFixed(2)}`;
}

function parseMoney(raw) {
  const numeric = Number.parseFloat(String(raw).replace(/[^\d.]/g, ''));
  return Number.isFinite(numeric) ? numeric : null;
}

function compareMoney(fresh, stale) {
  const freshNumeric = parseMoney(fresh);
  const staleNumeric = parseMoney(stale);
  if (freshNumeric === null || staleNumeric === null) return 'Fresh comparison unavailable';
  const diff = Number((freshNumeric - staleNumeric).toFixed(2));
  if (diff === 0) return `Matches stale 21AB (${stale})`;
  if (diff > 0) return `Higher than stale 21AB by $${diff.toFixed(2)} (${stale})`;
  return `Lower than stale 21AB by $${Math.abs(diff).toFixed(2)} (${stale})`;
}

function getWindowsLaunchInstructions() {
  return [
    'Windows PowerShell (use one browser only; do not add --user-data-dir):',
    '',
    '# Google Chrome',
    'Stop-Process -Name chrome -ErrorAction SilentlyContinue',
    'Start-Process -FilePath "$env:ProgramFiles\\Google\\Chrome\\Application\\chrome.exe" -ArgumentList "--remote-debugging-port=9222"',
    '',
    '# Microsoft Edge',
    'Stop-Process -Name msedge -ErrorAction SilentlyContinue',
    'Start-Process -FilePath "${env:ProgramFiles(x86)}\\Microsoft\\Edge\\Application\\msedge.exe" -ArgumentList "--remote-debugging-port=9222"',
    '',
    'After relaunch, sign in to CJ in that Windows browser and re-run this harness.'
  ].join('\n');
}

async function ensureEvidenceRoot() {
  await fsp.mkdir(evidenceRoot, { recursive: true });
}

async function writeCaptureNotes(dir, fields) {
  await fsp.mkdir(dir, { recursive: true });
  const lines = [
    'slice: 21DU',
    'session_mode: windows-cdp',
    `candidate_id: ${fields.candidateId}`,
    `shopify_handle: ${fields.shopifyHandle}`,
    `supplier_sku: ${fields.supplierSku}`,
    `variant_tested: ${fields.variantTested}`,
    `destination: ${fields.destination}`,
    `captured_at: ${fields.capturedAt}`,
    `cdp_url: ${fields.cdpUrl}`,
    `source_url: ${fields.sourceUrl || 'not captured'}`,
    `source_title: ${fields.sourceTitle || 'not captured'}`,
    `product_unit_cost: ${fields.productUnitCost || 'not captured'}`,
    `shipping_method_to_za: ${fields.shippingMethod || 'not captured'}`,
    `shipping_cost: ${fields.shippingCost || 'not captured'}`,
    `delivery_estimate: ${fields.deliveryEstimate || 'not captured'}`,
    `total_landed_cost_estimate: ${fields.totalLandedCostEstimate || 'not captured'}`,
    `currency: ${fields.currency || 'USD'}`,
    `timestamp_utc: ${fields.timestampUtc || fields.capturedAt}`,
    `recommendation: ${fields.recommendation}`,
    `blocker_reason: ${fields.blockerReason || 'none'}`,
    `operator_steps_required: ${fields.operatorStepsRequired || 'none'}`,
    `stale_21ab_shipping_cost: ${fields.stale21abShippingCost}`,
    `stale_21ab_landed_cost_estimate: ${fields.stale21abLandedCost}`,
    `stale_21ab_delivery_estimate: ${fields.stale21abDeliveryEstimate}`,
    `shipping_cost_vs_21ab: ${fields.shippingCostVs21ab || 'Fresh comparison unavailable'}`,
    `landed_cost_vs_21ab: ${fields.landedCostVs21ab || 'Fresh comparison unavailable'}`,
    `calculator_mode: ${fields.calculatorMode || 'auto+assisted'}`,
    `evidence_path: ${dir}`,
    `automation: tools/suppliers/run-slice-21du-windows-cj-session-capture.mjs`,
    `page_text_excerpt: ${fields.pageTextExcerpt || 'none'}`
  ];
  const file = path.join(dir, 'capture-notes.txt');
  await fsp.writeFile(file, `${lines.join('\n')}\n`, 'utf8');
  return file;
}

async function writeSummary(summary) {
  await ensureEvidenceRoot();
  await fsp.writeFile(summaryPath, `${JSON.stringify(summary, null, 2)}\n`, 'utf8');
}

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} for ${url}`);
  }
  return response.json();
}

async function probeCdp(cdpUrl) {
  const versionUrl = new URL('/json/version', cdpUrl).toString();
  try {
    const version = await fetchJson(versionUrl);
    return {
      ok: true,
      cdpUrl,
      browser: version.Browser || 'unknown',
      protocolVersion: version['Protocol-Version'] || 'unknown',
      userAgent: version['User-Agent'] || 'unknown'
    };
  } catch (error) {
    return {
      ok: false,
      cdpUrl,
      error: error.message || String(error),
      launchInstructions: getWindowsLaunchInstructions()
    };
  }
}

function buildBlockedFields(product, cdpUrl, blockerReason, sourceTitle = 'not captured') {
  return {
    candidateId: product.id,
    shopifyHandle: product.shopifyHandle,
    supplierSku: product.supplierSku,
    variantTested: product.variant,
    destination: 'South Africa',
    capturedAt: nowIso(),
    cdpUrl,
    sourceTitle,
    sourceUrl: 'not captured',
    productUnitCost: 'not captured',
    shippingMethod: 'not captured',
    shippingCost: 'not captured',
    deliveryEstimate: 'not captured',
    totalLandedCostEstimate: 'not captured',
    currency: 'USD',
    timestampUtc: nowIso(),
    recommendation: 'blocked',
    blockerReason,
    operatorStepsRequired: 'none',
    stale21abShippingCost: product.stale21ab.shippingCost,
    stale21abLandedCost: product.stale21ab.landedCost,
    stale21abDeliveryEstimate: product.stale21ab.deliveryEstimate,
    shippingCostVs21ab: 'Fresh comparison unavailable',
    landedCostVs21ab: 'Fresh comparison unavailable',
    calculatorMode: 'auto+assisted',
    pageTextExcerpt: 'none'
  };
}

async function materialiseBlockedRun({ cdpUrl, reason, connection }) {
  const results = [];
  for (const product of PRODUCTS) {
    const dir = path.join(evidenceRoot, product.id);
    const fields = buildBlockedFields(product, cdpUrl, reason);
    const notesFile = await writeCaptureNotes(dir, fields);
    results.push({
      id: product.id,
      sku: product.supplierSku,
      recommendation: fields.recommendation,
      blockerReason: fields.blockerReason,
      notesFile
    });
  }
  const summary = {
    slice: '21DU',
    capturedAt: nowIso(),
    cdpUrl,
    cdpConnection: connection,
    cjSessionDetected: false,
    results
  };
  await writeSummary(summary);
  return summary;
}

async function getDefaultContext(browser) {
  const contexts = browser.contexts();
  if (!contexts.length) {
    throw new Error('No browser contexts were exposed by the attached Windows browser session');
  }
  return contexts[0];
}

async function createWorkingPage(context) {
  const blankPage = context.pages().find((page) => /^about:blank\/?$/.test(page.url()));
  if (blankPage) return blankPage;
  return context.newPage();
}

async function safeVisibleText(page) {
  const selectors = [
    '#product-detail',
    '.product-detail',
    '[class*="product-detail"]',
    '[class*="logistics"]',
    'main',
    '#app',
    'body'
  ];
  for (const selector of selectors) {
    const locator = page.locator(selector).first();
    if (await locator.count().catch(() => 0)) {
      const text = await locator.innerText().catch(() => '');
      if (text && text.trim().length > 150) return text;
    }
  }
  return '';
}

function hasLoggedInSignals(text) {
  return /(logout|sign out|wallet|my cj|my account|account center|user center|orders? center)/i.test(text);
}

function hasLoggedOutSignals(text) {
  return /(log in|login|sign in|register|turnstile verification failed|verify you are human|cloudflare)/i.test(
    text
  );
}

async function detectCjLoggedIn(page) {
  const body = await safeVisibleText(page);
  const url = page.url();
  if (/login\.html/i.test(url) && hasLoggedOutSignals(body) && !hasLoggedInSignals(body)) {
    return false;
  }
  if (hasLoggedInSignals(body) && !/login|sign in/i.test(url)) {
    return true;
  }
  if (/product-detail|searchWarehouseProductList|calculation/i.test(url) && !hasLoggedOutSignals(body)) {
    return true;
  }
  return false;
}

async function waitForLoggedInSession(page) {
  await page.goto(CJ_ORIGIN, { waitUntil: 'domcontentloaded', timeout: STEP_TIMEOUT_MS }).catch(() => {});
  if (await detectCjLoggedIn(page)) {
    return true;
  }

  console.log('\nCJ login is not detected yet in the attached Windows browser session.');
  console.log('Please sign in to CJ in that Windows browser window. Do not paste credentials into this terminal.');
  console.log('The harness will keep checking and continue automatically after login is detected.\n');

  const started = Date.now();
  while (Date.now() - started < LOGIN_WAIT_MS) {
    await page.waitForTimeout(POLL_MS);
    await page.goto(CJ_ORIGIN, { waitUntil: 'domcontentloaded', timeout: STEP_TIMEOUT_MS }).catch(() => {});
    if (await detectCjLoggedIn(page)) {
      console.log('CJ login detected in the attached Windows browser session.\n');
      return true;
    }
  }
  return false;
}

async function tryClickText(page, pattern) {
  const locator = page.getByText(pattern, { exact: false }).first();
  if (await locator.count().catch(() => 0)) {
    await locator.click({ timeout: 7000 }).catch(() => {});
    await page.waitForTimeout(1200);
    return true;
  }
  return false;
}

async function selectVariant(page, variant) {
  const exact = page.getByRole('button', { name: new RegExp(`^${variant}$`, 'i') }).first();
  if (await exact.count().catch(() => 0)) {
    await exact.click({ timeout: 7000 }).catch(() => {});
    await page.waitForTimeout(1200);
    return true;
  }
  return tryClickText(page, new RegExp(variant, 'i'));
}

async function trySetCountry(page, country) {
  const comboSelectors = [
    'input[placeholder*="country" i]',
    'input[placeholder*="destination" i]',
    'input[type="search"]',
    'input[type="text"]'
  ];
  for (const selector of comboSelectors) {
    const input = page.locator(selector).first();
    if (!(await input.count().catch(() => 0))) continue;
    await input.click({ timeout: 5000 }).catch(() => {});
    await input.fill(country).catch(() => {});
    await page.waitForTimeout(900);
    const option =
      page.getByRole('option', { name: /south africa/i }).first() ||
      page.getByText(/south africa/i, { exact: false }).first();
    if (await option.count().catch(() => 0)) {
      await option.click({ timeout: 5000 }).catch(() => {});
      await page.waitForTimeout(900);
      return true;
    }
  }

  if (await tryClickText(page, /ship to|destination|country/i)) {
    if (await tryClickText(page, /south africa/i)) {
      return true;
    }
  }

  return tryClickText(page, /south africa/i);
}

async function tryOpenCalculator(page) {
  const patterns = [
    /shipping fee|shipping cost|shipping calculation|calculate/i,
    /logistics|delivery/i,
    /ship to|destination/i
  ];
  let clicked = false;
  for (const pattern of patterns) {
    clicked = (await tryClickText(page, pattern)) || clicked;
  }
  return clicked;
}

function extractFieldByLabel(lines, labels) {
  for (const line of lines) {
    for (const label of labels) {
      const regex = new RegExp(`${label}\\s*[:：-]?\\s*(.+)$`, 'i');
      const match = line.match(regex);
      if (match && match[1]) {
        return match[1].trim();
      }
    }
  }
  return '';
}

function collectMoneyValues(text) {
  const matches = text.match(/\$\s?\d+(?:\.\d{1,2})?/g) || [];
  return matches
    .map((token) => parseMoney(token))
    .filter((value) => value !== null)
    .filter((value, index, list) => list.indexOf(value) === index);
}

function extractDeliveryText(lines, text) {
  const byLabel = extractFieldByLabel(lines, [
    'delivery estimate',
    'delivery time',
    'estimated delivery',
    'shipping time',
    'processing time'
  ]);
  if (byLabel) return byLabel;
  const match = text.match(
    /(\d+\s*[-–]\s*\d+\s*days?(?:\s*\+\s*\d+\s*[-–]\s*\d+\s*days?\s*processing)?|\d+\s*days?\s*\+\s*\d+\s*[-–]\s*\d+\s*days?\s*processing)/i
  );
  return match?.[1] || '';
}

function extractShippingMethod(lines, text) {
  const byLabel = extractFieldByLabel(lines, [
    'shipping method',
    'logistics method',
    'delivery method',
    'shipping line'
  ]);
  if (byLabel) return byLabel;
  const match = text.match(/(CJPacket|PostNL|YunExpress|DHL|FedEx|Standard Shipping|Express Shipping)/i);
  return match?.[1] || '';
}

function assessCalculatorText(text, product) {
  const lines = String(text || '')
    .split('\n')
    .map((line) => line.replace(/\s+/g, ' ').trim())
    .filter(Boolean)
    .slice(0, 250);

  const productUnitCostRaw = extractFieldByLabel(lines, ['product price', 'price', 'unit price', 'cost']);
  const shippingCostRaw = extractFieldByLabel(lines, [
    'shipping fee',
    'shipping cost',
    'freight',
    'logistics fee'
  ]);
  const totalRaw = extractFieldByLabel(lines, ['total', 'estimated total', 'total cost', 'landed cost']);
  const shippingMethod = extractShippingMethod(lines, text) || 'not captured';
  const deliveryEstimate = extractDeliveryText(lines, text) || 'not captured';
  const money = collectMoneyValues(text);

  let productUnitCost = parseMoney(productUnitCostRaw);
  let shippingCost = parseMoney(shippingCostRaw);
  let total = parseMoney(totalRaw);

  if (productUnitCost === null && money.length) {
    productUnitCost = money[0] ?? null;
  }
  if (shippingCost === null && money.length >= 2) {
    shippingCost = money[1] ?? null;
  }
  if (total === null && productUnitCost !== null && shippingCost !== null) {
    total = Number((productUnitCost + shippingCost).toFixed(2));
  }

  const hasSouthAfrica = /south africa|\bza\b|zaf\b/i.test(text);
  const hasVariant = new RegExp(product.variant, 'i').test(text);
  const captured =
    hasSouthAfrica &&
    productUnitCost !== null &&
    shippingCost !== null &&
    shippingMethod !== 'not captured' &&
    deliveryEstimate !== 'not captured';

  let recommendation = 'watch';
  let blockerReason = 'Calculator output incomplete after automated and assisted checks';
  if (!hasSouthAfrica) {
    blockerReason = 'South Africa destination not confirmed in visible calculator output';
  } else if (!hasVariant) {
    blockerReason = `Variant ${product.variant} not confirmed in visible calculator output`;
  } else if (captured && total !== null) {
    recommendation = 'proof passed with notes';
    blockerReason = 'none';
  }

  return {
    recommendation,
    blockerReason,
    hasSouthAfrica,
    hasVariant,
    productUnitCost: toUsd(productUnitCost),
    shippingMethod,
    shippingCost: toUsd(shippingCost),
    totalLandedCostEstimate: toUsd(total),
    deliveryEstimate,
    pageTextExcerpt: excerpt(text)
  };
}

function assistedOperatorSteps(product) {
  return [
    `In the attached Windows browser tab for ${product.id} (${product.supplierSku}), keep the CJ product page open.`,
    `Select the visible variant "${product.variant}" if it is not already active.`,
    'Open the visible product shipping/logistics calculator on that product page, not the global site menu.',
    'Set destination country to South Africa.',
    'Click the visible Calculate / Get shipping fee action and wait for the results to render on the page.',
    'Do not place an order, do not add to cart, and do not open payment or account pages.'
  ].join(' ');
}

async function waitForAssistedResult(page, product) {
  console.log(`\nAssisted mode for ${product.id}`);
  console.log(assistedOperatorSteps(product));
  console.log(`Watching the page for up to ${Math.round(ASSIST_WAIT_MS / 60000)} minutes.\n`);

  const started = Date.now();
  while (Date.now() - started < ASSIST_WAIT_MS) {
    await page.waitForTimeout(POLL_MS);
    const text = await safeVisibleText(page);
    const assessment = assessCalculatorText(text, product);
    if (assessment.recommendation === 'proof passed with notes') {
      return {
        ...assessment,
        calculatorMode: 'assisted-visible'
      };
    }
  }
  return null;
}

async function openProductPage(page, product) {
  const urls = [
    `${CJ_ORIGIN}/product-detail.html?sku=${encodeURIComponent(product.supplierSku)}`,
    `${CJ_ORIGIN}/product-detail/${encodeURIComponent(product.supplierSku)}.html`,
    `${CJ_ORIGIN}/online-library/product-detail/${encodeURIComponent(product.supplierSku)}.html`
  ];

  for (const url of urls) {
    const error = await page
      .goto(url, { waitUntil: 'domcontentloaded', timeout: STEP_TIMEOUT_MS })
      .then(() => null)
      .catch((caught) => caught);
    if (error) continue;
    await page.waitForTimeout(1800);
    const text = await safeVisibleText(page);
    if (text.includes(product.supplierSku) || text.includes(product.productName) || /product-detail/i.test(page.url())) {
      return { url: page.url(), title: await page.title().catch(() => '') };
    }
  }

  return null;
}

async function captureProduct(page, product, cdpUrl) {
  const base = {
    candidateId: product.id,
    shopifyHandle: product.shopifyHandle,
    supplierSku: product.supplierSku,
    variantTested: product.variant,
    destination: 'South Africa',
    capturedAt: nowIso(),
    cdpUrl,
    currency: 'USD',
    stale21abShippingCost: product.stale21ab.shippingCost,
    stale21abLandedCost: product.stale21ab.landedCost,
    stale21abDeliveryEstimate: product.stale21ab.deliveryEstimate
  };

  const opened = await openProductPage(page, product);
  if (!opened) {
    return {
      ...base,
      sourceUrl: 'not captured',
      sourceTitle: 'not captured',
      productUnitCost: 'not captured',
      shippingMethod: 'not captured',
      shippingCost: 'not captured',
      deliveryEstimate: 'not captured',
      totalLandedCostEstimate: 'not captured',
      timestampUtc: nowIso(),
      recommendation: 'blocked',
      blockerReason: `Could not open CJ product detail for ${product.supplierSku}`,
      operatorStepsRequired: assistedOperatorSteps(product),
      shippingCostVs21ab: 'Fresh comparison unavailable',
      landedCostVs21ab: 'Fresh comparison unavailable',
      calculatorMode: 'auto+assisted',
      pageTextExcerpt: 'none'
    };
  }

  await selectVariant(page, product.variant);
  await tryOpenCalculator(page);
  await trySetCountry(page, 'South Africa');
  await tryClickText(page, /calculate|get shipping|shipping fee|query/i);
  await page.waitForTimeout(1800);

  const autoText = await safeVisibleText(page);
  const autoAssessment = assessCalculatorText(autoText, product);
  let result = {
    ...base,
    sourceUrl: page.url(),
    sourceTitle: opened.title || (await page.title().catch(() => 'not captured')),
    timestampUtc: nowIso(),
    operatorStepsRequired: autoAssessment.recommendation === 'proof passed with notes' ? 'none' : assistedOperatorSteps(product),
    shippingCostVs21ab: compareMoney(autoAssessment.shippingCost, product.stale21ab.shippingCost),
    landedCostVs21ab: compareMoney(autoAssessment.totalLandedCostEstimate, product.stale21ab.landedCost),
    calculatorMode: 'auto-visible',
    ...autoAssessment
  };

  if (result.recommendation === 'proof passed with notes') {
    return result;
  }

  const assisted = await waitForAssistedResult(page, product);
  if (assisted) {
    result = {
      ...base,
      sourceUrl: page.url(),
      sourceTitle: await page.title().catch(() => opened.title || 'not captured'),
      timestampUtc: nowIso(),
      operatorStepsRequired: 'none',
      shippingCostVs21ab: compareMoney(assisted.shippingCost, product.stale21ab.shippingCost),
      landedCostVs21ab: compareMoney(assisted.totalLandedCostEstimate, product.stale21ab.landedCost),
      calculatorMode: assisted.calculatorMode,
      ...assisted
    };
    return result;
  }

  return {
    ...result,
    recommendation: result.recommendation === 'blocked' ? 'blocked' : 'watch',
    blockerReason: result.blockerReason,
    operatorStepsRequired: assistedOperatorSteps(product),
    calculatorMode: 'auto+assisted-timeout'
  };
}

async function main() {
  if (hasFlag('--help')) {
    console.log(usage());
    process.exit(0);
  }

  const cdpUrl = getCliOption('--cdp-url', DEFAULT_CDP_URL);
  await ensureEvidenceRoot();

  const connection = await probeCdp(cdpUrl);
  if (!connection.ok) {
    console.error(`CDP connection unavailable at ${cdpUrl}.`);
    console.error(connection.error);
    console.error('');
    console.error(connection.launchInstructions);
    await materialiseBlockedRun({
      cdpUrl,
      reason: `CDP endpoint unavailable at ${cdpUrl}`,
      connection
    });
    process.exit(2);
  }

  const playwright = resolvePlaywright();
  const browser = await playwright.chromium.connectOverCDP(cdpUrl);
  const results = [];
  let cjSessionDetected = false;
  let page = null;

  try {
    const context = await getDefaultContext(browser);
    page = await createWorkingPage(context);

    cjSessionDetected = await waitForLoggedInSession(page);
    if (!cjSessionDetected) {
      const summary = await materialiseBlockedRun({
        cdpUrl,
        reason: 'CJ login was not detected within the Windows-session wait window',
        connection
      });
      summary.cjSessionDetected = false;
      summary.cdpConnection = {
        ...connection,
        attached: true
      };
      await writeSummary(summary);
      console.error('Blocked: CJ login was not detected in the attached Windows browser session.');
      process.exit(2);
    }

    for (const product of PRODUCTS) {
      console.log(`\n--- Slice 21DU: ${product.id} (${product.supplierSku}) ---`);
      const dir = path.join(evidenceRoot, product.id);
      let fields;
      try {
        fields = await captureProduct(page, product, cdpUrl);
      } catch (error) {
        fields = {
          ...buildBlockedFields(product, cdpUrl, `Harness error: ${excerpt(error.message || String(error), 260)}`),
          recommendation: 'blocked',
          operatorStepsRequired: assistedOperatorSteps(product)
        };
      }

      const notesFile = await writeCaptureNotes(dir, fields);
      results.push({
        id: product.id,
        sku: product.supplierSku,
        variant: product.variant,
        recommendation: fields.recommendation,
        blockerReason: fields.blockerReason,
        productUnitCost: fields.productUnitCost,
        shippingMethod: fields.shippingMethod,
        shippingCost: fields.shippingCost,
        deliveryEstimate: fields.deliveryEstimate,
        totalLandedCostEstimate: fields.totalLandedCostEstimate,
        currency: fields.currency,
        notesFile
      });
      console.log(`Wrote ${notesFile} -> ${fields.recommendation}`);
    }

    await writeSummary({
      slice: '21DU',
      capturedAt: nowIso(),
      cdpUrl,
      cdpConnection: {
        ...connection,
        attached: true
      },
      cjSessionDetected,
      results
    });

    console.log(`\nSummary: ${summaryPath}`);
  } finally {
    await page?.close().catch(() => {});
  }
}

main().catch(async (error) => {
  console.error(error.message || error);
  process.exit(1);
});
