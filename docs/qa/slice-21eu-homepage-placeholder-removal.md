# Slice 21EU — homepage placeholder removal and collection-driven rail fix

**Document type:** Theme fix + rendered QA  
**Prepared:** 2026-05-22  
**Owner:** Senior Full-Stack Software Architect / QA  
**Slice:** **21EU**  
**Store:** `dropshippoc.myshopify.com`  
**Preview theme:** `151207542967` / Mzansi Select MVP Preview / **unpublished**  
**Live theme:** `148914077879` / Horizon — **not** pushed or published

**Upstream:**

- **Slice 21ET** — homepage placeholder audit (`b910660`, read-only)
- **Slice 21ES** — **17** Online Store visible products

**Evidence (local; not committed):** `artifacts/catalogue/slice-21eu/2026-05-22T07-25-02/`

---

## 1. Executive verdict

**PASS WITH NOTES**

Homepage **Selected Picks** and **Kitchen & Storage** no longer render the eight north-star demo names or **`static-product-card`** fallbacks. Rails use **`collections.all`** and **`collections['kitchen-storage']`** with **`live-product-card`** only. Empty collections omit the entire section (no blank or fake cards).

**Notes:** harness **`rail-images-load`** reported **3** broken images on homepage before lazy-load completed (timing false positive; screenshots show real product heroes). **`collection-product-cards`** count used an overly broad selector on **`/collections/all`** (**68** links site-wide) — not a catalogue regression. **Add to Cart** / checkout commerce gating remains **unresolved** (out of scope).

---

## 2. Pre-check

| Check | Result |
| --- | --- |
| Branch | `master` @ **21ET** (`b910660`) |
| `artifacts/` | **gitignored** ✓ |
| `tools/catalogue/` | Untracked — **not** committed ✓ |
| Shopify Admin mutation | **Not** performed ✓ |
| Live theme push / publish | **Not** performed ✓ |
| Checkout / payment / customer-flow enablement | **Not** performed ✓ |
| Product import/sync, app install, media upload, hard delete | **Not** performed ✓ |
| Price, inventory, supplier verified, claims | **Not** changed ✓ |

---

## 3. Root cause

**`sections/featured-product-grid.liquid`** iterated fixed handles via **`all_products[handle]`**. After **21EO** / **21EQ** / **21ES**, all configured handles were unpublished on **Online Store**, so every slot fell through to **`{% render 'static-product-card' %}`** with hardcoded demo titles and decorative JPEG assets.

---

## 4. Files changed

| File | Change |
| --- | --- |
| `sections/featured-product-grid.liquid` | Removed handle loop + **`static-product-card`** branch; collection-driven **`live-product-card`**; hide section when **`products_count == 0`** |
| `docs/qa/slice-21eu-homepage-placeholder-removal.md` | This report |
| `docs/project-control.md` | Tracker sync |

**Unchanged (by design):**

- `snippets/static-product-card.liquid` — retained (orphaned on homepage rails; still referenced in cart demo lines per **21CN**)
- `templates/index.json` — section settings unchanged
- `assets/theme.css` — existing **`.products-grid`** responsive rules sufficient for sparse rails

---

## 5. Fallback behaviour removed

| Prior behaviour | Post-21EU |
| --- | --- |
| `all_products[handle]` per preset slot | **Removed** |
| `{% render 'static-product-card' %}` on missing handle (8 demo names) | **Removed** from product rails |
| Always render section with four slots | Section renders **only** when target collection has **≥1** visible product |
| **Selected Picks** handles: `cable-tidies-set`, `acrylic-tablet-phone-stand`, `sink-strainer-stainless-steel`, `compact-organiser-basket` | **`collections.all`**, limit **4** |
| **Kitchen & Storage** handles: `cable-tidies-set`, `sink-strainer-stainless-steel`, `compact-organiser-basket`, `mini-plastic-divider-basket` | **`collections['kitchen-storage']`**, limit **4** |

---

## 6. Preview theme push

| Field | Value |
| --- | --- |
| Theme ID | **151207542967** |
| Role | **unpublished** |
| File pushed | `sections/featured-product-grid.liquid` only |
| Command | `shopify theme push --store dropshippoc.myshopify.com --theme 151207542967 --only sections/featured-product-grid.liquid --nodelete --strict --json --no-color` |
| Live theme **148914077879** | **Unchanged** |

---

## 7. Rendered validation

**Harness:** `artifacts/catalogue/slice-21eu/run-homepage-placeholder-validation.mjs` (**local; not committed**)

**Unlock:** manual password session (**one** Chromium window)

| Route | Desktop **1366×768** | Mobile **390×844** |
| --- | --- | --- |
| `/?preview_theme_id=151207542967` | **PASS** (demo names absent; **0** `.product-card--static`; live picks + kitchen rail) | **PASS** (same; **no** root horizontal overflow) |
| `/collections/all?preview_theme_id=151207542967` | Demo names **absent**; hidden handles **absent** | Same |
| `/search?q=organiser&type=product&preview_theme_id=151207542967` | Demo names **absent**; hidden handles **absent** | Same |

**Homepage specifics (desktop):**

- All **8** demo product names: **absent**
- **`.product-card--static`**: **0**
- **#best-sellers**: live product cards with **`/products/`** links
- **#kitchen-storage**: **3** live cards (collection has three visible members; no static fallbacks)

**11 keep-hidden products:** no PDP links or handle text on tested routes.

**Commerce:** Add to Cart / checkout enablement **not** validated or changed — remains a launch blocker.

---

## 8. Static checks

| Command | Result |
| --- | --- |
| `shopify theme check --path . --fail-level error` | **0** errors (warnings only) |
| `rg` demo names in `sections/featured-product-grid.liquid` | **No** matches |
| `rg "render 'static-product-card'" sections/` | **No** matches (homepage rails only) |

---

## 9. Rollback

1. Revert **`sections/featured-product-grid.liquid`** to pre-**21EU** handle + static-fallback logic (commit before theme fix).
2. Bounded push the reverted file to preview **`151207542967`** only.
3. **Do not** publish or push to live **`148914077879`** without Product Owner approval.

---

## 10. Remaining launch blockers

- Live / preview **Add to Cart** and checkout gating (**unresolved**)
- Image rights and supplier-readiness on visible catalogue
- Commerce-gating slice before launch approval
- **`kitchen-storage`** collection membership hygiene if kitchen rail should always show four cards

---

## 11. Strict confirmations

- **No** secrets, passwords, tokens, or customer data in this doc.
- **`artifacts/`** and **`tools/catalogue/`** not committed.

---

## Next owner

**Product Owner** — accept **17**-product homepage rails; approve commerce-gating slice. **QA** — optional re-run harness with image **`load` wait** if formal **PASS** without notes is required.
