# Mzansi Select Shopify MVP Theme

**Document Type:** Project Control  
**Prepared:** 2026-04-29  
**Owner:** Product Owner  
**Status:** Slice 11G.2 Playwright-assisted supplier verification evidence captured for the first six candidate products via authenticated CJdropshipping inspection; supplier verification remains incomplete pending comparison and pricing decisions  
**Version:** 2.2  
**Source of Truth:** `mzansi-select-theme.html`

## Project name

Mzansi Select Shopify MVP Theme Conversion

## Current State

- Active slice: Slice 11G.2 Playwright-assisted supplier verification evidence capture
- Active owner: Product Owner
- Next owner: Product Owner
- Last accepted slice: docs-only Contact/About route evidence closure
- Last committed slice: docs-only Contact/About route evidence closure (`bd186d5230963945692d5c9f76dc0bb9790fd80e`)
- Current blockers:
  - Slice 11G.2 captured CJ-based supplier evidence for the first six products, but supplier verification remains incomplete because `DSers` / `AliExpress` comparison evidence, target selling prices, and estimated gross margins are still missing
  - All six first-batch products remain `Candidate`, and no product may move to `Supplier verified` until the remaining evidence and decisions are completed
  - `Adhesive Wall Hooks Pack` still lacks a verified South Africa route on the tested listing and carries material distribution-policy restrictions
- Deferred items:
  - Product import remains deferred and unapproved
  - Shopify push/publish remains deferred and unapproved
  - Dynamic product/catalogue wiring remains deferred and unapproved
  - Checkout customization remains deferred and unapproved
  - Final legal publication remains deferred and unapproved
- Launch readiness: Contact/About route availability is resolved in unpublished preview evidence; launch readiness remains blocked by unresolved supplier/cost/shipping/content readiness across the planned catalogue
- Product import status: Not approved and not started
- Shopify push/publish status: No Shopify push approved in this pass; no publish approved; no live theme overwrite approved
- Artifacts policy: `artifacts/` must remain untracked and uncommitted unless separately approved
- Last tracker update: 2026-04-29 during Slice 11G.2 CJ-based first-six supplier evidence capture
- Tracker status: Updated
- LLD status: Unchanged with reason - Slice 11G.2 captures product-specific supplier evidence and does not change durable catalogue-readiness criteria

## Current active pass

Slice 11G.2 Playwright-assisted supplier verification evidence capture

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
- Existing approved Slice 11F and Contact/About closure commit history
- `artifacts/supplier-verification/slice-11g2/session-access-summary.md`
- `artifacts/supplier-verification/slice-11g2/first-six-supplier-verification-summary.md`
- `artifacts/supplier-verification/slice-11g2/*.json`

## Current status

- Slice 9 theme foundation remains the latest completed theme/code implementation baseline.
- Slice 10 unpublished preview refresh remains committed at `e91d529`.
- Slice 10.6 docs-only authenticated preview QA closure remains committed at `5d74ddc`.
- Slice 10.7 Contact/About route availability diagnosis remains committed at `ae9ac7d`.
- Manual Track A.1 completed Shopify Admin resource verification/correction and unpublished-preview re-test for Contact/About route availability.
- Slice 10.9 tracker correction remains committed at `5e2ea07`.
- Slice 11A storefront taxonomy recommendation remains committed at `662e4bb7c8c8df2b4cb73bd7c234d7e071f465e2`.
- Slice 11B catalogue readiness matrix remains committed at `a0bfbb1a0f3428be6251004dc0f90e0a9e1f3987`.
- Slice 11C sourcing/readiness planning remains committed at `c88024b5a8544421b114bb9eaaeac1d136405de6`.
- Slice 11D first product verification batch plan remains committed at `ee410452e1651a6b9d8df71e99d2b34e8e2d1851`.
- Slice 11E first product research outcome remains committed at `73144cc2db1eaade777355612d09c91002546710`.
- Slice 11F records the manual logged-in supplier-verification guide and durable evidence format without changing theme/code files, product data, or Shopify state.
- Slice 11G.1 records that the first logged-in supplier-verification execution pass is attempted/planned but blocked/incomplete because supplier-tool login access is required and was not used in this docs-only pass.
- Slice 12 records the launch-readiness blocker review, Contact/About evidence closure, and next-action plan without changing theme/code files, product data, supplier state, or Shopify state.
- Slice 11G.2 completed Playwright-assisted first-six supplier evidence capture against authenticated local `CJdropshipping` product pages without importing any product or touching Shopify.

