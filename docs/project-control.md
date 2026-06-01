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

## 2026-06-01 - Slice 21HW-E-WIN (PO-present Admin shipping/policy apply) - BLOCKED

Objective:
- Apply approved shipping model and policies in Shopify Admin without enabling payment collection.

Execution summary:
- Verified public storefront health and required routes:
  - `/` 200
  - `/collections/all` 200
  - `/pages/contact` 200
  - Live department routes (from nav) all 200:
    - `/collections/games-toys`
    - `/collections/home-living`
    - `/collections/kitchen-storage`
    - `/collections/office-desk`
    - `/collections/retro-vault-consoles-classics`
    - `/collections/tech-accessories`
  - Sample PDP 200.
- Interactive Shopify Admin mutation steps were not executed in this pass because PO-present manual login/MFA/CAPTCHA is required.

Verdict:
- BLOCKED pending Product Owner manual interactive Admin session.

Safety confirmation:
- No payment activation performed.
- No PayFast enablement performed.
- No Peach Payments enablement performed.
- No changes to products, prices, descriptions, domain, apps, or theme files.

Next recommended slice:
- 21HW-F-WIN for PO-present interactive completion of Admin shipping/policy apply and payment-status verification-only.

## 2026-06-01 - Slice 21HW-F-WIN (PO-present Playwright policy publication only) - BLOCKED

Objective:
- Publish approved Shipping/Returns/Support policies in Shopify Admin via headed Playwright with Product Owner present for login.

Execution summary:
- Prepared policy text from `docs/commerce/slice-21hw-d-shipping-policy-admin-setup.md`.
- Launched headed Playwright to `admin.shopify.com/store/sikhwarigroupdev/settings/policies`.
- Run paused for PO manual login/MFA/CAPTCHA continuation and timed out before continuation input.
- No confirmed policy-save action executed in this pass.

Status outputs:
- PO login completed: no
- Shipping policy published: no
- Returns/refunds policy published: no
- Support/contact policy published: not verified

Safety confirmation:
- No payment provider enabled (PayFast/Peach unchanged).
- No checkout/payment activation action performed.
- No product/price/description/shipping-rate/domain/theme/app mutation performed.

Next recommended slice:
- 21HW-G-WIN for PO-present interactive completion and post-publication storefront policy-link verification.

## 2026-06-01 - Slice 21HW-G-WIN (policy publication via Shopify Admin GraphQL, no Playwright) - BLOCKED

Objective:
- Publish approved SHIPPING_POLICY / REFUND_POLICY / CONTACT_INFORMATION via Shopify Admin GraphQL using Shopify CLI on Windows.

Execution summary:
- Successfully authenticated store scopes `read_legal_policies,write_legal_policies` against `sikhwarigroupdev.myshopify.com`.
- Verified Admin GraphQL connectivity with `shop { name id }`.
- Confirmed `shopPolicyUpdate` exists in schema via introspection.
- Mutation execution attempts failed at CLI argument parsing/syntax boundary in Windows shell (`Unexpected argument`, `Expected Name, found <EOF>`), preventing authoritative policy updates.

Status:
- Shipping policy update: blocked (not executed cleanly)
- Refund policy update: blocked (not executed cleanly)
- Contact information policy update: blocked (not executed cleanly)

Safety confirmation:
- No payment activation actions performed.
- No shipping/product/price/description/domain/theme/app mutations performed.

Next recommended slice:
- 21HW-H-WIN to run a verified mutation transport path and complete policy publication + verification.

## 2026-06-01 - Slice 21HW-H-WIN (manual policy publication verification) - PASS

Objective:
- Read-only verification that manually published shipping/refund/contact policies are publicly visible and wording-compliant.

Execution summary:
- Verified storefront routes return 200: `/`, `/collections/all`, `/pages/contact`, sample PDP.
- Verified public policy pages return 200:
  - `/policies/shipping-policy`
  - `/policies/refund-policy`
  - `/policies/contact-information`
- Confirmed shipping policy includes required wording and shipping model values (`South Africa only`, `R99`, `R1,500`, international not available, conservative delivery/tracking wording).
- Confirmed refund and contact/support policy content is present.

Safety confirmation:
- Read-only verification only.
- No Shopify Admin/policy/payment/product/price/theme/shipping/domain/app mutation performed.

Next recommended slice:
- 21HW-I-WIN for payment-readiness verification-only and controlled activation planning.

