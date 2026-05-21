#!/usr/bin/env node
/**
 * Slice 21DS / 21DT — targeted CJ ZA shipping calculator proof (DG-KS-01, DG-OD-01 only).
 * Requires --manual-unlock. No storageState, trace, video, HAR, or credential capture.
 * Evidence: artifacts/suppliers/slice-21ds/ (gitignored; not committed).
 */

import fsp from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..', '..');
const evidenceRoot = path.join(repoRoot, 'artifacts', 'suppliers', 'slice-21ds');
const summaryPath = path.join(evidenceRoot, 'slice-21ds-run-summary.json');

const CJ_ORIGIN = 'https://www.cjdropshipping.com';
const CJ_LOGIN_URL = `${CJ_ORIGIN}/login.html`;
const CJ_CALC_URLS = [
  `${CJ_ORIGIN}/calculation.html`,
  'https://app.cjdropshipping.com/calculation.html'
];

const LOGIN_WAIT_MS = Number(process.env.SLICE_21DS_LOGIN_WAIT_MS || 15 * 60 * 1000);
const CALC_WAIT_MS = Number(process.env.SLICE_21DS_CALC_WAIT_MS || 8 * 60 * 1000);
const STEP_TIMEOUT_MS = 45_000;

const args = new Set(process.argv.slice(2));

const PRODUCTS = [
  {
    id: 'DG-KS-01',
    shopifyHandle: 'beverage-bottle-oil-bottle-handle-holder',
    sku: 'CJYD230000901AZ',
    variant: 'Blue',
    productName: 'Beverage & oil bottle handle holder'
  },
  {
    id: 'DG-OD-01',
    shopifyHandle: 'foldable-magnetic-phone-holder-desktop-tablet-stand',
    sku: 'CJYD245830501AZ',
    variant: 'Gun Gray',
    productName: 'Foldable magnetic phone & small tablet stand'
  }
];

const OPERATOR_CALC_STEPS = [
  'On the CJ product page, confirm variant (Blue / Gun Gray) is selected.',
  'Open the product shipping / logistics panel (not the global “Shipping Calculation” menu).',
  'Set destination country to South Africa.',
  'Run Calculate / Get shipping fee for this SKU.',
  'Record: unit price (USD), shipping method name, shipping cost, delivery estimate, total landed if shown.',
  'Do not place orders or add to cart.'
].join(' ');

function resolvePlaywright() {
  return createRequire(import.meta.url)('playwright');
}

function nowIso() {
  return new Date().toISOString();
}

function excerpt(text, max = 1400) {
  const clean = String(text || '').replace(/\s+/g, ' ').trim();
  return clean.length > max ? `${clean.slice(0, max)}…` : clean;
}

function pickMoney(text) {
  const usd = text.match(/\$\s?(\d+(?:\.\d{1,2})?)/g) || [];
  return [...new Set(usd)].slice(0, 12);
}

function pickDelivery(text) {
  const m =
    text.match(/(\d+\s*[-–]\s*\d+\s*days?|\d+\s*days?|20\s*[-–]\s*60\s*days?|processing[^.]{0,40})/gi) ||
    [];
  return [...new Set(m)].slice(0, 6).join('; ') || '';
}

function parseUsdAmount(token) {
  const n = parseFloat(String(token).replace(/[^\d.]/g, ''));
  return Number.isFinite(n) ? n : null;
}

