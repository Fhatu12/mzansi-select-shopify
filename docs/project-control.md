# Mzansi Select Shopify MVP Theme

**Document Type:** Project Control  
**Prepared:** 2026-04-29  
**Owner:** Product Owner  
**Status:** Slice 12 docs-only launch-readiness blocker review and next-action plan recorded pending Product Owner acceptance or correction  
**Version:** 1.9  
**Source of Truth:** `mzansi-select-theme.html`

## Project name

Mzansi Select Shopify MVP Theme Conversion

## Current State

- Active slice: Slice 12 docs-only launch-readiness blocker review and next-action plan
- Active owner: Product Owner
- Next owner: Product Owner
- Last accepted slice: Slice 11G.1 docs-only supplier verification blocker recording
- Last committed slice: Slice 11G.1 docs-only supplier verification blocker recording (`618a441037ddfc7558a1b6fbfa24736f89af93cf`)
- Current blockers:
  - Contact/About route availability remains unresolved
  - `/pages/contact` and `/pages/about` rendered HTTP `404` in authenticated unpublished-preview evidence
  - Shopify Admin page resources for `Contact` and `About` still need to be created or verified, including handle, Online Store availability, and template assignment
  - Launch-readiness and any publish decision remain blocked until the required Contact/About page resources are created in Shopify or their existence, handles, visibility, and template assignment are verified
  - Slice 11G supplier verification remains blocked/incomplete because logged-in `CJdropshipping`, `DSers`, and/or `AliExpress` supplier-tool access is required for manual verification
  - All six first-batch products remain `Candidate`, and no product may move to `Supplier verified` until the required evidence is captured
- Deferred items:
  - Slice 10.8 Contact/About store-content setup and preview verification remains deferred/incomplete
  - Product import remains deferred and unapproved
  - Shopify push/publish remains deferred and unapproved
  - Dynamic product/catalogue wiring remains deferred and unapproved
  - Checkout customization remains deferred and unapproved
  - Final legal publication remains deferred and unapproved
- Launch readiness: Blocked by unresolved Contact/About route availability and by unresolved supplier/cost/shipping/content readiness across the planned catalogue
- Product import status: Not approved and not started
- Shopify push/publish status: No Shopify push approved in this pass; no publish approved; no live theme overwrite approved
- Artifacts policy: `artifacts/` must remain untracked and uncommitted unless separately approved
- Last tracker update: 2026-04-29 during Slice 12 docs-only launch-readiness blocker review and next-action plan update
- Tracker status: Updated
- LLD status: Unchanged with reason - no durable catalogue or launch-readiness rule changed; Slice 12 sequences already-known blockers

## Current active pass

Slice 12 docs-only launch-readiness blocker review and next-action plan

## Source of truth

The approved frontend source of truth for this project is `D:\dev\mzansi-select-shopify\mzansi-select-theme.html`.

All future Shopify implementation work must preserve the approved visual design and structure represented by this file.

## Documentation-control rules

- No meaningful slice may be accepted as closed unless `docs/project-control.md` is updated or explicitly marked unchanged with a reason.
- Every handoff must include:
  - `Tracker status: Updated / Unchanged / Needs update before next acceptance`
  - `LLD status: Updated / Unchanged / Needs update before next acceptance`
- Product Owner acceptance is blocked when the agreed tracker or living specification is stale.
- `docs/project-control.md` is the live execution-state tracker for this project.
- `docs/lld/mzansi-select-shopify-mvp-theme-v1.md` is the durable living specification for product, page, catalogue, structure, and launch-readiness requirements.
- Update the LLD only when durable product rules, page behaviour, catalogue rules, or launch criteria change; otherwise mark it unchanged with a reason in the handoff.

## Source inspected

- `mzansi-select-theme.html`
- `docs/project-control.md`
- `docs/catalogue/mzansi-select-25-product-readiness-v1.md`
- `docs/lld/mzansi-select-shopify-mvp-theme-v1.md`
- Existing approved Slice 11G.1 commit history

## Current status

