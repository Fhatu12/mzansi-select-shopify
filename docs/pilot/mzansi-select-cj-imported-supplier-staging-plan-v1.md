# Mzansi Select CJ Imported-Supplier Controlled Pilot Staging Plan v1

**Document type:** Imported-supplier controlled pilot implementation/staging plan (planning only)  
**Prepared:** 2026-05-14  
**Owner:** Senior Full-Stack Software Architect  
**Status:** Planning only  
**Current verdict:** PASS WITH NOTES for planning only  
**Customer access:** BLOCKED  
**CJ route posture:** Long-delivery imported-supplier controlled pilot route only  
**Fast/local fulfilment replacement:** No  
**Related tracker:** [docs/project-control.md](d:/dev/mzansi-select-shopify/docs/project-control.md)  
**Related accepted risk review:** `621a6f6361d76b3aba69554c67b096fe04cd8e10` (`docs: record cj imported pilot risk review`)  
**Exact field specification (Product Owner — Slice 21AE PASS WITH NOTES; staging + QA closure through Slice 21AG PASS WITH NOTES):** [mzansi-select-cj-3-sku-staging-field-spec-v1.md](mzansi-select-cj-3-sku-staging-field-spec-v1.md) — handles, titles, variants, types, **draft** staging prices, collections, tags, global description blocks, pricing posture, reserve/reject list, **Slice 21AF-D** staging **PASS**, and **Slice 21AG** draft-row **QA** **PASS WITH NOTES**. **No** new Shopify Admin execution is implied by this plan alone beyond already-recorded **21AF-D** staging; **next** **Slice 21AH** — **Security / Compliance** post-staging review (**docs-only** unless contradicted).

---

## 1. Document control

- This document is a bounded docs-only implementation/staging plan for the accepted CJ imported-supplier pilot subset.
- It does not approve or imply CJ app install, Shopify authorization, product import/sync, Shopify Admin edits, product staging, theme publish, checkout enablement, payment enablement, customer access, public launch, `Supplier verified`, final pricing, final delivery promises, or final product claims.
- The CJ route remains planning-only and long-delivery/imported in posture.
- The pilot remains controlled, manual, and non-public until a later Product Owner go/no-go slice explicitly approves execution.

## 2. Approved product scope

### Planning-only proceed (3)

| CJ reference | Working title | Route status |
| --- | --- | --- |
| `CJYD230000901AZ` | Beverage Bottle / Oil Bottle Handle Holder | Imported supplier-route pilot candidate |
| `CJYD211196101AZ` | USB Bag Sealer | Imported supplier-route pilot candidate |
| `CJYD245830501AZ` | Foldable Magnetic Phone Holder / Desktop Tablet Stand | Imported supplier-route pilot candidate |

### Reserve only

| CJ reference | Working title | Reason |
| --- | --- | --- |
| `CJYD213778501AZ` | Soap Grinder / Wall-Mounted Soap Box | Reserve only; margin/claim posture still weaker than the primary 3-SKU subset |

### Rejected/deferred

| CJ reference | Working title | Reason |
| --- | --- | --- |
| `CJYD197888501AZ` | Magnetic Cable Clip / Under-Desk Cable Organiser | Blocked by CJ human verification |
| `CJJJJTCF09109-White` | Kitchen Knife Plastic Storage Rack | Commercially weak shipping/landed-cost signal |

## 3. Product staging approach

- No CJ app install.
- No Shopify authorization.
- No product import/sync.
- Later staging, if approved, must be manual and controlled.
- Any future product rows must remain draft/unpublished/restricted until a separate Product Owner go/no-go approves a bounded execution slice.
- No public catalogue exposure.
- No `Supplier verified` wording.
- No final pricing, final delivery promise, or final product-claim posture.
- Any future staged rows must carry pilot-only imported-route disclosure copy before any customer-facing visibility is considered.
- Any future staged rows must be removable/restrictable without deleting evidence or silently discarding safety notes.

## 4. Safe product-page data fields

### Customer-facing fields allowed in a later bounded staging slice

