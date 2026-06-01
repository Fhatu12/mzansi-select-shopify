# Slice 21HW-N - Cart line persistence and checkout transition fix

Date: 2026-06-01
Theme: `Mzansi Select MVP Restored` `#162429075681` (live)
Store: `https://mzansiselect.myshopify.com`

## Root cause
- `sections/main-cart-foundation.liquid` was still a static preview shell with hardcoded line items and totals, so cart state did not reflect live Shopify `cart.items`.
- `assets/product-options-preview.js` did not sync selected variant back to the product form hidden `id` field, so option changes could submit an unintended variant.
- Checkout returning home was consistent with empty/invalid cart state.

## Files changed
- `sections/main-cart-foundation.liquid`
- `assets/product-options-preview.js`

## Files pushed
- `sections/main-cart-foundation.liquid`
- `assets/product-options-preview.js`

## Exact push command
```bash
shopify theme push --store mzansiselect.myshopify.com --theme 162429075681 --allow-live --nodelete --only sections/main-cart-foundation.liquid --only assets/product-options-preview.js
```

## Verification (no payment)
- Known available product used: `virtual-reality-vr-glasses-imax-huge-screen-hd-3d-glasses-google-cardboard-box-vr-headset-helmet-for-5-7-phone-support-gamepad`
- Variant tested: `48428425445601`
- Add-to-cart API result: HTTP `200`, quantity `1` added.
- Cart persistence result: `/cart.js` returned `item_count: 1` with matching line item.
- Cart page readiness: cart section now renders `cart.items` and `cart.total_price`.
- Checkout transition result: `/checkout` redirected to Shopify checkout URL (`/checkouts/...`) successfully.
- Dynamic checkout status: remains absent/disabled on PDP (unchanged by this slice).
- Payment stop result: no payment details entered, no payment authorisation attempted, no real payment submitted.

## Remaining verification needed
- Interactive browser pass on live storefront to visually confirm header cart-count refresh pattern on PDP add (immediate vs refresh), cart line rendering, and checkout step UX.
- Optional shipping-step observation in checkout only, without any payment authorization.
