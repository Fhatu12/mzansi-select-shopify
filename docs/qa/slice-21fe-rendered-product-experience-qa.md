# Slice 21FE — rendered product-experience QA and catalogue-count reconciliation

**Document type:** Read-only rendered QA + Admin catalogue reconciliation  
**Prepared:** 2026-05-22  
**Owner:** QA / Test Engineer  
**Slice:** **21FE**  
**Store:** `dropshippoc.myshopify.com`  
**Live theme:** `151207542967` / Mzansi Select MVP Preview / **live**  
**Upstream:** **Slice 21FD** (`1a4fc43`)

**Product Owner approval:** Read-only QA only — **no** Admin mutation, theme push, publish, or copy updates.

**Evidence (local; not committed):** `artifacts/catalogue/slice-21fe/2026-05-22T12-03-52/catalogue-reconciliation.json`

---

## 1. Executive verdict

**PASS WITH NOTES**

| Area | Result |
| --- | --- |
| Pre-check | **PASS** |
| Catalogue-count reconciliation | **PASS** — Admin visible count is **15** (not **13**); root cause **Admin baseline drift**, not 21FD harness error |
| Commerce tags on visible set | **FAIL WITH NOTES** — **2/15** missing gate tags |
| Rendered QA (21FD features) | **FAIL** — blocked in this environment (`MZANSI_STOREFRONT_PASSWORD` unset; `shopify theme dev` requires `--store-password` interactively) |
| Commerce/checkout safety (rendered) | **NOT RUN** — password gate |

**21FD count reconciliation:** The **21FD** copy audit correctly reported **15** Online Store–published products. The **13** figure was the **21EZ** baseline (2026-05-22), not a current Admin count. There is **no** evidence of split-theme or harness over-counting for the Admin audit.

---

## 2. Pre-check

| Check | Result |
| --- | --- |
| Branch | `master` @ **`1a4fc43`** ✓ |
| `artifacts/` | **gitignored** ✓ |
| `tools/catalogue/` | Untracked — **not** committed ✓ |
| Admin / theme push / publish / copy / checkout / import / media | **Not** planned / **not** performed ✓ |

---

## 3. Catalogue-count reconciliation

**Method:** Read-only GraphQL via `shopify store execute` — `status:active` products + `publishedOnPublication` for Online Store (`169105293495`).

| Metric | Value |
| --- | ---: |
| **ACTIVE** products (catalogue) | **30** |
| **Online Store visible** | **15** |
| **Online Store hidden** | **15** |
| **21EZ expected visible** | **13** |
| **21EZ four removals still visible** | **0** ✓ |

### Why 21FD saw 15 vs expected 13

| Hypothesis | Finding |
| --- | --- |
| Harness counting error | **Rejected** — 21FE Admin read-back also **15** |
| Stale 21EZ evidence | **Rejected** — fresh Admin query at slice time |
| Split-theme routing | **Not applicable** to Admin publication counts |
| Admin baseline drift | **Confirmed** — **two** additional products published to Online Store after **21EZ** |

### Extra visible products vs 21EZ baseline (exact handles)

| Handle | Title | Notes |
| --- | --- | --- |
| `low-delay-wireless-tws-games-sports-headset` | Low-delay Wireless TWS Games, Sports Headset | Tech category; **not** in **21EZ** visible **13** |
| `vertical-office-mouse-wireless-mouse-vertical-mouse` | Vertical Office Mouse Wireless Mouse Vertical Mouse | Tech category; **not** in **21EZ** visible **13** |

### Commerce gate tags (visible **15**)

| Check | Result |
| --- | --- |
| All visible have `non-purchasable` + `price-to-confirm` | **13/15 PASS** |
| Missing both gate tags | **2** handles (the two extra tech products above) |

**21EZ four hidden handles** (`adjustable-laptop-stand`, `usb-c-charging-cable-1-2m`, `available-regular-price`, `keep-room-tidy-for-dirty-clothes-waterproof-fabric-foldable-hamper`) remain **unpublished** from Online Store ✓.

---

## 4. Product Owner decision summary (before Admin copy update)

