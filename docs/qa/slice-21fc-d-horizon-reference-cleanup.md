# Slice 21FC-D — Horizon reference cleanup and verification

**Document type:** Repo hygiene audit + live verification  
**Prepared:** 2026-05-22  
**Owner:** Senior Full-Stack Software Architect / QA  
**Slice:** **21FC-D**  
**Store:** `dropshippoc.myshopify.com`  
**Live theme:** `151207542967` / Mzansi Select MVP Preview / **live**

**Upstream:** **21FC-C** (`d6fcb62921200770cf1e0b2f9e04565ff1d9b8b9`)  
**Evidence (local; not committed):** `artifacts/qa/slice-21fc-d-horizon-reference-cleanup/`

---

## 1. Executive verdict

**FAIL**

The local Horizon pull debris was cleaned out of the repo working tree, and the committed MVP theme path was audited for accidental Horizon references. No real committed MVP-path Horizon reference was found that justified a theme-file fix.

Live verification then showed:

- homepage still on MVP theme `151207542967`
- search still on MVP theme `151207542967`
- the previously problematic PDP is now on MVP theme `151207542967`
- mobile `/collections/all` still reports MVP theme `151207542967`

But desktop `/collections/all` still fails in the same core way:

- theme ID still Horizon / `2481`
- visible product count still `17`, not `15`
- hidden products still leak
- quick-add/cart DOM still present
- Liquid error still present

So **21FC-D** does **not** resolve the remaining route split.

---

## 2. Pre-check

| Check | Result |
| --- | --- |
| Branch | `master` |
| `HEAD` includes latest accepted commit | **PASS** — `d6fcb62921200770cf1e0b2f9e04565ff1d9b8b9` |
| `artifacts/` ignored | **PASS** |
| `tools/catalogue/` untracked | **PASS** |
| Live theme from CLI | **PASS** — `151207542967` live; `148914077879` unpublished |
| Admin mutation / publish / rollback / full sync planned | **No** |

No Shopify Admin mutation, no template-suffix mutation, no theme publish, no rollback, no full sync, no checkout/payment/customer-flow enablement, no import/sync, no app install, no media upload, no product deletion, and no Supplier verified change were performed in this slice.

---

## 3. Horizon debris cleanup result

### Confirmed untracked pull debris moved

The following repo-root pull debris was confirmed untracked and moved into:

`artifacts/theme-pulls/slice-21fc-d/`

Moved groups:

- `assets/results-list.js`
- `config/settings_data.json`
- pulled-only `sections/*` Horizon/library files
- pulled-only `snippets/product-grid.liquid`
- pulled-only `templates/article.json`
- pulled-only `templates/blog.json`
- pulled-only `templates/gift_card.liquid`
- pulled-only `templates/list-collections.json`
- pulled-only `templates/password.json`

These files were moved only after confirming they were **not** tracked by Git.

### Left alone

- `tools/catalogue/`

It remains untracked and untouched, as required.

### Final repo-root hygiene result

After the move, the repo working tree no longer had the earlier untracked Horizon pull debris in `assets/`, `config/`, `sections/`, `snippets/`, or `templates/`. Only `tools/catalogue/` remained untracked in the root worktree.

---

## 4. Horizon reference audit

Search scope:

- `templates`
- `sections`
- `snippets`
- `blocks`
- `assets`
- `layout`
- `config`
- `docs`

Searches run included:

```bash
rg -n "Horizon|148914077879|template--19626890985655|product-information|main-collection|cart/add|quick-add" templates sections snippets blocks assets layout config docs
```

### Findings by class

#### Expected documentation references

Found in:

- `docs/project-control.md`
- `docs/qa/slice-21fc-b-split-theme-routing-fix.md`
- `docs/qa/slice-21fc-c-theme-editor-route-rebind.md`
- earlier QA / release-history docs

These are valid historical references and were left unchanged.

#### Old support and audit references

Found in:

- prior QA docs describing Horizon as the earlier live theme
- prior fix docs explaining the split-theme investigation trail

These are expected historical references and were left unchanged.

#### Real committed theme references

**No accidental committed MVP-path Horizon reference was found.**

Key findings:

- `templates/collection.json` points to `main-collection-foundation`
- `templates/product.json` points to `main-product-foundation`
- no committed reference to theme ID `148914077879` in active MVP theme files
- no committed reference to `template--19626890985655`
- no committed proof that MVP route files accidentally point to Horizon template instances

Tracked files such as `sections/main-collection.liquid`, `sections/product-information.liquid`, `snippets/quick-add.liquid`, and related Horizon-era structures still exist in the repo, but the audit did **not** show them being accidentally wired into the committed MVP route templates that should govern the accepted MVP path.

#### Untracked debris

The untracked Horizon pull files were successfully reclassified as pulled-only audit debris and moved out of the repo root into `artifacts/theme-pulls/slice-21fc-d/`.

---

## 5. Committed theme-file change result

