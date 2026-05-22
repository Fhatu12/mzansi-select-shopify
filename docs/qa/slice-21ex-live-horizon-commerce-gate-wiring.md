# Slice 21EX — live Horizon commerce-gate wiring

**Document type:** Theme implementation + bounded live push + rendered QA  
**Prepared:** 2026-05-22  
**Owner:** Senior Full-Stack Software Architect / DevOps / QA  
**Slice:** **21EX**  
**Store:** `dropshippoc.myshopify.com`  
**Live theme:** `148914077879` / Horizon / **live**  
**Upstream:** **21EV** (`ef234c0`), **21EW** (`ffc915d`)

**Product Owner approval:** Patch actual live Horizon buy-box / product-card / cart-entry paths only — **no** full sync, **no** publish, **no** Admin product mutation, **no** preview-to-live promotion.

**Evidence (local; not committed):** `artifacts/catalogue/slice-21ex/2026-05-22T08-17-40/`  
**Harness (local; not committed):** `artifacts/catalogue/slice-21ex/run-live-horizon-commerce-validation.mjs`

---

## 1. Executive verdict

**FAIL WITH NOTES** (post-implementation; re-validation recommended after push wave 2)

Bounded wiring to live Horizon **`product-information`** / **`buy-buttons`** / card surfaces was implemented and pushed in **three** `--only` waves. An authenticated rendered pass (**2026-05-22T08-17-40**) after wave 1 showed **11/17** PDPs **PASS** and listing routes still **FAIL** on `cart/add` form counts (installment `payment-terms` forms and card gallery quick-add were the likely contributors). Wave 2 gated **`blocks/price.liquid`** installments and **`blocks/_product-card-gallery.liquid`** quick-add; wave 3 gated **`blocks/accelerated-checkout.liquid`**. **QA must re-run** the harness after manual storefront unlock to confirm **17/17** PDPs and listing routes at **0** commerce forms.

---

## 2. Pre-check

| Check | Result |
| --- | --- |
| Branch | `master` (post-**21EW** `ffc915d`) |
| `artifacts/` | **gitignored** ✓ (`git check-ignore -v artifacts/`) |
| `tools/catalogue/` | Untracked — **not** committed ✓ |
| Shopify CLI | **3.94.3**; `shopify store execute` auth **PASS** (no secrets logged) |
| Full theme sync / publish | **Not** performed ✓ |
| Admin product mutation | **Not** performed ✓ |
| Checkout / payment / customer-flow enablement | **Not** performed ✓ |
| Import/sync, app install, media, price, inventory, tags, claims | **Not** performed ✓ |

---

## 3. 21EW failure root cause (confirmed)

| Item | Detail |
| --- | --- |
| **21EW push** | Four MVP files (`product-commerce-gate`, `live-product-card`, `main-product-foundation`, `theme.css`) |
| **Live template** | `templates/product.json` → section **`product-information`** → block **`buy-buttons`** (Horizon OS 2.0), **not** `main-product-foundation` |
| **Effect** | MVP PDP shell never referenced on live; native buy box and `form 'product'` remained |

**21EX approach:** Reuse **`snippets/product-commerce-gate.liquid`** with **`{% include %}`** (preview **21EV** proved `{% render %}` breaks gate variable scope in parent blocks).

---

## 4. Live Horizon wiring path (audited)

```
templates/product.json
  └── sections/product-information.liquid
        ├── blocks/buy-buttons.liquid          → form 'product' (ATC) + accelerated-checkout child
        ├── blocks/price.liquid                → payment-terms installment form 'product'
        └── sticky add-to-cart (gated in section)

templates/index.json / collection / search
  └── Horizon product grid → blocks/_product-card.liquid
        ├── blocks/_product-card-gallery.liquid → quick-add (theme settings)
        ├── blocks/buy-buttons.liquid (optional card block)
        └── blocks/price.liquid (installments on cards)

templates/product.json
  └── sections/product-recommendations.liquid → _product-card (gallery + price; no buy-buttons in default schema)
```

---

## 5. Files changed (repo)

| File | Change |
| --- | --- |
| `snippets/product-commerce-gate.liquid` | Existing (**21EV**); reused on live |
| `blocks/buy-buttons.liquid` | Gate → notice + disabled CTA; no product form when blocked |
| `blocks/price.liquid` | Gate installments `payment-terms` form |
| `blocks/_product-card-gallery.liquid` | Skip `quick-add` render when blocked |
| `blocks/accelerated-checkout.liquid` | Hide dynamic checkout when blocked |
| `snippets/product-card.liquid` | Disable quick-add CSS flags when blocked |
| `snippets/quick-add.liquid` | Wrap snippet in `{% unless gate_commerce_blocked %}` |
| `snippets/price.liquid` | Gated “Price to be confirmed” branch |
| `sections/product-information.liquid` | Sticky add-to-cart only when not blocked |

