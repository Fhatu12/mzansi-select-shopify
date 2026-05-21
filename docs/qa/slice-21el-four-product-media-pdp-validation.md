# Slice 21EL — four-product media PDP validation (post-21EJ)

**Document type:** QA validation report (read-only rendered)  
**Prepared:** 2026-05-21  
**Owner:** QA / Test Engineer  
**Slice:** **21EL**  
**Store:** `dropshippoc.myshopify.com`  
**Preview theme:** `151207542967` / Mzansi Select MVP Preview / **unpublished**  
**Live theme:** `148914077879` / Horizon — **not** touched

**Upstream:**

- **Slice 21EJ** — media upload execution (`a90289d`, **PASS**)
- **Slice 21EJ-C** — G2 image-use review (`193cbe1`, **PASS WITH NOTES**)

**Unlock:** **`--manual-unlock`** (single Chromium session). **No** passwords, cookies, tokens, HAR, trace, video, or storage state stored.

**Harness (committed):** `tools/qa/run-slice-21el-four-product-media-pdp-validation.mjs`

**Evidence (local; not committed):** `artifacts/qa/slice-21el-four-product-media-pdp-validation/2026-05-21-204819/`

---

## 1. Executive verdict

**FAIL**

All **four** PDPs return **HTTP 200** and remain **preview-safe** for commerce (no purchase path, no **Supplier verified**, price-to-confirm posture). **Regression** routes **PASS**.

**Blocker:** Attached Shopify product media **does not render** on the preview theme PDP gallery. Admin read-back confirms **1** image per in-scope product with correct softened alt on **DW-TA-01**. Root cause: theme **`main-product-foundation.liquid`** suppresses catalog media when `preview-only` is present and **`image-permission-confirmed`** is **absent** (programme gate — **21EI** / **21EJ** did **not** add this tag).

**Not a rollback of 21EJ Admin attach** — media exists in Admin; storefront display requires a **separate approved** tag or theme-policy change.

---

## 2. Scope and routes

| Launch ID | Handle | Preview PDP route |
| --- | --- | --- |
| **DW-TA-01** | `cable-tidies-set` | `/products/cable-tidies-set?preview_theme_id=151207542967` |
| **DW-HL-02** | `five-division-drawer-divider-preview` | `/products/five-division-drawer-divider-preview?preview_theme_id=151207542967` |
| **DW-KS-04** | `compact-cutlery-drawer-organiser-preview` | `/products/compact-cutlery-drawer-organiser-preview?preview_theme_id=151207542967` |
| **DW-OD-05** | `adjustable-aluminium-phone-tablet-stand-preview` | `/products/adjustable-aluminium-phone-tablet-stand-preview?preview_theme_id=151207542967` |

**Viewports:** desktop **1366×768**; mobile **390×844**

---

## 3. Pre-check

| Check | Result |
| --- | --- |
| Branch | `master` |
| `artifacts/` | **gitignored** ✓ |
| `tools/catalogue/` | Untracked — **not** committed ✓ |
| Admin mutation / theme push / publish | **Not** performed ✓ |
| Shopify CLI auth | Available (no secrets logged) ✓ |

---

## 4. Admin cross-check (read-only)

Post-**21EJ** media remains attached (sample: **`cable-tidies-set`**):

| Field | Value |
| --- | --- |
| **mediaCount** | **1** |
| **Alt** | `Cable Tidies Set — preview product image` (**no** “100 pcs” in Admin alt) |
| **CDN** | `cdn.shopify.com/.../mzansi-cable-tidies-set-hero-01.jpg` |
| **Tags** | `preview-only`, `non-purchasable`, `price-to-confirm`, `supplier-proof-in-progress`, `local-supplier-route` — **no** `image-permission-confirmed` |

All **four** handles: **1** media each (**21EJ** post-write checkpoint class).

---

## 5. Four PDP validation summary

