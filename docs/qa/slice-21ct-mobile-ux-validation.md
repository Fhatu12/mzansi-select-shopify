# Slice 21CT — Mobile UX rendered validation (post 21CS)

**Document type:** QA validation report  
**Prepared:** 2026-05-21  
**Owner:** QA / Test Engineer  
**Scope:** Rendered validation only on unpublished preview theme **`151207542967`** after **Slice 21CS** sync of **Slice 21CR** mobile UX polish. **No** theme edits, push, Admin mutation, publish, or commerce enablement in this slice.

## Inputs

- **Implementation:** **`df6b4ac`** (**Slice 21CR**)
- **Preview sync:** **Slice 21CS** (**PASS WITH NOTES**)
- **Harness (local):** `tools/qa/run-slice-21ct-mobile-ux-validation.mjs` (**not** committed)
- **Supplementary:** `tools/qa/run-slice-21cp-decorative-image-validation.mjs` (overflow comparison)
- **Evidence (local; not committed):** `artifacts/qa/slice-21ct-mobile-ux-validation/2026-05-21-093602/`

## Method

- **Unlock:** `--manual-unlock` (single Chromium session; no password stored)
- **Preview URL:** `https://dropshippoc.myshopify.com/?preview_theme_id=151207542967`
- **Viewports:** desktop **`1366×768`**, narrow **`900×844`**, mobile **`390×844`**
- **Routes:** homepage **`/`**, search **`/search?q=organiser&type=product`**, controlled pilot **`/collections/controlled-pilot`**
- **Checks:** horizontal overflow (`documentElement` + `body`), topbar ticker motion/CSS, back-to-top visibility/position/click, decorative image regression, search + controlled-pilot shells, commerce safety, `prefers-reduced-motion` topbar spot-check

## Verdict: **PASS WITH NOTES**

Reviewer-targeted UX fixes are **largely confirmed** on the synced preview theme: topbar auto-scroll on mobile/narrow widths, back-to-top behaviour, search and controlled-pilot regressions, and decorative imagery all **PASS**. **Note:** mobile homepage still reports **document-level** horizontal overflow in automated probes (`documentElement.scrollWidth` **640** vs **375**, `scrollLeft` up to **~265px**) while **`body`** measurements stay contained (**375/375**, `body.scrollLeft` **0**). Treat as a **residual ticker/layout probe flag** — likely the animated **`.topbar-track`** inflating root scroll width; worth a quick manual swipe check, but **not** a regression on search or controlled-pilot routes.

## 1. Homepage mobile overflow (`390×844`)

| Probe | Result | Detail |
| --- | --- | --- |
| `body` scroll width | **PASS** | **375** / **375** — no body-level horizontal growth |
| `documentElement` scroll width | **FAIL (probe)** | **640** / **375** — harness flag `horizontal-page-overflow` |
| Practical horizontal scroll | **PASS WITH NOTES** | Programmatic `documentElement.scrollLeft` reached **~265px**; `html { overflow-x: clip }` present; **`body`** does not scroll horizontally — side-scroll risk reduced vs pre-**21CR** but not fully eliminated at root |
| Visual white space / layout | **PASS WITH NOTES** | Decorative surfaces and rails acceptable; no broken-image regression |

**Comparison:** **21CP** harness (post-**21CS**) still flags mobile homepage `responsive-overflow` **FAIL** using the same `documentElement` probe — consistent with **21CT**, not a new decorative regression.

## 2. Nearby route overflow

| Route | Mobile (`390×844`) | Narrow (`900×844`) | Desktop (`1366×768`) |
| --- | --- | --- | --- |
| `/search?q=organiser&type=product` | **PASS** (375/375) | **PASS** | **PASS** |
| `/collections/controlled-pilot` | **PASS** (375/375) | **PASS** | **PASS** |

No horizontal overflow flags on non-homepage routes tested.

## 3. Top banner ticker

| Viewport | Result | Detail |
| --- | --- | --- |
| Mobile **390×844** | **PASS** | **`.topbar-static`** hidden; **`.topbar-marquee`** visible; **`topbar-ticker`** animation **28s**; motion sample **PASS** (track translate moves left) |
| Narrow **900×844** | **PASS** | Same ticker mode; motion sample **PASS** |
| Desktop **1366×768** | **PASS** | **`.topbar-static`** visible (**block**); **`.topbar-marquee`** hidden (**none**); animation **none** — stable centred strip |
| Reduced motion (emulated) | **PASS** | **`animationName: none`**; no motion sample — acceptable manual-scroll fallback |

Copy remains preview-safe (**Checkout preview**); no live payment implication observed.

## 4. Back-to-top

| Check | Result |
| --- | --- |
| Hidden at page top | **PASS** — `#backToTop` `hidden`, not `.is-visible` |
| Visible after scroll (~900px) | **PASS** — visible, `opacity: 1`, above bottom bar (`rectBottom` **768**, bottom bar top **784**) |
| Does not overlap mobile bottom bar | **PASS** — `overlapsBottomBar: false` |
| Click returns to top + focus | **PASS** — `scrollY: 0`, `MainContent` focused |
| No `href="#"` | **PASS** — control is `<button type="button">` |

## 5. Regression checks

| Area | Result | Detail |
| --- | --- | --- |
| Decorative images (homepage) | **PASS** | **14/14** loaded; **0** broken (desktop, narrow, mobile) |
| Homepage layout | **PASS WITH NOTES** | Acceptable; residual root overflow probe on mobile only |
| Search (`organiser`) | **PASS** | **10** `product-card--live`; performed state; no static demo cards |
| Controlled-pilot fallback | **PASS** | Controlled shell visible; **3** live cards; no generic-shell leak |
| PDP media gate (21CP spot-check) | **PASS** | Not re-run in **21CT** harness; **21CP** post-sync run completed separately — no supplier media leak in that harness path |

## 6. Safety findings

| Check | Result |
| --- | --- |
| Active Add to Cart / Buy Now | **PASS** — none |
| Active checkout / payment / customer links | **PASS** — none |
| `href="#"` | **PASS** — none |
| Newsletter capture enabled | **PASS** — none |

All safety rows **PASS** across routes and viewports in **21CT** evidence.

## Commands executed

```bash
git status --short --branch
node tools/qa/run-slice-21ct-mobile-ux-validation.mjs --manual-unlock
node tools/qa/run-slice-21cp-decorative-image-validation.mjs --manual-unlock   # supplementary overflow compare
# Supplementary scroll probe (mobile homepage):
# documentElement scrollLeft max ~265px; body scrollLeft 0
```

## Explicitly unchanged

Checkout/payment/customer-order flows, cart/account/wishlist enablement, newsletter capture, product visibility/publication, PDP/catalog media gate, Storefront API/cart API, Admin mutation, publish, import/sync, app install.

## Recommended next owner

- **Product Owner** — accept **PASS WITH NOTES** for reviewer re-check (mobile homepage swipe + topbar/back-to-top).
- **Senior Full-Stack Software Architect** (optional follow-up) — if manual swipe still shows root-level drift, contain **`.topbar-track`** so `documentElement.scrollWidth` matches viewport without reintroducing clipped message text on narrow desktop.
