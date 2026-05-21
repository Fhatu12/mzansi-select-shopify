# Slice 21EJ-A — neutral image source-pack plan (asset prep only)

**Document type:** Neutral image source-pack creation and asset-prep plan  
**Prepared:** 2026-05-21  
**Owner:** Product Manager  
**Slice:** **21EJ-A**  
**Store:** `dropshippoc.myshopify.com` (reference only — **no** Admin action)  
**Preview theme:** `151207542967` (restricted preview — **21EE**)

**Upstream:**

- **Slice 21EI** — four-product media upload planning (`28d4015`, **PASS WITH NOTES**)
- **Slice 21EH** — media and demo cleanup plan (`5b3485d`)
- **Slice 21DZ** — security review (`4e13e7e`) — media **blocked** until gates close
- **Slice 21EE** — four PDP validation (**PASS**)

**Current state:** **21EI** field spec is ready. **No** neutral image pack files are **approved** yet. **PO** wants proper product imagery; supplier/demo/**CJ**/**Gadgetgyz** assets remain **blocked** unless rights are clear.

**Unverified rule:** Desk proof does **not** prove sample availability or image-use rights. This slice plans **creation** only — **not** Shopify upload.

---

## 1. Executive verdict

**PASS WITH NOTES**

A **safe neutral source-pack plan** is ready to produce **local candidate files** under **`artifacts/media/slice-21ej-a/`** before any **21EJ** Admin media upload. The pack must pass **G1** (Product Owner final image acceptance) and **G2** (Security / Compliance) before upload.

**Not approved in this slice:** Shopify media upload, Admin mutation, product copy/price/tag changes, image commit to git, or treating desk illustrations as launch-ready product photos.

