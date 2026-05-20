# Slice 21CA — collection, search, and PDP route readiness audit

**Document type:** Read-only route readiness audit  
**Prepared:** 2026-05-20  
**Owner:** QA / Test Engineer  
**Preview theme:** `151207542967` / Mzansi Select MVP Preview / **unpublished** on `dropshippoc.myshopify.com`  
**Scope:** Audit remaining preview surfaces after accepted **21BI** shell, **21BO** content parity, **21BQ** route honesty, **21BR** preview sync, and **21BZ** homepage harness — **no** theme edit, **no** Shopify Admin mutation, **no** publish/push, **no** commerce enablement.

## Executive verdict

**PASS WITH NOTES**

Preview routes are **safe** for continued restricted internal review: commerce, checkout, customer account, and live purchase paths remain blocked on inspected theme contracts and on the latest authenticated CJ PDP evidence chain. **Gaps remain** that need **future implementation slices** before these surfaces match north-star browse expectations — especially **live search results**, **department collection honesty when empty vs live-mixed**, and **`controlled-pilot` collection routing** (native collection vs informational **404** fallback).

## Audit method

| Layer | Result |
| --- | --- |
| Passive storefront `curl` (all listed routes + `preview_theme_id=151207542967`) | **INCONCLUSIVE** for rendered body — every route returned **HTTP 200** with password-gate title **`DropShipPOC`** only |
| Theme/source contract review (`templates/`, `sections/`, `snippets/`) | **PASS WITH NOTES** — non-purchasable and preview-safe wiring confirmed in Liquid |
| Prior authenticated evidence | **PASS WITH NOTES** — **Slice 21BQ** homepage (**2026-05-20**); **Slice 21AR** CJ PDP rerun (**2026-05-15-161253**) |
| Harness reuse | **`tools/qa/run-slice-21bq-route-honesty-validation.mjs`** `--dry-run` confirms homepage scope only; **`tools/qa/run-slice-21ar-fixed-route-preview-check.mjs`** covers CJ PDPs + `controlled-pilot` only |
| Fresh full-route Playwright rerun | **Not executed in this pass** — `MZANSI_STOREFRONT_PASSWORD` unset; operator may rerun with **`--manual-unlock`** on extended harness or existing **21AR**/**21BJ** tooling |

**Evidence (local; not committed):** `artifacts/qa/slice-21ca-route-readiness-audit/2026-05-20-route-readiness-passive/`

## Route readiness summary

| Route | Load / gate | Readiness | Verdict | Future slice? |
| --- | --- | --- | --- | --- |
| `/` (homepage) | Password-gated in passive pass; **21BQ** validated unlocked | **Ready** — route honesty + safety **PASS** (**21BQ**) | **PASS** | No — maintenance only |
| `/collections/home-living` | Password-gated passive; theme uses live `collection.products` when count > 0 | **Ready with notes** — layout foundation; may show **Slice 13I** preview rows and/or empty state | **PASS WITH NOTES** | Optional polish if empty/mixed messaging drifts |
| `/collections/kitchen-storage` | Same | **Ready with notes** | **PASS WITH NOTES** | Optional polish |
| `/collections/office-desk` | Same | **Ready with notes** | **PASS WITH NOTES** | Optional polish |
| `/collections/tech-accessories` | Same | **Ready with notes** | **PASS WITH NOTES** | Optional polish |
| `/search?q=organiser&type=product` | Password-gated passive; theme **does not** use `search.results` | **Not ready** for honest query UX — static placeholder cards ignore query | **PASS WITH NOTES** (safe, misleading) | **Yes — Slice 21CB** recommended |
| `/products/beverage-bottle-oil-bottle-handle-holder` | **21AR** unlocked PASS WITH NOTES | **Ready** — live title, pilot trust copy, placeholder price, disabled purchase | **PASS WITH NOTES** | No |
| `/products/usb-bag-sealer` | Same | **Ready** | **PASS WITH NOTES** | No |
| `/products/foldable-magnetic-phone-holder-desktop-tablet-stand` | Same | **Ready** | **PASS WITH NOTES** | No |
| `/collections/controlled-pilot` | **21AR** unlocked: **404** title; theme **404** fallback renders 3 informational cards when fallback path active | **Ready with notes** — informational / dual-path; not a full Shopify collection grid in last authenticated capture | **PASS WITH NOTES** | **Yes — Slice 21CC** recommended |

## Desktop findings (`1366×768`)

- **Homepage:** Accepted **21BQ** evidence — department quartet specific URLs; anchored browse links; no broad `/collections/all` misuse; safety regression **PASS** (manual unlock).
- **Department collections:** `main-collection-foundation` renders collection title/intro from Shopify when present; shows **`live-product-card`** grid when `collection.all_products_count > 0`, otherwise honest empty state (“being prepared”). Live cards use **`View product`** browse CTA (not enabled Add to Cart) and **`Price to be confirmed`** when `preview-only` / `price-to-confirm` tags apply — consistent with **Slice 13I** + **21AR** posture.
- **Search:** `main-search-foundation` shows static “Preview matches” (headphones, watch, storage, flask) with disabled search button and **Preview only** CTAs — **does not** reflect `q=organiser`. Readonly input shows default **`wireless headphones`** from section settings, not the URL query — **misleading** for search QA but **non-purchasable**.
- **CJ PDPs (desktop):** **21AR** rerun — pages load with correct product titles; **Price to be confirmed**; **Pilot item** / **Not available to buy yet**; cart/checkout disabled copy present; **0** active purchase paths; **0** cart forms; placeholder gallery only (no supplier media) — layout **PASS**, harness strict phrase check **FAIL** (cosmetic label drift only).
- **Controlled-pilot (desktop):** **21AR** — **404 Not Found** title; body did not expose live collection product grid in harness counts; theme source provides **controlled-pilot** fallback cards with disabled **Preview only** buttons and links to the three CJ PDPs — acceptable informational route under bounded pilot contract.

## Mobile findings (`390×844`)

- **Homepage:** **21BQ** **PASS** on mobile (drawer/browse parity).
- **Department collections / search:** Same theme contracts as desktop; mobile shell from **21BI**/**21BO** applies via shared sections — **no** separate mobile template drift observed in source.
- **CJ PDPs (mobile):** **21AR** — all three PDPs reachable; main content visible; **no** horizontal overflow; purchase/checkout paths **PASS**; mobile header uses drawer pattern (desktop header hidden — expected).
- **Controlled-pilot (mobile):** Same **404** + fallback posture as desktop in **21AR** capture.

