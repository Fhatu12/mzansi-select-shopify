# Project Control Update - Slice 21HG

Date: 2026-05-28

## Objective
Classify all current live Shopify products into defined store departments and document mappings without mutating store data.

## Execution summary
- Verified live theme visibility context for `mzansiselect.myshopify.com` with live theme `#162429075681`.
- Executed read-only Admin API export using authenticated CLI domain `sikhwarigroupdev.myshopify.com`.
- Captured raw export artifacts (JSON and CSV) under the required WINQA artifacts route.
- Export result returned zero products (`productsCount: 0`), so no per-product department mapping could be performed.
- Produced slice classification document with full department list, zero-count mapping state, and follow-up recommendations.

## Decision
Status: blocked by empty product dataset in authenticated Admin store context.
Recommendation: confirm target Admin store/catalogue linkage, then rerun Slice 21HG classification against the store that contains live catalogue products.

---

## Project Control Update - Slice 21HG-B (Public Storefront Catalogue)

Date: 2026-05-28

### Objective
Classify all live customer-facing products into departments using the public storefront catalogue after Admin API returned zero products in Slice 21HG.

### Execution summary
- Used read-only public endpoint: `https://mzansiselect.myshopify.com/products.json?limit=250`.
- Saved raw output to `artifacts/catalogue/slice-21hg-b-products.json`.
- Extracted product fields (`title`, `handle`, `product_type`, `vendor`, `tags`, first variant `price`) for classification support.
- Classified every live product into exactly one primary department.
- Produced mapping report: `docs/catalogue/slice-21hg-b-public-product-department-classification.md`.

### Verdict
Status: completed.

### Department counts
- The Retro Vault: Consoles & Classics: 8
- Games & Toys: 11
- Tech Accessories: 17
- Office & Desk: 1
- Kitchen & Storage: 2
- Home & Living: 0
- Unclassified / Needs review: 2

### Safety confirmation
No mutation was performed on products, prices, collections, tags, checkout/payment, apps, or theme files.
## 2026-05-28 - Slice 21HH (Department collection apply)

Applied approved 21HG-B product-to-department mapping to Shopify manual collections via Windows Shopify CLI against `sikhwarigroupdev.myshopify.com`.

Completed:
- Ensured department collections exist (created missing: Tech Accessories, Office & Desk, Kitchen & Storage, Home & Living)
- Published all six department collections to Online Store
- Reconciled mapped product membership to exact one-primary-department among six department collections
- Excluded both Unclassified/Needs review products from all six public department collections
- Verified final department counts match expected: 8/11/17/1/2/0
- Verified collection routes return 200 on customer-facing store

Notes:
- No product content/price/media mutations performed.
- No theme push, checkout/payment, app install, or domain changes performed.
- Raw operation outputs were saved under local Windows repo `artifacts/` per runbook.
- Automated smoke-string checks for commerce safety were inconclusive/noisy; manual browser QA is still required for final UX assertions.

## 2026-05-28 - Slice 21HI (Product wording cleanup approval pack)

Objective:
- Review current live product wording from the public storefront catalogue and prepare cleaned, customer-ready copy for Product Owner approval, without mutating Shopify.

Execution summary:
- Read-only source used: `https://mzansiselect.myshopify.com/products.json?limit=250`.
- Saved raw fetch to `artifacts/catalogue/slice-21hi-products-raw.json`.
- Reviewed 41 products and extracted title, handle, description/body, plus available product metadata.
- Drafted concise, factual South African English wording proposals in:
  - `docs/catalogue/slice-21hi-product-wording-cleanup-approval-pack.md`
- Flagged products with risky or unclear claims as `needs review` for Product Owner decision before any Shopify updates.

Safety confirmation:
- No Shopify Admin/product mutation was performed.
- No changes to prices, collections, theme files, checkout/payment settings, or apps.
- Artifacts retained under `artifacts/` and left uncommitted.

## 2026-05-28 - Slice 21HJ-A handle reconciliation
- Scope: read-only reconciliation of 18 approved 21HI handles to live Shopify Admin product IDs.
- Public catalogue products: 41.
- Admin catalogue products: 41.
- Approved checked: 18.
- Matched: 18.
- Unresolved: 0.
- Safety: No product mutations performed; safe to retry updates using verified Admin IDs only.


