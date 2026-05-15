# Slice 21AN — Authenticated controlled-pilot collection preview validation

**Document type:** QA validation note  
**Prepared:** 2026-05-15  
**Owner:** QA  
**Mode:** Read-only QA + documentation update only

## Verdict

**PASS WITH NOTES**

## Scope

Validate customer-facing **`controlled-pilot`** collection preview posture after **Slice 21AL** membership cleanup and **Slice 21AM** tracker sync, without Admin mutations, publishing, checkout/payment enablement, customer access, or commercial approvals.

## Method

- Unpublished preview theme query param **`preview_theme_id=151207542967`** (repo-established pattern).
- Passive storefront `curl` (password-gated responses recorded).
- Read-only Admin GraphQL via **`shopify store execute`** for collection membership cross-check (supplementary).

## Results (summary)

| Check | Result |
| --- | --- |
| Preview route access | **PASS WITH NOTES** — `/password` gate; no commerce signals |
| Collection membership (preview) | **PASS WITH NOTES** — Admin: **3** CJ members; storefront grid not observable while DRAFT/unpublished |
| CJ SKU visibility | **PASS WITH NOTES** — not on storefront HTML; Admin **DRAFT** |
| Removed Gadgetgyz-era absence | **PASS** — not in collection; not in storefront HTML |
| Checkout / customer access | **PASS** |
| Claim / launch wording | **PASS WITH NOTES** — storefront copy not reviewable on password page; Admin tags + **21AG** chain |
| Public exposure | **PASS** — password-gated |

## Manual step

Storefront password unlock was **not** available in the QA environment. Optional operator rerun with password unlock for DOM/card copy only; **not** a blocker while CJ rows remain **DRAFT** / unpublished.

## Evidence (local; not committed)

`artifacts/qa/slice-21an-controlled-pilot-collection-preview-validation/20260515-113813/`

## Blockers preserved

Customer access, checkout/payment, public launch, **`Supplier verified`**, final pricing, delivery promises, product claims, media approval, and app install/import/sync remain **BLOCKED**.

## LLD

**Unchanged** — QA validation only; no theme/storefront behaviour change in this slice.