## PDP findings (controlled pilot — three handles)

| Handle | Title (rendered) | Price posture | Purchase | Media | Claims |
| --- | --- | --- | --- | --- | --- |
| `beverage-bottle-oil-bottle-handle-holder` | Beverage & Oil Bottle Handle Holder | **Price to be confirmed**; pilot trust notes | Disabled — **Not available to buy yet** | Placeholder only | No final supplier/pricing/delivery guarantee |
| `usb-bag-sealer` | USB Bag Sealer | Same | Same | Placeholder only | Same |
| `foldable-magnetic-phone-holder-desktop-tablet-stand` | Foldable Magnetic Phone Holder & Desktop Tablet Stand | Same | Same | Placeholder only | Same |

**Note:** Staging list prices (**R249** / **R279** / **R699**) are **not** shown on storefront when `preview-only` + `price-to-confirm` tags apply — correct non-final exposure.

## Collection findings (approved quartet)

- Routes resolve to real collection handles wired in navigation (**21BQ** validated).
- When products exist: grid uses **`live-product-card`** — preview badges, placeholder pricing, **View product** only.
- When empty: honest empty-state copy; no fake purchasable grid.
- **Risk (low):** legacy **Slice 13I** non-CJ preview SKUs may still appear in department collections while CJ pilot remains collection-scoped to **`controlled-pilot`** only — bounded catalogue mixing, not a checkout regression.

