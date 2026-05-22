# Slice 21EX — live Horizon commerce-gate wiring

**Document type:** Theme implementation + bounded live push + rendered QA  
**Prepared:** 2026-05-22  
**Owner:** Senior Full-Stack Software Architect / DevOps / QA  
**Slice:** **21EX**  
**Store:** `dropshippoc.myshopify.com`  
**Live theme:** `148914077879` / Horizon / **live**  
**Upstream:** **21EV** (`ef234c0`), **21EW** (`ffc915d`)

**Product Owner approval:** Patch actual live Horizon buy-box / product-card / cart-entry paths only — **no** full sync, **no** publish, **no** Admin product mutation, **no** preview-to-live promotion.

**Evidence (wave 1):** `artifacts/catalogue/slice-21ex/2026-05-22T08-17-40/` (gitignored)  
**Evidence (post-wave 2–3 re-validation):** `artifacts/catalogue/slice-21ex/2026-05-22T08-27-50/` (gitignored)  
**Harness (local; not committed):** `artifacts/catalogue/slice-21ex/run-live-horizon-commerce-validation.mjs`  
**Implementation commit:** `95c67fb`

---

## 1. Executive verdict

**FAIL** — post-wave 2–3 re-validation (**2026-05-22T08-27-50**)

Waves 2–3 improved homepage and search listing surfaces and raised PDP pass rate from **11/17** to **12/17**, but commerce-gate acceptance criteria are **not** met:

| Criterion | Result |
| --- | --- |
| **17/17** PDPs — no ATC / dynamic checkout / `cart/add` | **12/17 PASS** — **5 FAIL** |
| Listings — **0** `cart/add` forms | **FAIL** on `/collections/all` (**17** forms desktop + mobile) |
| Homepage + search listings | **PASS** (`cartForms` **0**) |
| Supplier verified / hidden / demo | **PASS** on all tested routes |
| Mobile root overflow | **PASS** (harness `mobileOverflow: true` = within viewport) |

**Recommended follow-up:** bounded slice **21EX-B** — gate collection-grid card commerce (live `templates/collection.json` / card `buy-buttons` block wiring), fix **four** PDPs with an exposed main buy box, and gate **`product-recommendations`** card forms on **`usb-c-charging-cable-1-2m`** (4 related-product forms).

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

## 7. Live rendered validation

### 7.1 Wave 1 (pre-wave 2–3) — `2026-05-22T08-17-40`

| Route | Desktop | Mobile |
| --- | --- | --- |
| `/` | **FAIL** (`cartForms` 7–8) | **FAIL** |
| `/collections/all` | **FAIL** (`cartForms` 17) | **FAIL** |
| `/search?q=organiser&type=product` | **FAIL** (`cartForms` 7) | **FAIL** |
| **17** PDPs | **11 PASS** / **6 FAIL** | — |

### 7.2 Post-wave 2–3 re-validation — `2026-05-22T08-27-50`

**Method:** `node artifacts/catalogue/slice-21ex/run-live-horizon-commerce-validation.mjs` — Playwright headed; manual storefront unlock; live URLs only (**no** `preview_theme_id`).  
**Viewports:** desktop **1366×768**, mobile **390×844**.  
**QA type:** read-only — **no** theme push, Admin mutation, or password capture.

| Route | Desktop | Mobile | `cartForms` | `enabledAtc` | `dynamicPay` |
| --- | --- | --- | --- | --- | --- |
| `/` | **PASS** | **PASS** | 0 | 0 | 0 |
| `/collections/all` | **FAIL** | **FAIL** | **17** | 0 | 0 |
| `/search?q=organiser&type=product` | **PASS** | **PASS** | 0 | 0 | 0 |
| **17** PDPs (desktop) | **12 PASS** / **5 FAIL** | — | — | — | — |

**PDP PASS (12):** `adjustable-laptop-stand`, `kitchen-utensil-holder`, `1pcs-upgradation-adjustable-flatware-…`, `2-tier-under-sink-sliding-storage-basket-…`, `adjustable-pantry-organizer-…`, `available-regular-price`, `handwoven-cotton-organizer-basket`, `modern-kitchen-accessories-soap-dispenser-set-…`, `paper-towel-holders-stainless-steel-…`, `silicone-cup-sleeve-…`, `soap-dispenser-box-…`, `under-cabinet-paper-towel-holder` — `.product-commerce-gate-notice` present; `cartForms` **0**; no enabled ATC / dynamic checkout.

**PDP FAIL (5):**

| Handle | `cartForms` | `enabledAtc` | `dynamicPay` | Notice | Likely source |
| --- | --- | --- | --- | --- | --- |
| `usb-c-charging-cable-1-2m` | 4 | 0 | 0 | 1 | Main buy box gated; **product-recommendations** related cards still emit forms |
| `1pc-self-adhesive-wall-mounted-paper-tissue-rack-…` | 1 | 2 | 1 | 0 | Main **`buy-buttons`** path not gated on rendered PDP |
| `adjustable-expandable-bamboo-drawer-organizer-…` | 1 | 2 | 1 | 0 | Same |
| `handmade-cotton-organizer-basket-vegetable-platter-…` | 1 | 2 | 1 | 0 | Same |
| `keep-room-tidy-for-dirty-clothes-waterproof-fabric-foldable-hamper` | 1 | 2 | 1 | 0 | Same |

**Sub-checks (all routes):** no **Supplier verified**; hidden handles not linked; no north-star demo names; mobile root overflow within harness tolerance.

**Harness command:**

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

- **`/collections/all`** still renders **17** `cart/add` forms (one per visible product card) — collection template / card **`buy-buttons`** wiring on live Horizon not fully gated.
- **5/17** PDPs still expose commerce paths (**4** main buy box regressions; **1** recommendations rail).
- Live Horizon homepage still **Horizon `index.json`**, not MVP `featured-product-grid` assembly (**21EU** scope separate).
- Checkout, payments, markets, shipping rates, supplier proof, media, final pricing — unchanged and **blocked**.

---

## 10. Recommended follow-up slice (21EX-B)

**Scope (minimal):**

1. Pull and audit live **`templates/collection.json`** + **`sections/main-collection.liquid`** card block order; gate or remove **`buy-buttons`** / **`add-to-cart`** on collection product cards.
2. Investigate **four** PDP handles where main buy box renders with **no** `.product-commerce-gate-notice` (possible alternate block instance or stale section cache).
3. Gate **`sections/product-recommendations.liquid`** card children (related-product forms on PDPs such as **`usb-c-charging-cable-1-2m`**).
4. Bounded `--only` live push + QA re-run — **no** template publish, Admin mutation, or full theme sync.

---

## 11. Next owner

| Role | Action |
| --- | --- |
| **Product Owner** | Approve **21EX-B** bounded fix scope |
| **Senior Full-Stack Software Architect** | Implement collection + recommendations + residual PDP gates |
| **DevOps** | Bounded live push of approved files only |
| **QA / Test Engineer** | Re-run §7.2 harness after **21EX-B** |

---

## 12. Safety

No credentials, cookies, tokens, customer/order/payment payloads, or raw Admin secrets are stored in this document. Evidence remains under gitignored `artifacts/`.
