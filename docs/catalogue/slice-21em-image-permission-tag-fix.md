# Slice 21EM — image-permission-confirmed tag fix (execution)

**Document type:** DevOps / Platform execution note  
**Prepared:** 2026-05-22  
**Owner:** DevOps / Platform Engineer  
**Slice:** **21EM**  
**Store:** `dropshippoc.myshopify.com`  
**Preview theme:** `151207542967` (unchanged — **not** pushed)  
**Live theme:** `148914077879` (Horizon — **not** touched)

**Upstream:**

- **Slice 21EJ** — media upload (`a90289d`, **PASS**)
- **Slice 21EL** — PDP validation (**FAIL** — theme media gate; `a3e54e7`)
- **Product Owner approval:** bounded **tag-only** pass — add **`image-permission-confirmed`** on **four** handles only

**Execution runner (local; not committed):** `artifacts/devops/slice-21em/run-tag-only-fix.mjs`

**Evidence (local; not committed):** `artifacts/devops/slice-21em/` — `pre-write-checkpoint.json`, `mutation-log.json`, `post-write-checkpoint.json`, `cj-spot-check.json`, `execution-summary.json`

---

## 1. Executive verdict

**PASS**

**`image-permission-confirmed`** added to all **four** in-scope products. Existing tags preserved. **mediaCount** remains **1** on each. **No** other product fields changed. **CJ** spot-check rows **not** tagged.

**Handoff:** **Slice 21EN** — re-run **21EL** rendered PDP validation.

---

## 2. Pre-write checkpoint

| Check | Result |
| --- | --- |
| **Branch** | `master` |
| **`artifacts/`** | **gitignored** ✓ |
| **`tools/catalogue/`** | Untracked — **not** committed ✓ |
| **Shopify CLI auth** | Stored auth loaded (no secrets in doc) |
| **Theme push / publish / media upload** | **Not** planned ✓ |
| **Handles resolved** | **4/4** unique — **no** duplicates |

**Captured:** `2026-05-22T03:56:56Z` — `artifacts/devops/slice-21em/pre-write-checkpoint.json`

**Pre-write media:** all **four** at **1** image (required).

---

## 3. Per-product before / after tags

| Handle | Product ID | Before tags | After tags | Media |
| --- | --- | --- | --- | --- |
| `cable-tidies-set` | `gid://shopify/Product/8559570583735` | 5 programme tags | **+** `image-permission-confirmed` (6 total) | **1** → **1** |
| `five-division-drawer-divider-preview` | `gid://shopify/Product/8577758888119` | 5 | **+** tag (6) | **1** → **1** |
| `compact-cutlery-drawer-organiser-preview` | `gid://shopify/Product/8577759248567` | 5 | **+** tag (6) | **1** → **1** |
| `adjustable-aluminium-phone-tablet-stand-preview` | `gid://shopify/Product/8577759445175` | 5 | **+** tag (6) | **1** → **1** |

**Preserved tags (all four):** `preview-only`, `non-purchasable`, `price-to-confirm`, `supplier-proof-in-progress`, `local-supplier-route`

**Added only:** `image-permission-confirmed`

---

## 4. Unchanged fields (post-write confirmation)

| Field | All four |
| --- | --- |
| **Title** | **Unchanged** |
| **Status** | **ACTIVE** |
| **Variant SKU / price / AFS** | **Unchanged** (**AFS false**, **0.00**) |
| **Media count** | **1** |
| **`Supplier verified`** | **Absent** |

---

## 5. Admin write summary

| Item | Detail |
| --- | --- |
| **Mutation** | `productUpdate` — `tags` array only (full tag set = existing + new) |
| **CLI** | `shopify store execute --store dropshippoc.myshopify.com --allow-mutations -j` |
| **Command** | `node artifacts/devops/slice-21em/run-tag-only-fix.mjs` |
| **User errors** | **0** |

---

## 6. Out-of-scope spot-check (CJ)

| Handle | `image-permission-confirmed` | mediaCount |
| --- | --- | --- |
| `beverage-bottle-oil-bottle-handle-holder` | **No** | **0** |
| `usb-bag-sealer` | **No** | **0** |

---

## 7. Blocked actions — confirmation

| Blocked | Status |
| --- | --- |
| Live theme touch / theme push / publish | **Not** performed |
| Media upload / import / app install | **Not** performed |
| Title, body, price, inventory, collections, SEO | **Not** changed |
| **`Supplier verified`** | **Not** introduced |
| Checkout / payment / customer | **Not** enabled |

---

## 8. Slice 21EN QA handoff (copy/paste-ready)

```text
Slice 21EN — re-run four-product media PDP validation (post-21EM)

Store: dropshippoc.myshopify.com
Preview theme: 151207542967
Harness: node tools/qa/run-slice-21el-four-product-media-pdp-validation.mjs --manual-unlock
Evidence: artifacts/qa/slice-21en-four-product-media-pdp-validation/ (new timestamp folder; not committed)

Validate four PDPs at desktop 1366x768 and mobile 390x844:
/products/cable-tidies-set?preview_theme_id=151207542967
/products/five-division-drawer-divider-preview?preview_theme_id=151207542967
/products/compact-cutlery-drawer-organiser-preview?preview_theme_id=151207542967
/products/adjustable-aluminium-phone-tablet-stand-preview?preview_theme_id=151207542967

PASS criteria (21EL re-test):
- HTTP 200 on all four
- Shopify cdn.shopify.com/files/ hero visible (not theme placeholder only)
- shopifyMediaCount >= 1 per PDP in harness
- No purchase CTA; no Supplier verified; price-to-confirm posture
- No mobile horizontal overflow
- Regression: homepage, search (cable/organiser/drawer divider), controlled-pilot — desktop + mobile

Specific:
- cable-tidies-set: hero alt must not guarantee "100 pcs" on image/alt
- R2 products: illustration posture acceptable; not SKU-verified photography claims

Expected verdict: PASS or PASS WITH NOTES (not FAIL for theme-catalog-media-suppressed).
```

---

## 9. Strict confirmations

- **No** credentials, cookies, tokens, customer/order/payment data, or supplier credentials in this doc.
- **`artifacts/devops/slice-21em-*`** — **not** committed.

---

## Next owner

**QA / Test Engineer** — **Slice 21EN** rendered validation per **§8**.
