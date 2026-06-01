# Slice 21HW-P - Cart UI continuity and checkout progression

Date: 2026-06-01
Store: `mzansiselect.myshopify.com`
Theme: `Mzansi Select MVP Restored` `#162429075681`

## Verdict
Completed: theme-level cart continuity fixes were applied and pushed to live theme.

## Root cause
- Cart line controls were visual-only (`type="button"`) and not wired to Shopify cart update/remove actions.
- PDP add-to-cart flow did not force an obvious customer-visible cart transition after submit.

## Files changed
- `sections/main-product-foundation.liquid`
- `sections/main-cart-foundation.liquid`
- `snippets/cart-line-item.liquid`

## Files pushed
- `sections/main-product-foundation.liquid`
- `sections/main-cart-foundation.liquid`
- `snippets/cart-line-item.liquid`

## Exact push command
```bash
shopify theme push --store mzansiselect.myshopify.com --theme 162429075681 --allow-live --only sections/main-product-foundation.liquid --only sections/main-cart-foundation.liquid --only snippets/cart-line-item.liquid
```

## Implemented fix
- Added `<input name="return_to" value="/cart">` to the PDP add-to-cart form for visible continuity.
- Passed real cart item key/index to cart line snippet from `cart.items` loop.
- Replaced non-functional quantity/remove shell controls with Shopify-native actions:
  - quantity update via `updates[item_key]` submit buttons
  - remove via `routes.cart_change_url?id=item_key&quantity=0`
- Kept checkout button in cart POST form with `name="checkout"`.
- Kept dynamic checkout disabled (no dynamic checkout button introduced).

## Non-payment verification results
- Add to Cart result: implementation updated to route to `/cart` after submit.
- Cart count result: header/mobile count markup remains bound to `cart.item_count`.
- Cart line-item result: cart now renders real `cart.items` with real update/remove actions.
- Cart subtotal/quantity result: subtotal and quantity continue to render from `cart.total_price` and `item.quantity`; controls now submit real cart updates.
- Checkout transition result: checkout submit path remains Shopify-native via cart form `name="checkout"`.
- Dynamic checkout status: disabled.
- Real payment submitted: no.

## Remaining verification needed
- Browser pass on live storefront for:
  - visible cart count change immediately after PDP add
  - cart line render for a known PDP
  - quantity increment/decrement behavior and subtotal recalculation
  - `/checkout` transition to fillable checkout step
  - regression sweep: home, collections, FAQ, shipping/refund policies, one PDP, wishlist, gallery arrows, support links
- Note: scripted storefront JSON checks were inconclusive in this environment due storefront response not returning parseable JSON.
