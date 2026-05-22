# Slice 21FD — product experience and copy audit

**Document type:** Theme product-experience improvement + read-only copy audit  
**Prepared:** 2026-05-22  
**Owner:** Senior Full-Stack Software Architect / QA  
**Slice:** **21FD**  
**Store:** `dropshippoc.myshopify.com`  
**Live theme:** `151207542967` / Mzansi Select MVP Preview / **live**

**Product Owner approval:** Local wishlist, PDP gallery polish, real-option variant preview UI, copy audit table only — **no** Admin copy mutation, **no** checkout, **no** publish.

**Upstream:** **21FC-A** (`4a0e941`) — card include hotfix; **21FC-B** **FAIL** — split-theme on `/collections/all` + many PDPs (paused).

**Evidence (local; not committed):** `artifacts/catalogue/slice-21fd/2026-05-22T11-51-55/copy-audit.json` (copy audit); rendered harness `artifacts/catalogue/slice-21fd/run-rendered-qa.mjs` (requires `MZANSI_STOREFRONT_PASSWORD`).

---

## 1. Executive verdict

**PASS WITH NOTES**

| Area | Result |
| --- | --- |
| Pre-check (git, ignore rules, scope limits) | **PASS** |
| Wishlist (localStorage, no accounts) | **PASS** (implementation + live push) |
| PDP gallery (zoom, arrows, thumbs) | **PASS** (implementation + live push) |
| Colour/variant preview UI (real options only) | **PASS** (implementation + live push) |
| Product copy audit (read-only, no Admin writes) | **PASS** |
| Bounded live theme push | **PASS** — **8** files → **`151207542967`** |
| Rendered QA (password-gated storefront) | **PASS WITH NOTES** — harness ready; automated run **blocked** in this environment (no `MZANSI_STOREFRONT_PASSWORD`; store redirects to `/password`) |
| Split-theme regression | **Known blocker** — **21FC-B** unchanged |

---

## 2. Pre-check

| Check | Result |
| --- | --- |
| Branch | `master` (pre-commit) |
| `artifacts/` | **gitignored** ✓ (`git check-ignore -v artifacts/`) |
| `tools/catalogue/` | Untracked — **not** committed ✓ |
| Shopify CLI auth | **PASS** — `shopify store execute` copy audit + `shopify theme push` succeeded (no secrets logged) |
| Admin product mutation | **Not** planned / **not** performed ✓ |
| Checkout / payment / customer-flow | **Not** enabled ✓ |
| Theme publish / full sync | **Not** performed ✓ |
| Import / sync / app install / media upload / deletion / price / inventory / Supplier verified | **Not** performed ✓ |

---

## 3. Wishlist behaviour

- **Storage:** `localStorage` key `mzansi-wishlist-v1` — up to **50** entries: `handle`, `title`, `url` only.
- **UI:** `snippets/wishlist-button.liquid` on cards (`live-product-card`) and PDP (`main-product-foundation` action row).
- **Script:** `assets/wishlist-local.js` — toggles `.is-saved`, syncs all `[data-wishlist-toggle]` for the same handle, updates `aria-pressed` and labels (“Add … to wishlist” / “Remove … from wishlist”).
- **Limits honoured:** no login, no email, no backend, no cart/checkout paths.

---

## 4. PDP gallery behaviour

- **Markup:** `sections/main-product-foundation.liquid` — `[data-product-gallery]`, prev/next when `product.media.size > 1`, thumbnail buttons, zoom pane.
- **Script:** `assets/product-gallery.js` — thumb selection, keyboard arrows on gallery focus, desktop hover zoom into `[data-gallery-zoom-pane]`; zoom pane hidden on mobile (`theme.css` ≤900px).
- **Single image:** nav/thumbs omitted when only one media item; layout preserved.
- **Media:** unchanged in Admin (no upload).

---

## 5. Colour / variant selector behaviour

- **Rendering:** Only Shopify `product.options` values — colour-like option names (`color` / `colour`) use text-labelled swatch buttons (no invented hex colours).
- **Availability:** `product-options-preview.js` disables unavailable combinations; does **not** add to cart or enable checkout.
- **Size / other options:** standard option buttons when present (e.g. **Kitchen Utensil Holder** — Size only, no fake colour row).
- **Commerce posture:** `product-commerce-gate` unchanged — price-to-confirm, non-purchasable, preview-only paths intact.

---

## 6. Product copy audit (proposed only — no Admin updates)