| Area | **21EJ-A** outcome |
| --- | --- |
| **Creation route** | **Local photography** if verified sample → else **programme neutral illustration** → else **labelled preview representation** |
| **Blocked sources** | Supplier scrape, demo CDN, **CJ**/**Gadgetgyz** assets |
| **Outputs** | Working + **`final/`** candidates locally — **not** committed |
| **Upload** | **Blocked** until **G1 + G2 + 21EI §8** |

---

## 2. Image creation route

### 2.1 Route hierarchy (apply per handle)

| Priority | Route | When to use | Rights / accuracy |
| --- | --- | --- | --- |
| **R1** | **Original local photography** | Physical sample available and matches desk SKU/spec | Highest accuracy; programme owns files from shoot |
| **R2** | **Programme-owned neutral product-style illustration** | **No** verified sample; category shape known from desk | Programme-owned; **no** supplier logos; generic form only |
| **R3** | **Neutral labelled preview image** | Accuracy cannot be guaranteed (no sample; illustration too specific) | Must include visible **Preview image** labelling — **§2.3** |

**Default until sample check:** plan **R2** for all **four**; escalate to **R1** when **Operator** confirms sample in hand.

### 2.2 Blocked creation sources

| Blocked | Reason |
| --- | --- |
| **Supplier website scrape / hotlink** | Rights unknown (**21EG**, **21DZ**) |
| **Shopify demo import CDN** reuse | Rights unknown |
| **CJ / Gadgetgyz / ZA Dropshipping** catalogue assets | Out-of-scope lanes |
| **AI lifestyle** with identifiable people | Consent / misleading risk |
| **Supplier watermarked** packaging photos | Rights + brand implication |
| **Screenshots** of supplier PDPs | Rights + claim leakage |

### 2.3 Preview labelling rules

| Route | **Preview image** labelling required? |
| --- | --- |
| **R1** — sample-verified photography | **No** — if **G3** sample match recorded |
| **R2** — neutral illustration | **Recommended** — discrete corner label **Preview representation** when form is generic (not exact SKU) |
| **R3** — labelled preview | **Yes** — legible **Preview image** on image (bottom band or corner); **not** `Supplier verified` |

**Label copy (allowed):** `Preview image` or `Preview representation` only.  
**Label copy (blocked):** price, delivery, stock, warranty, supplier name, `Supplier verified`.

### 2.4 Production workflow (local)

| Step | Owner | Output path |
| --- | --- | --- |
| 1 | **Product Manager** / **Operator** | Sample availability note per handle → `artifacts/media/slice-21ej-a/sample-status.json` |
| 2 | **Creative** / **Operator** | Working files → `artifacts/media/slice-21ej-a/working/{handle}/` |
| 3 | **Creative** / **Operator** | Export **2048×2048** JPEG → `artifacts/media/slice-21ej-a/final/` |
| 4 | **Product Owner** | **G1** sign-off on `final/` file list |
| 5 | **Security / Compliance** | **G2** checklist (**§6**) |
| 6 | **DevOps** | **21EJ** upload only after **§7** gates |

**Optional in this slice:** generate candidate files locally under **`artifacts/`** only — **do not** commit.

---

## 3. Product-by-product asset spec

**Filenames and alt text** align with **`docs/catalogue/slice-21ei-four-product-media-upload-planning.md` §3**.

### 3.1 **DW-TA-01** — `cable-tidies-set`

| Field | Spec |
| --- | --- |
| **Recommended route** | **R1** if **PCB-CT-25150** sample available (**13O** desk); else **R2** generic nylon tie bundle; **R3** if pack count cannot be shown honestly |
| **Hero filename** | `mzansi-cable-tidies-set-hero-01.jpg` |
| **Secondary filename** | `mzansi-cable-tidies-set-detail-02.jpg` (optional) |
| **Image concept** | Black nylon cable ties — **100** × **150 mm** — neutral flat-lay or neat coil |
| **Must be visible** | Black ties; sense of **multi-pack** (bundle or count cue without false precision) |
| **Must not show** | Supplier logo/watermark; price stickers; “heavy duty”; electrical cert badges; wrong colour/material |
| **Alt text — hero** | `Cable Tidies Set (100 pcs) — preview product image` |
| **Alt text — secondary** | `150 mm nylon cable tie — preview scale reference` |
| **Claim restrictions** | **No** tensile/load claims; **no** “industrial grade” visuals |
| **Preview labelling** | **R3** required if count not verifiable; **R2** corner label if illustration generic |

### 3.2 **DW-HL-02** — `five-division-drawer-divider-preview`

| Field | Spec |
| --- | --- |
| **Recommended route** | **R1** if **HAF-SD-4160** sample; else **R2** five-compartment tray illustration |
| **Hero filename** | `mzansi-five-division-drawer-divider-preview-hero-01.jpg` |
| **Secondary filename** | `mzansi-five-division-drawer-divider-preview-context-02.jpg` (optional) |
| **Image concept** | Five-compartment drawer divider — top-down or **45°** on white |
| **Must be visible** | **Five** distinct compartments; tray boundaries |
| **Must not show** | Branded stationery; overloaded compartments; “fits all drawers” infographic |
| **Alt text — hero** | `5-Division Drawer Divider — preview product image` |
| **Alt text — secondary** | `Drawer divider in drawer — preview context image` |
| **Claim restrictions** | **No** dimension arrows unless measured on sample (**G3**) |
| **Preview labelling** | **R2** if illustration; **R3** if compartment count/layout uncertain |

### 3.3 **DW-KS-04** — `compact-cutlery-drawer-organiser-preview`

| Field | Spec |
| --- | --- |
| **Recommended route** | **R1** if Decorum sample; else **R2** empty compartment tray; **R3** likely if no sample |
| **Hero filename** | `mzansi-compact-cutlery-drawer-organiser-preview-hero-01.jpg` |
| **Secondary filename** | `mzansi-compact-cutlery-drawer-organiser-preview-profile-02.jpg` (optional) |
| **Image concept** | Empty cutlery organiser — angled; compartments visible |
| **Must be visible** | Compartment layout; empty state (product only) |
| **Must not show** | Cutlery included without “not included” cue; gourmet food; BPA/cert badges |
| **Alt text — hero** | `Compact Cutlery Drawer Organiser — preview product image` |
| **Alt text — secondary** | `Cutlery organiser side profile — preview depth reference` |
| **Claim restrictions** | **No** food-safe certification imagery; **no** filled lifestyle kitchen |
| **Preview labelling** | **R3** recommended without sample; **R2** minimum for illustration |

### 3.4 **DW-OD-05** — `adjustable-aluminium-phone-tablet-stand-preview`

| Field | Spec |
| --- | --- |
| **Recommended route** | **R1** if CellTime sample (scrub branded angles); else **R2** generic aluminium desk stand; **R3** if hinge/detail uncertain |
| **Hero filename** | `mzansi-adjustable-aluminium-phone-tablet-stand-preview-hero-01.jpg` |
| **Secondary filename** | `mzansi-adjustable-aluminium-phone-tablet-stand-preview-side-02.jpg` (optional) |
| **Image concept** | Aluminium desk stand — mid angle on white; screen-off device optional |
| **Must be visible** | Stand silhouette; desk context only |
| **Must not show** | MagSafe/charging cables; car mount; device collage; fast-charge icons; **CellTime** branding |
| **Alt text — hero** | `Adjustable Aluminium Phone and Tablet Stand — preview product image` |
| **Alt text — secondary** | `Adjustable stand side view — preview hinge reference` |
| **Claim restrictions** | **No** universal compatibility grid; **no** in-vehicle context |
| **Preview labelling** | **R2** for generic stand illustration; **R3** if adjustment mechanism not verified |

---

## 4. Output asset locations

**All paths are local and gitignored — do not commit.**

### 4.1 Directory layout

```text
artifacts/media/slice-21ej-a/
├── README-notes.txt              # optional run log (no credentials)
├── sample-status.json            # per-handle: sample Y/N, route chosen
├── working/
│   ├── cable-tidies-set/
│   ├── five-division-drawer-divider-preview/
│   ├── compact-cutlery-drawer-organiser-preview/
│   └── adjustable-aluminium-phone-tablet-stand-preview/
└── final/
    ├── mzansi-cable-tidies-set-hero-01.jpg
    ├── mzansi-five-division-drawer-divider-preview-hero-01.jpg
    ├── mzansi-compact-cutlery-drawer-organiser-preview-hero-01.jpg
    ├── mzansi-adjustable-aluminium-phone-tablet-stand-preview-hero-01.jpg
    └── (optional *-detail-02.jpg / *-context-02.jpg / *-profile-02.jpg / *-side-02.jpg)
```

### 4.2 File rules

| Rule | Requirement |
| --- | --- |
| **Format** | **JPEG** `.jpg` for upload candidates; **PNG** allowed in `working/` only |
| **Colour** | sRGB |
| **EXIF** | Strip GPS and camera serial if present |
| **Max per handle in `final/`** | **2** files (hero + optional secondary) |
| **Manifest** | `artifacts/media/slice-21ej-a/final/manifest.json` — handle, filename, route (**R1/R2/R3**), alt text, SHA-256 optional |

---

## 5. Image acceptance criteria

**Applies to every file in `final/` before G1/G2.**

| # | Criterion | Pass |
| --- | --- | --- |
| 1 | **Dimensions** | **2048×2048** px or acceptable **1:1** square crop ≥ **2048** short edge |
| 2 | **Background** | Clean **white** or neutral grey (**#F5F5F5–#FFFFFF**) |
| 3 | **Brand marks** | **None** unless programme-owned and **PO** approved |
| 4 | **Overlays** | **No** price, sale, shipping, stock, warranty, checkout CTAs |
| 5 | **Scale / quantity** | **No** misleading pack count, size, or capacity |
| 6 | **Supplier verified** | **No** text or badge implying verification |
| 7 | **Sharpness** | Product in focus; no heavy filter misleading material |
| 8 | **Filename** | Matches **§3** exactly |
| 9 | **Alt text** | Matches **§3** — ready for **21EJ** attach |
| 10 | **Route labelling** | **R3** label present when required (**§2.3**) |

**Reject and rework** if any criterion fails.

---

## 6. Security / Compliance handoff (G2)

**Owner:** **Security / Compliance Engineer**  
**Input:** `artifacts/media/slice-21ej-a/final/` + `manifest.json` + `sample-status.json`  
**Output:** `artifacts/media/slice-21ej-a/g2-review-notes.txt` (local; **not** committed)

### 6.1 G2 review checklist

| # | Check | Pass / Fail / N/A |
| --- | --- | --- |
| **A. Image-use rights** | | |
| A1 | Source is **R1** photography, **R2** programme illustration, or **R3** labelled preview — **not** supplier scrape/demo/**CJ**/**Gadgetgyz** | |
| A2 | Programme owns or created assets; **no** third-party watermark | |
| A3 | **No** embedded licence conflicts (stock licence on record if used) | |
| **B. Misleading representation** | | |
| B1 | Product category matches handle (ties / divider / organiser / stand) | |
| B2 | **No** false pack quantity (**100** ties only if shown or **R3** labelled) | |
| B3 | **No** universal-fit or compatibility collage | |
| B4 | **No** food-safe, electrical, or charging implications in visuals | |
| B5 | Scale honest — ruler/secondary only if not deceptive | |
| **C. Product claim risk** | | |
| C1 | **No** certification badges unless verified and separately approved | |
| C2 | **No** “heavy duty”, “BPA-free certified”, MagSafe, fast-charge visuals | |
| C3 | **No** `Supplier verified` language or visual | |
| C4 | **No** price/delivery/stock/checkout messaging in image | |
| **D. File naming and metadata** | | |
| D1 | Filenames match **21EI** §3 | |
| D2 | Alt text factual; includes **preview** where programme requires | |
| D3 | GPS EXIF stripped | |
| **E. Route labelling** | | |
| E1 | **R3** handles show **Preview image** label when accuracy not guaranteed | |
| E2 | **R2** corner label present when generic illustration used | |