**No committed theme files were changed in this slice.**

Because the audit did not find a real accidental committed Horizon reference in the MVP path, there was no justified theme-file patch to make.

---

## 6. Theme checks

| Check | Result |
| --- | --- |
| `shopify theme check --path . --output json --fail-level error --no-color` | **FAIL WITH NOTES** |

Theme Check still reports the same broader baseline errors in tracked theme/library files outside this slice. After the debris cleanup, those errors were no longer caused by untracked root pull noise, but they still do **not** identify a specific accidental Horizon reference in the committed MVP route path.

Because no committed theme files changed, no bounded live push was performed.

---

## 7. Live verification

Routes tested in a fresh browser context with cache-busting query params:

### Desktop `1366x768`

- `/`
- `/collections/all`
- `/search?q=organiser&type=product`
- `/products/modern-kitchen-accessories-soap-dispenser-set-liquid-hand-soap-dispenser-pump-bottle-brushes-holds-and-stores-sponges-scrubbers-1`

### Mobile `390x844`

- `/collections/all`

Wishlist spot-checks:

- homepage
- PDP `low-delay-wireless-tws-games-sports-headset`

---

## 8. Live verification result

### Theme ID result

| Route | Theme ID | Result |
| --- | --- | --- |
| `/` | `151207542967` | **PASS** |
| `/search?q=organiser&type=product` | `151207542967` | **PASS** |
| Problem PDP | `151207542967` | **PASS** |
| `/collections/all` desktop | `2481` / Horizon | **FAIL** |
| `/collections/all` mobile | `151207542967` | **PASS WITH NOTES** |

### `/collections/all` result

Desktop `/collections/all` still showed:

- theme ID `2481`
- theme name `Horizon`
- visible product count `17`
- hidden-product leakage
- `17` cart/add forms
- `51` quick-add nodes
- Liquid error present
- no wishlist script

### Problem PDP result

The previously problematic PDP now returned:

- theme ID `151207542967`
- MVP theme name
- wishlist button present
- no Liquid error
- no cart/add
- no quick-add
- `Price to be confirmed` still visible

This is an improvement versus **21FC-C**.

### Visible product count observed

- desktop `/collections/all`: **17**
- expected: **15**

### Hidden-product absence result

**FAIL**

Still visible on desktop `/collections/all`:

- `adjustable-laptop-stand`
- `available-regular-price`
- `keep-room-tidy-for-dirty-clothes-waterproof-fabric-foldable-hamper`
- `usb-c-charging-cable-1-2m`

### Commerce safety result

**FAIL on desktop `/collections/all`; PASS elsewhere in this slice’s spot-check scope**

Pass surfaces:

- homepage
- search
- problem PDP
- mobile `/collections/all`

Fail surface:

- desktop `/collections/all`
  - `/cart/add` forms present
  - quick-add present
  - Liquid error present

### Wishlist spot-check result

**PASS**

- homepage wishlist still toggled correctly
- PDP wishlist still toggled correctly
- `mzansi-wishlist-v1` still wrote correctly

### Liquid error result

**FAIL**

Liquid error still present on desktop `/collections/all`.

### Mobile overflow result

**PASS**

No mobile overflow was detected on the tested mobile `/collections/all` route.

---

## 9. Routing issue persistence

**Yes — the routing issue persists.**

The cleanup and audit removed local noise and confirmed the committed MVP route path does not obviously contain accidental Horizon wiring. The live storefront split now appears even more strongly to be a platform-side route-instance binding issue focused on desktop `/collections/all`, rather than a local repo reference problem.

The fact that the previously problematic PDP now resolves correctly while desktop `/collections/all` still does not suggests the remaining failure has narrowed rather than widened.

---

## 10. Files changed

Committed files changed:

- `docs/qa/slice-21fc-d-horizon-reference-cleanup.md`
- `docs/project-control.md`

Untracked debris moved to ignored storage:

- `artifacts/theme-pulls/slice-21fc-d/...`

Committed theme files changed:

- **None**

Live push:

- **None**

---

## 11. Recommended next step

### Recommended: **A) Shopify Support escalation**

This is now the strongest next step because:

- local Horizon pull debris is no longer muddying the repo
- the committed MVP route path audit did not reveal an accidental Horizon reference to fix
- the problem PDP improved and now resolves to MVP
- desktop `/collections/all` remains stubbornly Horizon-bound with the same catalogue leak and Liquid error pattern

### Alternatives

- **B) controlled route workaround avoiding `/collections/all`**
- **C) separately approved template-suffix mutation**

Those were **not** performed in this slice.

---

## 12. Evidence path

Primary evidence:

- `artifacts/qa/slice-21fc-d-horizon-reference-cleanup/2026-05-22T14-11-04-842Z/summary.json`

Moved pull debris archive:

- `artifacts/theme-pulls/slice-21fc-d/`

---

## 13. Recommended next owner

**Product Owner** to approve **Shopify Support escalation with evidence**.
