# Slice 21AY — Admin baseline security / compliance review

**Document type:** Security / Compliance review note  
**Prepared:** 2026-05-15  
**Owner:** Security / Compliance Engineer  
**Scope:** Docs-only review of the accepted **21AX** read-only Admin pre-touch checkpoint. No Shopify Admin mutation, no theme edit, no publish, no product import/sync, no app install, and no checkout/payment/customer-order enablement.

**Accepted upstream state:** Slice **21AX** accepted **PASS WITH NOTES** in commit `93cb366164cf274e9c8e2cbe2fc0e4aa764bc4b3`.

## 1. Security / Compliance verdict

**PASS WITH NOTES**

The **21AX** baseline is acceptable for the current controlled-pilot posture because it remains read-only, preserves the exact three-product boundary, and shows strong non-purchasable signals. However, it also surfaces an ambiguity that should be resolved before any future write proposal is approved: all three products are `ACTIVE` and published to `Online Store`, while `onlineStoreUrl` remains `null`.

That combination is not an immediate failure, but it is a meaningful watch item.

## 2. Risk meaning of `ACTIVE` + `Online Store` publication while `onlineStoreUrl=null`

**Interpretation: caution, not panic.**

The current evidence means:

- the three products are not merely draft placeholders
- Shopify Admin metadata shows an `Online Store` publication path exists
- the products are in an `ACTIVE` state
- but the read-only snapshot does **not** prove a directly resolvable public product URL

Security / Compliance therefore treats this as:

- **not proof of public launch**
- **not proof of safe invisibility**
- a visibility ambiguity that should be resolved explicitly before any later Admin/write proposal

This is especially important because the later planning slices are supposed to govern a tightly bounded preview exposure step. If the baseline already includes a publication state that is not fully understood, a later write proposal could misstate risk or under-specify rollback.

## 3. Whether non-purchasable controls are enough for the current restricted preview posture

**Yes — for the current posture, with notes.**

The evidence captured in **21AX** shows that all three products still present strong non-purchasable controls:

- `non-purchasable` tag present
- `preview-only` tag present
- `price-to-confirm` tag present
- `inventoryQuantity=0`
- `inventoryPolicy=DENY`
- `availableForSale=false`

Taken together, those signals are adequate for the current restricted-preview posture reflected in accepted **21AR / 21AS** QA, provided no separate customer/checkout widening has occurred.

They are **not**, by themselves, a reason to skip later visibility validation. A product can be non-sellable and still be more visible than intended.

## 4. Whether current tags and product state are sufficiently clear and honest

**Yes — with notes.**

The current tag set is directionally honest and internally consistent with the accepted preview-safe posture:

- `controlled-pilot`
- `cj-imported-supplier`
- `non-purchasable`
- `preview-only`
- `price-to-confirm`

That is strong enough for the current state because it communicates restriction, imported-supplier caution, and non-final pricing posture.

The main honesty risk is not the tag set itself. The main risk is that future stakeholders may misread `ACTIVE` + `Online Store` publication as meaning “already safe and intentionally visible”, which **21AX** does not prove.

## 5. Whether any customer / order / payment / checkout exposure exists based on 21AX evidence

**No direct exposure is evidenced in 21AX.**

The **21AX** checkpoint does **not** show:

- customer-account enablement
- order flow exposure
- checkout/payment enablement
- cart sellability
- media enablement
- final-price posture

The captured variant-level state (`availableForSale=false`, zero inventory, deny policy) supports the current conclusion that commerce exposure is still blocked.

That said, **21AX** was an Admin metadata checkpoint, not a live route validation pass. It should therefore not be stretched beyond what it proves.

## 6. Whether immediate remediation is required before further planning

**No immediate remediation is required.**

There is no evidence in **21AX** of an active security/compliance breach that demands an emergency theme or Admin change.

What **is** required is a more precise read-only understanding of the current visibility state before any later write proposal is approved.

## 7. Safer next step before any future Admin/write proposal

**Recommended safer next step: a read-only visibility / URL validation pass.**

Security / Compliance recommends that the next technical checkpoint, before any later write proposal, should verify in a read-only way:

1. whether the three product routes are currently reachable outside the accepted preview paths
2. whether the `Online Store` publication state maps to a resolvable storefront URL, preview-only route, or non-resolvable metadata-only state
3. whether any route-level visibility differs between live storefront, preview theme, and password-gated preview contexts
4. whether the current publication state is intentional legacy posture or merely an artefact of Shopify product/publication handling

That is a safer next step than opening a write proposal immediately.

## 8. Required controls before any write action

Before any future write action is approved, all of the following controls should remain mandatory:

1. exact three-product scope only
2. no live theme publish
3. no checkout/payment/customer-order enablement
4. no app install/import/sync
5. no media enablement unless separately approved
6. no final supplier/pricing/delivery/stock/warranty claims
7. read-only visibility ambiguity resolved first
8. rollback method defined against a confirmed pre-write baseline
9. post-change QA required on desktop and mobile
10. Security / Compliance re-review if customer visibility or claim posture widens

## 9. Baseline risk summary

### Acceptable now

- read-only checkpoint only
- exact three-product boundary preserved
- no Admin mutation
- no publish
- no import/sync
- no evidence of checkout/customer/payment exposure
- strong non-purchasable signals remain in place

### Watch items

- `ACTIVE` + `Online Store` publication may be more visible than the project narrative assumes
- `onlineStoreUrl=null` leaves route visibility ambiguous
- future stakeholders may over-read the current Admin state
- later write planning should not begin from an unverified visibility assumption

## 10. Recommended next owner

**Product Owner**

The clean next decision is whether to request the recommended **read-only visibility / URL validation pass** before any future Admin/write proposal is opened.

## 11. LLD status

**Unchanged.** This review does not change storefront, theme, checkout, payment, customer-access, app-install, import, sync, or publication behaviour.

## 12. Confirmation no out-of-scope action occurred

Confirmed for Slice **21AY**: docs-only; no Shopify Admin mutation, no theme edit, no publish, no product import/sync, no app install, no media enablement, no checkout/payment/customer-order enablement, and no commit of `artifacts/` or `zadropshipping/`.
