# Slice 21EJ-C — neutral image pack G2 image-use review

**Document type:** Security / Compliance image-use and misrepresentation review  
**Prepared:** 2026-05-21  
**Owner:** Security / Compliance Engineer  
**Slice:** **21EJ-C**  
**Store:** `dropshippoc.myshopify.com` (reference only — **no** Admin action)  
**Preview theme:** `151207542967` (restricted preview — **21DF**, **21EE**)

**Upstream:**

- **Slice 21EJ-B** — neutral pack creation (`8757539`, **PASS WITH NOTES**)
- **Slice 21EI** — media upload field spec (`28d4015`)
- **Slice 21EJ-A** — source-pack plan (`6630080`)
- **Slice 21DZ** — five-product security posture (`4e13e7e`) — media **blocked** until gates close

**G1 Product Owner image-use sign-off:** **Granted** (slice brief) — all **four** hero files in `artifacts/media/slice-21ej-a/final/` accepted as the programme neutral source pack for **restricted preview** upload, **pending** this **G2** review and separate **21EI §8** execution approval.

**Evidence reviewed (local; not committed):**

- `artifacts/media/slice-21ej-a/final/*.jpg` (four heroes)
- `artifacts/media/slice-21ej-a/manifest.json`
- `artifacts/media/slice-21ej-a/sample-status.json`
- `docs/catalogue/slice-21ej-b-neutral-image-pack-creation.md`

**Method:** Offline review of manifest metadata, SHA-256 verification, Pillow inspection (dimensions, EXIF, corner label regions). **No** Shopify Admin access. **No** reverse-image or supplier URL comparison (programme attestation: Pillow-generated illustrations per **21EJ-B**).

---

## 1. Executive verdict

**PASS WITH NOTES**

The **four** programme-owned neutral preview heroes are **acceptable for bounded Admin media attach** on the **accepted four** local-first handles **only**, under **restricted password-gated preview** — **not** for launch, **`Supplier verified`**, or commerce enablement.

**G2 blocks cleared for pack integrity:** image-use rights, blocked-source exclusion, preview labelling, filename/alt alignment, clean EXIF.

**Notes (non-blocking):**

1. **`cable-tidies-set`** alt text references **(100 pcs)** while the image is illustrative and does **not** depict an exact **100**-pack — mitigated by on-image **Preview image** label; maintain honest copy on PDP.
2. Assets are **illustrations**, not sample-verified photography — suitable for **preview only**; replace with **R1** photography later if **PO** requires SKU-exact visuals.
3. **G3** sample match remains **open** — **not** a blocker for this labelled illustrative pack.

**Not approved in this slice:** Shopify media upload, product field changes, publication, theme push, launch, checkout, or **`Supplier verified`**.

| Gate | Status after **21EJ-C** |
| --- | --- |
| **G1** Product Owner | **accepted** (per brief) |
| **G2** Security / Compliance | **PASS WITH NOTES** (this document) |
| **21EI §8** execution approval | **still required** before **21EJ** |
| **G3** sample match | **open** (recommended, not blocking) |

---

## 2. Review scope and exclusions

| In scope | Out of scope |
| --- | --- |
| **Four** local-first preview handles | **CJ** three, **13I**, demo/legacy rows |
| Hero JPEGs in `final/` | Secondary/detail images (not created) |
| Image-use + misrepresentation | Final price, delivery, stock, launch |

**Confirmed excluded asset classes:** supplier scrape, Shopify demo CDN reuse, **CJ** / **Gadgetgyz** / external stock — **no** indicators in files or manifest.

---

## 3. G2 checklist results (pack-level)

