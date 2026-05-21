# Slice 21EI — four-product media upload planning (docs only)

**Document type:** Field-level media upload planning and Admin/write spec  
**Prepared:** 2026-05-21  
**Owner:** Product Manager  
**Slice:** **21EI**  
**Store:** `dropshippoc.myshopify.com`  
**Preview theme:** `151207542967` (restricted preview — **21DF**, **21EE**)

**Upstream:**

- **Slice 21EH** — media and demo cleanup plan (`5b3485d`, **PASS WITH NOTES**)
- **Slice 21EG** — catalogue/media audit (`2c9e790`) — **four** handles at **0** Admin media
- **Slice 21EE** — four PDP validation (**PASS**)
- **Slice 21EB** — four-product Admin execution (`83daf45`) — media **blocked**
- **Slice 21DZ** — security review (`4e13e7e`) — media **blocked** until gates close

**Product Owner approvals (this slice):**

- **A** — neutral image source pack for **four**
- **C** — **21EI** media upload planning (this document)
- **D** — **T1** demo cleanup scope first (**21EK** track — **not** in **21EI** scope)

**Unverified rule:** Desk proof and supplier pages do **not** grant image-use rights. **No** upload, image generation, or Admin mutation in **21EI**.

---

## 1. Executive verdict

**PASS WITH NOTES**

A **bounded field-level plan** is ready for **future** Admin media upload on the **accepted four** local-first preview products only. **Restricted preview** may continue on **theme placeholders** until **21EJ** completes with **G1–G2** gates and post-upload QA (**21EL**).

**Not approved in this slice:** media upload, image generation, product copy/price/inventory/tag changes, archive/cleanup, publication changes, theme push, launch, or checkout enablement.

| Area | **21EI** outcome |
| --- | --- |
| **Source policy** | Programme-owned **neutral** heroes **first**; local photography **preferred upgrade**; supplier media **blocked** without explicit rights |
| **Per-product spec** | **1** hero required; **optional** second image per product — filenames, alt text, dimensions defined in **§3** |
| **Future Admin write** | **Media attach only** on **four** handles — **§4** / **§5** |
| **QA / rollback** | **§6** / **§7** — evidence under **`artifacts/`** only |

---

## 2. Image source policy

### 2.1 Preferred sources (execution order)

| Priority | Source | Use | PO status (**21EH** **A**) |
| --- | --- | --- | --- |
| **1** | **Programme-owned neutral pack** | Square hero, white/neutral desk context; no supplier logo | **Approved** for planning |
| **2** | **Original local photography** | Hero + optional detail after brief | **Approved** as parallel upgrade path |
| **3** | **Supplier-provided file** | Hero only | **Blocked** until per-product **image-use PO** + Security |
| **4** | **Licensed generic stock** | Last resort | Requires separate **PO** licence record |

### 2.2 Blocked sources

| Blocked source | Reason |
| --- | --- |
| **Supplier website scrape** without written permission | Rights unknown (**21EG**, **21DZ**) |
| **Demo import CDN images** from other handles | **Not** reusable — rights unknown |
| **CJ / Gadgetgyz / ZA Dropshipping** catalogue assets | Out of scope lanes |
| **AI lifestyle with identifiable people** | Consent / misleading risk |
| **Images with price, sale, shipping, stock text** | Commerce/claim violation |
| **Images implying `Supplier verified`** | Forbidden |

### 2.3 Claim and overlay rules (all sources)

- **No** text overlays: price, “sale”, “free shipping”, “in stock”, warranty, delivery window.
- **No** certification badges unless verified and separately approved (default: **none**).
- **No** `Supplier verified` visual or watermark.

### 2.4 Image-use rights gates (required before **21EJ**)

| Gate | Owner | Blocks |
| --- | --- | --- |
| **G1** | **Product Owner** | Per-handle: source type + file list + alt text sign-off |
| **G2** | **Security / Compliance Engineer** | Misleading scale, watermarks, claim overlays |
| **G3** | **Operator** (optional) | SKU/sample match where SKU exists (**DW-TA-01** **PCB-CT-25150**) |
| **G4** | **21EI** plan acceptance | **21EJ** — this document |

