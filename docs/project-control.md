# Mzansi Select Shopify MVP Theme

**Document Type:** Project Control  
**Prepared:** 2026-04-28  
**Owner:** Product Owner  
**Status:** Slice 11A storefront department/category scan and Shopify collection taxonomy recommendation completed pending Product Owner acceptance or correction  
**Version:** 1.2  
**Source of Truth:** `mzansi-select-theme.html`

## Project name

Mzansi Select Shopify MVP Theme Conversion

## Current State

- Active slice: Slice 11A storefront department/category scan and Shopify collection taxonomy recommendation
- Active owner: Senior UI/UX Designer docs-only pass
- Next owner: Product Owner
- Last accepted slice: Slice 10.9 docs-only project-control current-state correction and documentation-control rule setup
- Last committed slice: Slice 10.9 docs-only project-control current-state correction and documentation-control rule setup (`5e2ea07`)
- Current blockers:
  - Contact/About route availability remains unresolved
  - `/pages/contact` and `/pages/about` rendered HTTP `404` in authenticated unpublished-preview evidence
  - Launch-readiness and any publish decision remain blocked until the required Contact/About page resources are created in Shopify or their existence, handles, visibility, and template assignment are verified
- Deferred items:
  - Slice 10.8 Contact/About store-content setup and preview verification remains deferred/incomplete
  - Slice 11B 25-product catalogue readiness matrix is not finalized in this pass
  - Dynamic product/catalogue wiring remains deferred
  - Product import remains deferred
  - Checkout customization remains deferred
  - Final legal publication remains deferred
- Launch readiness: Blocked by unresolved Contact/About route availability and pending catalogue-structure validation
- Product import status: Not approved and not started
- Shopify push/publish status: No Shopify push approved in this pass; no publish approved; no live theme overwrite approved
- Artifacts policy: `artifacts/` must remain untracked and uncommitted unless separately approved
- Last tracker update: 2026-04-28 during Slice 11A docs-only taxonomy scan
- Tracker status: Updated
- LLD status: Updated — durable department taxonomy, department-vs-rail rules, and taxonomy-linked launch-readiness criteria were added in Slice 11A

## Current active pass

Slice 11A storefront department/category scan and Shopify collection taxonomy recommendation

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
- `docs/lld/mzansi-select-shopify-mvp-theme-v1.md`
- Existing collection/category and product-card implementation files used only to confirm reusable pattern direction:
  - `templates/collection.json`
  - `sections/category-strip.liquid`
  - `sections/featured-product-grid.liquid`
  - `snippets/static-product-card.liquid`

## Current status

- Documentation extraction pass completed.
- Technical architecture inspection completed.
- Slice 1 foundation implementation completed.
- Slice 2 global chrome refinement completed.
- Slice 3 homepage composition foundation completed.
- Slice 4 collection/category template foundation completed.
- Slice 5 product detail page template foundation completed.
- Slice 6 search/results template foundation completed.
- Slice 7 cart page/drawer foundation implementation completed.
- Slice 8 legal/support page foundation completed.
- Slice 9 404 / generic empty-state foundation completed.
- Slice 10 unpublished preview refresh completed and committed at `e91d529`.
- Slice 10.5 / 10.5B authenticated Shopify preview QA evidence capture completed and accepted as PASS WITH NOTES.
- Slice 10.6 docs-only authenticated preview QA closure completed and committed at `5d74ddc`.
- Slice 10.7 Contact/About route availability diagnosis completed and committed at `ae9ac7d`.
- Slice 10.8 Contact/About store-content setup and preview verification remains deferred/incomplete.
- Slice 10.9 project-control current-state correction completed, accepted, and committed at `5e2ea07`.
- Slice 11A completed a docs-only storefront department/category scan and taxonomy recommendation without changing theme/code files, product data, or Shopify state.

## Storefront department/category scan status

- Scan status: Completed from the approved HTML source and confirmed against current static-safe theme section patterns.
- Strongly evidenced browse departments:
  - `Home & Living`
  - `Kitchen & Storage`
  - `Office & Desk`
  - `Tech Accessories`
- Additional department candidates present in the department dropdown but not yet reinforced by the category strip or search selector:
  - `Garden & Outdoor`
  - `Bath & Bedroom`
  - `Cleaning & Laundry`
