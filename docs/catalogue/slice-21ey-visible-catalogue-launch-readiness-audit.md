# Slice 21EY — visible catalogue launch-readiness audit (read-only)

**Document type:** Read-only catalogue / supplier / media / claims audit  
**Prepared:** 2026-05-22  
**Owner:** Product Manager  
**Slice:** **21EY**  
**Store:** `dropshippoc.myshopify.com`  
**Live theme:** `148914077879` / Horizon / **live**  
**Online Store publication:** `gid://shopify/Publication/169105293495`

**Product Owner acceptance:** **21EX-B** commerce gate **PASS** on live Horizon (**`2026-05-22T08-48-50`** evidence).

**Upstream:** **21ES** (17 visible), **21EV** (commerce tags), **21EX-B** (`6a449d2`)

**Evidence (local; not committed):** `artifacts/catalogue/slice-21ey/2026-05-22T08-54-55/audit.json`

**Method:** Read-only Admin GraphQL via `shopify store execute` — **no** mutations, **no** theme push, **no** media upload.

---

## 1. Executive verdict

**PASS WITH NOTES** — desk audit complete for **17/17** Online Store visible products.

| Area | Result |
| --- | --- |
| Visible catalogue baseline | **17** products — matches **21ES** / **21EX** harness |
| Hidden catalogue (11) | **11/11** remain **unpublished** from Online Store ✓ |
| Commerce gate tags | **17/17** carry **`non-purchasable`** + **`price-to-confirm`** ✓ |
| Launch-ready for commerce | **0/17** — none cleared for pricing, supplier proof, image rights, or claims |
| Suitable as gated browse-only catalogue | **4** strong candidates; **9** conditional; **4** hide-before-launch recommended |

**Note:** Admin prices are **not** placeholder `0.00` on most rows; storefront shows **Price to be confirmed** via live theme gate only. Admin prices must **not** be treated as approved selling prices.

---

## 2. Pre-check

| Check | Result |
| --- | --- |
| Branch | `master` @ **`6a449d2`** |
| `artifacts/` | **gitignored** ✓ |
| `tools/catalogue/` | Untracked — **not** committed ✓ |
| Admin / theme / checkout / import / media / Supplier verified | **Not** performed ✓ |

---

## 3. Visible catalogue baseline (17)

**PDP URL pattern:** `https://dropshippoc.myshopify.com/products/{handle}` (password-gated storefront)

