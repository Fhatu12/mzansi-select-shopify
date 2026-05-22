# Slice 21FC-A — Liquid include hotfix

**Document type:** Bounded Liquid hotfix + live validation  
**Prepared:** 2026-05-22  
**Owner:** Senior Full-Stack Software Architect / QA  
**Slice:** **21FC-A**  
**Store:** `dropshippoc.myshopify.com`  
**Live theme:** `151207542967` / Mzansi Select MVP Preview

**Product Owner approval:** Remove invalid `{% include %}` from `snippets/live-product-card.liquid`; preserve catalogue-only commerce gate; bounded push only.

**Upstream:** **Slice 21FC** (`128c141`) — publish **PASS**; live QA **FAIL** (split-theme on `/collections/all`).

**Evidence (local; not committed):** `artifacts/catalogue/slice-21fc-a/2026-05-22T10-39-12/summary.json`

---

## 1. Executive verdict

**PASS WITH NOTES**

The **`live-product-card`** Liquid runtime error is **fixed** on MVP routes that render that snippet (homepage product rails, search results). Inline tag-gate logic preserves **price-to-confirm**, **View product** CTAs, and **no** cart/checkout affordances.

**Note:** `/collections/all` still serves **Horizon** **`148914077879`** (pre-existing **21FC** split-theme issue). That route does **not** use the pushed snippet; collection failures in QA are **not** a regression from this hotfix.

---

## 2. Root cause

**Error observed:**

```text
Liquid error (snippets/live-product-card line 7): include usage is not allowed in this context
```

**Cause:** `snippets/live-product-card.liquid` called `{% include 'product-commerce-gate' %}` while the snippet is loaded via `{% render 'live-product-card' %}` from `main-collection-foundation`, `main-search-foundation`, `featured-product-grid`, and `main-product-foundation`. Shopify does **not** allow `{% include %}` inside snippets invoked with `{% render %}` (isolated scope).

**Not changed in this slice:** `sections/main-product-foundation.liquid` still uses `{% include 'product-commerce-gate' %}` at section level (allowed in sections; sample MVP PDPs validated **PASS**). `snippets/price.liquid` (Horizon card pipeline) unchanged — not used on MVP foundation search/collection cards.

---

## 3. Pre-check

| Check | Result |
| --- | --- |
| Branch | `master` @ **`128c141`** |
| `artifacts/` | **gitignored** ✓ |
| `tools/catalogue/` | Untracked — **not** committed ✓ |
| Live theme ID | **`151207542967`** ✓ |
| Admin / checkout / import / publish | **Not** performed ✓ |

---

## 4. Audit (`rg`)

| File | Pattern | Action |
| --- | --- | --- |
| `snippets/live-product-card.liquid` | `{% include 'product-commerce-gate' %}` line 7 | **Fixed** — inline tag gate |
| `sections/main-product-foundation.liquid` | `{% include 'product-commerce-gate' %}` | **Unchanged** — section context; PDP QA **PASS** |
| `snippets/price.liquid` | `{% include 'product-commerce-gate' %}` | **Unchanged** — Horizon snippet; not on MVP card surfaces |

---

## 5. Minimal fix

**File changed:** `snippets/live-product-card.liquid`

Replaced `{% include 'product-commerce-gate' %}` with inline normalised tag checks:

- `non-purchasable`
- `price-to-confirm`
- `preview-only`

Sets `card_commerce_blocked` when any gate tag is present (same rule as `product-commerce-gate.liquid`). Preserves card layout, placeholder pricing, **View product** link, disabled wishlist, and **no** Add to Cart / quick-add / cart forms.

---

## 6. Theme check and push

**`shopify theme check --path . --fail-level error`:** **FAIL** at repo root — untracked Horizon pull debris (`sections/`, `templates/password.json`, etc.) pollutes the scan (**1724** errors). **Not** introduced by this hotfix.

**Bounded push (success):**

```bash
shopify theme push --store dropshippoc.myshopify.com --theme 151207542967 --allow-live \
  --only snippets/live-product-card.liquid --nodelete
```

(`--strict` omitted — same class as **21FA-B** / **21FC** remediation; strict fails on unrelated untracked Horizon files.)

**Files pushed:** `snippets/live-product-card.liquid` only  
**Theme ID:** **`151207542967`** (live)

---

## 7. Post-push live validation

**Harness:** `artifacts/catalogue/slice-21fc-a/run-hotfix-validation.mjs`  
**Unlock:** manual storefront password

| Route | Viewport | Liquid error (live-product-card class) | Commerce gate | Live cards |
| --- | --- | --- | --- | --- |
| `/` | Desktop **1366×768** | **None** | **PASS** — **0** cart/quick-add/ATC | **6** `.product-card--live` |
| `/search?q=organiser&type=product` | Desktop + mobile | **None** | **PASS** | **6** + browse CTAs |
| `/` | Mobile **390×844** | Harness flagged generic `Liquid error` text once; cards **6** when unlocked | **PASS** commerce counts | **6** |
| `/collections/all` | Desktop + mobile | **FAIL** — still **Horizon** theme; **0** live cards | **FAIL** on desktop/mobile (Horizon quick-add/cart DOM) | **0** |
| PDP × **3** sample | Desktop | **2/3 PASS**; **1** FAIL (likely Horizon-routed PDP per **21FC**) | **PASS** on MVP PDPs sampled | — |

**Commerce-gate confirmation (MVP surfaces using `live-product-card`):** **PASS** — no Add to Cart, no quick-add, no cart/add forms, no dynamic checkout; **Price to be confirmed** / browse-only posture on cards.

**Mobile overflow:** **PASS** on search and homepage (**375/375** where MVP renders).

---

## 8. Rollback

Republish previous snippet from git:

```bash
git show HEAD~1:snippets/live-product-card.liquid > /tmp/live-product-card.liquid
shopify theme push --store dropshippoc.myshopify.com --theme 151207542967 --allow-live \
  --only snippets/live-product-card.liquid --nodelete
```

Or revert commit and push again. **Do not** rollback unless PO approves.

---

## 9. Remaining launch blockers

| Blocker | Owner |
| --- | --- |
| **21FC** split-theme — `/collections/all` on Horizon | **Product Owner** / **DevOps** |
| Checkout / payment / customer-flow | **Blocked** — **Product Owner** |
| Product readiness (image rights, supplier proof) | **Product Manager** |

---

## 10. Recommended next owner

**DevOps / Platform Engineer** — **21FC-B** split-theme remediation so `/collections/all` uses live MVP **`151207542967`** and picks up this hotfix end-to-end.

**QA** — re-run full **13**-SKU live acceptance after **21FC-B**.