async function writeCaptureNotes(dir, fields) {
  await fsp.mkdir(dir, { recursive: true });
  const lines = [
    'slice: 21DS',
    `candidate_id: ${fields.candidateId}`,
    `shopify_handle: ${fields.shopifyHandle}`,
    `captured_at: ${fields.capturedAt}`,
    `supplier_route: CJ`,
    `supplier_sku: ${fields.supplierSku}`,
    `variant_tested: ${fields.variantTested || 'not captured'}`,
    `destination: ${fields.destination || 'South Africa'}`,
    `product_unit_cost: ${fields.productUnitCost || 'not captured'}`,
    `currency: ${fields.currency || 'USD'}`,
    `shipping_method_to_za: ${fields.shippingMethod || 'not captured'}`,
    `shipping_cost: ${fields.shippingCost || 'not captured'}`,
    `delivery_estimate: ${fields.deliveryEstimate || 'not captured'}`,
    `landed_cost_estimate: ${fields.landedCost || 'not captured'}`,
    `proof_source: ${fields.proofSource}`,
    `calculator_source: ${fields.calculatorSource || 'CJ product logistics / shipping calculator'}`,
    `source_url: ${fields.sourceUrl || 'not captured'}`,
    `recommendation: ${fields.recommendation}`,
    `blocker_reason: ${fields.blockerReason || 'none'}`,
    `operator_steps_required: ${fields.operatorStepsRequired || 'none'}`,
    `return_refund_note: ${fields.returnRefundNote || 'not captured'}`,
    `evidence_path: ${fields.evidencePath}`,
    'automation: tools/suppliers/run-slice-21ds-two-cj-calculator-proof.mjs',
    `page_text_excerpt: ${fields.excerpt || 'none'}`
  ];
  const file = path.join(dir, 'capture-notes.txt');
  await fsp.writeFile(file, `${lines.join('\n')}\n`, 'utf8');
  return file;
}

async function isTurnstileBlocking(page) {
  const body = (await page.locator('body').innerText().catch(() => '')).toLowerCase();
  return (
    /turnstile verification failed|please try again/i.test(body) ||
    /verify you are human|cloudflare/i.test(body) ||
    (await page.locator('iframe[src*="challenges.cloudflare"], iframe[src*="turnstile"]').count().catch(
      () => 0
    )) > 0
  );
}

async function isCjLoginGate(page) {
  const url = page.url();
  if (/login|sign[- ]?in|register/i.test(url)) return true;
  const body = (await page.locator('body').innerText().catch(() => '')).toLowerCase();
  if (await isTurnstileBlocking(page)) return true;
  return /sign in|log in|login|register now/.test(body) && !/logout|sign out/i.test(body);
}

const TURNSTILE_OPERATOR_TIPS = [
  'If you see "Turnstile verification failed": refresh the login page once, wait for the page to finish loading, then complete the human-check box before submitting credentials.',
  'Complete all steps only inside the headed Chromium window opened by this harness — do not paste credentials into the terminal.',
  'If Turnstile keeps failing: close the harness browser, wait 2–5 minutes, re-run with --manual-unlock, or sign in via your normal desktop browser and capture calculator fields manually into capture-notes.txt (no screenshots with account data).'
].join(' ');

async function waitForCjManualLogin(page) {
  await page.goto(CJ_LOGIN_URL, { waitUntil: 'domcontentloaded', timeout: STEP_TIMEOUT_MS });
  console.log('\n=== CJ manual login (Slice 21DS) ===');
  console.log('Sign in in Chromium only. Do not paste credentials into the terminal.');
  console.log(`Turnstile tips: ${TURNSTILE_OPERATOR_TIPS}\n`);
  let turnstileWarned = false;
  const started = Date.now();
  while (Date.now() - started < LOGIN_WAIT_MS) {
    await page.waitForTimeout(2500);
    if (await isTurnstileBlocking(page)) {
      if (!turnstileWarned) {
        console.log('\n[Turnstile] Human verification required or failed — complete or retry in the browser.\n');
        turnstileWarned = true;
      }
      continue;
    }
    if (!(await isCjLoginGate(page))) {
      console.log('CJ login detected.\n');
      return true;
    }
  }
  return false;
}

async function waitForOperatorCalculator(page, productId) {
  console.log(`\n=== Operator calculator step (${productId}) ===`);
  console.log(OPERATOR_CALC_STEPS);
  console.log(`\nComplete the calculator in the browser, then wait (up to ${CALC_WAIT_MS / 60000} min)…\n`);
  const started = Date.now();
  while (Date.now() - started < CALC_WAIT_MS) {
    await page.waitForTimeout(3000);
    const body = await page.locator('body').innerText().catch(() => '');
    if (/south africa/i.test(body) && pickMoney(body).length >= 2 && pickDelivery(body)) {
      return true;
    }
  }
  return false;
}