## 2026-05-31 - Slice 21HK (Product reset checkpoint before AutoDS rebuild)

Objective:
- Record Product Owner decision to replace current live catalogue with fresh AutoDS products, and archive a pre-reset product snapshot before deletion/rebuild execution.

Execution summary:
- Fetched public storefront catalogue (read-only): `https://mzansiselect.myshopify.com/products.json?limit=250`.
- Archived raw snapshot to `artifacts/catalogue/slice-21hk-current-products-before-autods-reset.json`.
- Snapshot count at checkpoint: **43 products**.
- Recorded checkpoint and implications in `docs/catalogue/slice-21hk-autods-product-reset-checkpoint.md`.

Decision notes:
- 21HI/21HJ copy cleanup stream is paused/obsolete for the outgoing catalogue.
- Product-to-department mapping must be recalculated after AutoDS import produces the new catalogue.

Safety confirmation:
- No product, price, collection, checkout/payment, app, or theme mutation was performed.

## 2026-05-31 - Slice 21HL (PDP gallery arrow main-image sync)

Objective:
- Fix PDP gallery previous/next controls so main image updates correctly on desktop/mobile without changing catalogue or commerce state.

Execution summary:
- Inspected `sections/main-product-foundation.liquid`, `assets/product-gallery.js`, and `assets/product-options-preview.js`.
- Identified root cause: gallery navigation updated `img.src` but not `img.srcset` on main image.
- Implemented minimal fix in `assets/product-gallery.js` to sync `srcset` during gallery index changes.
- Preserved variant-featured-image behavior by leaving thumbnail-driven variant sync unchanged.
- Pushed only changed theme asset to live theme `#162429075681` using `--only` and `--allow-live`.
- Verified three target PDPs still render gallery controls with five-thumbnail cap.

Safety confirmation:
- No product, price, media, collection, app, checkout/payment, domain, or Supplier verified changes were made.
- No artifacts were committed.

## 2026-05-31 - Slice 21HM (PDP colour/variant selector sync)

Objective:
- Fix PDP colour/variant selector behavior so option selection and variant media sync are reliable before AutoDS catalogue rebuild.

Execution summary:
- Inspected `assets/product-options-preview.js`, `sections/main-product-foundation.liquid`, and verified 21HL gallery logic in `assets/product-gallery.js` remained intact.
- Identified brittle exact URL-string match for variant featured image to gallery thumbnails as root cause.
- Added `featuredMediaId` to variant JSON payload in Liquid.
- Updated variant gallery sync to resolve thumbnail by media ID first, with normalized URL fallback.
- Preserved soft-fail when variant media is not part of rendered capped gallery.
- Pushed only changed files to live theme `#162429075681`.
- Verified target PDPs still render gallery controls and options with 5-thumbnail cap.

Safety confirmation:
- No mutations to products, prices, variants, product media, collections, checkout/payment, domain, apps, or Supplier verified.
- No artifacts committed.

## 2026-05-31 - Slice 21HN (Wishlist hearts/header sync)

Objective:
- Ensure product/card and PDP wishlist hearts stay in sync with top/header wishlist state and persist locally.

Execution summary:
- Confirmed live theme target: `Mzansi Select MVP Restored` `#162429075681`.
- Found root cause: header/mobile wishlist indicators were static markup without JS state hooks.
- Added header/mobile/bottom saved-state data hooks and live count badges.
- Extended `assets/wishlist-local.js` to update header count/active state on init, section load, pageshow, and each toggle.
- Kept local/browser-only wishlist storage (`mzansi-wishlist-v1`) and product-handle identity.
- Pushed only changed theme files to live theme with `--allow-live`.

Safety confirmation:
- No product, price, media, collection, checkout/payment, domain, app, or Supplier verified changes.
- No artifacts committed.


- 2026-05-31: Slice 21HO-WIN inspected top/header wishlist capture behavior on live storefront. Result: FAIL (no dedicated saved-items route/view; unstable/potentially non-persistent captured list behavior). See docs/qa/slice-21ho-top-wishlist-captured-items.md.