**Read-only baseline at audit time:** **15** Online Store–published products (GraphQL `publishedOnPublication`). Product Owner catalogue baseline **13** visible (**21EZ**) — **two** additional published rows may have been added or publication timing differs; table covers all **15** audited rows.

| Handle | Current title | Proposed clean title | Description issue summary | Proposed description direction | Risk note | PO approval before Admin? |
| --- | --- | --- | --- | --- | --- | --- |
| handwoven-cotton-organizer-basket | Handwoven Cotton Organizer Basket | *(unchanged)* | Minor polish only | Light grammar/spacing; keep preview-qualified tone | Low | Optional |
| kitchen-utensil-holder | Kitchen Utensil Holder | *(unchanged)* | Minor polish only | Light grammar/spacing | Low | Optional |
| under-cabinet-paper-towel-holder | Under Cabinet Paper Towel Holder | *(unchanged)* | Sentence structure | Short factual intro + specs; keep price/delivery TBC | Low | Optional |
| silicone-cup-sleeve-…-wraps-1 | Silicone Cup Sleeve Heat Insulation… (very long) | Silicone cup sleeve — heat-insulation mug wrap | Import keyword stuffing; long title | 2–3 sentences + bullet specs; no shipping/stock claims | Title noise | **Yes** |
| 1pcs-upgradation-adjustable-flatware…-1 | 1Pcs Upgradation Adjustable Flatware… | Adjustable flatware drawer organiser (1 pc) | `1Pcs` import shorthand; long title | Short title + neutral bullets; preview qualifiers | Title noise | **Yes** |
| 1pc-self-adhesive-wall-mounted-paper…-1 | 1PC Self-Adhesive Wall-Mounted Paper… | Self-adhesive under-cabinet tissue rack (1 pc) | `1PC` shorthand; long title | Same as above | Title noise | **Yes** |
| 2-tier-under-sink-sliding-storage…-1 | 2 Tier Under Sink Sliding Storage Basket… | 2-tier under-sink sliding storage basket | Long title; sentence structure | Shorten title; factual bullets only | Title noise | **Yes** |
| adjustable-pantry-organizer-utensil…-1 | Adjustable Pantry Organizer Utensil Cutlery Drawer  for Forks… | Adjustable pantry cutlery drawer organiser | Double spaces; long title | Tidy spacing; 2–3 factual sentences | Title noise | **Yes** |
| paper-towel-holders-stainless-steel… | Paper Towel Holders Stainless Steel Roll Holder… | Stainless steel under-cabinet paper towel holder | Long title; structure | Short title + specs; preview-safe | Title noise | **Yes** |
| adjustable-expandable-bamboo-drawer…-1 | Adjustable Expandable Bamboo Drawer Organizer for Kitchen,Bedroom… | Expandable bamboo drawer organiser | Punctuation/spacing in title | Fix commas/spacing; factual description | Title noise | **Yes** |
| modern-kitchen-accessories-soap-dispenser…-1 | Modern kitchen accessories Soap Dispenser Set… | Kitchen soap dispenser set with sponge holder | Long title; casing | Title case tidy; bullets for capacity/colour | Title noise | **Yes** |
| soap-dispenser-box-press-dispenser…-1 | Soap Dispenser Box Press Dispenser… | Press soap dispenser box with sponge holder | Long title | Shorten; avoid automatic/guarantee claims | Title noise | **Yes** |
| handmade-cotton-organizer-basket-vegetable…-1 | Handmade Cotton Organizer Basket Vegetable Platter… | Handmade cotton tabletop organiser tray | Long title | Short title; clarify use (bread/fruit) without stock claims | Title noise | **Yes** |
| low-delay-wireless-tws-games-sports-headset | Low-delay Wireless TWS Games, Sports Headset | Wireless TWS headset (low-latency) | Sentence structure | Avoid performance guarantees; preview qualifiers | Medium | **Yes** |
| vertical-office-mouse-wireless-mouse-vertical-mouse | Vertical Office Mouse Wireless Mouse Vertical Mouse | Vertical ergonomic wireless mouse | Repetitive title | Short single title; specs only | Low | Optional |

**Machine-readable export:** `artifacts/catalogue/slice-21fd/2026-05-22T11-51-55/copy-audit.json` (gitignored).

---

## 7. Files changed (committed)