async function tryClick(page, pattern) {
  const loc = page.getByText(pattern, { exact: false }).first();
  if (await loc.count().catch(() => 0)) {
    await loc.click({ timeout: 8000 }).catch(() => {});
    await page.waitForTimeout(1500);
    return true;
  }
  return false;
}

async function selectVariant(page, label) {
  const re = new RegExp(`^${label}$`, 'i');
  const btn = page.getByRole('button', { name: re }).first();
  if (await btn.count().catch(() => 0)) {
    await btn.click({ timeout: 5000 }).catch(() => {});
    await page.waitForTimeout(1000);
    return true;
  }
  return await tryClick(page, re);
}

async function openProductDetail(page, sku) {
  const urls = [
    `${CJ_ORIGIN}/product-detail.html?sku=${encodeURIComponent(sku)}`,
    `${CJ_ORIGIN}/product-detail/${sku}.html`,
    `${CJ_ORIGIN}/online-library/product-detail/${sku}.html`,
    `${CJ_ORIGIN}/searchWarehouseProductList.html?searchType=sku&searchValue=${encodeURIComponent(sku)}`
  ];
  for (const url of urls) {
    for (let attempt = 0; attempt < 2; attempt += 1) {
      const err = await page
        .goto(url, { waitUntil: 'domcontentloaded', timeout: STEP_TIMEOUT_MS })
        .then(() => null)
        .catch((e) => e);
      if (err && /ERR_ABORTED/i.test(String(err))) {
        await page.waitForTimeout(2000);
        continue;
      }
      await page.waitForTimeout(2500);
      const title = await page.title().catch(() => '');
      if (/404|not found/i.test(title)) break;
      const body = await page.locator('body').innerText().catch(() => '');
      if (body.includes(sku) || (body.length > 500 && /product|sku|logistics|shipping/i.test(body))) {
        return url;
      }
    }
  }
  return null;
}

async function scrapeMainContent(page) {
  const selectors = [
    '#product-detail',
    '.product-detail',
    '[class*="product-detail"]',
    'main',
    '#app'
  ];
  for (const sel of selectors) {
    const loc = page.locator(sel).first();
    if (await loc.count().catch(() => 0)) {
      const t = await loc.innerText().catch(() => '');
      if (t.length > 200) return t;
    }
  }
  return page.locator('body').innerText().catch(() => '');
}

async function tryProductLogisticsPanel(page) {
  await tryClick(page, /shipping|logistics|delivery|ship to|freight/i);
  await tryClick(page, /south africa|\bza\b/i);
  await tryClick(page, /calculate|calculation|get shipping|shipping cost/i);
  await page.waitForTimeout(2000);
}

async function tryGlobalCalculator(page, sku) {
  for (const url of CJ_CALC_URLS) {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: STEP_TIMEOUT_MS }).catch(() => {});
    await page.waitForTimeout(2000);
    await tryClick(page, /south africa/i);
    const input = page.locator('input[type="text"], input[type="search"]').first();
    if (await input.count().catch(() => 0)) {
      await input.fill(sku).catch(() => {});
      await page.keyboard.press('Enter').catch(() => {});
      await page.waitForTimeout(2000);
    }
    await tryClick(page, /calculate|search|query/i);
    await page.waitForTimeout(2500);
    const body = await page.locator('body').innerText().catch(() => '');
    if (/south africa/i.test(body) && pickMoney(body).length >= 2) {
      return { url: page.url(), body };
    }
  }
  return null;
}