| # | Handle | Title (short) | Media | Tags (commerce) | Vendor | Admin price (ZAR) | OS visible |
| ---: | --- | --- | ---: | --- | --- | --- | --- |
| 1 | `1pc-self-adhesive-wall-mounted-paper-tissue-rack-…` | Self-Adhesive Paper Tissue Rack | 13 | both ✓ | DropShipPOC | 57–60 | Yes |
| 2 | `1pcs-upgradation-adjustable-flatware-tableware-organizer-…` | Flatware Drawer Organizer | 16 | both ✓ | DropShipPOC | 102–146 | Yes |
| 3 | `2-tier-under-sink-sliding-storage-basket-…` | 2 Tier Under Sink Basket | 26 | both ✓ | DropShipPOC | 115–360 | Yes |
| 4 | `adjustable-expandable-bamboo-drawer-organizer-…` | Bamboo Drawer Organizer | 12 | both ✓ | DropShipPOC | 199–579 | Yes |
| 5 | `adjustable-laptop-stand` | Adjustable Laptop Stand | 10 | both ✓ + category | SG Home | 699 | Yes |
| 6 | `adjustable-pantry-organizer-utensil-cutlery-drawer-…` | Pantry Cutlery Drawer | 18 | both ✓ | DropShipPOC | 267–273 | Yes |
| 7 | `available-regular-price` | Multi-Use Storage Organizer Bin | 5 | both ✓ + storage | Everyday Home | 89 | Yes |
| 8 | `handmade-cotton-organizer-basket-vegetable-platter-…` | Handmade Cotton Organizer Basket | 10 | both ✓ | DropShipPOC | 140–143 | Yes |
| 9 | `handwoven-cotton-organizer-basket` | Handwoven Cotton Organizer Basket | 4 | both ✓ + storage | Everyday Home | 69 | Yes |
| 10 | `keep-room-tidy-for-dirty-clothes-waterproof-fabric-foldable-hamper` | Foldable Hamper | 15 | both ✓ | DropShipPOC | 134–138 | Yes |
| 11 | `kitchen-utensil-holder` | Kitchen Utensil Holder | 6 | both ✓ + kitchen | DropShipPOC | 82–121 | Yes |
| 12 | `modern-kitchen-accessories-soap-dispenser-set-…` | Soap Dispenser Set | 34 | both ✓ | DropShipPOC | 269–449 | Yes |
| 13 | `paper-towel-holders-stainless-steel-roll-holder-…` | Paper Towel Holder (stainless) | 10 | both ✓ | DropShipPOC | 90–93 | Yes |
| 14 | `silicone-cup-sleeve-heat-insulation-bottle-sleeves-…` | Silicone Cup Sleeve | 32 | both ✓ | DropShipPOC | 25–31 | Yes |
| 15 | `soap-dispenser-box-press-dispenser-scrubbing-liquid-container-…` | Soap Dispenser Box | 22 | both ✓ | DropShipPOC | 50–120 | Yes |
| 16 | `under-cabinet-paper-towel-holder` | Under Cabinet Paper Towel Holder | 8 | both ✓ + kitchen | DropShipPOC | 119–123 | Yes |
| 17 | `usb-c-charging-cable-1-2m` | 1.2m USB-C Charging Cable | 6 | both ✓ + tech | SG Home | 149 | Yes |

**Commerce gate tags:** **17/17** have **`non-purchasable`** and **`price-to-confirm`** (read-back **2026-05-22**). No **`preview-only`** or **`image-permission-confirmed`** on visible rows.

---

## 4. Hidden catalogue confirmation (11)

| Group | Count | Online Store published | Status |
| --- | ---: | --- | --- |
| **21EQ keep-hidden** | 6 | **No** (6/6) | ACTIVE preserved |
| **21ES round-2** | 5 | **No** (5/5) | ACTIVE preserved |

**Handles verified unpublished:** `beverage-bottle-oil-bottle-handle-holder`, `compact-organiser-basket`, `foldable-magnetic-phone-holder-desktop-tablet-stand`, `mini-plastic-divider-basket`, `sink-strainer-stainless-steel`, `usb-bag-sealer`, `five-division-drawer-divider-preview`, `adjustable-aluminium-phone-tablet-stand-preview`, `cable-tidies-set`, `compact-cutlery-drawer-organiser-preview`, `under-cabinet-paper-towel-holder-plastic-wrap-storage-holder-wall-mounted-paper-towel-holder-for-kitchen-or-bathroom`.

**Storefront:** **21EX-B** confirmed hidden handles do not appear on gated listing routes.

---

## 5. Image / media readiness

| Classification | Rule used | Products (count) |
| --- | --- | --- |
| **Supplier/import image — rights review required** | Vendor **DropShipPOC** + `SPECIFICATIONS` import copy + multi-image gallery (typical dropship import) | **13** |
| **Acceptable catalogue image (still needs rights/supplier proof)** | Vendor **Everyday Home** or **SG Home** + shorter programme-style body copy | **4** |
| **Neutral/generated image** | `image-permission-confirmed` or **21EJ** neutral tags | **0** (none on visible set) |
| **Missing/weak image** | `mediaCount` 0 | **0** |
| **Duplicate/placeholder risk** | Handle/title looks like test or legacy demo | **1** (`available-regular-price`) |

**Products that should not remain visible on image-rights grounds alone (recommended hide):**

