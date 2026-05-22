# Slice 21EX-B — live Horizon commerce-gate follow-up

**Document type:** Theme fix + bounded live push + rendered QA  
**Prepared:** 2026-05-22  
**Owner:** Senior Full-Stack Software Architect / DevOps / QA  
**Slice:** **21EX-B**  
**Store:** `dropshippoc.myshopify.com`  
**Live theme:** `148914077879` / Horizon / **live**  
**Upstream:** **21EX** (`95c67fb`), post-wave QA docs (`9c39d81`)

**Product Owner approval:** Narrow follow-up for residual commerce paths — **no** full sync, **no** publish, **no** Admin mutation.

**Evidence (gitignored):** `artifacts/catalogue/slice-21ex/2026-05-22T08-48-50/`  
**Harness:** `artifacts/catalogue/slice-21ex/run-live-horizon-commerce-validation.mjs`

---

## 1. Executive verdict

**PASS** — post-**21EX-B** live rendered validation (**2026-05-22T08-48-50**)

| Criterion | Result |
| --- | --- |
| **17/17** PDPs — no ATC / dynamic checkout / `cart/add` | **PASS** |
| **`/collections/all`** — **0** `cart/add` forms | **PASS** (was **17**) |
| **Homepage + search** — **0** `cart/add` forms | **PASS** (unchanged) |
| Supplier verified / hidden / demo | **PASS** |
| Mobile root overflow (harness) | **PASS** |

---

## 2. Root cause (residual gaps after 21EX waves 1–3)

| Gap | Root cause | Fix |
| --- | --- | --- |
| **`/collections/all` — 17 forms** | Horizon `settings.quick_add` schema default **true**; `_product-card-gallery` quick-add forms rendered in DOM when block-level `{% include %}` did not reliably set `gate_commerce_blocked` | Inline tag resolution in gallery block; **disable quick-add on `template.name == 'collection'`** |
| **Product recommendations — 4 forms** (`usb-c-charging-cable-1-2m`) | Related cards can surface untagged products; `product-recommendations` section still allowed card commerce | Gate `section.type` / `section.id` `product_recommendations` in snippet + gallery + quick-add |
| **4 PDPs — exposed main buy box** | `gate_commerce_blocked` from `{% include %}` not always visible in block `buy-buttons` | Inline tag loop in `buy-buttons`; use `closest.product.tags` |
| **1 PDP — `keep-room-tidy-…`** | Intermittent `product` vs `closest.product` scope in `buy-buttons` | `gate_product_check = closest.product \| default: product` |

---

## 3. Files changed (repo)

| File | Change |
| --- | --- |
| `snippets/product-commerce-gate.liquid` | Block commerce on `product-recommendations` sections |
| `blocks/_product-card-gallery.liquid` | Inline gate + no quick-add on collection template |
| `blocks/buy-buttons.liquid` | Inline tag gate via `closest.product` |
| `blocks/price.liquid` | Inline tag fallback for installments |
| `snippets/quick-add.liquid` | Inline tag + recommendations section gate |
| `blocks/add-to-cart.liquid` | **New** — gated standalone add-to-cart child block |
| `sections/product-information.liquid` | Inline gate for sticky add-to-cart (`closest.product`) |

**Not changed:** `templates/*.json`, Admin catalogue, checkout/payments.

**Pulled-only (untracked, not committed):** `sections/main-collection.liquid`, `sections/product-recommendations.liquid`, `sections/search-results.liquid`, `blocks/_product-card.liquid`, etc.

---

## 4. Bounded live theme pushes

**Theme ID:** `148914077879` — `--allow-live`, `--nodelete`, no `--publish`

### Push 1

```bash
shopify theme push --store dropshippoc.myshopify.com --theme 148914077879 --allow-live \
  --only snippets/product-commerce-gate.liquid \
  --only blocks/_product-card-gallery.liquid \
  --only blocks/buy-buttons.liquid \
  --only blocks/price.liquid \
  --only snippets/quick-add.liquid \
  --only blocks/add-to-cart.liquid \
  --nodelete --json --no-color
```

### Push 2

```bash
shopify theme push --store dropshippoc.myshopify.com --theme 148914077879 --allow-live \
  --only snippets/product-commerce-gate.liquid \
  --only blocks/_product-card-gallery.liquid \
  --only blocks/buy-buttons.liquid \
  --only sections/product-information.liquid \
  --nodelete --json --no-color
```

### Push 3

```bash
shopify theme push --store dropshippoc.myshopify.com --theme 148914077879 --allow-live \
  --only blocks/_product-card-gallery.liquid \
  --nodelete --json --no-color
```

### Push 4

```bash
shopify theme push --store dropshippoc.myshopify.com --theme 148914077879 --allow-live \
  --only blocks/buy-buttons.liquid \
  --nodelete --json --no-color
```

**Note:** Local `shopify theme check --fail-level error` remains polluted by hybrid MVP + partial Horizon tree (**not** a push blocker; pushes succeeded without `--strict`).

---

## 5. Live rendered validation

**Method:** `node artifacts/catalogue/slice-21ex/run-live-horizon-commerce-validation.mjs` — manual storefront unlock; live URLs only.  
**Evidence:** `artifacts/catalogue/slice-21ex/2026-05-22T08-48-50/summary.json`  
**Viewports:** desktop **1366×768**, mobile **390×844**

| Route | Desktop | Mobile | `cartForms` |
| --- | --- | --- | --- |
| `/` | **PASS** | **PASS** | **0** |
| `/collections/all` | **PASS** | **PASS** | **0** |
| `/search?q=organiser&type=product` | **PASS** | **PASS** | **0** |
| **17** PDPs | **17/17 PASS** | — | **0** each |

---

## 6. Rollback

1. Shopify Admin → Themes → **Horizon** (`148914077879`) → **Versions** → restore pre-**21EX-B** snapshot.
2. Or re-push pre-**21EX-B** file versions for the seven paths in §3.

---

## 7. Remaining launch blockers

- Live Horizon homepage assembly still native **`index.json`** (MVP `featured-product-grid` rails are a separate approved slice).
- Checkout, payments, markets, supplier proof, media, final pricing — unchanged and **blocked**.
- Commerce gate depends on product tags **`non-purchasable`** / **`price-to-confirm`** remaining on all visible SKUs (Admin tag hygiene).

---

## 8. Next owner

| Role | Action |
| --- | --- |
| **Product Owner** | Accept **21EX-B** live commerce gate **PASS** |
| **QA** | Optional regression on future catalogue changes |
| **Product Manager** | Catalogue / supplier / launch-readiness slices per programme |

---

## 9. Safety

No credentials, cookies, tokens, or customer/order/payment payloads in this document. Evidence remains gitignored under `artifacts/`.
