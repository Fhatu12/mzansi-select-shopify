# Slice 21AH — CJ 3-SKU post-staging security/compliance review

**Document type:** Security / compliance review note  
**Prepared:** 2026-05-15  
**Owner:** Security / Compliance Engineer  
**Scope:** Offline documentation and accepted admin-state review only; no live Shopify action performed.

## 1. Security / Compliance verdict

**PASS WITH NOTES**

The three CJ imported-supplier rows remain acceptable only in their current **draft / restricted / non-public / non-purchasable** posture. The review found no evidence in the accepted documentation set that the rows are being represented as `Supplier verified`, final-priced, finally delivery-approved, stock-guaranteed, warranty-approved, publicly launched, or customer-access ready. The posture is safe enough to remain staged as drafts, but it does **not** unlock customer access, collection preview, checkout/payment, supplier verification, or public pilot activity.

## 2. Security/compliance findings summary

- Accepted Slice 21AF-D / 21AG records state that only the three approved CJ rows were created, all as **Draft** with **publication count 0**, **media count 0**, no duplicate handle/SKU conflicts, and CJ references stored only in the variant SKU field.
- Accepted QA states that unauthenticated checks found no public discovery, product exposure, add-to-cart pattern, or checkout navigation for the three rows.
- The approved field spec and accepted QA preserve conservative wording, explicit imported-route disclosure, controlled-pilot framing, and per-SKU blocked-claim lists.
- No reviewed document introduces customer/order/payment data, credentials, tokens, cookies, Shopify Admin payloads, supplier-account material, or private evidence into tracked docs.
- No reviewed document requires Shopify Admin access, app install, supplier sync, import, checkout, payment, or customer-access action to complete this review.

## 3. Trust, privacy, and customer-risk assessment

- **Trust:** Current draft wording is honest about imported-supplier routing and extended timing; it avoids launch-ready, best-seller, fast/local, guaranteed-delivery, final-public-price, and warranty language.
- **Privacy:** No customer/order/payment data flow is introduced by the docs-only posture. Existing pilot guidance still requires approved operational systems only for any future customer data and forbids repository storage of customer PII.
- **Customer risk:** Risk remains materially high if these products are exposed prematurely because delivery is long-range (**20–60 days** in the accepted prior review), product claims remain unverified, and commercial pricing is still only draft staging pricing. That risk is controlled only while access remains blocked and wording remains non-final.

## 4. Supplier-claim and delivery-claim posture

- No accepted evidence shows `Supplier verified` wording or implication for any of the three CJ rows.
- The exact staged copy remains appropriately non-final: imported-route wording states that final delivery estimate must be confirmed before fulfilment, and controlled-pilot wording states that delivery estimate will be confirmed before fulfilment.
- No final pricing, final delivery promise, final stock claim, warranty claim, or public launch claim is approved or implied.
- Product-specific claim posture remains constrained: bottle-holder fit/contact claims, USB bag-sealer safety/performance claims, and magnetic-holder compatibility/magnetism claims all remain blocked unless separately evidenced later.

## 5. Collection hygiene risk status

**OPEN BLOCKER.** The existing **`controlled-pilot`** collection also contains four older unrelated draft products: **`world-map-extended-mouse-pad`**, **`gizzu-usb-to-type-c-cable-2m`**, **`ugreen-4-in-1-usb-2-0-hub`**, and **`acrylic-tablet-phone-stand`**. This does not invalidate the current three-row draft posture, but it must be resolved before any public collection exposure, customer-access go/no-go, or **`controlled-pilot`** collection preview validation.

## 6. Remaining blockers

- Customer access remains **BLOCKED**.
- Public collection preview remains **BLOCKED** until collection hygiene is resolved.
- Checkout/payment/customer access remains **BLOCKED**.
- `Supplier verified`, final pricing, final delivery promises, final stock claims, warranty claims, final product claims, media approval, and public launch remain **BLOCKED**.
- CJ app install, Shopify authorization, supplier sync, import, and any further Admin widening remain **BLOCKED** unless separately approved.
- Before any next pilot step: resolve collection hygiene, keep long-delivery disclosure honest, retain claim controls, and require a separate go/no-go for any customer-facing enablement.

## 7. Files inspected

- `docs/project-control.md`
- `docs/catalogue/mzansi-select-25-product-readiness-v1.md`
- `docs/catalogue/local-supplier-sourcing-matrix-v1.md`
- `docs/pilot/mzansi-select-controlled-live-pilot-v1.md`
- `docs/pilot/mzansi-select-cj-imported-supplier-staging-plan-v1.md`
- `docs/pilot/mzansi-select-cj-3-sku-staging-field-spec-v1.md`
- `docs/migrations/mzansi-select-ubuntu-dev-migration-v1.md`
- `docs/lld/mzansi-select-shopify-mvp-theme-v1.md` (existence checked for documentation-status assessment only)

## 8. Validation performed

- Confirmed repository HEAD and clean starting state.
- Reviewed the accepted Slice 21AF-D / 21AG narrative, the exact field spec, prior Security / Compliance posture, pilot plan, catalogue posture, and migration/tooling notes.
- Searched docs for the three CJ SKUs, `Supplier verified`, final-pricing / delivery / public-launch language, draft posture, and collection-hygiene references.
- Confirmed the accepted documentation states: three CJ rows are draft/restricted, not publicly discoverable, not purchasable, and contain no media; CJ references are in variant SKU only; no prohibited supplier/delivery/pricing/launch wording was accepted.
- Confirmed this review was completed without live Shopify, supplier, checkout, payment, customer-access, or app-install actions.

## 9. Documentation status

- `docs/project-control.md`: **updated** to record Slice 21AH as completed, preserve the blocker posture, and hand the next step to collection-hygiene resolution before any customer-facing pilot decision.
- Security/compliance review note: **created** at `docs/security/slice-21ah-cj-draft-security-posture-review.md` because no existing `docs/security`, `docs/audits`, or `docs/reviews` convention existed.
- LLD: **unchanged** because this is a docs-only security posture review and does not change app/install/import/storefront/checkout/payment/customer-access behaviour.

## 10. Confirmation no out-of-scope action occurred

Confirmed: no Shopify Admin change, live Shopify action, app install, CJ/Shopify authorization, import, sync, product staging, checkout/payment enablement, customer-access enablement, `Supplier verified` promotion, final-pricing approval, delivery approval, product-claim approval, public-launch approval, or media approval occurred in this slice.

## 11. Knowledge capture

- **Reusable knowledge discovered:** a draft-only imported-supplier posture can remain acceptable after staging only when non-public status, explicit non-final wording, claim controls, and collection hygiene are reviewed together; collection membership can become a release-risk even when each individual row is safe.
- **Asset created/updated:** this Slice 21AH security/compliance review note; `docs/project-control.md` tracker sync.
- **Suggested repository location:** keep future equivalent reviews under `docs/security/`.
- **Sensitive material excluded:** credentials, tokens, cookies, Shopify Admin payloads, supplier-account data, customer/order/payment data, and local evidence artifacts.
- **Follow-up needed:** resolve **`controlled-pilot`** collection hygiene before any public collection exposure, customer-access go/no-go, or collection-preview validation; keep all customer-facing enablement blocked until a separate approved decision.

## 12. Recommended next owner

**Product Manager / Product Owner** — resolve controlled-pilot collection hygiene and decide the exact next bounded pilot step before any further customer-facing validation or access decision.
