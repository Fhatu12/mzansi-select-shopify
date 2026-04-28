# Mzansi Select Shopify MVP Theme

**Document Type:** Project Control  
**Prepared:** 2026-04-28  
**Owner:** Slice 10.6 docs-only authenticated preview QA closure (Slice 10.5 / 10.5B)  
**Status:** Slice 10.6 docs-only authenticated preview QA closure in progress  
**Version:** 1.0  
**Source of Truth:** `mzansi-select-theme.html`

## Project name

Mzansi Select Shopify MVP Theme Conversion

## Current active pass

Slice 10.6 docs-only authenticated preview QA closure (Slice 10.5 / 10.5B)

## Source of truth

The approved frontend source of truth for this project is `D:\dev\mzansi-select-shopify\mzansi-select-theme.html`.

All future Shopify implementation work must preserve the approved visual design and structure represented by this file.

## Current status

Documentation extraction pass completed.

Technical architecture inspection completed.

Slice 1 foundation implementation completed.

Slice 2 global chrome refinement completed.

Slice 2.5 global chrome design/QA fidelity review completed and accepted as PASS WITH NOTES.

Slice 2.6 docs-only QA closure documentation completed and committed.

Slice 3 homepage composition foundation completed.

Slice 3.5 homepage design/QA fidelity review completed and accepted as PASS WITH NOTES.

Slice 3.6 docs-only homepage QA closure documentation completed and committed.

Slice 4 collection/category template foundation completed.

DevOps safe Shopify preview workflow attempted and correctly blocked before Shopify store access because Theme Check returned blocking errors.

Theme Check blocker fix pass completed.

DevOps Shopify unpublished preview retry completed.

Slice 4.7 unpublished preview acceptance closure completed.

Slice 5 product detail page template foundation completed.

Slice 5.5 product detail page design/QA fidelity review completed and accepted as PASS WITH NOTES.

Slice 6 search/results template foundation completed.

Slice 6.5 search/results design/QA fidelity review completed and accepted as PASS WITH NOTES.

Slice 6.6 docs-only search/results QA closure documentation completed and committed.

Slice 7 cart page/drawer foundation implementation completed.

Slice 7.5 cart page/drawer design/QA fidelity review completed and accepted as PASS WITH NOTES.

Slice 7.6 docs-only cart QA closure documentation completed and committed.

Slice 8 legal/support page foundation completed.

Slice 8.5 legal/support page design/QA fidelity review completed and accepted as PASS WITH NOTES.

Slice 8.6 docs-only legal/support QA closure documentation completed.

Slice 9 404 / generic empty-state foundation completed.

Slice 9.5 404 / generic empty-state design/QA fidelity review completed and accepted as PASS WITH NOTES.

Slice 9.6 docs-only 404 / generic empty-state QA closure documentation completed.

Slice 10 full foundation unpublished preview refresh completed.

Slice 10.5 / 10.5B authenticated Shopify preview QA evidence capture completed and accepted as PASS WITH NOTES.

Current repo inspection indicates:

