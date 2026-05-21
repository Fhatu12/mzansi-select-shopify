# Slice 21EJ-B — neutral image pack creation (local pass)

**Document type:** Local neutral image pack creation record  
**Prepared:** 2026-05-21  
**Owner:** Product Manager / Operator  
**Slice:** **21EJ-B**  
**Store:** `dropshippoc.myshopify.com` (reference only — **no** Admin action)  
**Preview theme:** `151207542967` (unchanged)

**Upstream:**

- **Slice 21EJ-A** — neutral image source-pack plan (`6630080`, **PASS WITH NOTES**)
- **Slice 21EI** — media upload field spec (`28d4015`)
- **Slice 21EH** — media sourcing policy (`5b3485d`)

**Method:** Programme-owned neutral illustrations generated locally with Pillow (vector-style shapes on `#F5F5F7` background). **No** supplier, demo CDN, **CJ**, **Gadgetgyz**, scraped, or external stock assets.

**Evidence (local; not committed):** `artifacts/media/slice-21ej-a/` — `final/`, `manifest.json`, `sample-status.json`

---

## 1. Executive verdict

**PASS WITH NOTES**

**Four** hero JPEGs (**2048×2048**) are ready under **`artifacts/media/slice-21ej-a/final/`** for **G1** Product Owner sign-off and **G2** Security / Compliance review. Illustrations are **preview-safe** with explicit **Preview image** or **Preview representation** labelling where accuracy is not sample-verified.

**Not performed:** Shopify Admin mutation, media upload, product edit, theme push, or launch.

| Gate | Status |
| --- | --- |
| **G1** Product Owner | **pending** |
| **G2** Security / Compliance | **pending** |
| **21EI §8** execution approval | **pending** (required before **21EJ** upload) |

---

## 2. Files generated

| Path | Purpose |
| --- | --- |
| `artifacts/media/slice-21ej-a/final/mzansi-cable-tidies-set-hero-01.jpg` | Hero — **DW-TA-01** |
| `artifacts/media/slice-21ej-a/final/mzansi-five-division-drawer-divider-preview-hero-01.jpg` | Hero — **DW-HL-02** |
| `artifacts/media/slice-21ej-a/final/mzansi-compact-cutlery-drawer-organiser-preview-hero-01.jpg` | Hero — **DW-KS-04** |
| `artifacts/media/slice-21ej-a/final/mzansi-adjustable-aluminium-phone-tablet-stand-preview-hero-01.jpg` | Hero — **DW-OD-05** |
| `artifacts/media/slice-21ej-a/manifest.json` | Per-file metadata + SHA-256 |
| `artifacts/media/slice-21ej-a/sample-status.json` | Sample availability (**none** verified) |
| `artifacts/media/slice-21ej-a/_generate_21ej_b_heroes.py` | Local generator (gitignored with `artifacts/`) |

**Secondary images:** **not** created in this pass (heroes only per slice scope).

---

## 3. Product-by-product image summary

### 3.1 `cable-tidies-set` — **DW-TA-01**

| Field | Value |
| --- | --- |
| **Concept** | Black nylon cable ties in a neutral coil — generic bundle |
| **Route** | **R3** |
| **Preview label** | **Yes** — `Preview image` (bottom-right) |
| **Dimensions** | **2048×2048** JPEG |
| **File size** | **174 952** bytes |
| **SHA-256** | `d3ff2e0462a3b15c2962e7382ffdb610fceecea36f953240df10af6acfd3af65` |
| **Alt text** | Cable Tidies Set (100 pcs) — preview product image |

### 3.2 `five-division-drawer-divider-preview` — **DW-HL-02**

| Field | Value |
| --- | --- |
| **Concept** | Top-down five-compartment drawer divider tray |
| **Route** | **R2** |
| **Preview label** | **Yes** — `Preview representation` (bottom-left) |
| **Dimensions** | **2048×2048** JPEG |
| **File size** | **83 220** bytes |
| **SHA-256** | `ff20662624f17849022de13aba1a33c83879bc747a0ca1da74b56983e70796d2` |
| **Alt text** | 5-Division Drawer Divider — preview product image |

### 3.3 `compact-cutlery-drawer-organiser-preview` — **DW-KS-04**

| Field | Value |
| --- | --- |
| **Concept** | Angled empty cutlery organiser with compartments |
| **Route** | **R3** |
| **Preview label** | **Yes** — `Preview image` (bottom-right) |
| **Dimensions** | **2048×2048** JPEG |
| **File size** | **79 558** bytes |
| **SHA-256** | `60e196a3ebba13dc7b2fc7caa12baeb94efb98576b6df46161770d6ab2fd9db6` |
| **Alt text** | Compact Cutlery Drawer Organiser — preview product image |

### 3.4 `adjustable-aluminium-phone-tablet-stand-preview` — **DW-OD-05**

| Field | Value |
| --- | --- |
| **Concept** | Neutral aluminium desk stand — no device or charging props |
| **Route** | **R2** |
| **Preview label** | **Yes** — `Preview representation` (bottom-left) |
| **Dimensions** | **2048×2048** JPEG |
| **File size** | **66 936** bytes |
| **SHA-256** | `ce661e3b998301403337be3e7eafcbc78c346c9c73d52d1897a71e7e36f19075` |
| **Alt text** | Adjustable Aluminium Phone and Tablet Stand — preview product image |