## Current readiness summary

- Confirmed: `0`
- Candidate: `25`
- TBD: `0`
- Unconfirmed: `25`

## Slice 11G.2 evidence-capture status

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
- Actual supplier verification approval: granted for evidence capture only in this pass; no import or Shopify action was approved.
- Supplier credential storage approval: not granted in this pass.
- Supplier-account access: authenticated local `CJdropshipping` product pages were inspected through the user's local browser profile; `DSers` comparison remained incomplete in this pass.
- Execution result: CJ-based product evidence was captured for all six first-batch products, but no product was promoted beyond `Candidate`.
- Contact/About blocker: resolved in unpublished preview evidence.
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
- Authenticated `CJdropshipping` supplier product pages were accessed in this pass.
- Supplier/source link or internal reference, SKU/reference, South Africa shipping outcome, shipping cost, landed-cost estimate, basic variants/options, minimum image quality, and description facts were captured from the tested CJ listings.
- `DSers` / `AliExpress` comparison evidence remains incomplete in this pass.
- No supplier credential storage has occurred in this pass.
- Target selling price and estimated gross margin remain `TBD` for all six products.
- No product import or import-readiness movement has occurred in this pass.
- No product was promoted to `Supplier verified`.

## Contact/About resolved state

- `Contact Us` already existed, remained visible to Online Store, kept the `page.contact` template assignment, and its handle was corrected from `contact-us` to `contact`.
- `About` did not exist, was created, is visible to Online Store, uses the default page template, and has handle `about`.
- Preview routes returned HTTP `200`:
  - `https://dropshippoc.myshopify.com/pages/contact?preview_theme_id=151207542967`
  - `https://dropshippoc.myshopify.com/pages/about?preview_theme_id=151207542967`
- Contact/About route availability remains resolved in unpublished preview evidence and is not the current blocker.
- Evidence paths:
  - `artifacts/qa/manual-track-a1-fix-2026-04-29T07-11-26-367Z/fix-summary.md`
  - `artifacts/qa/manual-track-a1-fix-2026-04-29T07-11-26-367Z/contact-admin-editor.png`
  - `artifacts/qa/manual-track-a1-fix-2026-04-29T07-11-26-367Z/about-admin-editor.png`
  - `artifacts/qa/manual-track-a1-fix-2026-04-29T07-11-26-367Z/contact-preview.png`
  - `artifacts/qa/manual-track-a1-fix-2026-04-29T07-11-26-367Z/about-preview.png`

## Remaining launch-readiness blocker summary

- Track B blocker: Slice 11G supplier verification remains incomplete because evidence capture progressed on CJ only, while `DSers` / `AliExpress` comparison, target pricing, and final margin decisions remain open.
- Slice 11G.2 evidence outcome:
  - `Desk Cable Clips Set`: CJ source plus South Africa shipping captured
  - `Cable Management Sleeve`: CJ source plus South Africa shipping captured
  - `Screen Cleaning Kit`: CJ source plus South Africa shipping captured
  - `Adhesive Wall Hooks Pack`: tested listing remained US-route-only; South Africa shipping not verified
  - `Sink Drain Basket / Strainer`: CJ source plus South Africa shipping captured
  - `Phone / Tablet Desk Stand`: CJ source plus South Africa shipping captured
