# Slice 21FK — Product copy cleanup approval pack

**Document type:** Documentation-only Product Owner approval pack  
**Prepared:** 2026-05-22  
**Owner:** Senior Full-Stack Software Architect / QA  
**Slice:** **21FK**  
**Store:** `dropshippoc.myshopify.com`  
**Live theme:** `151207542967` / Mzansi Select MVP Preview / **live**

**Upstream accepted commits:** `e7d27b7` (manual route verification update), `e3efd2b` (fresh-cache automated note)  
**Key trusted evidence:**  
- `artifacts/catalogue/slice-21fd/2026-05-22T11-51-55/copy-audit.json`  
- `artifacts/catalogue/slice-21ff/2026-05-22T12-15-32/summary.json`  
- read-only baseline rerun: `artifacts/catalogue/slice-21ff/2026-05-22T14-44-40/`

---

## 1. Executive verdict

**PASS**

This slice prepares the Product Owner approval pack for a future bounded Shopify Admin copy-update slice. No Admin mutation, theme push, publish, checkout/payment change, or product-data write was performed here.

The Product Owner’s manual route verification is treated as the controlling evidence for the current route state. Shopify Support escalation is paused. The automated **21FL** inconsistency is retained as a note only and is **not** treated as an active blocker unless the Product Owner manually reproduces it.

---

## 2. Accepted baseline

The current accepted baseline for the approval pack is:

- live theme: `151207542967`
- visible catalogue: `15`
- hidden catalogue: `15`
- visible catalogue commerce gate: `15/15`
- all visible products retain:
  - `non-purchasable`
  - `price-to-confirm`
- wishlist status: accepted after **21FJ**
- manual desktop `/collections/all` verification: accepted as controlling evidence
- problem PDP manual verification: accepted as controlling evidence

---

## 3. Read-only baseline confirmation

### Method

Used existing authenticated CLI tooling in read-only mode only:

```bash
node artifacts/catalogue/slice-21ff/run-tech-commerce-tags.mjs
```

### Result

| Check | Result |
| --- | --- |
| Visible products | **15** |
| Hidden products | **15** |
| Visible with `non-purchasable` + `price-to-confirm` | **15/15** |
| `21EZ` four still hidden | **PASS** |
| Product data mutated | **No** |

### Authoritative visible handle list

1. `1pc-self-adhesive-wall-mounted-paper-tissue-rack-suitable-for-kitchen-bathroom-under-cabinet-sink-cling-film-storage-punch-free-1`
2. `1pcs-upgradation-adjustable-flatware-tableware-organizer-plastic-multifunctional-drawer-organizer-for-kitchen-counter-utensils-1`
3. `2-tier-under-sink-sliding-storage-basket-multifunctional-organizer-rack-with-hooks-hanging-cup-space-saving-for-bathroom-kitchen-1`
4. `adjustable-expandable-bamboo-drawer-organizer-for-kitchen-bedroom-or-living-room-ideal-for-organizing-cutlery-silverware-knives-1`
5. `adjustable-pantry-organizer-utensil-cutlery-drawer-for-forks-knives-silverware-expandable-kitchen-drawer-kitchen-organizer-tray-1`
6. `handmade-cotton-organizer-basket-vegetable-platter-tabletop-flat-tray-for-bread-candy-fruit-vegetable-1`
7. `handwoven-cotton-organizer-basket`
8. `kitchen-utensil-holder`
9. `low-delay-wireless-tws-games-sports-headset`
10. `modern-kitchen-accessories-soap-dispenser-set-liquid-hand-soap-dispenser-pump-bottle-brushes-holds-and-stores-sponges-scrubbers-1`
11. `paper-towel-holders-stainless-steel-roll-holder-paper-towels-self-adhesive-under-cabinet-for-kitchen-storage-and-organization`
12. `silicone-cup-sleeve-heat-insulation-bottle-sleeves-non-slip-mug-sleeve-glass-bottle-cover-for-mugs-ceramic-coffee-cups-wraps-1`
13. `soap-dispenser-box-press-dispenser-scrubbing-liquid-container-kitchen-bathroom-automatic-detergent-foam-box-with-sponge-holder-1`
14. `under-cabinet-paper-towel-holder`
15. `vertical-office-mouse-wireless-mouse-vertical-mouse`