---

## 4. Route used per handle

| Handle | Route | Rationale |
| --- | --- | --- |
| `cable-tidies-set` | **R3** | No verified sample; **100**-pack count **not** shown literally |
| `five-division-drawer-divider-preview` | **R2** | Programme illustration; five compartments shown; SKU dimensions unverified |
| `compact-cutlery-drawer-organiser-preview` | **R3** | No sample; depth unverified |
| `adjustable-aluminium-phone-tablet-stand-preview` | **R2** | Generic stand illustration; no device/brands |

**R1** (local photography): **not** used — `sample-status.json` records **no** verified samples.

---

## 5. Preview label decision per handle

| Handle | Label used | Text | Reason |
| --- | --- | --- | --- |
| `cable-tidies-set` | **Yes** | Preview image | Pack count accuracy not guaranteed |
| `five-division-drawer-divider-preview` | **Yes** | Preview representation | Illustrative tray; exact SKU layout unverified |
| `compact-cutlery-drawer-organiser-preview` | **Yes** | Preview image | Dimensions and depth unverified |
| `adjustable-aluminium-phone-tablet-stand-preview` | **Yes** | Preview representation | Generic stand; mechanism unverified |

**No** pricing, delivery, stock, warranty, **`Supplier verified`**, or checkout messaging on any image.

---

## 6. Manifest summary

**Path:** `artifacts/media/slice-21ej-a/manifest.json`  
**Prepared (UTC):** `2026-05-21T20:03:04Z`  
**Source:** `programme-owned-neutral-illustration`  
**File count:** **4** heroes; **G1** / **G2** = **pending** on all entries.

Canonical metadata is in **`manifest.json`**; SHA-256 values in **§3** match that file at generation time.

---

## 7. Known limitations

| Limitation | Impact |
| --- | --- |
| **No physical samples** | Images are illustrative — **not** SKU-exact photography |
| **Cable tie pack count** | Alt text references **100 pcs** from desk copy; image does **not** depict exactly **100** ties |
| **Illustration style** | Simple geometric shapes — acceptable for restricted preview; may be replaced by **R1** photography later |
| **No secondary images** | Optional detail/context shots from **21EI** deferred |
| **Not Shopify-hosted** | Files exist locally only until **21EJ** upload (separate approval) |
| **G1/G2 not complete** | Pack is **candidate** only — **not** approved for Admin attach |

---

## 8. G1 Product Owner sign-off checklist

**Review:** `artifacts/media/slice-21ej-a/final/` + `manifest.json`

| # | Check | PO marks |
| --- | --- | --- |
| 1 | All **four** hero filenames present and non-zero size | ☐ |
| 2 | Visual category matches each handle | ☐ |
| 3 | Preview labels acceptable for restricted preview | ☐ |
| 4 | Alt text in manifest acceptable for storefront | ☐ |
| 5 | Acceptable to use as **neutral pack** pending **G2** (files only — **not** upload yet) | ☐ |

**On acceptance:** update `g1_status` → `accepted` per file in local `manifest.json` (optional) and record **21EJ-A §8** G1 block.

**G1 does not authorise** **21EJ** Admin upload without **G2 PASS** and **21EI §8** execution wording.

---

## 9. G2 Security / Compliance handoff checklist

**Input:** `final/` + `manifest.json` + `sample-status.json`  
**Reference:** **21EJ-A** §6 G2 checklist

| # | Area | Focus for this pack |
| --- | --- | --- |
| A | **Image-use rights** | Programme-generated; **no** third-party assets |
| B | **Misleading representation** | Illustration vs photography; pack count honesty (**cable-tidies-set**) |
| C | **Claim risk** | Labels only “Preview image/representation”; **no** commerce overlays |
| D | **Filename / alt / EXIF** | Matches **21EI**; GPS stripped at generation |
| E | **Route labelling** | **R2/R3** labels visible where required |

**Output (local):** `artifacts/media/slice-21ej-a/g2-review-notes.txt` — **not** committed.

**On PASS:** set `g2_status` → `accepted` in local manifest; then **PO** may sign **21EI §8** for **21EJ**.

---

## 10. Confirmation — no Shopify upload

| Action | Performed? |
| --- | --- |
| Shopify Admin mutation | **No** |
| `productCreateMedia` / staged upload | **No** |
| Product copy / price / tags / inventory change | **No** |
| Publication / theme push / launch | **No** |
| Files committed to git | **No** (`artifacts/` gitignored) |

---

## 11. Strict confirmations

- **Local asset pass only** — heroes under **`artifacts/media/slice-21ej-a/final/`**.
- **No** credentials, customer/order/payment data, or supplier credentials in this doc.
- **No** `artifacts/` or image binaries in git commits from this slice.

---

## Next owner

**Product Owner** — **G1** image sign-off on **`artifacts/media/slice-21ej-a/final/`**, then **Security / Compliance Engineer** — **G2** review.
