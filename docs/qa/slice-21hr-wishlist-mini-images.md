# Slice 21HR - Wishlist mini product images in saved-items drawer

Date: 2026-05-31
Theme: Mzansi Select MVP Restored #162429075681
Store: mzansiselect.myshopify.com

## Root cause / missing feature
- Drawer item renderer displayed title/link only.
- Wishlist button markup did not provide product image URL, so saved records had no image source.

## Files changed
- snippets/wishlist-button.liquid
- assets/wishlist-local.js
- assets/theme.css

## Exact fix
- Added `data-product-image` to wishlist button from product featured media (`image_url` width 120).
- Reused existing optional `image` field in local wishlist structure (no key/schema break).
- Updated drawer rendering:
  - show thumbnail image when `item.image` exists
  - show clean initial fallback when image is missing
  - keep item title/link + remove button behavior unchanged
- Added compact thumbnail/title alignment styles for desktop/mobile drawer readability.

## Files pushed
- snippets/wishlist-button.liquid
- assets/wishlist-local.js
- assets/theme.css

## Routes tested
- /
- /collections/all
- /search?q=retro&type=product
- /products/2026-new-retro-gaming-console-with-23-emulators-20-000-built-in-games-4k-hdmi-2-4g-with-dual-wireless-controllers

## Results
- Mini image result: saved items now display mini product thumbnails where available.
- Persistence result: existing storage retained; items without image still render via fallback; add/remove/persist unchanged.
- Mobile result: drawer remains readable, thumbnail layout remains compact and non-overflowing.
- Commerce safety result: no cart/checkout/account/server dependency or catalogue mutation introduced.
