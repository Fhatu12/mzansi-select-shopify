# Mzansi Select Shopify MVP Theme

**Document Type:** Project Control  
**Prepared:** 2026-04-29  
**Owner:** Product Owner  
**Status:** Slice 11G.1 docs-only supplier verification blocker recorded; logged-in supplier-tool access required before execution can continue pending Product Owner acceptance or correction  
**Version:** 1.8  
**Source of Truth:** `mzansi-select-theme.html`

## Project name

Mzansi Select Shopify MVP Theme Conversion

## Current State

- Active slice: Slice 11G.1 docs-only supplier verification blocker recording
- Active owner: Product Owner
- Next owner: Product Owner
- Last accepted slice: Slice 11E docs-only first product verification batch research outcome
- Last committed slice: Slice 11F docs-only supplier verification guide (`b025611882f7e12e91b92fc95cedbcbcf3b216aa`)
- Current blockers:
  - Slice 11G execution is blocked/incomplete because logged-in `CJdropshipping`, `DSers`, and/or `AliExpress` supplier-tool access is required for manual verification
  - No supplier accounts were accessed in this docs-only pass, so no first-batch product can move beyond `Candidate`
  - Contact/About route availability remains unresolved
  - `/pages/contact` and `/pages/about` rendered HTTP `404` in authenticated unpublished-preview evidence
  - Launch-readiness and any publish decision remain blocked until the required Contact/About page resources are created in Shopify or their existence, handles, visibility, and template assignment are verified
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
- Last tracker update: 2026-04-29 during Slice 11G.1 docs-only supplier-verification blocker recording
- Tracker status: Updated
- LLD status: Unchanged with reason - Slice 11F already captured the durable supplier-verification evidence format, and Slice 11G.1 only records an execution blocker

## Current active pass

Slice 11G.1 docs-only supplier verification blocker recording

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
- Existing approved Slice 11E commit history

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

## Current readiness summary

- Confirmed: `0`
- Candidate: `25`
- TBD: `0`
- Unconfirmed: `25`

## Slice 11G.1 blocker status

- Planning scope only: accepted.
- Product import approval: not granted.
- Shopify push/publish approval: not granted.
- Dynamic catalogue wiring approval: not granted.
- Checkout customization approval: not granted.
- Actual supplier verification approval: not granted in this pass.
- Supplier credential storage approval: not granted in this pass.
- Supplier-account access: not used in this docs-only pass.
- Execution result: attempted/planned but blocked/incomplete pending logged-in supplier-tool access.
- Contact/About blocker: preserved and still unresolved.

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

## Manual supplier verification guide added

- A manual logged-in verification guide is now recorded for the full first batch.
- All six products remain `Candidate` until logged-in `DSers`, `CJdropshipping`, and/or `AliExpress` evidence confirms supplier/source, cost, shipping, variants, image suitability, description facts, margin risk, return/quality risk, compliance/claim risk, and decision note.
- The guide preserves the accepted product-specific route:
  - `Desk Cable Clips Set`: `CJ` candidate + `DSers` / `AliExpress` comparison if available
  - `Cable Management Sleeve`: manual `DSers` / `AliExpress` / `CJ` source matching required
  - `Screen Cleaning Kit`: `CJ` candidate + leakage/claim-risk check
  - `Adhesive Wall Hooks Pack`: `CJ` candidate + adhesive/load-claim check
  - `Sink Drain Basket / Strainer`: `CJ` candidate + sink-fit/dimension check
  - `Phone / Tablet Desk Stand`: `CJ` candidate + stability/device-compatibility check

## Blocking data still required per product

Use logged-in `CJdropshipping` / `DSers` / `AliExpress` tools to confirm:

- supplier/source link or internal reference
- supplier SKU/SPU/reference
- product cost
- South Africa shipping option
- shipping cost
- estimated landed cost
- delivery expectation
- variants/options
- image suitability
- description facts
- target selling price
- estimated gross margin
- margin risk
- return/quality risk
- compliance/claim risk
- decision note
- recommended status

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

## Current product state

The repository remains a Git-initialized Shopify theme foundation with implementation completed through Slice 9 and unpublished-preview validation recorded through Slice 10.7:

- The approved static HTML source remains unchanged.
- Global chrome, homepage, collection, product, search, cart, legal/support, and 404 foundation work exists in native Shopify theme structure.
- Slice 11F adds manual-verification guide documentation only. Slice 11G.1 adds blocker-record documentation only. Neither pass changes collection wiring, product data, or visual implementation.
- Product import remains unapproved.
- Shopify push/publish remains unapproved.
- Live theme overwrite remains unapproved.
- Dynamic product/catalogue wiring remains unapproved.
- `artifacts/` remains untracked and must not be committed unless separately approved.

## Launch-readiness blockers

- Contact/About route availability remains a launch-readiness blocker.
- Launch-readiness and publish consideration cannot proceed until Contact/About page resources are created or verified in Shopify.
- Required verification still includes page existence, page handles, Online Store visibility, and template assignment for the Contact/About resources.
- Slice 10.8 store-content setup and preview verification remains deferred/incomplete, so this blocker remains open.
- No product may be treated as `Import ready` until supplier, landed-cost, shipping, content, image, and risk checks are complete.
- Manual logged-in supplier verification is now required before any first-batch status movement beyond `Candidate`.

## Approved execution constraints

- No publish approved.
- No live theme overwrite approved.
- No product import approved.
- No checkout customization approved.
- No dynamic product/catalogue wiring approved.
- No final legal publication approved.
- Contact/About route availability remains unresolved.
- `artifacts/` must remain untracked/uncommitted.

## Documentation artefacts

- `docs/project-control.md`
- `docs/lld/mzansi-select-shopify-mvp-theme-v1.md`
- `docs/catalogue/mzansi-select-25-product-readiness-v1.md`

## Next expected decision

Product Owner acceptance or correction of the Slice 11G.1 blocker record and scheduling of a later manual logged-in supplier-verification execution pass before any first-batch status movement or import-planning slice is accepted.

## Decisions made

- Slice 11E is treated as accepted and committed at `73144cc2db1eaade777355612d09c91002546710`.
- Slice 11F is limited to manual supplier-verification guide setup and documentation only.
- Slice 11G.1 is limited to recording the supplier-access execution blocker only.
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

## Handoff queue

- Keep `artifacts/` excluded from any commit unless separately approved.
- Preserve the unresolved Contact/About route blocker until store-content setup or verification is completed.
- Do not treat launch-readiness or publish as eligible until Contact/About page resources are created or verified.
- Use the Slice 11F manual guide as execution input only in a later approved logged-in supplier-check pass with account access outside the repo.
- Do not access supplier accounts or store credentials in the repo during docs-only passes.
- Record `Tracker status` and `LLD status` in every handoff.

## Final handoff summary

This Slice 11G.1 docs-only pass records that the first logged-in supplier-verification execution pass for the six-product batch is attempted/planned but blocked/incomplete because logged-in `CJdropshipping`, `DSers`, and/or `AliExpress` supplier-tool access is required. No supplier accounts were accessed, no credentials were stored, no product moved beyond `Candidate`, the Contact/About `404` blocker remains unresolved, no theme/code or Shopify-state changes occurred, and `artifacts/` remains untracked and uncommitted.

---

**Footer Standard For This Pass:** Slice 11G.1 supplier-verification blocker recorded. Approved source HTML unchanged. This docs-only pass updates live execution state only, preserves the Contact/About blocker, leaves the LLD unchanged because Slice 11F already captured the durable verification evidence format, and keeps `artifacts/` untracked and uncommitted.