**Tag note:** `image-permission-confirmed` is **not** added in **21EJ** unless **PO** + Security explicitly approve tag change in a separate scope — default **21EJ** is **media-only**.

### 2.5 Technical defaults (all four)

| Field | Value |
| --- | --- |
| **Master dimensions** | **2048×2048** px minimum; **1:1** aspect preferred |
| **Format** | **JPEG** (`.jpg`) or **WebP**; sRGB; strip GPS EXIF |
| **Max images per product (first pass)** | **1** hero required; **2** total maximum |
| **Position** | Hero = position **1**; secondary = position **2** |

---

## 3. Product media field spec

**Baseline (all four):** Admin media count **0** pre-upload (**21EG** / **21EB**). Post-**21EJ** target: **1** or **2** images only.

### 3.1 **DW-TA-01** — `cable-tidies-set`

| Field | Spec |
| --- | --- |
| **Launch ID** | **DW-TA-01** |
| **Product GID (reference)** | `gid://shopify/Product/8559570583735` |
| **Variant SKU** | **PCB-CT-25150** |
| **Images allowed** | **1** required; **2** max |
| **Hero concept** | Pack flat-lay — **100** black nylon ties **150 mm** on neutral white/grey surface |
| **Secondary concept (optional)** | Single tie with ruler/scale reference — length visible |
| **Filename — hero** | `mzansi-cable-tidies-set-hero-01.jpg` |
| **Filename — secondary** | `mzansi-cable-tidies-set-detail-02.jpg` |
| **Alt text — hero** | `Cable Tidies Set (100 pcs) — preview product image` |
| **Alt text — secondary** | `150 mm nylon cable tie — preview scale reference` |
| **Crop guidance** | Centre product; **≥85%** frame coverage; even lighting; no harsh shadows |
| **Image-use risk** | **Low** |
| **Claim restrictions in image** | **No** “heavy duty”, tensile/load claims, electrical cert badges, price stickers |
| **Approval before upload** | **G1–G2**; **G3** SKU/pack match vs **13O** / **DirectTech** |

### 3.2 **DW-HL-02** — `five-division-drawer-divider-preview`

| Field | Spec |
| --- | --- |
| **Launch ID** | **DW-HL-02** |
| **Product GID (reference)** | `gid://shopify/Product/8577758888119` |
| **Variant SKU** | **HAF-SD-4160** |
| **Images allowed** | **1** required; **2** max |
| **Hero concept** | Divider alone on white — **five** compartments clearly visible, top-down or **45°** angle |
| **Secondary concept (optional)** | In-drawer context with generic stationery — **no** branded props |
| **Filename — hero** | `mzansi-five-division-drawer-divider-preview-hero-01.jpg` |
| **Filename — secondary** | `mzansi-five-division-drawer-divider-preview-context-02.jpg` |
| **Alt text — hero** | `5-Division Drawer Divider — preview product image` |
| **Alt text — secondary** | `Drawer divider in drawer — preview context image` |
| **Crop guidance** | Full tray in frame; compartments in focus; **no** extreme wide-angle distortion |
| **Image-use risk** | **Low–medium** |
| **Claim restrictions in image** | **No** “fits all drawers”; **no** overloaded compartments implying unrealistic capacity |
| **Approval before upload** | **G1–G2**; optional dimension note in alt only if verified |

### 3.3 **DW-KS-04** — `compact-cutlery-drawer-organiser-preview`

