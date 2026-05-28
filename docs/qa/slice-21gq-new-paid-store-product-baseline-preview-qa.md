# Slice 21GQ — New paid-store product baseline and draft preview QA

**Date:** 2026-05-28  
**Owner:** Product Owner / QA  
**Execution:** Codex only  
**Store:** `sikhwarigroupdev.myshopify.com`  
**Draft theme under test:** `Mzansi Select MVP Restored` `#162429075681`  
**Preview URL:** `https://sikhwarigroupdev.myshopify.com?preview_theme_id=162429075681`

## Pre-check

- `git status --short --branch`: `master` with existing untracked `tools/catalogue/` and `tools/qa/run-slice-21gj-pdp-pending-load-diagnostics.mjs` only.
- `git check-ignore -v artifacts/`: confirmed ignored by `.gitignore`.
- `shopify theme list --store sikhwarigroupdev.myshopify.com`: confirmed:
  - `Horizon` `#158396285153` is **live**.
  - `Mzansi Select MVP Restored` `#162429075681` is **unpublished**.
- Scope posture confirmed: no publish/password/product/price/checkout/domain/app action planned.

## Read-only product audit result

### Admin API audit status

- **BLOCKED** for full product-baseline extraction in this slice.
- Blocking detail:
  - `shopify store execute --store sikhwarigroupdev.myshopify.com` returned: **No stored app authentication found** for this store.
- Consequence:
  - Could not complete the required read-only Admin field capture in this run for:
    - status, first variant price, variant count, media count, tags, `onlineStoreUrl`, and Online Store publication state.

### Safe evidence captured

- Query and attempted audit artifacts were kept under `artifacts/` only.
- Rendered storefront evidence (successful) captured at:
  - `D:\dev\mzansi-select-shopify-winqa\artifacts\qa\slice-21gn-c-windows-preview-qa\2026-05-28-13-18-03\summary.json`

## Draft preview rendered QA (read-only)

Execution used Windows headed lane (`msedge`) with manual storefront unlock by Product Owner; no credentials/session storage captured.

### Routes tested

- `/`
- `/collections/all`
- `/search?q=organiser&type=product`
- `/pages/contact#business-details`
- `/collections/retro-vault-consoles-classics`
- `/collections/games-toys`
- 3 sampled PDPs (from visible product cards):
  - `/products/beverage-bottle-oil-bottle-handle-holder`
  - `/products/usb-bag-sealer`
  - `/products/foldable-magnetic-phone-holder-desktop-tablet-stand`

### Visual result

- **PASS:** Mzansi Select draft-theme signals visible; Horizon not detected in rendered content.
- **PASS:** homepage north-star signals visible.
- **PASS:** Business Details anchor route works.
- **PASS:** support email/phone visible.

### Catalogue and search result

- `/collections/all`: `200`, **41** product links detected.
- `/search?q=organiser&type=product`: `200`, **0** product links detected.

### Collection/PDP route result

- `/collections/retro-vault-consoles-classics`: `404`.
- `/collections/games-toys`: `404`.
- 3 sampled PDPs: all returned `404` in this run context.

### Commerce safety result

- **PASS:** no Add to Cart visible.
- **PASS:** no `/cart/add` forms.
- **PASS:** no quick-add.
- **PASS:** no dynamic checkout.
- **PASS:** no checkout/payment path.
- **PASS:** no Supplier verified claim.
- **PASS:** no newsletter/email capture.
- **PASS:** no Liquid errors detected.

### Mobile / spinner / gallery observations

- **Mobile overflow:** **FAIL** (overflow flagged on key routes).
- **PDP spinner/pending-load:** no active spinner detected on sampled PDPs (`initial=0`, `after3s=0`).
- **Gallery max 5 media:** **not verifiable in rendered run** because sampled PDPs returned `404`.

## Diagnosis for “products missing from storefront” requirement

- **No** — products are now present on storefront `/collections/all` (41 links found).
- Current route failures appear consistent with **route/collection mapping and handle-set mismatch**, not empty Admin catalogue:
  - Search term `organiser` currently returns no matches in this draft route context.
  - Retro Vault / Games & Toys collection routes return 404.
  - Sampled legacy PDP handles return 404 while `/collections/all` shows a different visible handle set.

## Smallest next recovery action (no mutation in this slice)

1. Create/refresh stored app auth for this store (`shopify store auth --store sikhwarigroupdev.myshopify.com --scopes ...`) and rerun read-only product baseline export.
2. Run a read-only handle-diff check between:
   - `/collections/all` visible handles, and
   - homepage/collection-route link targets used by draft theme.
3. After link-target alignment and collection-route fixes, rerun rendered preview QA on the same route set.

## 21GQ verdict

**FAIL_FIX_FIRST**

- Positive: paid-store catalogue is now visibly present on `/collections/all`; commerce safety controls remain intact.
- Blocking: required Admin read-only product baseline table is auth-blocked; search and key collection/PDP routes still fail.

## Recommendation

**fix first** — do not publish draft and do not remove password yet.
