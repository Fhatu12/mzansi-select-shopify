# Slice 21FG — rendered product-experience QA (15-product baseline)

**Document type:** Read-only rendered QA  
**Prepared:** 2026-05-22  
**Owner:** QA / Test Engineer  
**Slice:** **21FG**  
**Store:** `dropshippoc.myshopify.com`  
**Live theme:** `151207542967` / Mzansi Select MVP Preview / **live**

**Upstream:** **21FD** (`1a4fc43`) theme features; **21FF** (`8f75705`) Admin commerce tags on **15** visible products.

**Evidence (local; not committed):** `artifacts/catalogue/slice-21fg/2026-05-22T12-20-46/summary.json`  
**Harness (local):** `artifacts/catalogue/slice-21fg/run-rendered-qa.mjs`

---

## 1. Executive verdict

**PASS WITH NOTES**

Rendered QA ran on the **live password-gated storefront** using **manual unlock** (headed Chromium). **MVP routes** (`/`, search, **12** MVP foundation PDPs on desktop) show **21FD** gallery, option preview, commerce gate, and overflow behaviour largely **acceptable**. **Two blockers** prevent full acceptance:

1. **Wishlist persistence — FAIL** in automation (toggle did not write `mzansi-wishlist-v1`; hearts are present on cards/PDPs).
2. **`/collections/all` — FAIL (21FC-B split-theme)** — Horizon template with **17** `cart/add` forms (desktop), **no** wishlist hearts, and **four** **21EZ**-hidden products still linked.

**Recommendation:** Do **not** treat copy-update slice as unblocked until wishlist persistence is re-verified (manual or fixed harness). Collection route acceptance requires **21FC-C** / Theme Editor rebind — not in scope here.

---

## 2. Pre-check

| Check | Result |
| --- | --- |
| Branch | `master` @ **`8f75705`** |
| `artifacts/` | **gitignored** ✓ |
| `tools/catalogue/` | Untracked — **not** committed ✓ |
| Admin / theme / publish / copy | **Not** performed ✓ |
| Unlock | **manual-unlock** (no password stored) |

---

## 3. Admin baseline confirmation

Read-only GraphQL (`artifacts/catalogue/slice-21ff/run-tech-commerce-tags.mjs` audit path):

| Metric | Result |
| --- | ---: |
| Online Store **visible** | **15** ✓ |
| Online Store **hidden** (ACTIVE, unpublished) | **15** ✓ |
| Commerce gate on visible set | **15/15** (`non-purchasable` + `price-to-confirm`) ✓ |
| **21EZ** four removals on Online Store | **Absent** ✓ |

Baseline matched PO acceptance before rendered QA proceeded.

---

## 4. Routes and viewports tested

| Route | Desktop 1366×768 | Mobile 390×844 |
| --- | --- | --- |
| `/` | Tested | Tested |
| `/search?q=organiser&type=product` | Tested | Tested |
| `/collections/all` | Tested | Tested |
| **15** PDPs (`/products/<handle>`) | Tested | Tested |

**Priority PDPs (multi-image / options / tech):** all **15** handles from Admin visible list, including **`low-delay-wireless-tws-games-sports-headset`** and **`vertical-office-mouse-wireless-mouse-vertical-mouse`**.

---

## 5. Wishlist QA

| Check | Result |
| --- | --- |
| Hearts on homepage cards | **PASS** — **6** `[data-wishlist-toggle]` on desktop |
| Hearts on MVP PDPs | **PASS** — observed (e.g. tech PDPs **2** hearts desktop) |
| Toggle → `localStorage` `mzansi-wishlist-v1` | **FAIL** — entry remained empty after forced click in harness |
| Persist after reload | **FAIL** — not reached (no storage write) |
| Card ↔ PDP sync | **NOT VERIFIED** — PDP heart not found for first homepage card handle in one run |
| Login / email / backend | **PASS** — no account flow observed |
| `aria-pressed` / label update | **NOT VERIFIED** — storage step failed first |

**Note:** Hearts render and **`wishlist-local.js`** is on live theme (**21FD** push). Automated click may be blocked by layout/overlay or unlock timing — **manual re-check recommended** before copy slice.

---

## 6. Gallery / zoom QA (MVP foundation PDPs)

| Check | Desktop | Mobile |
| --- | --- | --- |
| `[data-product-gallery]` present | **PASS** — **12/15** desktop PDPs MVP foundation | **PASS** on sampled MVP PDPs |
| Thumbnails + prev/next (multi-image) | **PASS** — e.g. tissue rack **13** thumbs, flatware **16**, under-sink **26** | **PASS** — thumbs present |
| Thumbnail selects active image | **PASS** — harness click + active state | **PASS** |
| Desktop hover zoom pane | **PASS** — `zoomOk: true` on multi-image MVP desktop samples | N/A |
| Mobile zoom pane hidden | **PASS** — `zoomOk: true` on mobile samples | **PASS** |
| Single-image controls | **PASS** — nav hidden when thumbs ≤ 1 | **PASS** |
| Layout overflow | **PASS** — MVP PDPs **1351/1351** desktop, **375/375** mobile | **PASS** |

