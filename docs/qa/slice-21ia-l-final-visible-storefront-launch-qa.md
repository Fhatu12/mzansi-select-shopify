## Slice 21IA-L - Final visible storefront launch-readiness QA

Date: 2026-06-04

### Scope
- Run read-only/customer-flow QA against the visible live storefront after Product Owner confirmed the latest footer/header cleanup in incognito.
- Live store: `https://mzansiselect.myshopify.com`
- Current live theme: `Horizon` `#158396285153`
- Windows QA runner only.

### Safety boundaries
- No Shopify Admin changes.
- No product, price, shipping, payment-provider, app, domain, or theme-file changes.
- No theme push.
- No real card, bank, provider authorization, or payment submission.
- No artifacts committed.
- Existing untracked `tools/catalogue/` left untouched.

### Route health

Checked routes:
- `/` - 200, no Liquid errors
- `/collections/all` - 200, no Liquid errors
- `/pages/contact` - 200, no Liquid errors
- `/pages/faq` - 200, no Liquid errors
- `/policies/shipping-policy` - 200, no Liquid errors
- `/policies/refund-policy` - 200, no Liquid errors
- `/policies/privacy-policy` - 200, no Liquid errors
- `/cart` - 200, no Liquid errors
- PDP `/products/mini-7-in-1-multifunctional-led-desk-lamp-with-wireless-charger` - 200, no Liquid errors

Result: PASS.

### Footer/header cleanup

Confirmed:
- standalone footer email in Help: not visible
- `Contact Us` link: visible and links to `/pages/contact#contact`
- `Track Order`: not visible
- `Careers`: not visible
- `Affiliates`: not visible
- footer/header `Account` section/control: not visible
- old phone references checked: not visible
- old personal email references checked: not visible

Remaining issue:
- preview wording is still visible on the live homepage:
  - `PREVIEW HIGHLIGHT`
  - `Preview Picks`
  - `Preview picks for the products you actually need - selected for South African homes.`
  - `Browse preview picks`

Result: FAIL due to remaining preview wording.

### Catalogue

- Public product count from `/collections/all`: 45 unique product links.
- Unavailable products visible on `/collections/all`: 0.
- Sampled PDPs checked: 6.
- Sampled PDP images: visible.
- Sampled PDP prices: visible.
- Sampled purchasable PDP Add to Cart: visible.
- Full product-link sweep note: first sweep encountered Shopify 429 rate limiting after repeated rapid PDP requests. Before rate limiting, sampled product links returned 200 and no broken sampled product links were found.

Sampled PDPs:
- `mini-7-in-1-multifunctional-led-desk-lamp-with-wireless-charger`
- `120w-car-air-pump-electric-car-tire-inflatable-pump-portable-rechargeable-air-compressor-digital-auto-tire-inflator-equipment`
- `15pcs-caviar-skin-care-set-face-serum-set-face-moisturizing-anti-wrinkle-whitening-beauty-health-korean-facial-skin-care-suit`
- `2-inch-wireless-two-way-intercom-baby-video-monitor`
- `27pcs-makeup-tools-kit-20pcs-foundation-contour-blush-brush-set-with-triangle-powder-puff-makeup-remover-puff-travel-bag`
- `2k-video-baby-monitor-with-5-5-full-hd-screen-3000ft-long-range-no-wifi-two-way-talk-camera-and-audio-portable-night-vision-ai-cry-detect-6000mah`

Result: PASS with rate-limit caveat on exhaustive link checking.

### Cart flow

Product used:
- `-Mini - 7 in 1 Multifunctional LED Desk Lamp with Wireless Charger`

Confirmed:
- Add to Cart routed to `/cart`.
- Cart line item visible.
- Quantity control visible.
- Subtotal visible: `R 454.45`.
- Estimated total visible: `R 454.45`.
- Checkout button visible.

Result: PASS.

### Checkout/payment visibility

Checkout opened successfully from cart.

Payment area text shown:
- `Pay with Apple | Google | Capitec | Card | BNPL`

Provider name visibility:
- Stitch visible: no
- Payflex visible: no
- PayPal visible: no
- PayFast visible: no
- Peach visible: no

Real payment submitted: no.
Provider authorization attempted: no.

Result: PASS for checkout opening and safe payment-visibility stop, with provider names not individually exposed by checkout copy.

### Mobile

Checked at mobile viewport:
- homepage
- `/collections/all`
- sampled PDP
- `/cart`

Confirmed:
- no horizontal overflow on checked mobile routes
- PDP Add to Cart visible
- cart product line visible after add
- cart checkout button visible
- no Liquid errors

Result: PASS.

### Regression checks

Confirmed:
- wishlist control present and drawer opens
- PDP gallery arrows present and next-arrow click attempted successfully
- FAQ, policy, and support/contact routes return 200
- no Liquid errors on checked routes

Result: PASS.

### Must-fix list

- Remove remaining live homepage preview wording before final launch approval:
  - `PREVIEW HIGHLIGHT`
  - `Preview Picks`
  - `Preview picks for the products you actually need - selected for South African homes.`
  - `Browse preview picks`

### Should-fix list

- Re-run a slower full product-link sweep after the preview wording fix to avoid Shopify 429 rate-limit noise and confirm all 45 PDP links end-to-end.
- Consider making checkout payment labels more explicit if launch stakeholders require named provider visibility rather than the generic bundled label shown by checkout.

### Launch recommendation

Verdict: NO-GO for final launch sign-off until the remaining preview wording is removed from the visible live homepage.

Commerce-critical flows are otherwise healthy in this pass: route health, catalogue sampling, Add to Cart, cart, checkout opening, mobile, wishlist, gallery arrows, support links, and Liquid-error checks passed.
