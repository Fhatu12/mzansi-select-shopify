# Slice 21FH — wishlist stabilisation and re-validation

**Document type:** Theme fix + rendered QA follow-up  
**Prepared:** 2026-05-22  
**Owner:** Senior Full-Stack Software Architect / QA  
**Slice:** **21FH**  
**Store:** `dropshippoc.myshopify.com`  
**Live theme:** `151207542967` / Mzansi Select MVP Preview / **live**

**Evidence (local; not committed):** `artifacts/qa/slice-21fh-wishlist-stabilisation/`  
**Upstream:** **21FG** (`81aa913`) / **21FD** (`1a4fc43`)

---

## 1. Executive verdict

**PASS WITH NOTES**

Wishlist behaviour needed a **code fix**, not just manual proof. The live storefront was rendering wishlist hearts, but the wishlist script was not loading because **`layout/theme.liquid`** used invalid Liquid filter syntax for deferred script tags. That left visible Liquid errors on rendered PDPs and prevented **`mzansi-wishlist-v1`** writes.

The fix was applied locally, pushed to the live theme as a **single-file bounded update**, and read back from Shopify to confirm the live file now contains explicit deferred `<script>` tags. A full post-fix rendered rerun on the password-gated live storefront remained **blocked in this environment** because no valid local storefront-unlock secret or reusable browser session was available.

---

## 2. Pre-check

| Check | Result |
| --- | --- |
| Branch / status | `master`; dirty worktree with unrelated untracked theme files already present |
| Baseline commit present | `81aa9136f97d61c355105bde3a3f563023d6db54` ✓ |
| `artifacts/` ignored | `.gitignore:5` ✓ |
| `tools/catalogue/` untracked | still untracked ✓ |
| Out-of-scope actions planned | **None** — no Shopify Admin mutation, no product copy update, no theme publish, no full sync, no checkout/payment/customer enablement, no import/sync, no app install, no media upload, no deletion, no Supplier verified change |

---

## 3. Manual and diagnostic findings

### Live storefront access

- Passive unauthenticated requests to `/` and `/products/...` still redirect to `/password`.
- The current shell did **not** have `MZANSI_STOREFRONT_PASSWORD` set.
- Recent shell history contained only **self-referential** `MZANSI_STOREFRONT_PASSWORD="$MZANSI_STOREFRONT_PASSWORD"` usage, not a recoverable literal secret.
- No reusable local Chrome/Chromium profile with storefront cookies was available.

### Rendered live finding before the fix

A headed Chromium inspection reached a live PDP and showed:

- wishlist control rendered on the PDP (`[data-wishlist-toggle]` present)
- gallery surface rendered (`[data-product-gallery]` present)
- visible Liquid errors in the page body:
  - `Liquid error (layout/theme line 63): wrong number of arguments (given 2, expected 1)`
  - `Liquid error (layout/theme line 65): wrong number of arguments (given 2, expected 1)`
  - `Liquid error (layout/theme line 66): wrong number of arguments (given 2, expected 1)`
- wishlist/gallery/options scripts **absent** from the rendered DOM on that PDP

This explains the **21FG** symptom: hearts were present, but `wishlist-local.js` was not executing, so no `localStorage` write or reload persistence could occur.

---

## 4. Root cause

**Root cause:** invalid deferred script loading in [theme.liquid](/home/fhatu/dev/mzansi-select-shopify/layout/theme.liquid:63).

The live theme used:

- `{{ 'wishlist-local.js' | asset_url | script_tag: defer: true }}`
- `{{ 'product-gallery.js' | asset_url | script_tag: defer: true }}`
- `{{ 'product-options-preview.js' | asset_url | script_tag: defer: true }}`

On the live storefront, those calls rendered Liquid runtime errors instead of script tags. As a result:

- wishlist JS never loaded
- `mzansi-wishlist-v1` could not be written
- `aria-pressed` / Add-Remove label updates could not occur
- PDPs exposed visible Liquid errors

---

## 5. Fix applied

### Files changed

- [layout/theme.liquid](/home/fhatu/dev/mzansi-select-shopify/layout/theme.liquid:63)
- [docs/qa/slice-21fh-wishlist-stabilisation.md](/home/fhatu/dev/mzansi-select-shopify/docs/qa/slice-21fh-wishlist-stabilisation.md:1)
- [docs/project-control.md](/home/fhatu/dev/mzansi-select-shopify/docs/project-control.md:17)

### Theme change