function assessCapture(body, sku) {
  const money = pickMoney(body);
  const delivery = pickDelivery(body);
  const hasZa = /south africa|\bza\b|zaf\b/i.test(body);
  const navFalsePositive =
    /shipping calculation|shipping update|by cj\s*\|/i.test(body) &&
    !/ship to|destination|freight|logistics fee|delivery time/i.test(body);

  const usdValues = money.map(parseUsdAmount).filter((n) => n !== null);
  const unit = usdValues.find((n) => n > 0 && n < 200) ?? null;
  const shipCandidates = usdValues.filter((n) => n > 0 && n < 80 && n !== unit);
  const ship = shipCandidates[0] ?? null;
  const landed =
    unit !== null && ship !== null
      ? (Math.round((unit + ship) * 100) / 100).toFixed(2)
      : usdValues.length >= 2
        ? usdValues[usdValues.length - 1]
        : null;

  let recommendation = 'watch';
  let blockerReason = 'Calculator output incomplete';
  let operatorStepsRequired = OPERATOR_CALC_STEPS;

  if (navFalsePositive && !hasZa) {
    blockerReason = 'Page scrape matched global CJ navigation, not SKU-level ZA calculator output';
  } else if (hasZa && unit !== null && ship !== null && delivery) {
    recommendation = 'proof passed with notes';
    blockerReason = 'none';
    operatorStepsRequired = 'none';
  } else if (hasZa && unit !== null && ship !== null) {
    recommendation = 'proof passed with notes';
    blockerReason = 'Delivery band not parsed; verify manually in evidence';
    operatorStepsRequired = 'Confirm delivery estimate on calculator screen';
  } else if (!hasZa) {
    blockerReason = 'South Africa destination not confirmed on calculator output';
  }

  return {
    productUnitCost: unit !== null ? `$${unit}` : 'not captured',
    shippingCost: ship !== null ? `$${ship}` : 'not captured',
    landedCost: landed !== null ? `$${landed}` : 'not captured',
    deliveryEstimate: delivery || 'not captured',
    shippingMethod: /cj packet|postnl|yun|standard|line haul|express/i.test(body)
      ? (body.match(/(CJ[^\\n]{0,40}packet|PostNL|YunExpress|Standard[^\\n]{0,30})/i)?.[0] ?? 'see excerpt')
      : 'not captured',
    recommendation,
    blockerReason,
    operatorStepsRequired,
    excerpt: excerpt(body)
  };
}

async function captureProduct(page, product, cjLoggedIn) {
  const dir = path.join(evidenceRoot, product.id);
  const base = {
    candidateId: product.id,
    shopifyHandle: product.shopifyHandle,
    capturedAt: nowIso(),
    supplierSku: product.sku,
    variantTested: product.variant,
    destination: 'South Africa',
    evidencePath: dir,
    currency: 'USD',
    proofSource: 'CJ calculator',
    calculatorSource: 'CJ product-detail logistics + shipping calculator'
  };

  if (!cjLoggedIn) {
    return {
      ...base,
      recommendation: 'blocked',
      blockerReason: 'CJ login not completed within wait window',
      operatorStepsRequired: 'Sign in at cjdropshipping.com first',
      proofSource: 'blocked'
    };
  }

  const pdpUrl = await openProductDetail(page, product.sku);
  if (!pdpUrl) {
    return {
      ...base,
      recommendation: 'blocked',
      blockerReason: `Could not open CJ product-detail for ${product.sku}`,
      operatorStepsRequired: OPERATOR_CALC_STEPS
    };
  }

  await selectVariant(page, product.variant);
  let body = await scrapeMainContent(page);
  await tryProductLogisticsPanel(page);
  body = await scrapeMainContent(page);

  let assessed = assessCapture(body, product.sku);
  let sourceUrl = pdpUrl;
  let calcSource = 'CJ product-detail logistics panel';

  if (assessed.recommendation === 'watch') {
    const calc = await tryGlobalCalculator(page, product.sku);
    if (calc) {
      body = calc.body;
      sourceUrl = calc.url;
      calcSource = 'CJ shipping cost calculation page';
      assessed = assessCapture(body, product.sku);
    }
  }

  if (assessed.recommendation === 'watch' && args.has('--manual-calculator')) {
    await openProductDetail(page, product.sku);
    await selectVariant(page, product.variant);
    await waitForOperatorCalculator(page, product.id);
    body = await scrapeMainContent(page);
    assessed = assessCapture(body, product.sku);
    sourceUrl = page.url();
    calcSource = 'CJ product-detail after operator calculator step';
  }

  return {
    ...base,
    ...assessed,
    sourceUrl,
    calculatorSource: calcSource,
    returnRefundNote: /return|refund|warranty/i.test(body)
      ? 'visible on page (unverified; no account data captured)'
      : 'not captured'
  };
}

