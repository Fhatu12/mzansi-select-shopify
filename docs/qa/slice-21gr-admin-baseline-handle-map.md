# Slice 21GR-WIN — Windows-native Admin baseline and handle-map recovery plan

## Verdict

**21GR-WIN verdict: PARTIAL / BLOCKED (auth-gated)**

Windows-only execution lane was used. No mutations were performed. Shopify CLI auth/theme list/Admin baseline export remained blocked by interactive browser/captcha/login completion.

## Guardrails and Scope

- Executed from Windows working folder: `D:\dev\mzansi-select-shopify-winqa`
- No WSL Shopify auth/export actions performed
- Draft theme was not published
- Password protection was not changed
- No product/price/import/sync/app/checkout/domain mutations were made
- No secrets/tokens/session artifacts were captured

## 1) Windows working folder confirmation

Command run:
- `git status --short --branch`

Result:
- `## master...origin/master`
- ` M package.json`
- `?? tools/qa/run-slice-21gn-c-windows-preview-qa.mjs`

## 2) Shopify auth reset (Windows)

Command run:
- `shopify auth logout`

Result:
- Success: logged out from all accounts.

## 3) Shopify auth login (Windows)

Command run:
- `shopify auth login`

Result:
- Timed out in terminal while waiting for interactive browser completion/captcha.
- This is consistent with known captcha/browser gating from non-manual runs.

## 4) Store/theme access confirmation

Command attempted:
- `shopify theme list --store sikhwarigroupdev.myshopify.com`

Result:
- Timed out due to unresolved interactive auth session.

Expected theme state (from prior accepted slices, not newly re-validated in this blocked run):
- `Horizon` `[live]` `#158396285153`
- `Mzansi Select MVP Restored` `[unpublished]` `#162429075681`

## 5) Admin product baseline export (read-only)

Requested fields could not be freshly exported in this run because CLI auth remained blocked:
- product count
- handle
- title
- status
- onlineStoreUrl
- first variant price
- variant count
- media count
- tags
- publication state

Most recent nearby baseline reference in project docs:
- Slice 21GA recorded `ACTIVE` products = `40` for the transferred store context.

## 6) Storefront handle extraction from draft preview

Target URL:
- `https://sikhwarigroupdev.myshopify.com/collections/all?preview_theme_id=162429075681`

Windows fetch result:
- HTTP 200 returned, but **0 extracted `/products/<handle>` links** from unauthenticated fetch response.

Interpretation:
- Request likely served password/challenge-gated shell instead of unlocked product-grid HTML for scraping context.

## 7) Handle-map diff (best-effort, non-mutating)

Compared sources:
- Admin handles: **blocked in this run** (auth)
- `/collections/all` visible handles on draft preview: **0 extracted** (gated shell)
- Hardcoded theme product links in repo: no direct hardcoded `/products/<handle>` links surfaced in current MVP code scan
- 21GQ/related sampled 404 context: prior slices indicate intermittent route/theme/session split and visibility/indexing instability, not necessarily stable handle invalidation across all products

## 8) Findings

### Current valid handles

- **Not newly verifiable in this run** (Admin export blocked + gated storefront HTML).

### Old/missing hardcoded handles

- No deterministic hardcoded stale handle set could be proven from current code scan in this run.
- Primary risk is not explicit hardcoded-handle leakage, but route/session/index visibility divergence.

### Why sampled PDPs 404

Most likely causes from accumulated evidence chain:
- Product visibility/publication/indexing mismatch at Online Store layer in transferred-store state.
- Session/captcha/password gating causing false-negative route checks in automation/non-unlocked fetches.
- Theme/session split behavior observed in prior slices (desktop/mobile and cached/unlocked differences).

### Search zero-result explanation

Most likely **index/visibility mismatch** rather than just query mismatch:
- Prior slices recorded `/collections/all` and search returning 0 while Admin showed ACTIVE products.
- This pattern points to Online Store listing/index state or availability layer drift, not a simple bad query term.

### Mobile overflow status

- **Not newly measured in this run** due to auth/rendered-check blockade.
- Prior slices often reported no overflow on MVP routes when successfully unlocked and rendered.

## Required metrics summary (this run)

- Windows Shopify auth result: **logout success; login blocked by interactive/captcha timeout**
- Theme list result: **blocked (auth timeout)**
- Admin product count: **blocked in 21GR run**
- `/collections/all` handle count (draft preview fetch): **0**
- First 20 current handles: **not verifiable in this run**
- Old/missing hardcoded handles found: **none conclusively identified in this run**
- 404 root cause: **visibility/indexing/session gating mismatch (most likely)**
- Search zero-result explanation: **index/visibility mismatch (most likely), not only query mismatch**
- Mobile overflow status: **not verifiable in this blocked run**

## Recommended next slice

**Slice 21GS-WIN (interactive unlock + authoritative handle baseline):**
1. Complete `shopify auth login` interactively in Windows browser (same user specified).
2. Re-run `shopify theme list --store sikhwarigroupdev.myshopify.com` and capture exact theme rows.
3. Run read-only Admin GraphQL export for full product baseline fields requested.
4. Capture unlocked browser-rendered `/collections/all?preview_theme_id=162429075681` handles in Windows session.
5. Produce authoritative 3-way handle map and final stale-handle action list.