- Working title only, using conservative factual naming.
- Short factual description of core holder/tool/stand function only.
- Controlled-pilot route status copy.
- Imported-supplier delivery disclosure copy.
- Refund/cancellation pre-fulfilment change wording.
- Visible support/contact path.
- Variant actually rechecked the same day, if a later staging slice approves one visible variant.
- Images only after image/content-use basis review is accepted.

### Internal planning/verification fields required before any later staging

- CJ reference.
- Same-day checked variant.
- Same-day supplier product cost.
- Same-day shipping fee to South Africa.
- Same-day estimated delivery time.
- Same-day stock signal.
- Warehouse/source-country signal.
- Image/content-use basis outcome.
- Claim-control notes.
- Manual fulfilment readiness note.

### Not approved as customer-facing fields

- Final delivery promise.
- Final landed margin.
- Final price.
- `Supplier verified`.
- Unsupported compatibility, safety, durability, heat, leak-proof, food-safe, airtight, freshness, or magnetic-strength claims.
- Any “fast delivery”, “local delivery”, “South Africa wide fast fulfilment”, or equivalent implication.

## 5. Product-by-product safe data plan

### `CJYD230000901AZ` — Beverage Bottle / Oil Bottle Handle Holder

- Working title: `Beverage Bottle / Oil Bottle Handle Holder`
- Route status: Imported supplier-route pilot candidate
- Description approach: factual holder/handle use only; avoid functional certainty language
- Avoid claims: leak-proof, food-safe, heat-safe, durability, universal-fit
- Required checks before staging: same-day stock, variant, supplier price, shipping fee, delivery estimate, image/content-use basis
- Delivery wording: use the exact imported supplier-route wording below
- Refund/cancellation wording: use the exact wording below

### `CJYD211196101AZ` — USB Bag Sealer

- Working title: `USB Bag Sealer`
- Route status: Imported supplier-route pilot candidate; high safety/heat/electrical caution
- Description approach: factual USB-powered bag sealing tool only; no safety or performance assurances
- Avoid claims: safe, child-safe, food-safe, airtight guarantee, freshness guarantee, durability, performance
- Required checks before staging: same-day stock, variant, supplier price, shipping fee, delivery estimate, specs/safety warnings, image/content-use basis
- Delivery wording: use the exact imported supplier-route wording below
- Refund/cancellation wording: use the exact wording below

### `CJYD245830501AZ` — Foldable Magnetic Phone Holder / Desktop Tablet Stand

- Working title: `Foldable Magnetic Phone Holder / Desktop Tablet Stand`
- Route status: Imported supplier-route pilot candidate
- Description approach: factual desktop holder/stand only
- Avoid claims: strong magnetic, works with all phones/tablets, secure hold, driving/car-use, universal compatibility
- Required checks before staging: same-day stock, variant, supplier price, shipping fee, delivery estimate, magnet/compatibility evidence, image/content-use basis
- Delivery wording: use the exact imported supplier-route wording below
- Refund/cancellation wording: use the exact wording below

## 6. Required copy blocks

### Imported supplier-route item

> “Imported supplier-route item. Delivery timing varies by supplier, warehouse, product attributes, and courier method. Final delivery estimate must be confirmed before fulfilment.”

### Controlled pilot wording

> “This item is part of a controlled pilot and may have extended imported-supplier delivery timing. Delivery estimate will be confirmed before fulfilment.”

### Refund/cancellation wording

> “If supplier stock, shipping cost, product availability, or delivery estimate changes before fulfilment, we will contact you before proceeding. You may cancel the pilot order where fulfilment cannot continue as agreed.”

## 7. Copy placement plan

### Product page placement

- Put the controlled-pilot wording near the primary product summary block.
- Put the imported supplier-route wording in the delivery/fulfilment disclosure area on the PDP.
- Put the refund/cancellation wording in a returns/support or order-review disclosure block before any future customer-facing purchase step.
- Keep support/contact visibility on the same page or one click away before any customer access go/no-go.

### Collection/card placement

- If a later staging slice allows non-public preview visibility, show only controlled-pilot/imported-route disclosure-safe labels.
- Do not show fast/local delivery cues.
- Do not show `Supplier verified`.
- Do not imply shipping certainty or universal compatibility from card copy.