| # | Area | Result | Notes |
| --- | --- | --- | --- |
| **A1** | Route **R2/R3** programme assets only | **PASS** | `source: programme-owned-neutral-illustration` |
| **A2** | Programme ownership; no watermarks | **PASS** | Generic illustration style; no supplier logos |
| **A3** | No stock-licence conflict | **PASS** | No third-party stock |
| **B1** | Category matches handle | **PASS** | All four |
| **B2** | Pack quantity honesty | **PASS WITH NOTES** | **DW-TA-01** — **R3** label; alt text **100 pcs** see §5.1 |
| **B3** | No universal-fit / device collage | **PASS** | **DW-OD-05** — stand only |
| **B4** | No food-safe / electrical / charging visuals | **PASS** | |
| **B5** | Scale honest | **PASS** | No deceptive rulers or overload staging |
| **C1** | No unapproved cert badges | **PASS** | |
| **C2** | No heavy-duty / BPA / MagSafe / fast-charge visuals | **PASS** | |
| **C3** | No `Supplier verified` | **PASS** | |
| **C4** | No price/delivery/stock/checkout in image | **PASS** | Preview labels only |
| **D1** | Filenames match **21EI** §3 | **PASS** | SHA-256 verified against manifest |
| **D2** | Alt text includes **preview** | **PASS** | See §5 alt alignment |
| **D3** | GPS EXIF stripped | **PASS** | **0** EXIF tags on all four |
| **E1** | **R3** labels where required | **PASS** | Cable-tidies, organiser |
| **E2** | **R2** representation labels | **PASS** | Divider, stand |

---

## 4. Per-image review summary

### 4.1 `mzansi-cable-tidies-set-hero-01.jpg` — **DW-TA-01**

| Field | Assessment |
| --- | --- |
| **Route** | **R3** |
| **SHA-256** | `d3ff2e0462a3b15c2962e7382ffdb610fceecea36f953240df10af6acfd3af65` ✓ |
| **Dimensions** | **2048×2048** JPEG |
| **Rights** | **PASS** — programme illustration |
| **Misrepresentation** | **PASS WITH NOTES** — generic tie coil; **not** literal **100**-pack |
| **Claims** | **PASS** — no tensile/electrical/price overlays |
| **Preview label** | **PASS** — `Preview image` (bottom-right band detected) |
| **Alt text** | `Cable Tidies Set (100 pcs) — preview product image` — **acceptable** with label + PDP honesty |
| **Reject?** | **No** |

### 4.2 `mzansi-five-division-drawer-divider-preview-hero-01.jpg` — **DW-HL-02**

| Field | Assessment |
| --- | --- |
| **Route** | **R2** |
| **SHA-256** | `ff20662624f17849022de13aba1a33c83879bc747a0ca1da74b56983e70796d2` ✓ |
| **Dimensions** | **2048×2048** JPEG |
| **Rights** | **PASS** |
| **Misrepresentation** | **PASS WITH NOTES** — five compartments shown; exact **HAF-SD-4160** dimensions unverified |
| **Claims** | **PASS** — no universal-fit infographic |
| **Preview label** | **PASS** — `Preview representation` (bottom-left) |
| **Alt text** | Aligned with **21EI** |
| **Reject?** | **No** |

### 4.3 `mzansi-compact-cutlery-drawer-organiser-preview-hero-01.jpg` — **DW-KS-04**

| Field | Assessment |
| --- | --- |
| **Route** | **R3** |
| **SHA-256** | `60e196a3ebba13dc7b2fc7caa12baeb94efb98576b6df46161770d6ab2fd9db6` ✓ |
| **Dimensions** | **2048×2048** JPEG |
| **Rights** | **PASS** |
| **Misrepresentation** | **PASS WITH NOTES** — empty organiser; depth not depicted |
| **Claims** | **PASS** — no cutlery-included or food-safe badges |
| **Preview label** | **PASS** — `Preview image` |
| **Alt text** | Aligned with **21EI** |
| **Reject?** | **No** |

### 4.4 `mzansi-adjustable-aluminium-phone-tablet-stand-preview-hero-01.jpg` — **DW-OD-05**

| Field | Assessment |
| --- | --- |
| **Route** | **R2** |
| **SHA-256** | `ce661e3b998301403337be3e7eafcbc78c346c9c73d52d1897a71e7e36f19075` ✓ |
| **Dimensions** | **2048×2048** JPEG |
| **Rights** | **PASS** |
| **Misrepresentation** | **PASS WITH NOTES** — generic stand; no device brands |
| **Claims** | **PASS** — no MagSafe/charging/universal collage |
| **Preview label** | **PASS** — `Preview representation` |
| **Alt text** | Aligned with **21EI** |
| **Reject?** | **No** |