- The working directory contains the approved static HTML source file, documentation artefacts, and the new Slice 1 Shopify theme foundation.
- Git is now initialized in `D:\dev\mzansi-select-shopify`.
- Accepted Slice 1 baseline commit is `19fe316baad455220ab7d9a1305d2ba5a8bc7715`.
- Accepted Slice 2 reviewed commit is `63dc32dd20ef921d92dff993f83071a4d3666de6` with message `feat: refine Shopify global chrome foundation`.
- Accepted Slice 2.6 closure commit is `3a540ebdab2db093ed5cd76def4f7ca3e3878a3a` with message `docs: record Slice 2.5 QA closure`.
- Accepted Slice 3 reviewed commit is `9066067d8699dfadfb0b012a8f038a34c6537fb5` with message `feat: add Shopify homepage composition foundation`.
- Accepted Slice 3.6 closure commit is `0044634b469b1b39bcc85e0064536abdbb64f248` with message `docs: record Slice 3.5 homepage QA closure`.
- Native Shopify theme folders now exist: `layout`, `config`, `templates`, `sections`, `snippets`, `assets`, and `locales`.
- Slice 2.5 confirmed the approved HTML remained unchanged and the repo ended clean on `master`.
- No Shopify push, publish, product import, homepage conversion, or product/data wiring was introduced during Slice 2.5 review.
- Slice 3 adds the homepage composition foundation in native Shopify theme files without introducing dynamic product wiring or Shopify deployment activity.
- Slice 3.5 confirmed the approved homepage section order and homepage foundation fidelity were acceptable for this slice, and the repo ended clean on `master`.
- Slice 4 adds the collection/category template foundation with static-safe listing and empty-state coverage, without introducing product import or dynamic product wiring.
- DevOps preview workflow confirmed Shopify CLI availability, required theme-file presence, valid JSON, unchanged source HTML, and no store-side actions before Theme Check blocking.
- Theme Check blocking errors were limited to missing `width` and `height` attributes on approved placeholder images plus one overlong collection section schema name.
- The unpublished Shopify preview was reviewed by the user and accepted.
- Slice 5 adds a static-safe product detail page foundation without introducing live product data or checkout/cart behaviour.
- Slice 5.5 confirmed the PDP foundation is visually acceptable for this slice and remains static-safe/visual-only.
- Slice 6 adds a static-safe search/results foundation without introducing live search queries, result loops, or product/cart behaviour.
- Slice 6.5 confirmed the search/results foundation is visually acceptable for this slice and remains static-safe/visual-only.
- Slice 7 adds a static-safe cart foundation without introducing live cart items, cart updates, checkout actions, or product import behaviour.
- Slice 7.5 confirmed the cart foundation is visually acceptable for this slice and remains static-safe/visual-only.
- Slice 8 adds static-safe legal/support page foundations without introducing live contact handling, customer accounts, or final legal publication.
- Slice 8.5 confirmed the legal/support foundations are acceptable as launch-direction placeholder content, global chrome remained unchanged, and the approved source hash remained `894D0F1BF015B68D77F990BCDCA958B4125BFDAEC139EEC79B4FD47D9AE4506F`.
- Slice 8.5 confirmed JSON validation passed for `config/settings_schema.json`, `templates/index.json`, `templates/collection.json`, `templates/product.json`, `templates/search.json`, `templates/cart.json`, `templates/page.json`, and `templates/page.contact.json`.
- Slice 8.5 confirmed Shopify Theme Check passed with zero blocking errors while `24` non-blocking `RemoteAsset` warnings remain open across `8` files.
- Slice 8.5 confirmed no Shopify push, publish, product import, checkout customization, live-store action, final legal sign-off, live policy publication, or customer account/auth/contact backend wiring occurred.
- Slice 9 adds a static-safe 404 page foundation with reusable empty-state presentation and clear recovery links back to shopping, categories, support, and home.
- Slice 9.5 confirmed the 404 template foundation is structurally valid, the generic empty-state pattern remains reusable and visually consistent, recovery links are present, and the approved source hash remained `894D0F1BF015B68D77F990BCDCA958B4125BFDAEC139EEC79B4FD47D9AE4506F`.
- Slice 9.5 confirmed JSON validation passed for `config/settings_schema.json`, `templates/index.json`, `templates/collection.json`, `templates/product.json`, `templates/search.json`, `templates/cart.json`, `templates/page.json`, `templates/page.contact.json`, and `templates/404.json`.
- Slice 9.5 confirmed Shopify Theme Check passed with zero blocking errors while `24` non-blocking `RemoteAsset` warnings remain open across `8` files.
- Slice 9.5 confirmed no Shopify push, publish, login, theme-list, checkout customization, store action, product import, final legal sign-off, live policy publication, customer account/auth/contact backend wiring, or dynamic product/catalogue wiring occurred in the Slice 9 files under review.
- Slice 10 validated final Slice 9 commit `1d9a289b1c5027e22b6ea1a28fbcc04b1c98a95b` with expected subject `feat: add 404 and empty-state foundation` before any Shopify store action.
- Slice 10 confirmed Shopify CLI `3.92.1`, JSON validation passed for `config/settings_schema.json`, `templates/index.json`, `templates/collection.json`, `templates/product.json`, `templates/search.json`, `templates/cart.json`, `templates/page.json`, `templates/page.contact.json`, and `templates/404.json`, and Shopify Theme Check passed with zero blocking errors while `24` non-blocking `RemoteAsset` warnings remain intentionally deferred.
- Slice 10 refreshed the existing unpublished preview theme `Mzansi Select MVP Preview` (`151207542967`) without changing its `unpublished` role, refreshed preview URL `https://dropshippoc.myshopify.com?preview_theme_id=151207542967`, and admin editor URL `https://dropshippoc.myshopify.com/admin/themes/151207542967/editor`.
- Slice 10 confirmed the live theme remained untouched, no publish occurred, no product import occurred, no checkout change occurred, no design changes or dynamic product/catalogue wiring occurred, no final legal publication occurred, and `mzansi-select-theme.html` remained unchanged at SHA-256 `894D0F1BF015B68D77F990BCDCA958B4125BFDAEC139EEC79B4FD47D9AE4506F`.
- Slice 10 evidence was captured in `artifacts/platform/shopify-preview-refresh-slice-10-20260428-203727`, and `artifacts/` remains untracked and must not be committed unless separately approved.
- Slice 10.5B captured authenticated preview screenshots in `artifacts/qa/slice-10-5b-authenticated-playwright-preview/20260428-210501/` using headed Playwright with manual storefront unlock; the password was not requested, printed, or stored.
- Slice 10.5B route coverage captured:
  - `/?preview_theme_id=151207542967`
  - `/collections/all?preview_theme_id=151207542967`
  - `/products/adjustable-laptop-stand?preview_theme_id=151207542967`
  - `/search?preview_theme_id=151207542967`
  - `/cart?preview_theme_id=151207542967`
  - `/pages/contact?preview_theme_id=151207542967` rendered HTTP `404`
  - `/pages/about?preview_theme_id=151207542967` rendered HTTP `404`
  - `/404-check-missing-page?preview_theme_id=151207542967` rendered HTTP `404` as expected for a missing route check