### Cart/checkout-adjacent placement

- If a later approved slice permits any cart visibility, repeat the controlled-pilot/imported-route honesty at the cart/order-review step.
- Do not expose checkout/payment/customer access unless separately approved.

## 8. Manual CJ fulfilment SOP planning

- Same-day stock, variant, supplier price, shipping fee, and delivery estimate must be rechecked before any customer-facing access.
- No order may be placed with CJ until customer order review and Product Owner-approved fulfilment conditions are met.
- No manual card/payment detail storage.
- Customer update is required if supplier stock, shipping cost, product availability, or delivery estimate changes.
- Cancellation/refund path must be ready before any customer access.
- Evidence must remain sanitized; no customer/order/payment data may be stored in repo docs or artifacts.
- Support/contact path must be visible before any customer-facing go/no-go.
- Manual fulfilment SOP must identify who performs the same-day recheck, who approves any go/no-go, and where off-repo operational records live.

## 9. Pre-staging checklist

- Same-day stock check
- Same-day supplier price check
- Same-day shipping fee check
- Same-day delivery estimate check
- Variant confirmation
- Image/content-use basis review
- Conservative title/description approval
- Pilot price reviewed against landed cost and delivery risk
- Refund/cancellation wording approval
- Support path validation
- QA route/viewport plan
- Product Owner approval

## 10. QA/security gates before customer access

- Product pages remain non-public until explicitly approved.
- No unsupported claims.
- No `Supplier verified` wording.
- No final delivery promise.
- No fast/local delivery implication.
- No checkout/payment/customer access unless separately approved.
- No customer/order/payment data exposure.
- Mobile and desktop storefront validation required before any future customer access.
- Cart/checkout signal validation is allowed only after separate approval.
- Support, refund/cancellation, and order-review contact path must be visible before any customer access.

## 11. Rollback/removal plan if staged later

- Set product to draft/unpublished/restricted.
- Remove from pilot collection/tags if required.
- Remove unsafe copy or images.
- Record sanitized rollback note.
- Do not delete product rows without Product Owner approval.
- Do not move customer/order/payment data into the repo during rollback.
- Preserve safe planning/evidence documentation while removing unsafe storefront/admin exposure.

## 12. Open blockers before any later staging execution

- Same-day CJ stock rechecked
- Same-day variant rechecked
- Same-day supplier price rechecked
- Same-day shipping fee to South Africa rechecked
- Same-day delivery estimate rechecked
- Product images/content-use basis reviewed
- Pilot pricing reviewed against landed cost and delivery risk
- Refund/cancellation wording approved
- Manual CJ fulfilment SOP prepared
- Support path visible
- QA plan approved
- Customer access remains blocked until QA, payment, refund, support, and Product Owner go/no-go gates pass

## 13. LLD posture

- LLD unchanged.
- Reason: this is docs-only supplier-route staging planning and does not materially change storefront, Admin, import, checkout, payment, or customer-access behaviour contracts.

## 14. Execution note — manual staging gate check

- Execution attempt date: `2026-05-14`
- Result: `BLOCKED` before any Shopify Admin change.
- Reason: the planning document does not provide exact staged field values for all three approved SKUs.
- Exact missing execution decisions:
  - Exact handles are not defined for `CJYD230000901AZ`, `CJYD211196101AZ`, or `CJYD245830501AZ`.
  - Exact body/description copy is not defined; only description approach and claim controls are defined.
  - Exact price values are not approved for staging; the plan explicitly keeps final price blocked and only references later pilot-price review.
  - Exact tags, collections, metafields, and support-path field values are not defined.
  - Exact image/media approvals are not defined; the plan only allows media after image/content-use basis review.
  - Exact variant selection values are not defined; the plan requires same-day variant recheck before any later staging.
- Safety confirmation: no CJ app install, no Shopify authorization, no import/sync, no Shopify Admin edit, no product staging, no publication change, and no checkout/payment/customer-access change occurred in this blocked execution attempt.