## 2026-06-01 - Slice 21HW-I-WIN (PayFast readiness verification only)

Objective:
- Verify storefront readiness and payment setup prerequisites for PayFast/Peach without activating any payment provider.

Execution summary:
- Ran Windows-only read-only verification against live storefront `https://mzansiselect.myshopify.com`.
- Verified required routes returned HTTP 200: `/`, `/collections/all`, `/pages/contact`, `/policies/shipping-policy`, `/policies/refund-policy`, `/policies/contact-information`.
- Verified one PDP route from public products feed returned HTTP 200.
- Did not perform Shopify Admin login or any provider activation/connect action.
- Produced readiness document: `docs/commerce/slice-21hw-i-payfast-readiness-verification.md`.

Verdict:
- Conditional go-forward readiness for a dedicated activation slice with Product Owner present.
- Activation not performed in this slice by design.

Safety confirmation:
- No payment provider activation (PayFast, Peach, or any other).
- No changes to products, prices, shipping, policies, domain, apps, or theme.
- No checkout/payment collection activation by this slice.

## 2026-06-01 - Slice 21HX (Homepage support links and hero tile audit)

Objective:
- Assess homepage category strip support links and hero decorative tile behavior on live theme without mutating storefront or theme state.

Execution summary:
- Confirmed live theme context: `Mzansi Select MVP Restored #162429075681` on `mzansiselect.myshopify.com`.
- Verified category strip support links currently resolve to `/pages/about#shipping`, `/pages/about#returns`, and `/pages/about#faq`.
- Verified `/pages/about` route currently returns `404`, causing the above support links to be broken.
- Verified policy replacements are available: `/policies/shipping-policy` (`200`) and `/policies/refund-policy` (`200`).
- Verified `/pages/faq` currently does not exist (`404`).
- Confirmed hero decorative collage tiles are visual-only (no anchor/button wrappers, no hrefs).
- Produced QA audit report: `docs/qa/slice-21hx-homepage-link-and-hero-tile-audit.md`.

Verdict:
- FAIL (homepage support-link integrity) with clear safe replacement targets identified.

Safety confirmation:
- Read-only pass only; no mutation performed on theme, pages, navigation, products, prices, collections, checkout/payment, apps, or domain.

## 2026-06-01 - Slice 21HY (Homepage support links and FAQ page)

Objective:
- Fix broken homepage support links, create/publish FAQ page, and keep hero decorative tiles visual-only.

Execution summary:
- Confirmed live theme context: `Mzansi Select MVP Restored #162429075681`.
- Updated homepage support hrefs in source:
  - `/pages/about#shipping` -> `/policies/shipping-policy`
  - `/pages/about#returns` -> `/policies/refund-policy`
  - `/pages/about#faq` -> `/pages/faq`
- Updated hero secondary CTA `Shipping info` href to `/policies/shipping-policy`.
- Kept hero decorative tiles visual-only (no new link/button behavior added).
- Pushed only changed theme files to live theme with `--allow-live`.
- Attempted FAQ page creation automation via Shopify CLI Admin API path, but environment lacked `shopify api graphql` command.
- Captured exact manual Admin creation steps and approved FAQ content in QA doc.
- Verified health routes: `/`, `/collections/all`, `/policies/shipping-policy`, `/policies/refund-policy`, `/pages/contact`, and one PDP all returned `200`.
- `/pages/faq` remains `404` until manual page creation is completed.
- Public homepage render still shows legacy `/pages/about#...` links after push (live-render mismatch), so final link-verification acceptance is blocked.

Verdict:
- BLOCKED / PARTIAL.

Safety confirmation:
- No product, price, shipping rate, payment, checkout, domain, app, or hero-tile behavior mutation performed.

## 2026-06-01 - Slice 21HY-B (Active homepage/footer support links)

Objective:
- Fix active rendered homepage and footer support links to shipping/refund policy and FAQ routes on live theme `#162429075681`.

Execution summary:
- Pre-check confirmed live theme: `Mzansi Select MVP Restored #162429075681`.
- Identified root cause in active Liquid help links still using legacy About anchors.
- Updated support links in:
  - `sections/primary-navigation.liquid`
  - `sections/site-footer.liquid`
