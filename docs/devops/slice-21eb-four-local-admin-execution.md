# Slice 21EB — four-product local-first Admin execution

**Document type:** DevOps / Platform execution note  
**Prepared:** 2026-05-21  
**Owner:** DevOps / Platform Engineer  
**Slice:** **21EB**  
**Store:** `dropshippoc.myshopify.com`  
**Preview theme:** `151207542967` (QA handoff — **not** pushed in this slice)

**Upstream:**

- **Slice 21EA** — Admin/write plan (`1e5583c`, **PASS WITH NOTES**)
- **Slice 21DZ** — security review (`4e13e7e`, **PASS WITH NOTES**)
- **Product Owner approval:** bounded execution on **DW-TA-01**, **DW-HL-02**, **DW-KS-04**, **DW-OD-05** only — **21EA** allowed fields; **21EA** blocked actions remain blocked

**Execution tooling:** `shopify store execute` (Admin GraphQL); runner `tools/devops/run-slice-21eb-four-local-admin-execution.mjs` (local; **not** committed in this slice unless separately requested).

---

## 1. Admin execution verdict

**PASS WITH NOTES**

Bounded Admin execution completed for all **four** approved local-first preview products. Commerce safety checks **PASS** post-write. **No** rollback performed. **CJ** rows and **DW-KS-01** / **`sink-strainer-stainless-steel`** **not** modified.

**Notes:**

- **DW-KS-04** and **DW-OD-05** have **no** variant SKU set — supplier SKU was **not** specified in the PO execution brief; variant rows use **tracked** inventory with **0** / **DENY** only.
- **DW-TA-01** pre-write had **`availableForSale: true`** with **`tracked: false`** — corrected to **`availableForSale: false`** with **`tracked: true`** ( **21AR**-class fix).
- Rendered storefront QA is **out of scope** for this slice — handoff to **QA / Test Engineer**.

---

## 2. Pre-write checkpoint

| Item | Detail |
| --- | --- |
| **Method** | `shopify store execute -j` — read-only `productByHandle` + product search |
| **Path** | `artifacts/devops/slice-21eb-pre-write-checkpoint/` |
| **Summary** | `checkpoint-summary.json` |
| **Conflict search** | `conflict-search.json` — legacy demo organiser/stand rows exist; **no** handle collision with planned net-new slugs |

### 2.1 **DW-TA-01** — `cable-tidies-set` (existing)

| Field | Pre-write |
| --- | --- |
| **Product GID** | `gid://shopify/Product/8559570583735` |
| **Title** | Cable Tidies Set |
| **Vendor** | Mzansi Select Preview |
| **Product type** | Preview Catalogue |
| **Tags** | `preview-only`, `price-to-confirm`, `supplier-proof-in-progress`, `local-supplier-candidate`, `supplier-neat-freak` |
| **SKU** | **null** |
| **Price** | **0.00** |
| **`availableForSale`** | **true** (**drift** — corrected at write) |
| **Inventory** | **0** / **DENY** / **tracked false** |
| **Media** | **0** |
| **Online Store** | Published |

### 2.2 Net-new handles (pre-write)

| Handle | Pre-write state |
| --- | --- |
| `five-division-drawer-divider-preview` | **null** (created during execution) |
| `compact-cutlery-drawer-organiser-preview` | **null** |
| `adjustable-aluminium-phone-tablet-stand-preview` | **null** |

### 2.3 Out-of-scope confirmation (read-back after execution)

| Handle | Touched? | Post-check |
| --- | --- | --- |
| `sink-strainer-stainless-steel` (**DW-KS-01**) | **No** | Title/tags unchanged |
| `beverage-bottle-oil-bottle-handle-holder` | **No** | CJ tag set intact |
| `foldable-magnetic-phone-holder-desktop-tablet-stand` | **No** | CJ tag set intact |
| `usb-bag-sealer` | **No** | CJ tag set intact |

---

## 3. Admin writes performed

**CLI:** `shopify store execute --store dropshippoc.myshopify.com --allow-mutations -j`  
**Evidence:** `artifacts/devops/slice-21eb-mutations/` (local; **not** committed)

### 3.1 **DW-TA-01** — update `cable-tidies-set`

| Field | Changed? | Post-write value |
| --- | --- | --- |
| **Title** | **Yes** | Cable Tidies Set (100 pcs) — Preview |
| **descriptionHtml** | **Yes** | Preview-safe nylon **100** / **150 mm** copy + local-route honesty + not-available-to-buy |
| **Vendor** | **Yes** | DirectTech |
| **Product type** | **Yes** | Tech Accessories |
| **Tags** | **Yes** | `preview-only`, `non-purchasable`, `price-to-confirm`, `supplier-proof-in-progress`, `local-supplier-route` |
| **Variant SKU** | **Yes** | **PCB-CT-25150** |
| **Price** | **No** | **0.00** |
| **`availableForSale`** | **Yes** | **false** (was **true**) |
| **Inventory** | **Yes** | **0** / **DENY** / **tracked true** |
| **SEO description** | **Yes** | Preview-safe meta description |
| **Media** | **No** | **0** |
| **Collections** | **Yes** | **Tech Accessories**, **Office & Desk** (membership reinforced) |
| **Publication** | **No** | Online Store only — unchanged |