## 2026-05-31 - Slice 21HP (Local wishlist drawer implementation)

Objective:
- Implement a reliable local browser-only saved-items wishlist with a usable header/mobile drawer.

Execution summary:
- Confirmed live theme target `Mzansi Select MVP Restored` `#162429075681`.
- Identified 21HO failure root cause:
  - local wishlist parsing lacked robust sanitize/migrate/merge guarantees.
  - header/mobile saved indicators were non-interactive spans with no view/drawer action.
- Implemented robust local storage handling in `assets/wishlist-local.js` for `mzansi-wishlist-v1` with unique-by-handle migration and stable add/remove merge behavior.
- Added saved-items drawer/modal surface and open triggers in header/mobile/bottom navigation.
- Added remove actions, empty state, close/backdrop/escape handling, and count/heart cross-sync.
- Pushed only changed theme files to live theme using `--allow-live`.

Safety confirmation:
- No product, price, media, collection, app, checkout/payment, Supplier verified, or domain mutation.
- No account/customer dependency introduced.
- No artifacts committed.

## 2026-05-31 - Slice 21HQ (Wishlist drawer stacking fix)

Objective:
- Ensure saved-items wishlist drawer renders above top banner/header/navigation layers on desktop and mobile.

Execution summary:
- Confirmed live theme target `Mzansi Select MVP Restored` `#162429075681`.
- Identified root cause: `.wishlist-drawer` z-index was lower than existing header/nav/overlay layers.
- Applied minimal CSS-only fix in `assets/theme.css` by raising `.wishlist-drawer` z-index to sit above known UI layers.
- Preserved all 21HP local wishlist storage and drawer interaction behavior.
- Pushed only changed file to live theme with `--allow-live`.

Safety confirmation:
- No product, price, media, collection, app, checkout/payment, domain, or Supplier verified changes.
- No artifacts committed.

## 2026-05-31 - Slice 21HR (Wishlist drawer mini images)

Objective:
- Add visual mini product images to local saved-items wishlist drawer for faster product recognition.

Execution summary:
- Confirmed live theme target `Mzansi Select MVP Restored` `#162429075681`.
- Identified missing feature: button payload lacked image data and drawer renderer had no thumbnail output.
- Added `data-product-image` in `snippets/wishlist-button.liquid` sourced from product featured media.
- Updated `assets/wishlist-local.js` drawer item renderer to display thumbnail image or initial fallback if image is unavailable.
- Added thumbnail/fallback/title alignment styles in `assets/theme.css`.
- Preserved 21HP localStorage model and 21HQ stacking behavior.
- Pushed only changed theme files with `--allow-live`.

Safety confirmation:
- No product, price, media, collection, app, checkout/payment, domain, or Supplier verified changes.
- No artifacts committed.

- 2026-05-31: Slice 21HS-WIN live QA passed for wishlist drawer mini-images (3 add, persist, remove, mobile, and safety checks documented).

- 2026-05-31: Slice 21HT-WIN completed. Applied approved department organisation via collection-only mutations (audit-safe matching, publish, add/remove, counts/routes/smoke all passed).

## Imported remote-only history notes (non-conflicting)