- Slice 10.5B confirmed no Shopify push occurred, no Shopify publish occurred, no live theme overwrite occurred, no product import occurred, no checkout customization occurred, no dynamic product/catalogue wiring occurred, and no defect-fix pass occurred.
- Slice 10.5B confirmed no tracked code/theme/docs files changed during evidence capture, and `artifacts/` remains untracked and must not be committed unless separately approved.

## Scope completed

- Performed the required read-only inspection pass across the current workspace.
- Inspected `mzansi-select-theme.html` as the approved UI/UX source of truth.
- Extracted the homepage information architecture, section order, component patterns, typography, colour tokens, interaction states, and structural layout rules from the approved HTML.
- Searched for an existing Low-Level Design or Technical Specification metadata/footer convention in the current workspace.
- Produced project-control and LLD handoff documentation for Shopify MVP conversion.
- Confirmed the workspace is currently a static HTML plus docs folder, not yet an initialized Git-backed Shopify theme repository.
- Confirmed no Shopify theme folders, theme tooling, or package/build tooling exist in the inspected workspace.
- Completed a read-first technical architecture inspection and identified the recommended first implementation slice for Shopify theme conversion.
- Initialized Git because no `.git` directory existed.
- Added a safe repo-level `.gitignore`.
- Created the native Shopify theme folder structure for Slice 1.
- Added `layout/theme.liquid` with the global shell only: top bar, header, navigation, trust bar, footer, and toast feedback placeholder.
- Added `config/settings_schema.json` with minimal shell-level theme settings only.
- Added `assets/theme.css` containing approved global tokens, base rules, and shell styling extracted from the approved HTML.
- Added structural placeholder shell files in `sections/` and `snippets/`.
- Refined the global chrome to more closely match approved source details including shell IDs, exact chrome text treatment, footer fidelity, and toast shell compatibility.
- Completed Slice 2.5 read-only QA fidelity review against `mzansi-select-theme.html`.
- Recorded Slice 2.5 acceptance as PASS WITH NOTES for the reviewed Slice 2 commit.
- Recorded Slice 2.6 documentation closure and committed it to Git.
- Added `templates/index.json` to represent the approved homepage section order in Shopify theme structure.
- Added homepage foundation sections for hero collage, category strip, featured product grids, promo banner, and new arrivals tiles.
- Added reusable homepage snippets for section headings and static-safe product-card placeholder rendering.
- Extended `assets/theme.css` with homepage-only styles extracted from the approved HTML.
- Kept homepage product surfaces static-safe and did not introduce product import or Shopify product-loop wiring.
- Completed Slice 3.5 read-only homepage QA fidelity review against `mzansi-select-theme.html`.
- Recorded Slice 3.5 acceptance as PASS WITH NOTES for the reviewed Slice 3 commit.
- Recorded Slice 3.6 documentation closure and committed it to Git.
- Added `templates/collection.json` for native Shopify collection/category routing.
- Added `sections/main-collection-foundation.liquid` for collection heading, intro, listing foundation, and empty/no-results state foundation.
- Added `snippets/empty-state.liquid` for reusable empty collection/no-results presentation.
- Extended `assets/theme.css` with collection/category foundation styling only.
- Kept collection/category cards static-safe and did not introduce product import, real product loops, sorting, filtering, or cart wiring.
- Added only the `width` and `height` attributes required to clear Shopify Theme Check blocking image errors.
- Shortened the collection section schema name to `Collection main` to satisfy Shopify Theme Check schema-name limits.
- Recorded user acceptance of the unpublished Shopify preview and current safety state in documentation only.
- Added `templates/product.json` for native Shopify product routing.
- Added `sections/main-product-foundation.liquid` for gallery, title, price, option-shell, quantity shell, support notes, description/spec content, and related placeholder presentation.
- Extended `assets/theme.css` with product detail page foundation styling only.
- Kept PDP content static-safe and did not introduce live product object wiring, product forms, cart add routes, or checkout behaviour.
- Recorded Slice 5.5 acceptance as PASS WITH NOTES for the uncommitted PDP foundation review.
- Added `templates/search.json` for native Shopify search routing.
- Added `sections/main-search-foundation.liquid` for search heading, query summary shell, static-safe results grid, no-results state, and browse/support prompt coverage.
- Extended `assets/theme.css` with search/results foundation styling only.
- Kept search/results content static-safe and did not introduce live search terms, search results, product loops, or cart behaviour.
- Recorded Slice 6.5 acceptance as PASS WITH NOTES for the uncommitted search/results foundation review.
- Added `templates/cart.json` for native Shopify cart routing.
- Added `sections/main-cart-foundation.liquid` for cart heading, line-item shell, order-summary shell, support note, and empty-cart coverage.
- Added `snippets/cart-line-item.liquid` for reusable static-safe cart row rendering.
- Extended `assets/theme.css` with cart foundation styling only.
- Kept cart content static-safe and did not introduce live cart items, cart routes, checkout actions, or real cart update behaviour.
- Recorded Slice 7.5 acceptance as PASS WITH NOTES for the uncommitted cart foundation review.
- Added `templates/page.json` for native Shopify legal/about/support routing.
- Added `sections/main-page-foundation.liquid` for About, Shipping, Returns, Privacy, Terms, and FAQ/support placeholder coverage.
- Added `templates/page.contact.json` for dedicated support/contact routing.
- Added `sections/support-page-foundation.liquid` for support contact, shipping/returns guidance, FAQ, and policy placeholder coverage.
- Extended `assets/theme.css` with legal/support foundation styling only.
- Kept legal/support content structurally ready but clearly non-final, with no live contact backend wiring, no customer account/auth work, and no final legal sign-off implied.
- Recorded Slice 8.5 legal/support QA acceptance as PASS WITH NOTES.
- Recorded Slice 8.6 as a docs-only QA closure pass without expanding the non-doc Slice 8 implementation scope.
- Added `templates/404.json` for native Shopify 404 routing.
- Added `sections/main-404-foundation.liquid` for 404 hero, generic empty-state reuse, and safe recovery-link coverage.
- Extended `assets/theme.css` with 404/generic empty-state foundation styling only.
- Kept 404 content static-safe and did not introduce live catalogue, support backend, checkout, or customer account wiring.
- Recorded Slice 9.5 404/generic empty-state QA acceptance as PASS WITH NOTES.
- Recorded Slice 9.6 as a docs-only QA closure pass without expanding the non-doc Slice 9 implementation scope.

