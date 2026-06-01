# Slice 21HW-O-WIN - Final interactive add-to-cart and checkout QA (stop before payment)

Date: 2026-06-01
Store: https://mzansiselect.myshopify.com
Execution mode: Windows Playwright interactive probe, stop-before-payment enforced.

## Scope
- Route and PDP coverage
- Desktop add-to-cart and cart verification
- Checkout transition and shipping/payment visibility verification
- Mobile sanity checks
- Regression checks (wishlist, gallery, support links, Liquid errors)

## Routes verified
- / -> PASS
- /collections/all -> PASS
- /pages/faq -> PASS
- /pages/contact -> PASS
- /policies/shipping-policy -> PASS
- /policies/refund-policy -> PASS

## PDPs used
- Low-priced PDP: `virtual-reality-vr-glasses...` (detected price R5)
- Higher-priced PDP: `23-pack-desk-drawer-organizers...` (detected price R3355.33)

## Desktop add-to-cart flow
- Add to Cart visible on low-priced PDP: YES
- Variant/colour selector available on sampled low PDP: NO (no selectable options detected)
- Add to Cart click executed: YES
- Cart count badge visible/updated: NOT OBSERVED (no visible badge value in this run)
- Cart line item rendered correctly on cart page: NO (line item container not detected)
- Quantity visible: NO
- Subtotal visible: NO
- Checkout button visible: YES
- Dynamic checkout buttons absent/disabled: YES (not visible)

## Checkout and shipping verification
- Checkout reached: NO (session did not advance to fillable checkout step in this run)
- Test contact fill attempted: BLOCKED (email field not reachable)
- Standard delivery R99 for basket under R1,500: NOT CONFIRMED
- Free delivery over R1,500: PARTIAL SIGNAL ONLY ("free" text present in rendered checkout content; no conclusive over-threshold cart proof in this run)
- International shipping options available: NO (none detected in rendered content)

## Payment method visibility (stop before authorization)
- Payflex visible: YES
- PayPal visible: YES
- PayFast visible: NO
- Peach visible: NO
- Real payment submitted: NO
- Card details entered: NO
- Payflex authorization attempted: NO

## Mobile sanity
- Add to Cart visible on sampled PDP: YES
- Cart opens: YES
- Checkout button visible in cart: NO (not detected in this run)
- Horizontal overflow on sampled PDP/cart: NO

## Regression checks
- Wishlist add/drawer still works on one product: NOT CONFIRMED (wishlist trigger not detected on sampled PDP)
- Gallery arrows update main image: PASS
- Support links point to shipping/refund/FAQ pages: PASS (links detected)
- Liquid errors visible: NO

## Blockers
- Checkout progression blocker: checkout did not consistently surface fillable contact/shipping step; email input not available to continue shipping-rate validation.
- Cart UI rendering inconsistency in sampled session: cart line item/qty/subtotal not detected after add-to-cart click.
- Wishlist regression could not be completed on sampled PDP due to missing detectable wishlist trigger.

## Artifacts
- `artifacts/qa/slice-21hw-o/2026-06-01T21-36-34-161Z/summary.json`
- screenshots captured in the same folder.

## Verdict
- **21HW-O result: PARTIAL PASS WITH BLOCKERS**
- Commerce safety constraints were respected and no payment authorization was performed.

## Recommended next slice
- 21HW-P-WIN: checkout session progression and cart UI continuity hardening, then rerun shipping-tier and mobile checkout CTA verification.