| Field | Spec |
| --- | --- |
| **Launch ID** | **DW-KS-04** |
| **Product GID (reference)** | `gid://shopify/Product/8577759248567` |
| **Variant SKU** | **null** (desk — no SKU on variant) |
| **Images allowed** | **1** required; **2** max |
| **Hero concept** | Empty organiser angled — compartments visible; **no** cutlery included |
| **Secondary concept (optional)** | Side profile showing depth (~**8 cm** min) if measured on sample |
| **Filename — hero** | `mzansi-compact-cutlery-drawer-organiser-preview-hero-01.jpg` |
| **Filename — secondary** | `mzansi-compact-cutlery-drawer-organiser-preview-profile-02.jpg` |
| **Alt text — hero** | `Compact Cutlery Drawer Organiser — preview product image` |
| **Alt text — secondary** | `Cutlery organiser side profile — preview depth reference` |
| **Crop guidance** | Product-only; if cutlery shown, must be clearly **not included** (prefer empty) |
| **Image-use risk** | **Medium** (food-adjacency) |
| **Claim restrictions in image** | **No** “BPA-free certified” badges; **no** gourmet food lifestyle; **no** food-safe guarantees |
| **Approval before upload** | **G1–G2** |

### 3.4 **DW-OD-05** — `adjustable-aluminium-phone-tablet-stand-preview`

| Field | Spec |
| --- | --- |
| **Launch ID** | **DW-OD-05** |
| **Product GID (reference)** | `gid://shopify/Product/8577759445175` |
| **Variant SKU** | **null** (desk — no SKU on variant) |
| **Images allowed** | **1** required; **2** max |
| **Hero concept** | Aluminium stand on white at mid angle — **no** device or generic silhouette only if screen-off/neutral |
| **Secondary concept (optional)** | Side view of hinge/adjustment — **no** cables, MagSafe, or charging props |
| **Filename — hero** | `mzansi-adjustable-aluminium-phone-tablet-stand-preview-hero-01.jpg` |
| **Filename — secondary** | `mzansi-adjustable-aluminium-phone-tablet-stand-preview-side-02.jpg` |
| **Alt text — hero** | `Adjustable Aluminium Phone and Tablet Stand — preview product image` |
| **Alt text — secondary** | `Adjustable stand side view — preview hinge reference` |
| **Crop guidance** | Stand centred; **no** car-mount or desk-clutter implying vehicle use |
| **Image-use risk** | **Medium** (compatibility/charging adjacency) |
| **Claim restrictions in image** | **No** universal device collage; **no** fast-charge / MagSafe icons; **no** in-vehicle context |
| **Approval before upload** | **G1–G2**; scrub **CellTime** marketing angles from any reference shoot |

---

## 4. Future Admin/write allowed fields (**21EJ** proposal)

**Scope:** **Four** handles only — **no** other products.

| Handle | Allowed later |
| --- | --- |
| `cable-tidies-set` | Product media attach (**1–2** images per **§3.1**) |
| `five-division-drawer-divider-preview` | Product media attach (**1–2** images per **§3.2**) |
| `compact-cutlery-drawer-organiser-preview` | Product media attach (**1–2** images per **§3.3**) |
| `adjustable-aluminium-phone-tablet-stand-preview` | Product media attach (**1–2** images per **§3.4**) |

### 4.1 Allowed Admin actions (media-only)

| Action | Detail |
| --- | --- |
| **Staged upload** | `stagedUploadsCreate` → upload binary to staged URL (local file from approved pack) |
| **Attach media** | `productCreateMedia` (or equivalent Admin GraphQL media create) on in-scope **Product** GID |
| **Set alt text** | Per **§3** alt strings at create or `productUpdateMedia` if supported |
| **Reorder** | Position **1** = hero; **2** = secondary only if second approved |
| **Pre/post readback** | `productByHandle` — `mediaCount`, `media` URLs, alt text |

### 4.2 Explicitly unchanged unless separately approved

