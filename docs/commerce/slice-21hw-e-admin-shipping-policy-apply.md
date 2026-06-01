# Slice 21HW-E-WIN - PO-present Admin apply shipping and policies (no payment activation)

Date: 2026-06-01

## Scope
Apply approved Shopify Admin configuration for shipping and policies with Product Owner present, without activating payments or changing catalogue/theme/domain.

## Preconditions and constraints
- Run context: Windows-only operator flow.
- Live store: `https://mzansiselect.myshopify.com`.
- Required live theme: `Mzansi Select MVP Restored #162429075681`.
- Hard safety constraints honored:
  - PayFast not enabled by this slice.
  - Peach Payments not enabled by this slice.
  - No payment collection activation by this slice.
  - No app install.
  - No product/price/description changes.
  - No domain changes.
  - No theme push.

## Execution log

### 1) Live storefront verification
Status: completed.

HTTP checks (2026-06-01):
- `/` -> 200
- `/collections/all` -> 200
- `/pages/contact` -> 200
- Department collection routes (from live nav) -> 200:
  - `/collections/games-toys`
  - `/collections/home-living`
  - `/collections/kitchen-storage`
  - `/collections/office-desk`
  - `/collections/retro-vault-consoles-classics`
  - `/collections/tech-accessories`
- Sample PDP -> 200:
  - `/collections/all/products/17cm-labubu-mini-plush-toy-multiple-styles-clothing-set-labubu-outfit-accessories-trendy-play-clothing-labubu-clothes-gift`

Notes:
- Placeholder department routes `/collections/men`, `/collections/women`, `/collections/kids` return 404 and are not current live department routes.

### 2) Shopify Admin session and PO-present actions
Status: blocked pending Product Owner manual interactive action.

Manual-interactive gates requiring Product Owner:
- Shopify Admin login (credentials entry)
- MFA approval
- CAPTCHA (if challenged)
- Any payment-provider related screen

Because this run is non-interactive from terminal context, Admin mutations were not executed in this pass.

### 3) Shipping configuration (target state)
Status: not applied in this pass (blocked by Admin login gate).

Approved target to apply in Admin:
- South Africa-only zone/profile.
- Standard delivery flat rate: `R99`.
- Free delivery over threshold: `R1,500`.
- No international shipping active at launch.
- No Metro/Regional split.

### 4) Policy publication (target state)
Status: not applied in this pass (blocked by Admin login gate).

Approved policy publication target:
- Shipping policy.
- Returns/refunds policy.
- Support/contact policy where Shopify policy surface exists.

Conservative delivery wording to retain:
- "Delivery timelines depend on supplier processing and courier availability. Tracking details will be shared once your order has been processed."

### 5) Checkout/payment safety posture
Status: no activation performed by this slice.

Confirmed by execution constraints:
- No payment-provider enablement steps were taken.
- No checkout/payment collection activation action was performed.

Residual verification gap:
- Direct in-Admin confirmation that PayFast/Peach are disabled still requires PO-present Admin inspection.

## 21HW-E verdict
Verdict: **BLOCKED (PO manual action required)**.

## Manual actions performed
- None in Shopify Admin during this pass.

## Remaining blockers
- Product Owner must complete interactive Shopify Admin login/MFA/CAPTCHA session.
- Product Owner/runner must execute approved Shipping & Policies Admin mutations in-session.
- In-Admin payment-method status must be checked and recorded (without activation).
- Post-mutation storefront policy-link visibility verification must be rerun.

## Recommended next slice
- **21HW-F-WIN**: PO-present interactive completion run for:
  - Shipping apply (ZA-only, R99 flat, free > R1,500, international off)
  - Policies publish (shipping, returns/refunds, support/contact)
  - Payment status verification-only (confirm PayFast/Peach not enabled; no activation)
  - Post-change storefront evidence capture