- Slice 9 theme foundation remains the latest completed theme/code implementation baseline.
- Slice 10 unpublished preview refresh remains committed at `e91d529`.
- Slice 10.6 docs-only authenticated preview QA closure remains committed at `5d74ddc`.
- Slice 10.7 Contact/About route availability diagnosis remains committed at `ae9ac7d`.
- Slice 10.8 Contact/About store-content setup and preview verification remains deferred/incomplete.
- Slice 10.9 tracker correction remains committed at `5e2ea07`.
- Slice 11A storefront taxonomy recommendation remains committed at `662e4bb7c8c8df2b4cb73bd7c234d7e071f465e2`.
- Slice 11B catalogue readiness matrix remains committed at `a0bfbb1a0f3428be6251004dc0f90e0a9e1f3987`.
- Slice 11C sourcing/readiness planning remains committed at `c88024b5a8544421b114bb9eaaeac1d136405de6`.
- Slice 11D first product verification batch plan remains committed at `ee410452e1651a6b9d8df71e99d2b34e8e2d1851`.
- Slice 11E first product research outcome remains committed at `73144cc2db1eaade777355612d09c91002546710`.
- Slice 11F records the manual logged-in supplier-verification guide and durable evidence format without changing theme/code files, product data, or Shopify state.
- Slice 11G.1 records that the first logged-in supplier-verification execution pass is attempted/planned but blocked/incomplete because supplier-tool login access is required and was not used in this docs-only pass.
- Slice 12 records the launch-readiness blocker review and next-action plan without changing theme/code files, product data, supplier state, or Shopify state.

## Current readiness summary

- Confirmed: `0`
- Candidate: `25`
- TBD: `0`
- Unconfirmed: `25`

## Slice 12 blocker-plan status

- Planning scope only: accepted.
- Product import approval: not granted.
- Shopify push approval: not granted.
- Shopify push/publish approval: not granted.
- Publish approval: not granted.
- Live theme overwrite approval: not granted.
- Dynamic catalogue wiring approval: not granted.
- Checkout customization approval: not granted.
- Contact/About implementation fix approval: not granted in this pass.
- Final legal publication approval: not granted in this pass.
- Actual supplier verification approval: not granted in this pass.
- Supplier credential storage approval: not granted in this pass.
- Supplier-account access: not used in this docs-only pass.
- Execution result: blocker review and next-action sequencing recorded only.
- Contact/About blocker: preserved and still unresolved.
- Supplier verification blocker: preserved and still unresolved.

## First verification batch

- `Desk Cable Clips Set`
- `Cable Management Sleeve`
- `Screen Cleaning Kit`
- `Adhesive Wall Hooks Pack`
- `Sink Drain Basket / Strainer`
- `Phone / Tablet Desk Stand`

## Current six-product batch status

- All six first-batch products remain `Candidate`.
- No actual supplier/source verification has occurred in this pass.
- No supplier accounts were accessed in this pass.
- No supplier credential storage has occurred in this pass.
- All cost, shipping, margin, image, and readiness evidence remains unverified until a later logged-in execution pass.
- No product import or import-readiness movement has occurred in this pass.
- No product was promoted to `Supplier verified`.

## Launch-readiness blocker summary

- Track A blocker: `/pages/contact` and `/pages/about` rendered HTTP `404` in authenticated preview evidence, so Shopify Admin page resources still need to be created or verified before launch-readiness or publish consideration can proceed.
- Track B blocker: Slice 11G supplier verification remains blocked because logged-in `CJdropshipping`, `DSers`, and/or `AliExpress` access is required, and no product may move to `Supplier verified` until the required evidence is captured.
- The first-batch products still blocked at `Candidate` are:
  - `Desk Cable Clips Set`
  - `Cable Management Sleeve`
  - `Screen Cleaning Kit`
  - `Adhesive Wall Hooks Pack`
  - `Sink Drain Basket / Strainer`
  - `Phone / Tablet Desk Stand`

## Manual action plan

Track A — Contact/About Shopify Admin setup:

- Verify or create `Contact` page.
- Verify or create `About` page.
- Confirm handles:
  - `contact`
  - `about`
- Confirm Online Store availability.
- Assign templates:
  - `Contact` -> `page.contact`
  - `About` -> default page template unless a better existing assignment is available
- Re-test authenticated preview routes:
  - `/pages/contact?preview_theme_id=151207542967`
  - `/pages/about?preview_theme_id=151207542967`

