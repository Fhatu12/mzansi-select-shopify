# Slice 21FC-B — split-theme routing investigation and fix

**Document type:** Bounded split-theme investigation + remediation attempt + live QA  
**Prepared:** 2026-05-22  
**Owner:** DevOps / Platform Engineer + QA / Test Engineer  
**Slice:** **21FC-B**  
**Store:** `dropshippoc.myshopify.com`  
**Live theme (CLI):** `151207542967` / Mzansi Select MVP Preview  
**Previous live theme:** `148914077879` / Horizon (unpublished)

**Upstream:** **Slice 21FC** (`128c141`) publish **PASS** / live QA **FAIL**; **Slice 21FC-A** (`4a0e941`) `live-product-card` include hotfix pushed.

**Evidence (local; not committed):**

- Cache-bust: `artifacts/catalogue/slice-21fc-b/2026-05-22T10-43-56/cache-bust.json` (approx.)
- Final QA: `artifacts/catalogue/slice-21fc-b/2026-05-22T11-05-55/summary.json`
- Admin template audit: `artifacts/catalogue/slice-21fc-b/*/admin-template-audit.json`
- Live theme pull (artifacts only): `artifacts/catalogue/slice-21fc-b/live-theme-pull/`, `live-templates/templates/`

---

## 1. Executive verdict

**FAIL** — split-theme routing **persists** after investigation and bounded theme remediation. **No repo theme files changed** (theme push only). **Stopped before Shopify Admin product/collection mutation.**

**CLI live theme:** **`151207542967`** ✓ — Horizon **`148914077879`** is **unpublished** ✓  
**Storefront reality:** `/collections/all` and **most PDPs** still render **Horizon** `148914077879` per `window.Shopify.theme.id` and Horizon section IDs (`19626890985655`, `19626891346103`). Homepage and search render MVP (`151207542967`).

---

## 2. 21FC failure summary (baseline)

| Symptom | **21FC** observation |
| --- | --- |
| Split theme | Homepage/search **MVP**; `/collections/all` **Horizon** |
| Catalogue count | **17** on `/collections/all` (Admin **13**) |
| Hidden SKUs | **Four** **21EZ** removals visible on collection |
| Mobile collection commerce | **17** cart forms + **34** quick-add (Horizon DOM) |
| PDP split | **3** PDPs reported on Horizon; routing inconsistent by product |

---

## 3. Pre-check

| Check | Result |
| --- | --- |
| **21FC-A** complete | **Yes** — commit **`4a0e941`**; `live-product-card` pushed to live **`151207542967`** |
| Branch | `master` @ **`9ca7806`** (docs sync) / hotfix **`4a0e941`** |
| `artifacts/` | **gitignored** ✓ |
| `tools/catalogue/` | Untracked — **not** committed ✓ |
| Rollback / republish-only / Admin product mutation | **Not** performed (except documented publish refresh) ✓ |

---

## 4. Live theme state verification

```bash
shopify theme list --store dropshippoc.myshopify.com
```

| Theme ID | Name | Role |
| ---: | --- | --- |
| **151207542967** | Mzansi Select MVP Preview | **live** |
| **148914077879** | Horizon | **unpublished** |

**Conclusion:** Shopify CLI roles are correct; the defect is **storefront route → theme instance binding**, not wrong theme marked live.

---

## 5. Cache-busted live route verification

**Method:** fresh browser context, cleared cookies, manual password unlock, URLs with `?qa=21fc-b-<timestamp>&_cb=<timestamp>`.

| Route | Theme ID | MVP markers | Horizon markers | Product links |
| --- | ---: | --- | --- | ---: |
| `/` | **151207542967** | Yes | No | **6** |
| `/search?q=organiser&type=product` | **151207542967** | Yes | No | **6** |
| `/collections/all` | **148914077879** | No | Yes | **17** |
| PDP `1pc-self-adhesive-…` | **148914077879** | No | Yes | — |
| PDP `handwoven-cotton-organizer-basket` | **148914077879** | No | Yes | — |
| PDP `modern-kitchen-accessories-soap-dispenser-set-…` | **151207542967** | Yes | No | — |

**Cache-bust verdict:** **FAIL** — split-theme is **not** explained by browser/CDN cache alone.

**Contrast:** **21FB** with `?preview_theme_id=151207542967` showed **13** products on `/collections/all` — MVP files are correct; **live role** does not apply the same binding as preview for the built-in **All products** route.

---

## 6. Admin read-only audit

| Check | Result |
| --- | --- |
| Visible products | **13** |
| Commerce gate tags | **13/13** |
| `collectionByHandle(handle: "all")` | **null** (built-in All products collection not exposed as a normal collection handle) |
| Named collections (`kitchen-storage`, etc.) | **templateSuffix** empty string or **null** — no alternate suffix forcing Horizon JSON |
| Split PDP `templateSuffix` | Mostly **null**; **`handwoven-cotton-organizer-basket`** = **empty string** (`""`) — only one of **13** |
| **Admin mutation required for suffix-only fix?** | **No** — suffix pattern does **not** explain Horizon PDPs with **null** suffix |

**Stopped before:** `productUpdate` / `collectionUpdate` template-suffix mutations (not approved in this slice).

---

## 7. Theme file audit

**Live theme `151207542967` (pulled to artifacts only):**

| File | On live theme | Expected |
| --- | --- | --- |
| `templates/collection.json` | **`main-collection-foundation`** | ✓ Matches repo |
| `templates/product.json` | **`main-product-foundation`** | ✓ Matches repo |
| `templates/search.json` | **`main-search-foundation`** | ✓ Matches repo |
| `sections/main-collection-foundation.liquid` | Present | ✓ |
| `sections/main-collection.liquid` (Horizon) | **Absent** on live MVP theme | ✓ |

