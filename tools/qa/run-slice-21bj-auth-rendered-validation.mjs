#!/usr/bin/env node

import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..', '..');

const previewThemeId = '151207542967';
const previewUrl = `https://dropshippoc.myshopify.com?preview_theme_id=${previewThemeId}`;
const passwordEnv = 'MZANSI_STOREFRONT_PASSWORD';
const evidenceRoot = path.join(
  repoRoot,
  'artifacts',
  'qa',
  'slice-21bj-auth-rendered-visual-validation'
);

const approvedDepartments = {
  'Home & Living': '/collections/home-living',
  'Kitchen & Storage': '/collections/kitchen-storage',
  'Office & Desk': '/collections/office-desk',
  'Tech Accessories': '/collections/tech-accessories'
};

const expansionDepartments = ['Garden & Outdoor', 'Bath & Bedroom', 'Cleaning & Laundry'];
const supportCards = ['Shipping', 'Returns', 'FAQ'];

const args = new Set(process.argv.slice(2));

if (args.has('--help')) {
  printHelp();
  process.exit(0);
}

if (args.has('--dry-run')) {
  printDryRun();
  process.exit(0);
}

async function main() {
  const manualUnlock = args.has('--manual-unlock');
  const password = process.env[passwordEnv] || '';
  if (!manualUnlock && !password) {
    fail(
      `BLOCKED: set ${passwordEnv} for env-based unlock or rerun with --manual-unlock for interactive preview QA.`
    );
  }

  const playwright = resolvePlaywright();
  const timestamp = new Date().toISOString().replace(/[:]/g, '').replace(/\..+/, '').replace('T', '-');
  const runDir = path.join(evidenceRoot, timestamp);
  const screenshotsDir = path.join(runDir, 'screenshots');
  await fsp.mkdir(screenshotsDir, { recursive: true });

  const browser = await playwright.chromium.launch({
    headless: manualUnlock ? false : true,
    args: ['--disable-dev-shm-usage']
  });

  try {
    const context = await browser.newContext({
      viewport: { width: 1366, height: 768 }
    });
    const page = await context.newPage();

    await page.goto(previewUrl, { waitUntil: 'domcontentloaded', timeout: 45000 });
    if (manualUnlock) {
      await waitForManualUnlock(page);
    } else {
      await unlockWithPassword(page, password);
    }

    await page.waitForLoadState('networkidle').catch(() => {});
    await page.waitForTimeout(1200);

    const desktop = await inspectDesktop(page, screenshotsDir);
    await page.setViewportSize({ width: 390, height: 844 });
    await page.reload({ waitUntil: 'domcontentloaded', timeout: 45000 });
    await page.waitForLoadState('networkidle').catch(() => {});
    await page.waitForTimeout(1200);
    const mobile = await inspectMobile(page, screenshotsDir);

    const summary = buildSummary(runDir, desktop, mobile);
    await fsp.writeFile(path.join(runDir, 'summary.json'), JSON.stringify(summary, null, 2));
    await fsp.writeFile(
      path.join(runDir, 'notes.md'),
      [
        '# Slice 21BJ authenticated rendered validation',
        '',
        `- Verdict: ${summary.verdict}`,
        `- Theme: ${previewThemeId} / Mzansi Select MVP Preview / unpublished`,
        `- Unlock mode: ${manualUnlock ? 'manual' : 'env password'}`,
        '- Auth material saved: no'
      ].join('\n')
    );

    console.log(JSON.stringify(summary, null, 2));
    if (summary.verdict !== 'PASS') {
      process.exitCode = 1;
    }

    await context.close();
  } finally {
    await browser.close();
  }
}

