# Slice 21FU Hard Catalogue-Only PDP Lock

- **Date:** 2026-05-23
- **Verdict:** **PASS WITH NOTES**
- **Scope:** Bounded critical go-live blocker fix
- **Live theme:** `151207542967` / `Mzansi Select MVP Preview`
- **Upstream slice:** `d57d52fa3d976b187899d7d84fa0422ed3d25371`

## Summary

- Slice 21FT showed that PDP commerce gating still depended on product tags.
- Read-only Admin diagnosis in 21FT showed the sampled live PDPs had empty tag sets, so tag-only gating was not reliable enough for an MVP that is entirely catalogue-only.
- Slice 21FU moved the PDP gate to the theme layer so the live MVP theme no longer depends on product tags before suppressing commerce controls and wording.

## Pre-check

- Branch before work: `master`
- `HEAD` included accepted Slice 21FT commit `d57d52fa`
- `artifacts/` ignore rule confirmed
- `tools/catalogue/` remained untracked and uncommitted
- No theme publish, full sync, checkout/payment enablement, product import/sync, media upload, product deletion, `Supplier verified`, price, inventory, delivery, warranty, or stock change was performed or planned

## PDP Add to Cart Root Cause

- The live PDP catalogue-only posture still depended on product tags via `snippets/product-commerce-gate.liquid`.
- The three sampled live products from 21FT had empty tag sets, so a tag-only branch could drift out of the required catalogue-only posture.
- Residual visible commerce wording could still leak from shared PDP presentation copy even where no active cart form or dynamic checkout control was present.

## Theme Fix

- Added a PDP-only hard-lock asset: `assets/pdp-catalogue-lock.js`
- Loaded that asset only on `template.name == 'product'` in `layout/theme.liquid`
- Tightened `sections/main-product-foundation.liquid` so the rendered MVP PDP shell remains catalogue-only by default:
  - no quantity selector
  - approved catalogue-only availability wording
  - approved `Price to be confirmed` and launch-preparation posture
- Updated `snippets/toast-feedback.liquid` so the shared toast no longer contains `Added to cart!`

## Files Changed

- `assets/pdp-catalogue-lock.js`
- `layout/theme.liquid`
- `sections/main-product-foundation.liquid`
- `snippets/toast-feedback.liquid`
- `docs/qa/slice-21fu-hard-catalogue-only-pdp-lock.md`
- `docs/project-control.md`

## Files Pushed To Live Theme

- `assets/pdp-catalogue-lock.js`
- `layout/theme.liquid`
- `sections/main-product-foundation.liquid`
- `snippets/toast-feedback.liquid`

### Push command

```bash
shopify theme push --store dropshippoc.myshopify.com --theme 151207542967 --allow-live --nodelete --json --no-color --only layout/theme.liquid --only sections/main-product-foundation.liquid --only snippets/toast-feedback.liquid --only assets/pdp-catalogue-lock.js
```

## Checks

- `shopify theme check --fail-level error`
  - Result remained blocked by the same repo-wide pre-existing failures outside this slice:
    - `305` total offences
    - `264` errors
    - `41` warnings
- `node --check assets/pdp-catalogue-lock.js`
  - **PASS**

## Verification

### Collection route regression

- Confirmed the 21FT collection-route fix remained intact in the live theme:
  - `/collections/retro-vault-consoles-classics`
  - `/collections/games-toys`
- No theme change in 21FU altered collection routing.
- The prior 21FT live fix and 21FU regression checks continued to show these routes as non-404 catalogue pages with honest empty/deferred intent.

### PDP commerce safety

- Live theme code path now hard-locks PDP commerce at theme level rather than relying only on product tags.
- Targeted browser checks on the previously noisy PDP route no longer found:
  - visible `Add to Cart` text in the active PDP shell
  - cart/add forms
  - dynamic checkout controls
- Wishlist remained interactive on spot-check.
- Product gallery/thumb interaction remained available on spot-check.
- Product options remain display-only in the MVP PDP shell.

### Routes / viewports exercised

- `/`
- `/search?q=organiser&type=product`
- `/collections/retro-vault-consoles-classics`
- `/collections/games-toys`
- Same three sampled PDP handles from 21FT
- Desktop target: `1366x768`
- Mobile target: `390x844`

### Validation note

- Browser-based validation on this storefront remains awkward because fresh non-browser sessions still resolve to the Shopify storefront lock page unless an unlocked browser session is active.
- The bounded live push and targeted unlocked PDP spot-checks support the theme-level fix, but a final Product Owner visual glance after unlock is still the safest last step before removing the storefront access lock.

## PDP Commerce Result

- **PASS WITH NOTES**
- Expected catalogue-only posture is now enforced in the theme, not only via product tags.
- No PDP cart/add form, quick-add, or dynamic checkout path was intentionally rendered by the updated MVP PDP shell.
- Remaining note: final human visual confirmation after unlock is still recommended before removing the storefront lock.

## Remaining Low-Severity Issues

- Local font asset 404s from prior slices remain outside the critical 21FU blocker scope.
- Full repo Theme Check remains noisy because of pre-existing theme issues outside the changed files.

## Go-Live Recommendation

- **Ready for Product Owner final unlocked visual confirmation.**
- If that final glance confirms the sampled PDPs visibly show `Price to be confirmed` and the launch-preparation note instead of any commerce wording, the 21FT/21FU catalogue-only blocker set can be treated as closed.
