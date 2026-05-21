# Slice 21DL — current imported product audit (read-only)

**Document type:** Read-only Shopify product audit (docs summary)  
**Prepared:** 2026-05-21  
**Owner:** Product Manager  
**Slice:** **21DL**  
**Store:** `dropshippoc.myshopify.com`  
**Context:** Internal restricted preview **accepted** (**21DF**). Supplier proof **incomplete** (**21DK** — **0** fresh proof passed). **No** staging-plan or Admin/write work approved in this slice.

**Method:** Shopify CLI **`shopify store execute`** — read-only Admin GraphQL (`read_products` class). **No** mutations, **no** app install, **no** import/sync.

**Raw evidence (local; not committed):** `artifacts/suppliers/slice-21dl/` — `products-page1.json`, `products-summary.json`, `products-audit.csv`, `audit-classification.json`.

**Unverified rule:** This audit reflects Admin state at capture time only. It does **not** approve launch, **`Supplier verified`**, final pricing, or checkout enablement.

---

## 1. Executive verdict

**Verdict:** **PASS WITH NOTES** — read-only audit complete.

| Finding | Detail |
| --- | --- |
| **Products in store** | **40** (single page; **no** further pagination) |
| **Programme-related rows** | **11** (3 **CJ** controlled-pilot + 4 **Gadgetgyz** pilot drafts + 4 **Slice 13I** preview listings) |
| **Horizon / demo catalogue** | **~18** legacy **ACTIVE** products (full media, non-programme vendors) |
| **Fresh import needed for 21DG top 8?** | **No** for **2** **CJ** staging-plan candidates — **already exist**; **yes** later only after proof for SKUs **not** in Admin |
| **21AL DRAFT posture drift** | **3** **CJ** rows are **`ACTIVE`** in this read (not **`DRAFT`** as **21AL** recorded) — tags still **`preview-only`** / **`non-purchasable`**; variants **`availableForSale: false`** |

**Recommended Product Owner decision:** **Do not** approve new import/staging writes until **Option A** manual **CJ** calculator proof (**21DK**). Use this audit to treat **staging-plan** as **hygiene/review** on **existing** rows (**DG-KS-01**, **DG-OD-01** handles), **not** net-new product creation.

---

## 2. Audit method

```bash
shopify store execute --store dropshippoc.myshopify.com \
  --query @artifacts/suppliers/slice-21dl/products-query.graphql
```

**Fields read:** title, handle, product GID (truncated in tables), status, vendor, product type, tags, created/updated timestamps, variant count, SKU, price, compare-at, inventory quantity/policy, `availableForSale`, media count, Online Store publication, collections, `onlineStoreUrl`.

**Not read:** orders, customers, payments, drafts checkout, or supplier app credentials.

---

## 3. Product inventory summary

| Metric | Value |
| --- | --- |
| **Total products** | **40** |
| **ACTIVE** | **25** |
| **DRAFT** | **14** |
| **ARCHIVED** | **0** |
| **With `preview-only` tag** | **7** |
| **With `cj-imported-supplier` tag** | **3** |
| **In `controlled-pilot` collection** | **3** (all **CJ**) |
| **Variants `availableForSale: true` (any variant)** | **36** products (theme/checkout guards still apply on preview routes) |
| **CJ rows `availableForSale: false`** | **3** (**all** controlled-pilot **CJ**) |

---

## 4. Programme and supplier-signal inventory

### 4.1 CJ controlled-pilot (3 products) — **supplier-proof-candidate**

| Handle | Title (short) | Status | Vendor | SKU | Price | Inv | Policy | AFS | Media | Online Store pub. | Collections |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `beverage-bottle-oil-bottle-handle-holder` | Beverage & Oil Bottle Handle Holder | **ACTIVE** | DropShipPOC | **CJYD230000901AZ** | **R249** | 0 | DENY | **false** | 0 | **Yes** | `controlled-pilot` |
| `usb-bag-sealer` | USB Bag Sealer | **ACTIVE** | DropShipPOC | **CJYD211196101AZ** | **R279** | 0 | DENY | **false** | 0 | **Yes** | `controlled-pilot` |
| `foldable-magnetic-phone-holder-desktop-tablet-stand` | Foldable Magnetic Phone & Tablet Stand | **ACTIVE** | DropShipPOC | **CJYD245830501AZ** | **R699** | 0 | DENY | **false** | 0 | **Yes** | `controlled-pilot` |

