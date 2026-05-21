#!/usr/bin/env node

import fsp from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..', '..');

const PREVIEW_THEME_ID = '151207542967';
const STORE_ORIGIN = 'https://dropshippoc.myshopify.com';
const PREVIEW_HOME = `${STORE_ORIGIN}/?preview_theme_id=${PREVIEW_THEME_ID}`;
const PASSWORD_URL = `${STORE_ORIGIN}/password`;
const MANUAL_UNLOCK_TIMEOUT_MS = 12 * 60 * 1000;
const evidenceRoot = path.join(repoRoot, 'artifacts', 'qa', 'slice-21dc-live-dom-overflow-probe');

const VIEWPORT = { width: 390, height: 844 };

const routes = [
  { key: 'homepage', path: `/?preview_theme_id=${PREVIEW_THEME_ID}` },
  {
    key: 'search',
    path: `/search?q=organiser&type=product&preview_theme_id=${PREVIEW_THEME_ID}`
  },
  {
    key: 'controlled-pilot',
    path: `/collections/controlled-pilot?preview_theme_id=${PREVIEW_THEME_ID}`
  }
];

const namedSuspects = [
  '.topbar',
  '.topbar-panel',
  '.topbar-marquee',
  '.topbar-track',
  '.cat-strip',
  '.cat-strip-inner',
  '.cat-strip-track',
  '.hero-visual',
  '.collage-grid',
  '.products-grid',
  'nav.bottom-bar',
  '#backToTop'
];

const isolationRules = [
  { key: 'hide-topbar', css: '.topbar { visibility: hidden !important; }' },
  { key: 'hide-topbar-track', css: '.topbar-track { display: none !important; }' },
  { key: 'hide-cat-strip', css: '.cat-strip { display: none !important; }' },
  {
    key: 'hide-cat-strip-track',
    css: '.cat-strip-track { display: none !important; }'
  },
  {
    key: 'hide-hero-collage',
    css: '.hero-visual, .collage-grid { display: none !important; }'
  },
  { key: 'hide-products-grid', css: '.products-grid { display: none !important; }' },
  { key: 'hide-bottom-bar', css: 'nav.bottom-bar { display: none !important; }' },
  { key: 'hide-back-to-top', css: '#backToTop { display: none !important; }' }
];

const args = new Set(process.argv.slice(2));

function resolvePlaywright() {
  const require = createRequire(import.meta.url);
  return require('playwright');
}