- Pushed only changed files with:
  - `shopify theme push --store mzansiselect.myshopify.com --theme 162429075681 --allow-live --nodelete --only sections/primary-navigation.liquid --only sections/site-footer.liquid`
- Verified routes return 200 for home, shipping policy, refund policy, FAQ, contact, collections/all, and one sample PDP.
- Verified rendered homepage/footer no longer include `/pages/about#shipping|returns|faq` and now point to required live routes.

Safety confirmation:
- No product, price, shipping-rate, payment-provider, checkout, domain, app-install, or commerce enablement changes were made.
- No decorative hero-tile click behavior was introduced.

## 2026-06-01 - Slice 21HW-J (Payflex checkout verification, no payment)

Objective:
- Verify Payflex checkout readiness without submitting a real payment.

Execution summary:
- Verified required storefront routes return HTTP 200, including one department collection and one PDP.
- Confirmed cart session add via `POST /cart/add.js` for a low-value product variant.
- Confirmed checkout response content includes `Payflex` and excludes `PayFast`/`Peach` in sampled response text.
- Did not submit payment and did not enter any real card details.

Verdict:
- Partial pass: platform payment activation appears ready for Payflex, but storefront UI/interactive checkout verification is still required to fully confirm customer path and shipping display.

Safety confirmation:
- No payment submission.
- No product/price/shipping/theme mutations.
- No activation changes performed for PayPal, PayFast, or Peach.

## 2026-06-01 - Slice 21HW-K (Interactive checkout visual probe)

Objective:
- Visually verify checkout readiness and payment method visibility, stopping before authorization.

Execution summary:
- Ran Windows Playwright probe against live storefront routes and one PDP.
- Confirmed Add to Cart was not visibly available on sampled PDP and product cards.
- Reached checkout via safe backend cart-add fallback for verification continuity.
- Confirmed Payflex and PayPal visible in checkout rendering; PayFast and Peach not visible.
- Stopped before any final payment/authorization action.

Verdict:
- Partial pass: payment-method visibility is clearer, but storefront purchase UI enablement and conclusive shipping-rate rendering verification remain open.

Safety confirmation:
- No real payment submission.
- No real card entry.
- No Shopify Admin mutations.

## 2026-06-01 - Slice 21HW-L (Enable storefront purchase UI)

Objective:
- Enable storefront Add to Cart and cart-to-checkout path on live theme `#162429075681`, with dynamic checkout remaining disabled and no payment authorization.

Execution summary:
- Pre-check confirmed live theme context: `Mzansi Select MVP Restored #162429075681`.
- Identified hard catalogue lock in `sections/main-product-foundation.liquid` force-setting commerce blocked state.
- Re-enabled PDP purchase path by restoring product form submit (`form 'product'`, variant id, quantity default `1`, submit `name="add"`) and conditional availability state.
- Enabled cart routing in header by replacing disabled cart spans with links to `routes.cart_url` in desktop and mobile header.
- Enabled cart-to-checkout action by replacing disabled checkout shell with a cart form submit button (`name="checkout"`) in `sections/main-cart-foundation.liquid`.
- Pushed only changed theme files with `--allow-live` and no publish step:
  - `shopify theme push --store mzansiselect.myshopify.com --theme 162429075681 --allow-live --nodelete --only sections/main-product-foundation.liquid --only sections/main-cart-foundation.liquid --only sections/site-header.liquid`

Verification status:
- PDP Add to Cart visible: Yes (for available variants).
- Product card buy/cart UI visible: No change in this slice (left on existing theme behavior).
- Cart page reachable: Yes.
- Checkout button from cart visible: Yes.
- Dynamic checkout still disabled/absent: Yes.
- Wishlist/gallery regressions: none introduced by changed files (code-path sanity).
- Windows interactive checkout pass (shipping/payment visual confirmation, stop before authorization): pending.

Safety confirmation:
- No product, price, inventory, description, media, collection, shipping-rate, payment-provider, domain, or app-install mutations.
- No payment submission and no card details entered.

## 2026-06-01 - Slice 21HW-M (Interactive checkout shipping and Payflex verification)

Objective:
- Verify live customer checkout path through shipping/payment visibility and stop before authorization.

Execution summary:
- Verified required storefront routes and one PDP are reachable.
- Confirmed PDP Add to Cart visibility and cart page checkout CTA visibility; dynamic checkout remained absent.
- Ran interactive checkout transition from cart, but checkout did not advance to a fillable shipping step in this run (returned to storefront home).
- Captured payment visibility signals from checkout-rendered content: Payflex present, PayPal present, PayFast absent, Peach absent.
- Stopped before any payment authorization and entered no payment credentials.