**Not changed / not committed:** `templates/*.json` (Horizon pulls reverted to MVP repo copies), `tools/catalogue/`, `artifacts/`.

---

## 6. Bounded live theme pushes

**Theme ID:** `148914077879`  
**Flags:** `--allow-live`, `--nodelete`, `--json` (no `--publish`)

### Wave 1

```bash
shopify theme push --store dropshippoc.myshopify.com --theme 148914077879 --allow-live \
  --only snippets/product-commerce-gate.liquid \
  --only blocks/buy-buttons.liquid \
  --only snippets/product-card.liquid \
  --only snippets/quick-add.liquid \
  --only snippets/price.liquid \
  --only sections/product-information.liquid \
  --nodelete --json --no-color
```

**Note:** `--strict` fails locally (hybrid MVP + partial Horizon tree); push succeeded without `--strict`.

### Wave 2

```bash
shopify theme push --store dropshippoc.myshopify.com --theme 148914077879 --allow-live \
  --only blocks/price.liquid \
  --only blocks/_product-card-gallery.liquid \
  --nodelete --json --no-color
```

### Wave 3

```bash
shopify theme push --store dropshippoc.myshopify.com --theme 148914077879 --allow-live \
  --only blocks/accelerated-checkout.liquid \
  --nodelete --json --no-color
```

---

## 7. Live rendered validation (wave 1 sample — re-run required)

**Method:** Playwright headed; manual password unlock on live URLs (**no** `preview_theme_id`).  
**Viewports:** desktop **1366×768**, mobile **390×844**.

| Route | Desktop | Mobile | Notes |
| --- | --- | --- | --- |
| `/` | **FAIL** | **FAIL** | `cartForms` 7–8 (card installment/quick-add suspected) |
| `/collections/all` | **FAIL** | **FAIL** | `cartForms` 17 |
| `/search?q=organiser&type=product` | **FAIL** | **FAIL** | `cartForms` 7 |
| **17** PDPs | **11 PASS** / **6 FAIL** | — | See below |

**PDP FAIL handles (wave 1):** `kitchen-utensil-holder`, `usb-c-charging-cable-1-2m`, `1pc-self-adhesive-wall-mounted-paper-tissue-rack-…`, `available-regular-price`, `handmade-cotton-organizer-basket-…`, `handwoven-cotton-organizer-basket` — signals included enabled ATC, dynamic checkout, missing `.product-commerce-gate-notice` on some samples.

**PDP PASS sample:** `adjustable-laptop-stand` — notice present, `cartForms` 0, no enabled ATC / dynamic pay.

**Sub-checks (where measured):** no **Supplier verified**; hidden handles not linked on listings; no north-star demo product names on homepage sample; **mobile root overflow** still **FAIL** on several routes (pre-existing; not commerce-blocking per PO checklist).

**Re-validation command (local):**

```bash
node artifacts/catalogue/slice-21ex/run-live-horizon-commerce-validation.mjs
```

---

## 8. Rollback

1. **Shopify Admin** → Themes → **Horizon** (`148914077879`) → **Versions** → restore pre-**21EX** snapshot (preferred).
2. Or re-push prior file versions for the nine paths listed in §5 from last known good Horizon backup.
3. **Do not** publish another theme or promote preview **`151207542967`** without explicit Product Owner approval.

---

## 9. Remaining launch blockers

- Live commerce gate **not fully verified** after wave 2/3 — **QA re-run** required.
- Live Horizon homepage still **Horizon `index.json`**, not MVP `featured-product-grid` assembly (**21EU** scope separate).
- Checkout, payments, markets, shipping rates, supplier proof, media, final pricing — unchanged and **blocked**.
- Mobile horizontal overflow on some live routes — track under mobile UX slices; not resolved in **21EX**.

---

## 10. Next owner

| Role | Action |
| --- | --- |
| **QA / Test Engineer** | Re-run §7 harness after waves 2–3; target **17/17** PDP + listing **0** `cart/add` forms |
| **Product Owner** | Accept **PASS** or approve follow-up slice if any PDP still exposes commerce paths |
| **DevOps** | Rollback from theme versions if re-validation **FAIL** persists |

---

## 11. Safety

No credentials, cookies, tokens, customer/order/payment payloads, or raw Admin secrets are stored in this document. Evidence remains under gitignored `artifacts/`.
