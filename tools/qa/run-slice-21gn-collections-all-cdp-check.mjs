#!/usr/bin/env node

import fsp from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..', '..');
const requireFromHere = createRequire(import.meta.url);

const STORE_ORIGIN = 'https://sikhwarigroupdev.myshopify.com';
const THEME_ID = '162429075681';
const TARGET_ROUTE = `/collections/all?preview_theme_id=${THEME_ID}`;
const TARGET_URL = `${STORE_ORIGIN}${TARGET_ROUTE}`;
const PASSWORD_URL = `${STORE_ORIGIN}/password`;

const CDP_PORT = Number(process.env.MZANSI_CDP_PORT || '9222');
const CDP_HTTP_ENDPOINT = process.env.MZANSI_CDP_ENDPOINT || null;
const PASSWORD_ENV = process.env.MZANSI_STOREFRONT_PASSWORD || '';

const evidenceRoot = path.join(repoRoot, 'artifacts', 'qa', 'slice-21gn-collections-all-cdp-check');
const browserProfileDir = path.join(repoRoot, 'artifacts', 'browser-profiles', 'slice-21gn');

function stamp() {
  return new Date().toISOString().replace(/[:.]/g, '-').replace('T', '-').slice(0, 19);
}

function normalizeText(value) {
  return String(value || '')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseProductHandle(href) {
  if (!href) return null;
  try {
    const url = new URL(href, STORE_ORIGIN);
    const match = url.pathname.match(/^\/products\/([^/?#]+)/i);
    return match ? match[1] : null;
  } catch {
    return null;
  }
}

function resolvePlaywright() {
  try {
    requireFromHere.resolve('playwright');
    return requireFromHere('playwright');
  } catch {
    throw new Error(`Playwright not found in repo. Run npm install in ${repoRoot}.`);
  }
}

async function waitForCdpEndpoint(endpoint, timeoutMs = 20_000) {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    try {
      const response = await fetch(`${endpoint}/json/version`);
      if (response.ok) {
        const data = await response.json();
        if (data?.webSocketDebuggerUrl) return true;
      }
    } catch {
      // keep polling
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  return false;
}

async function firstReachableEndpoint(endpoints, timeoutMs = 20_000) {
  for (const endpoint of endpoints) {
    const ok = await waitForCdpEndpoint(endpoint, timeoutMs);
    if (ok) return endpoint;
  }
  return null;
}

async function connectOverCdpWithTimeout(playwright, endpoint, timeoutMs = 12_000) {
  return await Promise.race([
    playwright.chromium.connectOverCDP(endpoint),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error(`connect_timeout_${timeoutMs}ms`)), timeoutMs)
    )
  ]);
}

function wslToWindowsPath(inputPath) {
  const result = spawnSync('wslpath', ['-w', inputPath], {
    cwd: repoRoot,
    encoding: 'utf8'
  });
  if (result.status !== 0) {
    return null;
  }
  return result.stdout.trim();
}

function launchWindowsChromeForCdp(profilePathWindows, port) {
  const script = `
$ErrorActionPreference = "Stop"
$port = ${port}
$profile = '${profilePathWindows.replace(/'/g, "''")}'
$chromePaths = @(
  "$Env:ProgramFiles\\Google\\Chrome\\Application\\chrome.exe",
  "$Env:ProgramFiles(x86)\\Google\\Chrome\\Application\\chrome.exe",
  "$Env:LocalAppData\\Google\\Chrome\\Application\\chrome.exe"
)
$chrome = $chromePaths | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $chrome) { Write-Output "CHROME_NOT_FOUND"; exit 3 }
New-Item -ItemType Directory -Force -Path $profile | Out-Null
Start-Process -FilePath $chrome -ArgumentList @(
  "--remote-debugging-port=$port",
  "--remote-debugging-address=0.0.0.0",
  "--user-data-dir=$profile",
  "--no-first-run",
  "--no-default-browser-check",
  "about:blank"
) | Out-Null
Write-Output "CHROME_LAUNCHED"
`.trim();

  const launched = spawnSync('powershell.exe', ['-NoProfile', '-ExecutionPolicy', 'Bypass', '-Command', script], {
    cwd: repoRoot,
    encoding: 'utf8'
  });

  return {
    ok: launched.status === 0,
    stdout: normalizeText(launched.stdout),
    stderr: normalizeText(launched.stderr)
  };
}

function discoverCdpEndpoints(port) {
  const endpoints = [`http://127.0.0.1:${port}`, `http://localhost:${port}`];
  try {
    const resolv = requireFromHere('node:fs').readFileSync('/etc/resolv.conf', 'utf8');
    const nameserver = resolv
      .split('\n')
      .map((line) => line.trim())
      .find((line) => line.startsWith('nameserver '))
      ?.split(/\s+/)[1];
    if (nameserver) {
      endpoints.push(`http://${nameserver}:${port}`);
    }
  } catch {
    // best effort only
  }
  return Array.from(new Set(endpoints));
}

async function connectViaCdp(playwright, summary) {
  const methodsTried = [];
  const endpointCandidates = CDP_HTTP_ENDPOINT ? [CDP_HTTP_ENDPOINT] : discoverCdpEndpoints(CDP_PORT);

  if (process.env.MZANSI_CDP_ENDPOINT) {
    methodsTried.push('env_endpoint');
    try {
      const browser = await connectOverCdpWithTimeout(playwright, process.env.MZANSI_CDP_ENDPOINT);
      summary.cdp.method = 'env_endpoint';
      return browser;
    } catch (error) {
      summary.cdp.errors.push(`env_endpoint_failed:${normalizeText(error?.message || error)}`);
    }
  }

  methodsTried.push('existing_local_endpoint');
  const existingEndpoint = await firstReachableEndpoint(endpointCandidates, 2_500);
  if (existingEndpoint) {
    try {
      const browser = await connectOverCdpWithTimeout(playwright, existingEndpoint);
      summary.cdp.method = 'existing_local_endpoint';
      summary.cdp.endpoint = existingEndpoint;
      return browser;
    } catch (error) {
      summary.cdp.errors.push(`existing_local_endpoint_failed:${normalizeText(error?.message || error)}`);
    }
  }

  methodsTried.push('launch_windows_chrome_profile');
  await fsp.mkdir(browserProfileDir, { recursive: true });
  const profilePathWindows = wslToWindowsPath(browserProfileDir);
  if (!profilePathWindows) {
    summary.cdp.errors.push('launch_windows_chrome_profile_failed:unable_to_convert_profile_path');
    summary.cdp.methodsTried = methodsTried;
    return null;
  }

  const launch = launchWindowsChromeForCdp(profilePathWindows, CDP_PORT);
  if (!launch.ok) {
    summary.cdp.errors.push(`launch_windows_chrome_profile_failed:${launch.stdout || launch.stderr || 'unknown'}`);
    summary.cdp.methodsTried = methodsTried;
    return null;
  }

  const launchedEndpoint = await firstReachableEndpoint(endpointCandidates, 8_000);
  if (!launchedEndpoint) {
    summary.cdp.errors.push('launch_windows_chrome_profile_failed:cdp_endpoint_not_ready');
    summary.cdp.methodsTried = methodsTried;
    return null;
  }

  try {
    const browser = await connectOverCdpWithTimeout(playwright, launchedEndpoint);
    summary.cdp.method = 'launch_windows_chrome_profile';
    summary.cdp.endpoint = launchedEndpoint;
    summary.cdp.profilePath = 'artifacts/browser-profiles/slice-21gn';
    summary.cdp.methodsTried = methodsTried;
    return browser;
  } catch (error) {
    summary.cdp.errors.push(`launch_windows_chrome_profile_failed:${normalizeText(error?.message || error)}`);
    summary.cdp.methodsTried = methodsTried;
    return null;
  }
}

async function isPasswordGate(page) {
  if (/\/password(?:[?#]|$)/i.test(page.url())) return true;
  const text = normalizeText(await page.locator('body').innerText().catch(() => '')).toLowerCase();
  return text.includes('store password') || text.includes('enter store using password') || text.includes('enter using password');
}

async function bodyText(page) {
  return normalizeText(await page.locator('body').innerText().catch(() => ''));
}

async function unlockPasswordIfNeeded(page, summary) {
  if (!(await isPasswordGate(page))) return { ok: true, reason: 'not_required' };

  if (!PASSWORD_ENV) {
    summary.blockers.push('BLOCKED_PASSWORD');
    return { ok: false, reason: 'password_required_env_missing' };
  }

  const pageBody = (await bodyText(page)).toLowerCase();
  if (pageBody.includes('captcha') || pageBody.includes('robot') || pageBody.includes('challenge')) {
    summary.blockers.push('BLOCKED_CAPTCHA');
    return { ok: false, reason: 'captcha_on_password_page' };
  }

  const passwordInput = page.locator('input[type="password"], input[name="password"]');
  if (!(await passwordInput.count())) {
    summary.blockers.push('BLOCKED_PASSWORD');
    return { ok: false, reason: 'password_input_not_found' };
  }

  await passwordInput.first().fill(PASSWORD_ENV);
  const submit = page.locator('button[type="submit"], input[type="submit"], button:has-text("Enter"), button:has-text("View store")');
  if (await submit.count()) {
    await Promise.all([
      page.waitForLoadState('domcontentloaded', { timeout: 20_000 }).catch(() => null),
      submit.first().click()
    ]);
  } else {
    await passwordInput.first().press('Enter').catch(() => null);
    await page.waitForLoadState('domcontentloaded', { timeout: 20_000 }).catch(() => null);
  }

  const stillPassword = await isPasswordGate(page);
  if (!stillPassword) return { ok: true, reason: 'unlocked_with_env_password' };

  const retryBody = (await bodyText(page)).toLowerCase();
  if (retryBody.includes('captcha') || retryBody.includes('robot') || retryBody.includes('challenge')) {
    summary.blockers.push('BLOCKED_CAPTCHA');
    return { ok: false, reason: 'captcha_after_password_submit' };
  }

  summary.blockers.push('BLOCKED_PASSWORD');
  return { ok: false, reason: 'password_submit_failed_or_incorrect' };
}

async function collectRouteSummary(page, summary) {
  await page.goto(TARGET_URL, { waitUntil: 'domcontentloaded', timeout: 45_000 });
  await page.waitForTimeout(1500);

  if (await isPasswordGate(page)) {
    summary.blockers.push('BLOCKED_PASSWORD');
    return;
  }

  const text = await bodyText(page);
  const textLower = text.toLowerCase();

  const productLinks = await page.locator('a[href*="/products/"]').evaluateAll((nodes) =>
    Array.from(new Set(nodes.map((n) => n.getAttribute('href')).filter(Boolean)))
  );
  const absoluteProductLinks = productLinks.map((href) => {
    try {
      return new URL(href, STORE_ORIGIN).toString();
    } catch {
      return href;
    }
  });

  const uniqueHandles = [];
  for (const href of productLinks) {
    const handle = parseProductHandle(href);
    if (handle && !uniqueHandles.includes(handle)) uniqueHandles.push(handle);
  }

  const addToCartVisible = await page
    .locator('button:has-text("Add to cart"), button:has-text("Buy now"), [name="add"], .add-to-cart-button')
    .count()
    .catch(() => 0);
  const cartAddForms = await page.locator('form[action*="/cart/add"]').count().catch(() => 0);
  const quickAddCount = await page.locator('.quick-add, [class*="quick-add"]').count().catch(() => 0);
  const dynamicCheckoutCount = await page.locator('.shopify-payment-button, [data-shopify="payment-button"]').count().catch(() => 0);
  const checkoutPathCount = await page
    .locator('a[href*="/checkout"], a[href*="/checkouts"], form[action*="/checkout"], a[href*="/cart"]')
    .count()
    .catch(() => 0);
  const newsletterCaptureCount = await page
    .locator('input[type="email"], form[action*="newsletter"], .newsletter')
    .count()
    .catch(() => 0);

  const hasLiquidError = /liquid error|internal error|\b500\b/i.test(text);
  const supplierVerifiedVisible = /supplier verified/i.test(text);

  const firstContentfulSignals = {
    hasRetroVaultText: textLower.includes('retro vault'),
    hasGamesToysText: textLower.includes('games & toys') || textLower.includes('games and toys'),
    hasMzansiText: textLower.includes('mzansi')
  };

  // Heuristic spinner signal: resources still increasing 5s after page appears usable.
  const before = await page.evaluate(() => performance.getEntriesByType('resource').length).catch(() => 0);
  await page.waitForTimeout(5000);
  const after = await page.evaluate(() => performance.getEntriesByType('resource').length).catch(() => before);
  const spinnerLikelyActive = after > before;

  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(800);
  const mobileOverflow = await page
    .evaluate(() => {
      const root = document.documentElement;
      return root.scrollWidth > window.innerWidth + 1;
    })
    .catch(() => null);

  summary.route = {
    testedUrl: TARGET_URL,
    finalUrl: page.url(),
    nonPasswordContentReached: true,
    themeSignals: firstContentfulSignals,
    productCardsCount: await page.locator('.product-card, [class*="product-card"], [data-testid*="product"]').count().catch(() => 0),
    productLinksCount: productLinks.length,
    first10ProductHandles: uniqueHandles.slice(0, 10),
    debugFirst3ProductLinks: absoluteProductLinks.slice(0, 3),
    commerceChecks: {
      addToCartVisibleCount: addToCartVisible,
      cartAddFormsCount: cartAddForms,
      quickAddCount,
      dynamicCheckoutCount,
      checkoutPathCount,
      newsletterCaptureCount,
      supplierVerifiedVisible,
      liquidErrorVisible: hasLiquidError
    },
    mobileHorizontalOverflow: mobileOverflow,
    spinnerLikelyActiveAfterContent: spinnerLikelyActive
  };

  summary.commerceSafety = {
    noAddToCart: addToCartVisible === 0,
    noCartAddForms: cartAddForms === 0,
    noQuickAdd: quickAddCount === 0,
    noDynamicCheckout: dynamicCheckoutCount === 0,
    noCheckoutPaymentPath: checkoutPathCount === 0,
    noNewsletterCapture: newsletterCaptureCount === 0,
    noSupplierVerified: !supplierVerifiedVisible,
    noLiquidErrors: !hasLiquidError
  };
}

async function run() {
  const runDir = path.join(evidenceRoot, stamp());
  await fsp.mkdir(runDir, { recursive: true });

  const summary = {
    slice: '21GN',
    startedAt: new Date().toISOString(),
    store: 'sikhwarigroupdev.myshopify.com',
    theme: {
      live: { name: 'Horizon', id: 158396285153 },
      draft: { name: 'Mzansi Select MVP Restored', id: 162429075681 }
    },
    previewUrl: `${STORE_ORIGIN}?preview_theme_id=${THEME_ID}`,
    cdp: {
      method: null,
      methodsTried: [],
      errors: [],
      profilePath: null
    },
    auth: {
      passwordEnvProvided: Boolean(PASSWORD_ENV),
      passwordResult: 'not_attempted',
      captchaBlocked: false
    },
    blockers: [],
    route: null,
    commerceSafety: null,
    verdict: 'UNKNOWN'
  };

  let browser = null;
  try {
    const playwright = resolvePlaywright();
    browser = await connectViaCdp(playwright, summary);

    if (!browser) {
      summary.verdict = 'BLOCKED_CDP_UNAVAILABLE';
      return summary;
    }

    const context = browser.contexts()[0] || (await browser.newContext());
    const page = context.pages()[0] || (await context.newPage());

    await page.goto(TARGET_URL, { waitUntil: 'domcontentloaded', timeout: 45_000 }).catch(async () => {
      await page.goto(PASSWORD_URL, { waitUntil: 'domcontentloaded', timeout: 45_000 });
    });

    const unlock = await unlockPasswordIfNeeded(page, summary);
    summary.auth.passwordResult = unlock.reason;
    summary.auth.captchaBlocked = summary.blockers.includes('BLOCKED_CAPTCHA');

    if (unlock.ok) {
      await collectRouteSummary(page, summary);
    }

    if (summary.blockers.includes('BLOCKED_CAPTCHA')) {
      summary.verdict = 'BLOCKED_CAPTCHA';
    } else if (summary.blockers.includes('BLOCKED_PASSWORD')) {
      summary.verdict = 'BLOCKED_PASSWORD';
    } else if (summary.route) {
      const checks = Object.values(summary.commerceSafety || {});
      summary.verdict = checks.every(Boolean) ? 'PASS_WITH_NOTES' : 'FAIL_SAFETY';
    } else {
      summary.verdict = 'BLOCKED_UNKNOWN';
    }

    return summary;
  } finally {
    if (browser) {
      await browser.close().catch(() => null);
    }
  }
}

const runDir = path.join(evidenceRoot, stamp());
await fsp.mkdir(runDir, { recursive: true });

try {
  const summary = await run();
  summary.finishedAt = new Date().toISOString();

  const outFile = path.join(runDir, 'summary.json');
  await fsp.writeFile(outFile, `${JSON.stringify(summary, null, 2)}\n`, 'utf8');

  console.log(`21GN summary written: ${path.relative(repoRoot, outFile)}`);
  console.log(`21GN verdict: ${summary.verdict}`);
  process.exit(summary.verdict.startsWith('FAIL') ? 1 : 0);
} catch (error) {
  const out = {
    slice: '21GN',
    startedAt: new Date().toISOString(),
    verdict: 'HARNESS_ERROR',
    error: normalizeText(error?.stack || error?.message || error)
  };
  const outFile = path.join(runDir, 'summary.json');
  await fsp.writeFile(outFile, `${JSON.stringify(out, null, 2)}\n`, 'utf8');
  console.error('21GN harness error.');
  process.exit(1);
}
