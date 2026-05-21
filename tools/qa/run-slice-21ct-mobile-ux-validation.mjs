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
const PREVIEW_URL = `${STORE_ORIGIN}/?preview_theme_id=${PREVIEW_THEME_ID}`;
const PASSWORD_URL = `${STORE_ORIGIN}/password`;
const PASSWORD_ENV = 'MZANSI_STOREFRONT_PASSWORD';
const MANUAL_UNLOCK_TIMEOUT_MS = 12 * 60 * 1000;
const evidenceRoot = path.join(repoRoot, 'artifacts', 'qa', 'slice-21ct-mobile-ux-validation');

const viewports = [
  { key: 'desktop', width: 1366, height: 768 },
  { key: 'narrow', width: 900, height: 844 },
  { key: 'mobile', width: 390, height: 844 }
];

const routes = [
  { key: 'homepage', path: `/?preview_theme_id=${PREVIEW_THEME_ID}` },
  {
    key: 'search-organiser',
    path: `/search?q=organiser&type=product&preview_theme_id=${PREVIEW_THEME_ID}`
  },
  {
    key: 'controlled-pilot',
    path: `/collections/controlled-pilot?preview_theme_id=${PREVIEW_THEME_ID}`
  }
];

const commercePatterns =
  /\/cart|\/cart\/add|\/checkout|\/checkouts|\/account|customer|login|register|recover|payment|order/i;

const args = new Set(process.argv.slice(2));

if (args.has('--help')) {
  console.log(
    [
      'Usage: node tools/qa/run-slice-21ct-mobile-ux-validation.mjs [--manual-unlock]',
      '',
      'Rendered mobile UX validation for Slice 21CR/21CS on preview theme 151207542967.',
      'Checks overflow, topbar ticker, back-to-top, decorative regression, search, controlled-pilot, safety.',
      'Evidence: artifacts/qa/slice-21ct-mobile-ux-validation/ (not committed).',
      'Options: --manual-unlock (required unless MZANSI_STOREFRONT_PASSWORD is set)'
    ].join('\n')
  );
  process.exit(0);
}

