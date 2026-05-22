# Slice 21ET — homepage placeholder source audit (read-only)

**Document type:** Read-only theme/source audit  
**Prepared:** 2026-05-22  
**Owner:** QA / Product Manager (audit)  
**Slice:** **21ET**  
**Store:** `dropshippoc.myshopify.com`  
**Live theme:** `148914077879` / Horizon  
**Preview theme:** `151207542967` / Mzansi Select MVP Preview  

**Problem:** After catalogue visibility cleanup (**21EO** / **21EQ** / **21ES**), the homepage still shows eight north-star-style items with decorative images and demo titles under **Selected Picks** and **Kitchen & Storage**.

**Verdict:** **Root cause identified in local repo** — these are **not** Shopify products. They are **`static-product-card`** fallbacks inside **`sections/featured-product-grid.liquid`**, triggered because configured **`all_products[handle]`** lookups no longer resolve on the storefront after unpublish.

**No live theme pull required** — all eight strings and section wiring exist in the committed repo.

---

## 1. Repo pre-check

| Check | Result |
| --- | --- |
| Branch | `master` |
| `artifacts/` | **gitignored** ✓ |
| `tools/catalogue/` | Untracked — **not** committed ✓ |
| Shopify Admin mutation | **None** ✓ |
| Live theme pull | **Not** performed (local repo contains full source) |

---

## 2. Found / not found (each placeholder item)

| Item | Found in repo? | Source type | Real Shopify product? |
| --- | --- | --- | --- |
| Premium Over-Ear Headphones | **Yes** | Hardcoded `static-product-card` fallback | **No** |
| Bamboo Lid Storage Container Set | **Yes** | Hardcoded `static-product-card` fallback | **No** |
| Smart Watch – Black Edition | **Yes** | Hardcoded `static-product-card` fallback | **No** |
| Touch Lamp – Warm LED Dimmable | **Yes** | Hardcoded `static-product-card` fallback | **No** |
| Stainless Steel French Press | **Yes** | Hardcoded `static-product-card` fallback | **No** |
| Insulated Vacuum Flask 500ml | **Yes** | Hardcoded `static-product-card` fallback | **No** |
| Fabric Storage Cube Organiser | **Yes** | Hardcoded `static-product-card` fallback | **No** |
| Indoor Plant Pot Set – Terracotta | **Yes** | Hardcoded `static-product-card` fallback | **No** |

**Section labels “Selected Picks” / “Kitchen & Storage”:** **Yes** — `templates/index.json` section settings (`section_title` + `section_accent`), not locale files.

---

## 3. Exact source locations

### 3.1 Homepage template (section order and IDs)

**File:** `templates/index.json`

| JSON section key | Section type | Anchor ID | Display title | Preset |
| --- | --- | --- | --- | --- |
| `best_sellers` | `featured-product-grid` | `best-sellers` | **Selected** + **Picks** | `best_sellers` |
| `kitchen_storage` | `featured-product-grid` | `kitchen-storage` | **Kitchen &** + **Storage** | `kitchen_storage` |

**Homepage order:** `hero_collage` → `category_strip` → **`best_sellers`** → `promo_banner` → `new_arrivals` → **`kitchen_storage`**

### 3.2 Section logic (root cause)

**File:** `sections/featured-product-grid.liquid`

For each of four fixed handles per preset:

1. `{% assign slot_product = all_products[handle] %}`
2. If non-blank → `{% render 'live-product-card', product: slot_product %}`
3. **Else** → `{% render 'static-product-card', ... %}` with hardcoded `product_name`, prices, stars, and theme asset JPEG paths

**Configured handle lists (unchanged since Slice 14D / 13I era):**

| Preset | Handles tried (in order) |
| --- | --- |
| `best_sellers` (**Selected Picks**) | `cable-tidies-set`, `acrylic-tablet-phone-stand`, `sink-strainer-stainless-steel`, `compact-organiser-basket` |
| `kitchen_storage` | `cable-tidies-set`, `sink-strainer-stainless-steel`, `compact-organiser-basket`, `mini-plastic-divider-basket` |

**Post–21ES storefront state:** All eight handles are either **unpublished from Online Store** (**21EQ** / **21ES**) or **DRAFT** (`acrylic-tablet-phone-stand`). On the storefront, `all_products[handle]` does **not** resolve → **every slot falls back to static placeholders** → user sees the eight demo names again.

This is **expected behaviour of the current Liquid contract**, not a separate CMS or `settings_data.json` entry.

### 3.3 Static card markup and images

| File | Role |
| --- | --- |
| `snippets/static-product-card.liquid` | Renders `.product-card--static`, decorative image, disabled **Preview only** button |
| `snippets/decorative-image.liquid` | Theme asset images with SVG fallback |
| `assets/headphones-premium.jpg`, `bamboo-storage-containers.jpg`, `smart-watch-black-edition.jpg`, `touch-lamp-warm-led.jpg`, `stainless-french-press.jpg`, `insulated-vacuum-flask.jpg`, `fabric-storage-cube.jpg`, `indoor-plant-pot.jpg` | Decorative JPEGs for fallback slots |

