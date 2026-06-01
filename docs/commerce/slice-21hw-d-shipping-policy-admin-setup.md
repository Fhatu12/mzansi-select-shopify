# Slice 21HW-D-WIN - Approved Shipping + Policy Admin Setup (No Payment Activation)

Date: 2026-06-01
Store: `https://mzansiselect.myshopify.com`
Live theme target: `Mzansi Select MVP Restored #162429075681`
Execution host: Windows-only

## 21HW-D verdict
**PASS WITH MANUAL-ACTION BLOCKERS** - approved shipping/policy configuration is fully prepared and documented, but Shopify Admin mutation requires PO-present authenticated session. No payment activation was performed.

## Scope and hard-rule compliance
- No payment provider enabled.
- No checkout/payment collection enabled.
- No product/price/description changes.
- No app installs.
- No domain changes.
- No theme push.
- No commits outside approved docs files.

## Live state verification
Verified on 2026-06-01:
- `/`: `HTTP 200`
- `/collections/all`: `HTTP 200`
- Department routes: `HTTP 200`
  - `/collections/home-living`
  - `/collections/kitchen-storage`
  - `/collections/office-desk`
  - `/collections/tech-accessories`
  - `/collections/retro-vault-consoles-classics`
  - `/collections/games-toys`
- Sample PDP: `HTTP 200`

Theme identity note:
- Public storefront checks pass, but exact live theme assignment must be read in Shopify Admin during PO-present session.

## Approved shipping configuration to apply in Shopify Admin
South Africa-only launch configuration:
1. Keep shipping country scope to South Africa only.
2. Add `Standard South Africa delivery` at `R99` flat.
3. Add free shipping rule for `orders over R1,500`.
4. Ensure international shipping zones are disabled/inactive.
5. Ensure there is no Metro/Regional split at launch.

## Approved policy publication content

### Shipping policy
We currently ship within South Africa only. Standard delivery is a flat rate of R99, and orders over R1,500 qualify for free delivery. Orders are processed after payment confirmation and stock confirmation. Estimated delivery timelines depend on supplier processing and courier availability. Tracking details are shared once your order has been processed.

### Returns and refunds policy
If your item arrives damaged, defective, or materially different from what you ordered, contact us within 7 days of delivery with your order number and supporting photos. Where approved, we will offer a replacement, store credit, or refund according to the issue type and stock availability. Items that show misuse, intentional damage, or normal wear may not qualify. Refunds are processed back to the original payment method once approved and may take additional banking days to reflect.

### Support/contact policy (if policy field exists)
For order support, product questions, or delivery issues, contact our support team using the details on our Contact page. Please include your order number and a short description so we can help faster. Support responses are handled during business hours, and we aim to respond within 1 to 2 business days.

## Manual Shopify Admin actions required (PO-present)
Stop conditions: if login, MFA, CAPTCHA, or payment/provider screens appear, pause and continue only with PO present.

1. Open Shopify Admin -> `Settings` -> `Shipping and delivery`.
2. Open active shipping profile(s) used by online orders.
3. In South Africa zone, keep only one paid rate:
   - Name: `Standard South Africa delivery`
   - Price: `R99`
4. Add free shipping rate condition:
   - Name: `Free delivery over R1,500`
   - Condition: order price greater than `R1,500`
5. Confirm no Metro/Regional split rates remain.
6. Confirm no international zones/rates are active for launch.
7. Save.
8. Open Shopify Admin -> `Settings` -> `Policies`.
9. Publish/update:
   - Shipping policy (approved text above)
   - Refund policy (approved text above)
   - Contact/support policy (if field is present)
10. Save and verify storefront policy links/routes.

## Payment activation status
- PayFast: **not enabled** in this slice.
- Peach Payments: **not enabled** in this slice.
- Checkout/payment collection: **not activated** in this slice.

## Verification and regression status (post-doc execution)
- Storefront remains reachable.
- `/collections/all` and sampled PDP are reachable.
- No payment activation performed.
- No domain/theme/product/price mutations performed in this slice.
- Policy-route/publication verification remains pending until PO-present Admin publish step is completed.

## Remaining blockers
1. PO-present Shopify Admin session to apply shipping settings.
2. PO-present Shopify Admin session to publish policy texts.
3. Post-mutation verification evidence capture of policy links/pages.
4. Separate PO-present payment activation slice (out of scope for 21HW-D).

## Recommended next slice
**Slice 21HW-E-WIN - PO-present Admin apply + verification capture (still no payment activation)**
- apply approved shipping configuration,
- publish approved policy texts,
- capture screenshots/evidence,
- run post-mutation storefront checks,
- explicitly confirm payment providers remain disabled.

## Safety statement
No Shopify Admin mutation was executed from this environment in 21HW-D due to authenticated PO-present requirements.