## Search findings

- Route returns **HTTP 200** on password gate (passive).
- Theme template **`templates/search.json`** → **`main-search-foundation`**: **no** `search.results`, **no** `paginate search`, **no** live product loop — static placeholder merchandising only.
- Query **`organiser`** is **not** honoured in visible results or readonly field value.
- Safety: disabled search submit, **Preview only** buttons, department recovery links use approved collection URLs.
- **Recommendation:** treat as **safe but incomplete** — requires **Slice 21CB** (live search results shell with preview-safe cards and honest empty state) before search can be marked fully “ready”.

## Controlled-pilot route note

- Shopify may serve **`/collections/controlled-pilot`** as **404** while the custom collection remains informational; **`sections/main-404-foundation.liquid`** detects the path and renders three static CJ cards with placeholder media and disabled commerce — **accepted bounded behaviour** (**21BF**, **21AZ** class).
- After **Slice 21AR**, CJ rows are **ACTIVE** / Online Store – published but **`availableForSale: false`**; native collection template may eventually show three live cards when collection URL stops 404-ing — **either** path must stay non-purchasable.
- **21AR** authenticated capture: **404** title, **0** harness-counted product cards (fallback markup may not match `.product-card` selector) — **PASS WITH NOTES**, not **FAIL**, under PO contract.
- **Future slice 21CC:** unify routing (native `collection.json` vs 404 fallback), ensure grid visibility and harness selectors align, re-run QA.

## Safety findings

| Check | Result |
| --- | --- |
| Add to Cart / Buy Now enabled | **PASS** — no active enabled controls on PDP/search/collection contracts reviewed |
| Checkout / payment / customer paths | **PASS** — no active checkout/customer links in **21AR** PDP captures |
| Cart / account / wishlist enablement | **PASS** — deferred/disabled chrome (homepage **21BQ**) |
| `href="#"` active links | **PASS** on homepage (**21BQ**); collection/search/PDP templates use real URLs or disabled controls |
| Misleading final supplier/pricing/delivery | **PASS WITH NOTES** — pilot/trust copy present on CJ PDPs; search static cards use generic demo names (misleading catalogue, not final claims) |
| Newsletter capture | **PASS** — remains disabled |
| Password/secrets in repo | **PASS** — none stored |

## Gaps requiring future implementation

1. **Slice 21CB — live search results (preview-safe):** wire `search.results` / honest empty state; honour URL query; keep non-purchasable CTAs; remove static unrelated demo products for real queries like **`organiser`**.
2. **Slice 21CC — controlled-pilot collection route clarity:** align Shopify collection visibility with theme (native collection grid vs **404** fallback); verify three CJ members render consistently; update QA selectors.
3. **Optional Slice 21CD — department collection messaging:** when collections mix **13I** legacy preview SKUs with empty states, tighten copy so reviewers are not directed to stale/non-pilot merchandise.

## Recommended next implementation slice

**Slice 21CB — live search results (preview-safe)** — highest reviewer impact after homepage route honesty; search is explicitly in the walkthrough and currently the most misleading non-purchasable surface.

## Strict confirmations

- **No** theme edit, **no** Shopify Admin mutation, **no** publish, **no** preview-theme push, **no** product visibility/publication change, **no** checkout/payment/customer-order enablement, **no** product import/sync, **no** app install, **no** media enablement in this slice.
- **`artifacts/`** and **`zadropshipping/`** not committed; **no** passwords, cookies, tokens, HAR, trace, video, or customer/order/payment data stored.

## Next owner

**Senior Full-Stack Software Architect** — plan **Slice 21CB** (search) and **Slice 21CC** (`controlled-pilot` routing/grid) for Product Owner approval before implementation.
