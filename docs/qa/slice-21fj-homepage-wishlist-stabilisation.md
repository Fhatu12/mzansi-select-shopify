# Slice 21FJ — homepage wishlist stabilisation

**Document type:** Bounded fix + rendered QA  
**Prepared:** 2026-05-22  
**Owner:** Senior Full-Stack Software Architect / Theme Engineer  
**Slice:** **21FJ**  
**Store:** `dropshippoc.myshopify.com`  
**Live theme:** `151207542967` / Mzansi Select MVP Preview / **live**

**Upstream:** **21FI** (`bacbfc61a3ff5e3bdabf6cfa4e5b8cd09491414c`)  
**Evidence (local; not committed):** `artifacts/qa/slice-21fj-homepage-wishlist-stabilisation/`

---

## 1. Executive verdict

**PASS WITH NOTES**

Homepage wishlist behaviour now matches the passing search and PDP wishlist flow on the live MVP theme.

After a bounded fix to **`assets/wishlist-local.js`**, live rendered QA proved:

- homepage card hearts toggle correctly
- search card hearts still toggle correctly
- tested PDP hearts still toggle correctly
- `mzansi-wishlist-v1` writes correctly
- saved state persists after reload
- homepage card to PDP sync works
- search card to PDP sync still works
- `aria-pressed` and Add/Remove labels update correctly

The only remaining note is that the QA harness still observed passive Shopify **`checkout-web`** asset requests during some interactions. No Add to Cart, no `/cart/add`, no quick-add, no dynamic checkout, no checkout navigation, and no customer-account dependency were activated.

---

## 2. 21FI failure summary

**21FI** failed because homepage hearts were still not behaving like the passing search and PDP surfaces.

Observed at that point:

- homepage hearts rendered but did not toggle
- homepage clicks did not write `mzansi-wishlist-v1`
- homepage card to PDP sync was not proven
- repeated homepage loads were inconsistent in one earlier run

Search and the tested PDPs already passed in **21FI**, which narrowed the defect to the homepage card interaction path rather than the shared wishlist data model.

---

## 3. Root cause

The homepage rails already rendered the same **`live-product-card`** and **`wishlist-button`** contract as search, so the remaining issue was not button markup drift.

The minimal reliable fix was in **`assets/wishlist-local.js`**:

- replace per-button one-time click binding with a delegated document click handler
- keep button-state sync separate from event binding
- re-sync button state on section reload and `pageshow`

This makes homepage rail hearts more resilient when cards are refreshed, re-rendered, or otherwise not covered reliably by direct listener attachment.

---

## 4. Files changed

- `assets/wishlist-local.js`
- `docs/qa/slice-21fj-homepage-wishlist-stabilisation.md`
- `docs/project-control.md`

No product copy, Admin data, commerce gate, price-to-confirm wording, or theme layout was changed in this slice.

---

## 5. Live push

Because the wishlist asset changed, a bounded live theme push was required.

**Pushed file:**

- `assets/wishlist-local.js`

**Command:**

```bash
shopify theme push --store dropshippoc.myshopify.com --theme 151207542967 --allow-live --only assets/wishlist-local.js --nodelete --json --no-color
```

No publish and no full theme sync were performed.

---

## 6. Checks run

| Check | Result |
| --- | --- |
| `git status --short --branch` | **PASS** |
| `HEAD` includes **21FI** | **PASS** |
| `git check-ignore -v artifacts/` | **PASS** |
| `tools/catalogue/` remains untracked | **PASS** |
| `rg -n "wishlist|mzansi-wishlist-v1|localStorage|aria-pressed|live-product-card|featured-product-grid|product-card--live|href|button|quickAdd|quick-add|cart/add"` | **PASS** |
| `node --check assets/wishlist-local.js` | **PASS** |
| `shopify theme check --path . --output json --fail-level error --no-color` | **FAIL WITH NOTES** — existing repo-wide baseline errors outside this slice remained |

Theme Check failures were pre-existing and unrelated to the bounded wishlist asset change.

---

## 7. Routes and viewports tested

### Desktop `1366x768`