Verdict:
- Partial pass with blocker: checkout shipping-rate UI verification remains incomplete due to checkout transition/session blocker.

Safety confirmation:
- No real payment submitted.
- No Shopify Admin or catalog/price/shipping/payment configuration mutations.

## 2026-06-01 - Slice 21HW-N (Cart persistence and checkout transition fix)

Objective:
- Restore live cart line persistence and ensure cart-to-checkout transition reaches Shopify checkout without payment authorization.

Execution summary:
- Confirmed live theme target `Mzansi Select MVP Restored #162429075681`.
- Root cause identified:
  - cart template was hardcoded preview content instead of `cart.items`.
  - PDP variant selector JS did not sync selected variant ID into product form hidden input.
- Updated `sections/main-cart-foundation.liquid` to render live `cart.items`, `cart.item_count`, and `cart.total_price`, preserving checkout form submit via `name="checkout"`.
- Updated `assets/product-options-preview.js` to sync variant ID and add-button availability/text with current selected variant.
- Pushed only changed files to live theme using `--allow-live` and `--only` flags.
- Verified via live storefront session/cart endpoints:
  - add-to-cart success (HTTP 200),
  - cart persisted (`item_count=1` and correct line item),
  - `/checkout` transitioned to Shopify hosted checkout URL.

Safety confirmation:
- No payment submitted.
- No card details entered.
- No Payflex authorization attempted.
- No PayPal/PayFast/Peach activation changes.
- No product/price/shipping/domain/app changes.
- No artifacts committed.

## 2026-06-01 - Slice 21HW-O-WIN (Final interactive add-to-cart and checkout QA, stop before payment)

Objective:
- Run final live storefront interactive customer-flow QA from PDP through checkout visibility, and stop before payment authorization.

Execution summary:
- Verified required routes (`/`, `/collections/all`, `/pages/faq`, `/pages/contact`, `/policies/shipping-policy`, `/policies/refund-policy`) return 200.
- Covered one low-priced PDP and one higher-priced PDP from `/collections/all`.
- Confirmed low-priced PDP Add to Cart visibility and cart checkout CTA visibility.
- Confirmed dynamic checkout buttons remained absent.
- Checkout transition remained unstable in this run (did not consistently present fillable contact/shipping form), blocking conclusive shipping-tier validation.
- Payment visibility signals captured at checkout rendering layer: Payflex visible, PayPal visible, PayFast not visible, Peach not visible.
- Mobile sanity: Add to Cart visible, cart route opens, no horizontal overflow on sampled PDP/cart.
- Regression checks: gallery arrow swap PASS, support links PASS, no Liquid errors; wishlist trigger not detected on sampled PDP (not conclusive).

Verdict:
- **PARTIAL PASS WITH BLOCKERS**.

Safety confirmation:
- No real payment submitted.
- No card details entered.
- No Payflex authorization attempted.
- No Shopify Admin mutation.
- No product/price/shipping/theme/domain/app mutation.
- `tools/catalogue/` remains untracked.

Next recommended slice:
- 21HW-P-WIN for checkout session/cart continuity hardening and rerun of shipping-tier + wishlist regression confirmation.

## 2026-06-01 - Slice 21HW-P (Cart UI continuity + checkout progression)

Objective:
- Stabilize theme-level cart UX continuity so PDP add-to-cart, cart line visibility, and checkout progression work with real Shopify cart state.

Execution summary:
- Confirmed live theme target: `Mzansi Select MVP Restored` `#162429075681`.
- Identified root cause: cart line controls were non-functional shell buttons and PDP add-to-cart did not force visible cart progression.
- Added PDP add-to-cart `return_to` hidden input targeting `/cart`.
- Wired cart line controls to Shopify cart actions using `updates[item_key]` and `cart_change` remove URL.
- Preserved Shopify cart total/line rendering and existing checkout submit pattern (`name="checkout"`).
- Pushed only changed theme files to live theme using `--allow-live`.

Safety confirmation:
- No payment submitted.
- No card details entered.
- No Payflex authorization.
- No payment provider, shipping rate, domain, app, product, or price changes.
- Dynamic checkout remains disabled.
