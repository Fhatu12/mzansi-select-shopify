# Mzansi Select CJ 3-SKU manual staging field specification v1

**Document type:** Bounded manual Shopify product staging — **exact field values** (planning record only)  
**Prepared:** 2026-05-14  
**Owner:** Product Owner  
**Slice:** **21AE** — **PASS WITH NOTES** (Product Owner accepted; **docs-only** — **no** Shopify Admin execution implied by this document alone)  
**Related plan:** [mzansi-select-cj-imported-supplier-staging-plan-v1.md](mzansi-select-cj-imported-supplier-staging-plan-v1.md)  
**Related tracker:** [docs/project-control.md](../project-control.md) — **`## Slice 21AE`**

---

## 1. Scope and non-approvals

- This file records **exact** intended **Shopify Admin** field values for a **later** bounded **Slice 21AF** manual staging execution (**DevOps** retry), **only** after **Product Owner** go/no-go on that execution slice.
- **Does not** approve: **CJ** app install; Shopify authorization; import/sync; checkout/payment; customer access; public launch; **`Supplier verified`**; **final** pricing; **final** delivery promises; **final** product claims; theme publish; or purchasable/live catalogue exposure.
- **Posture:** **Draft / restricted only** for the three SKUs below. **Not purchasable** until **Product Owner** go/no-go on customer-facing enablement.
- **Media:** **No** images/media for **Slice 21AF**. **CJ** image references remain **blocked** pending a **separate** **Product Owner** media/content-use decision.

---

## 2. Global product body copy (all three SKUs)

Append to the product **description** (body HTML) in this order:

**Imported route — delivery (exact):**

> Imported supplier-route item. Delivery timing varies by supplier, warehouse, product attributes, and courier method. Final delivery estimate must be confirmed before fulfilment.

**Controlled pilot (exact):**

> This item is part of a controlled pilot and may have extended imported-supplier delivery timing. Delivery estimate will be confirmed before fulfilment.

**Refund / cancellation / support — imported route (exact):**

> This controlled pilot item is fulfilled through an imported supplier route. If fulfilment cannot proceed because of stock, supplier cost, delivery availability, or fulfilment constraints, we may contact you before fulfilment to confirm next steps, replacement options, cancellation, or refund where applicable.

---

## 3. Pricing posture (all three SKUs)

- Listed **draft staging prices** below are **exact draft staging prices only**.
- They are **not** final public prices.
- They **do not** approve final pricing.
- They **must** be rechecked against **CJ** landed cost, **FX**, support buffer, and **Product Owner** commercial acceptance **before** customer access.

---

## 4. Per-SKU field matrix

### 4.1 `CJYD230000901AZ` — Beverage & Oil Bottle Handle Holder

| Field | Value |
| --- | --- |
| **Handle** | `beverage-bottle-oil-bottle-handle-holder` |
| **Title** | Beverage & Oil Bottle Handle Holder |
| **Variant option** | **Color** = **Blue** |
| **Product type** | Kitchen & Storage |
| **Draft staging price** | **R249** |
| **Collection** | `controlled-pilot` |
| **Tags** | `pilot`, `pilot-cj`, `imported-supplier`, `manual-review`, `controlled-pilot`, `kitchen-storage` |
| **CJ reference** | `CJYD230000901AZ` (internal / planning; store as SKU or metafield per **Slice 21AF** execution checklist) |
| **Visibility** | Draft / restricted only — not purchasable until **Product Owner** go/no-go |
| **Media** | None for **21AF** |

### 4.2 `CJYD211196101AZ` — USB Bag Sealer

| Field | Value |
| --- | --- |
| **Handle** | `usb-bag-sealer` |
| **Title** | USB Bag Sealer |
| **Variant option** | **Color** = **Coffee Bear** |
| **Product type** | Kitchen & Storage |
| **Draft staging price** | **R279** |
| **Collection** | `controlled-pilot` |
| **Tags** | `pilot`, `pilot-cj`, `imported-supplier`, `manual-review`, `controlled-pilot`, `kitchen-storage`, `claim-caution` |
| **CJ reference** | `CJYD211196101AZ` |
| **Visibility** | Draft / restricted only — not purchasable until **Product Owner** go/no-go |
| **Media** | None for **21AF** |

### 4.3 `CJYD245830501AZ` — Foldable Magnetic Phone Holder & Desktop Tablet Stand

| Field | Value |
| --- | --- |
| **Handle** | `foldable-magnetic-phone-holder-desktop-tablet-stand` |
| **Title** | Foldable Magnetic Phone Holder & Desktop Tablet Stand |
| **Variant option** | **Color** = **Gun Gray** |
| **Product type** | Tech Accessories |
| **Draft staging price** | **R699** |
| **Collection** | `controlled-pilot` |
| **Tags** | `pilot`, `pilot-cj`, `imported-supplier`, `manual-review`, `controlled-pilot`, `tech-accessories`, `claim-caution` |
| **CJ reference** | `CJYD245830501AZ` |
| **Visibility** | Draft / restricted only — not purchasable until **Product Owner** go/no-go |
| **Media** | None for **21AF** |

---

## 5. Reserve only (no staging in 21AF)

| CJ reference | Working title |
| --- | --- |
| `CJYD213778501AZ` | Soap Grinder / Wall-Mounted Soap Box |

---

## 6. Rejected / deferred (no staging)

| CJ reference | Reason |
| --- | --- |
| `CJYD197888501AZ` | Blocked by CJ human verification |
| `CJJJJTCF09109-White` | Commercially weak shipping / landed-cost signal |

---

## 7. Next slice (record)

- **Slice 21AF** — bounded **DevOps** manual **Shopify** staging **retry** for the approved **CJ** **3**-**SKU** field values in this document — **separate** **Product Owner** execution go/no-go; **no** **Admin** work in **21AE**.

---

## 8. Document control

- **Version:** 1.0  
- **Next review:** **DevOps / Platform Engineer** — **Slice 21AF** execution planning only until **Product Owner** approves bounded staging retry.

---

## 9. Slice 21AF execution note (blocked before Shopify Admin change)

- **Date:** 2026-05-14
- **Result:** **BLOCKED** before any **Shopify Admin** access or mutation.
- **Why execution stopped:** under the **Slice 21AF** rule to use **only** this field-spec doc as the exact staging source of truth, the following execution-critical mappings remain ambiguous:
  - exact **CJ** reference storage mapping (**SKU** vs **metafield**), especially for **`CJYD230000901AZ`** where the current row explicitly says “store as SKU or metafield per **Slice 21AF** execution checklist”
  - exact product-body payload rule for each SKU beyond the global appended wording blocks in **§2**
  - exact execution source for claim controls / blocked claims
  - exact rollback/removal notes source
  - exact **`controlled-pilot`** collection handling rule if that collection is absent or differs in **Admin**
- **No execution occurred:** no product create/update; no publication; no collection mutation; no media/image upload; no **CJ** image reference use; no app install; no Shopify/CJ authorization; no import/sync; no checkout/payment/customer-access/public-launch change.
- **Evidence pointer:** **`artifacts/devops/slice-21af-cj-manual-product-staging-retry/20260514-143635/`** (local only; **not** committed).
- **Next owner:** **Product Owner / User** to resolve the missing exact decisions before any later bounded **Slice 21AF** retry.
