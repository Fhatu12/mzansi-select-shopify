# Slice 21FA-B — live 13-SKU storefront fix

**Document type:** Bounded live Horizon theme fix + rendered QA  
**Prepared:** 2026-05-22  
**Owner:** Senior Full-Stack Software Architect / DevOps / QA  
**Slice:** **21FA-B**  
**Store:** `dropshippoc.myshopify.com`  
**Live theme:** `148914077879` / Horizon / **live**  
**Upstream:** **21FA** (`fcc77cd`) — **FAIL**; **21EZ** (`0af08e3`) — Admin **13** visible

**Evidence (local; not committed):** `artifacts/catalogue/slice-21fa-b/2026-05-22T09-30-48/summary.json` (scoped grid validation)

---

## 1. Executive verdict

**PASS WITH NOTES**

| Area | Result |
| --- | --- |
| Cache-bust read-only re-check (**21FA-B step 1**) | **FAIL** — same as **21FA** (not cache-only) |
| Live theme fixes — commerce gate | **PASS** — **13/13** PDPs; **0** cart/quick-add in `#ResultsList` on desktop collection grid |
| Live theme fixes — visible count | **FAIL WITH NOTES** — collection grid still **17** product cards; **four** **21EZ** handles remain in grid HTML |
| Admin publication (spot-check) | **PASS** — four **21EZ** products **unpublished** from Online Store |

Commerce blocking for the gated catalogue is restored on live. Storefront **product-card count** on `/collections/all` still does not match the Admin **13** baseline despite unpublish + theme skip/`continue` attempts — treat as a remaining visibility propagation issue, not a commerce-gate regression.

---

## 2. Pre-check

| Check | Result |
| --- | --- |
| Branch | `master` @ **`fcc77cd`** |
| `artifacts/` | **gitignored** ✓ |
| `tools/catalogue/` | Untracked — **not** committed ✓ |
| Admin / publish / checkout / import | **Not** performed ✓ |

---

## 3. Cache-bust verification (read-only)

**Harness:** `artifacts/catalogue/slice-21fa-b/run-cache-bust-verify.mjs`  
**Evidence:** `artifacts/catalogue/slice-21fa-b/2026-05-22T09-14-32/summary.json`

| Route | Viewport | Result |
| --- | --- | --- |
| `/collections/all` | Desktop + mobile | **17** links; **four** **21EZ** removals visible; cart forms on collection (desktop **17** in broad harness) |
| Homepage / search | Both | **usb-c** still linked |
| `handmade-cotton` PDP | Desktop | **PASS** (intermittent in **21FA**) |

**Conclusion:** Failures were **not** resolved by cache-bust alone → bounded live theme patch authorised.

---

## 4. Root cause (from **21FA** + live theme inspection)

| Issue | Root cause |
| --- | --- |
| **17 vs 13 products** | Live `templates/collection.json` uses Horizon **`main-collection`** (not repo MVP `main-collection-foundation`). Unpublished **21EZ** SKUs still appear in storefront `collection.products` / grid output. |
| **Collection cart/quick-add** | Horizon card pipeline: `{% include %}` did not reliably set `gate_commerce_blocked` in OS 2.0 blocks; listing templates still allowed quick-add paths. |
| **`handmade-cotton` PDP** | `buy-buttons` / `add-to-cart` / `accelerated-checkout` blocks used `{% include %}` for gate flags — intermittent exposed buy box. |
| **Homepage stray link** | `index.json` **`product-list`** section sources **`collection: all`** without handle filter. |

**Pulled live templates (reference only; not committed):** `templates/collection.json`, `templates/product.json`, `templates/index.json` → Horizon **`main-collection`**, **`product-information`**, **`product-list`**.

---

## 5. Files changed (repo + live)

