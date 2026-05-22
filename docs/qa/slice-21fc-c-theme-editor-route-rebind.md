# Slice 21FC-C — Theme Editor route rebind and live QA

**Document type:** Theme Editor support + live rendered QA  
**Prepared:** 2026-05-22  
**Owner:** Senior Full-Stack Software Architect / QA  
**Slice:** **21FC-C**  
**Store:** `dropshippoc.myshopify.com`  
**Live theme:** `151207542967` / Mzansi Select MVP Preview / **live**

**Upstream:** **21FJ** (`b8bd9c9b5b1468b5baf9cca3fd72f77e3a109c93`)  
**Evidence (local; not committed):** `artifacts/qa/slice-21fc-c-theme-editor-route-rebind/`

---

## 1. Executive verdict

**FAIL**

The Product Owner completed the approved Theme Editor re-save/rebind check, and the storefront improved materially, but the split-theme issue is **not fully resolved**.

After the manual Theme Editor save:

- `/` renders the MVP theme
- `/search?q=organiser&type=product` renders the MVP theme
- mobile `/collections/all` renders the MVP theme
- **14 of 15** tested visible PDPs render the MVP theme

However:

- desktop `/collections/all` still renders **Horizon**
- desktop `/collections/all` still shows **17** products instead of **15**
- desktop `/collections/all` still exposes **4** hidden handles
- desktop `/collections/all` still shows a Liquid error state
- **1** visible PDP still renders **Horizon** and shows a Liquid error

Because the required route/template consistency was not achieved across all required live surfaces, **21FC-C fails**.

---

## 2. Pre-check

| Check | Result |
| --- | --- |
| Branch | `master` |
| `HEAD` includes **21FJ** | **PASS** — `b8bd9c9b5b1468b5baf9cca3fd72f77e3a109c93` |
| `artifacts/` ignored | **PASS** |
| `tools/catalogue/` untracked | **PASS** |
| Live theme from CLI | **PASS** — `151207542967` listed as `[live]` |
| Theme push / publish / rollback / Admin mutation planned | **No** |

No theme push, no theme publish, no rollback, no Shopify Admin product/collection mutation, no `productUpdate` template-suffix mutation, no checkout/payment/customer enablement, no import/sync, no app install, no media upload, and no Supplier verified change were performed in this slice.

---

## 3. Manual Theme Editor actions completed

Per Product Owner confirmation:

- `/collections/all` was opened in Theme Editor
- the route was confirmed as using the MVP theme/template
- the Theme Editor state was saved
- affected PDP template routing was checked where possible
- the Theme Editor state was saved again

No credentials were requested, printed, stored, captured, or committed.

---

## 4. Routes and viewports tested

### Desktop `1366x768`

- `/`
- `/collections/all`
- `/search?q=organiser&type=product`
- all **15** visible PDPs:
  - `1pc-self-adhesive-wall-mounted-paper-tissue-rack-suitable-for-kitchen-bathroom-under-cabinet-sink-cling-film-storage-punch-free-1`
  - `1pcs-upgradation-adjustable-flatware-tableware-organizer-plastic-multifunctional-drawer-organizer-for-kitchen-counter-utensils-1`
  - `2-tier-under-sink-sliding-storage-basket-multifunctional-organizer-rack-with-hooks-hanging-cup-space-saving-for-bathroom-kitchen-1`
  - `adjustable-expandable-bamboo-drawer-organizer-for-kitchen-bedroom-or-living-room-ideal-for-organizing-cutlery-silverware-knives-1`
  - `adjustable-pantry-organizer-utensil-cutlery-drawer-for-forks-knives-silverware-expandable-kitchen-drawer-kitchen-organizer-tray-1`
  - `handmade-cotton-organizer-basket-vegetable-platter-tabletop-flat-tray-for-bread-candy-fruit-vegetable-1`
  - `handwoven-cotton-organizer-basket`
  - `kitchen-utensil-holder`
  - `low-delay-wireless-tws-games-sports-headset`
  - `modern-kitchen-accessories-soap-dispenser-set-liquid-hand-soap-dispenser-pump-bottle-brushes-holds-and-stores-sponges-scrubbers-1`
  - `paper-towel-holders-stainless-steel-roll-holder-paper-towels-self-adhesive-under-cabinet-for-kitchen-storage-and-organization`
  - `silicone-cup-sleeve-heat-insulation-bottle-sleeves-non-slip-mug-sleeve-glass-bottle-cover-for-mugs-ceramic-coffee-cups-wraps-1`
  - `soap-dispenser-box-press-dispenser-scrubbing-liquid-container-kitchen-bathroom-automatic-detergent-foam-box-with-sponge-holder-1`
  - `under-cabinet-paper-towel-holder`
  - `vertical-office-mouse-wireless-mouse-vertical-mouse`

