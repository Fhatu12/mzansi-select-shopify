# Slice 21AV — Controlled-pilot Admin readiness plan

**Document type:** DevOps / Admin planning note  
**Prepared:** 2026-05-15  
**Owner:** Senior Full-Stack Software Architect  
**Scope:** Documentation only; no Shopify Admin change, no theme edit, no publish action, no product import/sync, no checkout/payment/customer-access enablement, and no live-store action executed in this slice.

## 1. Planning verdict

**PASS WITH NOTES**

The project is now ready for a **future tightly bounded Admin/write planning lane**, but not for execution in this slice. The purpose of 21AV is to turn the accepted 21AT / 21AU planning posture into a practical operational checklist for any later restricted controlled-pilot preview exposure step.

## 2. Exact future objective

Prepare for a possible future **restricted controlled-pilot preview exposure** step for the accepted CJ preview posture only.

That future objective is limited to:

- restricted stakeholder preview visibility only
- exact three accepted CJ products only
- non-purchasable posture preserved
- no public launch, no customer-order flow, and no commerce widening

This slice does **not** approve or perform that action.

## 3. Exact 3-product boundary

Any future Admin/write pass must remain limited to these exact handles only:

- `beverage-bottle-oil-bottle-handle-holder`
- `usb-bag-sealer`
- `foldable-magnetic-phone-holder-desktop-tablet-stand`

No reserve products, no historical Gadgetgyz items, no adjacent imported-supplier candidates, and no broadened catalogue surface may be included without a separate Product Owner decision.

## 4. Future Admin/write actions that may be proposed later, but not executed here

A later bounded slice may propose only the minimum actions needed for restricted preview exposure, for example:

1. confirming current product status, publication state, and preview-safe tags on the exact three products
2. capturing pre-change evidence and rollback notes
3. confirming the target unpublished preview theme and route posture
4. changing only the minimum approved product visibility/publication fields if later explicitly approved
5. validating that non-purchasable controls remain intact after any later change

This pass approves none of the above for execution. It only records them as the kinds of actions a later write slice may need to define precisely.

## 5. Required pre-write checklist for any future Admin/write pass

Before any later write is attempted, all of the following must be explicitly confirmed:

1. current clean git status in the working copy
2. pre-change backup/export notes or rollback notes captured
3. exact target theme ID, product IDs, handles, and route targets confirmed
4. no live publish in scope
5. no checkout/payment/customer-order enablement in scope
6. no app install/import/sync in scope
7. no media enablement unless separately approved first
8. no final supplier/pricing/delivery/stock/warranty claims in scope
9. exact three-product boundary reconfirmed immediately before the write
10. non-purchasable posture reconfirmed immediately before the write
11. post-change QA owner and rerun command agreed in advance
12. Security / Compliance re-review triggers rechecked before the write begins

## 6. Rollback plan for any future Admin/write pass

If a later controlled-pilot preview write must be reversed:

1. restore the pre-change product visibility/publication posture for the exact three products only
2. remove any newly granted preview exposure that was added in the later write
3. confirm the three-product boundary still holds after rollback
4. confirm non-purchasable controls still hold after rollback
5. remove any newly exposed media or wording that failed review
6. rerun the same fixed-route QA checks after rollback
7. record a sanitized rollback note without storing Admin payloads, credentials, cookies, tokens, or private evidence in tracked docs

## 7. Post-change QA requirements for any future write pass

Any future Admin/write implementation is incomplete until QA confirms all of the following:

- desktop viewport: **1366x768**
- mobile viewport: **390x844**
- exact three CJ PDP routes checked:
  - `/products/beverage-bottle-oil-bottle-handle-holder`
  - `/products/usb-bag-sealer`
  - `/products/foldable-magnetic-phone-holder-desktop-tablet-stand`
- `/collections/controlled-pilot` remains informational only if Shopify still serves it through **404** handling
- expected CJ PDP visible on all three products
- Gadgetgyz absent
- Add to Cart / Buy Now absent
- checkout/customer absent
- `media=no` / placeholder-only posture unless separate media approval exists

## 8. Security / Compliance re-review triggers

A fresh Security / Compliance review is required if any future slice proposes any of the following:

- customer access widens
- checkout/payment changes
- product claims change
- media is enabled
- supplier/pricing/delivery wording changes
- app install/import/sync is proposed
- restricted preview boundaries are widened or weakened

## 9. Operational no-go list

The following remain explicitly out of scope for any future bounded write unless separately approved:

- public launch
- live theme publish
- checkout/payment
- real customer orders
- product import/sync
- app install
- broad catalogue exposure
- customer-account/customer-service-flow enablement
- final supplier/pricing/delivery/stock/warranty approvals

## 10. Recommended next owner

**Product Owner** — accept 21AV and decide whether to open a later bounded **execution-readiness** slice for DevOps / Admin, still separate from any execution authority.

## 11. LLD status

**LLD unchanged.** This slice is docs-only readiness planning and does not change storefront, theme, checkout, payment, customer-access, app-install, import, or sync behaviour.

## 12. Confirmation no out-of-scope action occurred

Confirmed for Slice 21AV: docs-only; no Shopify Admin changes, no theme edits, no publish, no product import/sync, no checkout/payment/customer-access enablement, and no commit of `artifacts/` or `zadropshipping/`.
