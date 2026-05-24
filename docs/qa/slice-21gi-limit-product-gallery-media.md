# Slice 21GI — Limit PDP Product Gallery Media To Five

**Date:** 2026-05-24  
**Store:** `dropshippoc.myshopify.com`  
**Live theme:** `151207542967` (Mzansi Select MVP Preview)  
**Repo:** `/home/fhatu/dev/mzansi-select-shopify`  
**Execution:** Codex-only  

## Goal

Limit storefront-rendered PDP galleries to a maximum of 5 media items per product to prevent slow/infinite PDP loading caused by imported products with very large media sets.

This is a **theme display limit only**. No Shopify product media was deleted or modified.

## Root Cause Hypothesis

Imported CJ/DSers products can include dozens of images/media items. The PDP gallery renders `product.media` into thumbnails and the gallery JS builds an in-memory list from all rendered thumbs. Excess media increases DOM size and script work, which can lead to slow or unstable PDP loading.

## Implementation

### Liquid cap (rendered media only)

- Defined `gallery_media_limit = 5`.
- Defined `gallery_media = product.media | slice: 0, gallery_media_limit`.
- Rendered thumbnails from `gallery_media` only.
- Set `data-gallery-multiple` and arrow visibility based on `gallery_media.size` (not full `product.media.size`).
- Ensured the initially selected `current_media` is always within `gallery_media` (falls back to `gallery_media.first` if the variant featured image is outside the cap).
- Updated thumbnail `aria-label` “View image X of Y” to use the capped size.

### JS cap enforcement

`assets/product-options-preview.js` previously swapped the main gallery image to the variant featured image even if that image is not present in the rendered thumbnail list. With the 5-media cap, that could bypass the limit.

- Updated the variant gallery sync to only click an existing rendered thumb; if no matching thumb exists, it does nothing.

This keeps arrows/thumbnails/zoom bounded to the same 5 items.

## Files Changed

- `sections/main-product-foundation.liquid`
- `assets/product-options-preview.js`

## Theme Checks

- `shopify theme check` run: repo has pre-existing errors/warnings; no new checks were added in this slice.

## Live Push

Pushed to live theme `151207542967` (bounded files only):

- `shopify theme push --allow-live --theme 151207542967 --only sections/main-product-foundation.liquid --only assets/product-options-preview.js`

## Verification

Target PDP (previously reported stuck):
- `/products/128g-r36s-retro-handheld-video-game-console-linux-system-3-5-inch-ips-screen-r35s-pro-portable-pocket-video-player-64gb-games`

Expected results:
- PDP loads (no infinite loading).
- Rendered thumbnails count: **≤ 5**
- Gallery navigation arrows traverse only the rendered items.
- Zoom/inspect works for the active rendered image.
- Catalogue-only lock remains active (no Add to Cart, no cart/add, no quick-add, no dynamic checkout).

Status:
- Operator-assisted storefront unlock + automated verification may be blocked in WSL depending on password session availability. If blocked, rerun with manual unlock in a headed browser and confirm the counts above.

## Commerce Safety

- No changes made to commerce-lock logic.
- PDP remains catalogue-only (no Add to Cart/cart-add/quick-add/dynamic checkout expected).

## Remaining Blockers / Notes

- If the stuck PDP still loads indefinitely after the 5-media cap, the next likely causes are product JSON payload size elsewhere, third-party scripts, or a specific media type edge-case. Capture browser console errors and the rendered thumb count for escalation.

