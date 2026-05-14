# Mzansi Select CJ 3-SKU manual staging field specification v1

**Document type:** Bounded manual Shopify product staging — **exact field values** (planning record only)  
**Prepared:** 2026-05-14  
**Updated:** 2026-05-14 (**Slice 21AF-C** — execution-complete field spec; **Slice 21AF-D** — staging **PASS**; **Slice 21AG** — staged-row **QA** **PASS WITH NOTES**)  
**Owner:** Product Owner  
**Slice:** **21AE** — **PASS WITH NOTES** (Product Owner accepted; **docs-only** — **no** Shopify Admin execution implied by this document alone)  
**Related plan:** [mzansi-select-cj-imported-supplier-staging-plan-v1.md](mzansi-select-cj-imported-supplier-staging-plan-v1.md)  
**Related tracker:** [docs/project-control.md](../project-control.md) — **`## Slice 21AE`**, **`## Slice 21AF-C`**, **`## Slice 21AG`**

---

## 1. Scope and non-approvals

- This file records **exact** intended **Shopify Admin** field values used for bounded **Slice 21AF-D** manual staging (**DevOps**; **PASS**) and **Product Owner** **Slice 21AG** **QA** validation of the resulting draft rows (**PASS WITH NOTES**). Any **Admin** change beyond that scope requires a **separate** approved execution slice.
- **Does not** approve: **CJ** app install; Shopify authorization; import/sync; checkout/payment; customer access; public launch; **`Supplier verified`**; **final** pricing; **final** delivery promises; **final** product claims; theme publish; or purchasable/live catalogue exposure.
- **Posture:** **Draft / restricted only** for the three SKUs below. **Not purchasable** until **Product Owner** go/no-go on customer-facing enablement.
- **Media:** **No** images/media for **21AF-D** staging / **21AG** validation window. **CJ** image references remain **blocked** pending a **separate** **Product Owner** media/content-use decision.
- **The following remain blocked (unchanged):**
  - **No** **CJ** app install.
  - **No** Shopify/**CJ** authorization.
  - **No** import/sync.
  - **No** reserve/rejected products (**§9**, **§10** — do **not** stage).
  - **No** media/images.
  - **No** checkout/payment.
  - **No** customer access.
  - **No** **`Supplier verified`**.
  - **No** final pricing.
  - **No** final delivery promise.
  - **No** final product claims.
  - **No** public launch.

---

## 2. CJ reference storage (exact — all three SKUs)

For **each** of the three approved SKUs, store the **CJ** reference **only** in the Shopify **variant SKU** field:

| Variant SKU value (exact) |
| --- |
| `CJYD230000901AZ` |
| `CJYD211196101AZ` |
| `CJYD245830501AZ` |

- **Do not** store **CJ** references in **metafields**.
- **Do not** create new **CJ**-reference **tags**.
- **Do not** place **CJ** references in the product **title** or **body** copy.

---

## 3. Full product body (description) — exact assembly order

Assemble the product **description** (body HTML) **in this order** for each SKU: **(1)** product-specific body copy **exactly** as below; **(2)** imported-route wording **exactly** as below; **(3)** controlled-pilot wording **exactly** as below; **(4)** refund/cancellation/support wording **exactly** as below.

### 3.1 `CJYD230000901AZ` — Beverage & Oil Bottle Handle Holder

**Product-specific body copy (exact):**

> A simple bottle handle holder for selected beverage or oil bottles. It is intended for everyday kitchen use where a compatible bottle shape allows easier holding or pouring support. Fit depends on the bottle size, shape, and neck design, so suitability must be confirmed before fulfilment.

**Imported route — delivery (exact):**

> Imported supplier-route item. Delivery timing varies by supplier, warehouse, product attributes, and courier method. Final delivery estimate must be confirmed before fulfilment.

**Controlled pilot (exact):**

> This item is part of a controlled pilot and may have extended imported-supplier delivery timing. Delivery estimate will be confirmed before fulfilment.

**Refund / cancellation / support — imported route (exact):**

> This controlled pilot item is fulfilled through an imported supplier route. If fulfilment cannot proceed because of stock, supplier cost, delivery availability, or fulfilment constraints, we may contact you before fulfilment to confirm next steps, replacement options, cancellation, or refund where applicable.

### 3.2 `CJYD211196101AZ` — USB Bag Sealer

**Product-specific body copy (exact):**

> A compact USB bag sealer for resealing suitable light snack or storage bags during everyday home use. Suitability depends on the bag material, thickness, and condition. It is not positioned for safety-critical sealing, industrial use, liquid storage, or guaranteed food preservation.

**Imported route — delivery (exact):**

> Imported supplier-route item. Delivery timing varies by supplier, warehouse, product attributes, and courier method. Final delivery estimate must be confirmed before fulfilment.

**Controlled pilot (exact):**

> This item is part of a controlled pilot and may have extended imported-supplier delivery timing. Delivery estimate will be confirmed before fulfilment.

**Refund / cancellation / support — imported route (exact):**

> This controlled pilot item is fulfilled through an imported supplier route. If fulfilment cannot proceed because of stock, supplier cost, delivery availability, or fulfilment constraints, we may contact you before fulfilment to confirm next steps, replacement options, cancellation, or refund where applicable.

### 3.3 `CJYD245830501AZ` — Foldable Magnetic Phone Holder & Desktop Tablet Stand

**Product-specific body copy (exact):**

> A foldable desktop holder for everyday phone or small tablet desk use. Suitability depends on the device size, weight, case, and the surface where it is used. Compatibility and practical fit must be confirmed before fulfilment.

**Imported route — delivery (exact):**

> Imported supplier-route item. Delivery timing varies by supplier, warehouse, product attributes, and courier method. Final delivery estimate must be confirmed before fulfilment.

**Controlled pilot (exact):**

> This item is part of a controlled pilot and may have extended imported-supplier delivery timing. Delivery estimate will be confirmed before fulfilment.

**Refund / cancellation / support — imported route (exact):**

> This controlled pilot item is fulfilled through an imported supplier route. If fulfilment cannot proceed because of stock, supplier cost, delivery availability, or fulfilment constraints, we may contact you before fulfilment to confirm next steps, replacement options, cancellation, or refund where applicable.

---

## 4. Blocked-claim lists (exact — do not use in title, body, or tags)

### 4.1 `CJYD230000901AZ` — block

- universal fit
- fits all bottles
- spill-proof
- leak-proof
- food-grade certification
- dishwasher-safe
- heat-resistant
- guaranteed easier pouring
- anti-slip guarantee
- heavy-duty durability
- child-safe
- brand compatibility
- warranty claims

### 4.2 `CJYD211196101AZ` — block

- airtight seal
- vacuum seal
- keeps food fresh
- preserves freshness
- works on all bags or plastics
- waterproof
- food-safe certification
- child-safe
- burn-safe or heat-safe
- industrial or commercial use
- professional-grade sealing
- guaranteed seal strength
- battery/charging performance claims unless separately verified
- warranty claims

### 4.3 `CJYD245830501AZ` — block

- compatible with all phones/tablets
- guaranteed magnetic strength
- MagSafe-certified
- anti-slip guarantee
- supports all tablets
- car-safe mounting
- driving use
- vacuum mount claims
- heavy-duty durability
- military-grade
- charging support
- universal compatibility
- warranty claims

---

## 5. Controlled-pilot collection handling (exact)

- Use **only** the existing collection handle **`controlled-pilot`**.
- **Do not** create a new collection.
- **Do not** publish any product to create or expose the collection.
- If the existing **`controlled-pilot`** collection can be assigned while the product remains **Draft** / **restricted** / **non-public**, assign it.
- If assignment requires product **publication**, **customer access**, **sales-channel exposure**, or **collection creation**, **skip** collection assignment and **report** the SKU as staged with **collection assignment blocked**.
- Collection assignment failure **must not** trigger public exposure or publication.

---

## 6. Rollback / removal (exact)

- Before staging, **DevOps** must capture **pre-change Shopify product-state evidence** for each SKU.
- If a product row is **newly created**, rollback means **deleting/removing** that created **draft** row.
- If an **existing** row is **updated**, rollback means **restoring** the exact pre-change **title**, **handle**, **variant SKU**, **price**, **body**, **tags**, **product type**, **collection assignment**, **status**, and **publication/access state** captured in evidence.
- If pre-change evidence **cannot** be captured for a SKU, that SKU **must not** be staged.
- If rollback **cannot** be confidently defined for a SKU, that SKU **must not** be staged.

---

## 7. Pricing posture (all three SKUs)

- Listed **draft staging prices** in **§8** are **exact draft staging prices only**.
- They are **not** final public prices.
- They **do not** approve final pricing.
- They **must** be rechecked against **CJ** landed cost, **FX**, support buffer, and **Product Owner** commercial acceptance **before** customer access.

---

## 8. Per-SKU field matrix (approved fields — unchanged)

### 8.1 `CJYD230000901AZ` — Beverage & Oil Bottle Handle Holder

| Field | Value |
| --- | --- |
| **Handle** | `beverage-bottle-oil-bottle-handle-holder` |
| **Title** | Beverage & Oil Bottle Handle Holder |
| **Variant option** | **Color** = **Blue** |
| **Variant SKU** | `CJYD230000901AZ` (**only** location for **CJ** reference — see **§2**) |
| **Product type** | Kitchen & Storage |
| **Draft staging price** | **R249** |
| **Collection** | `controlled-pilot` (subject to **§5**) |
| **Tags** | `pilot`, `pilot-cj`, `imported-supplier`, `manual-review`, `controlled-pilot`, `kitchen-storage` |
| **Visibility** | Draft / restricted only — not purchasable until **Product Owner** go/no-go |
| **Media** | None for **21AF-D** retry |
| **Body** | **§3.1** (exact order) |

### 8.2 `CJYD211196101AZ` — USB Bag Sealer

| Field | Value |
| --- | --- |
| **Handle** | `usb-bag-sealer` |
| **Title** | USB Bag Sealer |
| **Variant option** | **Color** = **Coffee Bear** |
| **Variant SKU** | `CJYD211196101AZ` (**only** location for **CJ** reference — see **§2**) |
| **Product type** | Kitchen & Storage |
| **Draft staging price** | **R279** |
| **Collection** | `controlled-pilot` (subject to **§5**) |
| **Tags** | `pilot`, `pilot-cj`, `imported-supplier`, `manual-review`, `controlled-pilot`, `kitchen-storage`, `claim-caution` |
| **Visibility** | Draft / restricted only — not purchasable until **Product Owner** go/no-go |
| **Media** | None for **21AF-D** retry |
| **Body** | **§3.2** (exact order) |

### 8.3 `CJYD245830501AZ` — Foldable Magnetic Phone Holder & Desktop Tablet Stand

| Field | Value |
| --- | --- |
| **Handle** | `foldable-magnetic-phone-holder-desktop-tablet-stand` |
| **Title** | Foldable Magnetic Phone Holder & Desktop Tablet Stand |
| **Variant option** | **Color** = **Gun Gray** |
| **Variant SKU** | `CJYD245830501AZ` (**only** location for **CJ** reference — see **§2**) |
| **Product type** | Tech Accessories |
| **Draft staging price** | **R699** |
| **Collection** | `controlled-pilot` (subject to **§5**) |
| **Tags** | `pilot`, `pilot-cj`, `imported-supplier`, `manual-review`, `controlled-pilot`, `tech-accessories`, `claim-caution` |
| **Visibility** | Draft / restricted only — not purchasable until **Product Owner** go/no-go |
| **Media** | None for **21AF-D** retry |
| **Body** | **§3.3** (exact order) |

---

## 9. Reserve only (no staging)

| CJ reference | Working title |
| --- | --- |
| `CJYD213778501AZ` | Soap Grinder / Wall-Mounted Soap Box |

---

## 10. Rejected / deferred (no staging)

| CJ reference | Reason |
| --- | --- |
| `CJYD197888501AZ` | Blocked by CJ human verification |
| `CJJJJTCF09109-White` | Commercially weak shipping / landed-cost signal |

---

## 11. Next slice (record)

- **Slice 21AH** — **Security / Compliance** post-staging review of **CJ** **3**-**SKU** imported-supplier **draft** posture — **docs-only** unless a direct contradiction requires **LLD** amendment (**separate** slice; **no** **Admin** work implied here).

---

## 12. Document control

- **Version:** 1.1 (**Slice 21AF-C** — execution-complete field spec; **Slice 21AG** tracker sync)  
- **Next review:** **Security / Compliance Engineer** — **Slice 21AH** (post-staging **CJ** **3**-**SKU** draft posture; **docs-only** unless contradicted).

---

## 13. Slice 21AF execution note (blocked before Shopify Admin change)

- **Date:** 2026-05-14  
- **Result:** **BLOCKED** before any **Shopify Admin** access or mutation.  
- **Why execution stopped:** under the **Slice 21AF** rule to use **only** this field-spec doc as the exact staging source of truth, the following execution-critical mappings remained ambiguous at that time: **CJ** reference storage; per-SKU body beyond global blocks; blocked-claim lists; rollback notes; **`controlled-pilot`** collection rules.  
- **No execution occurred:** no product create/update; no publication; no collection mutation; no media/image upload; no **CJ** image reference use; no app install; no Shopify/CJ authorization; no import/sync; no checkout/payment/customer-access/public-launch change.  
- **Evidence pointer:** **`artifacts/devops/slice-21af-cj-manual-product-staging-retry/20260514-143635/`** (local only; **not** committed).  

---

## 14. Slice 21AF-B execution note (blocked before Shopify Admin review)

- **Date:** 2026-05-14  
- **Result:** **BLOCKED** before any **Shopify Admin** review or mutation — field spec was **not** execution-complete.  
- **Accepted blocked commit (record):** **`d47b71bf2274f646f9e784ce7b53ab11866c3d9f`**.  
- **Context:** **Product Owner** mapping decisions were provided in the **Slice 21AF-B** execution brief, but the approved source-of-truth doc still did **not** contain all exact per-SKU staging fields required by the execution gate.  
- **Why execution stopped:** missing exact per-SKU product-specific body copy, per-SKU blocked-claim lists, rollback/removal notes, controlled-pilot collection handling rules, and unambiguous **CJ** reference storage (**§2**–**§6** now close these gaps in **Slice 21AF-C**).  
- **No execution occurred:** no product create/update; no publication; no collection mutation; no media/image upload; no **CJ** image reference use; no app install; no Shopify/CJ authorization; no import/sync; no checkout/payment/customer-access/public-launch change.  
- **Evidence pointer:** **`artifacts/devops/slice-21af-b-cj-manual-product-staging-retry/20260514-145118/`** (local only; **not** committed).  

---

## 15. Slice 21AF-C docs closure (field spec completion)

- **Date:** 2026-05-14  
- **Result:** **PASS WITH NOTES** — **docs-only**; **no** Shopify Admin, theme, product rows, shipping, checkout/payment, or customer-access changes.  
- **What changed:** **§2** **CJ** reference storage (**variant SKU** only); **§3** exact per-SKU body assembly; **§4** blocked-claim lists; **§5** collection handling; **§6** rollback/removal; **§11** next **Slice 21AF-D**; non-approvals restated in **§1**.  
- **LLD:** **unchanged** — documentation only.

---

## 16. Slice 21AF-D execution note (bounded Shopify staging completion)

- **Date:** 2026-05-14  
- **Result:** **PASS** — bounded **Shopify Admin** staging completed for the three approved **CJ** draft rows.  
- **Products staged:** **CJYD230000901AZ** / **`beverage-bottle-oil-bottle-handle-holder`**; **CJYD211196101AZ** / **`usb-bag-sealer`**; **CJYD245830501AZ** / **`foldable-magnetic-phone-holder-desktop-tablet-stand`**.  
- **Execution summary:** new draft rows created; exact **Color** variant values applied (**Blue** / **Coffee Bear** / **Gun Gray**); **CJ** reference stored **only** in variant **SKU**; exact field-spec body copy used; exact approved tags used; existing **`controlled-pilot`** collection assigned; **no** media/images attached.  
- **Posture confirmed:** all three rows remain **`DRAFT`**; **publication count `0`** for all three; **media count `0`** for all three; **no** **`Supplier verified`** wording; **no** final pricing approval; **no** final delivery promise; **no** final claim approval; **no** checkout/payment/customer-access/public-launch change.  
- **Evidence pointer:** **`artifacts/devops/slice-21af-d-cj-manual-product-staging-retry/20260514-151847/`** (local only; **not** committed).  

---

## 17. Slice 21AG QA validation note (staged draft rows; Product Owner PASS WITH NOTES; docs only)

- **Date:** 2026-05-14  
- **Result:** **PASS WITH NOTES** — **Product Owner** accepted **QA** validation of staged **Shopify** draft rows against **this** field specification (**docs-only**; **no** Admin/theme/product/shipping/checkout/payment/customer-access changes in this pass).  
- **Evidence pointer:** **`artifacts/qa/slice-21ag-cj-3-sku-draft-row-validation/20260514-154224/`** (local only; **not** committed).  
- **Validated SKUs / variants / draft prices:** **CJYD230000901AZ** — **Color** / **Blue** — **R249**; **CJYD211196101AZ** — **Color** / **Coffee Bear** — **R279**; **CJYD245830501AZ** — **Color** / **Gun Gray** — **R699**.  
- **Accepted QA matrix:** product-row validation table **PASS**; field-spec alignment **PASS**; draft/restricted posture **PASS**; collection/tagging **PASS WITH NOTES**; SKU/variant mapping **PASS**; no-media posture **PASS**; claim/delivery/pricing wording **PASS**; public exposure / checkout exposure **PASS**.  
- **Collection hygiene (NOTE only — not a 21AG blocker):** **`controlled-pilot`** also contains four unrelated draft products — **`world-map-extended-mouse-pad`**, **`gizzu-usb-to-type-c-cable-2m`**, **`ugreen-4-in-1-usb-2-0-hub`**, **`acrylic-tablet-phone-stand`**. **Tracker blocker:** collection hygiene **must** be resolved before **public** collection exposure, **customer-access** go/no-go, or **`controlled-pilot`** collection **preview** validation.  
- **Preserved gates:** **no** checkout/payment enablement; **no** customer-access enablement; **no** **`Supplier verified`** approval; **no** final pricing/delivery/claims/public-launch approval; **no** media approval; **no** **CJ** app install/import/sync approval.  
- **Next slice (record):** **Slice 21AH** — **Security / Compliance** post-staging review — **`project-control`** **`## Slice 21AH`**.  
- **LLD:** **unchanged** — **Slice 21AG** validated existing staged rows only.
