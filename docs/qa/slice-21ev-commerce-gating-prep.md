# Slice 21EV — commerce gating preparation (17-product catalogue)

**Document type:** Admin tag fix + theme commerce guard + rendered QA  
**Prepared:** 2026-05-22  
**Owner:** Senior Full-Stack Software Architect / DevOps / QA  
**Slice:** **21EV**  
**Store:** `dropshippoc.myshopify.com`  
**Preview theme:** `151207542967` / Mzansi Select MVP Preview / **unpublished**  
**Live theme:** `148914077879` / Horizon — **not** pushed or published

**Upstream:**

- **Slice 21EU** (`27a5bb7`) — homepage placeholder removal accepted by Product Owner
- **Slice 21ES** (`57f2187`) — **17** Online Store visible products

**Evidence (local; not committed):** `artifacts/catalogue/slice-21ev/2026-05-22T07-39-31/`

---

## 1. Executive verdict

**PASS WITH NOTES**

All **17** visible products now carry **`non-purchasable`** and **`price-to-confirm`** (tag-only Admin add; existing tags preserved). Theme commerce guard enforces placeholder pricing and disabled purchase affordances on cards and PDPs. Rendered QA on preview **`151207542967`**: **17/17** PDPs, homepage, **`/collections/all`**, and search — **PASS** at desktop **1366×768** and mobile **390×844** (subset PDPs on mobile).

**Note:** Initial validation failed because `{% render %}` isolated snippet scope; fixed by using `{% include %}` for `product-commerce-gate` so gate flags reach parent templates.

---

## 2. Pre-check

| Check | Result |
| --- | --- |
| Branch | `master` @ **21EU** (`27a5bb7`) |
| `artifacts/` | **gitignored** ✓ |
| `tools/catalogue/` | Untracked — **not** committed ✓ |
| Shopify CLI auth | **PASS** (`shopify store execute`) |
| Live theme push / publish | **Not** performed ✓ |
| Checkout / payment / customer-flow enablement | **Not** performed ✓ |
| Product import/sync, app install, media, delete, price, inventory, claims | **Not** performed ✓ |

---

## 3. Visible catalogue baseline (17)

**Online Store publication:** `gid://shopify/Publication/169105293495`  
**Admin visible count:** **17** (matches **21ES** handle list)

| # | Handle | Title (short) | OS visible | Media | Tags before fix | Tag fix applied | Readiness after |
| ---: | --- | --- | --- | ---: | --- | --- | --- |
| 1 | `1pc-self-adhesive-wall-mounted-paper-tissue-rack-…` | Self-Adhesive Paper Tissue Rack | Yes | 13 | (none) | +both | **READY** |
| 2 | `1pcs-upgradation-adjustable-flatware-tableware-organizer-…` | Flatware Drawer Organizer | Yes | 16 | (none) | +both | **READY** |
| 3 | `2-tier-under-sink-sliding-storage-basket-…` | 2 Tier Under Sink Basket | Yes | 26 | (none) | +both | **READY** |
| 4 | `adjustable-expandable-bamboo-drawer-organizer-…` | Bamboo Drawer Organizer | Yes | 12 | (none) | +both | **READY** |
| 5 | `adjustable-laptop-stand` | Adjustable Laptop Stand | Yes | 10 | category tags only | +both | **READY** |
| 6 | `adjustable-pantry-organizer-utensil-cutlery-drawer-…` | Pantry Cutlery Drawer | Yes | 18 | (none) | +both | **READY** |
| 7 | `available-regular-price` | Multi-Use Storage Organizer Bin | Yes | 5 | storage tags | +both | **READY** |
| 8 | `handmade-cotton-organizer-basket-vegetable-platter-…` | Handmade Cotton Organizer Basket | Yes | 10 | (none) | +both | **READY** |
| 9 | `handwoven-cotton-organizer-basket` | Handwoven Cotton Organizer Basket | Yes | 4 | storage tags | +both | **READY** |
| 10 | `keep-room-tidy-for-dirty-clothes-waterproof-fabric-foldable-hamper` | Foldable Hamper | Yes | 15 | (none) | +both | **READY** |
| 11 | `kitchen-utensil-holder` | Kitchen Utensil Holder | Yes | 6 | kitchen tags | +both | **READY** |
| 12 | `modern-kitchen-accessories-soap-dispenser-set-…` | Soap Dispenser Set | Yes | 34 | (none) | +both | **READY** |
| 13 | `paper-towel-holders-stainless-steel-roll-holder-…` | Paper Towel Holder | Yes | 8 | (none) | +both | **READY** |
| 14 | `silicone-cup-sleeve-heat-insulation-bottle-sleeves-…` | Silicone Cup Sleeve | Yes | 9 | (none) | +both | **READY** |
| 15 | `soap-dispenser-box-press-dispenser-scrubbing-liquid-container-…` | Soap Dispenser Box | Yes | 20 | (none) | +both | **READY** |
| 16 | `under-cabinet-paper-towel-holder` | Under Cabinet Paper Towel Holder | Yes | 7 | (none) | +both | **READY** |
| 17 | `usb-c-charging-cable-1-2m` | USB-C Charging Cable 1.2m | Yes | 6 | (none) | +both | **READY** |

