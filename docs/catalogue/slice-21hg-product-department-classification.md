# Slice 21HG - Product Department Classification (Read-Only)

Date: 2026-05-28

Store context:
- Shopify CLI/Admin API store: `sikhwarigroupdev.myshopify.com`
- Customer-facing live URL reference: `mzansiselect.myshopify.com`
- Live theme reference: `Mzansi Select MVP Restored #162429075681`

Scope and guardrails:
- Read-only product export and classification only.
- No product edits, no price changes, no collection/tag mutations, no app installs, no theme publication changes.

Input evidence:
- Theme access verified via `shopify theme list --store mzansiselect.myshopify.com`.
- Product export executed via Admin GraphQL on `sikhwarigroupdev.myshopify.com`.
- Products returned: `0`.
- Products count returned: `0`.

Artifacts:
- `D:\dev\mzansi-select-shopify-winqa\artifacts\qa\slice-21hg-product-department-classification\products-raw.json`
- `D:\dev\mzansi-select-shopify-winqa\artifacts\qa\slice-21hg-product-department-classification\products-raw.csv`

## Section A - Departments

| Department | Short purpose | Number of mapped products |
|---|---|---:|
| The Retro Vault: Consoles & Classics | Retro consoles, classic gaming devices, emulator-style products | 0 |
| Games & Toys | Board games, toys, dolls, plush, sensory and play products | 0 |
| Tech Accessories | Personal and device accessories, charging/data, computer peripherals | 0 |
| Office & Desk | Desk productivity and workstation accessories | 0 |
| Kitchen & Storage | Kitchen tools, holders, and home organisation storage | 0 |
| Home & Living | General home, laundry, decor, and household items | 0 |
| Unclassified / Needs review | Products without enough data or uncertain department fit | 0 |

## Section B - Product mapping table

No products were returned from the authenticated Admin API export, so no product-to-department mappings could be produced for this slice.

| Product title | Handle | Primary department | Reason | Confidence |
|---|---|---|---|---|
| _No products returned_ | - | - | Authenticated export returned zero products in source store | High |

## Section C - Needs review

- No individual products require classification review because no products were returned.
- Environment review needed: confirm whether live catalogue products exist under a different Admin store context or sales-channel scope than `sikhwarigroupdev.myshopify.com`.

## Section D - Recommended next action

- Populate collections only after a non-empty product export is available from the intended live catalogue source.
- If products are expected, validate store linkage between `mzansiselect.myshopify.com` (customer-facing) and the authenticated Admin API context used for export.
- Consider hiding/reviewing products later only once products are visible in export data and have been classified.
- No mutation performed.