**Tags (all three):** `cj-imported-supplier`, `controlled-pilot`, `non-purchasable`, `preview-only`, `price-to-confirm`  
**Supplier signal:** **CJ** (SKU prefix **CJYD**)

**Note:** **21AR** class concern (`availableForSale: true`) is **not** present on these three variants in this audit.

---

### 4.2 Slice 13I preview listings (4 ACTIVE + 1 related DRAFT)

| Handle | Status | Vendor | SKU | Price | AFS | Media | Online Store | Collections | Tags (signal) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `sink-strainer-stainless-steel` | ACTIVE | Mzansi Select Preview | — | **0.00** | true | 0 | Yes | `kitchen-storage` | preview-only; supplier-proof-in-progress; **Neat Freak** historical tag |
| `compact-organiser-basket` | ACTIVE | Mzansi Select Preview | — | **0.00** | true | 0 | Yes | `home-living`, `kitchen-storage` | same |
| `mini-plastic-divider-basket` | ACTIVE | Mzansi Select Preview | — | **0.00** | true | 0 | Yes | `kitchen-storage`, `office-desk` | same |
| `cable-tidies-set` | ACTIVE | Mzansi Select Preview | — | **0.00** | true | 0 | Yes | `office-desk`, `tech-accessories` | same; **Gadgetgyz** SKU **PCB-CT-25150** **not** on variant |
| `acrylic-tablet-phone-stand` | **DRAFT** | **Gadgetgyz** | **DP0402** | **R249** | true | 0 | **No** | `office-desk`, `tech-accessories` | **pilot-gadgetgyz** era tags; overlaps **DG-OD-02** |

**Supplier signal:** **local/preview** + historical **Neat Freak** tag (not a live supplier route). **Ecomstock** SKU **P5260S** (**DG-KS-03**) — **no** matching Admin SKU.

---

### 4.3 Gadgetgyz controlled-pilot drafts (4) — **imported, not proofed**

| Handle | SKU | Status | Price | Online Store | In `controlled-pilot` |
| --- | --- | --- | --- | --- | --- |
| `ugreen-4-in-1-usb-2-0-hub` | CR106-20277 | DRAFT | R279 | No | No (**21AL** removed) |
| `gizzu-usb-to-type-c-cable-2m` | GCPU2C2 | DRAFT | R129 | No | No |
| `world-map-extended-mouse-pad` | 74886 | DRAFT | R219 | No | No |
| `acrylic-tablet-phone-stand` | DP0402 | DRAFT | R249 | No | No |

**Tags:** `pilot`, `pilot-21`, `pilot-gadgetgyz`, `manual-fulfilment`, `supplier-gadgetgyz`  
**Supplier signal:** **Gadgetgyz** — **closed** for current pilot execution (**21W-B**); keep **DRAFT** / unpublished.

---

### 4.4 Other supplier-route signals in catalogue

| Signal | Found in Admin? |
| --- | --- |
| **EPROLO** | **No** products/tags/SKUs |
| **DSers / AliExpress** | **No** dedicated signals |
| **ZA Dropshipping** | **No** dedicated signals |
| **CJ** (beyond 3 SKUs) | **No** extra **CJYD** SKUs |
| **Unknown / manual** | **~18** legacy **Everyday Home** (and similar) theme demo products |

---

## 5. Storefront exposure

