# Slice 21AO — CJ imported-supplier controlled-pilot readiness gate review

**Document type:** Security / compliance readiness gate review  
**Prepared:** 2026-05-15  
**Owner:** Security / Compliance Engineer  
**Scope:** Offline documentation review only; no live Shopify, supplier, checkout, payment, customer-access, or app-install actions.

**Accepted upstream state:** **Slice 21AN** **PASS WITH NOTES** (commit **`cd491a5`**); **Slice 21AL** membership cleanup **PASS**; **Slice 21AM** tracker sync **PASS**.

## 1. Security / Compliance verdict

**PASS WITH NOTES**

The CJ imported-supplier controlled-pilot posture remains acceptable only as **draft / restricted / non-public / non-purchasable** inventory with **collection membership hygiene resolved** and **collection preview QA recorded**. No reviewed evidence supports **`Supplier verified`**, final commercial approvals, customer access, checkout/payment enablement, or public launch. A **future bounded publish-for-preview planning slice** is **security/compliance acceptable** as **planning only** — **not** as execution authority for publish, purchasability, or customer access.

## 2. Readiness recommendation

**Ready for publish-for-preview planning with conditions**

| Gate | Status |
| --- | --- |
| Current draft-only posture | **Safe** to retain |
| Publish-for-preview **planning** slice | **Acceptable** (docs/plan only) |
| Publish-for-preview **execution** | **Blocked** until separate Product Owner approval and all preconditions below |
| Customer access / checkout / public launch | **Not ready** |

## 3. Current risk posture

- **Controlled risk (accepted):** Three CJ rows exist as **DRAFT**, unpublished to Online Store, with conservative imported-route and controlled-pilot wording, **no media**, CJ reference in variant **SKU** only, and **`controlled-pilot`** membership limited to exactly **3** approved SKUs (**21AL** / **21AN** accepted chain).
- **Residual customer risk if exposure widens:** Long imported-supplier delivery (**20–60 days** planning signal from prior **21AB** / **21AC** posture), unverified product-specific claims, draft staging prices (**R249** / **R279** / **R699**) that are **not** final public pricing, and **USB Bag Sealer** heat/electrical/seal-strength claim sensitivity per field-spec blocked-claim lists.
- **Privacy / data:** No new customer/order/payment data flows in current posture; future preview widening must not introduce repository storage of PII, credentials, or supplier-account material.
- **Collection integrity:** **Resolved** — removed Gadgetgyz-era rows are out of **`controlled-pilot`**; validate future membership with **`products.edges`** plus **`inCollection`** — **not** **`productsCount.count`** alone (**21AN** note).
- **Storefront preview evidence:** Password-gated passive checks (**21AN**) are sufficient for current **DRAFT/unpublished** posture; DOM/card copy review remains optional until publish-for-preview execution is approved.

## 4. Whether current draft-only posture remains safe

**Yes.** Accepted **21AG**, **21AF-D**, **21AH**, **21AL**, and **21AN** documentation collectively show draft/restricted rows without public purchasability, without final commercial claims, and without unintended collection contamination. This posture must be preserved until explicit Product Owner approval for any widening step.

## 5. Whether a future publish-for-preview planning slice is security/compliance acceptable

**Yes — planning only.**

A bounded **publish-for-preview planning** slice may document exact scope (which sales channel, which products, password/restricted access model, non-purchasable controls, QA/security gates, rollback). It **must not** imply approval to publish, enable checkout, remove password protection, or approve commercial/supplier claims. **Execution** requires a **separate** approved implementation slice after planning acceptance and precondition checklist sign-off.

## 6. Required preconditions before any publish-for-preview action

All of the following must be satisfied **before** any future **execution** slice that publishes CJ rows for preview visibility:

1. **Product Owner** approves exact publish-for-preview scope (SKUs, channels, routes, theme, rollback).
2. Products remain **non-purchasable** unless a later **customer-access** pass explicitly approves otherwise.
3. Product **status**, **visibility**, and **collection route** are explicitly controlled and documented.
4. **Password gate** or other **restricted preview access** remains in place unless separately approved.
5. **Customer access** remains **BLOCKED**.
6. **Checkout/payment** remains **BLOCKED**.
7. **No** **`Supplier verified`** wording or implication.
8. **No** final pricing wording — staging prices remain **pilot** / **non-final**.
9. **No** final delivery promise, stock guarantee, warranty claim, or public-launch wording.
10. **No** final stock, warranty, media, or product-claim approval.
11. **CJ long-delivery imported-supplier** disclosure and controlled-pilot framing preserved on every affected PDP/card.
12. **Product media / source-use basis** reviewed and **Product Owner**-approved **before** any media exposure (images remain **blocked** per field spec until then).
13. **Product-specific blocked-claim lists** preserved — especially **USB Bag Sealer** (**CJYD211196101AZ**): no airtight/vacuum/freshness/heat-safe/burn-safe/industrial seal-strength claims unless separately evidenced.
14. **`controlled-pilot`** membership remains exactly the **3** approved CJ rows immediately before and after any publish-for-preview change — verify with **`products.edges`** + **`inCollection`**.
15. **QA** validates collection/PDP routes after any publish-for-preview implementation (authenticated preview where password available).
16. **Security / Compliance** reviews again **before** any **customer-access** widening.
17. **No** CJ app install, import/sync, or supplier authorization unless a separate approved slice explicitly covers permission/privacy review (**21Y** posture unchanged).
18. **No** live theme publish to production unless separately approved; prefer unpublished preview theme **`151207542967`** pattern from prior QA slices.