- No first-batch product is ready to move beyond `Candidate` yet because comparison and pricing decisions remain incomplete.
- The first-batch products still blocked at `Candidate` are:
  - `Desk Cable Clips Set`
  - `Cable Management Sleeve`
  - `Screen Cleaning Kit`
  - `Adhesive Wall Hooks Pack`
  - `Sink Drain Basket / Strainer`
  - `Phone / Tablet Desk Stand`

## Remaining manual action plan

Track B — supplier verification:

- Review the captured CJ evidence bundle and close the docs-only evidence pass if the Product Owner accepts the current capture state.
- Capture `DSers` / `AliExpress` comparison evidence where the product route still expects comparison, especially for `Desk Cable Clips Set`, `Cable Management Sleeve`, `Screen Cleaning Kit`, and `Phone / Tablet Desk Stand`.
- Decide whether to replace or reject the tested `Adhesive Wall Hooks Pack` source because the captured listing did not verify a South Africa route and carries restrictive VEVOR distribution notes.
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
- The first six-product verification batch now has a public-research outcome, a manual execution guide, and a CJ-based evidence bundle, but no item moves beyond `Candidate` until comparison and pricing decisions are complete.
- This pass preserves the Contact/About resolved state, but it does not resolve the supplier-verification blocker.

## Current product state

The repository remains a Git-initialized Shopify theme foundation with implementation completed through Slice 9 and unpublished-preview validation recorded through Slice 10.7:

- The approved static HTML source remains unchanged.
- Global chrome, homepage, collection, product, search, cart, legal/support, and 404 foundation work exists in native Shopify theme structure.
- Slice 11F adds manual-verification guide documentation only. Slice 11G.1 adds blocker-record documentation only. Slice 12 adds blocker-plan and Contact/About evidence-closure documentation only. Slice 11G.2 adds supplier evidence capture and documentation only. None of these passes change collection wiring, product data inside Shopify, or visual implementation.
- Product import remains unapproved.
- Shopify push/publish remains unapproved.
- Live theme overwrite remains unapproved.
- Dynamic product/catalogue wiring remains unapproved.
- `artifacts/` remains untracked and must not be committed unless separately approved.

## Launch-readiness blockers

- Contact/About route availability is resolved in unpublished preview evidence.
- `Contact Us` existed, remained visible to Online Store, and its handle was corrected to `contact`.
- `About` was created, is visible to Online Store, and uses handle `about`.
- Preview verification confirmed HTTP `200` for `/pages/contact?preview_theme_id=151207542967` and `/pages/about?preview_theme_id=151207542967`.
- Supplier verification remains a launch-readiness blocker for the first six-product batch.
- Slice 11G.2 captured authenticated `CJdropshipping` evidence for all six products, but `DSers` / `AliExpress` comparison evidence and pricing decisions are still incomplete.
- No product may be treated as `Import ready` until supplier, landed-cost, shipping, content, image, and risk checks are complete.
- Additional comparison and pricing review is still required before any first-batch status movement beyond `Candidate`.

## Approved execution constraints

- No publish approved.
- No Shopify push approved.
- No live theme overwrite approved.
- No product import approved.
- No checkout customization approved.
- No dynamic product/catalogue wiring approved.
- No final legal publication approved.
- No product import or Shopify mutation inside the repo.
- No supplier credential storage.
- Contact/About resolved state preserved only in this pass.
- `artifacts/` must remain untracked/uncommitted.

## Documentation artefacts

- `docs/project-control.md`
- `docs/lld/mzansi-select-shopify-mvp-theme-v1.md`
- `docs/catalogue/mzansi-select-25-product-readiness-v1.md`

## Next expected decision

Product Owner acceptance or correction of the Slice 11G.2 first-six supplier evidence capture, followed by either docs-only supplier-evidence closure or a narrower comparison pass for the remaining `DSers` / `AliExpress` gaps.

## Decisions made