- **Decision:** accepted by the Product Owner as **PASS WITH NOTES**.
- **Evidence folder:** **`artifacts/qa/slice-15p-clean-mobile-readiness-rerun/20260509-070620/`**.
- **Preview theme tested:** **`151207542967 / Mzansi Select MVP Preview / unpublished`**.
- **Authentication gate:** no route was measured on **`/password`**.
- **Coverage:** all **20** required routes were tested, including **`/search?q=strainer&type=product`**; required mobile/tablet viewports **`360x800`**, **`390x844`**, **`414x896`**, and **`768x1024`** passed; optional **`1440x1000`** desktop baseline also ran.
- **Overflow result:** page-level horizontal overflow is resolved across all required mobile/tablet viewports; the previous **`861px`** topbar / nav signature is gone and **`max_overflow_px=0`** across all required routes/viewports.
- **Regression checks preserved in QA evidence:** **Slice 14B** department routing remains intact, **Slice 14C** wishlist honesty remains intact, **Slice 14D** homepage card-to-PDP navigation remains intact, PDP preview-only safety remains intact, and both **`/search`** plus **`/search?q=strainer&type=product`** pass. Mobile shell/global chrome remained usable.
- **Notes recorded:** legal/support link automation expected **`/policies/`** links on home/collection pages, but footer markup routes privacy/terms via **`/pages/about#privacy-policy`** and **`/pages/about#terms`**; dedicated **`/policies/*`** routes still loaded with **HTTP 200** and no overflow. Some off-canvas / drawer / chrome elements still appear in bounding-box reporting, but they do **not** create document-level horizontal overflow.
- **Slice 15A posture:** private preview sharing is re-enabled from the QA mobile-readiness perspective and remains **feedback-only private preview testing**.
- **Guardrails preserved:** **no** public launch approval, **no** checkout/payment testing approval, **no** product import approval, **no** Shopify Admin edit approval, **no** **`Supplier verified`** promotion, **no** final pricing approval, **no** delivery promise approval, and **no** product-claim approval.
- **Next recommended owner:** **Product Owner / user** to execute controlled **Slice 15A** private preview sharing.

## Slice 21GY post-fix rendered PDP and storefront QA (draft `162429075681`) - BLOCKED

- **Decision date:** 2026-05-28
- **Verdict:** **BLOCKED** (rendered storefront assertions not executable in unattended context while preview remained password-gated).
- **Theme confirmation:** `Horizon [live] #158396285153` untouched; `Mzansi Select MVP Restored [unpublished] #162429075681` used as draft target only.
- **Pre-check completed:** `git status --short --branch`; `shopify theme list --store sikhwarigroupdev.myshopify.com`.
- **Routes exercised:** `/?preview_theme_id=162429075681`, `/collections/all?preview_theme_id=162429075681`, `/search?q=retro&type=product&preview_theme_id=162429075681`, `/search?q=mouse&type=product&preview_theme_id=162429075681`, `/pages/contact#business-details?preview_theme_id=162429075681`.
- **PDPs exercised:**
  - `/products/2026-new-retro-gaming-console-with-23-emulators-20-000-built-in-games-4k-hdmi-2-4g-with-dual-wireless-controllers?preview_theme_id=162429075681`
  - `/products/29x29cm-large-chessboard-developing-strategic-thinking-3-in-1-chess-chekers-backgammon-foldable-chess-board-for-kids-adults?preview_theme_id=162429075681`
  - `/products/km320-keyboard-and-mouse-set-waterproof-luminous-game-backlit-keyboard?preview_theme_id=162429075681`
  - `/products/3-in-1-usb-c-hub-type-c-3in-1-pd100w-hdmi4k-30hz-usb3-0?preview_theme_id=162429075681`
- **Observed status:** HTTP `200` reachability confirmed, but storefront rendered responses remained password-wall content (`Please Log In`), so PDP interactive behaviour checks (navigation/back/link interactivity/spinner/gallery/price visibility/Liquid runtime signals), catalogue/search rendered checks, mobile `390x844` overflow checks, and commerce-safety rendered checks are all **blocked** in this pass.
- **Guardrails preserved:** no publish, no password removal, no product/price/domain/app/checkout/payment changes, no live-theme touch, no theme push, no credential/session artifact storage.
- **Publish recommendation:** **fix first / blocked** pending authenticated rendered rerun for this exact draft theme/session context.

## 2026-06-01 - Slice 21HU-WIN (Live store completion readiness audit)

Objective:
- Perform a full read-only live-store completion readiness audit and identify remaining blockers before opening sales/checkout.

Execution summary:
- Audited live storefront `https://mzansiselect.myshopify.com` against live theme context `Mzansi Select MVP Restored #162429075681` with strict read-only constraints.
- Confirmed public catalogue count: 48 products (`/products.json?limit=250`).
- Verified key routes and department collection endpoints return `HTTP 200`; `/checkout` redirects (`302`) and checkout was not enabled.
- Sampled 6 PDPs: gallery arrows present, Product Overview absent, Specifications visible, no spinner/navigation regressions observed.
- Wishlist functional checks passed for add/count/drawer/mini-images; persistence/remove requires one manual confirmation rerun before launch sign-off.
- Logged completion blockers and next-slice recommendation in:
  - `docs/qa/slice-21hu-live-store-completion-readiness-audit.md`