1. **Catalogue size:** Treat the authoritative visible catalogue as **15** products until a new bounded visibility slice returns to **13** (or another PO-approved count).
2. **Commerce gate first:** Do **not** proceed with **21FD** title/description Admin updates until the **two** tech products either receive `non-purchasable` + `price-to-confirm` tags (approved Admin slice) or are hidden from Online Store (approved visibility slice).
3. **Copy audit scope:** **21FD** copy table covers **15** rows — PO should confirm whether the **two** tech SKUs are in scope for copy cleanup or should be hidden first.
4. **Rendered 21FD validation:** Re-run `artifacts/catalogue/slice-21fe/run-rendered-qa.mjs` after setting `MZANSI_STOREFRONT_PASSWORD` locally **or** using `--manual-unlock` (headed Chromium; password **not** stored in repo).
5. **Split-theme:** **21FC-B** remains open — `/collections/all` and some PDPs may still render Horizon; route-level QA may diverge from Admin counts.

---

## 5. Rendered QA

### Execution status

| Item | Status |
| --- | --- |
| Harness | `artifacts/catalogue/slice-21fe/run-rendered-qa.mjs` |
| Env password | **Unset** |
| `shopify theme dev` | **Blocked** — requires `--store-password` (non-interactive) |
| Live `https://dropshippoc.myshopify.com` | **302** → `/password` |

**Operator command (local only):**

```bash
export MZANSI_STOREFRONT_PASSWORD='…'   # do not commit; do not log
PLAYWRIGHT_BROWSERS_PATH=~/.cache/ms-playwright \
  node artifacts/catalogue/slice-21fe/run-rendered-qa.mjs
# or: node artifacts/catalogue/slice-21fe/run-rendered-qa.mjs --manual-unlock
```

### Planned routes and viewports (not executed here)

| Route | Desktop 1366×768 | Mobile 390×844 |
| --- | --- | --- |
| `/` | Planned | Planned |
| `/search?q=organiser&type=product` | Planned | Planned |
| `/collections/all` | Planned | Planned |
| PDP ×5 (multi-image/options) | Planned | Planned |

**PDP handles:** `handwoven-cotton-organizer-basket`, `kitchen-utensil-holder`, `under-cabinet-paper-towel-holder`, `silicone-cup-sleeve-…-wraps-1`, `1pcs-upgradation-adjustable-flatware…-1`.

### 21FD feature results (rendered)

| Feature | Result |
| --- | --- |
| Wishlist toggle / persist / card↔PDP sync | **NOT RUN** |
| Desktop hover zoom | **NOT RUN** |
| Gallery arrows / thumbnails | **NOT RUN** |
| Single-image gallery controls | **NOT RUN** |
| Real colour/variant options only | **NOT RUN** |
| Unavailable options disabled | **NOT RUN** |
| No cart/checkout enablement from selectors | **NOT RUN** |

### Commerce and safety (rendered)

| Check | Result |
| --- | --- |
| No Add to Cart / cart/add / quick-add / checkout | **NOT RUN** |
| No Supplier verified | **NOT RUN** |
| Price-to-confirm visible | **NOT RUN** |
| Hidden **21EZ** four absent | **NOT RUN** (Admin **PASS**) |
| No demo placeholders | **NOT RUN** |
| No mobile horizontal overflow | **NOT RUN** |
| No Liquid error | **NOT RUN** |

**Static post-push note:** **21FD** theme assets are on live **`151207542967`** (`1a4fc43`); feature behaviour is expected on MVP foundation PDPs once the storefront is unlocked.

---

## 6. Commands executed

```bash
git status --short --branch
git rev-parse HEAD
git check-ignore -v artifacts/
node artifacts/catalogue/slice-21fe/run-catalogue-reconciliation.mjs
# Rendered QA blocked:
# MZANSI_STOREFRONT_PASSWORD unset
# shopify theme dev --store-password required (non-interactive failure)
```

---

## 7. Remaining blockers

| Blocker | Owner |
| --- | --- |
| Rendered QA password unlock | **Product Owner** / **QA** — set env or `--manual-unlock` |
| **2** visible products missing commerce gate tags | **Product Owner** — approve tag or hide slice |
| **21FC-B** split-theme | **Product Owner** — **21FC-C** rebind (paused) |
| Admin copy updates from **21FD** | **Product Owner** — after §4 decisions |

---

## 8. Recommended next owner

1. **Product Owner** — decide: hide **two** tech SKUs vs tag + keep **15** visible; approve commerce-tag fix slice.
2. **QA / Test Engineer** — run `run-rendered-qa.mjs` with password unlock; attach `summary.json` under `artifacts/catalogue/slice-21fe/<timestamp>/`.
3. **Product Owner** — approve **21FD** copy rows only after commerce gate + rendered QA **PASS**.

---

## 9. Safety

No passwords, cookies, tokens, customer/order/payment data, supplier credentials, HAR, traces, or screenshots are stored in this document.
