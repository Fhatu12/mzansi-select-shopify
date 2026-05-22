# Slice 21FA — live 13-SKU storefront QA

**Document type:** Read-only live storefront QA  
**Prepared:** 2026-05-22  
**Owner:** QA / Test Engineer  
**Slice:** **21FA**  
**Store:** `dropshippoc.myshopify.com`  
**Live theme:** `148914077879` / Horizon / **live**  
**Evidence (local; not committed):** `artifacts/catalogue/slice-21fa/2026-05-22T09-07-03/summary.json`

**Upstream:** **21EZ** (`0af08e3`) — **13** visible / **15** hidden Admin baseline; **21EX-B** (`6a449d2`) — live commerce gate **PASS** at **17** SKUs.

---

## 1. Executive verdict

**FAIL**

Manual password unlock **succeeded**. Live rendered QA **does not** match the **21EZ** Admin catalogue baseline. Commerce gate **regressed** on at least one PDP and on **mobile** `/collections/all`.

| Area | Result |
| --- | --- |
| Admin baseline at QA time | **13** Online Store visible — **PASS** (read-only spot-check) |
| Storefront visible count (`/collections/all`) | **17** product links observed — **FAIL** (expected **13**) |
| **21EZ** four removals absent from surfaces | **FAIL** — all four still linked on `/collections/all` (desktop + mobile) |
| Commerce gate — PDPs | **12/13 PASS**, **1 FAIL** (`handmade-cotton-organizer-basket-…`) |
| Commerce gate — listing routes | Desktop `/collections/all` **0** cart forms; **mobile** `/collections/all` **17** cart forms + **17** quick-add — **FAIL** |
| Demo placeholders | **PASS** — none observed |
| Supplier verified | **PASS** — none observed |

---

## 2. Pre-check

| Check | Result |
| --- | --- |
| Branch | `master` @ **`0af08e3`** |
| `artifacts/` | **gitignored** ✓ |
| `tools/catalogue/` | Untracked — **not** committed ✓ |
| Admin / theme / checkout / import / media | **Not** performed ✓ |

---

## 3. Catalogue baseline (reference)

| Baseline | Count |
| --- | ---: |
| Online Store visible (Admin) | **13** |
| Hidden from Online Store (Admin) | **15** |
| Commerce gate tags on visible set | **`non-purchasable`** + **`price-to-confirm`** (unchanged in Admin) |

**21EZ removals (must be absent on storefront):** `adjustable-laptop-stand`, `usb-c-charging-cable-1-2m`, `available-regular-price`, `keep-room-tidy-for-dirty-clothes-waterproof-fabric-foldable-hamper`

---

## 4. Routes and viewports tested

| Viewport | Size | Routes |
| --- | --- | --- |
| **Desktop** | 1366×768 | Homepage, `/collections/all`, `/search?q=organiser&type=product` |
| **Mobile** | 390×844 | Homepage, `/collections/all`, `/search?q=organiser&type=product` |
| **PDPs** | Desktop 1366×768 | All **13** visible handles |

**Harness:** `artifacts/catalogue/slice-21fa/run-live-13-sku-storefront-qa.mjs`

---

## 5. Hidden-product absence

| Surface | Four **21EZ** removals absent? | Notes |
| --- | --- | --- |
| Homepage (desktop + mobile) | **Partial FAIL** | `adjustable-laptop-stand`, `usb-c-charging-cable-1-2m` still linked |
| `/collections/all` (desktop + mobile) | **FAIL** | All **four** still linked; **17** product links total |
| Search organiser (desktop + mobile) | **Partial FAIL** | `usb-c-charging-cable-1-2m` still linked on both |

**Admin read-back at QA time:** all **four** remain **unpublished** from Online Store — storefront visibility **lags or diverges** from Admin (likely theme/homepage static handles + collection render/cache; not re-tested after CDN delay).

---

## 6. Commerce-gate results

### Listing routes