- `/`
- `/search?q=organiser&type=product`
- `/products/2-tier-under-sink-sliding-storage-basket-multifunctional-organizer-rack-with-hooks-hanging-cup-space-saving-for-bathroom-kitchen-1`
- `/products/1pcs-upgradation-adjustable-flatware-tableware-organizer-plastic-multifunctional-drawer-organizer-for-kitchen-counter-utensils-1`
- `/products/low-delay-wireless-tws-games-sports-headset`
- `/products/vertical-office-mouse-wireless-mouse-vertical-mouse`

### Mobile `390x844`

- `/`
- `/search?q=organiser&type=product`
- `/products/low-delay-wireless-tws-games-sports-headset`
- `/products/vertical-office-mouse-wireless-mouse-vertical-mouse`

Unlock method was headed Chromium with manual password entry in the browser only. No password, cookie, token, auth/session file, HAR, trace, screenshot, or raw sensitive output was stored.

---

## 8. Wishlist results

### Homepage wishlist result

**PASS**

The first homepage heart now toggled correctly on the live homepage:

- `aria-pressed`: `false` -> `true`
- label: **Add** -> **Remove**
- class: `p-wish` -> `p-wish is-saved`
- `mzansi-wishlist-v1` written successfully

Homepage card to PDP sync was then proven on a homepage product whose PDP exposed the same wishlist handle:

- add on homepage card: **PASS**
- reload on homepage: **PASS**
- open PDP for same handle: saved state remained **true**
- remove on PDP: **PASS**
- return to homepage card: saved state returned to **false**

### Search and PDP regression result

**PASS**

Search still behaved correctly:

- search card toggle: **PASS**
- reload persistence: **PASS**
- search card to PDP sync: **PASS**
- remove on PDP and return to search card: **PASS**

Tested PDP regressions also remained correct:

- `low-delay-wireless-tws-games-sports-headset`: **PASS**
- `vertical-office-mouse-wireless-mouse-vertical-mouse`: **PASS**

For both tested PDPs:

- toggle: **PASS**
- reload persistence: **PASS**
- remove state reset: **PASS**

### `localStorage` result

**PASS**

`mzansi-wishlist-v1` was written correctly on homepage, search, and the tested PDPs.

Stored data remained limited to public product metadata only:

- `handle`
- `title`
- `url`

No login, email, customer account, backend persistence, or wishlist service endpoint was required for wishlist state.

---

## 9. Commerce safety result

**PASS WITH NOTES**

Across the tested desktop and mobile routes:

- no Add to Cart
- no `/cart/add` forms
- no quick-add
- no dynamic checkout
- no checkout navigation
- no Supplier verified claim
- no Liquid error on the final 21FJ rerun
- no mobile horizontal overflow
- `Price to be confirmed` remained visible

Passive Shopify **`checkout-web`** asset requests were still observed in the browser network during some interactions. These did **not** correspond to:

- cart submission
- checkout navigation
- customer login
- payment flow activation

This is recorded as a **note**, not a blocker for the localStorage-backed wishlist goal.

---

## 10. Evidence summary

Primary 21FJ evidence:

- `artifacts/qa/slice-21fj-homepage-wishlist-stabilisation/2026-05-22T13-22-03-964Z-rerun/summary.json`

Earlier 21FJ harness edge-case note:

- `artifacts/qa/slice-21fj-homepage-wishlist-stabilisation/2026-05-22T13-18-57-243Z/summary.json`

The first 21FJ harness run selected a homepage product whose PDP did not expose a matching wishlist control for sync verification, so a safer rerun selected a homepage candidate with a matching PDP handle before proving homepage sync.

---

## 11. Remaining blockers

1. **21FC-C split-theme issue** on `/collections/all` remains separate and unchanged.
2. Passive Shopify `checkout-web` asset noise still appears in browser network traces and may merit future platform-level investigation, even though no blocked commerce flow activated in this slice.

---

## 12. Recommended next owner

**Product Owner**

Homepage wishlist stabilisation is now proven on the live MVP theme. The next decision point is whether to:

- treat homepage wishlist behaviour as closed for the MVP wishlist scope; and
- prioritise the separate **21FC-C** split-theme route issue next.