---

## 4. Review summary

| Summary item | Count |
| --- | ---: |
| Products reviewed | **15** |
| Proposed title updates | **14** |
| Proposed description updates | **15** |
| Rows recommended `approve copy update` | **12** |
| Rows recommended `needs supplier proof` | **3** |
| Rows recommended `defer` | **0** |
| Rows recommended `hide` | **0** |

### Rows flagged `needs supplier proof`

1. `low-delay-wireless-tws-games-sports-headset`
2. `modern-kitchen-accessories-soap-dispenser-set-liquid-hand-soap-dispenser-pump-bottle-brushes-holds-and-stores-sponges-scrubbers-1`
3. `soap-dispenser-box-press-dispenser-scrubbing-liquid-container-kitchen-bathroom-automatic-detergent-foam-box-with-sponge-holder-1`

Reason: these rows currently lean on wording that can imply unverified performance, included components, or functionality that should be softened further or confirmed before any Admin copy write.

---

## 5. Product Owner review table

| Handle | Current title | Proposed clean title | Current description issue summary | Proposed cleaned description | Risky claims to remove or soften | Image / supplier proof note | Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `1pc-self-adhesive-wall-mounted-paper-tissue-rack-suitable-for-kitchen-bathroom-under-cabinet-sink-cling-film-storage-punch-free-1` | 1PC Self-Adhesive Wall-Mounted Paper Tissue Rack Suitable For Kitchen Bathroom Under Cabinet Sink Cling Film Storage Punch-Free | Self-adhesive Under-Cabinet Tissue Rack | Imported `1pc` shorthand; title very long; keyword-heavy. | A compact under-cabinet tissue rack for keeping paper towels or similar rolls within easy reach in the kitchen or bathroom. The wall-mounted format is presented as a practical way to free up everyday prep or storage space. Price, final fit, and delivery details remain to be confirmed. | Remove or soften `punch-free`, `space saving`, and over-broad multi-use language. | Media is present in the current catalogue row. Keep supplier and image posture conservative; no supplier-verified or stock-certainty language. | **Approve copy update** |
| `1pcs-upgradation-adjustable-flatware-tableware-organizer-plastic-multifunctional-drawer-organizer-for-kitchen-counter-utensils-1` | 1Pcs Upgradation Adjustable Flatware Tableware Organizer – Plastic Multifunctional Drawer Organizer for Kitchen Counter Utensils | Adjustable Flatware Drawer Organiser | Imported `1pcs` shorthand; title very long; keyword-heavy. | An adjustable drawer organiser for cutlery and small kitchen utensils. The layout is presented as a simple way to separate everyday items and keep drawers easier to use. Final sizing, finish, and delivery details remain to be confirmed. | Remove or soften `upgradation`, `multifunctional`, and any implied quality or stock claims lifted from source copy. | Media is present. Source-style copy still needs conservative handling; do not elevate supplier or capability claims. | **Approve copy update** |
| `2-tier-under-sink-sliding-storage-basket-multifunctional-organizer-rack-with-hooks-hanging-cup-space-saving-for-bathroom-kitchen-1` | 2 Tier Under Sink Sliding Storage Basket Multifunctional Organizer Rack with Hooks Hanging Cup Space-saving for Bathroom Kitchen | 2-Tier Under-Sink Sliding Storage Basket | Title very long; sentence structure and source-copy noise. | A 2-tier under-sink storage basket designed to help organise cleaning or household items in tighter spaces. The sliding basket format is presented as a practical storage option for kitchen or bathroom use. Final configuration, finish, and delivery details remain to be confirmed. | Remove or soften `space-saving`, `multifunctional`, and any assumptions about included accessories beyond what is clearly shown. | Media is present. Use cautious catalogue wording only; no supplier-verified or delivery-certainty language. | **Approve copy update** |
| `adjustable-expandable-bamboo-drawer-organizer-for-kitchen-bedroom-or-living-room-ideal-for-organizing-cutlery-silverware-knives-1` | Adjustable Expandable Bamboo Drawer Organizer for Kitchen,Bedroom or Living Room-Ideal for Organizing Cutlery,Silverware& Knives | Expandable Bamboo Drawer Organiser | Title very long; punctuation and spacing need cleanup. | An expandable bamboo drawer organiser for cutlery and other small household items. The adjustable layout is presented as a tidier storage option for kitchens, bedrooms, or living areas. Final sizing, finish, and delivery details remain to be confirmed. | Remove or soften `ideal`, broad lifestyle promises, and any implied fit guarantee. | Media is present. Material wording follows the current listing, but supplier and image proof should still remain conservative in customer copy. | **Approve copy update** |
| `adjustable-pantry-organizer-utensil-cutlery-drawer-for-forks-knives-silverware-expandable-kitchen-drawer-kitchen-organizer-tray-1` | Adjustable Pantry Organizer Utensil Cutlery Drawer for Forks Knives Silverware Expandable Kitchen Drawer Kitchen Organizer Tray | Adjustable Cutlery Drawer Organiser | Title very long; irregular spacing; source-copy repetition. | An adjustable drawer organiser for forks, knives, spoons, and similar kitchen tools. It is presented as a practical way to separate items and keep drawers easier to manage day to day. Final sizing, finish, and delivery details remain to be confirmed. | Remove or soften repetitive SEO wording and any overstated storage promises. | Media is present. Keep supplier/image posture conservative and avoid certainty claims. | **Approve copy update** |
| `handmade-cotton-organizer-basket-vegetable-platter-tabletop-flat-tray-for-bread-candy-fruit-vegetable-1` | Handmade Cotton Organizer Basket Vegetable Platter Tabletop Flat Tray for Bread Candy Fruit Vegetable | Cotton Tabletop Organiser Tray | Title very long; keyword-heavy source phrasing. | A cotton tabletop organiser tray for bread, fruit, snacks, or other lightweight household items. The open tray format is presented as a simple way to keep tables or counters tidier. Final size, finish, and delivery details remain to be confirmed. | Remove or soften `handmade`, `rustic retro`, over-broad use lists, and any implied pack or styling promises not independently confirmed. | Media is present. Keep supplier/image wording cautious; no supplier-verified claim. | **Approve copy update** |
| `handwoven-cotton-organizer-basket` | Handwoven Cotton Organizer Basket | Cotton Organiser Basket | Minor polish only. | A cotton organiser basket for bread, fruit, toiletries, or everyday household items. The basket format is presented as a tidy storage option for shelves, tables, or counters. Price and delivery details remain to be confirmed. | Avoid over-claiming durability, stock, supplier status, or unverified handcrafted wording. | Existing row already reads more cleanly than the import-style rows. Media is present; no supplier-verified language should be added. | **Approve copy update** |
| `kitchen-utensil-holder` | Kitchen Utensil Holder | Kitchen Utensil Holder | Minor polish only. | A kitchen utensil holder for keeping spatulas, spoons, whisks, and other everyday tools close at hand. It is presented as a simple countertop storage option for a tidier prep area. Final sizing, finish, and delivery details remain to be confirmed. | Avoid over-claiming size, capacity, or stock certainty. | Existing row already reads relatively cleanly. Media is present; keep supplier/image posture conservative. | **Approve copy update** |
| `low-delay-wireless-tws-games-sports-headset` | Low-delay Wireless TWS Games, Sports Headset | Wireless TWS Headset | Description needs clearer sentence structure; performance wording is riskier than the rest of the visible set. | A wireless TWS headset presented for everyday listening in the current catalogue preview. Multiple colour options are shown on the product page. Final audio specifications, price, and delivery details remain to be confirmed before any purchase path is enabled. | Remove or soften `low-delay`, `games`, `sports`, and any implied performance or battery claims unless separately evidenced. | This tech row was intentionally kept visible in **21FF**. Keep copy very general until supplier/product proof is stronger; no specification or performance claims should be invented. | **Needs supplier proof** |
| `modern-kitchen-accessories-soap-dispenser-set-liquid-hand-soap-dispenser-pump-bottle-brushes-holds-and-stores-sponges-scrubbers-1` | Modern kitchen accessories Soap Dispenser Set Liquid hand soap dispenser pump bottle brushes Holds and Stores Sponges Scrubbers | Kitchen Soap Dispenser Set with Sponge Holder | Title very long; keyword-heavy; current wording suggests included components and specific finish details. | A kitchen soap dispenser set presented for sink-side organisation in the kitchen or utility area. The set is shown as a practical way to keep soap and cleaning essentials together in one place. Final finish, included components, and delivery details remain to be confirmed. | Remove or soften batch-colour wording, broad included-item claims, and any implication that exact accessories are guaranteed. | Media is present, but the current row still leans heavily on source-style wording. Keep supplier/image posture conservative and confirm component certainty before any Admin write. | **Needs supplier proof** |
| `paper-towel-holders-stainless-steel-roll-holder-paper-towels-self-adhesive-under-cabinet-for-kitchen-storage-and-organization` | Paper Towel Holders Stainless Steel Roll Holder Paper Towels Self-Adhesive Under Cabinet for Kitchen Storage and Organization | Stainless Steel Under-Cabinet Paper Towel Holder | Title very long; sentence structure needs cleanup. | A stainless steel under-cabinet paper towel holder for keeping rolls close at hand while saving counter space. It is presented as a simple storage option for kitchens and similar work areas. Final sizing, finish, and delivery details remain to be confirmed. | Remove or soften broad storage claims and any implication that all installation types are confirmed. | Media is present. Material wording follows the current listing, but supplier/image proof should still remain conservative in customer-facing copy. | **Approve copy update** |
| `silicone-cup-sleeve-heat-insulation-bottle-sleeves-non-slip-mug-sleeve-glass-bottle-cover-for-mugs-ceramic-coffee-cups-wraps-1` | Silicone Cup Sleeve Heat Insulation Bottle Sleeves Non-slip Mug Sleeve Glass Bottle Cover For Mugs Ceramic Coffee Cups Wraps | Silicone Cup Sleeve | Title very long; keyword-heavy; sentence structure needs cleanup. | A silicone cup sleeve designed to add grip and light insulation to everyday drinkware. It is presented for use with mugs, cups, or similar containers shown on the page. Final fit, compatible sizes, and delivery details remain to be confirmed. | Remove or soften broad compatibility claims and any implied universal fit. | Media is present. Keep image/supplier posture conservative and avoid capability claims beyond the basic sleeve function. | **Approve copy update** |
| `soap-dispenser-box-press-dispenser-scrubbing-liquid-container-kitchen-bathroom-automatic-detergent-foam-box-with-sponge-holder-1` | Soap Dispenser Box Press Dispenser Scrubbing Liquid Container Kitchen Bathroom Automatic Detergent Foam Box with Sponge Holder | Press Soap Dispenser Box with Sponge Holder | Title very long; current wording implies automation and foam behaviour that may not be safe to repeat without proof. | A press soap dispenser box with space for a sponge or similar cleaning accessory. It is presented as a compact sink-side organiser for kitchens or bathrooms. Final finish, included components, and delivery details remain to be confirmed. | Remove or soften `automatic`, `foam`, and any claim that a specific dispensing action is guaranteed. | Media is present, but the current source wording introduces functional claims that should be confirmed before any Admin copy write. | **Needs supplier proof** |
| `under-cabinet-paper-towel-holder` | Under Cabinet Paper Towel Holder | Under-Cabinet Paper Towel Holder | Description needs clearer sentence structure. | An under-cabinet paper towel holder for keeping rolls within easy reach without taking up counter space. It is presented as a practical storage option for kitchens and similar prep areas. Final sizing, finish, and delivery details remain to be confirmed. | Avoid over-claiming fit, installation ease, or exact finish beyond the listed options. | Existing row already reads more cleanly than most import-style rows. Media is present; keep supplier/image posture conservative. | **Approve copy update** |
| `vertical-office-mouse-wireless-mouse-vertical-mouse` | Vertical Office Mouse Wireless Mouse Vertical Mouse | Vertical Wireless Mouse | Description needs clearer sentence structure; title is repetitive. | A vertical wireless mouse presented for general desk use in the current catalogue preview. Multiple colour options are shown on the product page. Final specifications, compatibility details, price, and delivery details remain to be confirmed. | Remove or soften implied ergonomic or performance benefits unless separately evidenced. | This tech row was intentionally kept visible in **21FF**. Keep wording general and catalogue-only; no unverified compatibility or benefit claims. | **Approve copy update** |