**G2 verdict:** **PASS** / **PASS WITH NOTES** / **FAIL** — **FAIL** blocks **21EJ**.

### 6.2 Evidence to attach (local)

| Artifact | Purpose |
| --- | --- |
| `final/*.jpg` | Candidate heroes/secondaries |
| `manifest.json` | File list + route + alt |
| `sample-status.json` | Sample proof pointer |
| `g2-review-notes.txt` | Sign-off record |

---

## 7. Future execution boundary (**21EJ** media upload)

**Slice 21EJ** (Admin media attach) **cannot start** until **all** are true:

| # | Gate | Owner |
| --- | --- | --- |
| 1 | **`final/` pack complete** — **1** hero per handle minimum; ≤ **2** per handle | **Operator** / **Creative** |
| 2 | **§5 acceptance criteria** — **PASS** per file | **Product Manager** |
| 3 | **G1 — PO accepts final images** | **Product Owner** — per-handle sign-off on `manifest.json` filenames |
| 4 | **G2 — Security / Compliance PASS** | **Security / Compliance Engineer** — **§6** |
| 5 | **G3 — Sample match** (where applicable) | **Operator** — **DW-TA-01**, **DW-HL-02** SKUs |
| 6 | **21EI §8 execution approval** | **Product Owner** — copy-ready wording unchanged |
| 7 | **Pre-write checkpoint** | **DevOps** — `artifacts/devops/slice-21ej-pre-write-checkpoint/` |

