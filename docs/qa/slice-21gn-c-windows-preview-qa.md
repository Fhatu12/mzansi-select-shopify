# Slice 21GN-C — Windows-native draft preview QA

**Date:** 2026-05-28  
**Owner:** Product Owner / QA  
**Execution lane:** Windows-native Codex QA lane (no WSL CDP)  
**Temporary QA folder:** `D:\dev\mzansi-select-shopify-winqa`  
**Store:** `sikhwarigroupdev.myshopify.com`  
**Live theme:** `Horizon` `#158396285153` (unchanged)  
**Draft theme under test:** `Mzansi Select MVP Restored` `#162429075681` (unpublished)  
**Draft preview URL:** `https://sikhwarigroupdev.myshopify.com?preview_theme_id=162429075681`

## Scope and guardrails

- Windows-native storefront rendered QA only.
- No Shopify Admin automation.
- No login automation.
- No publish action.
- No password removal.
- No product/price mutations.
- No app install/import/sync.
- No checkout/payment/customer-flow enablement.
- No domain changes.
- No credential/session/cookie/HAR/trace/video storage.

## Repo parity check

- WSL source repo HEAD: `8fefcf67adb73b24f3aedb23baed2ab085883b87`
- Windows QA repo HEAD: `8fefcf67adb73b24f3aedb23baed2ab085883b87`
- Result: **HEAD parity confirmed** before QA run.
- 21GL/21GM/21GN history present in source docs and commit history at this HEAD.

## Harness and evidence

- Windows-only harness: `tools/qa/run-slice-21gn-c-windows-preview-qa.mjs` (temporary QA lane script in Windows working folder).
- Browser mode: headed `msedge` via Playwright (`channel: msedge`), with fallback capability.
- Storefront unlock: manual in browser window (no password persisted).
- Safe summary output:
  - `D:\dev\mzansi-select-shopify-winqa\artifacts\qa\slice-21gn-c-windows-preview-qa\2026-05-28-09-06-32\summary.json`

## Routes tested

- `/`
- `/collections/all`
- `/search?q=organiser&type=product`
- `/pages/contact#business-details`
- `/collections/retro-vault-consoles-classics`
- `/collections/games-toys`
- 3 PDPs (from visible product-card links during run):
  - `/products/beverage-bottle-oil-bottle-handle-holder`
  - `/products/usb-bag-sealer`
  - `/products/foldable-magnetic-phone-holder-desktop-tablet-stand`

## Results

### Visual/theme result

- **PASS:** Mzansi Select signals visible; Horizon theme name not detected on rendered pages.
- **PASS:** homepage north-star signals (`Retro Vault`, `Games & Toys`) visible.
- **PASS:** Business Details anchor route worked (`/pages/contact#business-details`).
- **PASS:** support email and phone visible.

### Catalogue/search result

- `/collections/all`: status `200`, **0 product links/cards** detected.
- `/search?q=organiser&type=product`: status `200`, **0 product links/cards** detected.
- `/collections/retro-vault-consoles-classics`: status `404`.
- `/collections/games-toys`: status `404`.

### PDP result

- PDPs opened on canonical `/products/<handle>` URLs for 3 sampled handles.
- All sampled PDPs returned status `404` in this run context.
- Price signal selectors were still present on rendered output shell.

### Commerce safety result

- **PASS:** no Add to Cart controls visible.
- **PASS:** no `/cart/add` forms.
- **PASS:** no quick-add surfaces.
- **PASS:** no dynamic checkout.
- **PASS:** no checkout/payment path surfaces.
- **PASS:** no `Supplier verified` claim.
- **PASS:** no newsletter/email capture surfaces.
- **PASS:** no Liquid error text detected.

### Mobile and PDP spinner result

- **Mobile layout:** **FAIL** (horizontal overflow flagged across checked routes in this run).
- **PDP spinner/pending-load:** recorded as no active spinner by selectors (`initialCount=0`, `after3sCount=0`) for all 3 sampled PDPs.

## 21GN-C verdict

- **Verdict:** `FAIL_FIX_FIRST`
- **Primary blockers:**
  - `/collections/all` exposes no products.
  - search route returns no products for `organiser`.
  - required category routes (`retro-vault`, `games-toys`) returned `404`.
  - mobile overflow checks failed.

## Recommendation

- **Recommendation:** **fix first** (do not publish; do not remove password).
- Re-run Windows-native rendered QA after collection/publication/routing and mobile overflow defects are corrected.
