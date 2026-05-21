#!/usr/bin/env node
/**
 * Slice 21DJ — operator-assisted supplier evidence capture.
 * Requires --manual-unlock. No storageState, trace, video, or HAR.
 */

import fsp from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..', '..');
const evidenceRoot = path.join(repoRoot, 'artifacts', 'suppliers', 'slice-21di');
const runSummaryPath = path.join(evidenceRoot, 'slice-21dj-run-summary.json');

const CJ_ORIGIN = 'https://www.cjdropshipping.com';
const CJ_LOGIN_URL = `${CJ_ORIGIN}/login.html`;
const GADGETGYZ_ORIGIN = 'https://www.gadgetgyz.co.za';
const ECOMSTOCK_ORIGIN = 'https://www.ecomstock.co.za';

const LOGIN_WAIT_MS = Number(process.env.SLICE_21DJ_LOGIN_WAIT_MS || 15 * 60 * 1000);
const STEP_TIMEOUT_MS = 45_000;

const args = new Set(process.argv.slice(2));

const PRODUCTS = [
  {
    id: 'DG-KS-01',
    route: 'CJ',
    sku: 'CJYD230000901AZ',
    variant: 'Blue',
    kind: 'cj',
    cjSearchTerms: ['CJYD230000901AZ'],
    productName: 'Beverage & oil bottle handle holder'
  },
  {
    id: 'DG-OD-01',
    route: 'CJ',
    sku: 'CJYD245830501AZ',
    variant: 'Gun Gray',
    kind: 'cj',
    cjSearchTerms: ['CJYD245830501AZ'],
    productName: 'Foldable magnetic phone & small tablet stand'
  },
  {
    id: 'DG-KS-03',
    route: 'Ecomstock',
    sku: 'P5260S',
    variant: 'default',
    kind: 'ecomstock',
    searchTerms: ['P5260S', 'sink strainer stainless'],
    productName: 'Stainless sink strainer'
  },
  {
    id: 'DG-TA-01',
    route: 'Gadgetgyz',
    sku: 'PCB-CT-25150',
    variant: 'Black / 100 pcs',
    kind: 'gadgetgyz',
    searchTerms: ['PCB-CT-25150', 'Cable Ties 100'],
    productName: 'Cable tidies set'
  },
  {
    id: 'DG-OD-02',
    route: 'Gadgetgyz',
    sku: 'DP0402',
    variant: 'default',
    kind: 'gadgetgyz',
    searchTerms: ['DP0402', 'Acrylic Tablet Phone Stand'],
    productName: 'Acrylic tablet & phone stand'
  },
  {
    id: 'DG-HL-01',
    route: 'CJ',
    sku: 'TBD',
    variant: '',
    kind: 'cj-sku-lock',
    cjSearchTerms: ['drawer divider adjustable 4pcs', 'drawer organizer divider'],
    productName: 'Drawer divider set (4 pcs)'
  },
  {
    id: 'DG-OD-03',
    route: 'CJ',
    sku: 'TBD',
    variant: '',
    kind: 'cj-sku-lock',
    cjSearchTerms: ['desk pen holder rotating', 'stationery caddy organizer'],
    productName: 'Desk pen caddy'
  },
  {
    id: 'DG-TA-03',
    route: 'CJ',
    sku: 'TBD',
    variant: '',
    kind: 'cj-sku-lock',
    cjSearchTerms: ['cable management sleeve nylon', 'cable organizer sleeve wrap'],
    productName: 'Cable management sleeve'
  }
];

function resolvePlaywright() {
  return createRequire(import.meta.url)('playwright');
}

function nowIso() {
  return new Date().toISOString();
}

function stamp() {
  return nowIso().replace(/[:]/g, '').replace(/\..+/, '').replace('T', '-');
}

