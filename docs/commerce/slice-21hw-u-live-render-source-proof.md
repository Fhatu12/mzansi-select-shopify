# Slice 21HW-U - Live render source proof

Date: 2026-06-02

## Objective
- Prove whether the public storefront is rendering the actual current live theme source, and remove uncertainty around the stale PDP commerce blocker.

## Actual live theme
- Live theme name: `Horizon`
- Live theme ID: `158396285153`

## Live theme mismatch
- Yes
- `Mzansi Select MVP Restored` `#162429075681` is no longer live
- `Horizon` `#158396285153` is the actual current live theme

## Repo vs live theme comparison
- Pulled the actual current live theme into a temporary folder only
- Compared:
  - `layout/theme.liquid`
  - `templates/product.json`
  - `sections/main-product-foundation.liquid`
  - `assets/pdp-catalogue-lock.js`
  - `assets/product-options-preview.js`
  - `assets/theme.css`
- Result:
  - `layout/theme.liquid` in live theme matches repo and does **not** include `pdp-catalogue-lock.js`
  - `sections/main-product-foundation.liquid` in live theme matches repo and includes the new data flags
  - `assets/pdp-catalogue-lock.js` is **absent** from the actual live theme files pulled from `#158396285153`
  - only `templates/product.json` differed by the standard Shopify auto-generated header comment

## Markers pushed
- Layout marker:
  - `MZANSI_LIVE_RENDER_MARKER_21HW_U_20260602T123953Z`
- PDP purchase marker:
  - `MZANSI_PDP_PURCHASE_MARKER_21HW_U_20260602T123953Z`
- Marker pushed to live theme: yes

## Files changed
- `layout/theme.liquid`
- `sections/main-product-foundation.liquid`
- `docs/commerce/slice-21hw-u-live-render-source-proof.md`
- `docs/project-control.md`

## Files pushed
- `layout/theme.liquid`
- `sections/main-product-foundation.liquid`

## Exact push command
- `shopify theme push --store mzansiselect.myshopify.com --theme 158396285153 --allow-live --only layout/theme.liquid --only sections/main-product-foundation.liquid`

## Source proof result
- Homepage source fetch **does** contain:
  - `MZANSI_LIVE_RENDER_MARKER_21HW_U_20260602T123953Z`
- PDP source fetch does **not** contain:
  - `MZANSI_LIVE_RENDER_MARKER_21HW_U_20260602T123953Z`
  - `MZANSI_PDP_PURCHASE_MARKER_21HW_U_20260602T123953Z`
- PDP source fetch still contains:
  - old `pdp-catalogue-lock.js` script include
  - `/cart/add` form markup
- Rendered headless PDP still shows:
  - button text `Price to be confirmed`
  - disabled purchase button
  - no PDP purchase marker in DOM

## Add to Cart result
- Server HTML still includes a real `/cart/add` form
- Customer-rendered Add to Cart visible/working: no

## Stale PDP lock result
- Stale `pdp-catalogue-lock` still active on public PDP rendering: yes
- But it is **not** present in the actual current live theme source pulled from `#158396285153`

## Interpretation
- The public storefront homepage is rendering the current live theme source.
- The public storefront PDP route is not rendering the same current live theme source.
- Product pages are still being served from a stale render/cache/source path that predates the marker and predates removal of the `pdp-catalogue-lock.js` include.

## Manual incognito checklist for Product Owner
- Open a new incognito/private browser window.
- Visit `https://mzansiselect.myshopify.com/`.
- View page source and search for `MZANSI_LIVE_RENDER_MARKER_21HW_U_20260602T123953Z`.
- Visit a PDP such as:
  - `https://mzansiselect.myshopify.com/products/virtual-reality-vr-glasses-imax-huge-screen-hd-3d-glasses-google-cardboard-box-vr-headset-helmet-for-5-7-phone-support-gamepad`
- View page source and search for:
  - `MZANSI_LIVE_RENDER_MARKER_21HW_U_20260602T123953Z`
  - `MZANSI_PDP_PURCHASE_MARKER_21HW_U_20260602T123953Z`
- Confirm whether the PDP still shows:
  - disabled `Price to be confirmed`
  - hidden or absent visible `Add to Cart`
- Confirm whether `Price to be confirmed` still appears in the purchase area.

## Remaining blockers
- The actual live theme source is correct, but public PDP routes still serve an older render source/cache.
- Because the stale PDP source is outside the current live theme files, theme-file pushes alone are not enough to clear the blocker in this pass.