- **`available-regular-price`** — handle reads as pricing/test artefact; weak programme identity.
- **High-image-count import rows** (`modern-kitchen-accessories-…` **34** images; `silicone-cup-sleeve-…` **32**; `2-tier-under-sink-…` **26**) — rights unknown; visual clutter.

**Note:** All visible rows have **some** Admin media; there is **no** theme-placeholder-only row in the current **17**.

---

## 6. Supplier / readiness classification

| Readiness class | Count | Vendor pattern |
| --- | ---: | --- |
| **Ready candidate** | **0** | — |
| **Needs supplier proof** | **17** | No **`Supplier verified`**; no approved local/CJ proof tags on visible set |
| **Needs pricing/delivery proof** | **17** | Admin prices are live numerics; no landed-cost / delivery evidence |
| **Needs copy/claims cleanup** | **13** | DropShipPOC `SPECIFICATIONS` import blocks |
| **Hide candidate** | **4** | See §8 |

**Vendor/source clues:**

| Vendor | Count | Interpretation |
| --- | ---: | --- |
| **DropShipPOC** | 13 | Legacy/import catalogue — likely marketplace sourcing |
| **SG Home** | 2 | Cleaner copy; **no** `local-supplier-route` tag; inventory figures unrealistic |
| **Everyday Home** | 2 | Cleaner programme tone; still lacks supplier-proof tags |

---

## 7. Claim and live-safety audit

| Risk area | Finding |
| --- | --- |
| **Stock certainty** | **`adjustable-laptop-stand`** and **`usb-c-charging-cable-1-2m`** show **65k+** units — not credible for launch; **`keep-room-tidy-…`** at **0** with **CONTINUE** oversell policy |
| **Delivery timing** | No approved delivery copy on any row |
| **Warranty** | None stated; import specs mention CE/RoHS — **not** approved programme claims |
| **Supplier verified** | **Absent** on all **17** (required) |
| **Quantity/pack count** | **`1.2m`**, **`1PC`**, multi-variant import listings — pack counts unverified |
| **Premium/brand-like claims** | Titles: **Handmade**, **Stainless Steel**, **Waterproof**, **Fast-charging** (tag), **Modern**; spec brands (**ZHANWANGJIAJU**, etc.) |
| **Commerce gate** | **Required** launch control — live Horizon **21EX-B** blocks ATC/checkout on product surfaces when tags present |

**Copy/claims hotspots (desk):**

| Handle | Flag |
| --- | --- |
| `handmade-cotton-organizer-basket-…` | **Handmade** claim — unverified |
| `keep-room-tidy-…` | **Waterproof** — unverified |
| `paper-towel-holders-stainless-steel-…` | Material claim — unverified |
| `usb-c-charging-cable-1-2m` | **Fast-charging** tag + length claim — unverified |
| `adjustable-laptop-stand` | **Ergonomic** / aluminium claims in body — unverified |
| DropShipPOC bulk (13) | Import `SPECIFICATIONS` / **Mainland China** origin text — not customer-facing quality |

---

## 8. Product Owner decision table (17 rows)

