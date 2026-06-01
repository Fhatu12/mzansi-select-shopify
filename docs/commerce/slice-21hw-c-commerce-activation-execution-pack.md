# Slice 21HW-C-WIN - Commerce Activation Execution Pack

Date: 2026-06-01
Store: `https://mzansiselect.myshopify.com`
Live theme context: `Mzansi Select MVP Restored #162429075681`
Execution host: Windows-only

## Scope and safety posture
This slice records Product Owner approvals and prepares the final execution pack for controlled commerce activation.

Hard-rule compliance in this slice:
- No payment provider enabled.
- No payment provider connected.
- No shipping settings changed.
- No product/price/domain/app/theme/Admin mutations.

## 21HW-C verdict
**PASS READY WITH FINAL RATE GATE** - approvals are recorded and activation checklist is ready, but shipping rates remain pending final Product Owner rate confirmation before any Admin mutation.

## Live verification
- Storefront `/`: `HTTP 200` (verified 2026-06-01).
- Live theme identity: operational context remains `Mzansi Select MVP Restored #162429075681` (Admin identity not mutated in this slice).

## Recorded Product Owner approvals
1. PayFast approved as primary payment provider.
2. Peach Payments approved as backup payment provider.
3. South Africa-only launch approved.
4. Shipping rates to be drafted as proposed rates first.
5. Shipping + returns/refunds policy publishing approved.
6. Controlled checkout activation window approved.

## Proposed South Africa launch shipping rates
Status: **Pending final Product Owner rate approval before Admin mutation**.

- Metro delivery: **R99 flat rate**
- Regional delivery: **R149 flat rate**
- Free delivery: **orders over R1,500**
- Exclusions: **no international shipping at launch**
- Delivery wording (approved draft):
  - "Estimated delivery timelines depend on supplier processing and courier availability. We will confirm tracking details once your order has been processed."

## Policy publication pack (approved content)

### Shipping policy publish content
We currently ship within South Africa only. Metro delivery is offered at a flat rate of R99 and regional delivery at a flat rate of R149. Orders over R1,500 qualify for free delivery. Orders are processed after payment confirmation and stock confirmation. Estimated delivery timelines depend on supplier processing and courier availability. We will confirm tracking details once your order has been processed.

### Returns and refunds policy publish content
If your item arrives damaged, defective, or materially different from what you ordered, contact us within 7 days of delivery with your order number and supporting photos. Where approved, we will offer a replacement, store credit, or refund according to the issue type and stock availability. Items that show misuse, intentional damage, or normal wear may not qualify. Refunds are processed back to the original payment method once approved and may take additional banking days to reflect.

### Support/contact policy publish content
For order support, product questions, or delivery issues, contact our support team using the details on our Contact page. Please include your order number and a short description so we can help faster. Support responses are handled during business hours, and we aim to respond within 1 to 2 business days.

## Final Shopify Admin execution checklist (runbook)

### 1) Pre-flight controls (before any mutation)
1. Confirm controlled activation window owner and on-call support contact.
2. Confirm rollback owner and decision threshold (time/defect trigger).
3. Confirm exact shipping rates above are signed off one final time by Product Owner.
4. Confirm PayFast merchant onboarding status is complete enough for connection.
5. Confirm Peach backup account readiness notes are documented.

### 2) Publish policies in Shopify Admin
1. Publish shipping policy content exactly as approved above.
2. Publish returns/refunds policy content exactly as approved above.
3. Publish support/contact policy content if current live text differs from approved text.
4. Verify policy routes load from storefront after publication.

### 3) Configure South Africa-only shipping zones/rates
1. Ensure only South Africa is active for launch shipping.
2. Configure Metro flat rate: R99.
3. Configure Regional flat rate: R149.
4. Configure free delivery threshold: orders over R1,500.
5. Confirm no international shipping zones are active.
6. Validate checkout shipping totals for sample carts across threshold boundaries.

### 4) PayFast primary setup (when PO present)
1. In Shopify Admin payments, select PayFast integration path.
2. Complete merchant connection using PO-present credentials/session.
3. Confirm callback/webhook endpoints and payment status mapping.
4. Verify successful auth/capture flow and failed/declined handling.
5. Keep detailed evidence log of each completed setup checkpoint.

### 5) Peach Payments backup notes
1. Keep Peach unenabled during primary launch unless failover is required.
2. Pre-document required credentials, webhook URLs, and settlement account details.
3. Define explicit failover trigger for switching from PayFast to Peach.
4. If failover is triggered, execute in a controlled window and rerun core test matrix.

### 6) Controlled test-order plan
1. Place one low-value successful payment order.
2. Execute one deliberate failed/declined payment case.
3. Confirm order timeline, payment status, and support visibility.
4. Validate fulfilment hold/cancel capability before dispatch.

### 7) Refund/cancel test
1. Run one cancel-before-fulfilment flow.
2. Run one full refund flow.
3. Run one partial refund flow.
4. Confirm ledger/reconciliation and customer notification outcomes.

### 8) Customer email notification check
1. Order confirmation email received and readable.
2. Payment confirmation language is correct.
3. Dispatch/tracking wording matches approved policy language.
4. Support contact details are present and correct.

### 9) Rollback/disable plan
1. Disable active payment provider immediately if critical defect threshold is met.
2. Return store to catalogue-only posture.
3. Remove/hide checkout entry points if any custom UI exposes them.
4. Pause campaign traffic implying live checkout.
5. Issue support incident communication template.
6. Re-open activation only after root cause closure and PO sign-off.

## Unavoidable manual actions (cannot be automated in this slice)
1. PayFast account login and merchant onboarding screens.
2. Banking and compliance/KYC verification inputs.
3. MFA/CAPTCHA challenges during provider setup.
4. Payment-provider approval/consent screens.
5. Any provider-side support confirmation steps.

## Remaining blockers
1. Final Product Owner approval of exact shipping rates for Admin entry (R99/R149/free over R1,500).
2. Live, PO-present PayFast login/onboarding session completion.
3. Controlled activation window execution with successful test evidence.
4. Verified rollback rehearsal readiness during the activation window.

## Recommended next slice
**Slice 21HW-D-WIN - Controlled Shopify Admin activation execution (PO-present)**:
- publish approved policies,
- configure approved South Africa shipping rates,
- connect PayFast,
- run success/failure/cancel/refund tests,
- validate customer emails,
- and complete rollback rehearsal.

## Safety statement
No Shopify Admin data was mutated in this slice.
