# Mzansi Select Shopify MVP Theme

**Document Type:** Project Control  
**Prepared:** 2026-04-28  
**Owner:** Slice 1 implementation pass  
**Status:** Slice 1 foundation implemented  
**Version:** 1.0  
**Source of Truth:** `mzansi-select-theme.html`

## Project name

Mzansi Select Shopify MVP Theme Conversion

## Current active pass

Slice 1 - repo/theme foundation and global shell

## Source of truth

The approved frontend source of truth for this project is `D:\dev\mzansi-select-shopify\mzansi-select-theme.html`.

All future Shopify implementation work must preserve the approved visual design and structure represented by this file.

## Current status

Documentation extraction pass completed.

Technical architecture inspection completed.

Slice 1 foundation implementation completed.

Current repo inspection indicates:

- The working directory contains the approved static HTML source file, documentation artefacts, and the new Slice 1 Shopify theme foundation.
- Git is now initialized in `D:\dev\mzansi-select-shopify`.
- Native Shopify theme folders now exist: `layout`, `config`, `templates`, `sections`, `snippets`, `assets`, and `locales`.
- Slice 1 implementation intentionally stops at the global shell and does not perform homepage section conversion.

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
- minimal Shopify theme shell scaffolding
- no homepage Liquid conversion yet
- no product data wiring
- no Shopify deployment activity

## Approved scope

Slice 1 scope is limited to:

- Git initialization
- safe ignore rules
- native Shopify theme folder creation
- layout shell creation
- minimal theme settings schema
- global shell CSS extraction
- shell placeholder sections/snippet
- documentation updates

## Critical constraints

- `mzansi-select-theme.html` remains the approved frontend source of truth.
- No redesign is allowed.
- No homepage Liquid conversion is included in Slice 1.
- No product import, Shopify push, publish, checkout customization, multi-country logic, or advanced personalization is allowed in this slice.
- No unnecessary tooling or package/build system has been introduced.

## Decisions made

- Git was initialized locally because the folder was not already a repository.
- Theme structure was created using native Shopify folders only.
- `layout/theme.liquid` owns only the persistent shell and `{{ content_for_layout }}`.
- `assets/theme.css` was intentionally limited to approved global/base and shell extraction rather than homepage content styling.
- Shell placeholders preserve approved class names and brand language where practical, while leaving full data wiring and deeper template work for later slices.
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

## Handoff queue

- Review Slice 1 shell fidelity against the approved HTML.
- Decide whether fonts remain remote-hosted or move into managed theme assets.
- Decide the minimal template set to add in Slice 2 before homepage composition work begins.
- Approve the first homepage conversion slice: hero, category strip, and reusable section-heading/product-card foundations.

## Final handoff summary

This pass now includes the reversible Slice 1 theme foundation: Git initialization, native Shopify folders, a minimal global shell layout, minimal shell settings, shell placeholder sections/snippet, and base shell CSS extraction. The approved HTML remains unchanged, and homepage conversion, data wiring, and secondary template implementation remain deferred.

---

**Footer Standard For This Pass:** Slice 1 foundation implemented. Approved source HTML unchanged. Minimal Shopify theme foundation files added intentionally. Repo-level documentation standard approval remains pending because no prior standard was found in the inspected workspace.
