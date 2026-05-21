# Slice 21EJ — four-product neutral media upload execution

**Document type:** DevOps / Platform execution note  
**Prepared:** 2026-05-21  
**Owner:** DevOps / Platform Engineer  
**Slice:** **21EJ**  
**Store:** `dropshippoc.myshopify.com`  
**Live theme:** `148914077879` (Horizon — **not** touched)  
**Preview theme:** `151207542967` (Mzansi Select MVP Preview — **not** pushed)

**Upstream:**

- **Slice 21EI** — media upload plan (`28d4015`)
- **Slice 21EJ-B** — neutral pack creation (`8757539`)
- **Slice 21EJ-C** — G2 image-use review (`193cbe1`, **PASS WITH NOTES**)
- **Product Owner — 21EI §8:** bounded **media-only** upload for **four** handles and **four** approved `artifacts/media/slice-21ej-a/final/` JPEGs

**Execution runner (local; not committed):** `artifacts/devops/slice-21ej/run-four-media-upload.mjs`

**Evidence (local; not committed):** `artifacts/devops/slice-21ej/` — `pre-write-checkpoint.json`, `mutation-log.json`, `post-write-checkpoint.json`, `execution-summary.json`

---

## 1. Executive verdict

**PASS**

Bounded Admin execution attached **one** programme-owned neutral hero image per **four** approved local-first preview products. **No** other products modified. **No** title, tags, price, inventory, publication, theme, checkout, or **`Supplier verified`** changes detected on read-back.

**Handoff:** **21EL** rendered PDP QA on preview theme **`151207542967`**.

---

## 2. Pre-write checkpoint

| Check | Result |
| --- | --- |
| **Git branch** | `master` |
| **`artifacts/media/slice-21ej-a/`** | **gitignored** ✓ |
| **`tools/catalogue/`** | Untracked — **not** committed ✓ |
| **Shopify CLI auth** | Stored store auth loaded (**no** credentials in doc) |
| **Live theme push / publish** | **Not** planned ✓ |
| **Target handles** | **4/4** resolved uniquely — **no** duplicates |

**Pre-write media counts (all four):** **0**

**Evidence:** `artifacts/devops/slice-21ej/pre-write-checkpoint.json` — captured **2026-05-21T20:37:02Z**

---

## 3. Product target verification

| Launch ID | Handle | Product ID | Pre media | Variant SKU | AFS | Price |
| --- | --- | --- | --- | --- | --- | --- |
| **DW-TA-01** | `cable-tidies-set` | `gid://shopify/Product/8559570583735` | **0** | **PCB-CT-25150** | **false** | **0.00** |
| **DW-HL-02** | `five-division-drawer-divider-preview` | `gid://shopify/Product/8577758888119` | **0** | **HAF-SD-4160** | **false** | **0.00** |
| **DW-KS-04** | `compact-cutlery-drawer-organiser-preview` | `gid://shopify/Product/8577759248567` | **0** | **null** | **false** | **0.00** |
| **DW-OD-05** | `adjustable-aluminium-phone-tablet-stand-preview` | `gid://shopify/Product/8577759445175` | **0** | **null** | **false** | **0.00** |

**Tags (unchanged on post-write):** `preview-only`, `non-purchasable`, `price-to-confirm`, `supplier-proof-in-progress`, `local-supplier-route` — **no** `Supplier verified`.

---

## 4. Admin writes performed

**CLI pattern:** `shopify store execute --store dropshippoc.myshopify.com --allow-mutations -j`

**Per product:**

1. `stagedUploadsCreate` — **PRODUCT_IMAGE**, JPEG  
2. HTTP **POST** binary to staged target (local approved file)  
3. `productCreateMedia` — `mediaContentType: IMAGE`, `originalSource`, `alt`

| Handle | Source file | Alt text (applied) | Post media ID |
| --- | --- | --- | --- |
| `cable-tidies-set` | `mzansi-cable-tidies-set-hero-01.jpg` | Cable Tidies Set — preview product image | `gid://shopify/MediaImage/35793185636535` |
| `five-division-drawer-divider-preview` | `mzansi-five-division-drawer-divider-preview-hero-01.jpg` | 5-Division Drawer Divider — preview product image | `gid://shopify/MediaImage/35793186226359` |
| `compact-cutlery-drawer-organiser-preview` | `mzansi-compact-cutlery-drawer-organiser-preview-hero-01.jpg` | Compact Cutlery Drawer Organiser — preview product image | `gid://shopify/MediaImage/35793187602615` |
| `adjustable-aluminium-phone-tablet-stand-preview` | `mzansi-adjustable-aluminium-phone-tablet-stand-preview-hero-01.jpg` | Adjustable Aluminium Phone and Tablet Stand — preview product image | `gid://shopify/MediaImage/35793188913335` |

**Alt-text note:** **DW-TA-01** alt softened per **21EJ-C** — removed **(100 pcs)** from alt to avoid overclaim vs illustrative image.

**Mutation errors:** **0** (`mediaUserErrors` empty on all four)

**Command executed:**

```bash
node artifacts/devops/slice-21ej/run-four-media-upload.mjs
```

---

## 5. Post-write verification