| Handle | HTTP | Shopify hero on PDP | Commerce | Mobile overflow | Verdict |
| --- | --- | --- | --- | --- | --- |
| `cable-tidies-set` | **200** | **No** — theme gate | **PASS** | **PASS** | **FAIL** |
| `five-division-drawer-divider-preview` | **200** | **No** | **PASS** | **PASS** | **FAIL** |
| `compact-cutlery-drawer-organiser-preview` | **200** | **No** | **PASS** | **PASS** | **FAIL** |
| `adjustable-aluminium-phone-tablet-stand-preview` | **200** | **No** | **PASS** | **PASS** | **FAIL** |

**Harness notes (all eight PDP checks):** `no-shopify-product-media` — no visible `cdn.shopify.com/files/` hero in `.product-gallery-main`.

**Visual (screenshots):** PDP gallery does **not** show programme neutral JPEG; placeholder / non-catalog treatment only.

---

## 6. Specific content checks

| Check | Result |
| --- | --- |
| **DW-TA-01** alt/image must not guarantee **100 pcs** on storefront hero | **N/A** — hero not rendered; title still mentions **(100 pcs)** in H1 (pre-existing copy — **not** introduced by **21EL**) |
| **R2/R3** not presented as SKU-verified photography | **PASS** — no photographic hero displayed |
| Restricted-preview appropriate | **PASS** — non-purchasable copy, no **Supplier verified** |

---

## 7. Regression routes

| Route | Desktop | Mobile |
| --- | --- | --- |
| Homepage `/?preview_theme_id=151207542967` | **PASS** | **PASS** |
| Search `?q=cable&type=product` | **PASS** | **PASS** |
| Search `?q=organiser&type=product` | **PASS** | **PASS** |
| Search `?q=drawer divider&type=product` | **PASS** | **PASS** |
| **`controlled-pilot`** collection | **PASS** (grid **3**) | **PASS** (grid **3**) |

**No** active Add to Cart / Buy Now on regression routes. **No** **Supplier verified** on search sample.

---

## 8. Root cause and recommended fix

| Item | Detail |
| --- | --- |
| **Cause** | `sections/main-product-foundation.liquid` sets `current_show_catalog_media = false` when `preview-only` **and** `image-permission-confirmed` is missing |
| **21EJ scope** | Media attach only — tag change explicitly out of scope |
| **G1/G2** | **Closed** — tag addition is the documented programme step after image-use approval |
| **Recommended next slice** | Bounded Admin tag-only pass: add `image-permission-confirmed` to **four** handles only, then re-run **21EL** |

---

## 9. Commands executed

```bash
node --check tools/qa/run-slice-21el-four-product-media-pdp-validation.mjs
PLAYWRIGHT_BROWSERS_PATH=~/.cache/ms-playwright \
  node tools/qa/run-slice-21el-four-product-media-pdp-validation.mjs --manual-unlock
```

Read-only Admin sample:

```bash
shopify store execute --store dropshippoc.myshopify.com -j \
  -q 'query { p: productByHandle(handle: "cable-tidies-set") { mediaCount { count } tags media(first:1){ nodes { alt } } } }'
```

---

## 10. Restrictions carried forward

- Programme illustrations attached in Admin — **not** visible on preview PDP until theme gate cleared  
- **No** live theme / publish / checkout changes in this slice  
- Re-validate after `image-permission-confirmed` tag slice  

---

## 11. Copy/paste-ready re-test prompt (post tag slice)

```text
Re-run Slice 21EL after image-permission-confirmed tag on four local-first handles.

node tools/qa/run-slice-21el-four-product-media-pdp-validation.mjs --manual-unlock

Expect: cdn.shopify.com/files/ hero visible on each PDP; alt without 100 pcs overclaim on DW-TA-01;
commerce checks unchanged PASS.
```

---

## 12. Strict confirmations

- **Read-only** rendered QA — **no** Admin mutation in **21EL**.
- **No** credentials, customer/order/payment data, or supplier credentials in this doc.
- **No** screenshots committed.

---

## Next owner

**Product Owner** — approve bounded **`image-permission-confirmed`** tag slice on **four** handles (post **G1/G2**), then **QA** re-run **21EL**.
