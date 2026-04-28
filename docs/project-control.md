# Mzansi Select Shopify MVP Theme

**Document Type:** Project Control  
**Prepared:** 2026-04-28  
**Owner:** Slice 2 implementation pass  
**Status:** Slice 2 global chrome refinement implemented  
**Version:** 1.0  
**Source of Truth:** `mzansi-select-theme.html`

## Project name

Mzansi Select Shopify MVP Theme Conversion

## Current active pass

Slice 2 - global chrome refinement

## Source of truth

The approved frontend source of truth for this project is `D:\dev\mzansi-select-shopify\mzansi-select-theme.html`.

All future Shopify implementation work must preserve the approved visual design and structure represented by this file.

## Current status

Documentation extraction pass completed.

Technical architecture inspection completed.

Slice 1 foundation implementation completed.

Slice 2 global chrome refinement completed.

Current repo inspection indicates:

- The working directory contains the approved static HTML source file, documentation artefacts, and the new Slice 1 Shopify theme foundation.
- Git is now initialized in `D:\dev\mzansi-select-shopify`.
- Accepted Slice 1 baseline commit is `19fe316baad455220ab7d9a1305d2ba5a8bc7715`.
- Native Shopify theme folders now exist: `layout`, `config`, `templates`, `sections`, `snippets`, `assets`, and `locales`.
- Slice 2 remains limited to refinement of global chrome only and does not perform homepage section conversion.

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

## Approved scope

Slice 2 scope is limited to:

- refinement of the existing global chrome only
- tighter fidelity for top bar, header, navigation, trust bar, footer, and toast shell
- chrome-only CSS extraction updates
- documentation updates

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

## Next recommended owner

Senior Full-Stack Software Architect

## Risks / unknowns

- No existing repo documentation standard was found, so this pass establishes an interim metadata/header/footer convention for the two new documents only.
- No explicit mobile or tablet breakpoints are defined in the approved HTML/CSS.
- Only the homepage and lightweight interaction mocks are represented in the source HTML; collection, product, search, cart, legal, support, and 404 page layouts require implementation confirmation where the source does not show exact structures.
- The source uses externally hosted Google Fonts and remote image URLs, which require implementation decisions for Shopify delivery.
- The source contains simulated cart and newsletter interactions only, not production Shopify data wiring.
- `templates/` and `locales/` exist but remain intentionally unimplemented pending later slices.
- Chrome responsiveness beyond the approved desktop-first source remains deferred until broader template/page implementation decisions are made.

## Handoff queue

- Review Slice 2 chrome fidelity against the approved HTML.
- Decide whether fonts remain remote-hosted or move into managed theme assets.
- Decide the minimal template set to add in Slice 3 before homepage composition work begins.
- Approve the first homepage conversion slice: hero, category strip, and reusable section-heading/product-card foundations.

## Final handoff summary

This pass now includes the accepted Slice 1 baseline plus Slice 2 chrome refinement. The approved HTML remains unchanged, the global shell more closely matches the approved storefront source, and homepage conversion, product/collection implementation, data wiring, and secondary template implementation remain deferred.

---

**Footer Standard For This Pass:** Slice 2 chrome refinement completed. Approved source HTML unchanged. Changes remain limited to global shell refinement and documentation within the agreed slice scope.
