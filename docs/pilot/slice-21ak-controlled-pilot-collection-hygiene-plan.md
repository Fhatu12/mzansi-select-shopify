# Slice 21AK — Controlled-pilot collection hygiene plan

**Document type:** Product Manager planning note  
**Prepared:** 2026-05-15  
**Owner:** Product Manager  
**Scope:** Documentation only; no Shopify Admin cleanup or product-state change executed in this slice.

## 1. Verdict

**PASS WITH NOTES**

The controlled-pilot collection should be narrowed to the three staged CJ draft rows only. The four older unrelated draft products should be removed from that collection in a later bounded Shopify Admin cleanup pass, while remaining **draft / restricted** and otherwise unchanged.

## 2. Recommended controlled-pilot collection membership

| CJ reference | Product |
| --- | --- |
| `CJYD230000901AZ` | Beverage & Oil Bottle Handle Holder |
| `CJYD211196101AZ` | USB Bag Sealer |
| `CJYD245830501AZ` | Foldable Magnetic Phone Holder & Desktop Tablet Stand |

## 3. Rationale for including the 3 CJ rows

- They are the only three rows currently accepted for the active CJ imported-supplier controlled-pilot path.
- They share the same approved draft-only posture, long-delivery imported-route wording, blocked-claim controls, and Slice 21AF-D / 21AG / 21AH review chain.
- Keeping the collection bounded to those three rows makes future preview validation legible and keeps the collection aligned with the present pilot route rather than historical experiments.

## 4. Rationale for excluding the four older unrelated draft products

Remove these from **`controlled-pilot`** membership in the later cleanup pass:

- `world-map-extended-mouse-pad`
- `gizzu-usb-to-type-c-cable-2m`
- `ugreen-4-in-1-usb-2-0-hub`
- `acrylic-tablet-phone-stand`

They belong to the older Gadgetgyz-controlled-pilot lane, which is no longer the active execution path for the current pilot. Leaving them in the same collection blurs supplier-route boundaries, weakens release-review clarity, and keeps collection preview validation blocked even though their own draft/restricted status is not being rejected.

## 5. Decision

- In a **future bounded Shopify Admin cleanup pass**, remove the four older unrelated draft products from **`controlled-pilot`** collection membership.
- Keep those four products **draft / restricted**.
- Do **not** archive, delete, publish, reject, expose, or otherwise reroute them in this cleanup decision.
- Defer any future route decision for those four products to a later Product Owner-approved slice.

## 6. Acceptance criteria for future bounded Shopify Admin cleanup pass

A later cleanup pass is acceptable only if it confirms all of the following:

1. **`controlled-pilot`** contains only the three CJ draft rows listed in §2.
2. The four older unrelated products are removed from **`controlled-pilot`** membership only.
3. The four older products remain **draft / restricted** with no archive, deletion, publication, rejection, or exposure change.
4. The three CJ rows remain **draft / restricted / non-public / non-purchasable**.
5. No product titles, handles, prices, body copy, variants, tags, media, sales-channel publication, checkout/payment, shipping, or customer-access settings are changed beyond the bounded collection-membership cleanup.
6. Rollback evidence is captured before the write, and post-change verification confirms the exact expected membership.
7. A later collection-preview validation is still treated as a separate follow-up gate, not silently approved by cleanup alone.

## 7. Remaining blockers

- customer access
- checkout/payment
- public launch
- `Supplier verified`
- final pricing
- delivery promise
- product claims
- media/image decision
- collection preview validation

## 8. LLD status

**LLD unchanged** — this is a docs-only collection-membership planning decision and does not change app/install/import/storefront/checkout/payment/customer-access behaviour.

## 9. Recommended next owner

**Product Owner** — accept or reject this collection-hygiene plan before any Admin cleanup is attempted.

## 10. Follow-up owner after Product Owner acceptance

**DevOps / Platform Engineer** — execute a later bounded Shopify Admin collection-membership cleanup pass only after explicit Product Owner acceptance.