---

## 6. Rows recommended for immediate copy approval

The following **12** rows are suitable for a later bounded Admin copy-update slice once the Product Owner signs off the exact wording:

1. `1pc-self-adhesive-wall-mounted-paper-tissue-rack-suitable-for-kitchen-bathroom-under-cabinet-sink-cling-film-storage-punch-free-1`
2. `1pcs-upgradation-adjustable-flatware-tableware-organizer-plastic-multifunctional-drawer-organizer-for-kitchen-counter-utensils-1`
3. `2-tier-under-sink-sliding-storage-basket-multifunctional-organizer-rack-with-hooks-hanging-cup-space-saving-for-bathroom-kitchen-1`
4. `adjustable-expandable-bamboo-drawer-organizer-for-kitchen-bedroom-or-living-room-ideal-for-organizing-cutlery-silverware-knives-1`
5. `adjustable-pantry-organizer-utensil-cutlery-drawer-for-forks-knives-silverware-expandable-kitchen-drawer-kitchen-organizer-tray-1`
6. `handmade-cotton-organizer-basket-vegetable-platter-tabletop-flat-tray-for-bread-candy-fruit-vegetable-1`
7. `handwoven-cotton-organizer-basket`
8. `kitchen-utensil-holder`
9. `paper-towel-holders-stainless-steel-roll-holder-paper-towels-self-adhesive-under-cabinet-for-kitchen-storage-and-organization`
10. `silicone-cup-sleeve-heat-insulation-bottle-sleeves-non-slip-mug-sleeve-glass-bottle-cover-for-mugs-ceramic-coffee-cups-wraps-1`
11. `under-cabinet-paper-towel-holder`
12. `vertical-office-mouse-wireless-mouse-vertical-mouse`

