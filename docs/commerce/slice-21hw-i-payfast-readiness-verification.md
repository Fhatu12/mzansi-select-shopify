# Slice 21HW-I-WIN - PayFast readiness verification only

Date: 2026-06-01

## Scope and guardrails
- Windows-only execution.
- Read-only verification only.
- No payment provider activation attempted.
- No Shopify settings mutations performed.
- No product, price, shipping, policy, domain, app, or theme changes performed.

## Local guidance check
- Local `AGENTS.md` and `docs/ai/*.md` were not present in `D:\dev\mzansi-select-shopify-winqa`.
- Continued on global baseline per adapter rule.

## Storefront verification
Verified live storefront pages on `https://mzansiselect.myshopify.com`:
- `/` -> HTTP 200
- `/collections/all` -> HTTP 200
- `/pages/contact` -> HTTP 200
- `/policies/shipping-policy` -> HTTP 200
- `/policies/refund-policy` -> HTTP 200
- `/policies/contact-information` -> HTTP 200

Verified one PDP (from public products feed handle):
- `/products/virtual-reality-vr-glasses-imax-huge-screen-hd-3d-glasses-google-cardboard-box-vr-headset-helmet-for-5-7-phone-support-gamepad` -> HTTP 200

## Payment activation status verification (read-only)
Status from this slice:
- PayFast enabled: **not enabled by this slice** (no activation attempt).
- Peach Payments enabled: **not enabled by this slice** (no activation attempt).
- Any payment provider activated by this slice: **no**.
- Checkout/payment collection activated by this slice: **no**.

Note:
- Definitive current provider status inside Admin (`Settings -> Payments`) requires authenticated Product Owner session.
- This slice did not perform Admin login or any provider connect action.

## Shopify Admin payment settings read-only inspection plan
Expected manual read-only checks by Product Owner:
1. Open `Settings -> Payments`.
2. Confirm whether `PayFast` appears in available third-party providers.
3. Confirm whether `Peach Payments` appears as available provider/alternative path.
4. Record required setup data prompts (for example merchant ID/key/passphrase/API credentials, account verification state).
5. Stop before any final action such as `Activate`, `Connect`, `Complete account setup`, consent, or onboarding submission.

Stop conditions:
- Product Owner login prompt, MFA, CAPTCHA.
- Provider login/consent screens.
- Any banking/KYC/onboarding step.

## PayFast readiness checklist (pre-activation)
- PayFast merchant account exists and is approved for live processing.
- Business/legal profile prepared:
  - Registered business name
  - Registration/tax details (if applicable)
  - Trading/contact details
  - Support email and phone
- Banking/KYC prepared and approved in PayFast:
  - Settlement bank account ownership proof
  - Identity/company verification documents
  - Compliance status marked approved
- Shopify connection prerequisites prepared:
  - Correct merchant ID and merchant key
  - Passphrase/security settings aligned with account
  - Return/cancel/notify URL confirmation
- Test transaction plan prepared:
  - Low-value successful payment test
  - Failed/cancelled payment test
  - Pending/timeout handling test
- Refund/cancel test plan prepared:
  - Admin refund flow
  - Customer cancellation flow and order state updates
- Customer communication checks prepared:
  - Order confirmation email
  - Payment success/failure messaging
  - Refund notification content
- Rollback plan prepared:
  - Immediate provider disable/revert steps
  - Incident contact owner and SLA
  - Temporary fallback checkout guidance

## Peach Payments backup checklist (do not activate in this slice)
- Backup provider account onboarding complete (legal entity, KYC, bank settlement).
- Credentials and webhook settings documented and securely stored.
- Operational trigger to use backup defined (for example PayFast outage, settlement hold, sustained failures).
- Provider-specific fee/risk review completed and accepted by Product Owner.
- Backup activation runbook written but not executed.

## Activation go/no-go criteria
Go only if all are true:
- Product Owner confirms business approval to activate payments.
- Admin `Settings -> Payments` reviewed and evidence captured.
- PayFast account is live-approved with verified KYC and bank payout readiness.
- Required credentials validated and securely available.
- End-to-end test plan approved (success, fail, cancel, refund).
- Customer notifications reviewed.
- Rollback procedure tested/documented.

No-go if any of the following remain:
- Missing/partial KYC or bank verification.
- Missing credentials or unknown callback URL configuration.
- No approved rollback or incident procedure.
- Product Owner unavailable for manual secure onboarding steps.

## Manual Product Owner actions required
- Authenticate to Shopify Admin and open `Settings -> Payments`.
- Perform provider account login/consent/onboarding flows if and when activation slice is approved.
- Confirm and approve final activation click.
- Capture post-activation evidence:
  - Active provider shown in Admin
  - Timestamped screenshots of provider status
  - Test order IDs and outcomes
  - Refund/cancel test evidence

## 21HW-I verdict
- **Verdict: READY-FOR-ACTIVATION-SLICE (conditional)**
- Current slice completed all read-only verification in scope.
- Payment activation remains pending by explicit guardrail and Product Owner-controlled manual steps.

## Recommended next slice
- `Slice 21HW-J - PayFast controlled activation + test evidence capture (Product Owner present)`