## What must not change

- Look and feel
- Font pairing and typography hierarchy
- Spacing rhythm and container proportions
- Colour system and accent usage
- Visual hierarchy
- Homepage section order and content grouping
- Header, navigation, footer, and trust-language brand feel
- Product-card presentation style
- CTA treatment, hover feel, and premium-but-practical brand tone

## Documentation artefacts

- `docs/project-control.md`
- `docs/lld/mzansi-select-shopify-mvp-theme-v1.md`

## Current product state

The repository is now a Git-initialized Shopify theme foundation with:

- the approved static HTML source retained unchanged
- refined global Shopify chrome scaffolding
- homepage composition foundation implemented in Shopify sections and `templates/index.json`
- collection/category foundation implemented in Shopify sections and `templates/collection.json`
- product detail page foundation implemented in Shopify sections and `templates/product.json`
- search/results foundation implemented in Shopify sections and `templates/search.json`
- cart page foundation implemented in Shopify sections and `templates/cart.json`
- legal/support page foundations implemented in Shopify sections and `templates/page.json` plus `templates/page.contact.json`
- 404 page foundation implemented in Shopify sections and `templates/404.json`
- accepted Slice 9.5 404/generic empty-state QA review results recorded as PASS WITH NOTES
- 404 foundation structure, shared empty-state reuse, recovery links, tone clarity, and visual rhythm were accepted as aligned with the approved storefront direction
- accepted Slice 8.5 legal/support QA review results recorded as PASS WITH NOTES
- legal/support page, support/contact page, About/store promise, shipping/delivery, returns/refunds, privacy/terms placeholder labeling, FAQ/support blocks, and deferred policy-publication notice were accepted as foundation-only launch-direction content
- Theme Check preview blockers remediated locally for the affected homepage and collection files only
- JSON validation passed for `config/settings_schema.json`, `templates/index.json`, `templates/collection.json`, `templates/product.json`, `templates/search.json`, `templates/cart.json`, `templates/page.json`, `templates/page.contact.json`, and `templates/404.json`
- Shopify Theme Check passes with zero blocking errors
- `24` non-blocking `RemoteAsset` warnings remain open across `8` files
- no dynamic product data wiring
- no real customer account, auth, or backend contact-form wiring
- no Shopify deployment activity or live-store action
- no final legal sign-off or live policy publication
- no product import or checkout customization
- legal/support content remains foundation-only and not final legal sign-off
- 404 recovery paths remain static-safe and do not introduce dynamic product/catalogue or support backend behaviour
- accepted Slice 2.5 QA review results recorded against commit `63dc32dd20ef921d92dff993f83071a4d3666de6`
- accepted Slice 2.6 closure recorded at commit `3a540ebdab2db093ed5cd76def4f7ca3e3878a3a`
- accepted Slice 3.5 homepage QA review results recorded against commit `9066067d8699dfadfb0b012a8f038a34c6537fb5`
- accepted Slice 3.6 closure recorded at commit `0044634b469b1b39bcc85e0064536abdbb64f248`
- accepted unpublished preview recorded against preview theme `151207542967`
- accepted Slice 5.5 PDP QA review results recorded at commit `eef7878ed57a307e18c5f15586de074bbf76684e`
- accepted Slice 6.5 search/results QA review results recorded at commit `325e1acdd9448c90923170938ce1a8f85f61d490`
- accepted Slice 7 final foundation committed at `43812244c756fc86d31f1f53952e3d666f72511b`
- `artifacts/` remains untracked and must not be committed unless separately approved
- final Slice 8 implementation commit accepted at `cd276714e7dc5aa53ce966a7dc3c2f1e3a1699b6`
- final Slice 9 implementation commit accepted at `1d9a289b1c5027e22b6ea1a28fbcc04b1c98a95b`
- Slice 10 unpublished preview refresh completed against theme `151207542967`
- Slice 10.5 / 10.5B authenticated preview QA evidence capture accepted as PASS WITH NOTES
- next Product Owner decision pending:
  - accept docs-only closure and commit it
  - decide whether Contact/About `404` availability becomes the next defect/scope slice before launch-readiness or publish consideration

