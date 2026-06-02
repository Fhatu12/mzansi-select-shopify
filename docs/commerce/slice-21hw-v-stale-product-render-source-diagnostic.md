# Slice 21HW-V - Stale product render source diagnostic

Date: 2026-06-02

## Objective
- Identify why some public PDP routes still render stale commerce-lock output even though the actual current live theme source is correct.

## Actual live theme
- Name: `Horizon`
- ID: `158396285153`

## Product template assignment result
- Admin GraphQL / Admin CLI template-suffix inspection was **not available** in this environment.
- `shopify api graphql` is not installed here, matching earlier repo notes.
- Read-only public sample of 5 published products was collected from `products.json`, but `templateSuffix` is not exposed by the public API.
- Practical inference from theme preview:
  - with a valid preview-theme cookie for live theme `158396285153`, sampled PDPs render the current theme source correctly
  - this strongly suggests the default current PDP template source itself is healthy for at least the sampled live products

## Live theme source comparison
- Pulled the actual live theme into a temporary folder only.
- Compared:
  - `layout/theme.liquid`
  - `templates/product.json`
  - `sections/main-product-foundation.liquid`
  - `assets/pdp-catalogue-lock.js`
  - `assets/product-options-preview.js`
  - `assets/theme.css`
- Result:
  - live theme files match repo for the active PDP path
  - `assets/pdp-catalogue-lock.js` is absent from the pulled live theme
  - `templates/product.json` only differs by Shopify’s standard auto-generated header comment

## Public source marker results
- Homepage public source:
  - contains `MZANSI_LIVE_RENDER_MARKER_21HW_U_20260602T123953Z`
- Public PDP source with cache-busting:
  - mixed results across handles
  - some PDPs still include old `pdp-catalogue-lock.js`
  - some PDPs include `/cart/add` but not the new markers
  - some PDPs include current markers and `/cart/add`
- This proves the product-route issue is not a simple all-or-nothing theme deployment failure.

## Preview-cookie proof
- After first opening homepage with `?preview_theme_id=158396285153` and preserving the preview cookie:
  - VR glasses PDP rendered:
    - layout marker present
    - PDP purchase marker present
    - `/cart/add` present
    - `Add to Cart` visible
    - button enabled
    - dynamic checkout absent
  - Labubu PDP source also rendered markers and `/cart/add` through the current live theme path
- This proves the actual current live theme source renders correctly when the storefront resolves through the intended theme preview path.

## Public-route sample results
- `virtual-reality-vr-glasses-imax-huge-screen-hd-3d-glasses-google-cardboard-box-vr-headset-helmet-for-5-7-phone-support-gamepad`
  - public PDP source still references old `pdp-catalogue-lock.js`
  - public PDP source still contains `/cart/add`
  - no current markers in public source
- `labubu-display-box-transparent-labubu-big-leader-summer-doll-cotton-doll-blind-box-storage-cabinet`
  - public PDP source contains both current markers
  - `/cart/add` present
- `32-pieses-wooden-chess-standard-tournamen-staunton-wood-chessmen-8cm-king-height-chess-pieces-only-no-board`
  - public PDP source did not surface current markers
  - placeholder `Price to be confirmed` copy still present

## Root cause classification
- Primary classification: `C`
- Interpretation:
  - PDPs are being served from stale storefront/cache/render paths despite the correct live theme source being present
- Secondary note:
  - there may also be product-level route/template persistence contributing to the split behavior across handles, but this could not be directly proven without Admin GraphQL/template assignment visibility

## Files changed
- `docs/commerce/slice-21hw-v-stale-product-render-source-diagnostic.md`
- `docs/project-control.md`

## Files pushed
- No additional theme files were pushed in this slice
- The current live theme already contains the intended corrected PDP source from previous slices

## Exact push command
- None in this slice

## Add to Cart result
- Public live route: no, not consistently visible across sampled PDPs
- Current live theme preview path with preserved preview cookie: yes, visible and enabled on sampled live PDP

## Stale lock reference present
- Public live route: yes, still present on at least one sampled PDP
- Current live theme preview path: no

## Dynamic checkout status
- Disabled / absent in the successful preview-path PDP render check

## Real payment submitted
- No

## Remaining blockers
- The current live theme source is correct, but some public PDP routes are still resolving to stale route/render cache output.
- Without Admin GraphQL or equivalent read-only product template assignment visibility, this slice cannot conclusively prove which affected products carry alternate route/template persistence versus pure stale cache.
- The next likely safe path is Shopify Admin-side route/template rebind or Shopify support/CDN invalidation, not another theme-file code change.
