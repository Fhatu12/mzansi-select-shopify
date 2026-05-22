# Slice 21EN — four-product media PDP validation (post-21EM)

**Document type:** QA validation report (read-only rendered)  
**Prepared:** 2026-05-22  
**Owner:** QA / Test Engineer  
**Slice:** **21EN**  
**Store:** `dropshippoc.myshopify.com`  
**Preview theme:** `151207542967` / Mzansi Select MVP Preview / **unpublished**  
**Live theme:** `148914077879` / Horizon — **not** touched

**Upstream:**

- **Slice 21EJ** — media upload execution (`a90289d`, **PASS**)
- **Slice 21EM** — `image-permission-confirmed` tag fix (`5f90d30`, **PASS**)
- **Slice 21EL** — pre-tag PDP validation (`a3e54e7`, **FAIL** — superseded by this pass)

**Unlock:** **`--manual-unlock`** (single Chromium session). **No** passwords, cookies, tokens, HAR, trace, video, or storage state stored.

**Harness:** `tools/qa/run-slice-21el-four-product-media-pdp-validation.mjs` with `SLICE_QA_EVIDENCE=slice-21en-four-product-media-pdp-validation`

**Evidence (local; not committed):** `artifacts/qa/slice-21en-four-product-media-pdp-validation/2026-05-22-040657/`

---

## 1. Executive verdict

**PASS WITH NOTES**

All **four** PDPs return **HTTP 200**. Shopify-attached programme hero images are **visible** on the preview theme gallery for every handle at desktop and mobile. Commerce, claim, and regression checks **PASS**. **No** theme-only placeholder is used as the main product image.

**Notes:** harness reported `gallery-count-2` because hero and strip thumbnail both resolve to the same Shopify CDN asset (Admin still has **1** media per product). **DW-TA-01** H1 title still includes **(100 pcs)**; Admin hero alt remains softened (**no** “100 pcs” in alt).

---

## 2. Scope and routes

| Launch ID | Handle | Preview PDP route |
| --- | --- | --- |
| **DW-TA-01** | `cable-tidies-set` | `/products/cable-tidies-set?preview_theme_id=151207542967` |
| **DW-HL-02** | `five-division-drawer-divider-preview` | `/products/five-division-drawer-divider-preview?preview_theme_id=151207542967` |
| **DW-KS-04** | `compact-cutlery-drawer-organiser-preview` | `/products/compact-cutlery-drawer-organiser-preview?preview_theme_id=151207542967` |
| **DW-OD-05** | `adjustable-aluminium-phone-tablet-stand-preview` | `/products/adjustable-aluminium-phone-tablet-stand-preview?preview_theme_id=151207542967` |

**Viewports:** desktop **1366×768**; mobile **390×844**

**Regression routes (harness):** homepage, search (`cable`, `organiser`, `drawer divider`), `controlled-pilot` collection.

---

## 3. Pre-check

| Check | Result |
| --- | --- |
| Branch | `master` |
| `artifacts/` | **gitignored** ✓ |
| `tools/catalogue/` | Untracked — **not** committed ✓ |
| Admin mutation / theme push / publish / import / app install | **Not** performed ✓ |
| **Supplier verified** change | **Not** planned ✓ |

---

## 4. Four PDP validation summary

| Handle | HTTP | Shopify hero | Commerce | Mobile overflow | Verdict |
| --- | --- | --- | --- | --- | --- |
| `cable-tidies-set` | **200** | **Yes** — CDN hero, alt preview-safe | **PASS** | **PASS** | **PASS WITH NOTES** |
| `five-division-drawer-divider-preview` | **200** | **Yes** | **PASS** | **PASS** | **PASS WITH NOTES** |
| `compact-cutlery-drawer-organiser-preview` | **200** | **Yes** | **PASS** | **PASS** | **PASS WITH NOTES** |
| `adjustable-aluminium-phone-tablet-stand-preview` | **200** | **Yes** | **PASS** | **PASS** | **PASS WITH NOTES** |

**Hero signals (desktop sample):** `heroNaturalWidth` **720**; alts match **21EJ** softened programme wording. Storefront image URLs use shop-relative **`/cdn/shop/files/`** (not legacy `cdn.shopify.com` host only).

**21EL blocker closed:** post-**21EM** `image-permission-confirmed`, theme `current_show_catalog_media` gate allows attached Admin media to render.

---

## 5. Specific content checks

| Check | Result |
| --- | --- |
| Theme placeholder as main image | **PASS** — no placeholder-only gallery |
| Purchase / checkout / customer path | **PASS** — no active Add to Cart / Buy Now / checkout links |
| **Supplier verified** | **PASS** — absent |
| Price posture | **PASS** — price-to-confirm / preview-safe |
| Stock, delivery, warranty, pack-count claim regression | **PASS** — no blocked phrases in description sample |
| **DW-TA-01** hero alt **100 pcs** overclaim | **PASS** — alt does not assert pack count |
| **DW-TA-01** H1 **(100 pcs)** | **NOTE** — pre-existing title copy; separate copy slice if PO wants alignment |
| R2/R3 programme illustration (not SKU photography) | **PASS WITH NOTES** — expected neutral programme media posture |

---

## 6. Regression routes

| Route | Desktop | Mobile |
| --- | --- | --- |
| Homepage | **PASS** | **PASS** |
| Search `cable` | **PASS** (live cards **2**) | **PASS** |
| Search `organiser` | **PASS** (live cards **10**) | **PASS** |
| Search `drawer divider` | **PASS** (live cards **4**) | **PASS** |
| **`controlled-pilot`** | **PASS** (grid **3**) | **PASS** (grid **3**) |

**No** purchase CTA regression. **No** **Supplier verified** on search sample. **No** mobile horizontal overflow on PDP or regression sample.

---

## 7. Harness adjustment (this slice)

The **21EL** harness initially false-failed when heroes were visible because detection required `cdn.shopify.com` in `src` only; preview theme serves **`/cdn/shop/files/`** URLs. Harness updated to accept shop-relative CDN paths, wait for hero load, and count hero from `.product-gallery-main` only.

---

## 8. Commands executed

```bash
git status --short --branch
git check-ignore -v artifacts/
node --check tools/qa/run-slice-21el-four-product-media-pdp-validation.mjs
SLICE_QA_EVIDENCE=slice-21en-four-product-media-pdp-validation \
  PLAYWRIGHT_BROWSERS_PATH=~/.cache/ms-playwright \
  node tools/qa/run-slice-21el-four-product-media-pdp-validation.mjs --manual-unlock
```

---

## 9. Strict confirmations

- **Read-only** rendered QA — **no** Admin mutation, media upload, theme push, publish, checkout, import, or app install in **21EN**.
- **No** credentials, customer/order/payment data, or supplier credentials in this doc.
- **No** screenshots, HAR, traces, or raw private evidence committed.

---

## Next owner

**Product Owner** — accept four-product preview media posture on restricted preview; optionally schedule **21EK** demo catalogue cleanup (**T1**) or **DW-TA-01** title copy alignment as separate approved slices.