## Preview workflow status

- Slice 4 unpublished preview remains accepted by the user against theme `151207542967`.
- Dynamic product wiring remains deferred after the accepted preview.
- Slice 10 refreshed the existing unpublished preview theme `Mzansi Select MVP Preview` (`151207542967`) at `https://dropshippoc.myshopify.com?preview_theme_id=151207542967`.
- Slice 10 confirmed the live theme remained untouched and the refreshed preview theme remained `unpublished`.
- Slice 10.5B captured authenticated route-level preview evidence for core templates and confirmed no route remained blocked by `/password` after unlock.
- Shopify publish remains unapproved; no publish or live overwrite occurred during Slice 10 preview refresh.
- Product import, checkout customization, final legal sign-off, live policy publication, customer account/auth/contact backend wiring, and dynamic product/catalogue wiring remain deferred after Slice 10 preview refresh.
- No product import, checkout change, final legal publication, or live-store overwrite occurred during the Slice 10 preview refresh.
- `artifacts/` remains untracked and must not be committed unless separately approved.

## Approved scope

Slice 9 scope is limited to:

- native Shopify 404 foundation
- reusable generic empty-state presentation for 404 recovery
- safe recovery links for shopping, categories, support, and home
- 404-only CSS extraction
- documentation updates for Slice 9 implementation state
- documentation updates for Slice 9.5 QA closure state