### Mobile `390x844`

- `/`
- `/collections/all`
- `/search?q=organiser&type=product`
- `low-delay-wireless-tws-games-sports-headset`

Unlock method was a fresh headed Chromium context with manual storefront unlock in the browser only.

---

## 5. Theme ID results

### Core routes

| Route | Desktop theme ID | Mobile theme ID | Result |
| --- | --- | --- | --- |
| `/` | `151207542967` | `151207542967` | **PASS** |
| `/search?q=organiser&type=product` | `151207542967` | `151207542967` | **PASS** |
| `/collections/all` | `2481` / Horizon | `151207542967` | **FAIL** |

### PDPs

**14/15 PASS** on the MVP live theme `151207542967`.

The remaining PDP still bound to Horizon:

- `modern-kitchen-accessories-soap-dispenser-set-liquid-hand-soap-dispenser-pump-bottle-brushes-holds-and-stores-sponges-scrubbers-1`
  - theme ID: `2481`
  - theme name: `Horizon`
  - visible Liquid error
  - no wishlist button

All other tested visible PDPs returned theme ID `151207542967`.

---

## 6. Catalogue baseline results

### `/collections/all`

**FAIL on desktop**

Observed on desktop `/collections/all`:

- visible count observed: **17**
- required count: **15**
- hidden handles still visible: **4**
  - `adjustable-laptop-stand`
  - `available-regular-price`
  - `keep-room-tidy-for-dirty-clothes-waterproof-fabric-foldable-hamper`
  - `usb-c-charging-cable-1-2m`
- **21EZ** removals still visible: **1**
  - `available-regular-price`

Observed on mobile `/collections/all`:

- MVP theme ID returned
- wishlist buttons rendered (`15`)
- `Price to be confirmed` remained visible
- no cart/add or quick-add leakage

Even with the mobile improvement, the required `/collections/all` live route is not consistently corrected because the desktop route still resolves to Horizon behaviour.

---

## 7. Commerce-gate and safety results

### PASS surfaces

Homepage, search, mobile `/collections/all`, and **14** MVP-bound PDPs preserved the expected catalogue-only posture:

- no `/cart/add` forms
- no Add to Cart
- no quick-add
- no dynamic checkout
- no checkout links
- no Supplier verified claim
- `Price to be confirmed` remained visible
- no mobile horizontal overflow

### Failing surfaces

Desktop `/collections/all` and the single Horizon-bound PDP still fail the acceptance set because they are not consistently on the MVP route/template binding. Specifically:

- desktop `/collections/all` returned Horizon theme ID
- desktop `/collections/all` returned a Liquid error state
- the Horizon-bound PDP returned a Liquid error state
- the Horizon-bound PDP had no wishlist button

No checkout/payment/customer-flow path was activated in this slice.

---

## 8. Wishlist spot-check result

**PASS**

Wishlist remained functional on approved spot-check surfaces:

- homepage: **PASS**
- search: **PASS**
- PDP `low-delay-wireless-tws-games-sports-headset`: **PASS**

Observed behaviour:

- heart toggled correctly
- `aria-pressed` updated correctly
- Add/Remove labels updated correctly
- `mzansi-wishlist-v1` wrote correctly

