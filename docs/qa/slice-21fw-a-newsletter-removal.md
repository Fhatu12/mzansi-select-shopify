# Slice 21FW-A Newsletter Removal (MVP)

- **Date:** 2026-05-23
- **Verdict:** **PASS WITH NOTES**
- **Scope:** Bounded newsletter surface removal (no email collection implied)
- **Live theme:** `151207542967` / `Mzansi Select MVP Preview`
- **Upstream:** `403ef14e0cc4c3ac999e6f08a528330b60712078` (Slice 21FU)

## Goal

Remove newsletter sections, forms, buttons, and deferred newsletter copy so the MVP does not imply email collection or marketing consent.

## Pre-check

- Branch: `master`
- `artifacts/` ignore rule confirmed
- `tools/catalogue/` remained untracked and uncommitted
- No theme publish or full theme sync planned or performed
- No Shopify Admin product mutation performed
- No checkout/payment/customer-flow enablement performed

## Findings (Before)

- `sections/site-footer.liquid` contained a disabled newsletter block in both desktop and mobile footer:
  - “Stay in the Loop”
  - disabled `input[type="email"]`
  - disabled `Subscribe` button
- Deferred footer and PDP copy referenced “newsletter” / “newsletter capture”.

## Fix

- Removed the footer newsletter block entirely (desktop + mobile) from `sections/site-footer.liquid`.
- Removed newsletter wording from:
  - `sections/site-footer.liquid` cautious pilot copy
  - `sections/main-product-foundation.liquid` support copy
- Removed unused newsletter CSS selectors from `assets/theme.css` (`.footer-nl`, `.nl-*`).

## Newsletter Surfaces Removed

- Footer newsletter heading “Stay in the Loop”
- Footer email input field (desktop + mobile)
- Footer Subscribe button (desktop + mobile)
- Footer/PDP deferred “newsletter” wording

## Customer-Data Safety Result

- **PASS**
- No `input[type="email"]` remains in theme files.
- No newsletter wording remains in theme files.
- No subscribe button remains in theme files.

## Commerce Safety Result

- **PASS**
- No Add to Cart, no `/cart/add` forms, no quick-add, no dynamic checkout, and no checkout/payment enablement were introduced by this slice.
- Catalogue-only PDP lock from 21FU remains unchanged.

## Files Changed

- `sections/site-footer.liquid`
- `sections/main-product-foundation.liquid`
- `assets/theme.css`
- `docs/qa/slice-21fw-a-newsletter-removal.md`
- `docs/project-control.md`

## Files Pushed To Live Theme

- `sections/site-footer.liquid`
- `sections/main-product-foundation.liquid`
- `assets/theme.css`

### Push command

```bash
shopify theme push --store dropshippoc.myshopify.com --theme 151207542967 --allow-live --nodelete --json --no-color --only sections/site-footer.liquid --only sections/main-product-foundation.liquid --only assets/theme.css
```

## Routes Tested

- Code-level verification via repo search:
  - no `newsletter`, `subscribe`, `sign up`, `email updates`, or `email address` strings remain on theme surfaces
  - no `input[type="email"]` remains on theme surfaces
- Rendered verification remains **blocked** in this environment while the storefront access lock is still enabled.

## Notes / Remaining Issues

- Storefront access lock is still active, so a normal public browser fetch still returns the lock page until the go-live step removes it.
- Pre-existing local font-asset 404s remain outside this slice scope.

## Next Owner

- Product Owner (continue with 21FV public go-live once the storefront access lock is removed).