| Group | Online Store published | `onlineStoreUrl` | Preview posture |
| --- | --- | --- | --- |
| **3× CJ controlled-pilot** | **Yes** | **null** (expected for password-gated / non-indexed preview) | Password-protected store + theme **`preview-only`** / **`non-purchasable`** tags; **21CJ**/**21CL** routes validated separately |
| **4× Slice 13I preview** | **Yes** | **null** | Placeholder **R0.00**; **`price-to-confirm`** |
| **4× Gadgetgyz pilot drafts** | **No** | **null** | Not on Online Store publication |
| **Legacy catalogue (~18)** | Mostly **Yes** | Often **null** on sample rows | Live-theme demo inventory; **not** launch candidates |

**Collection hygiene:** **`controlled-pilot`** contains **exactly 3** **CJ** handles — matches **21AL** post-cleanup expectation. **Gadgetgyz** pilot rows correctly **excluded** from that collection but still exist as **DRAFT** products.

---

## 6. Commerce readiness

| Check | CJ controlled-pilot (3) | Preview 13I (4 ACTIVE) | Gadgetgyz drafts (4) |
| --- | --- | --- | --- |
| **Price** | Staged planning (**R249** / **R279** / **R699**) — **not** final | **R0.00** placeholder | Pilot planning prices |
| **Compare-at** | Blank | Blank | Blank |
| **Inventory** | **0**, **DENY** | **0**, **DENY** | **0**, **DENY** |
| **`availableForSale`** | **false** | **true** (theme blocks non-positive / preview) | **true** (unpublished) |
| **Media** | **0** | **0** | **0** |
| **Add to Cart / Buy Now** | Theme + tags should keep disabled on preview PDPs (**21CJ** baseline) | Disabled via preview-safe pricing/tags | N/A (draft/unpublished) |

**Checkout/payment/customer access:** **Not enabled** by this audit; **no** change recommended.

---

## 7. Product classification (all 40)

| Classification | Count | Description |
| --- | --- | --- |
| **supplier-proof-candidate-cj-controlled-pilot** | **3** | **CJ** imported rows in **`controlled-pilot`** with preview-safety tags |
| **approved-preview-product** | **4** | **Slice 13I** **`preview-only`** + **`price-to-confirm`** |
| **imported-not-proofed-gadgetgyz-pilot** | **4** | **Gadgetgyz** **DRAFT** pilot era — defer / cleanup later |
| **stale-theme-catalogue-live** | **18** | Pre-programme **ACTIVE** demo products with media |
| **deferred-draft-unknown** | **10** | Other **DRAFT** rows without programme tags |
| **unknown** | **1** | Unclassified |

**unsafe/risky product (commerce-enabled live SKU):** **0** identified under strict price>0 + published + AFS true rule among programme rows. Legacy demo products may still show **AFS true** with inventory — store remains **password-gated**; treat as **catalogue noise**, not launch candidates.

---

## 8. Comparison to launch-candidate programme

### 8.1 Three known CJ controlled-pilot PDP handles

| Expected handle | Found | Overlaps **21DG** ID |
| --- | --- | --- |
| `beverage-bottle-oil-bottle-handle-holder` | **Yes** | **DG-KS-01** |
| `usb-bag-sealer` | **Yes** | Not in top 8 (bag sealer — claim caution) |
| `foldable-magnetic-phone-holder-desktop-tablet-stand` | **Yes** | **DG-OD-01** |

### 8.2 Top 8 (**21DH** / **21DK**) vs Admin

| ID | Programme SKU | Shopify row | Audit note |
| --- | --- | --- | --- |
| **DG-KS-01** | **CJYD230000901AZ** | **Exists** — `beverage-bottle-oil-bottle-handle-holder` | **Staging-plan overlap** — row exists; proof still open |
| **DG-OD-01** | **CJYD245830501AZ** | **Exists** — `foldable-magnetic-phone-holder-desktop-tablet-stand` | **Staging-plan overlap** |
| **DG-KS-03** | **P5260S** | **Partial** — `sink-strainer-stainless-steel` exists but **no** SKU **P5260S** | Needs SKU linkage or import decision later |
| **DG-TA-01** | **PCB-CT-25150** | **Partial** — `cable-tidies-set` exists but **no** SKU | Needs variant SKU update after proof |
| **DG-OD-02** | **DP0402** | **Exists** — `acrylic-tablet-phone-stand` (**DRAFT**) | Overlap; **Gadgetgyz** pilot row |
| **DG-HL-01** | TBD | **No** | Not imported |
| **DG-OD-03** | TBD | **No** | Not imported |
| **DG-TA-03** | TBD | **No** | Not imported |

### 8.3 Twenty launch candidates (**21DG**)

**None** of the remaining **21DG** desk-only candidates exist as dedicated imported products. Catalogue expansion still **blocked** on supplier proof, not on accidental duplication in Admin.

---

## 9. Safe to keep vs defer vs cleanup later

### 9.1 Safe to keep in restricted preview (current posture)

| Product group | Why |
| --- | --- |
| **3× CJ controlled-pilot** | Correct collection; preview tags; **AFS false**; no media; aligned with **21CJ** PDP preview chain |
| **4× Slice 13I preview ACTIVE** | **`preview-only`**, **R0.00**, zero media — consistent with preview safety |

### 9.2 Keep hidden / deferred

| Product group | Why |
| --- | --- |
| **4× Gadgetgyz DRAFT** | Pilot closed (**21W-B**); unpublished; not in **`controlled-pilot`** |
| **10× other DRAFT** | No launch approval |
| **18× legacy ACTIVE demo** | Theme/merch demo; not part of Mzansi Select proof programme |

### 9.3 Do not use for launch planning yet

- All rows lacking fresh **21DK**/**21AB**-class **ZA** economics proof  
- **DG-HL-01**, **DG-OD-03**, **DG-TA-03** (no Admin product)  
- **USB bag sealer** exists but is **not** a top-8 **21DK** approved candidate  