## 7. Required wording / claim restrictions

- Preserve exact imported-route, controlled-pilot, and refund/cancellation blocks from **`docs/pilot/mzansi-select-cj-3-sku-staging-field-spec-v1.md`**.
- **Do not use:** `Supplier verified`, best seller, sale/deal, launch-ready, fast/local/guaranteed delivery, final public price, in-stock guarantee, warranty approval, universal compatibility (per-SKU lists), or CJ references in customer-visible tags/titles.
- **USB Bag Sealer:** enforce **§4.2** blocked claims (heat/burn/seal/freshness/industrial) unless separate evidence and PO approval exist.
- Theme/collection surfaces must not imply checkout readiness, account activation, or public launch.

## 8. Customer data / privacy constraints

- **No** customer/order/payment data collection or processing in publish-for-preview scope without approved systems and POPIA-ready controls (newsletter/account flows remain deferred per **Slice 18A–18F** / **19B** posture).
- **No** credentials, tokens, cookies, Admin payloads, supplier-account exports, or private QA artifacts in tracked docs.
- Evidence folders remain **local** and **uncommitted**.

## 9. Remaining blockers

- **`Supplier verified`** — **BLOCKED**
- **Final pricing / delivery / stock / warranty / product claims** — **BLOCKED**
- **Media / image exposure** — **BLOCKED** pending PO content-use decision
- **Customer access** — **BLOCKED**
- **Checkout / payment** — **BLOCKED**
- **Public launch** — **BLOCKED**
- **CJ app install / import / sync** — **BLOCKED** unless separately approved after **21Y**-class review
- **Publish-for-preview execution** — **BLOCKED** until planning slice + PO approval + preconditions above
- **Commercial pilot go-live** — **BLOCKED** — CJ route remains **candidate** imported-supplier controlled pilot only (**21Z** / **21AB** / **21AC** posture)

## 10. Recommended next owner

**Product Owner** — accept **Slice 21AO** **PASS WITH NOTES**; decide whether to open a **bounded publish-for-preview planning** slice (**docs only**) or hold while commercial/media gates remain open.

**Senior Full-Stack Software Architect** — if Product Owner approves planning, draft exact publish-for-preview scope, visibility model, theme/route impact, QA/security gates, and rollback (**planning only**).

## 11. LLD status

**Unchanged.** This is a docs-only readiness gate review. It does not change app/install/import/storefront/checkout/payment/customer-access behaviour in the LLD.

## 12. Files inspected

- `docs/project-control.md`
- `docs/security/slice-21ah-cj-draft-security-posture-review.md`
- `docs/qa/slice-21an-controlled-pilot-collection-preview-validation.md`
- `docs/pilot/mzansi-select-controlled-live-pilot-v1.md`
- `docs/pilot/mzansi-select-cj-3-sku-staging-field-spec-v1.md`
- `docs/pilot/mzansi-select-cj-imported-supplier-staging-plan-v1.md`
- `docs/pilot/slice-21ak-controlled-pilot-collection-hygiene-plan.md`
- `docs/devops/slice-21al-controlled-pilot-collection-cleanup.md`
- `docs/catalogue/mzansi-select-25-product-readiness-v1.md`
- `docs/catalogue/local-supplier-sourcing-matrix-v1.md`
- `docs/lld/mzansi-select-shopify-mvp-theme-v1.md` (existence / unchanged posture check only)

## 13. Validation performed

- Confirmed repository **HEAD** **`cd491a5`** and clean working tree at review start.
- Reviewed accepted **21AL** / **21AM** / **21AN** tracker and QA narratives; cross-checked **21AH** draft posture and **21AG** / **21AF-D** staging constraints.
- Searched docs for **`controlled-pilot`**, CJ SKUs, `Supplier verified`, customer-access/checkout/public-launch language, collection-hygiene status, and publish-for-preview implications.
- Confirmed **21AN** evidence path is referenced locally only and not committed.
- Confirmed no contradiction requiring LLD behaviour change.

## 14. Confirmation no out-of-scope action occurred

Confirmed: **no** Shopify Admin change, live Shopify action, Admin mutation, product publish, purchasability enablement, media upload, checkout/payment enablement, customer-access enablement, **`Supplier verified`** approval, final-pricing/delivery/claim approval, public-launch approval, CJ app install, import/sync, or supplier authorization in this slice.

## 15. Knowledge capture

- **Reusable knowledge discovered:** After collection cleanup and preview QA, the gating question shifts from **membership hygiene** to **whether widening visibility is planning-safe** — planning may proceed while execution stays blocked if draft/non-purchasable/password posture and claim controls are explicit; **`productsCount.count`** must not override **`products.edges`** / **`inCollection`** for membership proofs.
- **Asset created/updated:** this note; `docs/project-control.md` tracker sync.
- **Suggested repository location:** `docs/security/` for readiness gate reviews after major QA milestones.
- **Sensitive material excluded:** credentials, tokens, cookies, Admin payloads, supplier-account data, customer/order/payment data, browser state, and local `artifacts/` content.
- **Follow-up needed:** Product Owner decision on **publish-for-preview planning** slice; separate PO media/content-use decision before any image exposure; Security/Compliance re-review before customer-access or checkout widening.
