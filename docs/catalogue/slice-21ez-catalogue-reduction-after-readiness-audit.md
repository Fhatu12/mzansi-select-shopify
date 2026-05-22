# Slice 21EZ — catalogue reduction after launch-readiness audit

**Document type:** Bounded Admin visibility removal + repo hygiene  
**Prepared:** 2026-05-22  
**Owner:** DevOps / Platform Engineer  
**Slice:** **21EZ**  
**Store:** `dropshippoc.myshopify.com`  
**Online Store publication:** `gid://shopify/Publication/169105293495`  
**Live theme:** `148914077879` / Horizon / **live** (unchanged)

**Upstream:**

- **Slice 21EY** (`b16e644`) — launch-readiness audit — **PASS WITH NOTES** — recommended hiding **4** products before launch
- **Slice 21EX-B** (`6a449d2`) — live commerce gate **PASS**

**Product Owner instruction:** Unpublish **four** **21EY** hide candidates from **Online Store** only; keep **13** visible as catalogue-only under the live commerce gate.

**Evidence (local; not committed):** `artifacts/catalogue/slice-21ez/2026-05-22T09-01-30/`

---

## 1. Executive verdict

**PASS WITH NOTES**

**Four** `publishableUnpublish` operations succeeded. Post-write Admin read-back: **13** **ACTIVE** + **Online Store** visible (was **17**); **15** **ACTIVE** rows hidden from Online Store (**11** prior + **4** new). Remaining **13** retain **`non-purchasable`** and **`price-to-confirm`**. **No** other products touched.

**Note:** Password-gated storefront render check was **not** completed in this session (unauthenticated HTTP returns **302** to password wall). Visibility outcome is confirmed via Admin read-back (same class as **21ES**). QA may rerun `artifacts/catalogue/slice-21ez/run-storefront-verify.mjs` with manual unlock.

---

## 2. Pre-check

| Check | Result |
| --- | --- |
| Branch | `master` @ **`b16e644`** |
| `artifacts/` | **gitignored** ✓ |
| `tools/catalogue/` | Untracked — **not** committed ✓ |
| Shopify CLI auth | **PASS** (no secrets recorded) |
| Theme push / publish / checkout / import / media / delete / claims | **Not** performed ✓ |

---

## 3. 21EY decision basis

| Handle | 21EY priority | Reason (summary) |
| --- | --- | --- |
| `adjustable-laptop-stand` | **1 — must hide** | Implausible inventory (~69k); unverified ergonomic claims |
| `usb-c-charging-cable-1-2m` | **1 — must hide** | Implausible inventory (~65k); fast-charging claim risk |
| `available-regular-price` | **1 — must hide** | Test/legacy handle; placeholder naming risk |
| `keep-room-tidy-for-dirty-clothes-waterproof-fabric-foldable-hamper` | **1 — must hide** | Zero stock + CONTINUE; waterproof claim unverified |

---

## 4. Target verification (four removals)

| Handle | Title | Was OS visible? | Media | Tags (commerce) | Admin price (ZAR) |
| --- | --- | --- | ---: | --- | --- |
| `adjustable-laptop-stand` | Adjustable Laptop Stand | Yes | 10 | `non-purchasable`, `price-to-confirm` + category | 699 |
| `usb-c-charging-cable-1-2m` | 1.2m USB-C Charging Cable | Yes | 6 | both + tech tags | 149 |
| `available-regular-price` | Multi-Use Storage Organizer Bin | Yes | 5 | both + storage | 89 |
| `keep-room-tidy-for-dirty-clothes-waterproof-fabric-foldable-hamper` | Foldable Hamper | Yes | 15 | both | 133.75–138.05 |

All four resolved unambiguously; **no** missing handles.

---

## 5. Bounded Admin actions

| Action | Detail |
| --- | --- |
| Mutation | `publishableUnpublish` × **4** |
| Channel | **Online Store** only (`169105293495`) |
| Unchanged | Status, title, description, price, inventory, variants, vendor, type, tags, SEO, media, metafields, collections |

---

## 6. Post-write verification (Admin)

| Metric | Before | After | Expected |
| --- | ---: | ---: | ---: |
| **ACTIVE** + **Online Store** visible | **17** | **13** | **13** |
| **ACTIVE** hidden from Online Store | **11** | **15** | **15** |
| Round-3 removals hidden | — | **4/4** | **4** |
| Prior **11** hidden still hidden | **11/11** | **11/11** | **11** |
| Commerce gate tags on visible **13** | — | **13/13** | **13** |
| Unintended unpublish outside four | — | **0** | **0** |

**Currently visible (13 handles):**