**Repo tracked templates:** eight JSON templates + foundation sections — no `collection.*.json` alternates.

**Root cause (theme files):** Live MVP theme **already contains** correct templates. Split rendering is **not** caused by missing `collection.json` on the live theme asset tree.

**Root cause (platform binding):** Storefront still serves **Horizon template instances** (section IDs `template--19626890985655__*`, `template--19626891346103__*`) for `/collections/all` and many PDPs while MVP instances (`template--20277349122231__*`, etc.) serve `/` and `/search` only.

---

## 8. Remediation attempted (bounded theme push — no Admin mutation)

**Pushed to live `151207542967` (`--allow-live`, `--nodelete`):**

- `templates/collection.json`
- `templates/product.json`
- `templates/search.json`
- `templates/index.json`
- `templates/404.json`
- `layout/theme.liquid`
- `sections/main-collection-foundation.liquid`
- `sections/main-search-foundation.liquid`
- `sections/main-product-foundation.liquid`
- `snippets/live-product-card.liquid`

**Then:**

```bash
shopify theme publish --store dropshippoc.myshopify.com --theme 151207542967 --force
```

**Result:** **No change** to split-theme behaviour on cache-bust re-check.

**Repo files changed in this slice:** **none** (remote-only push of existing tracked assets).

---

## 9. Final live QA (post-remediation)

| Route | Desktop theme | Pass? | Notes |
| --- | ---: | --- | --- |
| `/` | **151207542967** | **PASS** | **6** cards; commerce gate OK |
| `/search?q=organiser&type=product` | **151207542967** | **PASS** | **6** matches |
| `/collections/all` | **148914077879** | **FAIL** | **17** links; **four** hidden SKUs; desktop **17** cart + **17** quick-add |
| `/collections/all` mobile | **148914077879** | **FAIL** | Liquid error text present; **17** links |

**PDPs (13 handles, desktop):** **4/13 PASS** on MVP theme; **9/13 FAIL** (Horizon theme ID and/or Liquid errors on Horizon PDP pipeline).

**Liquid include:** **21FC-A** fix applies only where **`live-product-card`** renders (MVP routes). Collection remains on Horizon — separate failure mode.

---

## 10. Root cause statement

After publishing MVP theme **`151207542967`**, Shopify’s storefront **did not rebind** the built-in **`/collections/all`** route (and a majority of product template instances) to the new live theme’s JSON templates. Those routes continue to resolve **unpublished Horizon** theme **`148914077879`** template instances created while Horizon was live.

This is **outside** what a bounded `theme publish` + targeted `theme push` corrects when:

- CLI reports MVP as **live**
- Live theme files on disk are already MVP (`main-collection-foundation`, etc.)
- `preview_theme_id=151207542967` previously showed correct **13**-product MVP behaviour (**21FB**)

---

## 11. Required fix path (not executed — needs PO approval)

| Option | Type | Notes |
| --- | --- | --- |
| **A. Theme Editor rebind** | Shopify Admin (theme customisation) | Open **live** MVP theme → **Collections** → **All products** default template → confirm **Default collection** / foundation section → **Save**. Repeat for product templates showing Horizon. **Not** product price/tag mutation. |
| **B. Shopify Support** | Platform | Report split-theme after publish; request template-instance rebind for shop. |
| **C. Admin GraphQL `productUpdate`** | **Blocked in 21FC-B** | Clear **`templateSuffix: ""`** on `handwoven-cotton-organizer-basket` only — insufficient alone (other Horizon PDPs have **null** suffix). |
| **D. Brief Horizon republish then MVP** | Theme publish | **Not** run — treated as rollback risk; needs explicit PO approval if Option A fails. |

**This slice stops at Option A documentation** per approval boundary.

---

## 12. Rollback note (not executed)

Republishing Horizon **`148914077879`** would restore a **single** Horizon storefront but **reverses 21FC** MVP publish intent. Documented only:

```bash
shopify theme publish --store dropshippoc.myshopify.com --theme 148914077879 --force
```

---

## 13. Remaining launch blockers

| Blocker | Owner |
| --- | --- |
| Split-theme routing on `/collections/all` + majority of PDPs | **Product Owner** + **DevOps** (Theme Editor rebind or **21FC-C**) |
| **21FC** / **21FC-B** live acceptance | **QA** after routing fix |
| Checkout / payment / customer-flow | **Blocked** — **Product Owner** |
| Product readiness (image rights, supplier proof) | **Product Manager** |

---

## 14. Commands executed

```bash
git status --short --branch
git check-ignore -v artifacts/
shopify theme list --store dropshippoc.myshopify.com
node artifacts/catalogue/slice-21fc-b/run-cache-bust-verify.mjs
node artifacts/catalogue/slice-21fc-b/run-admin-template-audit.mjs
shopify theme pull --theme 151207542967 --only templates/... (artifacts only)
shopify theme push --theme 151207542967 --allow-live --only <10 files> --nodelete
shopify theme publish --theme 151207542967 --force
node artifacts/catalogue/slice-21fc-b/run-final-live-qa.mjs
```

---

## 15. Recommended next owner

**Product Owner** — approve **21FC-C**: operator Theme Editor rebind on live MVP **`151207542967`** (Option A), or explicit approval for platform/support escalation. **QA** re-runs full **13**-SKU live acceptance after routing is consistent.
