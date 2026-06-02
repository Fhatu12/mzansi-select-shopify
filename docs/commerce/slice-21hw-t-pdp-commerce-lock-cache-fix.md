# Slice 21HW-T - PDP commerce lock cache fix

Date: 2026-06-02

## Objective
- Remove or neutralise live PDP catalogue-lock behaviour on `https://mzansiselect.myshopify.com` so purchasable products show a real customer-facing `Add to Cart`.

## Pre-check
- `git status --short --branch`
- `shopify theme list --store mzansiselect.myshopify.com`
- Confirmed initial live theme at start of run: `Mzansi Select MVP Restored` `#162429075681`
- Confirmed latest local commit included `eb0de74`

## Root cause
- Theme/library state and public storefront state diverged.
- The real mutator remained `assets/pdp-catalogue-lock.js`, which rewrote PDP purchase UI into catalogue-only text and disabled the add-to-cart button after render.
- Even after the 21HW-S theme push, the public storefront continued to serve an older rendered PDP bundle and the older `pdp-catalogue-lock.js` asset URL/content.

## Live theme/template comparison
- Live product template used `templates/product.json`
- PDP section used `sections/main-product-foundation.liquid`
- Server HTML still rendered a real `/cart/add` form and `Add to Cart` button in source
- Result: no live theme/template mismatch

## Lock references found
- Local repo references:
  - `layout/theme.liquid`
  - `assets/pdp-catalogue-lock.js`
  - `sections/main-product-foundation.liquid`
  - several card/block gate references for preview-safe pricing copy
- Public storefront still served:
  - `<script src="//mzansiselect.myshopify.com/cdn/shop/t/2/assets/pdp-catalogue-lock.js?v=107603351660785515441779981267" defer></script>`
- Public asset response still returned old cached script content with:
  - `cache-control: public, max-age=31557600`
  - `cf-cache-status: HIT`
  - `age: 421909`
  - `last-modified: Thu, 28 May 2026 15:16:18 GMT`

## Files changed
- `layout/theme.liquid`
- `sections/main-product-foundation.liquid`
- `assets/pdp-catalogue-lock.js` removed from repo/theme
- `docs/commerce/slice-21hw-t-pdp-commerce-lock-cache-fix.md`
- `docs/project-control.md`

## Files pushed
- `layout/theme.liquid`
- `sections/main-product-foundation.liquid`
- deleted `assets/pdp-catalogue-lock.js`

## Exact push commands
- `shopify theme push --store mzansiselect.myshopify.com --theme 162429075681 --allow-live --only layout/theme.liquid --only sections/main-product-foundation.liquid --only assets/pdp-catalogue-lock.js`
- `shopify theme publish --store mzansiselect.myshopify.com --theme 162429075681 --force`
- Fresh-clone cache-break path:
  - pull live theme to temp dir
  - copy in patched `layout/theme.liquid`
  - copy in patched `sections/main-product-foundation.liquid`
  - remove `assets/pdp-catalogue-lock.js` in temp clone
  - `shopify theme push --store mzansiselect.myshopify.com --theme 158396285153 --path <tempdir>`
  - `shopify theme publish --store mzansiselect.myshopify.com --theme 158396285153 --force`

## Cache-busting strategy
- Removed the PDP script include from `layout/theme.liquid`
- Added inline PDP purchase-state guard in `layout/theme.liquid` so a late catalogue-lock mutation cannot silently persist on a non-blocked product page
- Added explicit `data-catalogue-lock` state in `sections/main-product-foundation.liquid`
- Deleted `assets/pdp-catalogue-lock.js` from the theme so stale HTML would ideally fail closed rather than still disabling purchase UI
- Published a fresh cloned theme (`Horizon` `#158396285153`) built from the current live theme plus the fix, to force a new live theme and new asset generation path

## Verification
- PDPs checked:
  - `/products/virtual-reality-vr-glasses-imax-huge-screen-hd-3d-glasses-google-cardboard-box-vr-headset-helmet-for-5-7-phone-support-gamepad`
  - `/products/labubu-display-box-transparent-labubu-big-leader-summer-doll-cotton-doll-blind-box-storage-cabinet`
  - `/products/32-pieses-wooden-chess-standard-tournamen-staunton-wood-chessmen-8cm-king-height-chess-pieces-only-no-board`
- Source verification:
  - public PDP source still contains real `/cart/add` form and `Add to Cart` button markup
- Rendered/headless verification:
  - first two PDPs still render disabled `Price to be confirmed`
  - third PDP still did not expose `.product-main-add` in the sampled rendered pass
- Dynamic checkout:
  - absent in rendered checks
- Cart continuity:
  - blocked because rendered customer button remained disabled

## Regression checks
- `200 /`
- `200 /collections/all`
- `200 /pages/faq`
- `200 /pages/contact`
- `200 /policies/shipping-policy`
- `200 /policies/refund-policy`
- No Liquid error strings detected in sampled PDP source

## Real payment
- Real payment submitted: no

## Remaining blockers
- Public storefront continued to serve the older locked PDP bundle and old `t/2` asset/script reference even after:
  - live-theme targeted pushes
  - live-theme republish
  - deleting `assets/pdp-catalogue-lock.js` from theme source
  - publishing a fresh clone of the live theme as new live theme `Horizon` `#158396285153`
- Because the customer-facing rendered storefront never switched off that stale bundle during this run, truthful live verification of visible working `Add to Cart` remains blocked.

## Verdict
- 21HW-T verdict: robust theme-side fix and cache-busting attempts applied, but live customer rendering remains blocked by storefront/CDN stale bundle propagation outside theme source control
- Add to Cart visible: no
- Dynamic checkout status: disabled/absent
- Real payment submitted: no