Verdict:
- **PASS WITH BLOCKERS**: browse/trust baseline is stable, but commerce activation remains blocked pending policy + checkout readiness and wishlist persistence closeout.

Safety confirmation:
- No mutations to products, prices, descriptions, collections, theme files, apps, checkout/payment, domain, or Shopify Admin data.
- No artifacts committed.

## 2026-06-01 - Slice 21HV-WIN (Commerce activation readiness pack)

Objective:
- Prepare the commerce activation readiness pack before any checkout/payment enablement.

Execution summary:
- Performed Windows-only read-only storefront verification on `https://mzansiselect.myshopify.com`.
- Confirmed `/`, `/collections/all`, and live department route map (`home-living`, `kitchen-storage`, `office-desk`, `tech-accessories`, `retro-vault-consoles-classics`, `games-toys`) return `HTTP 200`.
- Confirmed public product count remains `48` via `/products.json?limit=250`.
- Confirmed wishlist regression evidence exists and is passing in `docs/qa/slice-21hs-live-wishlist-mini-image-qa.md`.
- Drafted policy requirements pack (shipping/fulfilment, returns/refunds, contact/support, tracking deferred wording, payment/checkout readiness note).
- Drafted step-by-step checkout/payment activation checklist and blocker classification.
- Authored readiness pack doc:
  - `docs/commerce/slice-21hv-commerce-activation-readiness-pack.md`

Verdict:
- **PASS WITH BLOCKERS**: readiness documentation is complete; checkout/payments remain blocked pending must-fix items.

Safety confirmation:
- No checkout/payment enablement.
- No product/price/shipping/domain/app/theme/admin mutation.
- No artifacts committed.

## 2026-06-01 - Slice 21HW-A-WIN (Payment, shipping, and policy decisions pack)

Objective:
- Produce a documentation-only decision pack for payment provider selection, shipping/fulfilment posture, policy drafts, checkout activation checklist, and rollback planning while keeping checkout/payments disabled.

Execution summary:
- Performed Windows-only read-only storefront verification for `https://mzansiselect.myshopify.com`.
- Confirmed `HTTP 200` for `/`, `/collections/all`, and active department collection routes (`home-living`, `kitchen-storage`, `office-desk`, `tech-accessories`, `retro-vault-consoles-classics`, `games-toys`).
- Confirmed product catalogue remains visible on live storefront.
- Documented South Africa-compatible payment option candidates without enabling or connecting any provider.
- Drafted South Africa-first shipping/fulfilment recommendation, conservative delivery wording, AutoDS dependency note, and manual fulfilment risk checklist.
- Drafted customer-ready policy text and internal activation disclaimer.
- Produced full checkout activation checklist including rollback/re-disable plan and post-activation QA.
- Classified risks into must-fix / should-fix / can-defer.
- Authored decision pack doc:
  - `docs/commerce/slice-21hw-a-payment-shipping-policy-decisions.md`

Verdict:
- **PASS WITH BLOCKERS**: decision pack is complete; checkout/payment activation remains blocked pending Product Owner decisions and must-fix completion.

Safety confirmation:
- No checkout/payment enablement.
- No product/price/shipping/domain/app/theme/Admin mutation.
- No artifacts committed.

## 2026-06-01 - Slice 21HW-B-WIN (Commerce decision finalisation, no activation)

Objective:
- Convert the 21HV readiness pack and 21HW-A decision pack into final Product Owner decision options without enabling commerce.

Execution summary:
- Performed Windows-only live storefront availability check for `https://mzansiselect.myshopify.com` and confirmed homepage `HTTP 200`.
- Reviewed source decision docs:
  - `docs/commerce/slice-21hv-commerce-activation-readiness-pack.md`
  - `docs/commerce/slice-21hw-a-payment-shipping-policy-decisions.md`
- Produced final decision finalisation doc with explicit status labels (`Approved`, `Pending Product Owner decision`, `Blocked`) across:
  - payment options, recommended primary/backup provider
  - shipping zones/rates
  - delivery, returns/refunds, support wording
  - test-order and rollback checklists
