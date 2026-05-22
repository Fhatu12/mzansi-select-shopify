# Slice 21EW — bounded live commerce-gate sync

**Document type:** DevOps theme push + live rendered QA  
**Prepared:** 2026-05-22  
**Owner:** DevOps / Platform Engineer / QA  
**Slice:** **21EW**  
**Store:** `dropshippoc.myshopify.com`  
**Live theme:** `148914077879` / Horizon / **live**  
**Source baseline:** **21EV** (`ef234c0`) on preview **`151207542967`**

**Product Owner approval:** Bounded push of **four** commerce-gate files only — **no** full sync, **no** publish, **no** Admin product mutation.

**Evidence (local; not committed):** `artifacts/catalogue/slice-21ew/2026-05-22T07-59-10/`

---

## 1. Executive verdict

**FAIL WITH NOTES**

The bounded **four-file** push to live Horizon **succeeded** (`role: live`, theme **`148914077879`**). **Live rendered commerce gating did not activate** because Horizon’s live **`templates/product.json`** still uses the native **`product-information`** section (Shopify buy buttons / `cart/add` forms), not **`main-product-foundation`**. The pushed snippets/section/CSS are present on the live theme but **not referenced** by live JSON templates.

**Notes:** Preview **`151207542967`** (Mzansi Select MVP assembly) remains the only theme where **21EV** commerce gating is wired and validated. A **separate Product Owner–approved slice** is required to wire live templates (or change live theme role) before launch surfaces match **21EV** behaviour.

---

## 2. Pre-check

| Check | Result |
| --- | --- |
| Branch | `master` @ **21EV** (`ef234c0`) |
| `artifacts/` | **gitignored** ✓ |
| `tools/catalogue/` | Untracked — **not** committed ✓ |
| Shopify CLI auth | **PASS** |
| Full theme sync / publish | **Not** performed ✓ |
| Admin product mutation | **Not** performed ✓ |
| Checkout / payment / customer-flow enablement | **Not** performed ✓ |

---

## 3. Approval boundary

| Allowed | Executed |
| --- | --- |
| `snippets/product-commerce-gate.liquid` | ✓ pushed |
| `snippets/live-product-card.liquid` | ✓ pushed |
| `sections/main-product-foundation.liquid` | ✓ pushed |
| `assets/theme.css` | ✓ pushed |
| Any other theme file | **Not** pushed |
| `templates/*.json` | **Not** pushed (per approval) |

---

## 4. File verification (pre-push)

Inspected repo files — match **21EV** implementation:

- `product-commerce-gate.liquid` — tag normalisation; `gate_commerce_blocked`
- `live-product-card.liquid` — `{% include 'product-commerce-gate' %}`, placeholder price, browse CTA
- `main-product-foundation.liquid` — disabled ATC **Price to be confirmed**
- `theme.css` — `.p-commerce-note`

`shopify theme check --path . --fail-level error` → **0** errors.

---

## 5. Bounded live theme push

**Command:**

```bash
shopify theme push --store dropshippoc.myshopify.com --theme 148914077879 --allow-live \
  --only snippets/product-commerce-gate.liquid \
  --only snippets/live-product-card.liquid \
  --only sections/main-product-foundation.liquid \
  --only assets/theme.css \
  --nodelete --strict --json --no-color
```

**Result:** **Theme upload complete** — `id: 148914077879`, `name: Horizon`, `role: live`. **No** `--publish` flag.

**Post-pull template check (read-only):** Live `templates/product.json` uses **`product-information`** (Horizon OS 2.0), **not** `main-product-foundation`. Live `templates/index.json` is Horizon homepage JSON, **not** Mzansi MVP `featured-product-grid` assembly.

---

## 6. Live rendered validation

**Harness:** `artifacts/catalogue/slice-21ew/run-live-commerce-gating-validation.mjs` (local; not committed)  
**Unlock:** Manual password session on **live** URLs (**no** `preview_theme_id`)

| Route | Desktop | Mobile | Commerce gate |
| --- | --- | --- | --- |
| `/` | **FAIL** | **FAIL** | `cart/add` forms detected (8 / 8) |
| `/collections/all` | **FAIL** | **FAIL** | `cart/add` forms (17) |
| `/search?q=organiser&type=product` | **FAIL** | **FAIL** | `cart/add` forms (7) |
| **17** PDPs | **FAIL** (0/17) | — | Enabled ATC + dynamic checkout on sample PDP |

**Sample PDP failure signals:** `cartForms: 1`, `enabledAtc: 2`, `dynamicPay: 1`, empty `.product-main-add` (Horizon PDP markup, not foundation shell).

**Passed sub-checks where measurable:** no **Supplier verified** copy; hidden handles not linked on listing routes; no north-star demo names on homepage sample.

---

## 7. Root cause

| Layer | Preview **151207542967** | Live **148914077879** |
| --- | --- | --- |
| Theme assembly | Mzansi Select MVP | Shopify **Horizon** |
| `templates/product.json` | `main-product-foundation` | `product-information` (native buy box) |
| Collection cards | `live-product-card` via MVP sections | Horizon product cards with forms |
| **21EW push effect** | Already active (**21EV**) | Files on disk only — **templates unwired** |

---

## 8. Rollback

1. **Shopify Admin** → Themes → **Horizon** → **Versions** → restore version **before** **21EW** push (recommended).
2. Or re-push prior versions of the four files from last known good Horizon snapshot if version history unavailable.
3. **Do not** use **Publish** to swap themes without explicit Product Owner approval.

---

## 9. Remaining launch blockers

1. **Live template wiring** — commerce gate files on Horizon are insufficient without `templates/product.json` (and collection/search templates) pointing at MVP foundation sections.
2. **Image rights / supplier readiness** on **17** visible products.
3. **Supplier verified** / final pricing / delivery / claims — not approved.
4. Optional: sync **21EU** homepage rails to live (separate approval; not in **21EW** scope).

---

## 10. Strict confirmations

- **No** credentials, cookies, tokens, customer/order/payment data, or supplier credentials in this doc.
- **`artifacts/`** and **`tools/catalogue/`** not committed.
- Accidental `theme pull` of live `templates/*.json` was **reverted** in repo (`git checkout`) — **not** committed.

---

## Next owner

**Product Owner** — choose one path:

- **A)** Approve bounded **template wiring** slice (e.g. `templates/product.json`, collection template) on live **148914077879**, or  
- **B)** Approve making **151207542967** (MVP Preview) the **live** published theme (broader than **21EW**), or  
- **C)** Accept Horizon native PDP until MVP theme goes live.

**DevOps** — execute approved template/theme-role slice; re-run live commerce QA.
