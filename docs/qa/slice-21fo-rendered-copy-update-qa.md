# Slice 21FO — rendered QA after Admin copy update

**Document type:** Read-only rendered QA  
**Prepared:** 2026-05-22  
**Owner:** QA / Test Engineer (Cursor execution)  
**Slice:** **21FO**  
**Store:** `dropshippoc.myshopify.com`  
**Live theme:** `151207542967` / Mzansi Select MVP Preview / **live**

**Upstream:** **21FN** (`58c40ff`) — bounded Admin title + description update on **12** approved rows.

**Evidence (local; not committed):** `artifacts/qa/slice-21fo-rendered-copy-update-qa/2026-05-22T19-07-30/summary.json`  
**Harness (local):** `artifacts/qa/slice-21fo-rendered-copy-update-qa/run-rendered-copy-qa.mjs`

---

## 1. Executive verdict

**PASS**

Post-**21FN** storefront copy renders correctly on required routes and PDPs. Commerce remains blocked (no Add to Cart, no `/cart/add`, no quick-add, no checkout path). **Price to be confirmed** remains visible on listing and PDP surfaces tested. **3** deferred supplier-proof products retain pre-**21FN** import-style titles. **`/collections/all`** returned MVP theme **`151207542967`** on desktop and mobile in this run (no Horizon dominance).

**Note:** Wishlist automation used PDP fallback because **`handwoven-cotton-organizer-basket`** was not on the homepage product rail in this session; toggle, reload persistence, and `mzansi-wishlist-v1` storage **PASS** on that PDP.

---

## 2. Pre-check

| Check | Result |
| --- | --- |
| Branch | `master` @ **`58c40ff`** |
| `artifacts/` | **gitignored** ✓ |
| `tools/catalogue/` | Untracked — **not** committed ✓ |
| Admin / theme / publish / copy mutation | **Not** performed ✓ |
| Unlock | **manual-unlock** (headed Chromium; password **not** stored or logged) |

---

## 3. Routes and viewports tested

| Route | Desktop 1366×768 | Mobile 390×844 |
| --- | --- | --- |
| `/` | Tested | Tested |
| `/search?q=organiser&type=product` | Tested | Tested |
| `/collections/all` | Tested | Tested |
| `/products/handwoven-cotton-organizer-basket` | Tested | Tested |
| `/products/under-cabinet-paper-towel-holder` | Tested | Tested |
| `/products/vertical-office-mouse-wireless-mouse-vertical-mouse` | Tested | Tested |

---

## 4. Copy rendering result

| Handle | Expected title (21FK / 21FN) | Rendered (desktop) | Description snippet | Result |
| --- | --- | --- | --- | --- |
| `handwoven-cotton-organizer-basket` | Cotton Organiser Basket | Cotton Organiser Basket | Present (conservative SA English) | **PASS** |
| `under-cabinet-paper-towel-holder` | Under-Cabinet Paper Towel Holder | Under-Cabinet Paper Towel Holder | Present | **PASS** |
| `vertical-office-mouse-wireless-mouse-vertical-mouse` | Vertical Wireless Mouse | Vertical Wireless Mouse | Present | **PASS** |

| Copy safety | Result |
| --- | --- |
| Import-style keyword stuffing on tested PDP titles | **None** observed |
| **Supplier verified** claim | **None** |
| Final delivery / warranty / stock certainty claims | **None** on tested surfaces |
| Search + homepage | Updated catalogue titles readable; no misleading purchase copy |

### Deferred rows (unchanged titles confirmed)

| Handle | Rendered title (still pre-21FN) | Result |
| --- | --- | --- |
| `low-delay-wireless-tws-games-sports-headset` | Low-delay Wireless TWS Games, Sports Headset | **Unchanged** ✓ |
| `modern-kitchen-accessories-soap-dispenser-set-…` | Modern kitchen accessories Soap Dispenser Set… | **Unchanged** ✓ |
| `soap-dispenser-box-press-dispenser-…` | Soap Dispenser Box Press Dispenser… | **Unchanged** ✓ |

---

## 5. Commerce-gate result

| Check | Homepage | Search | Collections all | 3 PDPs |
| --- | --- | --- | --- | --- |
| Add to Cart | **0** | **0** | **0** | **0** |
| `/cart/add` forms | **0** | **0** | **0** | **0** |
| Quick-add | **0** | **0** | **0** | — |
| Checkout / dynamic checkout | **0** | **0** | **0** | **0** |
| **Price to be confirmed** visible | **Yes** | **Yes** | **Yes** | **Yes** |
| Liquid error | **No** | **No** | **No** | **No** |
| Mobile horizontal overflow | **PASS** | **PASS** | **PASS** | **PASS** |

**Catalogue baseline (unchanged from 21FN):** **15** visible / **15** hidden; **15/15** visible retain `non-purchasable` + `price-to-confirm` (not re-mutated in this slice).

---

## 6. Wishlist and gallery spot-check

| Check | Result |
| --- | --- |
| Wishlist toggle + `mzansi-wishlist-v1` + reload | **PASS** (PDP `handwoven-cotton-organizer-basket`) |
| Gallery / zoom (desktop, 3 MVP PDPs) | **PASS** |

---

## 7. Remaining blockers

| Blocker | Owner |
| --- | --- |
| **3** supplier-proof copy rows still on import-style copy | **Product Owner** — separate proof/copy slice |
| Supplier verified / checkout / payments | Still **blocked** by programme gates |
| Optional homepage-rail wishlist automation | **QA** — only if homepage merchandising changes |

---

## 8. Recommended next owner

1. **Product Owner** — decide timing for bounded Admin copy on the **3** deferred supplier-proof rows.  
2. **Senior Full-Stack Software Architect** — next catalogue or UX slice only after PO approval (no further Admin copy without pack).

---

## 9. Commands executed

```bash
git status --short --branch
git check-ignore -v artifacts/
node artifacts/qa/slice-21fo-rendered-copy-update-qa/run-rendered-copy-qa.mjs --manual-unlock
```

---

## 10. Safety

No passwords, cookies, tokens, customer/order/payment data, supplier credentials, HAR, traces, screenshots, or raw storefront payloads are stored in this document.