**Tag fix:** `tagsAdd` only — **`non-purchasable`**, **`price-to-confirm`** — **17/17** products, **0** errors. Existing tags (e.g. `adjustable-stand`, `kitchen-storage`) **preserved**.

---

## 4. Hidden catalogue (11) — read-only verification

| Group | Handles | Online Store |
| --- | --- | --- |
| **21EQ keep-hidden (6)** | `beverage-bottle-oil-bottle-handle-holder`, `compact-organiser-basket`, `foldable-magnetic-phone-holder-desktop-tablet-stand`, `mini-plastic-divider-basket`, `sink-strainer-stainless-steel`, `usb-bag-sealer` | **Unpublished** ✓ |
| **21ES round-2 (5)** | `five-division-drawer-divider-preview`, `adjustable-aluminium-phone-tablet-stand-preview`, `cable-tidies-set`, `compact-cutlery-drawer-organiser-preview`, `under-cabinet-paper-towel-holder-plastic-wrap-storage-holder-wall-mounted-paper-towel-holder-for-kitchen-or-bathroom` | **Unpublished** ✓ |

Storefront QA: no PDP links for sampled hidden handles on homepage, **`/collections/all`**, or search.

---

## 5. Theme commerce-surface audit

| Surface | Finding | 21EV action |
| --- | --- | --- |
| `sections/main-product-foundation.liquid` | Disabled ATC button; no `product` form / dynamic checkout | Gate-aware copy: **Price to be confirmed**; prep-for-launch note |
| `snippets/live-product-card.liquid` | **View product** link only (no quick-add) | Placeholder price when gated; prep note on card |
| `snippets/static-product-card.liquid` | Disabled preview CTA (homepage rails no longer use) | Unchanged |
| `sections/site-header.liquid` / nav | Cart/account deferred spans | Unchanged |
| `sections/main-cart-foundation.liquid` | Checkout disabled | Unchanged |
| `sections/main-search-foundation.liquid` | Static-safe search; no cart forms | Unchanged |

**New:** `snippets/product-commerce-gate.liquid` — normalises tags; sets `gate_commerce_blocked` when **`non-purchasable`**, **`price-to-confirm`**, or **`preview-only`** present.

---

## 6. Theme files changed

| File | Change |
| --- | --- |
| `snippets/product-commerce-gate.liquid` | **New** reusable gate |
| `snippets/live-product-card.liquid` | Include gate; placeholder price; card note |
| `sections/main-product-foundation.liquid` | Include gate; PDP purchase copy and disabled ATC label |
| `assets/theme.css` | `.p-commerce-note` muted helper text |

---

## 7. Preview theme push

| Field | Value |
| --- | --- |
| Theme ID | **151207542967** (unpublished) |
| Files | `product-commerce-gate.liquid`, `live-product-card.liquid`, `main-product-foundation.liquid`, `theme.css` |
| Live **148914077879** | **Unchanged** |

---

## 8. Rendered validation

**Harness:** `artifacts/catalogue/slice-21ev/run-commerce-gating-validation.mjs` (local; not committed)

| Route / scope | Desktop | Mobile |
| --- | --- | --- |
| Homepage `/?preview_theme_id=151207542967` | **PASS** | **PASS** |
| `/collections/all?preview_theme_id=151207542967` | **PASS** | **PASS** |
| `/search?q=organiser&type=product&preview_theme_id=151207542967` | **PASS** | **PASS** |
| All **17** PDPs | **PASS** (disabled ATC **Price to be confirmed**; no cart forms) | **PASS** (3-handle sample + overflow) |

**Confirmed:** no enabled Add to Cart / Buy now; no `form[action*="/cart/add"]`; no dynamic checkout buttons; no **Supplier verified** copy; homepage rails still live (no demo placeholders); hidden products absent from listing routes.

---

## 9. Static checks

| Command | Result |
| --- | --- |
| `shopify theme check --path . --fail-level error` | **0** errors (warnings only) |

---

## 10. Rollback

1. **Admin:** remove added tags only if Product Owner approves reverse (`tagsRemove` for **`non-purchasable`** / **`price-to-confirm`** on the 17 rows — preserves other tags).
2. **Theme:** revert **21EV** theme files on `master` and bounded-push to preview **`151207542967`** only.
3. **Do not** publish or push to live **`148914077879`** without explicit approval.

---

## 11. Remaining launch blockers

- **Live theme** `148914077879` not updated — commerce guard exists on preview only until a separate DevOps push slice.
- Image rights / supplier readiness on visible catalogue.
- **`Supplier verified`** / final pricing / delivery / claims — not approved.
- Newsletter / account service decisions (deferred slices).
- Optional: add **`preview-only`** tag for stricter media gate alignment (**not** required for this slice).

---

## 12. Strict confirmations

- **No** credentials, cookies, tokens, customer/order/payment data, or supplier credentials in this doc.
- **`artifacts/`** and **`tools/catalogue/`** not committed.

---

## Next owner

**DevOps / Platform Engineer** — bounded preview-to-live theme sync for commerce-gate files when Product Owner approves. **Product Owner** — launch go/no-go after image/supplier gates.