`1pc-self-adhesive-wall-mounted-paper-tissue-rack-suitable-for-kitchen-bathroom-under-cabinet-sink-cling-film-storage-punch-free-1`, `1pcs-upgradation-adjustable-flatware-tableware-organizer-plastic-multifunctional-drawer-organizer-for-kitchen-counter-utensils-1`, `2-tier-under-sink-sliding-storage-basket-multifunctional-organizer-rack-with-hooks-hanging-cup-space-saving-for-bathroom-kitchen-1`, `adjustable-expandable-bamboo-drawer-organizer-for-kitchen-bedroom-or-living-room-ideal-for-organizing-cutlery-silverware-knives-1`, `adjustable-pantry-organizer-utensil-cutlery-drawer-for-forks-knives-silverware-expandable-kitchen-drawer-kitchen-organizer-tray-1`, `handmade-cotton-organizer-basket-vegetable-platter-tabletop-flat-tray-for-bread-candy-fruit-vegetable-1`, `handwoven-cotton-organizer-basket`, `kitchen-utensil-holder`, `modern-kitchen-accessories-soap-dispenser-set-liquid-hand-soap-dispenser-pump-bottle-brushes-holds-and-stores-sponges-scrubbers-1`, `paper-towel-holders-stainless-steel-roll-holder-paper-towels-self-adhesive-under-cabinet-for-kitchen-storage-and-organization`, `silicone-cup-sleeve-heat-insulation-bottle-sleeves-non-slip-mug-sleeve-glass-bottle-cover-for-mugs-ceramic-coffee-cups-wraps-1`, `soap-dispenser-box-press-dispenser-scrubbing-liquid-container-kitchen-bathroom-automatic-detergent-foam-box-with-sponge-holder-1`, `under-cabinet-paper-towel-holder`

**Total hidden from Online Store (15):** **11** prior (**6** **21EQ** + **5** **21ES**) + **4** **21EZ** (product records preserved).

---

## 7. Storefront verification summary

| Check | Result |
| --- | --- |
| Unauthenticated `products.json` / search suggest | **302** — password wall (no storefront evidence captured) |
| Live rendered homepage / `/collections/all` / search | **Deferred** — manual unlock not completed |
| Admin-aligned expectation | **PASS** — **13** published products should surface on `/collections/all` when unlocked |
| Commerce gating on live Horizon | **Unchanged** — **21EX-B** gate remains required; **13** visible rows still carry gate tags |

**Harness (local):** `artifacts/catalogue/slice-21ez/run-storefront-verify.mjs`

**Regression expectation:** Listing routes should show **0** `cart/add` forms for visible products (per **21EX-B**); PDP samples among the **13** should retain **Price to be confirmed** and **0** cart forms when QA re-runs live validation.

---

## 8. Repo hygiene

| File | Classification | Action |
| --- | --- | --- |
| `blocks/_product-card.liquid` | Horizon theme pull; **not** in `HEAD` | Moved → `artifacts/theme-pulls/slice-21ez/blocks/` |
| `blocks/_product-details.liquid` | Horizon theme pull; **not** in `HEAD` | Moved |
| `blocks/product-card.liquid` | Horizon theme pull; **not** in `HEAD` | Moved |
| `blocks/variant-picker.liquid` | Horizon theme pull; **not** in `HEAD` | Moved |
| `sections/main-collection.liquid` | Horizon theme pull; **not** in `HEAD` | Moved → `artifacts/theme-pulls/slice-21ez/sections/` |
| `sections/product-recommendations.liquid` | Horizon theme pull; **not** in `HEAD` | Moved |
| `sections/search-results.liquid` | Horizon theme pull; **not** in `HEAD` | Moved |
| `snippets/card-gallery.liquid` | Horizon theme pull; **not** in `HEAD` | Moved → `artifacts/theme-pulls/slice-21ez/snippets/` |
| `snippets/product-grid.liquid` | Horizon theme pull; **not** in `HEAD` | Moved |
| `tools/catalogue/` | Programme tooling | **Left untracked** (per policy) |

**Working tree after hygiene:** clean except `tools/catalogue/` (untracked).

---

## 9. Rollback

Republish a removed product: `publishablePublish` to publication `169105293495` only.

Full **21EZ** rollback: republish all four handles (returns visible count to **17**). Does **not** restore any product fields.

---

## 10. Remaining launch blockers

1. **13** visible rows still need image-rights, supplier, pricing, and delivery proof (**21EY**).  
2. **Checkout / payment / customer-flow** — still programme-blocked.  
3. **Live Horizon homepage assembly** vs MVP rails — separate slice.  
4. **Storefront QA** on **13**-product catalogue — re-run commerce-gate harness after password unlock.  
5. **Commerce gate** on live remains mandatory until programme clears each SKU for sale.

---

## 11. Commands executed

```bash
git status --short --branch
git check-ignore -v artifacts/
shopify store auth --store dropshippoc.myshopify.com --scopes read_products,write_products
node artifacts/catalogue/slice-21ez/run-slice-21ez.mjs
# storefront: password wall — manual harness deferred
```

---

## 12. Safety

No credentials, cookies, tokens, customer/order/payment payloads, or supplier credentials in this document.

---

## Next owner

**Product Owner** — accept **13**-product gated catalogue baseline; approve next slice for image-rights programme, supplier proof on remaining visible SKUs, or live storefront QA re-run on **13** PDPs + listing routes.