- Service/help items present in the category strip but not suitable as catalogue departments:
  - `Shipping`
  - `Returns`
  - `FAQ`
- Support/legal/company paths present in the wider navigation ecosystem but not suitable as collections:
  - `Contact Us`
  - `About Us`
  - `Shipping`
  - `Returns`
  - `FAQ`
  - `Track Order`
  - `Privacy Policy`
  - `Terms & Conditions`

## Merchandising rails found

- `Best Sellers`
- `Deals`
- `New In`
- `New Arrivals`
- `Shop All`
- The homepage `Kitchen & Storage` product rail, which should be treated as a featured department rail that reuses a true department collection rather than creating a separate taxonomy node
- Implied future merchandising rail names that fit the approved pattern if later approved:
  - `Featured`
  - `Trending`
  - `Seasonal`

## Navigation and hierarchy summary

- Primary browse hierarchy in the source is department-led, not brand-led.
- `Shop by Department` is the strongest taxonomy signal and should map to stable Shopify collections/categories.
- `Shop All`, `Best Sellers`, `Deals`, `New In`, and `New Arrivals` behave as merchandising entry points rather than core departments.
- Footer structure confirms a second navigation layer for Help, Account, and Company pages rather than additional product departments.
- Search category options reinforce the same four strongest departments: `Home & Living`, `Kitchen & Storage`, `Office & Desk`, and `Tech Accessories`.

## Implied page hierarchy

- First level:
  - Homepage
  - Shop All
  - Department collections
  - Merchandising collections
  - Help/legal/company pages
- Second level:
  - Department collection landing pages
  - Merchandising collection landing pages such as Best Sellers, Deals, and New In
  - Support/info pages such as Shipping, Returns, FAQ, Contact, and About
- Third level:
  - Product detail pages from department or merchandising collections

## Reusable patterns confirmed

- Reusable collection/page/card patterns remain:
  - department/category strip tiles
  - section heading plus link pattern
  - `products-grid` plus `product-card`
  - shared collection intro/listing pattern
  - support/legal page structure
  - shared empty-state and recovery surface
- These patterns support taxonomy growth without requiring any visual change to the approved storefront feel.

## Recommended taxonomy summary

- Recommended launch-stable Shopify department collections:
  - `Home & Living`
  - `Kitchen & Storage`
  - `Office & Desk`
  - `Tech Accessories`
- Recommended expansion-ready department collections, to be activated only when product density supports them:
  - `Garden & Outdoor`
  - `Bath & Bedroom`
  - `Cleaning & Laundry`
- Recommended merchandising collections or rails rather than departments:
  - `Shop All`
  - `Best Sellers`
  - `Deals`
  - `New In`
  - `New Arrivals`
  - `Featured`
  - `Trending`
  - `Seasonal`
- Recommended non-collection informational paths:
  - `Shipping`
  - `Returns`
  - `FAQ`
  - `Contact Us`
  - `About Us`
  - `Track Order`
  - `Privacy Policy`
  - `Terms & Conditions`

## Recommended additions

- No new top-level department additions are recommended beyond the departments already evidenced in the approved source.
- The approved source already supports later activation of `Garden & Outdoor`, `Bath & Bedroom`, and `Cleaning & Laundry` without changing the storefront feel, but they should remain conditional until catalogue density justifies them.
- If later approved, `Featured`, `Trending`, and `Seasonal` should be added only as merchandising rails or manual/smart collections, not as permanent department categories.

## Do-not-change constraints

- Do not change the approved storefront look and feel.
- Do not change fonts, spacing rhythm, colours, layout, visual hierarchy, or premium-practical brand feel.
- Do not treat service/help paths as product departments.
- Do not treat merchandising rails as stable browse taxonomy unless later source evidence proves they are true departments.
- Do not fix Contact/About routes in this pass.
- Do not modify theme/code files, product data, or Shopify state in this pass.
- Do not commit `artifacts/`.

## Impact on Slice 11 catalogue planning

- Slice 11A narrows the likely 25-product launch matrix to four core launch departments first, with three expansion-ready departments held back unless product density supports them.
- The future matrix should evaluate whether each live department can sustain a credible first collection page and at least one homepage/product-card-led merchandising surface without looking sparse.
- The future matrix should distinguish:
  - stable departments
  - manual/smart merchandising collections
  - informational pages