async function writeCaptureNotes(dir, fields) {
  await fsp.mkdir(dir, { recursive: true });
  const lines = [
    'slice: 21DJ',
    `candidate_id: ${fields.candidateId}`,
    `captured_at: ${fields.capturedAt}`,
    `supplier_route: ${fields.supplierRoute}`,
    `supplier_sku: ${fields.supplierSku}`,
    `variant_tested: ${fields.variantTested || 'not captured'}`,
    `product_unit_cost: ${fields.productUnitCost || 'not captured'}`,
    `currency: ${fields.currency || 'not captured'}`,
    `shipping_method_to_za: ${fields.shippingMethod || 'not captured'}`,
    `shipping_cost: ${fields.shippingCost || 'not captured'}`,
    `delivery_estimate: ${fields.deliveryEstimate || 'not captured'}`,
    `landed_cost_estimate: ${fields.landedCost || 'not captured'}`,
    `proof_source: ${fields.proofSource}`,
    `source_url: ${fields.sourceUrl || 'not captured'}`,
    `recommendation: ${fields.recommendation}`,
    `blocker_reason: ${fields.blockerReason || 'none'}`,
    `return_refund_note: ${fields.returnRefundNote || 'not captured'}`,
    `claim_risk_note: ${fields.claimRiskNote || 'not assessed'}`,
    `media_risk_note: ${fields.mediaRiskNote || 'not assessed'}`,
    `evidence_path: ${fields.evidencePath}`,
    'automation: tools/suppliers/run-slice-21dj-operator-assisted-capture.mjs',
    `page_text_excerpt: ${fields.excerpt || 'none'}`
  ];
  const file = path.join(dir, 'capture-notes.txt');
  await fsp.writeFile(file, `${lines.join('\n')}\n`, 'utf8');
  return file;
}

function excerpt(text, max = 1200) {
  const clean = text.replace(/\s+/g, ' ').trim();
  return clean.length > max ? `${clean.slice(0, max)}…` : clean;
}

function pickMoney(text) {
  const usd = text.match(/\$\s?(\d+(?:\.\d{1,2})?)/g) || [];
  const zar = text.match(/R\s?(\d+(?:[.,]\d{1,2})?)/gi) || [];
  return { usd: [...new Set(usd)].slice(0, 8), zar: [...new Set(zar)].slice(0, 8) };
}

function pickDelivery(text) {
  const m =
    text.match(/(\d+\s*[-–]\s*\d+\s*days?|\d+\s*days?|20\s*[-–]\s*60\s*days?)/gi) || [];
  return [...new Set(m)].slice(0, 5).join('; ') || '';
}

function pickShippingMethods(text) {
  const lines = text.split(/\n+/).map((l) => l.trim()).filter(Boolean);
  const hits = lines.filter((l) =>
    /post|packet|line|shipping|courier|yun|cj|standard|express/i.test(l)
  );
  return hits.slice(0, 6).join(' | ');
}

async function isCjLoginGate(page) {
  const url = page.url();
  if (/login|sign[- ]?in|register/i.test(url)) return true;
  const body = (await page.locator('body').innerText().catch(() => '')).toLowerCase();
  return (
    /sign in|log in|login|register now/.test(body) &&
    !/logout|sign out|my account|dashboard/i.test(body)
  );
}

async function waitForCjManualLogin(page) {
  await page.goto(CJ_LOGIN_URL, { waitUntil: 'domcontentloaded', timeout: STEP_TIMEOUT_MS });
  console.log('\n=== CJ manual login (DG-KS-01 / DG-OD-01 / SKU-lock rows) ===');
  console.log('Sign in in Chromium. Automation continues when login gate clears.\n');
  const started = Date.now();
  while (Date.now() - started < LOGIN_WAIT_MS) {
    await page.waitForTimeout(2500);
    if (!(await isCjLoginGate(page))) {
      console.log('CJ login detected.\n');
      return true;
    }
  }
  return false;
}

async function tryClickByText(page, pattern, options = {}) {
  const re = pattern instanceof RegExp ? pattern : new RegExp(pattern, 'i');
  const loc = page.getByText(re, { exact: false }).first();
  if (await loc.count().catch(() => 0)) {
    await loc.click({ timeout: options.timeout ?? 8000 }).catch(() => {});
    await page.waitForTimeout(options.waitAfter ?? 1500);
    return true;
  }
  return false;
}

async function trySelectVariant(page, variantLabel) {
  if (!variantLabel) return false;
  const parts = variantLabel.split('/').map((s) => s.trim()).filter(Boolean);
  for (const part of parts) {
    const ok = await tryClickByText(page, new RegExp(`^${part}$`, 'i'));
    if (ok) return true;
  }
  return false;
}