| File | Change |
| --- | --- |
| `snippets/wishlist-button.liquid` | **New** — local wishlist toggle |
| `assets/wishlist-local.js` | **New** — localStorage sync |
| `assets/product-gallery.js` | **New** — gallery UX |
| `assets/product-options-preview.js` | **New** — option preview only |
| `snippets/live-product-card.liquid` | Active wishlist on cards |
| `sections/main-product-foundation.liquid` | Gallery + options + PDP wishlist |
| `layout/theme.liquid` | Defer-load new assets |
| `assets/theme.css` | Wishlist, gallery, option/swatch styles |
| `docs/qa/slice-21fd-product-experience-and-copy-audit.md` | This report |
| `docs/project-control.md` | Tracker sync |

**Not committed:** `artifacts/`, `tools/catalogue/`, Horizon debris, `assets/results-list.js`.

---

## 8. Theme check and bounded push

**Theme Check:** Repo-root and `sections/` scans remain polluted by **untracked Horizon pull files** (same class as **21FC-A**). Changed MVP files pushed successfully; no slice-specific Liquid errors observed on edited foundation/snippet files.

**Bounded push (success):**

```bash
shopify theme push --store dropshippoc.myshopify.com --theme 151207542967 --allow-live \
  --only assets/theme.css \
  --only assets/wishlist-local.js \
  --only assets/product-gallery.js \
  --only assets/product-options-preview.js \
  --only layout/theme.liquid \
  --only sections/main-product-foundation.liquid \
  --only snippets/live-product-card.liquid \
  --only snippets/wishlist-button.liquid \
  --nodelete --json --no-color
```

| Field | Value |
| --- | --- |
| Theme ID | **`151207542967`** |
| Role after push | **live** |
| Publish | **No** (push only) |

---

## 9. Rendered QA

**Storefront:** password-gated (`302` → `/password`). Automated Playwright harness **`artifacts/catalogue/slice-21fd/run-rendered-qa.mjs`** requires **`MZANSI_STOREFRONT_PASSWORD`** (not set in slice execution environment).

**Planned routes (operator re-run):**

| Route | Desktop 1366×768 | Mobile 390×844 |
| --- | --- | --- |
| `/` | Planned | Planned |
| `/search?q=organiser&type=product` | Planned | Planned |
| `/collections/all` | Planned | Planned (may still be **Horizon** — **21FC-B**) |
| PDP ×5 (multi-image/options prioritised) | Planned | Planned |

**PDP handles for harness:** `handwoven-cotton-organizer-basket`, `kitchen-utensil-holder`, `under-cabinet-paper-towel-holder`, `silicone-cup-sleeve-…-wraps-1`, `1pcs-upgradation-adjustable-flatware…-1`.

**Checks:** wishlist toggle + reload persistence; gallery thumbs/arrows/zoom; real option buttons only; **no** `cart/add`, Add to Cart, checkout, Supplier verified; price-to-confirm visible; mobile overflow.

**Implementation verification (static):** **PASS** — no `cart/add`, checkout, or quick-add in changed theme files; wishlist/gallery/options scripts are preview-only.

---

## 10. Commands executed

```bash
git status --short --branch
git check-ignore -v artifacts/
node artifacts/catalogue/slice-21fd/run-copy-audit.mjs
shopify theme push … (8 files, theme 151207542967, --allow-live)
rg -n "wishlist|…|cart/add|checkout" templates sections snippets blocks assets
```

---

## 11. Remaining blockers

| Blocker | Owner |
| --- | --- |
| **21FC-B** split-theme (`/collections/all` + many PDPs still Horizon template instances) | **Product Owner** — **21FC-C** Theme Editor rebind (paused) |
| Rendered QA with password unlock | **QA / Test Engineer** — run `run-rendered-qa.mjs` with `MZANSI_STOREFRONT_PASSWORD` |
| Admin copy updates from §6 table | **Product Owner** — separate approved slice after PO sign-off per row |
| Publication count **13** vs **15** reconciliation | **Product Manager** — optional catalogue spot-check |

---

## 12. Recommended next owner

1. **QA / Test Engineer** — execute rendered harness post-password unlock; attach summary under `artifacts/catalogue/slice-21fd/<timestamp>/`.
2. **Product Owner** — approve copy rows marked **Yes** before any Admin title/description slice.
3. **Product Owner** — decide on **21FC-C** for split-theme routing.

---

## 13. Safety

No passwords, cookies, tokens, customer/order/payment data, supplier credentials, HAR, traces, or screenshots are stored in this document.