### 9.4 Cleanup candidates (later, separate approved slice)

| Item | Suggested later action |
| --- | --- |
| **Gadgetgyz** pilot **DRAFT** rows | Archive/remove after PO confirms pilot abandonment |
| **Legacy demo products** | Catalogue hygiene vs live theme — **out of scope** for supplier proof |
| **CJ `ACTIVE` vs historical `DRAFT` docs** | Reconcile documentation (**21AL**/**21AG**) vs current Admin read — **no** automatic status change |
| **Missing SKUs** on preview handles (`cable-tidies-set`, `sink-strainer`) | Variant SKU update only after proof + PO approval |

---

## 10. Staging-plan overlap conclusion

| Question | Answer |
| --- | --- |
| Do **DG-KS-01** / **DG-OD-01** already exist? | **Yes** — full product rows with correct **CJ** variant SKUs |
| Is new **import** required for staging-plan discussion? | **No** — discussion is **review/hygiene** (tags, copy, proof fields), **not** create-from-supplier |
| Can PO move to staging-plan on current proof? | **Not** on fresh proof — **21DK** still **watch**; **21AB** inheritance only if PO accepts **Option B** |
| Risk if staging executed without proof | Price/tags may imply readiness; **Supplier verified** still **blocked** |

---

## 11. Product Owner decision options

| Option | Description | Recommendation |
| --- | --- | --- |
| **A — Manual CJ calculator proof first** | Close **21DK** gap for **DG-KS-01** / **DG-OD-01** before any staging-plan write slice | **Recommended** |
| **B — Staging-plan docs only (no Admin)** | Use this audit + **21AB** to draft a bounded staging **plan** for **existing** two handles | Acceptable **with notes** |
| **C — Continue supplier search** | No new imports until **HL/OD/TA** SKUs locked | Parallel |
| **D — Reduce launch depth** | Treat **2** existing **CJ** rows as only programme products | Aligns with **Option B** depth |

---

## 12. Sensitive data and artifacts

| Check | Result |
| --- | --- |
| Passwords/tokens/cookies in committed doc | **None** |
| Customer/order/payment data | **Not accessed** |
| **`artifacts/suppliers/slice-21dl/`** | **Gitignored** |
| Product GIDs in committed doc | **Truncated / by handle** only (full GIDs in local JSON only) |

---

## Strict confirmations (this slice)

- **Read-only** — **no** Admin mutation, import/sync, app install, publish, theme push, checkout, **`Supplier verified`**, or media enablement.
- **`artifacts/`** **not** committed.

## Next owner

**Product Owner** — confirm **A** then **B** (staging-plan **docs** only) vs hold.  
**Product Manager** — optional **21DL.1** doc refresh if Admin product **status** reconciliation is approved (separate write slice).