function printHelp() {
  console.log(
    [
      'Usage: node tools/qa/run-slice-21bj-auth-rendered-validation.mjs [--manual-unlock] [--dry-run] [--help]',
      '',
      'Checks the unpublished preview homepage against the accepted 21BJ rendered-validation contract.',
      '',
      'Options:',
      '  --manual-unlock  Open a headed browser and wait for storefront unlock in-browser.',
      '  --dry-run        Print the tracked selectors and assertions without launching a browser.',
      '  --help           Show this message.',
      '',
      `Without --manual-unlock, the harness expects ${passwordEnv} in the active shell.`
    ].join('\n')
  );
}

function printDryRun() {
  const tracked = {
    desktopDepartmentSelector: '.dept-menu .dept-item',
    categoryStripSelector: '.cat-strip .cat-item',
    desktopCartSelector: '.hdr-actions .hdr-action[aria-label*="Cart"]',
    mobileCartSelector: '.mob-header-icons .mob-icon-btn[aria-label*="Cart"]',
    bottomBarCartSelector: '.bottom-bar .bb-center',
    drawerToggleSelector: '#mobileMenuToggle',
    drawerItemsSelector: '.nav-drawer .drawer-link',
    forbiddenHashSelector: 'a[href="#"]'
  };

  console.log(JSON.stringify({ previewThemeId, previewUrl, tracked }, null, 2));
}

