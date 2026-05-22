# Slice 21FC — MVP preview publish and live QA

**Document type:** Bounded theme publish + post-publish live storefront QA  
**Prepared:** 2026-05-22  
**Owner:** DevOps / Platform Engineer + QA / Test Engineer  
**Slice:** **21FC**  
**Store:** `dropshippoc.myshopify.com`

**Product Owner approval boundary:**

- **Approved:** publish theme **`151207542967`** (Mzansi Select MVP Preview) as the live catalogue-only storefront.
- **Approved post-publish validation:** live URLs without `preview_theme_id`; homepage, `/collections/all`, organiser search, **13** visible PDPs; desktop **1366×768** and mobile **390×844**.
- **Not approved:** checkout/payment/customer-flow enablement; Admin product mutation; import/sync; app install; media; price/inventory/claims changes; rollback execution (document only unless PO approves after failure).

**Upstream:** **Slice 21FB** (`60b7166`) — **PASS WITH NOTES** publish-readiness audit.

**Evidence (local; not committed):**

- Pre-publish Admin: `artifacts/catalogue/slice-21fb/2026-05-22T10-25-12/` (or latest `admin-baseline.json` under `artifacts/catalogue/slice-21fb/`)
- Post-publish QA: `artifacts/catalogue/slice-21fc/2026-05-22T10-25-37/summary.json`

---

## 1. Executive summary

| Phase | Verdict |
| --- | --- |
| **Theme publish** | **PASS** — CLI reports **`151207542967`** as **live** |
| **Post-publish live QA** | **FAIL** — split-theme rendering: `/collections/all` (and **3** PDPs) still serve **Horizon** **`148914077879`** while homepage and search serve MVP |

**Published live theme ID:** **`151207542967`**  
**Previous live theme ID:** **`148914077879`** (now **unpublished** per CLI)

**Do not treat the storefront as launch-ready** until `/collections/all` and all **13** PDPs consistently render under **`151207542967`** with the **21FB** acceptance baseline.

---

## 2. Pre-publish checkpoint

| Check | Result |
| --- | --- |
| Branch | `master` @ **`60b71663348fb7f3e538f694e71e4859519f4288`** ✓ |
| `artifacts/` | **gitignored** ✓ |
| `tools/catalogue/` | Untracked — **not** committed ✓ |
| Untracked Horizon pull debris | **Classified** — theme pull files under `sections/`, `templates/`, `config/` etc.; **not** committed ✓ |
| Shopify CLI auth | **PASS** (no secrets recorded) |
| Target publish theme | **`151207542967`** ✓ |
| Live theme before publish | **`148914077879`** ✓ |
| Admin / checkout / import / media | **Not** performed ✓ |

---

## 3. Final pre-publish read-only check

**`shopify theme list --store dropshippoc.myshopify.com` (before publish):**

| Theme ID | Name | Role |
| ---: | --- | --- |
| **148914077879** | Horizon | **live** |
| **151207542967** | Mzansi Select MVP Preview | **unpublished** |

**Admin baseline (read-only GraphQL):**

| Metric | Result |
| --- | ---: |
| Online Store visible | **13** |
| Hidden from Online Store | **15** (all **15** checked handles unpublished) |
| Commerce gate tags | **13/13** ✓ |
| Supplier verified on visible | **None** |

**Proceed:** counts match expected baseline — publish authorised.

---

## 4. Publish

**Command (fileless publish — no local theme push in publish step):**

```bash
shopify theme publish --store dropshippoc.myshopify.com --theme 151207542967 --force
```

**CLI result:**

```text
The theme 'Mzansi Select MVP Preview' (#151207542967) is now live at https://dropshippoc.myshopify.com.
```

**Post-publish `shopify theme list`:**

| Theme ID | Name | Role |
| ---: | --- | --- |
| **151207542967** | Mzansi Select MVP Preview | **live** |
| **148914077879** | Horizon | **unpublished** |

**Remediation attempt (post-QA failure — did not resolve collection route):**

```bash
shopify theme push --store dropshippoc.myshopify.com --theme 151207542967 --allow-live \
  --only templates/collection.json --only sections/main-collection-foundation.liquid --nodelete
```

Remote **`templates/collection.json`** already referenced **`main-collection-foundation`** before and after push; **`/collections/all`** continued to render **Horizon** in browser QA.

---

## 5. Post-publish live QA

**Method:** headed Chromium, manual storefront password unlock; **no** `preview_theme_id`; harness `artifacts/catalogue/slice-21fc/run-live-post-publish-qa.mjs`.

### 5.1 Routes and viewports

| Route | Desktop **1366×768** | Mobile **390×844** |
| --- | --- | --- |
| `/` | Tested | Tested |
| `/collections/all` | Tested | Tested |
| `/search?q=organiser&type=product` | Tested | Tested |
| **13** PDPs | Tested (desktop) | — |

