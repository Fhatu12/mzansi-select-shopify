#!/usr/bin/env node

import fsp from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..', '..');

const requireFromHere = createRequire(import.meta.url);

const STORE_DOMAIN = 'dropshippoc.myshopify.com';
const ADMIN_PRODUCTS_URL = `https://admin.shopify.com/store/dropshippoc/products`;
const STOREFRONT_ORIGIN = `https://${STORE_DOMAIN}`;
const STOREFRONT_PASSWORD_URL = `${STOREFRONT_ORIGIN}/password`;

const ADMIN_READY_TIMEOUT_MS = Number(process.env.SLICE_21GH_ADMIN_READY_TIMEOUT_MS || 15 * 60 * 1000);
const STOREFRONT_READY_TIMEOUT_MS = Number(
  process.env.SLICE_21GH_STOREFRONT_READY_TIMEOUT_MS || 10 * 60 * 1000
);
const INDEX_WAIT_MS = Number(process.env.SLICE_21GH_INDEX_WAIT_MS || 120 * 1000);

const evidenceRoot = path.join(
  repoRoot,
  'artifacts',
  'qa',
  'slice-21gh-admin-ui-catalogue-publish-recovery'
);

const sampleHandles = [
  '32-pieses-wooden-chess-standard-tournamen-staunton-wood-chessmen-8cm-king-height-chess-pieces-only-no-board',
  'monopoly-premium-high-quality-components-pour-board-game-enthusiasts-party-gatherers-version-francaise',
  'monopoly-classic-board-game-family-property-trading-game-portable-kids-adults-party-table-game-educational-toy-gift',
  'premium-monopoly-global-village-board-game-exquisite-craftsmanship-for-tabletop-gamers-tabletop-gaming-english-version',
  'logitech-g-pro-x-60g-professional-grade-5-programmable-keys-44000-dpi'
];

function normalizeText(value) {
  return String(value || '')
    .replace(/\s+/g, ' ')
    .trim();
}

function stamp() {
  return new Date().toISOString().replace(/[:.]/g, '-').replace('T', '-').slice(0, 19);
}

function resolvePlaywright() {
  try {
    requireFromHere.resolve('playwright');
    return requireFromHere('playwright');
  } catch (error) {
    throw new Error(
      `Playwright is not resolvable from repo node_modules. Run npm install in ${repoRoot} before using this harness.`
    );
  }
}

function printHelp() {
  console.log(
    [
      'Usage: node tools/qa/run-slice-21gh-admin-ui-recovery.mjs',
      '',
      'Operator-assisted Playwright harness for Slice 21GH.',
      'It launches a headed Chromium browser, waits for manual Shopify Admin login/MFA,',
      'tries to bulk-enable Online Store availability for the current products, waits for indexing,',
      'then opens the storefront and waits for manual password unlock before route checks.',
      '',
      'Safety:',
      '- No credentials are read from terminal input or environment variables.',
      '- No storageState, trace, video, or HAR is written.',
      '- Summary evidence is written under artifacts/ only.'
    ].join('\n')
  );
}

async function isAdminProductsReady(page) {
  const url = page.url();
  if (/admin\/products/i.test(url)) return true;

  const heading = normalizeText(
    await page
      .locator('h1, [role="heading"]')
      .first()
      .innerText()
      .catch(() => '')
  );
  return /products/i.test(heading);
}