- Recorded safest first-launch recommendation:
  - South Africa-only shipping
  - conservative delivery wording
  - one primary payment provider
  - no international shipping at launch
  - no checkout activation until provider and policy confirmation
- Authored:
  - `docs/commerce/slice-21hw-b-commerce-decision-finalisation.md`

Verdict:
- **PASS WITH BLOCKERS**: decision finalisation complete; commerce activation remains blocked pending Product Owner approvals.

Safety confirmation:
- No checkout/payment enablement.
- No shipping settings changes.
- No policy publication.
- No product/price/theme/domain/app/Admin mutation.
- No artifacts committed.

## 2026-06-01 - Slice 21HW-C-WIN (Record commerce approvals and execution pack prep)

Objective:
- Record Product Owner commerce approvals and prepare the final execution runbook for controlled activation without mutating Shopify Admin in this slice.

Execution summary:
- Performed Windows-only live storefront verification for `https://mzansiselect.myshopify.com`; homepage returned `HTTP 200`.
- Reviewed prior decision artifacts:
  - `docs/commerce/slice-21hv-commerce-activation-readiness-pack.md`
  - `docs/commerce/slice-21hw-a-payment-shipping-policy-decisions.md`
  - `docs/commerce/slice-21hw-b-commerce-decision-finalisation.md`
- Recorded Product Owner approvals:
  - PayFast primary approved
  - Peach backup approved
  - South Africa-only launch approved
  - Shipping/returns policy publishing approved
  - Controlled activation window approved
- Produced final execution pack including:
  - proposed SA launch shipping rates (R99 metro, R149 regional, free over R1,500) explicitly marked pending final PO rate approval before Admin mutation
  - approved policy publication content
  - Admin execution checklist for policies, shipping config, payment setup, test-order/refund/cancel checks, email checks, rollback plan
  - unavoidable manual actions list (merchant login/KYC/MFA/provider approval screens)
- Authored:
  - `docs/commerce/slice-21hw-c-commerce-activation-execution-pack.md`

Verdict:
- **PASS READY WITH FINAL RATE GATE**: execution pack is ready; final shipping-rate sign-off and PO-present provider onboarding remain blockers before mutation.

Safety confirmation:
- No payment enablement.
- No payment connection.
- No shipping/policy/product/price/theme/domain/app/Admin mutation.
- No artifacts committed.

## 2026-06-01 - Slice 21HW-D-WIN (Approved shipping + policy setup, no payment activation)

Objective:
- Configure approved South Africa shipping and publish approved policies without enabling payment, while respecting PO-present Admin controls.

Execution summary:
- Verified live storefront availability:
  - `/` -> `HTTP 200`
  - `/collections/all` -> `HTTP 200`
  - department routes -> `HTTP 200` (`home-living`, `kitchen-storage`, `office-desk`, `tech-accessories`, `retro-vault-consoles-classics`, `games-toys`)
  - sampled PDP -> `HTTP 200`
- Read required source docs:
  - `docs/commerce/slice-21hv-commerce-activation-readiness-pack.md`
  - `docs/commerce/slice-21hw-a-payment-shipping-policy-decisions.md`
  - `docs/commerce/slice-21hw-b-commerce-decision-finalisation.md`
  - `docs/commerce/slice-21hw-c-commerce-activation-execution-pack.md`
- Updated decision record to replace Metro/Regional proposal with approved launch configuration:
  - Standard South Africa delivery: R99 flat
  - Free delivery over R1,500
  - International shipping disabled
  - No Metro/Regional split at launch
- Prepared PO-present manual Shopify Admin runbook for shipping + policy publication only; no payment activation actions executed.
- Authored:
  - `docs/commerce/slice-21hw-d-shipping-policy-admin-setup.md`

Verdict:
- **PASS WITH MANUAL-ACTION BLOCKERS**: shipping/policy setup content is finalized; live Admin mutation requires PO-present authenticated session.

Safety confirmation:
- No payment provider enabled.
- No checkout/payment collection enabled.
- No product/price/description/domain/theme/app mutation.
- `tools/catalogue/` remains untracked.