### 3.4 Not the source

| Location | Result |
| --- | --- |
| `config/settings_data.json` | **No** placeholder product names |
| `locales/*.json` | **No** matches |
| Shopify Admin products for demo titles | **No** — names only exist in theme Liquid |

### 3.5 Legacy reference only (not storefront)

`mzansi-select-theme.html`, `mzansi-select-mobile.html` — north-star HTML prototypes; **not** served by Shopify unless separately deployed.

---

## 4. Live vs preview vs repo

| Source | Assessment |
| --- | --- |
| **Local repo** | **Authoritative** for this audit — contains full `featured-product-grid.liquid` + `templates/index.json` |
| **Preview theme 151207542967** | Expected to match repo **if** last theme push included **14D** / grid parity (per programme docs) |
| **Live theme 148914077879** | Likely **same section pattern** if Horizon is the deployed MVP theme branch; **confirm with `shopify theme pull` diff before any push** — not required for this read-only audit |

**Catalogue cleanup did not change theme files** — only Admin publication. That is why placeholders **reappeared** after unpublish.

---

## 5. Recommended fix paths

### Option A — Update handle lists to current visible catalogue (**recommended minimum**)

Point each slot at handles from the **17** Online Store–visible products (**21ES**), e.g. drawer organiser imports and other approved visible rows.

| Pros | Cons |
| --- | --- |
| Smallest Liquid diff | Manual handle lists drift when catalogue changes again |
| Keeps section structure | Must pick four handles per rail that are **published** |

**Risk:** Low, if handles are read from Admin list and revalidated after each visibility slice.

### Option B — Collection-driven grid (better long-term)

Replace fixed handle loops with `collections['kitchen-storage'].products` (or a dedicated **homepage-featured** collection) and cap at four, rendering only `live-product-card`.

| Pros | Cons |
| --- | --- |
| Tracks Admin catalogue automatically | Needs collection membership hygiene |
| No static demo names on storefront | More theme work + QA |

**Risk:** Medium — empty collection must render honest empty state, not static fallbacks.

### Option C — Hide section until launch-ready

Remove sections from `templates/index.json` order or gate with a theme setting until a PO-approved product set exists.

| Pros | Cons |
| --- | --- |
| Fastest honest UX | Homepage loses two major rails |

**Risk:** Low for preview; may reduce demo richness.

### Option D — Remove static fallback branch (strict)

If `all_products[handle]` is blank, render **nothing** or a single honest “No preview products in this rail” message — **never** `static-product-card`.

| Pros | Cons |
| --- | --- |
| Prevents demo name regression forever | Rails may look sparse when handles unpublished |

**Risk:** Low — aligns with post-**21EO** “no fake catalogue” direction.

**Programme recommendation:** **D + B** (drop static fallbacks, move to collection-driven visible products), or **A** as a short-term patch using the **17** visible handles.

---

## 6. Slot-by-slot trigger map (current)

| Section | Slot | Handle configured | Visible on OS after 21ES? | Fallback static name |
| --- | ---: | --- | --- | --- |
| Selected Picks | 1 | `cable-tidies-set` | **No** (21ES) | Premium Over-Ear Headphones |
| Selected Picks | 2 | `acrylic-tablet-phone-stand` | **No** (DRAFT) | Bamboo Lid Storage Container Set |
| Selected Picks | 3 | `sink-strainer-stainless-steel` | **No** (21EQ) | Smart Watch – Black Edition |
| Selected Picks | 4 | `compact-organiser-basket` | **No** (21EQ) | Touch Lamp – Warm LED Dimmable |
| Kitchen & Storage | 1 | `cable-tidies-set` | **No** (21ES) | Stainless Steel French Press |
| Kitchen & Storage | 2 | `sink-strainer-stainless-steel` | **No** (21EQ) | Insulated Vacuum Flask 500ml |
| Kitchen & Storage | 3 | `compact-organiser-basket` | **No** (21EQ) | Fabric Storage Cube Organiser |
| Kitchen & Storage | 4 | `mini-plastic-divider-basket` | **No** (21EQ) | Indoor Plant Pot Set – Terracotta |

---

## 7. Next action

**Product Owner / Senior architect** — approve fix option (**A** short-term vs **B+D** structural). **Theme slice** (not Admin): update `sections/featured-product-grid.liquid` and optionally `templates/index.json`; bounded push to preview **`151207542967`** first; live **`148914077879`** only after PO approval.

**No Admin or catalogue visibility change required** for this fix.

---

## 8. Strict confirmations

- **Read-only** — no Shopify or theme mutations in **21ET**.
- **No** secrets or customer data in this doc.

---

## Next owner

**Senior Full-Stack Software Architect** — implement approved homepage rail fix on preview theme; **QA** — verify rails show only **live-product-card** rows from visible catalogue (no static demo names).