- The future matrix should not assume `Best Sellers`, `Deals`, `New In`, `New Arrivals`, or `Kitchen & Storage` homepage placement are separate department additions.
- The future matrix should continue to block launch-readiness until both taxonomy coverage and Contact/About page-resource verification are complete.

## Current product state

The repository remains a Git-initialized Shopify theme foundation with implementation completed through Slice 9 and unpublished-preview validation recorded through Slice 10.7:

- The approved static HTML source remains unchanged.
- Global chrome, homepage, collection, product, search, cart, legal/support, and 404 foundation work exists in native Shopify theme structure.
- Slice 11A adds only documentation-level taxonomy guidance; it does not change collection wiring, product data, or visual implementation.
- Shopify Theme Check, preview state, and deployment constraints remain unchanged from the accepted Slice 10 records.
- No publish, live-theme overwrite, product import, checkout customization, dynamic product/catalogue wiring, or final legal publication has been approved.
- `artifacts/` remains untracked and must not be committed unless separately approved.

## Launch-readiness blockers

- Contact/About route availability remains a launch-readiness blocker.
- Launch-readiness and publish consideration cannot proceed until Contact/About page resources are created or verified in Shopify.
- Required verification still includes page existence, page handles, Online Store visibility, and template assignment for the Contact/About resources.
- Slice 10.8 store-content setup and preview verification remains deferred/incomplete, so this blocker remains open.

## Approved execution constraints

- No publish approved.
- No live theme overwrite approved.
- No product import approved.
- No checkout customization approved.
- No dynamic product/catalogue wiring approved.
- No final legal publication approved.
- Contact/About route availability remains unresolved.
- `artifacts/` must remain untracked/uncommitted.

## Next approved slice

Slice 11 — 25-product launch catalogue readiness plan

## Next expected decision

Product Owner acceptance or correction of the Slice 11A taxonomy recommendation before Slice 11B.

## Decisions made

- The approved source supports a department-led Shopify taxonomy.
- `Home & Living`, `Kitchen & Storage`, `Office & Desk`, and `Tech Accessories` are the strongest launch-stable department collections.
- `Garden & Outdoor`, `Bath & Bedroom`, and `Cleaning & Laundry` are valid future department candidates because they already exist in the approved department menu.
- `Best Sellers`, `Deals`, `New In`, `New Arrivals`, and similar terms should remain merchandising rails or manual/smart collections rather than stable departments.
- Service/help paths remain informational pages and should not be used as catalogue categories.
- The LLD was updated because this pass changed durable taxonomy guidance and launch-readiness rules tied to future catalogue planning.

## Risks / unknowns

- The approved source does not yet prove whether the three expansion-ready departments should be live at launch or only after product-density review.
- No final 25-product readiness matrix has been approved yet.
- Contact/About route availability still cannot be fully resolved from theme files alone.
- Admin-side verification of Shopify page existence, handles, visibility, and template assignment remains pending.
- `artifacts/` remains untracked and should not be committed unless separately approved.

## Handoff queue

- Keep `artifacts/` excluded from any commit unless separately approved.
- Preserve the unresolved Contact/About route blocker until store-content setup or verification is completed.
- Do not treat launch-readiness or publish as eligible until Contact/About page resources are created or verified.
- Route the Slice 11A taxonomy recommendation to Product Owner acceptance or correction before any Slice 11B matrix work is accepted.
- Record `Tracker status` and `LLD status` in every handoff.

## Final handoff summary

This Slice 11A docs-only pass extracted the approved storefront IA from `mzansi-select-theme.html`, separated stable departments from merchandising rails and informational paths, recommended four launch-stable Shopify department collections plus three expansion-ready department candidates, preserved the Contact/About `404` blocker, avoided any theme/code or Shopify-state changes, and set the next expected decision to Product Owner acceptance or correction before Slice 11B.

---

**Footer Standard For This Pass:** Slice 11A storefront taxonomy recommendation recorded. Approved source HTML unchanged. This docs-only pass updates live execution state, preserves the Contact/About blocker, records durable taxonomy guidance, and keeps `artifacts/` untracked and uncommitted.