async function maybeScreenshot(page, dir) {
  if (args.has('--no-screenshots')) return null;
  const body = (await page.locator('body').innerText().catch(() => '')).toLowerCase();
  if (/@|password|order\s*#|checkout|payment|invoice|wallet balance/i.test(body)) {
    return null;
  }
  const file = path.join(dir, `calculator-${Date.now()}.png`);
  await page.screenshot({ path: file, fullPage: false }).catch(() => null);
  return file;
}

async function main() {
  if (args.has('--help')) {
    console.log(
      [
        'Usage: node tools/suppliers/run-slice-21ds-two-cj-calculator-proof.mjs --manual-unlock',
        '       [--manual-calculator] [--no-screenshots]',
        '',
        'Slice 21DS: CJ ZA calculator proof for DG-KS-01 and DG-OD-01 only.',
        'Evidence: artifacts/suppliers/slice-21ds/<id>/capture-notes.txt'
      ].join('\n')
    );
    process.exit(0);
  }

  if (!args.has('--manual-unlock')) {
    console.error('BLOCKED: --manual-unlock is required.');
    process.exit(2);
  }

  const playwright = resolvePlaywright();
  const browser = await playwright.chromium.launch({
    headless: false,
    args: ['--disable-dev-shm-usage']
  });

  const results = [];

  try {
    const context = await browser.newContext({
      viewport: { width: 1366, height: 900 },
      ignoreHTTPSErrors: true
    });
    const page = await context.newPage();
    const cjLoggedIn = await waitForCjManualLogin(page);

    for (const product of PRODUCTS) {
      console.log(`\n--- Slice 21DS: ${product.id} (${product.sku}) ---`);
      let fields;
      try {
        fields = await captureProduct(page, product, cjLoggedIn);
      } catch (err) {
        const dir = path.join(evidenceRoot, product.id);
        fields = {
          candidateId: product.id,
          shopifyHandle: product.shopifyHandle,
          capturedAt: nowIso(),
          supplierSku: product.sku,
          variantTested: product.variant,
          destination: 'South Africa',
          evidencePath: dir,
          currency: 'USD',
          proofSource: 'blocked',
          recommendation: 'blocked',
          blockerReason: `Harness error: ${excerpt(err.message || String(err), 240)}`,
          operatorStepsRequired: OPERATOR_CALC_STEPS,
          productUnitCost: 'not captured',
          shippingCost: 'not captured',
          landedCost: 'not captured',
          deliveryEstimate: 'not captured',
          shippingMethod: 'not captured',
          calculatorSource: 'CJ product-detail logistics + shipping calculator',
          returnRefundNote: 'not captured',
          excerpt: 'none'
        };
      }
      const dir = path.join(evidenceRoot, product.id);
      const notesFile = await writeCaptureNotes(dir, fields);
      const shot = await maybeScreenshot(page, dir);
      results.push({
        id: product.id,
        shopifyHandle: product.shopifyHandle,
        recommendation: fields.recommendation,
        blockerReason: fields.blockerReason,
        notesFile,
        screenshot: shot
      });
      console.log(`Wrote ${notesFile} → ${fields.recommendation}`);
    }

    await fsp.mkdir(evidenceRoot, { recursive: true });
    await fsp.writeFile(
      summaryPath,
      `${JSON.stringify({ capturedAt: nowIso(), cjLoggedIn, results }, null, 2)}\n`
    );
    console.log(`\nSummary: ${summaryPath}`);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