async function tryCjZaCalculator(page) {
  await tryClickByText(page, /south africa|za\b/i);
  await tryClickByText(page, /calculate|shipping cost|shipping fee|logistics/i);
  await page.waitForTimeout(2500);
}

async function openCjSku(page, sku) {
  const urls = [
    `${CJ_ORIGIN}/product-detail.html?sku=${encodeURIComponent(sku)}`,
    `${CJ_ORIGIN}/product-detail/${sku}.html`,
    `${CJ_ORIGIN}/online-library/product-detail/${sku}.html`,
    `${CJ_ORIGIN}/searchWarehouseProductList.html?searchType=sku&searchValue=${encodeURIComponent(sku)}`
  ];
  for (const url of urls) {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: STEP_TIMEOUT_MS }).catch(() => {});
    await page.waitForTimeout(2000);
    if (!/404|not found/i.test(await page.title().catch(() => ''))) {
      const body = await page.locator('body').innerText().catch(() => '');
      if (body.includes(sku) || body.length > 400) return url;
    }
  }
  return null;
}

async function cjSearch(page, term) {
  const searchUrls = [
    `${CJ_ORIGIN}/searchWarehouseProductList.html?searchValue=${encodeURIComponent(term)}`,
    `${CJ_ORIGIN}/searchWarehouseProductList.html?searchType=sku&searchValue=${encodeURIComponent(term)}`
  ];
  for (const url of searchUrls) {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: STEP_TIMEOUT_MS }).catch(() => {});
    await page.waitForTimeout(2500);
    const body = await page.locator('body').innerText().catch(() => '');
    const skuHits = body.match(/CJ[A-Z0-9]{8,}/g) || [];
    if (skuHits.length) return { url, skuHits: [...new Set(skuHits)].slice(0, 8), body };
  }
  return { url: searchUrls[0], skuHits: [], body: '' };
}

async function captureCjProduct(page, product, cjLoggedIn) {
  const dir = path.join(evidenceRoot, product.id);
  const base = {
    candidateId: product.id,
    capturedAt: nowIso(),
    supplierRoute: product.route,
    supplierSku: product.sku,
    variantTested: product.variant,
    evidencePath: dir,
    proofSource: 'blocked'
  };

  if (!cjLoggedIn) {
    return {
      ...base,
      recommendation: 'blocked',
      blockerReason: 'CJ login not completed within wait window',
      proofSource: 'blocked'
    };
  }

  if (product.kind === 'cj-sku-lock') {
    const search = await cjSearch(page, product.cjSearchTerms[0]);
    const excerptText = excerpt(search.body);
    const locked = search.skuHits[0] || 'not found';
    return {
      ...base,
      supplierSku: locked,
      proofSource: locked === 'not found' ? 'blocked' : 'CJ calculator',
      sourceUrl: search.url,
      recommendation: locked === 'not found' ? 'blocked' : 'watch',
      blockerReason:
        locked === 'not found'
          ? 'No CJ SKU surfaced in warehouse search'
          : 'SKU candidate found; variant and ZA calculator not run in sku-lock mode',
      excerpt: excerptText,
      productUnitCost: 'not captured',
      currency: 'USD',
      shippingMethod: 'not captured',
      shippingCost: 'not captured',
      deliveryEstimate: 'not captured',
      landedCost: 'not captured'
    };
  }

  const openedUrl = await openCjSku(page, product.sku);
  if (!openedUrl) {
    return {
      ...base,
      recommendation: 'blocked',
      blockerReason: `Could not open CJ product page for ${product.sku}`,
      proofSource: 'blocked'
    };
  }

  await trySelectVariant(page, product.variant);
  await tryCjZaCalculator(page);

  const body = await page.locator('body').innerText().catch(() => '');
  const money = pickMoney(body);
  const delivery = pickDelivery(body);
  const methods = pickShippingMethods(body);

  const hasZa = /south africa|\bza\b/i.test(body);
  const hasShip = money.usd.length > 0 || /shipping|logistics|freight/i.test(body);
  const shipCost = money.usd.find((v) => parseFloat(v.replace(/[^\d.]/g, '')) > 0 && parseFloat(v.replace(/[^\d.]/g, '')) < 50);

  let recommendation = 'watch';
  let blockerReason = 'Calculator output incomplete';
  if (hasZa && hasShip && shipCost) {
    recommendation = 'proof passed with notes';
    blockerReason = 'none';
  } else if (!hasZa) {
    blockerReason = 'South Africa destination not confirmed on page';
  }

  return {
    ...base,
    proofSource: 'CJ calculator',
    sourceUrl: openedUrl,
    productUnitCost: money.usd[0] || 'not captured',
    currency: 'USD',
    shippingMethod: methods || 'not captured',
    shippingCost: shipCost || money.usd[1] || 'not captured',
    deliveryEstimate: delivery || 'not captured',
    landedCost: money.usd[money.usd.length - 1] || 'not captured',
    recommendation,
    blockerReason,
    excerpt: excerpt(body)
  };
}

