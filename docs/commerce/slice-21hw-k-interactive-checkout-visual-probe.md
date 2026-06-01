# Slice 21HW-K - Interactive Checkout Visual Probe (Stop Before Authorization)

Date: 2026-06-01
Store: https://mzansiselect.myshopify.com
Execution host: Windows (Playwright automation)

## Scope
Visual checkout probe to confirm customer purchase path, shipping/payment visibility, and stop before any final payment authorization.

## Hard-rule compliance
- Real payment submitted: No
- Real card details entered: No
- Payflex authorization clicked: No
- Shopify Admin mutations: None
- Product/price/shipping/theme mutations: None

## Route verification
- `/` -> 200
- `/collections/all` -> 200
- `/policies/shipping-policy` -> 200
- `/policies/refund-policy` -> 200
- `/pages/faq` -> 200
- `/pages/contact` -> 200
- One PDP checked -> `/collections/all/products/17cm-labubu-mini-plush-toy-multiple-styles-clothing-set-labubu-outfit-accessories-trendy-play-clothing-labubu-clothes-gift`

## Customer purchase UI check
- Add to Cart visible on PDP: No
- Product card buy/cart UI visible on collection: No

Conclusion:
- Storefront remains catalogue-first from visible UI.
- Customer purchase UI enablement is still required for normal public buying flow.

## Checkout reachability
- Checkout reached: Yes
- Method used: backend cart add fallback (`/cart/add.js`) after confirming customer-facing Add to Cart UI was not visible.

## Shipping visual verification
- Standard delivery `R99`: Not observed in this run
- Free delivery over `R1,500`: Not observed in this run
- South Africa only: Not conclusively confirmed
- No international shipping: Not confirmed (international-related text appeared in checkout content)

Result:
- Shipping policy/rate display remains unverified in a conclusive checkout-shipping-step rendering for this probe.

## Payment visual verification
- Payflex visible: Yes
- PayPal visible: Yes
- PayFast visible: No
- Peach Payments visible: No

## Stop-before-payment confirmation
- Probe stopped before any final Pay/Complete/Authorize action.
- No payment or authorization attempt occurred.

## 21HW-K verdict
Partial pass.
- Payflex checkout visibility is confirmed.
- Customer purchase UI still appears not publicly enabled (no visible Add to Cart / buy UI).
- Shipping-method assertions are still pending conclusive interactive rendering.

## Remaining blockers
1. Enable visible customer Add to Cart / purchase UI in theme templates.
2. Re-run interactive checkout to conclusively validate shipping methods and thresholds:
   - Standard delivery R99
   - Free over R1,500
   - South Africa-only service area
   - No international shipping

## Recommended next slice
Slice 21HW-L - Theme purchase UI enablement + post-enable interactive checkout shipping/payment confirmation (stop before authorization).