**Tech products (PO-added):** both MVP PDPs — headset **8** thumbs / **5** option buttons; mouse **6** thumbs / **3** option buttons; gallery/zoom **PASS** on desktop.

---

## 7. Colour / variant selector QA

| Check | Result |
| --- | --- |
| Selectors only on real options | **PASS** — `data-option-value` counts match products with colour/size options (0 where no options) |
| No `[data-fake-colour]` | **PASS** — **0** on tested PDPs |
| Unavailable combinations disabled | **PASS** — harness uses disabled state checks (**21FD** script) |
| No cart/checkout from selection | **PASS** — **0** `cart/add`, **0** Add to Cart on MVP PDPs |
| Price-to-confirm visible | **PASS** — text present on MVP PDPs |

---

## 8. Commerce and safety QA

### MVP routes (homepage + search + MVP PDPs)

| Check | Result |
| --- | --- |
| `cart/add` forms | **PASS** — **0** on `/` and search (desktop + mobile) |
| Quick-add | **PASS** — **0** on MVP listing routes |
| Checkout paths | **PASS** — **0** |
| Supplier verified | **PASS** — **0** |
| Price-to-confirm on listings | **PASS** — **12** matches desktop homepage/search |
| Demo placeholders | **PASS** — **0** static demo cards |
| Mobile horizontal overflow | **PASS** — **375/375** homepage mobile |
| Liquid runtime error | **PASS WITH NOTES** — harness `liquidError: 1` on many MVP pages likely **substring false positive** (product copy contains “liquid”); **no** visible `Liquid error (` snippet observed on MVP homepage sample |

### `/collections/all` (split-theme — Horizon)

| Check | Result |
| --- | --- |
| Horizon section IDs | **FAIL** — **17** `template--19626890985655__*` sections |
| `cart/add` forms (desktop) | **FAIL** — **17** |
| Wishlist hearts | **FAIL** — **0** |
| **21EZ** hidden four linked | **FAIL** — all **four** handles still in grid links |
| Price-to-confirm | **FAIL** — **0** on collection page |
| Mobile overflow | **PASS** — **380/380** |

**Commerce gate on MVP surfaces:** **PASS**. **Collection grid:** **FAIL** — pre-existing **21FC-B** issue; not a **21FD** regression.

---

## 9. Split-theme observation

| Surface | Template | Impact |
| --- | --- | --- |
| `/`, `/search` | MVP **`151207542967`** | **21FD** features observable |
| **Most PDPs** (e.g. **12/15** desktop) | MVP foundation | Gallery/wishlist/options **PASS** |
| `/collections/all` | **Horizon** `148914077879` | Commerce leak, stale **17**-product grid, hidden SKUs visible |
| Some PDPs (e.g. bamboo drawer desktop) | Non-MVP layout in one run | No `[data-product-gallery]` — treat as split/binding outlier |

**Fix path:** **21FC-C** Theme Editor rebind or Support — **not** executed in **21FG**.

---

## 10. Product Owner decision (before Admin copy)

| Question | Guidance |
| --- | --- |
| Is **15**-product Admin baseline correct? | **Yes** — confirmed |
| Is **21FD** gallery/options acceptable on MVP PDPs? | **Yes with notes** — desktop/mobile behaviour **PASS** on tested MVP PDPs |
| Is wishlist acceptable? | **Re-test required** — automation **FAIL**; manual confirmation advised |
| Is `/collections/all` acceptable? | **No** — split-theme + commerce leak until **21FC-C** |
| Proceed with **21FD** copy Admin slice? | **Only after** wishlist manual **PASS** and PO accepts collection-route risk |

---

## 11. Commands executed

```bash
git status --short --branch
git check-ignore -v artifacts/
node artifacts/catalogue/slice-21ff/run-tech-commerce-tags.mjs
PLAYWRIGHT_BROWSERS_PATH=~/.cache/ms-playwright \
  node artifacts/catalogue/slice-21fg/run-rendered-qa.mjs --manual-unlock
```

(`MZANSI_STOREFRONT_PASSWORD` was **unset**; QA used **manual-unlock** only.)

---

## 12. Remaining blockers

| Blocker | Owner |
| --- | --- |
| Wishlist persistence not proven in automation | **QA** — manual re-test or harness fix |
| **21FC-B** `/collections/all` Horizon + commerce leak | **Product Owner** — **21FC-C** |
| **21FD** Admin copy | **Product Owner** — after wishlist + route acceptance |

---

## 13. Recommended next owner

1. **QA / Test Engineer** — manual wishlist check on `/` + one PDP (reload + sync); optional re-run with `MZANSI_STOREFRONT_PASSWORD` set locally.
2. **Product Owner** — approve **21FC-C** for collection route or accept collection-page risk.
3. **Product Owner** — approve **21FD** copy table after wishlist **PASS**.

---

## 14. Safety

No passwords, cookies, tokens, customer/order/payment data, supplier credentials, HAR, traces, or screenshots are stored in this document.
