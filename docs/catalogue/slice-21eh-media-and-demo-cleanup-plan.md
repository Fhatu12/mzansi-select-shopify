# Slice 21EH — media and demo catalogue cleanup plan (docs only)

**Document type:** Planning-only media sourcing and catalogue cleanup plan  
**Prepared:** 2026-05-21  
**Owner:** Product Manager  
**Slice:** **21EH**  
**Store:** `dropshippoc.myshopify.com`  
**Preview theme:** `151207542967` (restricted preview — **21DF**, **21EE**)

**Upstream:**

- **Slice 21EG** — read-only catalogue/media audit (`2c9e790`, **PASS WITH NOTES**)
- **Slice 21EE** — four local-first PDP validation (**PASS**)
- **Slice 21EB** / **21EA** / **21DZ** — Admin copy posture; media **blocked**
- **Product Owner:** approves **Option A** (media sourcing plan for **four**) + **Option B** (demo cleanup/archive planning)

**Unverified rule:** Supplier desk pages and **21DX** proof do **not** grant image-use rights. This plan defines **gates** only — **no** upload, archive, or Admin mutation in **21EH**.

---

## 1. Executive verdict

**PASS WITH NOTES**

Safe **planning** is ready for (1) **image sourcing** for the **accepted four** local-first preview products and (2) **demo catalogue cleanup** before any execution slice. **Restricted preview** may continue on **theme placeholders** until **PO** image-use and Security gates close.

**Not approved in this slice:** media upload, product archive/delete, publication changes, import/sync, launch, or checkout enablement.

| Area | **21EH** outcome |
| --- | --- |
| **Media (four)** | **Neutral programme-owned assets** first; **supplier photos** only after explicit **image-use PO** + sample verification |
| **Demo cleanup** | **~24** **ACTIVE** import rows → **archive/hide** in phases; **8** duplicate pairs → consolidate |
| **Keep touching** | **None** in execution — planning only |

---

## 2. Accepted four media plan (summary)

| Principle | Plan |
| --- | --- |
| **Primary approach** | **Neutral product-on-white or desk-context placeholders** (programme-owned, no supplier watermark) for **first** Admin media on all **four** |
| **Secondary approach** | **Original local photography** or **merchant-owned** shots after brief — preferred over scraping supplier sites |
| **Supplier CDN scrape** | **Blocked** until **image-use PO** documents licence/permission per supplier |
| **Count per product** | **1** hero image minimum for preview; **optional** second angle only after hero approved |
| **Upload** | **Blocked** until **Slice 21EJ** (proposed) after gates in **§4** |

**Why neutral first:** **21DZ** / **21EB** blocked supplier media; **21EE** **PASS** with theme placeholder; lowest rights risk while PO finalises photography or supplier permissions.

---

## 3. Image-source policy

### 3.1 Acceptable sources (after PO sign-off on source pack)

| Source class | Use | Conditions |
| --- | --- | --- |
| **Programme neutral asset** | Hero image | Created for Mzansi Select; no supplier logo; no price/delivery text in image |
| **Original local photography** | Hero + detail | Product in hand or on desk; factual scale; **no** exaggerated staging |
| **Supplier-provided image** | Hero only | Written **image-use acceptance** on record; matches **SKU** sample (**13O** class for **DW-TA-01**) |
| **Licensed stock** (generic) | Last resort | Must not imply brand/spec not sold; **PO** approves licence |

### 3.2 Blocked sources

| Blocked source | Reason |
| --- | --- |
| **Supplier website scrape** without permission | Rights unknown (**21EG** risk) |
| **CJ / Gadgetgyz / ZA Dropshipping** catalogue images | Out of scope; other programme lanes |
| **Existing demo import CDN images** on other handles | **Not** reusable — rights unknown |
| **AI-generated “lifestyle” with people/faces** | Misleading / consent risk |
| **Images with price, sale, “free shipping”, stock claims** | Commerce/claim violation |
| **Images implying `Supplier verified`** | Forbidden |

### 3.3 Image-use rights gate (required before upload)

| Gate | Owner | Requirement |
| --- | --- | --- |
| **G1 — Image-use PO** | **Product Owner** | Per-product approval: source type + file names + alt text |
| **G2 — Security / Compliance** | **Security / Compliance Engineer** | Review for misleading visuals, watermarks, claim overlays |
| **G3 — Sample match** | **Operator** | Physical or supplier page confirms product matches **SKU** / dimensions where stated |
| **G4 — Tag** | **DevOps** (execution) | Add `image-permission-confirmed` **only** when **G1–G3** closed — programme convention TBD with Security |

### 3.4 Technical direction (planning)

| Field | Direction |
| --- | --- |
| **Dimensions** | **Square** master **2048×2048** min; Shopify will resize; aspect **1:1** preferred for theme gallery |
| **Format** | **JPEG** or **WebP**; sRGB; **no** embedded EXIF GPS |
| **Naming** | `mzansi-{handle}-hero-01.jpg` (e.g. `mzansi-cable-tidies-set-hero-01.jpg`) |
| **Alt text** | Factual: `"{Product title} — preview product image"` — **no** “best”, “free delivery”, “in stock” |
| **Count** | **1** required; **2** max until launch planning |