| Check | Result |
| --- | --- |
| **Media count per in-scope handle** | **1** (was **0**) |
| **Only approved files attached** | **PASS** — one **IMAGE** each |
| **Alt text** | Matches **§4** table |
| **Title / status / tags** | **Unchanged** |
| **`availableForSale`** | **false** on all four |
| **Price** | **0.00** |
| **CJ spot-check** | `beverage-bottle-oil-bottle-handle-holder`, `usb-bag-sealer` — media count **0** (unchanged) |
| **Live theme** | **Not** pushed |
| **Checkout / payment / customer** | **Not** touched |

**Evidence:** `artifacts/devops/slice-21ej/post-write-checkpoint.json` — captured **2026-05-21T20:38:34Z**

---

## 6. Per-product before / after media summary

| Handle | Before | After |
| --- | --- | --- |
| `cable-tidies-set` | **0** media | **1** IMAGE — neutral programme hero |
| `five-division-drawer-divider-preview` | **0** | **1** IMAGE |
| `compact-cutlery-drawer-organiser-preview` | **0** | **1** IMAGE |
| `adjustable-aluminium-phone-tablet-stand-preview` | **0** | **1** IMAGE |

---

## 7. Blocked actions — confirmation

| Blocked | Status |
| --- | --- |
| Live theme publish / push | **Not** performed |
| Product copy / price / inventory / tags | **Not** changed |
| **`Supplier verified`** | **Not** introduced |
| **CJ** / **Gadgetgyz** / demo products | **Not** touched |
| Import / sync / app install | **Not** performed |
| Checkout / payment / customer enablement | **Not** performed |
| Commit `artifacts/` or images | **Not** committed |

---

## 8. Rollback (if needed)

1. Read `pre-write-checkpoint.json` — baseline **0** media.  
2. `productDeleteMedia` for media IDs in `post-write-checkpoint.json`.  
3. Confirm `mediaCount` **0** on all four handles.  
4. Re-run **21EE**-class placeholder QA if rolled back.

---

## 9. Slice 21EL QA handoff

**Owner:** **QA / Test Engineer**  
**Theme:** `151207542967`  
**Unlock:** `--manual-unlock` (password-gated preview)

### 9.1 Primary PDP routes

| Launch ID | URL |
| --- | --- |
| **DW-TA-01** | `/products/cable-tidies-set?preview_theme_id=151207542967` |
| **DW-HL-02** | `/products/five-division-drawer-divider-preview?preview_theme_id=151207542967` |
| **DW-KS-04** | `/products/compact-cutlery-drawer-organiser-preview?preview_theme_id=151207542967` |
| **DW-OD-05** | `/products/adjustable-aluminium-phone-tablet-stand-preview?preview_theme_id=151207542967` |

**Viewports:** desktop **1366×768**; mobile **390×844**

### 9.2 Checks (per PDP)

| # | Check |
| --- | --- |
| 1 | HTTP **200** |
| 2 | Hero image renders — **no** broken image |
| 3 | **One** product image in gallery (not theme placeholder) |
| 4 | Alt text present in DOM/accessibility where inspectable |
| 5 | **No** Add to Cart / Buy Now |
| 6 | **Not** available to buy / **AFS false** posture |
| 7 | **Price to be confirmed** — **no** final price |
| 8 | **No** `Supplier verified` |
| 9 | **No** final delivery/stock/warranty claims |
| 10 | **No** horizontal overflow (mobile) |
| 11 | Preview label visible on image if policy requires on-storefront check |

### 9.3 Regression smoke

- Homepage — load OK  
- Search — each handle/title fragment  
- **`controlled-pilot`** collection — **CJ** three unchanged; no purchase regression  

### 9.4 Restrictions carried into **21EL**

- Images are **programme illustrations** — **Preview image** / **Preview representation** on pixels  
- **Not** launch photography; **not** SKU-verified  
- **DW-TA-01** body may still mention **100 pcs** — image/alt do **not** guarantee pack count  

**Evidence path:** `artifacts/qa/slice-21el-four-product-media-pdp-validation/` (local; **not** committed)

---

## 10. Copy/paste-ready 21EL QA prompt

```text
Slice 21EL — four-product media PDP validation (post-21EJ)

Store: dropshippoc.myshopify.com
Preview theme: 151207542967
Harness: extend tools/qa/run-slice-21ec-four-local-pdp-validation.mjs or new slice-21el runner
Unlock: --manual-unlock

Validate four PDPs (desktop 1366x768 + mobile 390x844):
/products/cable-tidies-set?preview_theme_id=151207542967
/products/five-division-drawer-divider-preview?preview_theme_id=151207542967
/products/compact-cutlery-drawer-organiser-preview?preview_theme_id=151207542967
/products/adjustable-aluminium-phone-tablet-stand-preview?preview_theme_id=151207542967

PASS criteria: HTTP 200; Shopify hero image renders (not theme placeholder); 1 gallery image;
no purchase CTAs; no Supplier verified; price-to-confirm; no claim regression; no mobile overflow.
Regression: homepage, search, controlled-pilot collection.
Evidence: artifacts/qa/slice-21el-four-product-media-pdp-validation/ (not committed).
```

---

## 11. Strict confirmations

- **No** credentials, cookies, tokens, customer/order/payment data, or supplier credentials in this doc.
- **`artifacts/devops/slice-21ej-*`** and **`artifacts/media/*`** remain **gitignored** and **uncommitted**.

---

## Next owner

**QA / Test Engineer** — **21EL** rendered validation per **§9–§10**.