Track B — supplier verification:

- Use the Slice 11F manual guide only in a later manual logged-in supplier-check pass.
- No product may move to `Supplier verified` until the required evidence is captured for each first-batch product.

## Evidence requirements recorded per first-batch product

Use logged-in `CJdropshipping` / `DSers` / `AliExpress` tools to confirm:

- supplier/source link or internal reference
- supplier SKU/SPU/reference
- product cost
- South Africa shipping option
- shipping cost
- estimated landed cost
- delivery expectation
- variants/options
- minimum image quality
- image suitability
- description facts
- target selling price
- estimated gross margin
- margin risk
- return/quality risk
- compliance/claim risk
- decision note
- recommended status
- next action

## Approved launch catalogue structure

- Launch departments:
  - `Home & Living` — `6` product slots
  - `Kitchen & Storage` — `7` product slots
  - `Office & Desk` — `5` product slots
  - `Tech Accessories` — `7` product slots
- Total approved launch catalogue planning coverage: `25` product slots
- Expansion-ready only:
  - `Garden & Outdoor`
  - `Bath & Bedroom`
  - `Cleaning & Laundry`
- Merchandising rails, not departments:
  - `Shop All`
  - `Best Sellers`
  - `Deals`
  - `New In`
  - `New Arrivals`
  - `Featured`
  - `Trending`
  - `Seasonal`

## Sourcing/readiness gap summary

- The catalogue now has `25` named candidate slots and no `TBD` slot names.
- No slot is yet `Supplier verified`.
- No slot is yet `Content ready`.
- No slot is yet `Import ready`.
- All `25` slots still carry unconfirmed supplier/cost/shipping/content evidence and must move through the durable 4-stage readiness flow before any import approval is considered.
- The first six-product verification batch now has both a public-research outcome and a manual execution guide, but Slice 11G execution remains blocked until logged-in supplier-tool access is available, so no item moves beyond `Candidate`.
- Slice 12 adds the manual blocker-control sequence only; it does not resolve either blocker.

## Current product state

The repository remains a Git-initialized Shopify theme foundation with implementation completed through Slice 9 and unpublished-preview validation recorded through Slice 10.7:

- The approved static HTML source remains unchanged.
- Global chrome, homepage, collection, product, search, cart, legal/support, and 404 foundation work exists in native Shopify theme structure.
- Slice 11F adds manual-verification guide documentation only. Slice 11G.1 adds blocker-record documentation only. Slice 12 adds blocker-plan documentation only. None of these passes change collection wiring, product data, or visual implementation.
- Product import remains unapproved.
- Shopify push/publish remains unapproved.
- Live theme overwrite remains unapproved.
- Dynamic product/catalogue wiring remains unapproved.
- `artifacts/` remains untracked and must not be committed unless separately approved.

## Launch-readiness blockers

- Contact/About route availability remains a launch-readiness blocker.
- `/pages/contact` rendered HTTP `404` in authenticated unpublished-preview evidence.
- `/pages/about` rendered HTTP `404` in authenticated unpublished-preview evidence.
- Launch-readiness and publish consideration cannot proceed until Contact/About page resources are created or verified in Shopify.
- Required verification still includes page existence, page handles, Online Store visibility, and template assignment for the Contact/About resources.
- Slice 10.8 store-content setup and preview verification remains deferred/incomplete, so this blocker remains open.
- Supplier verification remains a launch-readiness blocker for the first six-product batch.
- Logged-in `CJdropshipping`, `DSers`, and/or `AliExpress` access is required before supplier evidence can be captured.
- No product may be treated as `Import ready` until supplier, landed-cost, shipping, content, image, and risk checks are complete.
- Manual logged-in supplier verification is now required before any first-batch status movement beyond `Candidate`.

## Approved execution constraints

- No publish approved.
- No Shopify push approved.
- No live theme overwrite approved.
- No product import approved.
- No checkout customization approved.
- No dynamic product/catalogue wiring approved.
- No Contact/About implementation fix approved in this pass.
- No final legal publication approved.
- No actual supplier verification inside the repo.
- No supplier credential storage.
- Contact/About route availability remains unresolved.
- `artifacts/` must remain untracked/uncommitted.

