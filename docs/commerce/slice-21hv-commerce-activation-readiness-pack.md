# Slice 21HV-WIN - Commerce Activation Readiness Pack

Date: 2026-06-01
Store: `https://mzansiselect.myshopify.com`
Execution host: Windows (read-only verification)
Live theme target: `Mzansi Select MVP Restored #162429075681` (theme identity carried from 21HU/21HD evidence; not publicly introspectable)

## 21HV verdict
Status: **PASS WITH BLOCKERS** (readiness pack prepared; do not enable checkout/payments yet).

## 1) Current live state verification
- Home route `/`: `HTTP 200`.
- Catalogue route `/collections/all`: `HTTP 200`.
- Product count via `/products.json?limit=250`: **48** visible products.
- Department routes (`HTTP 200`):
  - `/collections/home-living`
  - `/collections/kitchen-storage`
  - `/collections/office-desk`
  - `/collections/tech-accessories`
  - `/collections/retro-vault-consoles-classics`
  - `/collections/games-toys`

Note:
- `/collections/fashion` and `/collections/health-beauty` are `404` and are not in the current live department map.

## 2) Wishlist regression evidence (desktop + mobile)
Source: `docs/qa/slice-21hs-live-wishlist-mini-image-qa.md` (2026-05-31, Windows Playwright).

- Add 3 products: **pass**
- Header count updates: **pass**
- Drawer opens above header: **pass**
- Mini images visible: **pass**
- Refresh persistence: **pass**
- Remove item: **pass**
- No horizontal overflow (mobile): **pass**

## 3) Policy requirements draft pack

### Shipping / fulfilment policy (draft)
- We currently ship within South Africa only unless otherwise stated on a product page.
- Orders are processed after payment confirmation on business days.
- Estimated delivery windows are shown at checkout once shipping is enabled.
- Delivery timelines may vary by supplier location, courier performance, and destination.
- We will contact customers if a significant fulfilment delay is identified.

### Returns and refunds policy (draft)
- Customers may request a return for eligible items within a defined window after delivery.
- Returned items must be unused, in original condition, and include original packaging where applicable.
- Non-returnable categories and hygiene-sensitive goods will be clearly disclosed on product pages.
- Refunds are processed back to the original payment method once inspection is completed.
- If an item arrives damaged or incorrect, customers should contact support with order details and photos.

### Contact/support policy (draft)
- Support is available via email and phone during listed support hours.
- Customers should include order number, full name, and issue details for faster handling.
- We aim to acknowledge support requests within one business day.
- Escalations for delivery delays, damaged goods, or incorrect items are prioritised.

### Order tracking deferred wording (draft)
- Live self-service tracking is being phased in.
- During this phase, tracking updates are provided by support on request.
- Customers can request tracking status via support email/phone using their order number.

### Payment/checkout activation checklist notice (draft)
- Checkout will only be enabled after payment, shipping, policy, and test-order controls are approved.
- A rollback procedure will be prepared before activation.

## 4) South Africa customer trust checks
- Full company name: **visible**
- Registration number: **visible**
- Director name: **visible**
- Physical operating address: **visible**
- Support email: **visible**
- Support phone: **visible**

## 5) Checkout/payment activation checklist (for later execution)
1. Confirm payment provider decision and merchant onboarding status.
2. Configure and verify shipping zones/rates for all intended delivery regions.
3. Confirm VAT/tax treatment and on-site wording.
4. Finalise and publish shipping + returns/refunds + support policies in Admin.
5. Enable checkout/payment in controlled window and run test orders (success/decline/cancel/refund).
6. Validate order notification flow and support handoff.
7. Execute rollback/disable plan if errors occur.
8. Run post-activation QA routes: `/`, `/collections/all`, `/collections/tech-accessories`, sampled PDPs, `/cart`, `/checkout`, `/pages/contact`, and policy routes.

## 6) Blocker classification

### Must fix before checkout
1. Payment provider decision and compliance prerequisites.
2. Shipping zones/rates and delivery promise wording.
3. Final policy publication in Admin (shipping, returns/refunds, contact/support).
4. Controlled checkout test-order matrix with evidence.
5. Signed rollback/disable plan.

### Should fix before checkout
1. Fresh same-session wishlist manual rerun (desktop/mobile) to close ambiguity from 21HU.
2. Improve weak department merchandising balance.
3. Clean duplicate/high-friction supplier-style product titles.

### Can defer
1. Full self-service order tracking automation.
2. Custom domain cutover.
3. Non-critical visual polish.

## 7) Safety statement
No checkout/payment/theme/product/price/shipping/domain/app/admin mutations were performed.

## Recommended next slice
**Slice 21HW-WIN - Controlled checkout activation execution (gated)**
