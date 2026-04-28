# Mzansi Select Shopify MVP Theme

**Document Type:** Project Control  
**Prepared:** 2026-04-28  
**Owner:** Theme Check blocker fix pass  
**Status:** Theme Check blocker fix implemented for preview readiness  
**Version:** 1.0  
**Source of Truth:** `mzansi-select-theme.html`

## Project name

Mzansi Select Shopify MVP Theme Conversion

## Current active pass

Theme Check blocker fix pass for safe unpublished Shopify preview readiness

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
- Theme Check preview blockers remediated locally for the affected homepage and collection files only
- no dynamic product data wiring
- no Shopify deployment activity
- accepted Slice 2.5 QA review results recorded against commit `63dc32dd20ef921d92dff993f83071a4d3666de6`
- accepted Slice 2.6 closure recorded at commit `3a540ebdab2db093ed5cd76def4f7ca3e3878a3a`
- accepted Slice 3.5 homepage QA review results recorded against commit `9066067d8699dfadfb0b012a8f038a34c6537fb5`
- accepted Slice 3.6 closure recorded at commit `0044634b469b1b39bcc85e0064536abdbb64f248`

## Approved scope

This pass is limited to:

- fixing only Shopify Theme Check blocking errors
- adding image `width` and `height` attributes to the affected placeholder images
- shortening the collection section schema name to a valid value
- documenting the accepted DevOps block state and blocker-fix status

## Critical constraints

- `mzansi-select-theme.html` remains the approved frontend source of truth.
- No redesign is allowed.
- No product import, Shopify push, publish, checkout customization, multi-country logic, advanced personalization, or supplier integration is allowed in this pass.
- No Shopify login, theme list, or preview theme creation is allowed in this pass.
- No dynamic product wiring is included in this pass.
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
- Theme Check remediation in this pass is limited to image dimension attributes and the shortened collection schema name.
- RemoteAsset warnings remain deferred and were not broadened or cleaned up in this pass.

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
- Homepage is now implemented as a static-safe composition foundation, but collection, PDP, search, cart, and support template implementation remain deferred.
- Homepage product cards, arrivals, and promo surfaces currently rely on static-safe source-derived content and still require later approval before dynamic data wiring.
- Dynamic product wiring remains deferred.
- Product import remains deferred.
- PDP, search, cart, legal/support, and 404 templates remain deferred.
- Broader responsive QA remains pending.
- Shopify preview and publish remain unapproved.
- Real collection product data wiring, sorting, filtering, and pagination remain deferred.
- RemoteAsset warnings for Google Fonts and remote image URLs remain open by design.

## Handoff queue

- Review the Theme Check blocker-fix result against the allowed narrow scope.
- Approve whether the combined Slice 4 plus blocker-fix worktree should be committed together before returning to DevOps for a new unpublished preview attempt.
- Keep product import, broader responsive QA, Shopify preview/publish, RemoteAsset cleanup, and richer collection behaviors deferred until explicitly approved.

## Final handoff summary

This pass keeps the accepted Slice 4 foundation intact and applies only the Theme Check blocker fixes required for a later safe unpublished preview attempt. The approved HTML remains unchanged, no store-side Shopify action occurred, blocking image-dimension and schema-name issues were remediated, and RemoteAsset warnings plus broader implementation work remain deferred.

---

**Footer Standard For This Pass:** Theme Check blocker fix implemented for preview readiness. Approved source HTML unchanged. Changes remain limited to required image dimensions, collection schema-name remediation, and documentation within the agreed blocker-fix scope.
