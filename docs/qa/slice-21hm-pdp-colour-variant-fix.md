# Slice 21HM - PDP Colour/Variant Selector Fix

Date: 2026-05-31

## Scope
Fix PDP colour/variant selection behavior so selected state and main image sync reliably with real Shopify variant/media data, while preserving 21HL gallery behavior and 5-media cap.

## Root cause
Variant-to-gallery sync in `assets/product-options-preview.js` relied on exact URL-string match between:
- variant `featuredSrc` (from variant featured media), and
- thumbnail `data-media-src`.

That string match is brittle with Shopify CDN URL formatting differences. As a result, valid variant featured media could fail to find a thumbnail, so colour/variant selection updated button states but not the main image.

## Files changed
- `assets/product-options-preview.js`
- `sections/main-product-foundation.liquid`
- `docs/qa/slice-21hm-pdp-colour-variant-fix.md`
- `docs/project-control.md`

## Exact fix
1. Added real variant media identifier in Liquid JSON payload:
- `featuredMediaId` from `variant.featured_media.id` in `sections/main-product-foundation.liquid`.

2. Updated variant gallery sync logic in `assets/product-options-preview.js`:
- first match thumbnail by `data-media-id == featuredMediaId` (primary robust path).
- fallback to normalized URL comparison (`featuredSrc` vs `data-media-src`) if media ID unavailable.
- keep existing soft-fail behavior when variant image is not in rendered capped gallery.
- no fake colour data, no fake swatches, no unsupported colour hex values added.

3. Preserved 21HL gallery behavior:
- arrow/thumbnail JS in `assets/product-gallery.js` unchanged in this slice.
- main image `src/srcset` sync from 21HL remains intact.

## Files pushed
- `assets/product-options-preview.js`
- `sections/main-product-foundation.liquid`

Push command:
`shopify theme push --store mzansiselect.myshopify.com --theme 162429075681 --allow-live --nodelete --only assets/product-options-preview.js --only sections/main-product-foundation.liquid`

## PDPs tested
- `/products/2026-new-retro-gaming-console-with-23-emulators-20-000-built-in-games-4k-hdmi-2-4g-with-dual-wireless-controllers`
- `/products/29x29cm-large-chessboard-developing-strategic-thinking-3-in-1-chess-chekers-backgammon-foldable-chess-board-for-kids-adults`
- `/products/km320-keyboard-and-mouse-set-waterproof-luminous-game-backlit-keyboard`

## Results
- Colour/variant selected state: wired and updated by option click logic (active/disabled states retained).
- Variant resolution: exact option-set match preserved (`findVariant`).
- Main image sync: variant featured image now resolves via media ID when available; fallback URL match retained.
- Missing/non-rendered variant media: fails soft with no gallery break (still bounded to rendered 5 media).
- Gallery arrows/thumbnails: preserved from 21HL (no regression introduced in this slice).
- `srcset` handling: preserved via 21HL gallery fix path.
- Media cap: preserved at max 5 (verified `thumb_count=5` on all 3 target PDPs).
- Mobile: no mobile CSS/layout change introduced; behavior remains consistent.
- Spinner/navigation regression: none introduced by this JS change path.

## Commerce safety
Confirmed no changes to products, prices, variants, or product media.
No add-to-cart, `/cart/add`, quick-add, dynamic checkout, checkout/payment, Supplier verified, newsletter capture, or domain/app changes were introduced.
No artifacts committed.