async function openGadgetgyzSearch(page, term) {
  const url = `${GADGETGYZ_ORIGIN}/search?q=${encodeURIComponent(term)}`;
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: STEP_TIMEOUT_MS }).catch(() => {});
  await page.waitForTimeout(2500);
  return url;
}

async function captureGadgetgyz(page, product) {
  const dir = path.join(evidenceRoot, product.id);
  let sourceUrl = '';
  let body = '';
  for (const term of product.searchTerms) {
    sourceUrl = await openGadgetgyzSearch(page, term);
    body = await page.locator('body').innerText().catch(() => '');
    if (product.sku && body.includes(product.sku)) break;
    if (/R\s?\d/.test(body) && body.length > 300) break;
  }

  const money = pickMoney(body);
  const price = money.zar[0] || 'not captured';
  const hasSku = body.includes(product.sku);
  const hasPrice = price !== 'not captured';

  let recommendation = 'watch';
  let blockerReason = 'Shipping quote not captured (desk price only)';
  if (!hasPrice && !hasSku) {
    recommendation = 'blocked';
    blockerReason = 'Gadgetgyz product page/search not resolved';
  } else if (hasPrice && /shipping|delivery|courier/i.test(body)) {
    recommendation = 'proof passed with notes';
    blockerReason = 'none';
  }

  return {
    candidateId: product.id,
    capturedAt: nowIso(),
    supplierRoute: product.route,
    supplierSku: product.sku,
    variantTested: product.variant,
    evidencePath: dir,
    proofSource: hasPrice ? 'supplier page' : 'blocked',
    sourceUrl,
    productUnitCost: price,
    currency: 'ZAR',
    shippingMethod: pickShippingMethods(body) || 'not captured',
    shippingCost: 'not captured',
    deliveryEstimate: pickDelivery(body) || 'not captured',
    landedCost: 'not captured',
    recommendation,
    blockerReason,
    returnRefundNote: /return|warranty|refund/i.test(body) ? 'visible on page (unverified)' : 'not captured',
    excerpt: excerpt(body)
  };
}

async function captureEcomstock(page, product) {
  const dir = path.join(evidenceRoot, product.id);
  const urls = [
    `${ECOMSTOCK_ORIGIN}/search?q=${encodeURIComponent(product.sku)}`,
    `${ECOMSTOCK_ORIGIN}/?s=${encodeURIComponent(product.sku)}`,
    ECOMSTOCK_ORIGIN
  ];
  let sourceUrl = urls[0];
  let body = '';
  for (const url of urls) {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: STEP_TIMEOUT_MS }).catch(() => {});
    await page.waitForTimeout(2500);
    body = await page.locator('body').innerText().catch(() => '');
    sourceUrl = page.url();
    if (body.includes(product.sku) || /R\s?30/.test(body)) break;
  }

  const money = pickMoney(body);
  const hasSku = body.includes(product.sku);
  const price = money.zar[0] || (body.match(/R\s?30/)?.[0] ?? 'not captured');

  let recommendation = 'watch';
  let blockerReason = 'Local shipping quote not captured';
  if (!hasSku && price === 'not captured') {
    recommendation = 'blocked';
    blockerReason = 'Ecomstock product not resolved on public desk';
  } else if (/shipping|delivery|courier/i.test(body) && money.zar.length > 1) {
    recommendation = 'proof passed with notes';
    blockerReason = 'none';
  }

  return {
    candidateId: product.id,
    capturedAt: nowIso(),
    supplierRoute: product.route,
    supplierSku: product.sku,
    variantTested: product.variant,
    evidencePath: dir,
    proofSource: hasSku || price !== 'not captured' ? 'supplier page' : 'blocked',
    sourceUrl,
    productUnitCost: price,
    currency: 'ZAR',
    shippingMethod: pickShippingMethods(body) || 'not captured',
    shippingCost: money.zar[1] || 'not captured',
    deliveryEstimate: pickDelivery(body) || 'not captured',
    landedCost: 'not captured',
    recommendation,
    blockerReason,
    excerpt: excerpt(body)
  };
}