| Field | Required unchanged value |
| --- | --- |
| **Title / handle / vendor / product type** | **No** change |
| **descriptionHtml / SEO** | **No** change |
| **Tags** | **No** add/remove (incl. **no** `Supplier verified`) |
| **Price / compare-at** | **0.00** placeholder — **no** change |
| **`availableForSale`** | **`false`** |
| **Inventory** | **0** / **DENY** / tracked posture per **21EB** |
| **Variant SKU** | **No** change (**PCB-CT-25150** / **HAF-SD-4160** locked) |
| **Collections / publication** | **No** change |
| **Sales channels** | **No** widening |
| **Other products** | **No** touch |

---

## 5. Blocked fields and actions

### 5.1 Blocked Admin fields (execution)

| Blocked field / action | Reason |
| --- | --- |
| **Any product except four handles** | Bounded scope |
| **Title, body, tags, vendor, type, handle** | Out of media-only slice |
| **Price, compare-at, `availableForSale`, inventory** | Commerce gate (**21EB**, **21DZ**) |
| **`Supplier verified`** tag or copy | **21DZ** |
| **Supplier URL / hotlink import** without **G1–G2** | Rights gate |
| **Demo CDN reuse** | **§2.2** |
| **>2** images per product | Scope cap |
| **Product delete / archive** | Separate **21EK** track |
| **Publication / unpublish** | Out of scope |
| **Theme push / live publish** | Out of scope |
| **Import / sync / app install** | Programme block |

### 5.2 Blocked programme actions

| Action | Status |
| --- | --- |
| **21EI** execution | **Blocked** — planning only |
| **21EJ** without **G1 + G2 + §8 PO wording** | **Blocked** |
| **Checkout / payment / customer orders** | **Blocked** |
| **Launch / password removal** | **Blocked** |
| **Image generation in-repo** | **Not** in **21EI** — separate creative slice if needed |
| **Demo cleanup (**21EK**)** | **Separate** execution — **D** approved planning only |

---

## 6. QA plan (after future **21EJ** — **21EL**)

**Owner:** **QA / Test Engineer**  
**Theme:** `151207542967`  
**Method:** Rendered validation — reuse **21EC** / **21EE** harness patterns; extend media checks.

### 6.1 Primary PDP routes (four)

| Handle | Launch ID | Viewports |
| --- | --- | --- |
| `cable-tidies-set` | **DW-TA-01** | Desktop **1366×768**; mobile **390×844** |
| `five-division-drawer-divider-preview` | **DW-HL-02** | Same |
| `compact-cutlery-drawer-organiser-preview` | **DW-KS-04** | Same |
| `adjustable-aluminium-phone-tablet-stand-preview` | **DW-OD-05** | Same |

**URL pattern:** `/products/{handle}?preview_theme_id=151207542967`

### 6.2 PDP checklist (per handle)

| # | Check | Pass criterion |
| --- | --- | --- |
| 1 | HTTP **200** | Not **404** |
| 2 | Hero image renders | **No** broken image icon; CDN loads |
| 3 | Alt text present | Factual; matches **§3** |
| 4 | Gallery count | **1** or **2** only; **no** surprise third image |
| 5 | No purchase enablement | **No** Add to Cart / Buy Now |
| 6 | **`availableForSale`** posture | Still not purchasable |
| 7 | Price posture | **Price to be confirmed** / **0.00** pattern unchanged |
| 8 | **No** `Supplier verified` | Tag and copy |
| 9 | **No** claim regression | **No** final delivery/stock/warranty in body from this slice |
| 10 | Layout | **No** horizontal overflow mobile; hero aspect acceptable desktop |
| 11 | Misleading visual | **No** obvious wrong SKU/category in image |

### 6.3 Smoke (regression)

| Route | Check |
| --- | --- |
| **Homepage** | Loads; **no** broken hero product tiles from four handles |
| **Search** | Query each handle title fragment — result renders |
| **`controlled-pilot`** collection | **CJ** three unchanged; **no** purchase regression |

### 6.4 Evidence (local only)

| Path | Content |
| --- | --- |
| `artifacts/qa/slice-21el-four-product-media-pdp-validation/` | Screenshots, checklist JSON, run summary |
| `artifacts/devops/slice-21ej-post-write-checkpoint/` | Admin `mediaCount` readback |