---

## 5. Thematic review (requested areas)

### 5.1 Image-use rights / programme-owned status

**PASS.** Assets are programme-generated illustrations (**21EJ-B** method). No third-party CDN URLs, watermarks, or supplier branding. Creation script and manifest attest blocked-source exclusion.

### 5.2 Supplier / demo / CJ / Gadgetgyz exclusion

**PASS.** Visual review: geometric illustration style consistent across four files — **not** photographic supplier catalogues. No reuse of **21EG** demo CDN patterns.

### 5.3 Misleading representation risk

**PASS WITH NOTES** for restricted preview. Illustrations clearly generic; preview labels present on all four. **Do not** present as SKU-verified photography on public launch without new review.

### 5.4 Product-claim risk

**PASS.** No commerce, certification, or **`Supplier verified`** messaging in pixels. Storefront copy must remain **21EB** / **21DZ** compliant after upload.

### 5.5 Preview label adequacy

**PASS.** **R3** handles use **Preview image**; **R2** handles use **Preview representation**. Labels legible in corner bands (inspection **2026-05-21**).

### 5.6 Filename / alt-text alignment

**PASS** — filenames match **21EI** §3. Alt strings include **preview product image** suffix. **Note:** **DW-TA-01** alt mentions **100 pcs** — acceptable only while PDP/body copy stays non-guaranteeing and on-image **Preview image** remains.

### 5.7 EXIF / metadata risk

**PASS.** All four files: **no** EXIF dictionary entries; **no** GPS. Safe for upload from metadata perspective.

### 5.8 Suitability for restricted preview only

**PASS.** Appropriate for password-gated preview PDPs replacing theme placeholders (**21EE**). **Not** launch-grade product photography.

### 5.9 Reject or revise?

**None required.** Optional future revision: **R1** photography when samples exist; optional alt tweak for **DW-TA-01** if **PO** wants to drop **100 pcs** from alt until photography confirms pack.

---

## 6. Required revisions

| File | Revision required? | Action |
| --- | --- | --- |
| All four heroes | **No** | Proceed to **21EJ** planning/execution with conditions below |
| Optional | **PO** discretion | **DW-TA-01** alt text soften to “Cable Tidies Set — preview product image” if **PO** prefers stricter alt/image alignment |

---

## 7. Whether **21EJ** media upload may proceed

| Prerequisite | Status |
| --- | --- |
| **G1** PO accepts final images | **Yes** (granted) |
| **G2** Security review | **Yes** — **PASS WITH NOTES** (this slice) |
| **21EI §8** PO execution wording | **Still required** — separate sign-off |
| Pre-write checkpoint | **Required** at execution |
| Commerce unchanged | **Required** — media-only |

**Conclusion:** **21EJ** bounded **media-only** Admin execution **may be planned and executed** after **Product Owner** signs **21EI §8** execution approval. **G2** does **not** alone authorise upload.

**Still blocked:** launch, checkout enablement, **`Supplier verified`**, copy/price/inventory changes, **CJ**/**13I**/demo image fixes.

---

## 8. Local artifact update (operator)

Update `artifacts/media/slice-21ej-a/manifest.json` (local only):

- `g1_status` → `accepted` per file  
- `g2_status` → `accepted` per file  
- Optional: `artifacts/media/slice-21ej-a/g2-review-notes.txt` — verdict **PASS WITH NOTES**, date **2026-05-21**

**Do not commit** `artifacts/`.

---

## 9. Strict confirmations

- **Docs-only** in **21EJ-C** — **no** Shopify Admin mutation, media upload, or product edit.
- **No** credentials, customer/order/payment data, or supplier credentials in this doc.
- **No** `artifacts/` or image binaries committed.

---

## Next owner

**Product Owner** — sign **21EI §8** execution approval for **21EJ** media upload.  
**DevOps / Platform Engineer** — **21EJ** bounded upload + pre-write checkpoint → **21EL** QA.
