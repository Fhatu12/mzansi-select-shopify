# Slice 21EQ — catalogue visibility restore (post-21EO)

**Document type:** Bounded Admin visibility restore  
**Prepared:** 2026-05-22  
**Owner:** DevOps / Platform Engineer  
**Slice:** **21EQ**  
**Store:** `dropshippoc.myshopify.com`  
**Online Store publication:** `gid://shopify/Publication/169105293495`  
**Live theme:** `148914077879` / Horizon / **live** (unchanged)  
**Preview theme:** `151207542967` / Mzansi Select MVP Preview / **unpublished** (unchanged)

**Upstream:**

- **Slice 21EO** — live-prep simplification (`16f0447`) — reduced **Online Store** visible products from **28** to **3**
- Product Owner review of pre-21EO list (`artifacts/catalogue/slice-21eo/po-review-28-visible-products.md`, local)

**Product Owner instruction:** Restore **Online Store** visibility for all **28** pre-21EO visible products **except six** named removals (CJ no-media trio + three **13I** no-media previews). **21EJ** neutral and catalogue-image rows from the original list are **back on the storefront** unless in the six.

**Evidence (local; not committed):** `artifacts/catalogue/slice-21eq/`

---

## 1. Executive verdict

**PASS WITH NOTES**

**22** products are **ACTIVE** and published to **Online Store**. **Six** Product Owner-removed products remain unpublished. **19** `publishablePublish` operations succeeded; **3** drawer organiser rows were already visible after **21EO**. Storefront sample checks show restored catalogue on homepage, search, and `/collections/all`; **no** keep-hidden handle appeared in sampled routes. **Add to Cart** remains on live Horizon PDPs (**pre-existing**; not fixed in this slice).

---

## 2. Pre-write checkpoint

| Check | Result |
| --- | --- |
| Branch | `master` @ **21EO** (`16f0447`) |
| `artifacts/` | **gitignored** ✓ |
| `tools/catalogue/` | Untracked — **not** committed ✓ |
| Shopify CLI auth | **PASS** |
| Live theme publish / theme push | **Not** performed ✓ |
| Checkout / payment / customer-flow | **Not** enabled ✓ |
| Import / sync / app install / media upload / hard delete | **Not** performed ✓ |
| **Supplier verified** | **Not** changed ✓ |

---

## 3. Source recovery and name mapping

**Source:** `artifacts/catalogue/slice-21eo/products-audit-table.json` + `unpublish-results.json` (original **28** = **3** post-21EO keep + **25** unpublished in **21EO**).

| Product Owner title | Handle | In original 28? |
| --- | --- | --- |
| Beverage & Oil Bottle Handle Holder | `beverage-bottle-oil-bottle-handle-holder` | Yes |
| Compact Organiser Basket | `compact-organiser-basket` | Yes |
| Foldable Magnetic Phone Holder & Desktop Tablet Stand | `foldable-magnetic-phone-holder-desktop-tablet-stand` | Yes |
| Mini Plastic Divider Basket | `mini-plastic-divider-basket` | Yes |
| Sink Strainer — Stainless Steel | `sink-strainer-stainless-steel` | Yes |
| USB Bag Sealer | `usb-bag-sealer` | Yes |

**Ambiguity check:** **PASS** — one-to-one match; no duplicate titles in the **28** list.

---

## 4. Keep-hidden list (6)

| Handle | Title |
| --- | --- |
| `beverage-bottle-oil-bottle-handle-holder` | Beverage & Oil Bottle Handle Holder |
| `compact-organiser-basket` | Compact Organiser Basket |
| `foldable-magnetic-phone-holder-desktop-tablet-stand` | Foldable Magnetic Phone Holder & Desktop Tablet Stand |
| `mini-plastic-divider-basket` | Mini Plastic Divider Basket |
| `sink-strainer-stainless-steel` | Sink Strainer — Stainless Steel |
| `usb-bag-sealer` | USB Bag Sealer |

---

## 5. Restore list (22)