async function maybeSanitizedScreenshot(page, dir, candidateId) {
  if (args.has('--no-screenshots')) return null;
  const body = (await page.locator('body').innerText().catch(() => '')).toLowerCase();
  if (/@|password|order\s*#|cart|checkout|payment|invoice/i.test(body)) {
    return null;
  }
  const file = path.join(dir, `screenshot-${stamp()}.png`);
  await page.screenshot({ path: file, fullPage: false }).catch(() => null);
  return file;
}

async function main() {
  if (args.has('--help')) {
    console.log(
      'Usage: node tools/suppliers/run-slice-21dj-operator-assisted-capture.mjs --manual-unlock [--only ID] [--no-screenshots]'
    );
    process.exit(0);
  }

  const deskPublicOnly = args.has('--desk-public-only');
  if (!args.has('--manual-unlock') && !deskPublicOnly) {
    console.error('BLOCKED: --manual-unlock is required (or use --desk-public-only).');
    process.exit(2);
  }

  const only = process.argv.find((a, i) => process.argv[i - 1] === '--only');
  let queue = only ? PRODUCTS.filter((p) => p.id === only) : PRODUCTS;
  if (deskPublicOnly) {
    queue = queue.filter((p) => p.kind === 'gadgetgyz' || p.kind === 'ecomstock');
  }

  const playwright = resolvePlaywright();
  const browser = await playwright.chromium.launch({
    headless: deskPublicOnly,
    args: ['--disable-dev-shm-usage']
  });

  const results = [];
  let cjLoggedIn = false;

  try {
    const context = await browser.newContext({
      viewport: { width: 1366, height: 900 },
      ignoreHTTPSErrors: true
    });
    const page = await context.newPage();

    const needsCj =
      !deskPublicOnly && queue.some((p) => p.kind === 'cj' || p.kind === 'cj-sku-lock');
    if (needsCj) {
      cjLoggedIn = await waitForCjManualLogin(page);
    }

    for (const product of queue) {
      console.log(`\n--- Capturing ${product.id} (${product.route}) ---`);
      let fields;
      if (product.kind === 'cj' || product.kind === 'cj-sku-lock') {
        fields = await captureCjProduct(page, product, cjLoggedIn);
      } else if (product.kind === 'gadgetgyz') {
        fields = await captureGadgetgyz(page, product);
      } else if (product.kind === 'ecomstock') {
        fields = await captureEcomstock(page, product);
      } else {
        fields = {
          candidateId: product.id,
          capturedAt: nowIso(),
          supplierRoute: product.route,
          supplierSku: product.sku,
          evidencePath: path.join(evidenceRoot, product.id),
          proofSource: 'blocked',
          recommendation: 'blocked',
          blockerReason: 'Unknown product kind'
        };
      }

      const dir = path.join(evidenceRoot, product.id);
      const notesFile = await writeCaptureNotes(dir, fields);
      const shot = await maybeSanitizedScreenshot(page, dir, product.id);
      results.push({
        id: product.id,
        recommendation: fields.recommendation,
        notesFile,
        screenshot: shot,
        blockerReason: fields.blockerReason
      });
      console.log(`Wrote ${notesFile} → ${fields.recommendation}`);
    }

    await fsp.mkdir(evidenceRoot, { recursive: true });
    await fsp.writeFile(
      runSummaryPath,
      `${JSON.stringify({ capturedAt: nowIso(), cjLoggedIn, results }, null, 2)}\n`,
      'utf8'
    );
    console.log(`\nRun summary: ${runSummaryPath}`);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
