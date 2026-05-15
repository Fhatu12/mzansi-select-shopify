# Slice 21AW — Controlled-pilot Admin execution-readiness pack

**Document type:** DevOps / Admin execution-readiness pack  
**Prepared:** 2026-05-15  
**Owner:** Senior Full-Stack Software Architect  
**Scope:** Readiness only; not execution. No Shopify Admin change, no theme edit, no publish action, no product import/sync, no checkout/payment/customer-access enablement, and no live-store action executed in this slice.

## 1. Purpose and scope

This pack exists to make any future tightly bounded Shopify Admin/write pass legible, reviewable, and reversible **before** any execution is approved.

It is a readiness pack only. It does **not** authorise:

- Shopify Admin mutation
- product publication change
- customer access widening
- checkout/payment enablement
- theme publication
- product import/sync
- app install

## 2. Exact 3-product boundary

Any future Admin/write pass must remain limited to these exact handles only:

- `beverage-bottle-oil-bottle-handle-holder`
- `usb-bag-sealer`
- `foldable-magnetic-phone-holder-desktop-tablet-stand`

No reserve products, no historical Gadgetgyz products, and no broader catalogue surface are in scope for the future bounded write path described by this pack.

## 3. Pre-write checkpoint template

Use the following checkpoint template before any future bounded Admin/write slice begins:

### Pre-write checkpoint

- [ ] Working copy has a clean git status
- [ ] Current branch recorded
- [ ] Current commit hash recorded
- [ ] Exact target product handles confirmed
- [ ] Exact target theme confirmed
- [ ] Current product visibility/publication state captured
- [ ] Rollback state documented
- [ ] No secrets, cookies, tokens, auth headers, customer data, order data, payment data, or supplier private data captured in tracked docs
- [ ] No live publish in scope
- [ ] No checkout/payment/customer-order enablement in scope
- [ ] No app install/import/sync in scope
- [ ] No media enablement in scope unless separately approved
- [ ] No final supplier/pricing/delivery/stock/warranty claims in scope
- [ ] QA owner and rerun command agreed before any write

## 4. Proposed future Admin/write steps — not approved yet

The following are proposed future steps only. They are **not approved yet** and must not be executed from this pack.

### Proposed future bounded write checklist

- [ ] Confirm exact three-product boundary in Shopify Admin before any change
- [ ] Confirm current visibility/publication state for each of the three products
- [ ] Confirm current non-purchasable posture for each of the three products
- [ ] Confirm target unpublished preview theme / route posture
- [ ] Capture pre-change rollback notes
- [ ] Apply only the minimum approved product visibility/publication change, if separately authorised later
- [ ] Reconfirm no checkout/payment/customer-order path has been enabled
- [ ] Reconfirm no media has been enabled unless separately approved
- [ ] Reconfirm no final supplier/pricing/delivery/stock/warranty claims were introduced
- [ ] Hand immediately to QA for post-change validation

## 5. Rollback checklist

If a future bounded Admin/write pass must be reversed, use the following rollback checklist:

- [ ] Restore the pre-change visibility/publication state for the exact three products only
- [ ] Remove any newly granted preview exposure that was introduced by the write
- [ ] Reconfirm the exact three-product boundary still holds
- [ ] Reconfirm the products remain non-purchasable
- [ ] Remove any newly exposed media or wording that failed review
- [ ] Re-run the fixed-route QA harness after rollback
- [ ] Record a sanitized rollback note only
- [ ] Do not store Admin payloads, secrets, cookies, tokens, or private evidence in tracked docs

## 6. Post-write QA checklist

Any future bounded Admin/write implementation remains incomplete until all of the following are checked:

### QA execution

- [ ] Run the fixed-route harness
- [ ] Verify desktop viewport **1366x768**
- [ ] Verify mobile viewport **390x844**

### Required product routes

- [ ] `/products/beverage-bottle-oil-bottle-handle-holder`
- [ ] `/products/usb-bag-sealer`
- [ ] `/products/foldable-magnetic-phone-holder-desktop-tablet-stand`

### Required collection-route treatment

- [ ] `/collections/controlled-pilot` remains informational only if Shopify still serves it through **404** handling

### Required outcome checks

- [ ] expected CJ PDP visible on all three products
- [ ] Gadgetgyz absent
- [ ] Add to Cart / Buy Now absent
- [ ] checkout/customer absent
- [ ] `media=no` / placeholder-only posture unless separate media approval exists

## 7. No-go list

The following remain explicitly out of scope unless separately approved in a later slice:

- no live theme publish
- no public launch
- no checkout/payment/customer-order enablement
- no app install/import/sync
- no media enablement unless separately approved
- no final supplier/pricing/delivery/stock/warranty claims
- no broad catalogue exposure

## 8. Required final Product Owner approval wording before any actual Admin/write pass

Before any future Shopify Admin/write pass begins, the Product Owner approval must state, in substance:

> I approve a tightly bounded controlled-pilot Admin/write pass for the exact three accepted CJ products only, for restricted preview exposure only. This approval does not authorise public launch, live theme publish, checkout/payment enablement, real customer orders, app install/import/sync, media enablement unless separately approved, or any broadened catalogue exposure. Rollback notes and post-change QA are required.

## 9. Recommended next owner

**Product Owner** — accept this readiness pack and decide whether to open a separate bounded Admin/write execution slice later.

## 10. LLD status

**LLD unchanged.** This pack is readiness-only and does not alter storefront, theme, checkout, payment, customer-access, app-install, import, or sync behaviour.

## 11. Confirmation no out-of-scope action occurred

Confirmed for Slice 21AW: docs-only; no Shopify Admin changes, no theme edits, no publish, no product import/sync, no checkout/payment/customer-access enablement, and no commit of `artifacts/` or `zadropshipping/`.
