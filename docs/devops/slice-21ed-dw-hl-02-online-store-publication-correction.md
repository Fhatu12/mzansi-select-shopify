# Slice 21ED — DW-HL-02 Online Store publication correction

**Document type:** DevOps / Platform execution note  
**Prepared:** 2026-05-21  
**Owner:** DevOps / Platform Engineer  
**Slice:** **21ED**  
**Store:** `dropshippoc.myshopify.com`  
**Preview theme:** `151207542967` (QA handoff — **not** pushed in this slice)

**Upstream:**

- **Slice 21EC** — rendered QA (`4151f84`) — **DW-HL-02** storefront **404**; Admin publications empty
- **Slice 21EB** — four-product Admin execution (`83daf45`) — **publish** for net-new rows did not persist for this handle

**Product Owner approval:** Bounded Admin execution on **`five-division-drawer-divider-preview`** only — **publish** to **Online Store**; preserve preview-only / non-purchasable posture. **No** other product or **CJ** changes.

---

## 1. DevOps verdict

**PASS**

**Online Store** publication applied for **DW-HL-02** only. Post-write read-back confirms publication, unchanged commerce safety fields, and unchanged preview tags. **No** rollback.

---

## 2. Pre-write checkpoint

| Item | Detail |
| --- | --- |
| **Method** | `shopify store execute -j` — read-only `productByHandle` |
| **Path** | `artifacts/devops/slice-21ed-pre-write-checkpoint/` |
| **Files** | `five-division-drawer-divider-preview.json`, `checkpoint-summary.json` |

### 2.1 Pre-write baseline (**DW-HL-02**)

| Field | Value |
| --- | --- |
| **Product GID** | `gid://shopify/Product/8577758888119` |
| **Handle** | `five-division-drawer-divider-preview` |
| **Status** | **ACTIVE** |
| **Title** | 5-Division Drawer Divider — Preview |
| **Vendor** | UCAN |
| **Product type** | Home & Living |
| **Tags** | `preview-only`, `non-purchasable`, `price-to-confirm`, `supplier-proof-in-progress`, `local-supplier-route` |
| **Variant SKU** | **HAF-SD-4160** |
| **Price** | **0.00** |
| **`availableForSale`** | **false** |
| **Inventory** | **0** / **DENY** / **tracked true** |
| **Media** | **0** |
| **Online Store publication** | **None** (`resourcePublicationsV2` **empty**) |

**21EC alignment:** Empty publications explain preview-theme **HTTP 404** on `/products/five-division-drawer-divider-preview`.

---

## 3. Admin write performed

| Item | Detail |
| --- | --- |
| **Action** | `publishablePublish` → **Online Store** only |
| **Publication ID** | `gid://shopify/Publication/169105293495` |
| **Mutation evidence** | `artifacts/devops/slice-21ed-post-write-checkpoint/publish-mutation.json` |
| **userErrors** | **[]** |

**Fields intentionally unchanged:** title, `descriptionHtml`, vendor, product type, tags, SEO, variant SKU, price, inventory, media, status.

**Out of scope (not touched):** `cable-tidies-set`, `compact-cutlery-drawer-organiser-preview`, `adjustable-aluminium-phone-tablet-stand-preview`, **CJ** rows, **DW-KS-01**, theme, import/sync, app install.

---

## 4. Post-write verification

| Check | Result |
| --- | --- |
| **Online Store publication** | **PASS** — `isPublished: true`, name **Online Store** |
| **Status** | **ACTIVE** ✓ |
| **Required tags** | All **5** present ✓ |
| **`Supplier verified`** | **Absent** ✓ |
| **`availableForSale`** | **false** ✓ |
| **Inventory** | **0** / **DENY** ✓ |
| **Price** | **0.00** (unchanged) ✓ |
| **Media count** | **0** ✓ |
| **SKU** | **HAF-SD-4160** (unchanged) ✓ |
| **Body / SEO** | Unchanged vs pre-write ✓ |
| **Publication widening** | **Online Store** only — **no** additional channels ✓ |

**Evidence path:** `artifacts/devops/slice-21ed-post-write-checkpoint/five-division-drawer-divider-preview.json`, `verification-summary.json`

---

## 5. Rollback

| Item | Result |
| --- | --- |
| **Rollback required?** | **No** |
| **Trigger** | None — no blocked-field drift |
| **Procedure if needed** | `publishableUnpublish` for **Online Store** only, using pre-write checkpoint; restore any accidental field change via `productUpdate` from checkpoint JSON |

---

## 6. Blocked fields / actions — confirmation

| Blocked item | Status |
| --- | --- |
| **Product create** | **Not** performed |
| **Import / sync / app install** | **Not** performed |
| **Media** | **0** — unchanged |
| **Price change** | **Not** changed |
| **Inventory availability** | **0** / **DENY** — unchanged |
| **`Supplier verified`** | **Not** introduced |
| **Final delivery / stock / warranty claims** | **Not** added |
| **Checkout / payment / customer** | **Not** enabled |
| **Theme push / live launch** | **Not** performed |
| **Other local products** | **Not** modified |
| **CJ products** | **Not** modified |

---

## 7. QA handoff

**Recommended next owner:** **QA / Test Engineer**

| Task | Detail |
| --- | --- |
| **Primary** | Re-run **DW-HL-02** PDP only: `/products/five-division-drawer-divider-preview?preview_theme_id=151207542967` |
| **Viewports** | Desktop **1366×768**; mobile **390×844** |
| **Smoke (if practical)** | Other **three** local PDPs unchanged — quick **200** + non-purchasable check |
| **Checks** | **21EC** checklist items **1–16** for **DW-HL-02** |
| **Evidence** | `artifacts/qa/slice-21ed-dw-hl-02-pdp-revalidation/` (local; **not** committed) |

---

## 8. Strict confirmations (this slice)

- **Single-product** publication correction only.
- **No** theme edit, theme push, live launch, import/sync, app install, media, or checkout widening.
- **No** credentials, customer/order/payment data, or supplier credentials in this doc.
- **`artifacts/devops/slice-21ed-*`** remains **gitignored** and **uncommitted**.

---

## Next owner

**QA / Test Engineer** — re-validate **DW-HL-02** rendered PDP on preview theme **`151207542967`**.