- Slice 11E is treated as accepted and committed at `73144cc2db1eaade777355612d09c91002546710`.
- Slice 11F is limited to manual supplier-verification guide setup and documentation only.
- Slice 11G.1 is limited to recording the supplier-access execution blocker only.
- Slice 12 is limited to launch-readiness blocker review and next-action planning only.
- Manual Track A.1 resolved Contact/About Shopify Admin resource verification/correction and unpublished-preview route validation.
- Slice 11G.2 is limited to supplier evidence capture only; no import, publish, or Shopify mutation is approved.
- The 4-stage readiness movement rules are now treated as durable catalogue launch-readiness criteria.
- Candidate -> Supplier verified evidence fields remain durable catalogue launch-readiness criteria.
- Supplier-verification evidence format is now treated as a durable catalogue launch-readiness rule.
- Rejection rules are now durable launch-readiness criteria.
- Unknown supplier, cost, selling price, margin, shipping, image, and import-readiness values remain `Unconfirmed`.
- Product import, Shopify push/publish, live overwrite, checkout customization, dynamic catalogue wiring, final legal publication, Contact/About route remediation, and supplier credential storage remain out of scope for this pass.

## Risks / unknowns

- All `25` product slots still require supplier/source checking before any movement beyond `Candidate`.
- The first six-product verification batch still needs comparison closure, pricing decisions, and final risk acceptance before any product can move beyond `Candidate`.
- `DSers` / `AliExpress` comparison remains useful for several lightweight accessories even after the CJ capture.
- The manual route must avoid storing supplier credentials anywhere in the repo or artefacts.
- Office & Desk and Tech Accessories still require careful compatibility/returns review because several planned products are accessories with variant or quality risk.
- Kitchen & Storage includes several bulkier or packaging-sensitive items that likely need CJdropshipping-versus-DSers shipping comparison before verification.
- Contact/About route availability no longer blocks unpublished preview, but supplier verification still blocks catalogue status movement and import planning.
- Long South Africa delivery windows, DDU duty handling, and shipping-heavy landed costs are now the immediate commercial blockers highlighted by the captured evidence.
- `artifacts/` remains untracked and should not be committed unless separately approved.

## Recommended sequencing

1. Manual Contact/About Shopify Admin setup and preview verification: completed via Manual Track A.1.
2. Docs-only closure for Contact/About evidence: completed in this pass.
3. Review the CJ evidence bundle and decide whether a comparison follow-up is required before docs-only closure.
4. Capture any remaining `DSers` / `AliExpress` comparison evidence that materially changes the first-six decision set.
5. Docs-only closure for supplier evidence.
6. Product Owner decision on product import planning only after the supplier blocker is resolved.

## Handoff queue

- Keep `artifacts/` excluded from any commit unless separately approved.
- Preserve the Manual Track A.1 evidence bundle as the current Contact/About unpublished-preview verification record.
- Preserve `artifacts/supplier-verification/slice-11g2/session-access-summary.md` as the initial session-access record and `artifacts/supplier-verification/slice-11g2/first-six-supplier-verification-summary.md` as the current first-batch evidence record.
- Use the Slice 11F manual guide as execution input for any later comparison-only follow-up pass.
- Do not store supplier credentials in the repo during any pass.
- Capture all required supplier evidence before recommending any status movement beyond `Candidate`.
- Follow the recorded sequencing before any product import planning decision is requested.
- Record `Tracker status` and `LLD status` in every handoff.

## Final handoff summary

This Slice 11G.2 pass completed Playwright-assisted `CJdropshipping` evidence capture for the first six candidate products, recorded sanitized source, SKU, cost, South Africa shipping, landed-cost, option, image, description, and risk notes under `artifacts/supplier-verification/slice-11g2/`, preserved the resolved Contact/About state, kept all six products at `Candidate`, avoided product import and Shopify activity, avoided credential storage, and left `artifacts/` untracked and uncommitted.

---

**Footer Standard For This Pass:** Slice 11G.2 first-six supplier evidence captured. Approved source HTML unchanged. This pass records sanitized supplier evidence only, preserves the Contact/About resolved state, preserves the unresolved supplier-verification blocker, leaves the LLD unchanged because no durable rule changed, and keeps `artifacts/` untracked and uncommitted.
