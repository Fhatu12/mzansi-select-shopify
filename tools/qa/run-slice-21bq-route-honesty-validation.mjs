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
const evidenceRoot = path.join(repoRoot, 'artifacts', 'qa', 'slice-21bq-route-honesty-validation');

const approvedDepartments = {
  'Home & Living': '/collections/home-living',
  'Kitchen & Storage': '/collections/kitchen-storage',
  'Office & Desk': '/collections/office-desk',
  'Tech Accessories': '/collections/tech-accessories'
};

const args = new Set(process.argv.slice(2));

if (args.has('--help')) {
  console.log(
    [
      'Usage: node tools/qa/run-slice-21bq-route-honesty-validation.mjs [--manual-unlock] [--dry-run]',
      '',
      'Authenticated rendered validation for Slice 21BQ route honesty after Slice 21BR preview sync.',
      `Env unlock: ${passwordEnv}`,
      'Options: --manual-unlock, --dry-run'
    ].join('\n')
  );
  process.exit(0);
}

if (args.has('--dry-run')) {
  console.log(
    JSON.stringify(
      {
        previewThemeId,
        previewUrl,
        checks: [
          'departmentQuartet',
          'topLevelBrowseHonesty',
          'footerShopLinks',
          'promoCta',
          'kitchenRailViewAll',
          'collectionsAllOnlyGeneric',
          'noHashLinks',
          'safetyRegression'
        ]
      },
      null,
      2
    )
  );
  process.exit(0);
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

function resolvePlaywright() {
  const requireFromHere = createRequire(import.meta.url);
  try {
    return requireFromHere('playwright');
  } catch {
    fail('BLOCKED: local Playwright dependency is not resolvable.');
  }
}

function normalizeText(value) {
  return String(value || '')
    .replace(/\s+/g, ' ')
    .trim();
}

function hrefMatches(href, expectedPathOrHash) {
  if (!href) return false;
  try {
    const url = new URL(href, 'https://dropshippoc.myshopify.com');
    if (expectedPathOrHash.startsWith('#')) {
      return url.hash === expectedPathOrHash || href.endsWith(expectedPathOrHash);
    }
    return url.pathname === expectedPathOrHash || url.pathname.endsWith(expectedPathOrHash);
  } catch {
    return href.includes(expectedPathOrHash);
  }
}

function findLink(links, label) {
  return links.find((item) => normalizeText(item.text).includes(label));
}

function isIntentionalCollectionsAllLabel(text) {
  const normalized = normalizeText(text);
  return /\b(Shop All|Browse all products|View all products)\b/i.test(normalized);
}

async function storefrontReady(page) {
  if (/\/password(?:[?#]|$)/.test(page.url())) return false;
  const bodyText = await page.locator('body').innerText().catch(() => '');
  return /Mzansi Select|Practical home and|South African shoppers/i.test(bodyText);
}

async function waitForManualUnlock(page) {
  const started = Date.now();
  while (true) {
    if (await storefrontReady(page)) return;
    if (Date.now() - started > 8 * 60 * 1000) {
      throw new Error('Timed out waiting for manual storefront unlock.');
    }
    await page.waitForTimeout(1000);
  }
}

async function unlockWithPassword(page, password) {
  if (await storefrontReady(page)) return;
  const passwordInput = page.locator('input[type="password"], input[name="password"], #Password').first();
  await passwordInput.fill(password);
  const submit = page
    .locator('button[type="submit"], input[type="submit"], button:has-text("Enter"), button:has-text("Submit")')
    .first();
  await Promise.allSettled([page.waitForLoadState('domcontentloaded', { timeout: 20000 }), submit.click()]);
  await page.waitForTimeout(1200);
  await page.goto(previewUrl, { waitUntil: 'domcontentloaded', timeout: 45000 });
  if (!(await storefrontReady(page))) {
    throw new Error('Password unlock did not reach storefront DOM.');
  }
}

async function collectLinks(page, selector) {
  return page.locator(selector).evaluateAll((nodes) =>
    nodes.map((node) => ({
      text: (node.textContent || '').replace(/\s+/g, ' ').trim(),
      tag: node.tagName.toLowerCase(),
      href: node.getAttribute('href'),
      ariaDisabled: node.getAttribute('aria-disabled'),
      className: node.className || ''
    }))
  );
}

async function inspectViewport(page, viewport, screenshotsDir) {
  await page.setViewportSize(viewport);
  await page.goto(previewUrl, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForLoadState('networkidle').catch(() => {});
  await page.waitForTimeout(1200);

  if (viewport.width >= 1000) {
    const deptButton = page.locator('.dept-btn').first();
    if (await deptButton.count()) {
      await deptButton.click();
      await page.waitForTimeout(250);
    }
  }

  const departmentItems = await collectLinks(page, '.dept-menu .dept-item');
  const navLinks = await collectLinks(page, '.nav-links a, .nav-links .nav-link-deferred');
  if (viewport.width < 1000) {
    const shopAccordion = page.locator('.footer-mobile details.f-acc-item').first();
    if (await shopAccordion.count()) {
      const open = await shopAccordion.getAttribute('open');
      if (!open) {
        await shopAccordion.locator('summary').first().click();
        await page.waitForTimeout(200);
      }
    }
  }
  const footerRoot = viewport.width >= 1000 ? '.footer-desktop' : '.footer-mobile';
  const footerShopLinks = await collectLinks(
    page,
    `${footerRoot} .f-links a, ${footerRoot} .f-links .f-link-deferred`
  );
  const promoCta = await collectLinks(page, '.promo-cta');
  const sectionLinks = await collectLinks(page, '.section-link');
  const allAnchors = await collectLinks(page, 'a[href]');
  const hashLinks = await page.locator('a[href="#"]').evaluateAll((nodes) =>
    nodes
      .map((node) => (node.textContent || '').replace(/\s+/g, ' ').trim())
      .filter(Boolean)
  );

  const kitchenSection = page.locator('#kitchen-storage').first();
  const kitchenViewAll = await kitchenSection
    .locator('.section-link')
    .evaluateAll((nodes) =>
      nodes.map((node) => ({
        text: (node.textContent || '').replace(/\s+/g, ' ').trim(),
        href: node.getAttribute('href')
      }))
    )
    .catch(() => []);

  const misleadingAllLinks = allAnchors.filter(
    (item) => hrefMatches(item.href, '/collections/all') && !isIntentionalCollectionsAllLabel(item.text)
  );

  const genericAllLinks = allAnchors.filter(
    (item) => hrefMatches(item.href, '/collections/all') && isIntentionalCollectionsAllLabel(item.text)
  );

  const prefix = viewport.width >= 1000 ? 'desktop' : 'mobile';
  await page.screenshot({
    path: path.join(screenshotsDir, `${prefix}-homepage-${viewport.width}x${viewport.height}.png`),
    fullPage: true
  });

  let drawerItems = [];
  if (viewport.width < 1000) {
    const menuButton = page.locator('#mobileMenuToggle').first();
    await menuButton.click();
    await page.waitForTimeout(300);
    drawerItems = await collectLinks(page, '.nav-drawer .drawer-link, .nav-drawer .drawer-link--deferred');
    await page.screenshot({
      path: path.join(screenshotsDir, `${prefix}-drawer-open-${viewport.width}x${viewport.height}.png`),
      fullPage: true
    });
    await page.keyboard.press('Escape');
    await page.waitForTimeout(200);
  }

  return {
    viewport,
    departmentItems,
    navLinks,
    drawerItems,
    footerShopLinks,
    promoCta,
    sectionLinks,
    kitchenViewAll,
    misleadingAllLinks,
    genericAllLinks,
    hashLinks,
    purchases: await page.locator('a,button,span').evaluateAll((nodes) =>
      nodes
        .map((node) => (node.textContent || '').replace(/\s+/g, ' ').trim())
        .filter((text) => /^Add to Cart$|^Buy Now$/i.test(text))
    ),
    riskyRoutes: allAnchors.filter(
      (item) => item.href && /\/cart(?:[/?#]|$)|\/account(?:[/?#]|$)|\/checkout(?:[/?#]|$)/.test(item.href)
    ),
    newsletterDisabled:
      viewport.width >= 1000
        ? (await page.locator('.footer-desktop .nl-input').evaluate((el) => el.disabled).catch(() => null)) ===
            true &&
          (await page.locator('.footer-desktop .nl-btn').evaluate((el) => el.disabled).catch(() => null)) === true
        : true,
    headerCart: await page
      .locator(viewport.width >= 1000 ? '.hdr-actions .hdr-action[aria-label*="Cart"]' : '.mob-header-icons .mob-icon-btn[aria-label*="Cart"]')
      .first()
      .evaluate((node) => ({
        tag: node.tagName.toLowerCase(),
        href: node.getAttribute('href')
      }))
      .catch(() => null)
  };
}

function evaluateRouteHonesty(desktop, mobile) {
  const quartetFrom = (items) =>
    Object.entries(approvedDepartments).every(([label, href]) =>
      items.some((item) => normalizeText(item.text).includes(label) && item.tag === 'a' && hrefMatches(item.href, href))
    );

  const desktopNav = {
    newInPreview: findLink(desktop.navLinks, 'New in Preview'),
    selectedPicks: findLink(desktop.navLinks, 'Selected Picks'),
    previewPicks: findLink(desktop.navLinks, 'Preview Picks'),
    brands: desktop.navLinks.find((item) => normalizeText(item.text).includes('Brands')),
    shopAll: findLink(desktop.navLinks, 'Shop All')
  };

  const mobileNav = {
    newInPreview: findLink(mobile.drawerItems, 'New in Preview'),
    selectedPicks: findLink(mobile.drawerItems, 'Selected Picks'),
    previewPicks: findLink(mobile.drawerItems, 'Preview Picks'),
    brands: mobile.drawerItems.find((item) => normalizeText(item.text).includes('Brands')),
    shopAll: findLink(mobile.drawerItems, 'Shop All')
  };

  const footer = {
    newInPreview: findLink(desktop.footerShopLinks, 'New in Preview'),
    selectedPicks: findLink(desktop.footerShopLinks, 'Selected Picks'),
    giftIdeas: desktop.footerShopLinks.find((item) => /gift ideas coming later/i.test(item.text))
  };

  const promo = desktop.promoCta[0] || null;
  const kitchenViewAll = desktop.kitchenViewAll.find((item) => /view all/i.test(item.text)) || null;

  const checks = {
    desktopQuartet: quartetFrom(desktop.departmentItems),
    mobileQuartet: quartetFrom(mobile.drawerItems),
    desktopNewInPreview: Boolean(desktopNav.newInPreview && hrefMatches(desktopNav.newInPreview.href, '#new-in')),
    desktopSelectedPicks: Boolean(
      desktopNav.selectedPicks && hrefMatches(desktopNav.selectedPicks.href, '#best-sellers')
    ),
    desktopPreviewPicks: Boolean(desktopNav.previewPicks && hrefMatches(desktopNav.previewPicks.href, '#deals')),
    desktopBrandsDeferred: Boolean(desktopNav.brands && desktopNav.brands.tag === 'span' && !desktopNav.brands.href),
    mobileNewInPreview: Boolean(mobileNav.newInPreview && hrefMatches(mobileNav.newInPreview.href, '#new-in')),
    mobileSelectedPicks: Boolean(
      mobileNav.selectedPicks && hrefMatches(mobileNav.selectedPicks.href, '#best-sellers')
    ),
    mobilePreviewPicks: Boolean(mobileNav.previewPicks && hrefMatches(mobileNav.previewPicks.href, '#deals')),
    mobileBrandsDeferred: Boolean(mobileNav.brands && mobileNav.brands.tag === 'span' && !mobileNav.brands.href),
    footerNewInPreviewSpecific: Boolean(
      footer.newInPreview && hrefMatches(footer.newInPreview.href, '#new-in') && !hrefMatches(footer.newInPreview.href, '/collections/all')
    ),
    footerSelectedPicksSpecific: Boolean(
      footer.selectedPicks &&
        hrefMatches(footer.selectedPicks.href, '#best-sellers') &&
        !hrefMatches(footer.selectedPicks.href, '/collections/all')
    ),
    footerGiftIdeasDeferred: Boolean(footer.giftIdeas && footer.giftIdeas.tag === 'span' && !footer.giftIdeas.href),
    promoCtaSpecific: Boolean(
      promo && hrefMatches(promo.href, '#best-sellers') && !hrefMatches(promo.href, '/collections/all')
    ),
    kitchenViewAllSpecific: Boolean(
      kitchenViewAll && hrefMatches(kitchenViewAll.href, '/collections/kitchen-storage')
    ),
    noMisleadingCollectionsAll: desktop.misleadingAllLinks.length === 0 && mobile.misleadingAllLinks.length === 0,
    genericCollectionsAllPresent: desktop.genericAllLinks.length > 0,
    noHashLinks: desktop.hashLinks.length === 0 && mobile.hashLinks.length === 0,
    nonPurchasable: desktop.purchases.length === 0 && mobile.purchases.length === 0,
    noRiskyCommerceRoutes: desktop.riskyRoutes.length === 0 && mobile.riskyRoutes.length === 0,
    newsletterDisabled: desktop.newsletterDisabled === true,
    cartDeferred:
      desktop.headerCart?.tag === 'span' &&
      !desktop.headerCart?.href &&
      mobile.headerCart?.tag === 'span' &&
      !mobile.headerCart?.href
  };

  const failures = Object.entries(checks)
    .filter(([, ok]) => !ok)
    .map(([name]) => name);

  return {
    checks,
    failures,
    desktopNav,
    mobileNav,
    footer,
    promo,
    kitchenViewAll
  };
}

async function main() {
  const manualUnlock = args.has('--manual-unlock');
  const password = process.env[passwordEnv] || '';
  if (!manualUnlock && !password) {
    fail(`BLOCKED: set ${passwordEnv} or rerun with --manual-unlock.`);
  }

  const playwright = resolvePlaywright();
  const timestamp = new Date().toISOString().replace(/[:]/g, '').replace(/\..+/, '').replace('T', '-');
  const runDir = path.join(evidenceRoot, timestamp);
  const screenshotsDir = path.join(runDir, 'screenshots');
  await fsp.mkdir(screenshotsDir, { recursive: true });

  const browser = await playwright.chromium.launch({
    headless: !manualUnlock,
    args: ['--disable-dev-shm-usage']
  });

  try {
    const context = await browser.newContext({ viewport: { width: 1366, height: 768 } });
    const page = await context.newPage();
    await page.goto(previewUrl, { waitUntil: 'domcontentloaded', timeout: 45000 });
    if (manualUnlock) await waitForManualUnlock(page);
    else await unlockWithPassword(page, password);

    const desktop = await inspectViewport(page, { width: 1366, height: 768 }, screenshotsDir);
    const mobile = await inspectViewport(page, { width: 390, height: 844 }, screenshotsDir);
    const evaluation = evaluateRouteHonesty(desktop, mobile);

    const summary = {
      slice: '21BQ',
      previewSyncCommit: '05398d05ef8b923344290a1b109c9cdacac34c34',
      implementationCommit: '422344e91ed6960f893903dd546e86569b1b4d6f',
      previewThemeId,
      previewUrl,
      unlockMode: manualUnlock ? 'manual' : 'env-password',
      verdict: evaluation.failures.length === 0 ? 'PASS' : 'FAIL',
      evidenceDir: runDir,
      checks: evaluation.checks,
      failures: evaluation.failures,
      desktop,
      mobile,
      evaluation
    };

    await fsp.writeFile(path.join(runDir, 'summary.json'), JSON.stringify(summary, null, 2));
    await fsp.writeFile(
      path.join(runDir, 'notes.md'),
      [
        '# Slice 21BQ route-honesty rendered validation',
        '',
        `- Verdict: ${summary.verdict}`,
        `- Theme: ${previewThemeId} / Mzansi Select MVP Preview / unpublished`,
        `- Unlock mode: ${summary.unlockMode}`,
        `- Failures: ${evaluation.failures.length ? evaluation.failures.join(', ') : 'none'}`,
        '- Auth material saved: no'
      ].join('\n')
    );

    console.log(JSON.stringify(summary, null, 2));
    process.exitCode = summary.verdict === 'PASS' ? 0 : 1;
    await context.close();
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