function resolvePlaywright() {
  const requireFromHere = createRequire(import.meta.url);
  try {
    return requireFromHere('playwright');
  } catch {
    fail('BLOCKED: local Playwright dependency is not resolvable from this repo runtime.');
  }
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

async function waitForManualUnlock(page) {
  const started = Date.now();
  while (true) {
    if (await storefrontReady(page)) {
      return;
    }
    if (Date.now() - started > 10 * 60 * 1000) {
      throw new Error('Timed out waiting for manual storefront unlock.');
    }
    await page.waitForTimeout(1000);
  }
}

async function unlockWithPassword(page, password) {
  if (await storefrontReady(page)) {
    return;
  }

  const passwordInput = page.locator('input[type="password"], input[name="password"], #Password').first();
  await passwordInput.fill(password);
  const submit = page.locator(
    'button[type="submit"], input[type="submit"], button:has-text("Enter"), button:has-text("Submit")'
  ).first();
  await Promise.allSettled([
    page.waitForLoadState('domcontentloaded', { timeout: 20000 }),
    submit.click()
  ]);
  await page.waitForTimeout(1200);
  await page.goto(previewUrl, { waitUntil: 'domcontentloaded', timeout: 45000 });
  if (!(await storefrontReady(page))) {
    throw new Error('Password unlock did not reach the storefront DOM.');
  }
}

async function storefrontReady(page) {
  const url = page.url();
  if (/\/password(?:[?#]|$)/.test(url)) {
    return false;
  }

  const bodyText = await page.locator('body').innerText().catch(() => '');
  return /Mzansi Select|Practical home and|South African shoppers/i.test(bodyText);
}

function normalizeText(value) {
  return String(value || '')
    .replace(/\s+/g, ' ')
    .replace(/^[^\p{L}\p{N}]+/u, '')
    .trim();
}

async function inspectDesktop(page, screenshotsDir) {
  const deptButton = page.locator('.dept-btn').first();
  if (await deptButton.count()) {
    await deptButton.click();
    await page.waitForTimeout(250);
  }

  const departmentItems = await page.locator('.dept-menu .dept-item').evaluateAll((nodes) =>
    nodes.map((node) => ({
      text: (node.textContent || '').replace(/\s+/g, ' ').trim(),
      tag: node.tagName.toLowerCase(),
      href: node.getAttribute('href'),
      ariaDisabled: node.getAttribute('aria-disabled')
    }))
  );

  const categoryItems = await page.locator('.cat-strip .cat-item').evaluateAll((nodes) =>
    nodes.map((node) => {
      const name = node.querySelector('.cat-name')?.textContent || '';
      const sub = node.querySelector('.cat-sub')?.textContent || '';
      return {
        text: (node.textContent || '').replace(/\s+/g, ' ').trim(),
        name: name.replace(/\s+/g, ' ').trim(),
        sub: sub.replace(/\s+/g, ' ').trim(),
        tag: node.tagName.toLowerCase(),
        href: node.getAttribute('href'),
        ariaDisabled: node.getAttribute('aria-disabled')
      };
    })
  );

  const desktop = {
    desktopShellOk:
      (await page.locator('header.site-header-desktop').isVisible().catch(() => false)) &&
      (await page.locator('nav.site-nav-desktop').isVisible().catch(() => false)) &&
      !(await page.locator('header.mob-header').isVisible().catch(() => false)),
    headerCart: await getElementInfo(page, '.hdr-actions .hdr-action[aria-label*="Cart"]'),
    headerAccount: await getElementInfo(page, '.hdr-actions .hdr-action[aria-label*="Account"]'),
    headerWishlist: await getElementInfo(page, '.hdr-actions .hdr-action[aria-label*="Favourites"]'),
    departmentItems,
    categoryItems,
    hashLinks: await page.locator('a[href="#"]').evaluateAll((nodes) =>
      nodes.map((node) => (node.textContent || '').replace(/\s+/g, ' ').trim()).filter(Boolean)
    ),
    purchases: await page.locator('a,button,span').evaluateAll((nodes) =>
      nodes
        .map((node) => (node.textContent || '').replace(/\s+/g, ' ').trim())
        .filter((text) => /^Add to Cart$|^Buy Now$/i.test(text))
    ),
    riskyRoutes: await page.locator('a[href]').evaluateAll((nodes) =>
      nodes
        .map((node) => ({
          text: (node.textContent || '').replace(/\s+/g, ' ').trim(),
          href: node.getAttribute('href')
        }))
        .filter((item) => item.href && /\/cart(?:[/?#]|$)|\/account(?:[/?#]|$)|\/checkout(?:[/?#]|$)/.test(item.href))
    ),
    newsletterInputDisabled: await page.locator('.footer-desktop .nl-input').evaluate((el) => el.disabled).catch(() => null),
    newsletterButtonDisabled: await page.locator('.footer-desktop .nl-btn').evaluate((el) => el.disabled).catch(() => null)
  };

  await page.screenshot({ path: path.join(screenshotsDir, 'homepage-desktop-1366x768.png'), fullPage: true });
  await page.screenshot({
    path: path.join(screenshotsDir, 'homepage-desktop-department-menu.png'),
    fullPage: true
  });

  return desktop;
}

async function inspectMobile(page, screenshotsDir) {
  const mobile = {
    mobileShellOk:
      (await page.locator('header.mob-header').isVisible().catch(() => false)) &&
      (await page.locator('nav.bottom-bar').isVisible().catch(() => false)) &&
      !(await page.locator('header.site-header-desktop').isVisible().catch(() => false)),
    headerCart: await getElementInfo(page, '.mob-header-icons .mob-icon-btn[aria-label*="Cart"]'),
    bottomBarCart: await getElementInfo(page, '.bottom-bar .bb-center')
  };

  await page.screenshot({ path: path.join(screenshotsDir, 'homepage-mobile-390x844.png'), fullPage: true });

  const menuButton = page.locator('#mobileMenuToggle').first();
  await menuButton.click();
  await page.waitForTimeout(300);

  mobile.drawerOpen = {
    ariaExpanded: await menuButton.getAttribute('aria-expanded').catch(() => null),
    drawerOpen: await page.locator('.nav-drawer.open').count().then((count) => count > 0).catch(() => false),
    overlayOpen: await page.locator('.drawer-overlay.open').count().then((count) => count > 0).catch(() => false)
  };

  mobile.drawerItems = await page.locator('.nav-drawer .drawer-link').evaluateAll((nodes) =>
    nodes.map((node) => ({
      text: (node.textContent || '').replace(/\s+/g, ' ').trim(),
      tag: node.tagName.toLowerCase(),
      href: node.getAttribute('href'),
      ariaDisabled: node.getAttribute('aria-disabled')
    }))
  );

  await page.screenshot({
    path: path.join(screenshotsDir, 'homepage-mobile-drawer-open-390x844.png'),
    fullPage: true
  });

  await page.keyboard.press('Escape');
  await page.waitForTimeout(250);

  mobile.drawerClose = {
    ariaExpanded: await menuButton.getAttribute('aria-expanded').catch(() => null),
    drawerOpen: await page.locator('.nav-drawer.open').count().then((count) => count > 0).catch(() => false),
    overlayOpen: await page.locator('.drawer-overlay.open').count().then((count) => count > 0).catch(() => false),
    focusReturnedToToggle: await menuButton.evaluate((el) => document.activeElement === el).catch(() => false)
  };

  return mobile;
}

async function getElementInfo(page, selector) {
  const el = page.locator(selector).first();
  if (!(await el.count())) {
    return null;
  }
  return await el.evaluate((node) => ({
    tag: node.tagName.toLowerCase(),
    text: (node.textContent || '').replace(/\s+/g, ' ').trim(),
    href: node.getAttribute('href'),
    ariaDisabled: node.getAttribute('aria-disabled'),
    ariaLabel: node.getAttribute('aria-label')
  }));
}

function buildSummary(runDir, desktop, mobile) {
  const desktopQuartetCorrect = Object.entries(approvedDepartments).every(([label, href]) =>
    desktop.departmentItems.some(
      (item) => normalizeText(item.text) === label && item.tag === 'a' && item.href === href
    )
  );

  const expansionDeferred = expansionDepartments.every((label) =>
    desktop.departmentItems.some(
      (item) => normalizeText(item.text) === label && item.tag === 'span' && !item.href
    )
  );

  const supportComingLater = supportCards.every((label) =>
    desktop.categoryItems.some(
      (item) => item.name === label && item.sub === 'Coming later' && item.tag === 'span' && !item.href
    )
  );

  const mobileQuartetCorrect = Object.entries(approvedDepartments).every(([label, href]) =>
    mobile.drawerItems.some(
      (item) => normalizeText(item.text).includes(label) && item.tag === 'a' && item.href === href
    )
  );

  const desktopCartDeferred = Boolean(
    desktop.headerCart && desktop.headerCart.tag === 'span' && desktop.headerCart.href == null
  );
  const mobileHeaderCartDeferred = Boolean(
    mobile.headerCart && mobile.headerCart.tag === 'span' && mobile.headerCart.href == null
  );
  const bottomBarCartDeferred = Boolean(
    mobile.bottomBarCart && mobile.bottomBarCart.tag === 'span' && mobile.bottomBarCart.href == null
  );

  const drawerOpenCloseOk =
    mobile.drawerOpen.ariaExpanded === 'true' &&
    mobile.drawerOpen.drawerOpen &&
    mobile.drawerOpen.overlayOpen &&
    mobile.drawerClose.ariaExpanded === 'false' &&
    !mobile.drawerClose.drawerOpen &&
    !mobile.drawerClose.overlayOpen &&
    mobile.drawerClose.focusReturnedToToggle;

  const checks = {
    desktopShellOk: desktop.desktopShellOk,
    mobileShellOk: mobile.mobileShellOk,
    desktopCartDeferred,
    mobileHeaderCartDeferred,
    bottomBarCartDeferred,
    desktopQuartetCorrect,
    mobileQuartetCorrect,
    expansionDeferred,
    supportComingLater,
    noHashLinks: desktop.hashLinks.length === 0,
    nonPurchasable: desktop.purchases.length === 0,
    noRiskyCommerceRoutes: desktop.riskyRoutes.length === 0,
    newsletterDisabled: desktop.newsletterInputDisabled === true && desktop.newsletterButtonDisabled === true,
    drawerOpenCloseOk
  };

  return {
    verdict: Object.values(checks).every(Boolean) ? 'PASS' : 'FAIL',
    evidenceDir: runDir,
    checks,
    desktop,
    mobile
  };
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