**Harness:** extend committed **`tools/qa/run-slice-21ec-four-local-pdp-validation.mjs`** or new **`slice-21el`** runner — **not** required in **21EI**.

---

## 7. Rollback plan (future **21EJ**)

| Trigger | Action |
| --- | --- |
| Wrong image uploaded | **Delete** all media added in **21EJ** session for that handle |
| Rights challenge post-upload | **Delete** media; restore **0** count; document in rollback note |
| Layout break on PDP | **Delete** media; re-run **21EE**-class placeholder QA |
| Wrong product touched | **Stop**; rollback that product only; incident note to **PO** |

### 7.1 Procedure

1. **Pre-write checkpoint** (mandatory): `artifacts/devops/slice-21ej-pre-write-checkpoint/` — `mediaCount: 0` per handle.  
2. **On rollback:** `productDeleteMedia` (or bulk delete) until `mediaCount` **0**.  
3. **Post-rollback readback:** confirm **0** media; commerce fields unchanged vs pre-write JSON.  
4. **No** product delete/archive in rollback.  
5. **QA:** re-run placeholder-safe checks (**21EL** rollback section).

### 7.2 Rollback authority

| Role | Action |
| --- | --- |
| **DevOps** | Execute media delete per checkpoint |
| **Product Owner** | Approve rollback if rights/layout issue |
| **Security** | Escalation if supplier-rights dispute |

---

## 8. Product Owner execution approval wording (future **21EJ**)

Copy-ready approval for a **separate** execution slice — **not** granted by **21EI** alone.

> **Product Owner approval — Slice 21EJ bounded media upload**
>
> I approve **Admin execution — media only** on **`dropshippoc.myshopify.com`** for exactly these four handles:
>
> 1. `cable-tidies-set`  
> 2. `five-division-drawer-divider-preview`  
> 3. `compact-cutlery-drawer-organiser-preview`  
> 4. `adjustable-aluminium-phone-tablet-stand-preview`
>
> **Allowed:** attach **1** hero image per product from the **approved neutral image source pack** (and optional second image only where listed in **`docs/catalogue/slice-21ei-four-product-media-upload-planning.md` §3**), using filenames and alt text defined in that document.
>
> **Not allowed:** any change to title, description, tags, price, inventory, `availableForSale`, publication, collections, other products, checkout, **`Supplier verified`**, theme push, live launch, or demo catalogue cleanup.
>
> **Prerequisites confirmed:** **G1** image-use sign-off per handle; **G2** Security / Compliance image-use review **PASS**; pre-write checkpoint captured under **`artifacts/devops/`** (not committed).
>
> **Post-execution:** QA slice **21EL** required before treating media as programme-complete.

**Optional addendum (local photography path):**

> I approve **original local photography** as the image source for handle(s): __________ — files: __________ — subject to **G2** Security review.

---

## 9. Strict confirmations

- **Docs-only** in **21EI** — **no** Admin mutation, media upload, image generation, archive, import/sync, theme push, publish, or checkout enablement.
- **No** `artifacts/` or `tools/catalogue/` committed from this slice.
- **No** credentials, cookies, tokens, customer/order/payment data, or supplier credentials in this doc.

---

## 10. Recommended next owner

| Step | Owner | Action |
| --- | --- | --- |
| 1 | **Product Owner** | Confirm **§8** wording; sign **G1** per handle for neutral pack files |
| 2 | **Security / Compliance Engineer** | **G2** image-use review on approved file list |
| 3 | **Product Manager** | Authorise **21EJ** execution doc after **G1–G2** |
| 4 | **DevOps / Platform Engineer** | **21EJ** bounded upload + checkpoint |
| 5 | **QA / Test Engineer** | **21EL** post-upload validation |

**Parallel track (separate):** **21EK** demo **T1** cleanup — **PO** **D**; **not** blocked by **21EJ**.