## Critical constraints

- `mzansi-select-theme.html` remains the approved frontend source of truth.
- No redesign is allowed.
- No product import, Shopify push, publish, checkout customization, multi-country logic, advanced personalization, or supplier integration is allowed in this pass.
- No Shopify push, publish, login, theme list, or preview theme creation is allowed in this pass.
- No dynamic product wiring is included in this pass.
- No real customer account/auth work or backend contact-form handling is included in this pass.
- No final legal sign-off or live policy publication is included in this pass.
- No RemoteAsset cleanup or broad lint cleanup is included in this pass.
- No unnecessary tooling or package/build system has been introduced.

## Decisions made

- Git was initialized locally because the folder was not already a repository.
- Theme structure was created using native Shopify folders only.
- `layout/theme.liquid` owns only the persistent shell and `{{ content_for_layout }}`.
- `assets/theme.css` was intentionally limited to approved global/base and shell extraction rather than homepage content styling.
- Slice 1 was accepted as the baseline at commit `19fe316baad455220ab7d9a1305d2ba5a8bc7715`.
- Shell placeholders preserve approved class names and brand language where practical, while leaving homepage conversion and deeper template work for later slices.
- Slice 2 refinement keeps native Shopify route/cart usage limited to chrome-level behaviour only and does not introduce homepage, product, collection, or cart template implementation.
- Toast, footer, and cart-badge shell identifiers were aligned more closely with the approved HTML to reduce friction for later implementation slices.
- Locale JSON was deferred because Slice 1 does not require it for validity.
- Slice 2.5 QA accepted the reviewed Slice 2 commit as PASS WITH NOTES.
- The approved source hash remained `894D0F1BF015B68D77F990BCDCA958B4125BFDAEC139EEC79B4FD47D9AE4506F` through the accepted QA review.
- One `rg` evidence command failed because of PowerShell quoting, so that exact command output was not captured during Slice 2.5 review.
- Slice 2.6 records the QA closure only and does not alter theme implementation.
- Slice 3 uses `templates/index.json` plus native Shopify sections to mirror the approved homepage order.
- Homepage product cards remain static-safe placeholder components rendered through snippets rather than Shopify product-loop wiring.
- Section-level composition was favored over expanding global theme settings so the approved design can be preserved with minimal configuration drift.
- Accepted global chrome files were left unchanged during Slice 3 because no blocking integration fix was required.
- Slice 3.5 QA accepted the reviewed Slice 3 commit as PASS WITH NOTES.
- The approved source hash remained `894D0F1BF015B68D77F990BCDCA958B4125BFDAEC139EEC79B4FD47D9AE4506F` through the accepted homepage QA review.
- Slice 3.5 confirmed that placeholder/static-safe homepage content is acceptable until dynamic product wiring is explicitly approved.
- Slice 3.6 records the homepage QA closure only and does not alter theme implementation.
- Slice 4 uses `templates/collection.json` plus a single main section to introduce the collection/category page foundation.
- Collection/category listing surfaces reuse accepted homepage snippets and product-card rhythm rather than introducing a new card language.
- Empty and filled collection states are both represented through section settings and a reusable empty-state snippet.
- Accepted global chrome files were left unchanged during Slice 4 because no blocking integration fix was required.
- DevOps preview workflow was accepted as correctly blocked before any Shopify store interaction because Theme Check returned errors.
- Theme Check remediation remained limited to image dimension attributes and the shortened collection schema name.
- RemoteAsset warnings remain deferred and were not broadened or cleaned up.
- The unpublished Shopify preview was subsequently created safely as an unpublished theme and accepted by the user.
- Slice 5 uses `templates/product.json` plus a single main section to introduce the product detail page foundation.
- PDP content remains static-safe and does not use live product objects, product forms, cart add routes, or checkout behaviour.
- Existing snippets for pricing, badges, section headings, and product cards are reused to keep the accepted visual language consistent.
- Slice 5.5 QA accepted the PDP foundation as PASS WITH NOTES.
- Slice 5.5 confirmed `config/settings_schema.json`, `templates/index.json`, `templates/collection.json`, and `templates/product.json` all parse successfully.
- Slice 5.5 confirmed Shopify Theme Check passes with zero blocking errors while `23` non-blocking `RemoteAsset` warnings remain open.
- Slice 5.5 confirmed no Shopify login, theme list, push, preview/store action, publish, checkout change, product import, or dynamic product wiring occurred.
- Slice 6 uses `templates/search.json` plus a single main section to introduce the search/results page foundation.
- Search/results content remains static-safe and does not use live search objects, query loops, product forms, cart routes, or checkout behaviour.
- Existing snippets for section headings, empty states, pricing, badges, and product cards are reused to preserve the accepted visual language.
- Slice 6.5 QA accepted the search/results foundation as PASS WITH NOTES.
- Slice 6.5 confirmed `config/settings_schema.json`, `templates/index.json`, `templates/collection.json`, `templates/product.json`, and `templates/search.json` all parse successfully.
- Slice 6.5 confirmed Shopify Theme Check passes with zero blocking errors while `23` non-blocking `RemoteAsset` warnings remain open.
- Slice 6.5 confirmed no Shopify login, theme list, push, publish, checkout change, product import, or live-store action occurred.
- Slice 6.5 confirmed the existing `sections/site-header.liquid` `search.terms` binding is pre-existing and unchanged.
- Slice 7 uses `templates/cart.json` plus a single main section to introduce the cart page foundation.
- Cart content remains static-safe and does not use live cart items, cart routes, cart forms, checkout URLs, or checkout behaviour.
- Existing snippets for section headings and empty states are reused to preserve the accepted visual language.
- A dedicated cart line-item snippet is introduced only for static-safe row reuse inside the cart foundation.
- Slice 7.5 QA accepted the cart page/drawer foundation as PASS WITH NOTES.
- Slice 7.5 confirmed `config/settings_schema.json`, `templates/index.json`, `templates/collection.json`, `templates/product.json`, `templates/search.json`, and `templates/cart.json` all parse successfully.
- Slice 7.5 confirmed Shopify Theme Check passes with zero blocking errors while `24` non-blocking `RemoteAsset` warnings remain open.
- Slice 7.5 confirmed no Shopify login, theme list, push, publish, checkout change, product import, or live-store action occurred.
- Slice 7.5 confirmed the existing `sections/site-header.liquid` cart route link is pre-existing and unchanged.
- Slice 8 uses `templates/page.json` and `templates/page.contact.json` plus two main sections to introduce generic legal/support and dedicated contact/support page foundations.
- Legal/support content remains static-safe, South Africa-first, and clearly marked as structurally ready rather than legally final.
- Slice 8 does not introduce live contact handling, customer accounts, checkout customization, or policy publication.
- Slice 8.5 QA accepted the legal/support foundation review as PASS WITH NOTES.
- Slice 8.5 confirmed global chrome remained unchanged, placeholder legal/support content remained non-final, and live policy/contact/account behaviour stayed deferred.
- Slice 8.6 records the QA closure only and does not alter theme implementation or `artifacts/` handling.
- Slice 9 uses `templates/404.json` plus a single main section to introduce a calm, recovery-oriented 404 foundation.
- Slice 9 reuses the accepted empty-state surface and preserves the same premium-practical tone, typography, spacing rhythm, and recovery-path clarity already established in collection, search, cart, and legal/support work.
- Slice 9 does not introduce live catalogue loops, support backend wiring, checkout actions, or Shopify deployment activity.
- Slice 9.5 QA accepted the 404/generic empty-state foundation review as PASS WITH NOTES.
- Slice 9.5 confirmed global chrome remained unchanged, the approved source HTML remained unchanged, and no dynamic product/catalogue or support/account backend wiring was introduced in the Slice 9 files.
- Slice 9.6 records the QA closure only and does not alter theme implementation or `artifacts/` handling.

