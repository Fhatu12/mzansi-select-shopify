# Slice 21HQ - Wishlist drawer stacking above header/banner

Date: 2026-05-31
Theme: Mzansi Select MVP Restored #162429075681
Store: mzansiselect.myshopify.com

## Root cause
- Wishlist drawer container used `z-index: 80` in `assets/theme.css`.
- Existing top layers were higher: header/nav/overlays (`z-index` ~200, 250, 400, 401, 500), so the wishlist drawer rendered behind them.

## Files changed
- assets/theme.css

## Exact fix
- Updated `.wishlist-drawer` z-index from `80` to `520`.
- No markup or JS changes required.
- Existing drawer accessibility, close/backdrop behaviour, and localStorage sync logic preserved.

## Files pushed
- assets/theme.css

## Routes tested
- Code-level layering verification for:
  - /
  - /collections/all
  - /search?q=retro&type=product
  - target PDP route
- Live browser click-through QA still required for visual confirmation on device.

## Results
- Desktop stacking result: wishlist drawer configured above banner/header/nav layers.
- Mobile stacking result: wishlist drawer configured above mobile header/nav drawer/bottom bar layers.
- Wishlist regression result: no changes to wishlist JS/localStorage logic; 21HP behavior preserved.
- Commerce safety result: no product/price/media/collection/cart/checkout/domain/app/Supplier verified/newsletter mutations.
