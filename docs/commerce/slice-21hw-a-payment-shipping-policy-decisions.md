# Slice 21HW-A-WIN - Payment, Shipping, and Policy Decisions Pack

Date: 2026-06-01

## Scope and guardrails
This slice is documentation-only and read-only against the live store.

Confirmed hard-rule compliance:
- No checkout enablement.
- No payment enablement.
- No product or price changes.
- No shipping setting mutations.
- No Shopify policy publish.
- No app install.
- No domain change.
- No theme push.
- No Shopify Admin data mutation.

## 1) Live state verification (read-only)
Store: `https://mzansiselect.myshopify.com`
Expected live theme: `Mzansi Select MVP Restored #162429075681`

Verification results:
- Homepage `/`: `HTTP 200`.
- Catalogue `/collections/all`: `HTTP 200`.
- Department collection routes from live homepage navigation:
  - `/collections/home-living`: `HTTP 200`
  - `/collections/kitchen-storage`: `HTTP 200`
  - `/collections/office-desk`: `HTTP 200`
  - `/collections/tech-accessories`: `HTTP 200`
  - `/collections/retro-vault-consoles-classics`: `HTTP 200`
  - `/collections/games-toys`: `HTTP 200`
- Product catalogue remains visible on live storefront.

Theme note:
- Public storefront response is consistent with current live storefront context; exact Admin theme ID confirmation remains an internal Admin read and was not mutated in this slice.

## 2) Payment provider decision research/check (no enablement)
Status: **Pending Product Owner approval**.

Observed/likely South Africa-compatible Shopify payment options to evaluate:
- Shopify Payments (availability depends on Shopify regional rollout and account eligibility).
- PayFast (widely used South African gateway; typically via Shopify-compatible integration path).
- Peach Payments (South African processor with Shopify integration options).
- Yoco online payments (subject to current Shopify connector path and account eligibility).
- PayGate/PayWeb path (depending on current Shopify support/integration method).
- Manual payment methods (EFT/COD) as fallback, if approved for launch risk posture.

Decision statement:
- No gateway was connected or enabled.
- Provider selection is explicitly held for Product Owner sign-off after account, fee, settlement, and supportability review.

## 3) Shipping and fulfilment decision pack
Recommended launch model (Option A - first choice): South Africa-only launch.

### Recommended zone/rate structure (draft)
1. Zone: South Africa Metro
- Draft rate label: Standard Delivery
- Draft transit promise: 3-7 business days after dispatch
- Draft handling promise: 1-3 business days before dispatch

2. Zone: South Africa Regional / Outlying
- Draft rate label: Standard Delivery (Regional)
- Draft transit promise: 4-10 business days after dispatch
- Draft handling promise: 1-3 business days before dispatch

3. Optional high-risk zone: Remote surcharge bucket
- Use only if courier cost spread makes blended rates unworkable.

### Delivery promise wording (safe, non-overpromise)
- "Delivery windows are estimates, not guarantees."
- "Dispatch starts after payment confirmation and stock confirmation."
- "High-volume periods, weather, and courier constraints may extend delivery times."

### AutoDS supplier-fulfilment dependency note
- Actual dispatch reliability depends on supplier stock accuracy, processing speed, and line-item quality control.
- Any supplier-side cancellation/substitution risk must be reflected in customer communication templates.
- SLA claims to customers must stay conservative until supplier performance data stabilizes.

### Manual fulfilment risk checklist
- SKU mapping drift between storefront and supplier listing.
- Supplier out-of-stock after customer payment.
- Incorrect variant dispatch risk.
- Missing tracking references from supplier.
- Refund delay when supplier dispute resolution is slow.
- Address-format issues causing courier return-to-sender.

## 4) Policy drafts (customer-ready)

### Shipping policy (draft)
We currently deliver within South Africa. Orders are processed in 1 to 3 business days, then handed to our delivery partners. Standard delivery usually takes 3 to 10 business days depending on your area. Delivery timelines are estimates and may change during peak periods, severe weather, or courier disruption. You will receive confirmation once your order is dispatched.

### Returns and refunds policy (draft)
If your item arrives damaged, defective, or materially different from what you ordered, contact us within 7 days of delivery with your order number and supporting photos. Where approved, we will offer a replacement, store credit, or refund according to the issue type and stock availability. Items that show misuse, intentional damage, or normal wear may not qualify. Refunds are processed back to the original payment method once approved and may take additional banking days to reflect.

### Contact and support policy (draft)
For order support, product questions, or delivery issues, contact our support team using the details on our Contact page. Please include your order number and a short description so we can help faster. Support responses are handled during business hours, and we aim to respond within 1 to 2 business days.

### Order tracking deferred wording (draft)
Order-by-order tracking links are not yet fully automated in all cases. If your tracking link is not included in your dispatch message, contact support with your order number and we will provide the latest tracking update.

### Internal checkout/payment activation disclaimer (draft)
Internal use only: do not announce checkout availability, payment methods, or delivery SLA guarantees publicly until payment gateway connection, shipping rates, test orders, and refund flow validation are completed and signed off.

## 5) Checkout activation checklist

### A. Payment provider account requirements
- Verified legal entity and KYC completion.
- Bank settlement account verified.
- Chargeback/dispute contact process assigned.
- Fee model and payout cadence approved.

### B. Gateway connection checklist
- Enable selected provider in Shopify Admin.
- Validate callback/webhook status events.
- Confirm successful authorization and capture path.
- Confirm failed payment UX and retry messaging.

### C. Shipping rates and zones checklist
- Finalize South Africa zones and rate logic.
- Verify postcode coverage and edge-case provinces.
- Verify no impossible free-shipping triggers.
- Confirm checkout shipping total correctness.

### D. Test order checklist
- Run low-value real gateway test (or supported test mode).
- Place 1 successful card payment order.
- Validate order creation, payment status, and timeline.
- Validate cancellation flow before fulfilment.

### E. Refund flow test
- Run full and partial refund tests.
- Confirm customer confirmation email and ledger accuracy.
- Confirm payout/reconciliation impact is understood.

### F. Customer email notification check
- Order confirmation received.
- Payment confirmation language clear.
- Dispatch notification template accurate.
- Support contact details present and correct.

### G. Disable/rollback plan
- Immediate fallback: disable gateway and return to catalogue-only mode.
- Hide/disable checkout entry points if custom UI exposes them.
- Pause paid campaigns until commerce state is stable.
- Incident note template ready for customer support.

### H. Post-activation live QA
- 24-hour and 72-hour order sampling checks.
- Validate fulfilment handoff and tracking turnaround.
- Review failed payment rates and checkout drop-off.
- Confirm refund SLA adherence.

## 6) Risk register

### Must fix before checkout
- Final payment provider decision and account readiness sign-off.
- Shipping zones/rates configured and validated in checkout.
- Published customer policies approved (shipping, returns/refunds, contact).
- End-to-end successful order + refund flow test evidence.

### Should fix before checkout
- Automated tracking communication consistency.
- Manual fulfilment SOP and ownership matrix.
- Customer support macros for delays, stock-outs, and refunds.

### Can defer
- Expanded multi-zone international shipping model.
- Additional payment method breadth beyond launch gateway.
- Advanced delivery ETA automation.

## 7) Recommended next slice
Slice 21HW-B-WIN: execute controlled internal checkout activation dry-run in a reversible window (gateway connect, shipping config validation, one successful test order, one refund, immediate rollback rehearsal), then return to blocked/public-off state until Product Owner release decision.

## 21HW-A verdict
**PASS WITH BLOCKERS** - Decision pack complete; commerce activation remains blocked pending Product Owner approvals and must-fix completion.