**21EJ-A does not satisfy gates 3–7** — asset creation and reviews follow this plan first.

---

## 8. Required Product Owner image sign-off (G1)

**Trigger:** `final/` candidates ready and **§5** self-check **PASS**.

**Per handle, PO confirms:**

| Field | PO signs |
| --- | --- |
| **Handle** | One of the **four** in scope |
| **Files approved** | e.g. `mzansi-cable-tidies-set-hero-01.jpg` |
| **Route** | **R1** / **R2** / **R3** |
| **Alt text** | As **§3** (or approved edit recorded in manifest) |
| **Preview label** | Present / not required — per **§2.3** |
| **Upload authorised** | **No** — G1 approves **files only**; **21EI §8** required separately for **21EJ** |

**Copy-ready G1 block:**

> **Product Owner — G1 neutral image pack acceptance (Slice 21EJ-A)**  
> I accept the following files in `artifacts/media/slice-21ej-a/final/` as the programme neutral source pack for preview upload:  
> `[list filenames per handle]`  
> Route(s): `[R1/R2/R3 per handle]`  
> This acceptance does **not** authorise Shopify Admin upload until **G2 PASS** and **21EI §8** execution approval are recorded.

---

## 9. Strict confirmations

- **Planning / asset-prep** in **21EJ-A** — **no** Shopify Admin mutation, media upload, product edit, archive, import/sync, theme push, publish, or checkout enablement.
- **No** `artifacts/` or `tools/catalogue/` committed from this slice.
- **No** credentials, cookies, tokens, customer/order/payment data, or supplier credentials in this doc.

---

## 10. Recommended next owner

| Step | Owner | Action |
| --- | --- | --- |
| 1 | **Operator** / **Product Manager** | Complete `sample-status.json`; choose **R1/R2/R3** per **§3** |
| 2 | **Creative** / **Operator** | Produce `working/` → `final/` per **§4–§5** |
| 3 | **Product Owner** | **G1** sign-off (**§8**) |
| 4 | **Security / Compliance Engineer** | **G2** (**§6**) |
| 5 | **Product Owner** | **21EI §8** wording → authorise **21EJ** |
| 6 | **DevOps / Platform Engineer** | **21EJ** bounded media upload + **21EL** QA |

**Parallel track:** **21EK** demo **T1** cleanup — independent of source-pack creation.
