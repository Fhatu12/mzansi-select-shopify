# Slice 21HW-S - Live Add to Cart visibility fix

Date: 2026-06-02

## Objective
- Restore visible customer-facing `Add to Cart` on live product detail pages for available products on `https://mzansiselect.myshopify.com` without enabling dynamic checkout or progressing into payment.

## Pre-check
- `git status --short --branch`
- `git check-ignore -v artifacts/`
- `shopify theme list --store mzansiselect.myshopify.com`
- Confirmed live theme: `Mzansi Select MVP Restored` `#162429075681`

## Root cause
- The active live product template already used `sections/main-product-foundation.liquid` and already rendered a real `/cart/add` form in server HTML.
- A client-side mutation script, `assets/pdp-catalogue-lock.js`, rewrote the rendered PDP after load and forced the purchase area back into a catalogue-only state:
  - changed visible price text to `Price to be confirmed`
  - disabled `.product-main-add`
  - rewrote purchase/reassurance copy
- This created the mismatch between source/theme inspection and the rendered customer UI.

## Live theme/template mismatch
- Result: no
- The live PDP template and section were active on the live theme.
- The rendered mismatch came from post-render JavaScript, not from the wrong template/section being assigned.

## Files changed
- `sections/main-product-foundation.liquid`
- `assets/pdp-catalogue-lock.js`
- `docs/commerce/slice-21hw-s-live-add-to-cart-visibility-fix.md`
- `docs/project-control.md`

## Files pushed
- `sections/main-product-foundation.liquid`
- `assets/pdp-catalogue-lock.js`

## Exact push commands
- `shopify theme push --store mzansiselect.myshopify.com --theme 162429075681 --allow-live --only sections/main-product-foundation.liquid`
- `shopify theme push --store mzansiselect.myshopify.com --theme 162429075681 --allow-live --only sections/main-product-foundation.liquid --only assets/pdp-catalogue-lock.js`
- `shopify theme publish --store mzansiselect.myshopify.com --theme 162429075681 --force`

## PDPs checked
- Low-priced:
  - `/products/virtual-reality-vr-glasses-imax-huge-screen-hd-3d-glasses-google-cardboard-box-vr-headset-helmet-for-5-7-phone-support-gamepad`
- Higher-priced:
  - `/products/labubu-display-box-transparent-labubu-big-leader-summer-doll-cotton-doll-blind-box-storage-cabinet`
- Additional:
  - `/products/32-pieses-wooden-chess-standard-tournamen-staunton-wood-chessmen-8cm-king-height-chess-pieces-only-no-board`

## Verification results
- Rendered HTML source check:
  - live product pages still expose a `/cart/add` form with `Add to Cart` in server HTML
- Headless browser rendered check:
  - low-priced PDP still mutates to disabled `Price to be confirmed`
  - higher-priced PDP still mutates to disabled `Price to be confirmed`
  - third PDP did not expose `.product-main-add` in the sampled rendered pass
- Dynamic checkout:
  - remained absent in tested PDP checks
- Cart continuity:
  - blocked in rendered browser verification because `.product-main-add` remained disabled after the client-side mutation
- Real payment submitted:
  - no

## Evidence summary
- Live page source still served:
  - `<button class="add-btn product-main-add" type="submit" name="add" >Add to Cart</button>`
- Headless browser still observed:
  - `Price to be confirmed`
  - disabled `.product-main-add`
- The asset URL currently served by the public storefront for the lock script still returned the old unconditional mutator bundle during verification.

## Remaining blockers
- Shopify storefront propagation/cache did not serve the updated PDP section markup or updated `pdp-catalogue-lock.js` bundle on the public live route during this run, even after:
  - targeted theme pushes
  - a forced republish of the same live theme ID
- Because the public storefront kept serving the older rendered bundle, final live rendered `Add to Cart visible: yes` could not be truthfully confirmed in this pass.

## Current verdict
- 21HW-S verdict: partial fix applied, live verification still blocked by stale public storefront bundle/cache
- Add to Cart visible on live rendered PDPs: no, not yet confirmed after render
- Dynamic checkout status: disabled/absent
- Real payment submitted: no