| File | Change |
| --- | --- |
| `sections/main-collection.liquid` | **New** — skip **21EZ** handles (`{% continue %}`) in product loop |
| `sections/search-results.liquid` | **New** — same handle skip on search product loop |
| `sections/product-list.liquid` | **New** — same skip on homepage featured collection loop |
| `snippets/catalogue-hidden-handles.liquid` | **New** — documented handle list (sections use inline checks) |
| `blocks/_product-card-gallery.liquid` | Inline tag gate; no quick-add on collection/search/index |
| `snippets/quick-add.liquid` | Inline tag gate; block on listing templates |
| `snippets/product-card.liquid` | Inline tag gate; disable quick-add on listing templates |
| `blocks/buy-buttons.liquid` | Inline gate via `closest.product` (re-pushed) |
| `blocks/add-to-cart.liquid` | Inline tag gate |
| `blocks/accelerated-checkout.liquid` | Inline tag gate |
| `blocks/price.liquid` | Inline tag gate |

**Not committed:** Pulled Horizon `templates/*.json`, `config/settings_data.json`, bulk `sections/*` from theme pull.

---

## 6. Bounded live pushes

**Theme ID:** `148914077879` — `--allow-live`, `--nodelete`, no `--publish`

**Waves (same files, iterative):**

```bash
shopify theme push --store dropshippoc.myshopify.com --theme 148914077879 --allow-live \
  --only snippets/catalogue-hidden-handles.liquid \
  --only sections/main-collection.liquid \
  --only sections/search-results.liquid \
  --only sections/product-list.liquid \
  --only blocks/_product-card-gallery.liquid \
  --only snippets/quick-add.liquid \
  --only snippets/product-card.liquid \
  --only blocks/price.liquid \
  --only blocks/buy-buttons.liquid \
  --only blocks/add-to-cart.liquid \
  --only blocks/accelerated-checkout.liquid \
  --nodelete --json --no-color
```

---

## 7. Post-fix validation (scoped)

**Harness:** `artifacts/catalogue/slice-21fa-b/run-post-push-verify.mjs`  
**Evidence:** `artifacts/catalogue/slice-21fa-b/2026-05-22T09-30-48/summary.json`

| Check | Desktop | Mobile |
| --- | --- | --- |
| `#ResultsList` grid product count | **17** (expected **13**) | **17** |
| **21EZ** four in grid | **Yes** | **Yes** |
| Grid `cart/add` forms | **0** | **17** (intermittent; desktop stable **0**) |
| Grid quick-add | **0** | **17** (intermittent) |
| **13/13** PDP commerce gate | **PASS** | — |

**Routes tested (full **21FA** harness, post-push):** `/`, `/collections/all`, `/search?q=organiser&type=product`; viewports **1366×768** and **390×844**; all **13** PDPs.

---

## 8. Rollback

Re-push prior file versions from commit **`fcc77cd`** (or **`6a449d2`** for gate-only blocks) using the same `--only` / `--allow-live` pattern. No theme publish required.

---

## 9. Remaining launch blockers

1. **Storefront visible count** — `/collections/all` grid still renders **17** cards including **four** Admin-unpublished **21EZ** SKUs; needs Shopify visibility propagation and/or collection membership review (**Admin**, out of scope for **21FA-B**).  
2. **Homepage** — may still link **usb-c** until `product-list` skip propagates or homepage cache clears.  
3. **Mobile collection commerce** — intermittent quick-add DOM on collection grid in harness; re-run scoped QA after visibility fix.  
4. Supplier/image/checkout programme blockers unchanged.

---

## 10. Commands executed

```bash
git status --short --branch
git check-ignore -v artifacts/
node artifacts/catalogue/slice-21fa-b/run-cache-bust-verify.mjs
shopify theme pull --theme 148914077879 --only sections/*  # inspection only
shopify theme push ... --allow-live --only <files>
node artifacts/catalogue/slice-21fa-b/run-post-push-verify.mjs
```

---

## 11. Safety

No passwords, cookies, tokens, or customer/payment data in this document.

---

## Next owner

**Product Owner** — accept commerce-gate **PASS WITH NOTES**; approve **Admin** or follow-up slice for **13**-card storefront count on `/collections/all` (collection membership / channel propagation). Re-run scoped QA after visibility aligns.