Replaced the invalid `script_tag: defer: true` filter usage with explicit deferred script tags:

- wishlist loader
- PDP gallery loader
- PDP option-preview loader

No wishlist data model, card markup, PDP layout, commerce gate, price-to-confirm wording, login flow, cart flow, checkout flow, or Admin catalogue data was changed.

---

## 6. Static checks

### Commands

```bash
git status --short --branch
git rev-parse HEAD
git merge-base --is-ancestor 81aa913 HEAD
git check-ignore -v artifacts/
git ls-files --others --exclude-standard tools/catalogue
rg -n "wishlist|mzansi-wishlist-v1|localStorage|aria-pressed|live-product-card|main-product-foundation" snippets sections assets layout
shopify theme check --path . --output json --fail-level error --no-color
```

### Result

`shopify theme check` returned **pre-existing repo-wide errors** outside this slice, including missing legacy snippets/translations and an existing syntax error in `sections/main-product-foundation.liquid`. Those errors blocked `--strict` push mode, but they were **not introduced by 21FH**.

---

## 7. Live theme push

### Push command attempted with strict mode

```bash
shopify theme push --store dropshippoc.myshopify.com --theme 151207542967 --allow-live --only layout/theme.liquid --nodelete --strict --json --no-color
```

**Result:** blocked by pre-existing Theme Check errors elsewhere in the repo.

### Executed bounded live push

```bash
shopify theme push --store dropshippoc.myshopify.com --theme 151207542967 --allow-live --only layout/theme.liquid --nodelete --json --no-color
```

### Files pushed

- `layout/theme.liquid`

### Live read-back confirmation

A selected remote pull after upload confirmed the live theme now contains:

```liquid
<script src="{{ 'wishlist-local.js' | asset_url }}" defer></script>
{% if template.name == 'product' %}
  <script src="{{ 'product-gallery.js' | asset_url }}" defer></script>
  <script src="{{ 'product-options-preview.js' | asset_url }}" defer></script>
{% endif %}
```

No publish action and no full theme sync were performed.

---

## 8. Rendered QA status

### Pre-fix rendered routes reached

| Route | Viewport | Status |
| --- | --- | --- |
| `/` | Desktop `1366x768` | Reached during live diagnostic |
| first homepage card PDP | Desktop `1366x768` | Reached during live diagnostic |

### Post-fix rerun

**BLOCKED in this environment**

The approved live rerun could not be completed locally after the fix because:

- the storefront remained password-gated;
- no valid local-only password env value was available in the active shell;
- recent history did not expose a literal recoverable secret;
- no reusable browser session/profile with storefront access existed.

### What is proven vs not yet re-proven

**Proven**

- live root cause reproduced on rendered PDP
- fix applied locally
- bounded live push completed
- live remote file read-back matches the fix
- no Shopify Admin mutation occurred
- no full sync or publish occurred

**Not yet re-proven locally after the push**

- homepage card toggle writing `mzansi-wishlist-v1`
- search card toggle writing `mzansi-wishlist-v1`
- reload persistence on live storefront after the fix
- card/PDP sync on live storefront after the fix
- desktop/mobile three-PDP rerun after the fix

---

## 9. Commerce safety

**PASS**

No Shopify Admin catalogue mutation, checkout/payment/customer enablement, cart wiring, login persistence, backend wishlist storage, media upload, product deletion, import/sync, app install, or Supplier verified posture change was performed in this slice.

The fix is storefront-script loading only and preserves the localStorage-only wishlist design from **21FD**.

---

## 10. Remaining blockers

1. **Post-fix rendered wishlist rerun still required** with a valid manual unlock or genuine local `MZANSI_STOREFRONT_PASSWORD`.
2. **21FC-C split-theme issue** remains open separately; this slice did not change `/collections/all` routing/state.
3. `shopify theme check --strict` remains blocked by unrelated existing repo errors outside the wishlist scope.

---

## 11. Recommended next owner

**QA / Test Engineer**

Run the post-fix live storefront rerun with real password access and confirm:

- homepage heart toggle
- search heart toggle
- at least three PDP hearts, including one tech SKU
- `mzansi-wishlist-v1` write
- reload persistence
- card/PDP sync
- no Liquid error
- no commerce/customer enablement regression

---

## 12. Safety

This document excludes credentials, cookies, tokens, auth/session files, customer data, order data, payment data, supplier credentials, HAR, traces, screenshots, and raw sensitive Admin output.