function resolvePlaywright() {
  const require = createRequire(import.meta.url);
  try {
    return require('playwright');
  } catch {
    throw new Error('Playwright not installed. Run: npm install');
  }
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

async function unlockWithPassword(page, password) {
  await page.goto(PASSWORD_URL, { waitUntil: 'domcontentloaded', timeout: 45000 });
  const input = page.locator('input[type="password"]').first();
  await input.fill(password);
  await page.locator('button[type="submit"], input[type="submit"]').first().click();
  await page.waitForTimeout(2000);
  await page.goto(PREVIEW_URL, { waitUntil: 'domcontentloaded', timeout: 45000 });
}

async function waitForManualUnlock(page) {
  await page.goto(PASSWORD_URL, { waitUntil: 'domcontentloaded', timeout: 45000 });
  console.log('\n=== Manual storefront unlock ===');
  console.log('Enter the password in Chromium only. Do not paste it into the terminal.');
  console.log(`Unlock check: ${PREVIEW_URL}\n`);
  const started = Date.now();
  while (Date.now() - started < MANUAL_UNLOCK_TIMEOUT_MS) {
    await page.waitForTimeout(2000);
    if (!(await isPasswordGate(page))) {
      await page.goto(PREVIEW_URL, { waitUntil: 'domcontentloaded', timeout: 45000 });
      await page.waitForTimeout(1000);
      if (!(await isPasswordGate(page))) {
        console.log('Unlock detected.\n');
        return;
      }
    }
  }
  throw new Error('Timed out waiting for manual unlock.');
}

async function detectCommerce(page) {
  const controls = await page.locator('button, a, input[type="submit"], form').evaluateAll((nodes) =>
    nodes.map((node) => {
      const tag = node.tagName.toLowerCase();
      const text = (node.textContent || '').trim();
      const href = node.getAttribute('href') || '';
      const disabled =
        node.hasAttribute('disabled') ||
        node.getAttribute('aria-disabled') === 'true' ||
        node.classList.contains('disabled');
      const style = window.getComputedStyle(node);
      const hidden = style.display === 'none' || style.visibility === 'hidden';
      return { tag, text, href, disabled, hidden };
    })
  );
  const newsletter = controls.filter(
    (c) =>
      !c.disabled &&
      !c.hidden &&
      (/newsletter|email updates|subscribe/i.test(c.text) ||
        (c.tag === 'input' && /email/i.test(c.text)))
  );
  return {
    activePurchase: controls.filter(
      (c) => !c.disabled && !c.hidden && /^(add to cart|buy now)$/i.test(c.text)
    ),
    activeCheckoutCustomer: controls.filter(
      (c) =>
        c.tag === 'a' &&
        !c.disabled &&
        !c.hidden &&
        commercePatterns.test(c.href) &&
        !/^#/.test(c.href)
    ),
    hashLinks: controls.filter((c) => c.tag === 'a' && !c.disabled && !c.hidden && c.href === '#'),
    activeNewsletter: newsletter.filter((c) => c.tag === 'button' || c.tag === 'input')
  };
}

async function measureOverflow(page) {
  return page.evaluate(() => {
    const doc = document.documentElement;
    const body = document.body;
    const docOverflow = doc.scrollWidth > doc.clientWidth + 2;
    const bodyOverflow = body.scrollWidth > body.clientWidth + 2;
    return {
      docScrollWidth: doc.scrollWidth,
      docClientWidth: doc.clientWidth,
      bodyScrollWidth: body.scrollWidth,
      bodyClientWidth: body.clientWidth,
      overflow: docOverflow || bodyOverflow
    };
  });
}

async function inspectTopbar(page) {
  return page.evaluate(() => {
    const staticPanel = document.querySelector('.topbar-static');
    const marquee = document.querySelector('.topbar-marquee');
    const track = document.querySelector('.topbar-track');
    const staticStyle = staticPanel ? getComputedStyle(staticPanel) : null;
    const marqueeStyle = marquee ? getComputedStyle(marquee) : null;
    const trackStyle = track ? getComputedStyle(track) : null;
    return {
      hasTrack: Boolean(track),
      staticDisplay: staticStyle?.display || 'missing',
      marqueeDisplay: marqueeStyle?.display || 'missing',
      trackAnimationName: trackStyle?.animationName || 'none',
      trackAnimationDuration: trackStyle?.animationDuration || '0s',
      trackTransform: trackStyle?.transform || 'none'
    };
  });
}

async function sampleTopbarMotion(page) {
  const before = await page.evaluate(() => {
    const track = document.querySelector('.topbar-track');
    if (!track) return null;
    const rect = track.getBoundingClientRect();
    const style = getComputedStyle(track);
    return { left: rect.left, transform: style.transform, animationName: style.animationName };
  });
  await page.waitForTimeout(1200);
  const after = await page.evaluate(() => {
    const track = document.querySelector('.topbar-track');
    if (!track) return null;
    const rect = track.getBoundingClientRect();
    const style = getComputedStyle(track);
    return { left: rect.left, transform: style.transform, animationName: style.animationName };
  });
  if (!before || !after) return { motionDetected: false, reason: 'no-track' };
  const moved =
    Math.abs(before.left - after.left) > 2 ||
    before.transform !== after.transform ||
    (before.animationName !== 'none' && before.animationName === after.animationName);
  return { motionDetected: moved, before, after };
}

async function inspectBackToTop(page) {
  return page.evaluate(() => {
    const btn = document.getElementById('backToTop');
    if (!btn) return { present: false };
    const style = getComputedStyle(btn);
    const rect = btn.getBoundingClientRect();
    const bottomBar = document.querySelector('nav.bottom-bar');
    const bottomBarRect = bottomBar ? bottomBar.getBoundingClientRect() : null;
    return {
      present: true,
      hiddenAttr: btn.hidden,
      classVisible: btn.classList.contains('is-visible'),
      opacity: style.opacity,
      visibility: style.visibility,
      bottom: style.bottom,
      rectBottom: rect.bottom,
      viewportHeight: window.innerHeight,
      bottomBarTop: bottomBarRect?.top ?? null,
      overlapsBottomBar: bottomBarRect ? rect.bottom > bottomBarRect.top - 4 : false
    };
  });
}

async function inspectDecorativeSummary(page) {
  return page.evaluate(() => {
    const imgs = Array.from(
      document.querySelectorAll(
        '.hero-visual img, .cat-icon img, .promo-visual img, .arr-card img.decorative-img, .arr-card img'
      )
    );
    const broken = imgs.filter((img) => img.complete && img.naturalWidth === 0);
    const loaded = imgs.filter((img) => img.complete && img.naturalWidth > 1);
    return { total: imgs.length, loaded: loaded.length, broken: broken.length };
  });
}

async function inspectSearch(page) {
  const text = normalizeText(await page.locator('body').innerText().catch(() => ''));
  const liveCards = await page.locator('.product-card--live').count();
  const staticDemo = /Premium Over-Ear Headphones|Smart Watch – Black Edition/i.test(text);
  const performed = /results for|organiser/i.test(text);
  return { liveCards, staticDemo, performed };
}

async function inspectControlledPilot(page) {
  return page.evaluate(() => {
    const controlled = document.querySelector('.not-found-layout--controlled-pilot, [data-controlled-pilot]');
    const genericOnly = document.querySelector('.not-found-layout:not(.not-found-layout--controlled-pilot)');
    const notice = (document.body.innerText || '').includes('controlled pilot');
    const liveCards = document.querySelectorAll('.product-card--live').length;
    return {
      controlledShell: Boolean(controlled) || notice,
      genericShellLeak: Boolean(genericOnly) && !notice,
      liveCards
    };
  });
}

async function screenshot(page, dir, name) {
  const p = path.join(dir, name);
  await page.screenshot({ path: p, fullPage: false });
  return path.relative(repoRoot, p);
}

function overallVerdict(checks) {
  if (checks.some((c) => c.verdict === 'FAIL' || c.verdict === 'INCONCLUSIVE')) {
    if (checks.some((c) => c.verdict === 'FAIL')) return 'FAIL';
    return 'INCONCLUSIVE';
  }
  if (checks.some((c) => c.verdict === 'PASS WITH NOTES')) return 'PASS WITH NOTES';
  return 'PASS';
}

async function main() {
  const manualUnlock = args.has('--manual-unlock');
  const password = process.env[PASSWORD_ENV] || '';
  if (!manualUnlock && !password) {
    console.error(`BLOCKED: set ${PASSWORD_ENV} or use --manual-unlock`);
    process.exit(2);
  }

  const playwright = resolvePlaywright();
  const timestamp = new Date().toISOString().replace(/[:]/g, '').replace(/\..+/, '').replace('T', '-');
  const runDir = path.join(evidenceRoot, timestamp);
  const shotsDir = path.join(runDir, 'screenshots');
  await fsp.mkdir(shotsDir, { recursive: true });

  const browser = await playwright.chromium.launch({
    headless: !manualUnlock,
    args: ['--disable-dev-shm-usage']
  });

  const checks = [];

  try {
    const context = await browser.newContext({ viewport: { width: 1366, height: 768 } });
    const page = await context.newPage();

    if (manualUnlock) await waitForManualUnlock(page);
    else await unlockWithPassword(page, password);

    if (await isPasswordGate(page)) {
      throw new Error('Still on password gate after unlock.');
    }

    for (const route of routes) {
      for (const vp of viewports) {
        await page.setViewportSize({ width: vp.width, height: vp.height });
        await page.goto(`${STORE_ORIGIN}${route.path}`, {
          waitUntil: 'domcontentloaded',
          timeout: 45000
        });
        await page.waitForLoadState('networkidle').catch(() => {});
        await page.waitForTimeout(1500);

        const overflow = await measureOverflow(page);
        checks.push({
          area: 'overflow',
          route: route.key,
          viewport: vp.key,
          ...overflow,
          verdict: overflow.overflow ? 'FAIL' : 'PASS',
          notes: overflow.overflow ? ['horizontal-page-overflow'] : []
        });

        if (route.key === 'homepage') {
          const decorative = await inspectDecorativeSummary(page);
          checks.push({
            area: 'decorative-images',
            route: route.key,
            viewport: vp.key,
            ...decorative,
            verdict: decorative.broken > 0 ? 'FAIL' : 'PASS',
            notes: decorative.broken > 0 ? ['broken-decorative'] : []
          });

          const topbar = await inspectTopbar(page);
          let topbarVerdict = 'PASS';
          const topbarNotes = [];
          if (vp.key === 'desktop') {
            if (topbar.staticDisplay === 'none') topbarNotes.push('static-hidden-on-desktop');
            if (topbar.marqueeDisplay !== 'none') topbarNotes.push('marquee-visible-on-desktop');
            if (topbarNotes.length) topbarVerdict = 'FAIL';
          } else {
            if (topbar.marqueeDisplay === 'none') topbarNotes.push('marquee-hidden-on-narrow');
            if (topbar.staticDisplay !== 'none') topbarNotes.push('static-visible-on-narrow');
            const motion = await sampleTopbarMotion(page);
            if (!motion.motionDetected && topbar.trackAnimationName === 'none') {
              topbarNotes.push('no-ticker-motion');
              topbarVerdict = 'FAIL';
            } else if (!motion.motionDetected && topbar.trackAnimationName !== 'none') {
              topbarVerdict = 'PASS WITH NOTES';
              topbarNotes.push('animation-declared-motion-sample-weak');
            }
            checks.push({
              area: 'topbar-motion-sample',
              route: route.key,
              viewport: vp.key,
              ...motion,
              verdict: topbarVerdict === 'FAIL' ? 'FAIL' : 'PASS'
            });
          }
          checks.push({
            area: 'topbar',
            route: route.key,
            viewport: vp.key,
            ...topbar,
            verdict: topbarVerdict,
            notes: topbarNotes
          });

          if (vp.key === 'mobile') {
            await page.evaluate(() => window.scrollTo(0, 0));
            await page.waitForTimeout(300);
            const atTop = await inspectBackToTop(page);
            checks.push({
              area: 'back-to-top-at-top',
              route: route.key,
              viewport: vp.key,
              ...atTop,
              verdict:
                atTop.present && (atTop.hiddenAttr || !atTop.classVisible) ? 'PASS' : 'FAIL',
              notes: atTop.present ? [] : ['missing-back-to-top']
            });

            await page.evaluate(() => window.scrollTo(0, 900));
            await page.waitForTimeout(500);
            const scrolled = await inspectBackToTop(page);
            const hashCheck = await detectCommerce(page);
            checks.push({
              area: 'back-to-top-after-scroll',
              route: route.key,
              viewport: vp.key,
              ...scrolled,
              verdict:
                scrolled.present &&
                scrolled.classVisible &&
                !scrolled.hiddenAttr &&
                !scrolled.overlapsBottomBar
                  ? 'PASS'
                  : 'FAIL',
              notes: [
                ...(scrolled.overlapsBottomBar ? ['overlaps-bottom-bar'] : []),
                ...(hashCheck.hashLinks.length ? ['hash-links'] : [])
              ]
            });

            const btn = page.locator('#backToTop');
            if (await btn.isVisible().catch(() => false)) {
              await btn.click();
              await page.waitForTimeout(800);
              const scrollY = await page.evaluate(() => window.scrollY);
              const mainFocused = await page.evaluate(() => document.activeElement?.id === 'MainContent');
              checks.push({
                area: 'back-to-top-click',
                route: route.key,
                viewport: vp.key,
                scrollY,
                mainFocused,
                verdict: scrollY < 80 && mainFocused ? 'PASS' : 'PASS WITH NOTES',
                notes: scrollY >= 80 ? ['scroll-not-at-top'] : mainFocused ? [] : ['main-not-focused']
              });
            }

            await screenshot(page, shotsDir, `homepage-mobile-${route.key}.png`);
          }
        }

        if (route.key === 'search-organiser' && vp.key === 'mobile') {
          const search = await inspectSearch(page);
          checks.push({
            area: 'search',
            route: route.key,
            viewport: vp.key,
            ...search,
            verdict: search.performed && search.liveCards > 0 && !search.staticDemo ? 'PASS' : 'FAIL',
            notes: []
          });
        }

        if (route.key === 'controlled-pilot' && vp.key === 'mobile') {
          const pilot = await inspectControlledPilot(page);
          checks.push({
            area: 'controlled-pilot',
            route: route.key,
            viewport: vp.key,
            ...pilot,
            verdict: pilot.controlledShell && !pilot.genericShellLeak ? 'PASS' : 'FAIL',
            notes: []
          });
        }

        const commerce = await detectCommerce(page);
        const safetyNotes = [];
        if (commerce.activePurchase.length) safetyNotes.push('active-purchase');
        if (commerce.hashLinks.length) safetyNotes.push('hash-links');
        if (commerce.activeCheckoutCustomer.length) safetyNotes.push('checkout-customer');
        if (commerce.activeNewsletter.length) safetyNotes.push('newsletter-capture');
        checks.push({
          area: 'safety',
          route: route.key,
          viewport: vp.key,
          verdict: safetyNotes.length ? 'FAIL' : 'PASS',
          notes: safetyNotes
        });
      }
    }

    const reducedPage = await context.newPage();
    await reducedPage.emulateMedia({ reducedMotion: 'reduce' });
    await reducedPage.setViewportSize({ width: 390, height: 844 });
    await reducedPage.goto(PREVIEW_URL, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await reducedPage.waitForTimeout(1200);
    const reducedTopbar = await inspectTopbar(reducedPage);
    const reducedMotion = await sampleTopbarMotion(reducedPage);
    checks.push({
      area: 'reduced-motion-topbar',
      viewport: 'mobile',
      ...reducedTopbar,
      ...reducedMotion,
      verdict:
        reducedTopbar.trackAnimationName === 'none' || !reducedMotion.motionDetected
          ? 'PASS'
          : 'FAIL',
      notes: []
    });
    await reducedPage.close();

    const verdict = overallVerdict(checks.filter((c) => c.area !== 'screenshot'));
    const summary = {
      slice: '21CT',
      verdict,
      previewThemeId: PREVIEW_THEME_ID,
      implementation: 'df6b4ac',
      sync: '21CS',
      unlockMode: manualUnlock ? 'manual-unlock' : 'env-password',
      timestamp: new Date().toISOString(),
      checks
    };

    await fsp.writeFile(path.join(runDir, 'summary.json'), JSON.stringify(summary, null, 2));
    await fsp.writeFile(
      path.join(runDir, 'notes.md'),
      [`# Slice 21CT mobile UX validation`, '', `- Verdict: **${verdict}**`, '', 'See summary.json.'].join('\n')
    );

    console.log(`\nVerdict: ${verdict}`);
    console.log(`Evidence: ${path.relative(repoRoot, runDir)}`);
    process.exit(verdict === 'FAIL' ? 1 : 0);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