| # | Handle | Keep visible | Hide before launch | Copy cleanup | Image-rights proof | Supplier/pricing/delivery proof | Priority |
| ---: | --- | :---: | :---: | :---: | :---: | :---: | --- |
| 1 | `adjustable-laptop-stand` | — | **Y** | Y | Y | Y | **1 — must hide** |
| 2 | `usb-c-charging-cable-1-2m` | — | **Y** | Y | Y | Y | **1 — must hide** |
| 3 | `available-regular-price` | — | **Y** | Y | Y | Y | **1 — must hide** |
| 4 | `keep-room-tidy-for-dirty-clothes-waterproof-fabric-foldable-hamper` | — | **Y** | Y | Y | Y | **1 — must hide** |
| 5 | `handwoven-cotton-organizer-basket` | **Y** | — | — | Y | Y | **2 — catalogue-only** |
| 6 | `kitchen-utensil-holder` | **Y** | — | — | Y | Y | **2 — catalogue-only** |
| 7 | `under-cabinet-paper-towel-holder` | **Y** | — | — | Y | Y | **2 — catalogue-only** |
| 8 | `1pc-self-adhesive-wall-mounted-paper-tissue-rack-…` | **Y** | — | Y | Y | Y | **2 — catalogue-only** |
| 9 | `adjustable-pantry-organizer-utensil-cutlery-drawer-…` | **Y** | — | Y | Y | Y | **2 — catalogue-only** |
| 10 | `adjustable-expandable-bamboo-drawer-organizer-…` | **Y** | — | Y | Y | Y | **2 — catalogue-only** |
| 11 | `1pcs-upgradation-adjustable-flatware-tableware-organizer-…` | **Y** | — | Y | Y | Y | **2 — catalogue-only** |
| 12 | `handmade-cotton-organizer-basket-vegetable-platter-…` | **Y** | — | Y | Y | Y | **2 — catalogue-only** |
| 13 | `paper-towel-holders-stainless-steel-roll-holder-…` | **Y** | — | Y | Y | Y | **2 — catalogue-only** |
| 14 | `soap-dispenser-box-press-dispenser-scrubbing-liquid-container-…` | **Y** | — | Y | Y | Y | **2 — catalogue-only** |
| 15 | `2-tier-under-sink-sliding-storage-basket-…` | **Y** | — | Y | Y | Y | **2 — catalogue-only** (borderline; consider hide if PO wants leaner catalogue) |
| 16 | `modern-kitchen-accessories-soap-dispenser-set-…` | **Y** | — | Y | Y | Y | **2 — catalogue-only** (borderline; 34 images) |
| 17 | `silicone-cup-sleeve-heat-insulation-bottle-sleeves-…` | **Y** | — | Y | Y | Y | **2 — catalogue-only** (borderline; 32 images) |

**Priority legend:**

1. **Must hide before launch** — credibility, inventory, or test-handle risk outweighs browse value even with commerce gate.
2. **Can stay visible as catalogue-only** — acceptable short-term with live commerce gate; not cleared for sales.
3. **Needs evidence before future commerce activation** — applies to **all 17** (image rights, supplier path, landed price, delivery, returns wording).

---

## 9. Recommended Product Owner actions (summary)

| Action | Products |
| --- | --- |
| **Unpublish from Online Store (reversible)** | **4** in priority **1** (§8) |
| **Keep visible, gated browse-only** | **13** at priority **2** until image/supplier programme completes |
| **Do not enable commerce** on any row until **3** is satisfied | **17** |
| **Do not mark Supplier verified** | **17** |

---

## 10. Remaining launch blockers

1. **No launch-approved supplier** on any visible SKU.  
2. **Image rights** unresolved for import galleries (**13** DropShipPOC rows).  
3. **Admin prices** are not approved — theme gate masks storefront only.  
4. **Inventory integrity** — several rows show oversell-friendly policies or implausible quantities.  
5. **Checkout / payments / markets** — still programme-blocked (out of scope for **21EY**).  
6. **Homepage assembly** — live Horizon `index.json` vs MVP rails (separate slice).

---

## 11. Commands executed

```bash
git status --short --branch
git check-ignore -v artifacts/
node artifacts/catalogue/slice-21ey/run-readonly-audit.mjs
```

---

## 12. Safety

No credentials, cookies, tokens, customer/order/payment payloads, or supplier credentials in this document. Raw Admin JSON under `artifacts/catalogue/slice-21ey/` is gitignored.

---

## Next owner

**Product Owner** — decide reversible unpublish for **4** hide candidates vs keep gated browse-only; approve next slice for image-rights programme (**21EJ** path), supplier proof (**21DW+**), or lean-catalogue reduction.
