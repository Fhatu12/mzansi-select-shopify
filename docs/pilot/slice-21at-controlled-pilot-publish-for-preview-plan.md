# Slice 21AT — Controlled-pilot publish-for-preview planning

**Document type:** Senior Full-Stack Software Architect planning note  
**Prepared:** 2026-05-15  
**Owner:** Senior Full-Stack Software Architect  
**Scope:** Documentation only; no theme edits, Shopify Admin changes, publish action, product import/sync, checkout/payment/customer-access enablement, or live-theme action executed in this slice.

## 1. Planning verdict

**PASS WITH NOTES**

The next controlled-pilot step can now be planned at **product level** around the three accepted CJ PDP preview surfaces, while keeping the **`controlled-pilot`** collection route explicitly **informational only** for as long as Shopify continues to serve it through **404** handling. This slice records the narrowest safe planning posture; it does **not** approve execution.

## 2. Product objective for publish-for-preview planning

Prepare a bounded plan for any later Product Owner decision on whether the three accepted CJ controlled-pilot products should remain **preview-only** as they are, or move into a stricter **publish-for-preview** implementation-planning lane for restricted stakeholder review.

The planning target is the exact three accepted CJ products only:

- `beverage-bottle-oil-bottle-handle-holder`
- `usb-bag-sealer`
- `foldable-magnetic-phone-holder-desktop-tablet-stand`

## 3. Target pilot audience and controlled access boundary

The target audience is a **small internal or invited review group** operating inside the existing **password-gated / restricted preview** boundary. This is not a public browse state, not a customer-ready catalogue state, and not a commerce-enabled pilot.

The access boundary remains:

- unpublished preview theme and/or restricted preview route where applicable
- password-gated storefront access
- no public launch or widened discovery route
- no assumption that the collection route is a success surface

## 4. What “publish-for-preview” means — and what it does not mean

### Means

- A possible future **visibility-only** step for the exact three CJ products
- Restricted stakeholder review only
- Non-purchasable preview surfaces
- Conservative product messaging and claim posture
- Immediate QA and rollback planning after any future implementation

### Does not mean

- public launch
- customer access approval
- checkout/payment enablement
- real customer orders
- final price approval
- final delivery promise
- `Supplier verified`
- media approval
- app install/import/sync approval
- Shopify Admin execution authority in this slice

## 5. Current accepted evidence from Slice 21AR / 21AS

The accepted planning baseline is now stronger than the earlier collection-route assumption:

- **Slice 21AR:** **PASS WITH NOTES** accepted under the Product Owner route contract
- **Slice 21AS:** **PASS WITH NOTES** accepted
- Harness implementation commit: `271cee4bcba0a44631ecb24add40c2264f1b9c23`
- Latest tracker acceptance commit before this slice: `cce59439eb234f156f51c1d6129bfa104519fbdf`
- QA evidence: `artifacts/qa/slice-21ar-fixed-route-preview-check/2026-05-15-20-3/`

Accepted evidence outcome:

- Manual storefront unlock succeeded
- All three valid CJ PDP preview routes passed on **desktop 1366x768** and **mobile 390x844**
- PDP checks confirmed:
  - expected CJ PDP visible
  - Gadgetgyz absent
  - Add to Cart / Buy Now absent
  - checkout/customer absent
  - `media=no`
  - `onlyGenericPlaceholderVisuals=true`
- `/collections/controlled-pilot` remains honestly recorded as **informational/non-blocking 404** with visible failed checks in the harness output
- That collection route must **not** be treated as the success contract for the current preview posture

## 6. Required preconditions before any future product, theme, or Admin action

Before any later implementation slice is opened, all of the following must be true:

1. **Product Owner** explicitly approves the next slice scope.
2. The scope remains bounded to the exact three accepted CJ products.
3. The products remain **non-purchasable**.
4. Password-gated / restricted preview access remains in force unless separately approved.
5. The accepted imported-supplier and controlled-pilot wording remains intact.
6. No final price, delivery, stock, warranty, or product-claim wording is introduced.
7. No media exposure occurs unless a separate media/content-use decision approves it first.
8. The exact rollback model is documented before any write is attempted.
9. Post-change QA is required on desktop and mobile.
10. Security / Compliance re-review remains mandatory before any customer-access widening.

## 7. What stays blocked

The following remain blocked after this planning pass:

- public launch
- checkout/payment
- real customer orders
- app install/import/sync
- Shopify Admin mutation unless separately approved
- live theme publish
- customer access widening
- `Supplier verified`
- final pricing approval
- final delivery promises
- final stock/warranty/product-claim approval

## 8. Pilot messaging guardrails

All future preview-facing work must preserve the following posture:

- **preview-only** framing where applicable
- **price to be confirmed** where applicable
- no final delivery claims
- no supplier-verified claims unless evidence exists
- no launch-ready or public-catalogue implication
- no fast/local/guaranteed-delivery implication
- no unsupported compatibility, safety, seal-strength, food-safe, or durability claims

Required safe wording remains aligned with the accepted CJ pilot posture, including imported-supplier route caution and controlled-pilot review framing.

## 9. Decision options for the next Product Owner gate

### Option A — remain preview-only

Keep the current accepted posture unchanged:

- three CJ PDP routes continue as the valid review surfaces
- `controlled-pilot` collection remains informational/non-blocking
- no new visibility or Admin work is opened

**Best fit when:** the present review posture is sufficient and commercial evidence is still too weak for the next step.

### Option B — approve a tightly bounded DevOps/Admin planning pass

Open a separate planning or readiness slice for a later restricted **publish-for-preview** implementation, with no execution authority yet.

That later slice should define:

- exact publication/visibility boundary
- exact product-state assumptions
- exact rollback and verification steps
- exact QA/security gates
- exact no-commerce and no-customer-access controls

**Best fit when:** the Product Owner wants implementation-ready detail without yet approving any live write.

### Option C — defer until supplier, pricing, and delivery evidence improves

Hold the pilot at the current preview posture until stronger evidence exists for:

- landed margin confidence
- product-level pricing confidence
- delivery-risk confidence
- media/source-use basis
- claim confidence for the three accepted products

**Best fit when:** the next safest move is to reduce commercial uncertainty before any visibility-widening plan is entertained.

## 10. Recommended product direction

**Recommended option:** **Option A or B, not execution yet.**

My recommendation is to either:

- remain in the current accepted preview-only posture, or
- approve a tightly bounded next planning pass that prepares a later implementation safely

without approving any product/Admin/theme execution in the same step.

The project now has enough QA evidence to plan from a stable truth, but not enough commercial or customer-readiness evidence to treat publish-for-preview execution as routine.

## 11. Recommended next owner

**Product Owner** — choose whether Slice **21AT** should lead to:

- no further change for now,
- a bounded DevOps/Admin planning pass, or
- a defer decision until supplier/pricing/delivery evidence is stronger.

## 12. LLD status

**LLD unchanged.** This slice is docs-only planning and does not approve or alter storefront, theme, checkout, payment, customer-access, app-install, import, or sync behaviour.

## 13. Confirmation no out-of-scope action occurred

Confirmed for Slice 21AT: no theme edit, no Shopify Admin change, no publish action, no product import/sync, no checkout/payment/customer-access enablement, no live-theme publish, and no commit of `artifacts/` or `zadropshipping/`.
