# Mzansi Select Shopify MVP Theme

**Document Type:** Project Control  
**Prepared:** 2026-04-28  
**Owner:** Slice 2.6 documentation closure pass  
**Status:** Slice 2.5 QA review accepted - PASS WITH NOTES  
**Version:** 1.0  
**Source of Truth:** `mzansi-select-theme.html`

## Project name

Mzansi Select Shopify MVP Theme Conversion

## Current active pass

Slice 2.6 - docs-only QA closure documentation for Slice 2.5

## Source of truth

The approved frontend source of truth for this project is `D:\dev\mzansi-select-shopify\mzansi-select-theme.html`.

All future Shopify implementation work must preserve the approved visual design and structure represented by this file.

## Current status

Documentation extraction pass completed.

Technical architecture inspection completed.

Slice 1 foundation implementation completed.

Slice 2 global chrome refinement completed.

Slice 2.5 global chrome design/QA fidelity review completed and accepted as PASS WITH NOTES.

Current repo inspection indicates:

- The working directory contains the approved static HTML source file, documentation artefacts, and the new Slice 1 Shopify theme foundation.
- Git is now initialized in `D:\dev\mzansi-select-shopify`.
- Accepted Slice 1 baseline commit is `19fe316baad455220ab7d9a1305d2ba5a8bc7715`.
- Accepted Slice 2 reviewed commit is `63dc32dd20ef921d92dff993f83071a4d3666de6` with message `feat: refine Shopify global chrome foundation`.
- Native Shopify theme folders now exist: `layout`, `config`, `templates`, `sections`, `snippets`, `assets`, and `locales`.
- Slice 2.5 confirmed the approved HTML remained unchanged and the repo ended clean on `master`.
- No Shopify push, publish, product import, homepage conversion, or product/data wiring was introduced during Slice 2.5 review.

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
- no homepage Liquid conversion yet
- no product data wiring
- no Shopify deployment activity
- accepted Slice 2.5 QA review results recorded against commit `63dc32dd20ef921d92dff993f83071a4d3666de6`
- clean `master` state after the accepted QA review

## Approved scope

Slice 2.6 scope is limited to:

- recording the accepted Slice 2.5 QA outcome in documentation only
- documenting the reviewed commit and source-hash confirmation
- documenting deferred items and unresolved review notes
- leaving theme implementation unchanged

## Critical constraints

- `mzansi-select-theme.html` remains the approved frontend source of truth.
- No redesign is allowed.
- No homepage Liquid conversion is included in Slice 2.
- No product import, Shopify push, publish, checkout customization, multi-country logic, or advanced personalization is allowed in this slice.
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

## Next recommended owner

Product Owner

## Risks / unknowns

- No existing repo documentation standard was found, so this pass establishes an interim metadata/header/footer convention for the two new documents only.
- No explicit mobile or tablet breakpoints are defined in the approved HTML/CSS.
- Only the homepage and lightweight interaction mocks are represented in the source HTML; collection, product, search, cart, legal, support, and 404 page layouts require implementation confirmation where the source does not show exact structures.
- The source uses externally hosted Google Fonts and remote image URLs, which require implementation decisions for Shopify delivery.
- The source contains simulated cart and newsletter interactions only, not production Shopify data wiring.
- `templates/` and `locales/` exist but remain intentionally unimplemented pending later slices.
- Chrome responsiveness beyond the approved desktop-first source remains deferred until broader template/page implementation decisions are made.
- Font hosting remains deferred pending implementation approval.
- Toast, cart, and newsletter wiring remain deferred pending later implementation slices.
- Homepage, collection, PDP, search, cart, and support template implementation remain deferred.

## Handoff queue

- Review and approve the recorded Slice 2.5 PASS WITH NOTES closure.
- Decide whether to authorize the next implementation slice after documentation closure.
- Decide whether fonts remain remote-hosted or move into managed theme assets.
- Decide the minimal template set to add before homepage composition work begins.
- Keep responsive behaviour, toast/cart/newsletter wiring, and secondary template rollout deferred until explicitly approved.

## Final handoff summary

This pass now records the accepted Slice 2.5 QA closure for the Slice 2 chrome refinement commit. The approved HTML remains unchanged, no homepage conversion or product/data wiring was introduced, no Shopify push/publish/product import occurred, and the next decision remains pending Product Owner approval.

---

**Footer Standard For This Pass:** Slice 2.5 QA review accepted as PASS WITH NOTES. Approved source HTML unchanged. Slice 2.6 changes are documentation-only and record no implementation, deployment, or data-wiring expansion beyond the agreed chrome scope.