---

## 4. Product-by-product image requirements

### 4.1 **DW-TA-01** — `cable-tidies-set` (DirectTech / **PCB-CT-25150**)

| Field | Plan |
| --- | --- |
| **Image type** | Pack shot — **100** black nylon ties, **150 mm**, on neutral surface |
| **Risk** | **Low** — avoid exaggerating tensile/load |
| **Recommended first image** | Neutral pack flat-lay or tidy coil; label optional if rights cleared |
| **Secondary** | Single tie on white showing length scale (ruler in frame OK) |
| **Visible restrictions** | **No** “heavy duty”, **no** electrical certification badges, **no** price stickers |
| **Approval before upload** | **G1–G3**; confirm **13O** / **DirectTech** SKU match |

### 4.2 **DW-HL-02** — `five-division-drawer-divider-preview` (UCAN / **HAF-SD-4160**)

| Field | Plan |
| --- | --- |
| **Image type** | Top-down or angled tray in drawer context (empty compartments) |
| **Risk** | **Low–mod** — **no** “fits all drawers” visual implication |
| **Recommended first image** | Divider alone on white; compartments visible |
| **Secondary** | In-drawer context with generic stationery — **no** branded props |
| **Visible restrictions** | **No** overloaded compartments suggesting unrealistic capacity |
| **Approval before upload** | **G1–G3**; optional dimension callout in alt only if verified |

### 4.3 **DW-KS-04** — `compact-cutlery-drawer-organiser-preview` (Decorum & Co)

| Field | Plan |
| --- | --- |
| **Image type** | Angled organiser empty; compartments visible |
| **Risk** | **Mod** — food-adjacency; **no** food-safe certification imagery |
| **Recommended first image** | Neutral product-only; **no** cutlery in frame (or silverware clearly “not included”) |
| **Secondary** | Side profile showing depth (**8 cm** min) if verified |
| **Visible restrictions** | **No** “BPA-free certified” badges; **no** filled gourmet cutlery lifestyle |
| **Approval before upload** | **G1–G3** |

### 4.4 **DW-OD-05** — `adjustable-aluminium-phone-tablet-stand-preview` (CellTime)

| Field | Plan |
| --- | --- |
| **Image type** | Desk stand with generic phone silhouette (screen off) |
| **Risk** | **Mod** — compatibility/charging implications |
| **Recommended first image** | Stand alone on white at mid angle |
| **Secondary** | Side view showing adjustment hinge — **no** MagSafe/charging cables |
| **Visible restrictions** | **No** car mount context; **no** “universal” device collage; **no** fast-charge icons |
| **Approval before upload** | **G1–G3**; scrub **CellTime** marketing angles from reference |

---

## 5. Demo / legacy cleanup plan

**Source:** **21EG** — **27** `unknown-manual` + **2** `legacy-demo` **ACTIVE** rows with **CDN** images; **14** **DRAFT**; **1** **ARCHIVED**.

### 5.1 Classification (ACTIVE demo/import)

| Tier | Description | Approx. count | Examples (handles) |
| --- | --- | --- | --- |
| **T1 — Archive candidate (high)** | No programme tags; duplicate of another row; nonsense/demo titles | **~8** **ACTIVE** + matching **DRAFT** | `1pcs-upgradation-adjustable-flatware-*` (+ `-1` pair), `adjustable-pantry-organizer-*` pair, `adjustable-expandable-bamboo-*` pair, `1pc-self-adhesive-wall-mounted-*` pair |
| **T2 — Archive candidate (medium)** | Standalone Horizon imports; pollute search | **~14** **ACTIVE** | `adjustable-laptop-stand`, `kitchen-utensil-holder`, `usb-c-charging-cable-1-2m`, `modern-kitchen-accessories-soap-dispenser-*`, `silicone-cup-sleeve-*`, `under-cabinet-paper-towel-*`, etc. |
| **T3 — Legacy-demo tagged** | Explicitly non-programme | **2** | `handwoven-cotton-organizer-basket`, `available-regular-price` |
| **T4 — Keep temporarily** | None for launch | **0** | Demo rows are **not** required for **21EE** four-product set |

### 5.2 Duplicate / legacy patterns

| Pattern | Action (future execution) |
| --- | --- |
| **DRAFT + ACTIVE** same import title | **Archive DRAFT** first; keep **one** **ACTIVE** only if needed for layout test — prefer **archive both** |
| **Gadgetgyz** **DRAFT** (4) | **Archive** after PO confirms pilot abandoned (**21W-B**) |
| **`sold-out`** **ARCHIVED** | **Delete** only with explicit PO — else leave |
| **Organiser/stand overlap** with **accepted four** | **Do not** confuse — programme handles stay; demo **`adjustable-laptop-stand`** is **not** **DW-OD-05** |

### 5.3 Archive / hide criteria (future **Slice 21EK**)

Archive or set **DRAFT** + unpublish from **Online Store** when **all** apply:

1. **Not** in: accepted **four**, **CJ** three, **13I** three, or PO-explicit keep list.  
2. **Has** `unknown-manual` / import-style handle **or** **≥6** unapproved CDN images.  
3. **Lacks** `preview-only` / `local-supplier-route` / `cj-imported-supplier` programme tags.  
4. **Not** required for a signed-off preview layout test (default: **not** required).

**Do not delete** in first cleanup pass — **archive** or **DRAFT** + unpublish only.

### 5.4 Rows that may remain temporarily (until Phase 2 cleanup)

| Keep temporarily? | Rationale |
| --- | --- |
| **Optional: 1–2** demo **ACTIVE** rows | Only if **PO** wants collection/grid volume for theme QA — **not** recommended; **21EG** shows search noise |
| **Default** | **No** demo **ACTIVE** rows after cleanup execution |

---

## 6. Products not to touch yet

| Group | Handles | Reason |
| --- | --- | --- |
| **Accepted four** | `cable-tidies-set`, `five-division-drawer-divider-preview`, `compact-cutlery-drawer-organiser-preview`, `adjustable-aluminium-phone-tablet-stand-preview` | Media plan only — **no** upload in **21EH** |
| **CJ controlled-pilot** | `beverage-bottle-oil-bottle-handle-holder`, `usb-bag-sealer`, `foldable-magnetic-phone-holder-desktop-tablet-stand` | Separate lane; **0** media OK for now |
| **13I preview** | `sink-strainer-stainless-steel`, `compact-organiser-basket`, `mini-plastic-divider-basket` | Out of **21EH** four-product scope |
| **DW-KS-01 hold** | `sink-strainer-stainless-steel` | Programme hold — not in accepted **four** |
| **Gadgetgyz drafts** | four handles | Unpublished — cleanup in **Phase 2**, not mixed with media upload |
| **Publication / commerce** | All programme rows | **No** widening; **no** **`availableForSale: true`** |

---

## 7. Future execution slices proposed

| Slice | Type | Scope | Prerequisites |
| --- | --- | --- | --- |
| **21EI** (proposed) | **Docs** — media upload **planning** | Field-level spec: files, alt text, tag `image-permission-confirmed`, rollback | **21EH** + **G1** PO image-use per product |
| **21EJ** (proposed) | **Admin execution** — media **only** | Upload **1** hero per **four** handles; **no** price/tag/body change | **G1–G2** + **21EI** plan + PO execution sign-off |
| **21EK** (proposed) | **Admin execution** — cleanup **only** | Archive/unpublish **T1–T3** demo rows per **§5.3**; **no** media on programme rows | **PO** cleanup approval + pre-write checkpoint |
| **21EL** (proposed) | **QA** | PDP media render + search regression after **21EJ** / **21EK** | Execution complete |

**Sequence:** **21EI** → **21EJ** → **21EL** (media track) can run **in parallel planning** with **21EK** cleanup, but **separate** execution commits.

---

## 8. Execution gates (consolidated)

| # | Gate | Blocks |
| --- | --- | --- |
| 1 | **PO image-use approval** (per product + source) | **21EJ** upload |
| 2 | **Security / Compliance** image-use review | **21EJ** upload |
| 3 | **21EI** bounded media upload plan | **21EJ** |
| 4 | **PO execution sign-off** (media-only vs cleanup-only) | **21EJ** / **21EK** |
| 5 | Pre-write checkpoint (`artifacts/devops/`) | Each execution |
| 6 | Post-write QA (**21EL**) | Launch of any wider preview |

---

## 9. Risk controls

| Control | Requirement |
| --- | --- |
| **No supplier media without clear rights** | **§3.2** |
| **No misleading photos** | Scale honest; **no** wrong SKU; **no** universal-fit visuals |
| **No price/delivery/stock in image** | Text-free heroes |
| **No `Supplier verified`** | Tag and copy |
| **No checkout / purchase enablement** | Unchanged |
| **No live launch** | Restricted preview only |
| **Theme placeholder fallback** | Remains until **21EJ** completes and QA passes |

---

## 10. Product Owner decision options

| Option | Description | **21EH** recommendation |
| --- | --- | --- |
| **A** | Approve **neutral image source pack** for **four** (programme-owned placeholders) | **Recommended** — unblocks **21EI** |
| **B** | Approve **original product photography brief** (local shoot) | **Recommended** parallel — higher fidelity |
| **C** | Approve **media upload planning** slice (**21EI**) | **After A or B** |
| **D** | Approve **demo cleanup planning** execution scope (**21EK** list) | **Recommended** — **T1** first |
| **E** | **Hold** current placeholder state | Valid — no urgency if preview-only |

**Recommended:** **A** + **D** + **C** (neutral pack + cleanup scope + proceed to **21EI**).

---

## 11. Strict confirmations

- **Docs-only** in **21EH** — **no** Admin mutation, media upload, archive, import/sync, theme push, publish, or checkout enablement.
- **No** `artifacts/` or `tools/catalogue/` committed from this slice.
- **No** credentials or private dashboard material in this doc.

---

## Next owner

**Product Owner** — confirm **§10** options; then **Product Manager** (**21EI** media upload plan) and/or **Security / Compliance Engineer** (image-use review gate).