## Next recommended owner

Product Owner

## Risks / unknowns

- No existing repo documentation standard was found, so this pass establishes an interim metadata/header/footer convention for the two new documents only.
- No explicit mobile or tablet breakpoints are defined in the approved HTML/CSS.
- Only the homepage and lightweight interaction mocks are represented in the source HTML; collection, product, search, cart, legal, support, and 404 page layouts require implementation confirmation where the source does not show exact structures.
- The source uses externally hosted Google Fonts and remote image URLs, which require implementation decisions for Shopify delivery.
- The source contains simulated cart and newsletter interactions only, not production Shopify data wiring.
- `locales/` remains intentionally unimplemented pending later slices.
- Chrome responsiveness beyond the approved desktop-first source remains deferred until broader template/page implementation decisions are made.
- Font hosting remains deferred pending implementation approval.
- Toast, cart, and newsletter wiring remain deferred pending later implementation slices.
- Homepage is now implemented as a static-safe composition foundation, and 404 foundation coverage now exists as a static-safe recovery page.
- Homepage product cards, arrivals, and promo surfaces currently rely on static-safe source-derived content and still require later approval before dynamic data wiring.
- Dynamic product wiring remains deferred.
- Product import remains deferred.
- Broader responsive QA remains pending.
- Shopify preview and publish remain unapproved.
- Real collection product data wiring, sorting, filtering, and pagination remain deferred.
- RemoteAsset warnings for Google Fonts and remote image URLs remain open by design.
- `artifacts/` remains untracked and should not be committed unless separately approved.
- Live product media, variants, pricing, stock state, and transactional add-to-cart wiring remain deferred for PDP work.
- Live search terms, result ranking, predictive suggestions, and recovery behaviours remain deferred for search/results work.
- Live cart items, totals, update actions, drawer behaviour, and checkout actions remain deferred for cart work.
- Legal/support foundations are structurally ready, but final legal wording/sign-off, live policy publication, live support/contact/legal-policy behaviour, and customer account/auth/contact backend wiring remain deferred.
- Broader empty-state behaviour beyond the current collection, search, cart, and 404 foundations still needs later approval where live data states are involved.
- Dynamic product/catalogue wiring remains deferred for the Slice 9 404 recovery paths.