---

## 7. Rows that should wait for stronger proof before any Admin write

These **3** rows should stay visible but should not be updated in Admin until the Product Owner is comfortable with the softened wording and any higher-risk wording is verified or explicitly removed:

1. `low-delay-wireless-tws-games-sports-headset`
2. `modern-kitchen-accessories-soap-dispenser-set-liquid-hand-soap-dispenser-pump-bottle-brushes-holds-and-stores-sponges-scrubbers-1`
3. `soap-dispenser-box-press-dispenser-scrubbing-liquid-container-kitchen-bathroom-automatic-detergent-foam-box-with-sponge-holder-1`

**No row is currently recommended for hide** in this approval pack.

---

## 8. Next Admin update requirements

Before any Shopify Admin copy mutation is approved, the follow-up slice should:

1. Use the Product Owner-approved wording from this pack only.
2. Change titles and descriptions only on the approved rows.
3. Preserve:
   - `non-purchasable`
   - `price-to-confirm`
   - current publication state
   - current media
   - current pricing
   - current inventory
   - current variants
4. Avoid:
   - `Supplier verified`
   - delivery promises
   - stock certainty
   - warranty promises
   - invented specifications
   - invented materials, brands, pack counts, or certifications
5. Re-run rendered QA on the edited rows after the Admin write.

---

## 9. Remaining launch blockers

- Product copy is still **not** updated in Shopify Admin
- the three rows listed in §7 still need stronger proof or extra Product Owner caution before any Admin write
- supplier/image proof posture remains conservative across the visible catalogue
- the automated **21FL** route inconsistency is retained as a note only and becomes active again **only** if the Product Owner manually reproduces it

---

## 10. Recommended next owner

**Product Owner** to review this approval pack and decide:

1. which of the **12** `approve copy update` rows should move into a bounded Admin write slice
2. whether the **3** `needs supplier proof` rows should wait, be softened further, or be explicitly approved as-is for a later write slice

---

## 11. Commands executed

```bash
git status --short --branch
git check-ignore -v artifacts/
shopify version
node artifacts/catalogue/slice-21ff/run-tech-commerce-tags.mjs
```

---

## 12. Safety

No sensitive authentication material, private customer material, private payment material, supplier-only material, HAR files, traces, screenshots, or raw dashboard output are stored in this document.