async function isStorefrontPasswordGate(page) {
  const url = page.url();
  if (/\/password(?:[?#]|$)/.test(url)) return true;
  const body = normalizeText(await page.locator('body').innerText().catch(() => ''));
  return /enter store using password|store password|enter using password/i.test(body);
}

async function waitForAdminReady(page) {
  await page.goto(ADMIN_PRODUCTS_URL, { waitUntil: 'domcontentloaded', timeout: 45_000 });

  console.log('');
  console.log('=== Manual Shopify Admin login ===');
  console.log('Complete Shopify Admin login and MFA in the Chromium window only.');
  console.log('Do not paste credentials into the terminal.');
  console.log(`Waiting up to ${Math.round(ADMIN_READY_TIMEOUT_MS / 60000)} minutes for Products to load...`);
  console.log('');

  const started = Date.now();
  while (Date.now() - started < ADMIN_READY_TIMEOUT_MS) {
    await page.waitForTimeout(2000);
    if (await isAdminProductsReady(page)) {
      console.log('Products page detected. Continuing with Admin UI recovery.');
      return true;
    }
  }
  return false;
}

async function waitForStorefrontUnlock(page) {
  await page.goto(STOREFRONT_PASSWORD_URL, { waitUntil: 'domcontentloaded', timeout: 45_000 });

  console.log('');
  console.log('=== Manual storefront unlock ===');
  console.log('Enter the storefront password in the Chromium window only.');
  console.log(`Waiting up to ${Math.round(STOREFRONT_READY_TIMEOUT_MS / 60000)} minutes...`);
  console.log('');

  const started = Date.now();
  while (Date.now() - started < STOREFRONT_READY_TIMEOUT_MS) {
    await page.waitForTimeout(2000);
    if (!(await isStorefrontPasswordGate(page))) {
      console.log('Storefront unlock detected. Continuing with route checks.');
      return true;
    }
  }
  return false;
}

async function countVisible(locator) {
  try {
    return await locator.count();
  } catch {
    return 0;
  }
}

async function clickFirstVisible(page, candidates, stepNotes) {
  for (const candidate of candidates) {
    const locator = candidate(page);
    const count = await countVisible(locator);
    if (!count) continue;

    try {
      await locator.first().click({ timeout: 8000 });
      await page.waitForTimeout(1200);
      if (stepNotes) stepNotes.push(`clicked:${candidate.name || 'anonymous-candidate'}`);
      return true;
    } catch {
      continue;
    }
  }
  return false;
}

async function ensureAllProductsSelected(page, stepNotes) {
  const candidates = [
    function selectAllByRole(currentPage) {
      return currentPage.getByRole('checkbox', { name: /select all/i });
    },
    function selectAllByLabel(currentPage) {
      return currentPage.getByLabel(/select all/i);
    },
    function selectAllByAria(currentPage) {
      return currentPage.locator('input[type="checkbox"][aria-label*="Select all" i]');
    },
    function selectAllInHeader(currentPage) {
      return currentPage.locator('thead input[type="checkbox"]');
    }
  ];

  const clicked = await clickFirstVisible(page, candidates, stepNotes);
  if (!clicked) return false;

  await clickFirstVisible(
    page,
    [
      function selectAllAcrossPages(currentPage) {
        return currentPage.getByText(/select all .* products/i);
      },
      function selectAllAcrossPagesAlt(currentPage) {
        return currentPage.getByRole('button', { name: /select all .* products/i });
      }
    ],
    stepNotes
  );

  return true;
}

async function openAvailabilityDialog(page, stepNotes) {
  const directCandidates = [
    function manageSalesChannelsButton(currentPage) {
      return currentPage.getByRole('button', { name: /manage sales channels|manage availability|make products available|sales channels and apps|publishing/i });
    },
    function manageSalesChannelsText(currentPage) {
      return currentPage.getByText(/manage sales channels|manage availability|make products available|sales channels and apps|publishing/i);
    }
  ];

  if (await clickFirstVisible(page, directCandidates, stepNotes)) return true;

  const moreActionsOpened = await clickFirstVisible(
    page,
    [
      function moreActionsButton(currentPage) {
        return currentPage.getByRole('button', { name: /more actions|actions|bulk actions/i });
      },
      function moreActionsText(currentPage) {
        return currentPage.getByText(/more actions|actions/i);
      }
    ],
    stepNotes
  );

  if (!moreActionsOpened) return false;

  return clickFirstVisible(
    page,
    [
      function manageSalesChannelsMenuItem(currentPage) {
        return currentPage.getByRole('menuitem', { name: /manage sales channels|manage availability|make products available|sales channels and apps|publishing/i });
      },
      function manageSalesChannelsMenuText(currentPage) {
        return currentPage.getByText(/manage sales channels|manage availability|make products available|sales channels and apps|publishing/i);
      }
    ],
    stepNotes
  );
}

async function ensureOnlineStoreEnabled(page, stepNotes) {
  const labelledCheckboxes = [
    page.getByLabel(/online store/i),
    page.locator('input[type="checkbox"][aria-label*="Online Store" i]')
  ];

  for (const locator of labelledCheckboxes) {
    const count = await countVisible(locator);
    if (!count) continue;

    try {
      const checkbox = locator.first();
      if (!(await checkbox.isChecked().catch(() => false))) {
        await checkbox.check({ timeout: 8000 });
        await page.waitForTimeout(800);
        stepNotes.push('online-store-enabled:checkbox');
      } else {
        stepNotes.push('online-store-already-enabled:checkbox');
      }
      return true;
    } catch {
      continue;
    }
  }

  const onlineStoreRow = page.getByText(/^Online Store$/i).first();
  if (await countVisible(onlineStoreRow)) {
    try {
      await onlineStoreRow.click({ timeout: 8000 });
      await page.waitForTimeout(800);
      stepNotes.push('online-store-row-clicked');
      return true;
    } catch {
      return false;
    }
  }

  return false;
}

async function saveAvailabilityDialog(page, stepNotes) {
  return clickFirstVisible(
    page,
    [
      function saveButton(currentPage) {
        return currentPage.getByRole('button', { name: /save|apply|done|publish|make available/i });
      },
      function saveText(currentPage) {
        return currentPage.getByText(/save|apply|done|publish|make available/i);
      }
    ],
    stepNotes
  );
}

async function extractProductCountSignal(page) {
  const pageText = normalizeText(await page.locator('body').innerText().catch(() => ''));
  const match = pageText.match(/\b(\d+)\s+products?\b/i);
  return match ? Number(match[1]) : null;
}

async function detectCommerceIssues(page) {
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

  return {
    addToCartVisible: controls.some(
      (item) => !item.hidden && !item.disabled && /^add to cart$/i.test(item.text)
    ),
    quickAddVisible: controls.some(
      (item) => !item.hidden && !item.disabled && /quick add/i.test(item.text)
    ),
    dynamicCheckoutVisible: controls.some(
      (item) => !item.hidden && !item.disabled && /buy now|shop pay|paypal/i.test(item.text)
    ),
    cartPathVisible: controls.some(
      (item) => !item.hidden && !item.disabled && /\/cart|\/checkout/i.test(item.href || item.action || '')
    )
  };
}

async function inspectStorefrontRoute(page, route) {
  const response = await page.goto(`${STOREFRONT_ORIGIN}${route.path}`, {
    waitUntil: 'domcontentloaded',
    timeout: 45_000
  });
  await page.waitForTimeout(1000);

  const bodyText = normalizeText(await page.locator('body').innerText().catch(() => ''));
  const productLinks = await page
    .locator('main a[href*="/products/"], a.product-link, .product-card a[href*="/products/"]')
    .evaluateAll((nodes) =>
      [...new Set(nodes.map((node) => node.getAttribute('href') || '').filter(Boolean))]
    )
    .catch(() => []);
  const commerce = await detectCommerceIssues(page);
  const horizontalOverflow = await page.evaluate(() => {
    const doc = document.documentElement;
    return doc.scrollWidth > doc.clientWidth + 2;
  });

  return {
    key: route.key,
    url: page.url(),
    status: response ? response.status() : null,
    productLinkCount: productLinks.length,
    productLinks: productLinks.slice(0, 20),
    priceToConfirmVisible: /price to be confirmed/i.test(bodyText),
    launchNoteVisible: /being prepared for launch/i.test(bodyText),
    addToCartVisible: commerce.addToCartVisible,
    quickAddVisible: commerce.quickAddVisible,
    dynamicCheckoutVisible: commerce.dynamicCheckoutVisible,
    cartPathVisible: commerce.cartPathVisible,
    newsletterVisible: /newsletter|subscribe|sign up|email updates/i.test(bodyText),
    supplierVerifiedVisible: /supplier verified/i.test(bodyText),
    horizontalOverflow
  };
}

async function run() {
  const args = new Set(process.argv.slice(2));
  if (args.has('--help')) {
    printHelp();
    return;
  }

  const playwright = resolvePlaywright();
  const runDir = path.join(evidenceRoot, stamp());
  await fsp.mkdir(runDir, { recursive: true });

  const summary = {
    slice: '21GH',
    startedAt: new Date().toISOString(),
    adminProductsUrl: ADMIN_PRODUCTS_URL,
    storefrontOrigin: STOREFRONT_ORIGIN,
    indexWaitMs: INDEX_WAIT_MS,
    sampleHandles,
    admin: {
      loginHandledManually: true,
      productsPageDetected: false,
      productCountSignal: null,
      steps: [],
      availabilityDialogOpened: false,
      onlineStoreToggleTouched: false,
      saveActionTriggered: false
    },
    storefront: {
      unlockHandledManually: true,
      unlockDetected: false,
      routes: []
    }
  };

  const browser = await playwright.chromium.launch({ headless: false });

  try {
    const context = await browser.newContext({
      viewport: { width: 1440, height: 960 }
    });
    const adminPage = await context.newPage();

    const adminReady = await waitForAdminReady(adminPage);
    if (!adminReady) {
      throw new Error('Timed out waiting for manual Shopify Admin login and Products page readiness.');
    }

    summary.admin.productsPageDetected = true;
    summary.admin.productCountSignal = await extractProductCountSignal(adminPage);

    const selected = await ensureAllProductsSelected(adminPage, summary.admin.steps);
    summary.admin.steps.push(`selected-products:${selected ? 'yes' : 'no'}`);

    const dialogOpened = await openAvailabilityDialog(adminPage, summary.admin.steps);
    summary.admin.availabilityDialogOpened = dialogOpened;

    if (dialogOpened) {
      const onlineStoreEnabled = await ensureOnlineStoreEnabled(adminPage, summary.admin.steps);
      summary.admin.onlineStoreToggleTouched = onlineStoreEnabled;

      const saveTriggered = await saveAvailabilityDialog(adminPage, summary.admin.steps);
      summary.admin.saveActionTriggered = saveTriggered;
    }

    console.log('');
    console.log(`Waiting ${Math.round(INDEX_WAIT_MS / 1000)} seconds for Shopify indexing...`);
    console.log('');
    await adminPage.waitForTimeout(INDEX_WAIT_MS);
    await adminPage.reload({ waitUntil: 'domcontentloaded', timeout: 45_000 });
    summary.admin.productCountSignalAfterWait = await extractProductCountSignal(adminPage);

    const storefrontPage = await context.newPage();
    const storefrontReady = await waitForStorefrontUnlock(storefrontPage);
    if (!storefrontReady) {
      throw new Error('Timed out waiting for manual storefront unlock.');
    }
    summary.storefront.unlockDetected = true;

    const routes = [
      { key: 'collections-all', path: '/collections/all' },
      { key: 'search-organiser', path: '/search?q=organiser&type=product' },
      ...sampleHandles.map((handle) => ({ key: `pdp:${handle}`, path: `/products/${handle}` }))
    ];

    for (const route of routes) {
      const result = await inspectStorefrontRoute(storefrontPage, route);
      summary.storefront.routes.push(result);
      console.log(
        `[${route.key}] status=${result.status ?? 'n/a'} productLinks=${result.productLinkCount} ` +
          `addToCart=${result.addToCartVisible ? 'yes' : 'no'} priceToConfirm=${result.priceToConfirmVisible ? 'yes' : 'no'}`
      );
    }

    summary.finishedAt = new Date().toISOString();
    summary.success = true;
  } catch (error) {
    summary.finishedAt = new Date().toISOString();
    summary.success = false;
    summary.error = error.message;
    throw error;
  } finally {
    await fsp.writeFile(path.join(runDir, 'summary.json'), `${JSON.stringify(summary, null, 2)}\n`, 'utf8');
    await browser.close().catch(() => {});
  }
}

run().catch((error) => {
  console.error(`Slice 21GH harness failed: ${error.message}`);
  process.exit(1);
});