async function isPasswordGate(page) {
  if (/\/password(?:[?#]|$)/.test(page.url())) return true;
  const body = (await page.locator('body').innerText().catch(() => '')).replace(/\s+/g, ' ');
  return /enter store using password|store password/i.test(body);
}

async function waitForManualUnlock(page) {
  await page.goto(PASSWORD_URL, { waitUntil: 'domcontentloaded', timeout: 45000 });
  console.log('\n=== Manual storefront unlock ===');
  console.log('Enter the password in Chromium only.\n');
  const started = Date.now();
  while (Date.now() - started < MANUAL_UNLOCK_TIMEOUT_MS) {
    await page.waitForTimeout(2000);
    if (!(await isPasswordGate(page))) {
      await page.goto(PREVIEW_HOME, { waitUntil: 'domcontentloaded', timeout: 45000 });
      await page.waitForTimeout(1000);
      if (!(await isPasswordGate(page))) {
        console.log('Unlock detected.\n');
        return;
      }
    }
  }
  throw new Error('Timed out waiting for manual unlock.');
}

async function measureRoot(page) {
  return page.evaluate(() => {
    const doc = document.documentElement;
    const body = document.body;
    const before = doc.scrollLeft;
    doc.scrollLeft = 9999;
    const docSL = doc.scrollLeft;
    doc.scrollLeft = before;
    return {
      docScrollWidth: doc.scrollWidth,
      docClientWidth: doc.clientWidth,
      docScrollLeftMax: docSL,
      bodyScrollWidth: body.scrollWidth,
      bodyClientWidth: body.clientWidth,
      overflow: doc.scrollWidth > doc.clientWidth + 2
    };
  });
}

async function measureNamedSuspects(page) {
  return page.evaluate((selectors) => {
    const pick = (selector) => {
      const el = document.querySelector(selector);
      if (!el) return { selector, missing: true };
      const rect = el.getBoundingClientRect();
      const style = getComputedStyle(el);
      const path = [];
      let node = el;
      while (node && node !== document.body && path.length < 8) {
        const id = node.id ? `#${node.id}` : '';
        const cls =
          node.classList && node.classList.length
            ? `.${[...node.classList].slice(0, 3).join('.')}`
            : '';
        path.unshift(`${node.tagName.toLowerCase()}${id}${cls}`);
        node = node.parentElement;
      }
      return {
        selector,
        path: path.join(' > '),
        className: el.className?.toString?.() || '',
        id: el.id || '',
        rect: {
          left: Math.round(rect.left * 100) / 100,
          right: Math.round(rect.right * 100) / 100,
          width: Math.round(rect.width * 100) / 100
        },
        scrollWidth: el.scrollWidth,
        clientWidth: el.clientWidth,
        position: style.position,
        display: style.display,
        width: style.width,
        minWidth: style.minWidth,
        maxWidth: style.maxWidth,
        overflowX: style.overflowX,
        transform: style.transform,
        animationName: style.animationName,
        whiteSpace: style.whiteSpace,
        contain: style.contain,
        zIndex: style.zIndex
      };
    };
    return selectors.map(pick);
  }, namedSuspects);
}

async function findOverflowSuspects(page) {
  return page.evaluate(() => {
    const vw = window.innerWidth;
    const rows = [];
    for (const el of document.querySelectorAll('body *')) {
      const rect = el.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) continue;
      if (rect.right <= vw + 2) continue;
      const style = getComputedStyle(el);
      if (style.position === 'fixed') continue;
      const path = [];
      let node = el;
      while (node && node !== document.body && path.length < 6) {
        const id = node.id ? `#${node.id}` : '';
        const cls =
          node.classList && node.classList.length
            ? `.${[...node.classList].slice(0, 2).join('.')}`
            : '';
        path.unshift(`${node.tagName.toLowerCase()}${id}${cls}`);
        node = node.parentElement;
      }
      rows.push({
        path: path.join(' > '),
        className: (el.className || '').toString().slice(0, 80),
        rectRight: Math.round(rect.right),
        scrollWidth: el.scrollWidth,
        clientWidth: el.clientWidth,
        position: style.position,
        display: style.display,
        overflowX: style.overflowX,
        transform: style.transform,
        animationName: style.animationName
      });
    }
    rows.sort((a, b) => b.rectRight - a.rectRight);
    return rows.slice(0, 25);
  });
}

async function runIsolation(page, rule) {
  await page.evaluate((css) => {
    let el = document.getElementById('slice21dc-isolation');
    if (!el) {
      el = document.createElement('style');
      el.id = 'slice21dc-isolation';
      document.head.appendChild(el);
    }
    el.textContent = css;
  }, rule.css);
  await page.waitForTimeout(400);
  const root = await measureRoot(page);
  return { rule: rule.key, css: rule.css, ...root };
}

async function clearIsolation(page) {
  await page.evaluate(() => {
    document.getElementById('slice21dc-isolation')?.remove();
  });
}

async function main() {
  if (args.has('--help')) {
    console.log(
      [
        'Usage: node tools/qa/run-slice-21dc-live-dom-overflow-probe.mjs --manual-unlock',
        '',
        'Live DOM overflow diagnosis on preview theme 151207542967 (390x844).',
        'Measures documentElement/body scroll metrics, named suspects, CSS isolation.',
        'Evidence: artifacts/qa/slice-21dc-live-dom-overflow-probe/ (not committed).',
        'Requires --manual-unlock; does not read or store passwords, cookies, or session files.'
      ].join('\n')
    );
    process.exit(0);
  }

  if (!args.has('--manual-unlock')) {
    console.error('BLOCKED: --manual-unlock is required for this probe.');
    process.exit(2);
  }

  const playwright = resolvePlaywright();
  const timestamp = new Date().toISOString().replace(/[:]/g, '').replace(/\..+/, '').replace('T', '-');
  const runDir = path.join(evidenceRoot, timestamp);
  await fsp.mkdir(runDir, { recursive: true });

  const browser = await playwright.chromium.launch({
    headless: !args.has('--manual-unlock'),
    args: ['--disable-dev-shm-usage']
  });

  try {
    const page = await browser.newPage({ viewport: VIEWPORT });
    await waitForManualUnlock(page);

    await page.goto(PREVIEW_HOME, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await page.waitForTimeout(2500);
    const baselineHomepage = await measureRoot(page);
    const homepageNamed = await measureNamedSuspects(page);
    const homepageSuspects = await findOverflowSuspects(page);

    const isolation = [];
    for (const rule of isolationRules) {
      isolation.push(await runIsolation(page, rule));
      await clearIsolation(page);
      await page.waitForTimeout(200);
    }
    await clearIsolation(page);
    await page.waitForTimeout(400);
    const postIsolationRoot = await measureRoot(page);

    const routeBaselines = [
      {
        route: 'homepage',
        root: baselineHomepage,
        named: homepageNamed,
        suspects: homepageSuspects
      }
    ];

    for (const route of routes.slice(1)) {
      await page.goto(`${STORE_ORIGIN}${route.path}`, {
        waitUntil: 'domcontentloaded',
        timeout: 45000
      });
      await page.waitForTimeout(2000);
      const root = await measureRoot(page);
      routeBaselines.push({ route: route.key, root, named: [], suspects: [] });
    }

    const isolationWinner = isolation.find(
      (row) =>
        baselineHomepage.overflow &&
        row.docScrollWidth <= row.docClientWidth + 2
    );

    const summary = {
      slice: '21DC',
      previewThemeId: PREVIEW_THEME_ID,
      viewport: VIEWPORT,
      timestamp: new Date().toISOString(),
      baselineHomepage,
      postIsolationRoot,
      routeBaselines,
      isolation,
      confirmedOffender: isolationWinner?.rule || null
    };

    await fsp.writeFile(path.join(runDir, 'summary.json'), JSON.stringify(summary, null, 2));
    console.log('\nHomepage baseline:', baselineHomepage);
    console.log('\nIsolation (homepage):');
    for (const row of isolation) {
      console.log(
        `  ${row.rule}: doc ${row.docScrollWidth}/${row.docClientWidth} scrollLeftMax ${row.docScrollLeftMax}`
      );
    }
    console.log(`\nEvidence: ${path.relative(repoRoot, runDir)}`);
    if (summary.confirmedOffender) {
      console.log(`Likely offender group: ${summary.confirmedOffender}`);
    }
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
