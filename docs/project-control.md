# Mzansi Select Shopify MVP Theme

**Document Type:** Project Control  
**Prepared:** 2026-04-29  
**Owner:** Product Owner  
**Status:** Slice 11C docs-only catalogue sourcing and readiness gap closure plan completed pending Product Owner acceptance or correction  
**Version:** 1.4  
**Source of Truth:** `mzansi-select-theme.html`

## Project name

Mzansi Select Shopify MVP Theme Conversion

## Current State

- Active slice: Slice 11C docs-only catalogue sourcing and readiness gap closure plan
- Active owner: Product Owner
- Next owner: Product Owner
- Last accepted slice: Slice 11B docs-only 25-product launch catalogue readiness matrix update
- Last committed slice: Slice 11B docs-only 25-product launch catalogue readiness matrix update (`a0bfbb1a0f3428be6251004dc0f90e0a9e1f3987`)
- Current blockers:
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
- Last tracker update: 2026-04-29 during Slice 11C docs-only sourcing/readiness planning
- Tracker status: Updated
- LLD status: Updated — 4-stage readiness movement rules and rejection rules now form durable launch-readiness criteria

## Current active pass

Slice 11C docs-only catalogue sourcing and readiness gap closure plan

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
- Existing approved Slice 11B commit history

## Current status

- Slice 9 theme foundation remains the latest completed theme/code implementation baseline.
- Slice 10 unpublished preview refresh remains committed at `e91d529`.
- Slice 10.6 docs-only authenticated preview QA closure remains committed at `5d74ddc`.
- Slice 10.7 Contact/About route availability diagnosis remains committed at `ae9ac7d`.
- Slice 10.8 Contact/About store-content setup and preview verification remains deferred/incomplete.
- Slice 10.9 tracker correction remains committed at `5e2ea07`.
- Slice 11A storefront taxonomy recommendation remains committed at `662e4bb7c8c8df2b4cb73bd7c234d7e071f465e2`.
- Slice 11B catalogue readiness matrix remains committed at `a0bfbb1a0f3428be6251004dc0f90e0a9e1f3987`.
- Slice 11C records sourcing order, readiness-gap closure planning, and durable movement/rejection rules without changing theme/code files, product data, or Shopify state.

## Current readiness summary

- Confirmed: `0`
- Candidate: `25`
- TBD: `0`
- Unconfirmed: `25`

## Slice 11C planning status

- Planning scope only: accepted.
- Product import approval: not granted.
- Shopify push/publish approval: not granted.
- Dynamic catalogue wiring approval: not granted.
- Checkout customization approval: not granted.
- Contact/About blocker: preserved and still unresolved.

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

## Current product state

The repository remains a Git-initialized Shopify theme foundation with implementation completed through Slice 9 and unpublished-preview validation recorded through Slice 10.7:

- The approved static HTML source remains unchanged.
- Global chrome, homepage, collection, product, search, cart, legal/support, and 404 foundation work exists in native Shopify theme structure.
- Slice 11C adds planning documentation only. It does not change collection wiring, product data, or visual implementation.
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

Product Owner acceptance or correction of the Slice 11C sourcing/readiness gap closure plan before any later supplier-check or import-planning slice is accepted.

## Decisions made

- Slice 11B is treated as accepted and committed at `a0bfbb1a0f3428be6251004dc0f90e0a9e1f3987`.
- Slice 11C is limited to sourcing/readiness planning and documentation only.
- The 4-stage readiness movement rules are now treated as durable catalogue launch-readiness criteria.
- Rejection rules are now durable launch-readiness criteria.
- Unknown supplier, cost, selling price, margin, shipping, image, and import-readiness values remain `Unconfirmed`.
- Product import, Shopify push/publish, live overwrite, checkout customization, dynamic catalogue wiring, final legal publication, and Contact/About route remediation remain out of scope for this pass.

## Risks / unknowns

- All `25` product slots still require supplier/source checking before any movement beyond `Candidate`.
- Office & Desk and Tech Accessories still require careful compatibility/returns review because several planned products are accessories with variant or quality risk.
- Kitchen & Storage includes several bulkier or packaging-sensitive items that likely need CJdropshipping-versus-DSers shipping comparison before verification.
- Contact/About route availability still cannot be fully resolved from theme files alone.
- `artifacts/` remains untracked and should not be committed unless separately approved.

## Handoff queue

- Keep `artifacts/` excluded from any commit unless separately approved.
- Preserve the unresolved Contact/About route blocker until store-content setup or verification is completed.
- Do not treat launch-readiness or publish as eligible until Contact/About page resources are created or verified.
- Use the new Slice 11C sourcing order and movement rules as planning input only until Product Owner acceptance and later supplier checks exist.
- Record `Tracker status` and `LLD status` in every handoff.

## Final handoff summary

This Slice 11C docs-only pass records the accepted Slice 11B baseline, updates the catalogue matrix from mixed readiness assumptions to a uniform `25`-candidate / `25`-unconfirmed planning state, documents sourcing priority order and supplier-path guidance, preserves the Contact/About `404` blocker, keeps product import and Shopify publish activity unapproved, avoids all theme/code and Shopify-state changes, and leaves `artifacts/` untracked and uncommitted.

---

**Footer Standard For This Pass:** Slice 11C sourcing/readiness planning recorded. Approved source HTML unchanged. This docs-only pass updates live execution state, preserves the Contact/About blocker, records durable movement/rejection criteria, and keeps `artifacts/` untracked and uncommitted.