### 3.2 **DW-HL-02** — create `five-division-drawer-divider-preview`

| Field | Action |
| --- | --- |
| **Product GID** | `gid://shopify/Product/8577758888119` (**created**) |
| **Title** | 5-Division Drawer Divider — Preview |
| **Vendor** | UCAN |
| **Product type** | Home & Living |
| **Variant SKU** | **HAF-SD-4160** |
| **Price / inventory** | **0.00**, **0**, **DENY**, **AFS false**, **tracked true** |
| **Tags** | Required preview set + `local-supplier-route` |
| **Publication** | **publishablePublish** → Online Store |
| **Collection** | **Home & Living** |

### 3.3 **DW-KS-04** — create `compact-cutlery-drawer-organiser-preview`

| Field | Action |
| --- | --- |
| **Product GID** | `gid://shopify/Product/8577759248567` (**created**) |
| **Title** | Compact Cutlery Drawer Organiser — Preview |
| **Vendor** | Decorum & Co |
| **Product type** | Kitchen & Storage |
| **Variant SKU** | **null** (not in PO SKU list) |
| **Price / inventory** | **0.00**, **0**, **DENY**, **AFS false** |
| **Copy** | BPA-free material fact; **cutlery not included**; min drawer height ~8 cm (desk — verify) |
| **Collection** | **Kitchen & Storage** |

### 3.4 **DW-OD-05** — create `adjustable-aluminium-phone-tablet-stand-preview`

| Field | Action |
| --- | --- |
| **Product GID** | `gid://shopify/Product/8577759445175` (**created**) |
| **Title** | Adjustable Aluminium Phone & Tablet Stand — Preview |
| **Vendor** | CellTime |
| **Product type** | Office & Desk |
| **Variant SKU** | **null** (not in PO SKU list) |
| **Price / inventory** | **0.00**, **0**, **DENY**, **AFS false** |
| **Copy** | No MagSafe/universal/charging claims; not for in-vehicle use |
| **Collection** | **Office & Desk** |

---

## 4. Post-write verification

| Check | All four in-scope products |
| --- | --- |
| **Required tags** | **PASS** — `preview-only`, `non-purchasable`, `price-to-confirm`, `supplier-proof-in-progress`, `local-supplier-route` |
| **`availableForSale`** | **PASS** — **false** |
| **Inventory** | **PASS** — **0** / **DENY** |
| **Media** | **PASS** — **0** |
| **`Supplier verified`** | **PASS** — absent |
| **Price** | **PASS** — **0.00** placeholder |
| **Publication** | **PASS WITH NOTES** — Online Store published (preview programme pattern; store remains password-gated) |
| **Blocked claims** | **PASS** — no final price/delivery/stock/warranty on storefront copy |

**Evidence path:** `artifacts/devops/slice-21eb-post-write-checkpoint/` + `verification-summary.json`

---

## 5. Rollback

| Item | Result |
| --- | --- |
| **Rollback required?** | **No** |
| **Reason** | No blocked-field regression; commerce gates intact |
| **Procedure** | Pre-write JSON per handle under `artifacts/devops/slice-21eb-pre-write-checkpoint/`; net-new rows may be archived only with **PO** approval |

---

## 6. Blocked fields / actions — confirmation

| Blocked item | Status |
| --- | --- |
| **`Supplier verified`** | **Not** introduced |
| **Media** | **0** on all four |
| **Inventory availability** | **0** / **DENY** — unchanged posture |
| **`availableForSale: true`** | **Not** on in-scope rows post-write |
| **Final price / delivery / stock / warranty claims** | **Not** introduced |
| **Import / sync / app install** | **Not** performed |
| **Publish / live launch / theme push** | **Not** performed |
| **Checkout / payment / customer** | **Not** enabled |
| **DW-KS-01** | **Not** touched |
| **CJ rows (3)** | **Not** touched |

---

## 7. QA handoff

**Recommended next owner:** **QA / Test Engineer**

| Task | Detail |
| --- | --- |
| **Rendered PDP validation** | Preview theme **`151207542967`** |
| **Handles** | `cable-tidies-set`, `five-division-drawer-divider-preview`, `compact-cutlery-drawer-organiser-preview`, `adjustable-aluminium-phone-tablet-stand-preview` |
| **Viewports** | Desktop **1366×768**; mobile **390×844** |
| **Smoke** | Homepage, search, **controlled-pilot** collection |
| **Checks** | No Add to Cart / Buy Now; no checkout exposure; no media; no **Supplier verified**; no final price/delivery claims; no horizontal overflow |
| **Evidence** | `artifacts/qa/slice-21eb-four-local-pdp-validation/` (local; **not** committed) |

---

## 8. Strict confirmations (this slice)

- **No** import/sync, app install, theme push, live launch, checkout/payment/customer widening, **`Supplier verified`**, or media enablement.
- **No** credentials, customer/order/payment data, or supplier credentials in this doc.
- **`artifacts/devops/slice-21eb-*`** remains **gitignored** and **uncommitted**.

---

## Next owner

**QA / Test Engineer** — rendered PDP validation on preview theme **`151207542967`**.