## Handoff queue

- Product Owner decision pending on docs-only closure commit for Slice 10.6.
- Product Owner decision pending on whether Contact/About `404` behavior is acceptable for current MVP preview, or becomes a dedicated next slice before launch-readiness/publish consideration.
- Keep `artifacts/` excluded from any Slice 9 commit.
- Keep product import, Shopify push/publish, checkout customization, RemoteAsset cleanup, live contact/backend wiring, final legal sign-off, live policy publication, dynamic product/catalogue wiring, and broader responsive QA deferred until explicitly approved.

## Final handoff summary

This pass records Slice 9.5 404 / generic empty-state QA closure as PASS WITH NOTES in documentation only. The approved HTML remains unchanged, the 404 foundation remains static-safe and visually aligned to the accepted storefront language, Shopify Theme Check is confirmed at zero blocking errors with `24` non-blocking `RemoteAsset` warnings still open across `8` files, no Shopify push/publish/login/theme-list/product import/checkout or live-store action occurred, no final legal or backend support/account wiring was introduced, no dynamic product/catalogue wiring was introduced in the Slice 9 files, and `artifacts/` remains untracked pending any separate approval.

---

**Footer Standard For This Pass:** Slice 9.5 404/generic empty-state QA closure recorded. Approved source HTML unchanged. This docs-only pass records accepted 404/empty-state QA, keeps live catalogue/support behaviour deferred, and preserves untracked `artifacts/` handling within the agreed scope.