## Documentation artefacts

- `docs/project-control.md`
- `docs/lld/mzansi-select-shopify-mvp-theme-v1.md`
- `docs/catalogue/mzansi-select-25-product-readiness-v1.md`

## Next expected decision

Product Owner acceptance or correction of the Slice 12 launch-readiness blocker control plan, followed by manual Contact/About Shopify Admin setup and preview verification, then later manual logged-in supplier verification before any import-planning decision is accepted.

## Decisions made

- Slice 11E is treated as accepted and committed at `73144cc2db1eaade777355612d09c91002546710`.
- Slice 11F is limited to manual supplier-verification guide setup and documentation only.
- Slice 11G.1 is limited to recording the supplier-access execution blocker only.
- Slice 12 is limited to launch-readiness blocker review and next-action planning only.
- The 4-stage readiness movement rules are now treated as durable catalogue launch-readiness criteria.
- Candidate -> Supplier verified evidence fields remain durable catalogue launch-readiness criteria.
- Supplier-verification evidence format is now treated as a durable catalogue launch-readiness rule.
- Rejection rules are now durable launch-readiness criteria.
- Unknown supplier, cost, selling price, margin, shipping, image, and import-readiness values remain `Unconfirmed`.
- Product import, Shopify push/publish, live overwrite, checkout customization, dynamic catalogue wiring, final legal publication, Contact/About route remediation, actual supplier verification, and supplier credential storage remain out of scope for this pass.

## Risks / unknowns

- All `25` product slots still require supplier/source checking before any movement beyond `Candidate`.
- The first six-product verification batch still requires manual logged-in execution to populate the full evidence format.
- Logged-in supplier-tool access is still required before the first six-product batch can be manually verified.
- The manual route must avoid storing supplier credentials anywhere in the repo or artefacts.
- Office & Desk and Tech Accessories still require careful compatibility/returns review because several planned products are accessories with variant or quality risk.
- Kitchen & Storage includes several bulkier or packaging-sensitive items that likely need CJdropshipping-versus-DSers shipping comparison before verification.
- Contact/About route availability still cannot be fully resolved from theme files alone.
- `artifacts/` remains untracked and should not be committed unless separately approved.

## Recommended sequencing

1. Manual Contact/About Shopify Admin setup and preview verification.
2. Docs-only closure for Contact/About evidence.
3. Manual first-six supplier verification.
4. Docs-only closure for supplier evidence.
5. Product Owner decision on product import planning only after blockers are resolved.

## Handoff queue

- Keep `artifacts/` excluded from any commit unless separately approved.
- Preserve the unresolved Contact/About route blocker until store-content setup or verification is completed.
- Do not treat launch-readiness or publish as eligible until Contact/About page resources are created or verified.
- Re-test authenticated preview routes after any Contact/About Shopify Admin setup using:
  - `/pages/contact?preview_theme_id=151207542967`
  - `/pages/about?preview_theme_id=151207542967`
- Use the Slice 11F manual guide as execution input only in a later approved logged-in supplier-check pass with account access outside the repo.
- Do not access supplier accounts or store credentials in the repo during docs-only passes.
- Capture all required supplier evidence before recommending any status movement beyond `Candidate`.
- Follow the recorded sequencing before any product import planning decision is requested.
- Record `Tracker status` and `LLD status` in every handoff.

## Final handoff summary

This Slice 12 docs-only pass records the active launch-readiness blockers, the manual Contact/About Shopify Admin setup track, the manual first-six supplier-verification track, the evidence requirements that still block any move beyond `Candidate`, and the recommended blocker-resolution sequence before any later product import planning decision. No supplier accounts were accessed, no credentials were stored, no product moved beyond `Candidate`, the Contact/About `404` blocker remains unresolved, no theme/code or Shopify-state changes occurred, and `artifacts/` remains untracked and uncommitted.

---

**Footer Standard For This Pass:** Slice 12 launch-readiness blocker plan recorded. Approved source HTML unchanged. This docs-only pass updates tracker sequencing only, preserves the Contact/About and supplier-verification blockers, leaves the LLD unchanged because no durable catalogue or launch-readiness rule changed, and keeps `artifacts/` untracked and uncommitted.