| Route | Viewport | cart/add forms | quick-add | enabled ATC | dynamic checkout |
| --- | --- | ---: | ---: | ---: | ---: |
| Homepage | desktop / mobile | **0** | **0** | **0** | **0** |
| `/collections/all` | desktop | **0** | **0** | **0** | **0** |
| `/collections/all` | **mobile** | **17** | **17** | **0** | **0** |
| Search organiser | desktop / mobile | **0** | **0** | **0** | **0** |

### PDPs (13)

| Result | Count | Handles |
| --- | ---: | --- |
| **PASS** | **12** | All except `handmade-cotton-organizer-basket-vegetable-platter-tabletop-flat-tray-for-bread-candy-fruit-vegetable-1` |
| **FAIL** | **1** | `handmade-cotton-organizer-basket-vegetable-platter-tabletop-flat-tray-for-bread-candy-fruit-vegetable-1` — **1** cart form, **2** enabled ATC, **1** dynamic checkout, **0** `.product-commerce-gate-notice`, missing **Price to be confirmed** copy |

**12** passing PDPs: commerce notice present; **0** cart forms; **Price to be confirmed** + prep-launch copy present.

---

## 7. Visible product count observed

| Surface | Expected | Observed | Match |
| --- | ---: | ---: | --- |
| `/collections/all` (desktop + mobile) | **13** | **17** | **FAIL** |
| Homepage product links | subset of **13** | **8** (includes **2** unpublished handles) | **FAIL** |
| Search organiser | subset of **13** | **8** (includes **1** unpublished handle) | **FAIL** |
| PDP direct URLs (13) | load gated | **13/13** reachable | **PASS** (URLs load; **1** gate fail) |

All **13** approved visible handles were found on `/collections/all` alongside **four** products that Admin marks hidden.

---

## 8. Other acceptance checks

| Check | Result |
| --- | --- |
| Product cards link to PDPs | **PASS** on tested surfaces |
| Demo placeholders | **PASS** — no Premium Headphones / French Press hits |
| Mobile horizontal overflow | **PASS** — no overflow flagged |
| Checkout/payment path from product surfaces | **FAIL** on `handmade-cotton` PDP + **mobile** collection (forms present) |

---

## 9. Root-cause hypotheses (desk)

1. **Storefront catalogue count (17 vs 13):** Online Store publication change from **21EZ** not reflected on live collection render, or `/collections/all` still surfaces unpublished members until cache/theme refresh.  
2. **Homepage removed-handle links:** Likely **static / handle-driven** homepage rails (cf. **21ET**) still reference pre-**21EZ** handles.  
3. **Mobile collection commerce regression:** Horizon collection quick-add / cart forms active at **390px** despite desktop collection passing — viewport-specific gate gap (cf. **21EX-B** collection fixes).  
4. **`handmade-cotton` PDP:** Product-information commerce gate not applied on this template instance (cf. **21EX-B** `closest.product` scope fixes).

---

## 10. Remaining launch blockers

1. Live storefront must match **13**-product Admin baseline on `/collections/all`, homepage, and search.  
2. **21EZ** four removals must not appear on any customer-facing product surface.  
3. Commerce gate must pass on **all 13** PDPs and **both** viewports on listing routes (mobile collection is **blocking**).  
4. Image-rights, supplier proof, pricing, and checkout gating remain programme-blocked.  
5. Re-run **21FA** after visibility/CDN alignment or bounded live theme fix slice (requires separate PO approval).

---

## 11. Commands executed

```bash
git status --short --branch
git check-ignore -v artifacts/
PLAYWRIGHT_BROWSERS_PATH=~/.cache/ms-playwright \
  node artifacts/catalogue/slice-21fa/run-live-13-sku-storefront-qa.mjs
```

---

## 12. Safety

No passwords, cookies, tokens, HAR, screenshots, or customer/payment data recorded in this document.

---

## Next owner

**Product Owner** — accept **FAIL**; approve **21FA-B** (or equivalent): (1) live theme fix for mobile collection commerce gate + `handmade-cotton` PDP gate; (2) homepage/collection visibility alignment with **13**-SKU Admin baseline; (3) re-run **21FA** harness after fixes. **No** Admin mutation required if visibility is cache-only — optional delayed re-run first.
