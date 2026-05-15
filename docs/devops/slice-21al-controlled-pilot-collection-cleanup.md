# Slice 21AL — Controlled-pilot collection membership cleanup

**Document type:** DevOps / Platform execution note  
**Prepared:** 2026-05-15  
**Owner:** DevOps / Platform Engineer  
**Store:** `dropshippoc.myshopify.com`  
**Product Owner decision:** Slice 21AL **APPROVED**  
**Prior plan:** **`docs/pilot/slice-21ak-controlled-pilot-collection-hygiene-plan.md`** (**Slice 21AK** commit **`46d2e6e5e25c6e97f77f2a79a4b31dea96d2ea15`**)  
**Prior blocker commit:** **`28ef589e6917829cb7a61181ae0ba82409def921`** (auth missing)  
**Completion commit:** (this retry — see tracker after docs commit)

## 1. DevOps verdict

**PASS** — bounded **`controlled-pilot`** collection membership cleanup **executed** 2026-05-15 after successful **`shopify store auth`**. **`collectionRemoveProducts`** removed four older Gadgetgyz-era draft rows from the collection **only**. **3** CJ draft rows remain. All **7** affected products remain **`DRAFT`**.

## 2. Cleanup method used

**Shopify CLI `shopify store execute`** with Admin GraphQL on **`dropshippoc.myshopify.com`**:

1. Auth verify: `query { shop { name id } }`
2. Pre-read: `collectionByHandle(handle: "controlled-pilot")`
3. Mutation: `collectionRemoveProducts` (four product GIDs only)
4. Post-read: collection membership + `productByHandle` status for four removed rows

**No** Shopify Admin UI automation, **no** credential storage in repo, **no** product publish/archive/delete, **no** theme/checkout/payment/customer-access changes.

## 3. Pre-cleanup collection membership summary (live Admin read)

**Collection:** `controlled-pilot` (**Controlled Pilot**) — **7** members — **all `DRAFT`** — matches documented **Slice 21AK** baseline (**no drift**).

| Action | SKU | Handle | Status |
| --- | --- | --- | --- |
| Keep | `CJYD230000901AZ` | `beverage-bottle-oil-bottle-handle-holder` | DRAFT |
| Keep | `CJYD211196101AZ` | `usb-bag-sealer` | DRAFT |
| Keep | `CJYD245830501AZ` | `foldable-magnetic-phone-holder-desktop-tablet-stand` | DRAFT |
| Remove from collection | `74886` | `world-map-extended-mouse-pad` | DRAFT |
| Remove from collection | `GCPU2C2` | `gizzu-usb-to-type-c-cable-2m` | DRAFT |
| Remove from collection | `CR106-20277` | `ugreen-4-in-1-usb-2-0-hub` | DRAFT |
| Remove from collection | `DP0402` | `acrylic-tablet-phone-stand` | DRAFT |

## 4. Post-cleanup collection membership summary (live Admin read)

**Collection:** `controlled-pilot` — **3** members — **all `DRAFT`**.

| SKU | Handle | Status | In `controlled-pilot` |
| --- | --- | --- | --- |
| `CJYD230000901AZ` | `beverage-bottle-oil-bottle-handle-holder` | DRAFT | Yes |
| `CJYD211196101AZ` | `usb-bag-sealer` | DRAFT | Yes |
| `CJYD245830501AZ` | `foldable-magnetic-phone-holder-desktop-tablet-stand` | DRAFT | Yes |

**Removed from collection (products unchanged):**

| SKU | Handle | Status | In `controlled-pilot` |
| --- | --- | --- | --- |
| `74886` | `world-map-extended-mouse-pad` | DRAFT | No |
| `GCPU2C2` | `gizzu-usb-to-type-c-cable-2m` | DRAFT | No |
| `CR106-20277` | `ugreen-4-in-1-usb-2-0-hub` | DRAFT | No |
| `DP0402` | `acrylic-tablet-phone-stand` | DRAFT | No |

**Mutation result:** `collectionRemoveProducts` — `userErrors: []`.

## 5. Acceptance confirmations

1. **`controlled-pilot`** contains exactly the **3** CJ draft rows — **confirmed**.
2. Four older unrelated products removed from collection membership **only** — **confirmed**.
3. All **7** affected products remain **`DRAFT`** — **confirmed**.
4. **No** publish, archive, delete, reject, media, pricing, delivery, stock, warranty, claim, checkout, payment, or customer-access changes in this pass.
5. **Collection preview validation** remains a **separate** follow-up gate (not auto-approved by cleanup alone).

## 6. Prior blocked attempt (2026-05-15)

First **Slice 21AL** attempt **BLOCKED** — no stored CLI auth. Documented in commit **`28ef589`**. Operator completed interactive auth; retry succeeded.

## 7. Safety confirmations

| Check | Status |
| --- | --- |
| Collection membership only | **Confirmed** |
| No products published | **Confirmed** |
| No checkout/payment/customer access enabled | **Confirmed** |
| No app install/import/sync | **Confirmed** |
| No Supplier verified / final pricing / delivery / claims approval | **Confirmed** |
| No credentials/tokens/Admin payloads in repo | **Confirmed** |

## 8. Evidence (local; not committed)

`artifacts/devops/slice-21al-controlled-pilot-collection-cleanup/20260515-131842/`

Sanitized summaries: `pre-membership-summary.txt`, `post-membership-summary.txt`. Raw CLI output retained locally only.

## 9. LLD status

**LLD unchanged** — collection membership cleanup only; no app/import/sync/storefront/checkout/payment/customer-access behaviour change.

## 10. Recommended next owner

**QA / Test Engineer** — validate cleaned **`controlled-pilot`** collection state (membership, draft/restricted posture, no unintended public/checkout exposure). **Does not** approve collection preview, customer access, or launch.