### 5.2 Live theme ID observed (`window.Shopify.theme.id`)

| Route / surface | Theme ID | Theme name |
| --- | ---: | --- |
| Homepage | **151207542967** | Mzansi Select MVP Preview |
| Search (organiser) | **151207542967** | Mzansi Select MVP Preview |
| **`/collections/all`** | **148914077879** | **Horizon** |
| PDPs (MVP) | **151207542967** | **10** handles |
| PDPs (Horizon) | **148914077879** | **3** handles (see §5.4) |

**Finding:** Shopify CLI reports MVP as **live**, but the storefront serves **two themes** by route — a **split-theme** defect. Collection uses Horizon section IDs (`sections--19626891411639__…`); MVP routes use foundation section handles (`shopify-section-announcement-topbar`, etc.).

### 5.3 Acceptance matrix

| Criterion | Homepage / search (MVP) | `/collections/all` (Horizon) |
| --- | --- | --- |
| Visible count **13** | N/A (rails subset **6**) | **FAIL** — **17** product links |
| **15** hidden absent | **PASS** | **FAIL** — **four** **21EZ** handles present |
| No cart/add / quick-add / ATC / dynamic checkout | **PASS** | Desktop **PASS**; mobile **FAIL** — **17** cart forms, **34** quick-add |
| Price-to-confirm / catalogue-only PDP | **PASS** (MVP PDPs) | N/A |
| Supplier verified | **PASS** | **PASS** |
| Demo placeholders | **PASS** | **PASS** |
| Mobile overflow | **PASS** | **PASS** (no root overflow; commerce leak fails gate) |
| Newsletter deferred | **PASS** (disabled inputs) | N/A on Horizon footer |

### 5.4 PDP results (**13** handles)

| Result | Count | Notes |
| --- | ---: | --- |
| **PASS** (MVP theme + commerce gate) | **10** | — |
| **FAIL** | **3** | **`1pc-self-adhesive-…`** — Horizon theme; **1** cart form, **2** enabled ATC, dynamic checkout; price not gated. **`handwoven-cotton-organizer-basket`**, **`modern-kitchen-accessories-soap-dispenser-set-…`** — Horizon theme ID (commerce probes otherwise quiet). |

### 5.5 Live QA verdict

**FAIL**

**Primary blockers:**

1. **`/collections/all`** does not use published MVP theme despite CLI **live** role on **`151207542967`**.
2. Visible catalogue count **17** vs Admin **13** on collection grid.
3. Mobile collection commerce DOM leak (**17** cart forms, **34** quick-add) — regresses **21FA**/**21FB** acceptance.
4. **Three** PDPs still render under Horizon.

---

## 6. Rollback (document only — not executed)

If Product Owner approves rollback to restore a single consistent theme:

```bash
shopify theme publish --store dropshippoc.myshopify.com --theme 148914077879 --force
```

**Effect:** restores **Horizon** as live; reverses **21FC** publish goal. Use only if PO explicitly chooses consistency over MVP catalogue alignment.

**Preferred forward path:** **21FC-B** — diagnose split-theme routing (Theme Editor save on live MVP collection template, Shopify Admin theme assignment review, or platform support); re-run live QA; **do not** enable checkout.

---

## 7. Remaining launch blockers

| Blocker | Owner |
| --- | --- |
| Split-theme storefront — collection + partial PDPs on Horizon | **DevOps / Platform Engineer** + **Product Owner** |
| Post-publish live QA **FAIL** gate | **QA / Test Engineer** |
| Checkout / payment / customer-flow | **Blocked** — **Product Owner** |
| **21EY** product readiness (image rights, supplier proof, claims) | **Product Manager** |
| Security re-review if public URL policy changes | **Security / Compliance Engineer** |

---

## 8. Commands executed

```bash
git status --short --branch
git check-ignore -v artifacts/
shopify theme list --store dropshippoc.myshopify.com
node artifacts/catalogue/slice-21fb/run-admin-baseline.mjs
shopify theme publish --store dropshippoc.myshopify.com --theme 151207542967 --force
shopify theme list --store dropshippoc.myshopify.com
node artifacts/catalogue/slice-21fc/run-live-post-publish-qa.mjs
shopify theme push --store dropshippoc.myshopify.com --theme 151207542967 --allow-live \
  --only templates/collection.json --only sections/main-collection-foundation.liquid --nodelete
```

---

## 9. Recommended next owner

**Product Owner** — decide: **(A)** approve **21FC-B** remediation (Admin/theme-editor investigation + live re-QA) to complete MVP publish intent, or **(B)** approve **rollback** to Horizon for a single-theme storefront while split-theme is investigated.

**DevOps / Platform Engineer** — execute PO choice; no further product mutations without separate approval.