| # | Handle | Title (short) | Media | Pre-21EQ OS | Action |
| ---: | --- | --- | ---: | --- | --- |
| 1 | `adjustable-pantry-organizer-utensil-cutlery-drawer-for-forks-knives-silverware-expandable-kitchen-drawer-kitchen-organizer-tray-1` | Adjustable Pantry Organizer… | 18 | Yes | already-visible |
| 2 | `adjustable-expandable-bamboo-drawer-organizer-for-kitchen-bedroom-or-living-room-ideal-for-organizing-cutlery-silverware-knives-1` | Bamboo Drawer Organizer… | 12 | Yes | already-visible |
| 3 | `1pcs-upgradation-adjustable-flatware-tableware-organizer-plastic-multifunctional-drawer-organizer-for-kitchen-counter-utensils-1` | Plastic Drawer Organizer… | 16 | Yes | already-visible |
| 4 | `handwoven-cotton-organizer-basket` | Handwoven Cotton Organizer Basket | 4 | No | publishablePublish |
| 5 | `available-regular-price` | Multi-Use Storage Organizer Bin | 5 | No | publishablePublish |
| 6 | `usb-c-charging-cable-1-2m` | 1.2m USB-C Charging Cable | 6 | No | publishablePublish |
| 7 | `adjustable-laptop-stand` | Adjustable Laptop Stand | 10 | No | publishablePublish |
| 8 | `kitchen-utensil-holder` | Kitchen Utensil Holder | 6 | No | publishablePublish |
| 9 | `under-cabinet-paper-towel-holder` | Under Cabinet Paper Towel Holder | 8 | No | publishablePublish |
| 10 | `keep-room-tidy-for-dirty-clothes-waterproof-fabric-foldable-hamper` | Foldable Hamper | 15 | No | publishablePublish |
| 11 | `silicone-cup-sleeve-heat-insulation-bottle-sleeves-non-slip-mug-sleeve-glass-bottle-cover-for-mugs-ceramic-coffee-cups-wraps-1` | Silicone Cup Sleeve… | 32 | No | publishablePublish |
| 12 | `1pc-self-adhesive-wall-mounted-paper-tissue-rack-suitable-for-kitchen-bathroom-under-cabinet-sink-cling-film-storage-punch-free-1` | Paper Tissue Rack… | 13 | No | publishablePublish |
| 13 | `2-tier-under-sink-sliding-storage-basket-multifunctional-organizer-rack-with-hooks-hanging-cup-space-saving-for-bathroom-kitchen-1` | Under Sink Basket… | 26 | No | publishablePublish |
| 14 | `paper-towel-holders-stainless-steel-roll-holder-paper-towels-self-adhesive-under-cabinet-for-kitchen-storage-and-organization` | Paper Towel Holders… | 10 | No | publishablePublish |
| 15 | `under-cabinet-paper-towel-holder-plastic-wrap-storage-holder-wall-mounted-paper-towel-holder-for-kitchen-or-bathroom` | Under Cabinet Paper Towel Holder… | 8 | No | publishablePublish |
| 16 | `modern-kitchen-accessories-soap-dispenser-set-liquid-hand-soap-dispenser-pump-bottle-brushes-holds-and-stores-sponges-scrubbers-1` | Soap Dispenser Set… | 34 | No | publishablePublish |
| 17 | `soap-dispenser-box-press-dispenser-scrubbing-liquid-container-kitchen-bathroom-automatic-detergent-foam-box-with-sponge-holder-1` | Soap Dispenser Box… | 22 | No | publishablePublish |
| 18 | `handmade-cotton-organizer-basket-vegetable-platter-tabletop-flat-tray-for-bread-candy-fruit-vegetable-1` | Handmade Cotton Organizer Basket… | 10 | No | publishablePublish |
| 19 | `cable-tidies-set` | Cable Tidies Set (100 pcs) — Preview | 1 | No | publishablePublish |
| 20 | `five-division-drawer-divider-preview` | 5-Division Drawer Divider — Preview | 1 | No | publishablePublish |
| 21 | `compact-cutlery-drawer-organiser-preview` | Compact Cutlery Drawer Organiser — Preview | 1 | No | publishablePublish |
| 22 | `adjustable-aluminium-phone-tablet-stand-preview` | Adjustable Aluminium Phone & Tablet Stand — Preview | 1 | No | publishablePublish |

**Published in 21EQ:** **19** | **Already visible:** **3**

---

## 6. Bounded Admin actions

| Action | Detail |
| --- | --- |
| Mutation | `publishablePublish` |
| Channel | **Online Store** only (`169105293495`) |
| Rows published | **19** (restore list minus three already visible) |
| Rows skipped | **6** keep-hidden (never published) |
| Unchanged | Status, title, description, price, inventory, variants, vendor, type, tags, SEO, media, metafields, collections, claims |

**Post-write Admin read-back:**

| Metric | Result |
| --- | --- |
| **ACTIVE** + **Online Store** visible | **22** ✓ |
| Keep-hidden still unpublished | **6/6** ✓ |
| Unintended extra visible (outside restore list) | **0** among pre-28 set ✓ |

---

## 7. Storefront verification summary

**Method:** Password-gated live Horizon; mobile **390×844**; evidence `artifacts/catalogue/slice-21eq/storefront-verify.json`.

| Route | Result | Notes |
| --- | --- | --- |
| Homepage | **PASS WITH NOTES** | Restored handles in product links; **no** keep-hidden sample |
| Search `organiser` | **PASS WITH NOTES** | Broad catalogue links restored |
| `/collections/all` | **PASS WITH NOTES** | Multi-product grid restored |
| PDP samples (`cable-tidies-set`, `handwoven-cotton-organizer-basket`, `adjustable-laptop-stand`) | **PASS WITH NOTES** | URLs load |
| Keep-hidden on sampled routes | **PASS** | **None** of six handles observed |

**Note:** Live PDPs show **Add to Cart** on legacy/demo rows — **known launch blocker**; **not** introduced by **21EQ** and **not** remediated here.

---

## 8. Rollback

Re-hide a product: `publishableUnpublish` to publication `169105293495` only (same pattern as **21EO**). Full rollback to **21EO** posture: unpublish all restore-list handles except the three drawer organiser keepers from **21EO**, or re-run **21EO** unpublish list minus PO exceptions.

---

## 9. Remaining launch blockers

1. **Checkout / payment / customer-flow gating** on live Horizon — **unresolved**; must be completed before launch approval.  
2. **Image-rights / claim / price / supplier-readiness** on restored rows — especially **21EJ** neutral previews and legacy imports.  
3. **21EO** neutral-as-launch-path remains **withdrawn** for PO launch decisions even though four neutral rows are visible again by PO choice.

---

## 10. Commands executed

```bash
git status --short --branch
git check-ignore -v artifacts/
node artifacts/catalogue/slice-21eq/run-restore.mjs
node artifacts/catalogue/slice-21eq/run-storefront-verify.mjs
```

---

## 11. Strict confirmations

- **No** credentials, cookies, tokens, or customer/order/payment data in this doc.  
- **No** `artifacts/` or `tools/catalogue/` committed.

---

## Next owner

**Product Owner** — accept **22**-product visible catalogue; confirm whether **21EJ** neutral previews should stay visible or be re-hidden in a follow-on slice; approve **commerce-gating** slice before any launch decision.
