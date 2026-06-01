# Slice 21HW-L - Enable storefront purchase UI

Date: 2026-06-01
Store: `mzansiselect.myshopify.com`
Live theme: `Mzansi Select MVP Restored #162429075681`

## Objective
Enable customer-facing Add to Cart and cart-to-checkout path on live theme while keeping dynamic checkout disabled and stopping before payment authorization.

## Root cause
Add to Cart and checkout were blocked by explicit catalogue-lock code in the active theme:
- `sections/main-product-foundation.liquid` force-set `current_product_commerce_blocked = true` and `current_product_use_placeholder_price = true`, which rendered disabled purchase UI.
- `sections/site-header.liquid` cart controls were rendered as disabled `<span>` elements rather than links.
- `sections/main-cart-foundation.liquid` rendered a disabled checkout button shell instead of a submit-to-checkout action.

## Files changed
- `sections/main-product-foundation.liquid`
- `sections/site-header.liquid`
- `sections/main-cart-foundation.liquid`
- `docs/commerce/slice-21hw-l-enable-purchase-ui.md`
- `docs/project-control.md`

## Theme files pushed
- `sections/main-product-foundation.liquid`
- `sections/site-header.liquid`
- `sections/main-cart-foundation.liquid`

## Exact push command
`shopify theme push --store mzansiselect.myshopify.com --theme 162429075681 --allow-live --nodelete --only sections/main-product-foundation.liquid --only sections/main-cart-foundation.liquid --only sections/site-header.liquid`

## Purchase UI result
- PDP Add to Cart visible: **Yes** (for available variants)
- Product card buy/cart UI visible: **No change** (left as-is, quick-add remains existing behavior)
- Cart page reachable: **Yes** (header cart icons now link to `routes.cart_url`)
- Checkout button from cart visible: **Yes** (`name="checkout"` submit action in cart section)
- Dynamic checkout status: **Disabled/absent** (no dynamic checkout button introduced)
- Wishlist sanity check: **Preserved by code path** (wishlist button and header hooks unchanged)
- Gallery sanity check: **Preserved by code path** (no gallery logic/styles modified)

## Remaining verification needed (Windows interactive checkout)
- Confirm live visual rendering on desktop/mobile for:
  - `/`
  - `/collections/all`
  - `/pages/faq`
  - `/policies/shipping-policy`
  - `/policies/refund-policy`
  - one low-priced PDP and one higher-priced PDP
- Confirm add-to-cart interaction from PDP updates cart item count in UI.
- Confirm checkout route from cart displays shipping options and payment options.
- Stop before final payment/authorization.
