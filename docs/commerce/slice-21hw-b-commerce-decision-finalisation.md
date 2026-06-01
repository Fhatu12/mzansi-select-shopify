# Slice 21HW-B-WIN - Commerce Decision Finalisation (No Activation)

Date: 2026-06-01
Store: `https://mzansiselect.myshopify.com`
Live theme context: `Mzansi Select MVP Restored #162429075681`
Execution host: Windows-only

## Scope and hard-rule compliance
This slice finalises Product Owner decision options from 21HV and 21HW-A documentation only.

Confirmed in this slice:
- No checkout enablement.
- No payment enablement.
- No shipping setting changes.
- No Shopify policy publication.
- No product or price changes.
- No app installation.
- No domain change.
- No theme push.
- No Shopify Admin mutation.

## 21HW-B verdict
**PASS WITH BLOCKERS** - final decision matrix prepared; commerce activation remains blocked pending Product Owner approvals.

## Live store verification
- Homepage `/`: `HTTP 200` (verified 2026-06-01).

## Final Product Owner decision table

| Decision area | Final option | Status | Notes |
|---|---|---|---|
| Payment provider options | Shopify Payments (if eligible), PayFast, Peach Payments, Yoco (if connector path valid), PayGate/PayWeb, manual EFT/COD fallback | Pending Product Owner decision | No provider connected or enabled in this slice. |
| Recommended launch provider | **PayFast** as primary launch provider (subject to merchant onboarding completion) | Pending Product Owner decision | Conservative SA launch posture with one gateway. |
| Backup provider | **Peach Payments** as backup if primary onboarding/supportability blocks launch | Pending Product Owner decision | Keep backup unenabled until explicitly needed. |
| Shipping zones | South Africa-only at launch: Metro + Regional/Outlying; no international zones | Pending Product Owner decision | Safest initial blast-radius control. |
| Shipping rates | Standard Delivery (Metro): dispatch 1-3 business days + transit 3-7 business days; Standard Delivery (Regional): dispatch 1-3 + transit 4-10 | Pending Product Owner decision | Draft wording only, no Admin configuration in this slice. |
| Delivery wording | "Delivery windows are estimates, not guarantees" + dispatch after payment and stock confirmation + delay caveats | Approved | Recommended conservative wording from 21HW-A final pack. |
| Returns/refunds wording | 7-day damaged/incorrect reporting window, evidence required, replacement/store credit/refund by case, refunds to original method after approval | Pending Product Owner decision | Draft is ready, publication still blocked. |
| Support/contact wording | Contact details on Contact page; include order number and issue summary; response target 1-2 business days | Approved | Wording is customer-safe and conservative. |
| Test-order checklist | Success payment, failed/declined flow, cancel-before-fulfilment, full refund, partial refund, email checks, reconciliation checks | Blocked | Blocked until provider selection + policy confirmation + controlled activation window approval. |
| Rollback/disable checklist | Disable gateway, return to catalogue-only posture, disable checkout entry points if present, pause campaigns, use incident support template | Approved | Rollback plan content is complete; execution intentionally not performed. |

## Safest first launch configuration (recommended)
1. South Africa-only shipping at launch (no international shipping).
2. Conservative delivery wording only (estimate-based, no guarantees).
3. One primary payment provider only (PayFast recommended) with Peach Payments as dormant backup.
4. Keep checkout and payments disabled until provider onboarding and policy approval are both complete.

## Policy decision status
- Shipping policy text: **Pending Product Owner decision** (ready draft, not published).
- Returns/refunds policy text: **Pending Product Owner decision** (ready draft, not published).
- Support/contact policy text: **Approved** for publication once PO gives activation approval.
- Tracking deferred wording: **Approved** for interim operational use.

## Test-order plan (post-approval only)
Run only after PO approves provider and policy set:
1. Enable selected provider in a controlled window.
2. Place one low-value successful order.
3. Run one deliberate failed/declined payment case.
4. Run one cancel-before-fulfilment case.
5. Execute one full refund and one partial refund.
6. Validate customer emails, order timeline, payment status, and support handoff.
7. Capture evidence and re-disable commerce immediately if critical defects appear.

## Rollback plan (post-activation safety)
1. Disable active payment provider immediately.
2. Return storefront to catalogue-only posture.
3. Remove/hide any checkout entry points if custom UI exposes them.
4. Pause traffic/campaigns that imply active checkout.
5. Use support incident macro for affected customers.
6. Re-open activation only after root-cause closure and PO sign-off.

## Remaining Product Owner decisions
1. Final payment provider approval (primary and backup).
2. Final South Africa zone/rate labels and thresholds.
3. Final publication approval for shipping + returns/refunds policies.
4. Go/no-go approval for controlled checkout activation window.

## Safety statement
No checkout/payment/shipping/policy/product/price/theme/domain/app/Admin mutations were performed in this slice.