This confirms the accepted **21FJ** wishlist scope remains intact.

---

## 9. Liquid error status

**FAIL**

Liquid errors were still observed on:

- desktop `/collections/all`
- PDP `modern-kitchen-accessories-soap-dispenser-set-liquid-hand-soap-dispenser-pump-bottle-brushes-holds-and-stores-sponges-scrubbers-1`

No Liquid error was observed on:

- `/`
- `/search?q=organiser&type=product`
- mobile `/collections/all`
- the other **14** tested visible PDPs

---

## 10. Root cause statement

The Theme Editor save improved some route binding outcomes, but the storefront still does **not** resolve all live route/template instances consistently.

The evidence now points to a **partial route-instance rebind only**:

- some surfaces correctly serve the MVP theme after the manual save
- desktop `/collections/all` still resolves to Horizon
- one visible PDP still resolves to Horizon

This means the split-theme condition remains a **platform/template-instance binding issue**, not a local theme-file issue.

---

## 11. Required next escalation (not executed here)

Because the approved Theme Editor rebind did not fully correct the split-theme behaviour, the next step should be one of the separately approved escalation paths:

### Recommended next step: **A) Shopify Support escalation with evidence**

This is the strongest next action because:

- CLI theme roles still report MVP as live
- Theme Editor save was completed
- most routes now resolve correctly
- only specific route/template instances remain split

### Alternative approved follow-ups

- **B) separately approved Admin template-suffix mutation**
- **C) separately approved Horizon/MVP republish flip-flop**

None of those actions were performed in this slice.

---

## 12. Manual verification update — 2026-05-22

This report remains an accurate record of the automated post-rebind run, which failed at the time. However, the Product Owner later completed a separate manual browser-console verification on the live storefront and the previously failing route symptoms did **not** reproduce in that session.

### Product Owner manual verification evidence

#### Desktop `/collections/all`

- `Shopify.theme.id`: `151207542967`
- `Shopify.theme.name`: `Mzansi Select MVP Preview`
- product handle count: `15`
- checked **21EZ** hidden handles present: `false` for all four checked
- `/cart/add` forms: `0`
- quick-add nodes: `0`
- Liquid errors: `0`

#### Previously problematic PDP

- route: `/products/modern-kitchen-accessories-soap-dispenser-set-liquid-hand-soap-dispenser-pump-bottle-brushes-holds-and-stores-sponges-scrubbers-1`
- `Shopify.theme.id`: `151207542967`
- `/cart/add` forms: `0`
- visible risky commerce elements: `0`
- Liquid errors: `0`
- `Price to be confirmed`: `true`

### Manual resolution status

Based on that manual verification evidence, the remaining split-theme issue from **21FC-C** is now treated as **manually resolved** in the Product Owner browser session.

The earlier automated **FAIL** verdict remains part of the audit trail, but its blocker status is superseded by the later manual confirmation.

### Current recommendation

- Shopify Support escalation is **no longer the immediate default next step**
- one fresh automated confirmation may still be run later if the Product Owner wants final machine-captured proof
- until that optional rerun is requested, the remaining split-theme issue should be treated as **resolved manually**

---

## 13. Evidence path

Primary evidence:

- `artifacts/qa/slice-21fc-c-theme-editor-route-rebind/2026-05-22T13-58-23-908Z/summary.json`

---

## 13. Remaining launch blockers

1. Desktop `/collections/all` still fails the MVP route binding and catalogue baseline.
2. One visible PDP still resolves to Horizon:
   `modern-kitchen-accessories-soap-dispenser-set-liquid-hand-soap-dispenser-pump-bottle-brushes-holds-and-stores-sponges-scrubbers-1`
3. Hidden-product absence is still not proven on desktop `/collections/all`.
4. Liquid error state remains on the still-Horizon routes.

---

## 14. Recommended next owner

**Product Owner** to approve **Shopify Support escalation with evidence** as the next route-binding recovery step.
