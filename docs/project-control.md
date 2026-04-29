# Mzansi Select Shopify MVP Theme

**Document Type:** Project Control  
**Prepared:** 2026-04-29  
**Owner:** Product Owner  
**Status:** Slice 11K collection allocation and replacement planning recorded; Contact/About remains resolved, supplier/product readiness remains the active blocker, and launch department link switching remains unapproved  
**Version:** 3.0  
**Source of Truth:** `mzansi-select-theme.html`

## Project name

Mzansi Select Shopify MVP Theme Conversion

## Current State

- Active slice: Slice 11K collection-density product allocation and replacement shortlist update
- Active owner: Product Owner
- Next owner: Product Owner
- Last accepted slice: Slice 12H collection readiness gap plan
- Last committed slice: Slice 12H collection readiness gap plan (`7d60b983fc11fdd6b758a50cf09cf056628ee28b`)
- Current blockers:
  - Slice 11I refreshed CJ evidence and captured public AliExpress comparison results, but exact-match source confirmation and final commercial sign-off are still open
  - All six first-batch products remain `Candidate`, and no product may move to `Supplier verified` until the remaining evidence and decisions are completed
  - `DSers` application pages were reachable in this pass, but targeted queries returned `No Data`, so DSers comparison evidence remains missing
  - Slice 11K records that the `25`-product plan meets preferred launch density targets on paper (`Home & Living` `6`, `Kitchen & Storage` `7`, `Office & Desk` `6`, `Tech Accessories` `6`), but this does not close launch readiness
  - The real launch-readiness gap remains verified product quality, supplier evidence, shipping, margin, and collection fit across the planned catalogue
  - The first-six allocation decision posture is now explicit: `Desk Cable Clips Set` continue, `Cable Management Sleeve` replacement-watch, `Screen Cleaning Kit` continue, `Adhesive Wall Hooks Pack` replace, `Sink Drain Basket / Strainer` replacement-watch, `Phone / Tablet Desk Stand` continue
  - Replacement candidates are planning-only and must not be treated as supplier-verified, cost-verified, margin-verified, shipping-verified, image-ready, or import-ready until evidence exists
  - Expansion-ready departments remain deferred as launch destinations until a later approved catalogue expansion pass
- Deferred items:
  - Product import remains deferred and unapproved
  - Shopify push/publish remains deferred and unapproved
  - Dynamic product/catalogue wiring remains deferred and unapproved
  - Checkout customization remains deferred and unapproved
  - Final legal publication remains deferred and unapproved
- Launch readiness: Contact/About route availability is resolved in unpublished preview evidence; launch readiness remains blocked by unresolved supplier/commercial readiness across the planned catalogue
- Product import status: Not approved and not started
- Shopify push/publish status: No Shopify push approved in this pass; no publish approved; no live theme overwrite approved
- Artifacts policy: `artifacts/` must remain untracked and uncommitted unless separately approved
- Last tracker update: 2026-04-29 during Slice 11K collection allocation and replacement-planning update
- Tracker status: Updated
- Catalogue plan status: Updated
- LLD status: Unchanged with reason - Slice 11K applies the existing collection-density and catalogue-readiness rules to the current product plan without changing durable rules.

## Current active pass

Slice 11K collection-density product allocation and replacement shortlist update

## Slice 12A / 12B clickable inventory backlog (docs-only)

- Slice 12A site-wide clickable items and fields inventory is accepted as PASS WITH NOTES.
- Slice 12B records the clickable inventory backlog only (documentation-only). No implementation is approved in Slice 12B.
- Accepted findings to carry forward:
  - Several site-wide links use hash-only anchors without matching targets (dead anchors).
  - Some anchors exist only on specific page templates, making them unreliable from global nav/footer contexts.
  - Footer Terms link mismatch: `#terms-conditions` vs page anchor `id="terms"` (must be resolved before publish readiness).
  - Product cards, PDP Add to Cart, cart checkout, cart quantity/remove, wishlist, newsletter, social links, and search/category filtering remain shells or deferred.
  - Department navigation needs an approved destination strategy and likely interaction wiring.
  - Contact/About route blocker is treated as previously handled and was not modified in Slice 12A/12B.
- Launch blockers (wiring/backlog):
  - Navigation correctness for primary/footer links.
  - Department menu behavior.
  - PDP Add to Cart flow.
  - Cart checkout path and cart item controls (quantity/remove).
- Scope confirmations (still out of scope for Slice 12B):
  - No theme/code changes
  - No Shopify push/publish/live overwrite
  - No product import
  - No checkout customization
  - No dynamic catalogue wiring
  - No Contact/About remediation
  - No final legal publication
- Next Product Owner decision pending: approve a dedicated wiring/backlog implementation slice and confirm which items are required before product import vs before publish.

## Slice 12C navigation and page-link correctness foundation (bounded fix)

Objective:

- Fix primary and footer navigation targets so they reliably route to valid Shopify routes, valid page resources, or valid page-specific anchors routed via the correct page.

Corrections implemented in this pass:

- Converted global hash-only help/policy anchors to page-routed anchors where the anchor exists:
  - `#shipping` -> `/pages/about#shipping`
  - `#returns` -> `/pages/about#returns`
  - `#faq` -> `/pages/about#faq`
  - `#about-us` -> `/pages/about#about-us`
  - `#privacy-policy` -> `/pages/about#privacy-policy`
- Resolved the Terms anchor mismatch:
  - `#terms-conditions` -> `/pages/about#terms`
- Converted Contact and Track Order footer links to route to the known support page resource:
  - `#contact` / `#track-order` -> `/pages/contact#contact`
- Department menu and key browse links now route to `{{ routes.all_products_collection_url }}` as a safe destination until a collection strategy is approved.
- Deals link routes to the homepage deals section when present:
  - `#deals` -> `{{ routes.root_url }}#deals`

Deferred placeholders left unchanged (explicitly deferred; not silently wired):

- Social links (`#facebook`, `#instagram`, `#tiktok`, `#youtube`)
- Careers (`#careers`) and Affiliates (`#affiliates`)
- Wishlist and Saved Addresses anchors (`#wishlist`, `#saved-addresses`)

Scope confirmations (still out of scope for Slice 12C):

- No product import
- No Shopify push/publish/live overwrite
- No checkout customization
- No dynamic catalogue wiring
- No PDP Add to Cart wiring
- No cart checkout/quantity/remove wiring
- No final legal publication

## Slice 12D department menu and collection destination strategy (docs-only)

Objective:

- Define a safe staged destination rule for department navigation before any cart wiring, PDP Add to Cart wiring, product import, Shopify push, or publish action.

Recommended staged strategy:

- Temporary safe state before collections/products exist:
  - Keep the four launch departments routed to `{{ routes.all_products_collection_url }}`.
  - Keep the three expansion-ready departments deferred from launch exposure; they should not become active launch destinations yet.
  - Treat empty collection states as acceptable for unpublished preview or internal QA only, not as the preferred live destination for primary department navigation.
- Launch-ready destination state once Shopify collections exist:
  - Move only the accepted launch departments to dedicated collection URLs:
    - `/collections/home-living`
    - `/collections/kitchen-storage`
    - `/collections/office-desk`
    - `/collections/tech-accessories`
  - Switch those links only after the Shopify Admin setup exists, the handles are stable, the collections are visible to Online Store, and the Product Owner confirms they are ready to replace the temporary `all-products` routing.
- Expansion-ready destination state:
  - Keep `Garden & Outdoor`, `Bath & Bedroom`, and `Cleaning & Laundry` hidden/deferred as launch destinations.
  - Proposed future handles may be reserved for later use, but they should not be exposed in primary navigation or the category strip until a later approved expansion pass.

Proposed collection handles:

- Launch:
  - `home-living`
  - `kitchen-storage`
  - `office-desk`
  - `tech-accessories`
- Expansion-ready only:
  - `garden-outdoor`
  - `bath-bedroom`
  - `cleaning-laundry`

Required Shopify store-content setup before link activation:

- Create the four launch collections in Shopify Admin with the approved handles.
- Confirm each collection is assigned to the Online Store sales channel before any navigation switch.
- Reuse the approved collection template foundation; do not redesign collection layouts.
- Prepare collection intro copy, imagery, and SEO metadata only within the approved brand/content direction.
- Do not expose department links to empty dedicated collections for live launch navigation until the Product Owner approves the destination switch.

Risk summary captured in this pass:

- If all launch departments keep landing on `all-products`, browse intent stays safe but department relevance remains diluted and navigation QA stays in a temporary fallback state.
- If dedicated department links are activated before real collections/content exist, customers may land on sparse or empty collection pages that undermine launch confidence.
- No code changes are approved in Slice 12D; this pass records the rule set only.

## Slice 12E launch collection setup content plan (docs-only)

Objective:

- Record the approved Shopify Admin collection-content plan for the four launch collections before any collection creation, product import, or navigation switch is approved.

Content-planning outcome recorded in this pass:

- The four approved launch collections now have named handles, intro copy, SEO title targets, and SEO meta-description targets recorded in the docs.
- The current department-link fallback remains `{{ routes.all_products_collection_url }}` until a later approved setup pass creates the launch collections and the Product Owner approves the switch.
- Empty collections remain acceptable for unpublished preview review only.
- Expansion collections remain deferred from launch setup and launch navigation.
- No Shopify Admin creation, no product import, and no code changes are approved in Slice 12E.

## Slice 12F launch collection Admin setup readiness check (readiness-only)

Objective:

- Confirm the safest Shopify Admin path for creating or verifying the four approved launch collections before any collection creation, link switching, product import, Shopify push, or publish action.

Reference doc reviewed:

- `docs/content/mzansi-select-launch-collections-v1.md`

Approved collection handles reviewed:

- `home-living`
- `kitchen-storage`
- `office-desk`
- `tech-accessories`

Read-only findings captured in this pass:

- Shopify CLI access was available in read-only mode.
- Preview theme `151207542967` remains present as `unpublished`.
- The storefront root is password protected, so direct live exposure risk is reduced behind the password page.
- The four approved launch collections already exist in Shopify Admin with matching titles and matching search-engine listing handles:
  - `Home & Living` -> `home-living`
  - `Kitchen & Storage` -> `kitchen-storage`
  - `Office & Desk` -> `office-desk`
  - `Tech Accessories` -> `tech-accessories`
- All four launch collections are currently included on the `Online Store` sales channel.
- Current collection density remains thin:
  - `Home & Living` -> `1` product
  - `Kitchen & Storage` -> `4` products
  - `Office & Desk` -> `1` product
  - `Tech Accessories` -> `1` product

Live exposure risk assessment:

- Because the collections are already included on `Online Store`, direct collection URLs exist and can be reached if a visitor has storefront access.
- Because the storefront password page is active, general-public exposure is reduced, but the collections still exist behind the password and remain a thin-page risk for any authenticated preview or password-enabled reviewer traffic.

Password-gate confirmation result:

- Confirmed ON from the storefront root response; the store currently serves a password page to unauthenticated visitors.

Empty collection URL safety result:

- Empty collections are acceptable only for unpublished preview review.
- For live launch-navigation purposes, empty or thin collection pages are still not considered safe destinations.
- In the current store state, the collections are not empty, but three of the four launch collections are still too thin to recommend link switching away from `all-products`.

Recommended safest Admin setup route:

- Do not create new launch collections now because the approved four launch collections already exist.
- Keep the current department links routed to `{{ routes.all_products_collection_url }}`.
- Treat the safest next Admin route as read-only verification plus later controlled content/product-density improvement before any Product Owner-approved link switch.
- If a later Admin pass is approved, prefer verifying or refining the existing collections rather than recreating them.

Evidence required before collection creation or link switching approval:

- Confirm the existing collection titles, handles, and SEO content still match the approved Slice 12E content plan.
- Capture unpublished-preview evidence that each collection route returns the expected collection page state.
- Confirm acceptable product density and merchandising quality for each launch collection.
- Confirm the Product Owner accepts any remaining thin-page risk before switching department links.
- Keep product import/readiness, supplier readiness, and link-switch approval as separate gated decisions.

Safety confirmations:

- No Shopify Admin collection creation
- No theme/code change
- No product import
- No Shopify push
- No publish
- No live overwrite
- No checkout customization
- No dynamic catalogue wiring
- No PDP Add to Cart wiring
- No cart wiring
- No final legal publication
- `artifacts/` remains untracked/uncommitted

Evidence folder path:

- `artifacts/platform/slice-12f-launch-collection-admin-readiness-20260429-172417`

## Slice 12G launch collection preview evidence and density review (read-only)

Objective:

- Capture unpublished-preview route evidence for the four approved launch collections and assess whether any collection is suitable for future department link-switch consideration.

Slice 12F commit hash reviewed:

- `621eeb08923120b6f8c33213c2b98159fce18ede`

Collection routes reviewed:

- `https://dropshippoc.myshopify.com/collections/home-living?preview_theme_id=151207542967`
- `https://dropshippoc.myshopify.com/collections/kitchen-storage?preview_theme_id=151207542967`
- `https://dropshippoc.myshopify.com/collections/office-desk?preview_theme_id=151207542967`
- `https://dropshippoc.myshopify.com/collections/tech-accessories?preview_theme_id=151207542967`

Per-collection evidence summary:

- `Home & Living`
  - Route result: reachable in authenticated unpublished preview with HTTP `200`
  - Visible title: `Everyday Essentials`
  - Handle evidence: SEO title confirms `Home & Living`; preview URL resolved to `/collections/home-living`
  - Rough preview card count: `8` visible `.product-card` elements
  - Admin density from Slice 12F: `1` product (`thin`)
  - Preview acceptability: acceptable for preview-route evidence only
  - Future link-switch consideration: not ready
  - Notes: the preview route renders, but the visible heading remains generic rather than department-specific and the Admin collection remains thin
- `Kitchen & Storage`
  - Route result: reachable in authenticated unpublished preview with HTTP `200`
  - Visible title: `Everyday Essentials`
  - Handle evidence: SEO title confirms `Kitchen & Storage`; preview URL resolved to `/collections/kitchen-storage`
  - Rough preview card count: `8` visible `.product-card` elements
  - Admin density from Slice 12F: `4` products (`some content`, still below a strong navigation-ready threshold)
  - Preview acceptability: acceptable for preview-route evidence only
  - Future link-switch consideration: not ready
  - Notes: this is the strongest current collection, but the preview still presents generic static-safe collection content and the Admin density is not yet strong enough for a confident department-link switch
- `Office & Desk`
  - Route result: reachable in authenticated unpublished preview with HTTP `200`
  - Visible title: `Everyday Essentials`
  - Handle evidence: SEO title confirms `Office & Desk`; preview URL resolved to `/collections/office-desk`
  - Rough preview card count: `8` visible `.product-card` elements
  - Admin density from Slice 12F: `1` product (`thin`)
  - Preview acceptability: acceptable for preview-route evidence only
  - Future link-switch consideration: not ready
  - Notes: preview rendering is available, but the collection is still thin and the page does not yet present a department-specific collection title/state
- `Tech Accessories`
  - Route result: reachable in authenticated unpublished preview with HTTP `200`
  - Visible title: `Everyday Essentials`
  - Handle evidence: SEO title confirms `Tech Accessories`; preview URL resolved to `/collections/tech-accessories`
  - Rough preview card count: `8` visible `.product-card` elements
  - Admin density from Slice 12F: `1` product (`thin`)
  - Preview acceptability: acceptable for preview-route evidence only
  - Future link-switch consideration: not ready
  - Notes: preview rendering is available, but the collection is still thin and the page does not yet present a department-specific collection title/state

Route-evidence interpretation captured in this pass:

- All four collection routes are reachable in the unpublished preview theme and can be reviewed safely in a read-only workflow.
- The preview theme currently renders a generic static-safe collection heading (`Everyday Essentials`) and a repeated placeholder-style product-card set across the four routes, so the visible preview card count is not treated as proof of real collection density.
- SEO page titles do reflect the specific collection names, which helps confirm the handles are wired correctly at the route level.
- Meta descriptions could not be confirmed from the rendered page in this pass.

Future link-switch consideration result:

- No launch collection is ready for future department link-switch consideration in this pass.
- `Kitchen & Storage` is the strongest current candidate because it has the highest confirmed Admin count (`4`), but it still falls short of a confident navigation-ready density threshold and still renders through the generic static-safe collection presentation.
- The current safe rule remains: keep launch department links routed to `{{ routes.all_products_collection_url }}` until Product Owner approval follows stronger collection density, better department-specific collection presentation, and accepted preview evidence.

Safety confirmations:

- No Shopify Admin collection creation
- No collection edits
- No department link switching
- No product import
- No Shopify push
- No publish
- No live overwrite
- No checkout customization
- No dynamic catalogue wiring
- No PDP Add to Cart wiring
- No cart wiring
- No final legal publication
- `artifacts/` remains untracked/uncommitted

Evidence folder path:

- `artifacts/platform/slice-12g-launch-collection-preview-density-20260429-173855`

## Slice 12H collection readiness gap plan update (docs-only)

Objective:

- Record the approved launch-collection readiness gaps, density gates, merchandising expectations, and next-work priorities before any collection edits, department link switching, product import, or Shopify action is approved.

Slice 12G commit hash reviewed:

- `000330334ea9a84f0392ff9e68a779f2c2bebb18`

Current collection readiness recorded in this pass:

- `Home & Living`: route evidence `HTTP 200`; Admin density `1`; current status `not ready`
- `Kitchen & Storage`: route evidence `HTTP 200`; Admin density `4`; current status `closest to ready`, but still needs merchandising/content review
- `Office & Desk`: route evidence `HTTP 200`; Admin density `1`; current status `not ready`
- `Tech Accessories`: route evidence `HTTP 200`; Admin density `1`; current status `not ready`

Approved collection-readiness rules recorded in this pass:

- Minimum preview threshold: `3` products per launch collection
- Preferred public launch threshold: `5` products per launch collection
- No department link switching while any launch collection has only `1` product
- Preferred launch density targets:
  - `Home & Living`: `5-6` products
  - `Kitchen & Storage`: `6-7` products
  - `Office & Desk`: `5-6` products
  - `Tech Accessories`: `6-7` products

Visible collection-content expectation recorded in this pass:

- The generic visible heading `Everyday Essentials` is acceptable as temporary preview/template evidence only.
- Before department link switching, each collection page must clearly show its actual department name:
  - `Home & Living`
  - `Kitchen & Storage`
  - `Office & Desk`
  - `Tech Accessories`
- If `Everyday Essentials` remains as a shared design phrase, the department name must still be visible and clear on the collection page.

Merchandising quality expectations recorded in this pass:

- Products must match the department intent.
- No filler products should be used to reach density thresholds.
- Product cards must have usable titles, images, and prices before launch-navigation exposure is considered.
- `Best Sellers` remains blocked until actual sales evidence exists.
- `Deals` should be used only where margin supports a genuine discount.
- `New In` / `New Arrivals` may be used for launch products.
- `Featured` / `Trending` / `Seasonal` remain merchandising rails, not departments.
- `Mother's Day` / `Winter-ready` positioning may be used only where product fit, timing, shipping expectation, and margin support it.
- Seasonal copy is campaign/merchandising copy, not permanent taxonomy.

Recommended next work focus recorded in this pass:

1. Product readiness / supplier verification
2. Collection content / density
3. Collection template presentation
4. PDP / cart wiring after credible product coverage exists

Safety confirmations:

- No collection edits
- No department link switching
- No product import
- No Shopify push
- No publish
- No live overwrite
- No checkout customization
- No dynamic catalogue wiring
- No PDP Add to Cart wiring
- No cart wiring
- No final legal publication
- No theme/code changes
- `artifacts/` remains untracked/uncommitted

## Slice 11K collection-density product allocation and replacement shortlist update (docs-only)

Objective:

- Record the paper-density allocation posture of the current `25`-product plan and capture the approved replacement shortlist directions without claiming new supplier, cost, margin, shipping, image, or import readiness.

Slice 12H commit hash reviewed:

- `7d60b983fc11fdd6b758a50cf09cf056628ee28b`

Collection-density summary recorded in this pass:

- `Home & Living`: target `5-6`; current plan count `6`
- `Kitchen & Storage`: target `6-7`; current plan count `7`
- `Office & Desk`: target `5-6`; current plan count `6`
- `Tech Accessories`: target `6-7`; current plan count `6`

Main conclusion recorded in this pass:

- The `25`-product plan meets preferred launch density targets on paper.
- The real readiness gap remains verified product quality, supplier evidence, shipping, margin, and collection fit.

First-six allocation decisions recorded in this pass:

- `Desk Cable Clips Set`: continue
- `Cable Management Sleeve`: replacement-watch
- `Screen Cleaning Kit`: continue
- `Adhesive Wall Hooks Pack`: replace
- `Sink Drain Basket / Strainer`: replacement-watch
- `Phone / Tablet Desk Stand`: continue

Replacement shortlist directions recorded in this pass:

- `Adhesive Wall Hooks Pack` -> `Jewellery / accessory organiser` or `drawer organiser tray`
- `Cable Management Sleeve` -> `reusable cable ties / velcro cable straps` or `desk mat / large mouse pad`
- `Sink Drain Basket / Strainer` -> `silicone dish drying mat` or `thermal lunch bag`
- Preferred immediate replacement direction: `Adhesive Wall Hooks Pack` -> `Jewellery / accessory organiser`
- Reason recorded: better `Home & Living` fit, stronger `Mother's Day` / giftable angle, lower claim risk, and keeps collection density intact

Planning-only controls preserved in this pass:

- Replacement candidates are planning-only.
- No replacement candidate may be treated as supplier-verified, cost-verified, margin-verified, shipping-verified, image-ready, or import-ready unless existing supplier evidence already supports it.
- All products remain `Candidate` unless existing supplier evidence supports movement.
- Department link switching remains blocked until collection density, product quality, and visible presentation gates are met.
- `Best Sellers` remains blocked until real sales evidence exists.
- `Deals` still requires genuine margin support.

Safety confirmations:

- No collection edits
- No department link switching
- No product import
- No Shopify push
- No publish
- No live overwrite
- No checkout customization
- No dynamic catalogue wiring
- No PDP Add to Cart wiring
- No cart wiring
- No final legal publication
- No theme/code changes
- `artifacts/` remains untracked/uncommitted

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
- `docs/content/mzansi-select-launch-collections-v1.md`
- `sections/primary-navigation.liquid`
- `sections/category-strip.liquid`
- `artifacts/platform/slice-12f-launch-collection-admin-readiness-20260429-172417/`
- Existing approved Slice 11F and Contact/About closure commit history
- `artifacts/supplier-verification/slice-11g2/session-access-summary.md`
- `artifacts/supplier-verification/slice-11g2/first-six-supplier-verification-summary.md`
- `artifacts/supplier-verification/slice-11g2/*.json`
- `artifacts/supplier-verification/slice-11i/first-six-gap-closure-summary.md`
- `artifacts/supplier-verification/slice-11i/*.json`

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
- Slice 11H records the first-six commercial gap-closure plan, planning price bands, and readiness thresholds without changing theme/code files, product data, supplier state, or Shopify state.
- Slice 11I refreshed CJ evidence, captured public ZA-facing AliExpress comparison candidates, and recorded a targeted gap-closure summary without changing theme/code files, product data, supplier state, or Shopify state.
- Slice 12D records the staged department menu and collection destination strategy only; no theme/code files, product data, or Shopify state were changed in this pass.
- Slice 12E records the launch collection setup content plan only; no theme/code files, product data, or Shopify state were changed in this pass.
- Slice 12F records a read-only Admin readiness and risk posture only; no theme/code files, product data, or Shopify state were changed in this pass.
- Slice 12G records read-only unpublished-preview collection-route evidence and density posture only; no theme/code files, product data, or Shopify state were changed in this pass.
- Slice 12H records collection-readiness gap planning only; no theme/code files, product data, or Shopify state were changed in this pass.
- Slice 11K records collection-density allocation and replacement planning only; no theme/code files, product data, or Shopify state were changed in this pass.

## Current readiness summary

- Confirmed: `0`
- Candidate: `25`
- TBD: `0`
- Unconfirmed: `25`

## Slice 11I targeted gap-closure status

- Targeted supplier gap-closure evidence scope only: approved.
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
- Supplier-account access: the existing local browser session was reused for CJ and DSers inspection; no auth state was saved in the repo.
- Execution result: refreshed CJ evidence and public ZA-facing AliExpress comparison evidence were recorded for all six first-batch products; no product was promoted beyond `Candidate`.
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
- Slice 11I refreshed the CJ product evidence for all six products.
- Public ZA-facing AliExpress search results were captured for all six products and used as the comparison fallback in this pass.
- `DSers` application pages were reachable, but targeted search queries returned `No Data`, so DSers comparison evidence remains incomplete.
- No supplier credential storage has occurred in this pass.
- No product was promoted to `Supplier verified`.
- Final target selling price, estimated gross margin, and import readiness remain unapproved and unresolved.
- No product import or import-readiness movement has occurred in this pass.

## Contact/About resolved state

- `Contact Us` already existed, remained visible to Online Store, kept the `page.contact` template assignment, and its handle was corrected from `contact-us` to `contact`.
- `About` did not exist, was created, is visible to Online Store, uses the default page template, and has handle `about`.
- Preview routes returned HTTP `200`:
  - `https://dropshippoc.myshopify.com/pages/contact?preview_theme_id=151207542967`
  - `https://dropshippoc.myshopify.com/pages/about?preview_theme_id=151207542967`
- Contact/About route availability remains resolved in unpublished preview evidence and is not a launch-readiness blocker.
- Evidence paths:
  - `artifacts/qa/manual-track-a1-fix-2026-04-29T07-11-26-367Z/fix-summary.md`
  - `artifacts/qa/manual-track-a1-fix-2026-04-29T07-11-26-367Z/contact-admin-editor.png`
  - `artifacts/qa/manual-track-a1-fix-2026-04-29T07-11-26-367Z/about-admin-editor.png`
  - `artifacts/qa/manual-track-a1-fix-2026-04-29T07-11-26-367Z/contact-preview.png`
  - `artifacts/qa/manual-track-a1-fix-2026-04-29T07-11-26-367Z/about-preview.png`

## Remaining launch-readiness blocker summary

- Track B blocker: Slice 11G supplier verification remains incomplete because the refreshed evidence still leaves exact-match source confirmation, delivery validation, and/or commercial gate closure open.
- Track C blocker: the launch collections already exist and are included on `Online Store`, but product density is still thin and direct collection URLs should remain unlinked from launch department navigation until Product Owner approval.
- Slice 11I targeted evidence outcome:
  - `Desk Cable Clips Set`: AliExpress ZA comparison materially improved cost visibility, but exact match confirmation is still open
  - `Cable Management Sleeve`: comparison coverage improved, but the captured price points still look margin-weak inside the approved band
  - `Screen Cleaning Kit`: refreshed evidence confirmed the liquid/non-liquid wording conflict and margin remains weak on captured comparisons
  - `Adhesive Wall Hooks Pack`: the current CJ source remains unusable for ZA, but public ZA-facing replacement candidates were surfaced
  - `Sink Drain Basket / Strainer`: package-size evidence improved, but fit dimensions and stronger image support are still missing
  - `Phone / Tablet Desk Stand`: comparison coverage improved, but captured sources still miss the approved commercial gates
- No first-batch product is ready to move beyond `Candidate` yet because comparison, delivery, and margin decisions remain incomplete.
- Contact/About route availability is resolved and is no longer part of the launch-readiness blocker set.
- The four launch collections no longer need creation planning, but they still need later preview-state evidence and Product Owner approval before department-link switching is considered safe.
- The first-batch products still blocked at `Candidate` are:
  - `Desk Cable Clips Set`
  - `Cable Management Sleeve`
  - `Screen Cleaning Kit`
  - `Adhesive Wall Hooks Pack`
  - `Sink Drain Basket / Strainer`
  - `Phone / Tablet Desk Stand`

## Remaining action plan

Track B — supplier verification and commercial gap closure:

- Keep all six products at `Candidate` until exact-match source confirmation, delivery validation, and commercial gate review are completed.
- Continue comparison work where still needed, especially where DSers returned `No Data` and AliExpress public search results still need item-page confirmation.
- Treat the Slice 11H target selling price bands as planning assumptions only until a later approved pricing decision is made.
- Use the durable commercial thresholds as readiness gates only: minimum estimated gross margin `45%`, target gross margin `50%+`, landed cost ratio at or below `55%` of target selling price, minimum absolute gross margin `R45` under `R150`, minimum absolute gross margin `R70` at `R150+`, preferred South Africa delivery expectation `<=21` business days, and a risk flag whenever shipping cost is higher than product cost.
- Decide whether to keep `Adhesive Wall Hooks Pack` in the first-six set based on item-page verification of the surfaced ZA-facing replacement candidates.
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
- The first six-product verification batch now has a public-research outcome, a manual execution guide, a CJ-based evidence bundle, a commercial gap-closure plan, and a targeted gap-closure evidence set, but no item moves beyond `Candidate` until comparison and pricing decisions are complete.
- This pass preserves the Contact/About resolved state, and the active launch-readiness blockers remain supplier/product readiness plus later launch-collection exposure and link-switch approval.

## Current product state

The repository remains a Git-initialized Shopify theme foundation with implementation completed through Slice 9 and unpublished-preview validation recorded through Slice 10.7:

- The approved static HTML source remains unchanged.
- Global chrome, homepage, collection, product, search, cart, legal/support, and 404 foundation work exists in native Shopify theme structure.
- Slice 11F adds manual-verification guide documentation only. Slice 11G.1 adds blocker-record documentation only. Slice 12 adds blocker-plan and Contact/About evidence-closure documentation only. Slice 11G.2 adds supplier evidence capture and documentation only. Slice 11H adds commercial gap-closure planning and durable readiness-threshold documentation only. Slice 11I adds targeted supplier gap-closure evidence only. None of these passes change collection wiring, product data inside Shopify, or visual implementation.
- Slice 12D adds department destination strategy documentation only, Slice 12E adds launch collection setup content-planning documentation only, and Slice 12F adds launch collection Admin readiness/risk documentation only. None of these passes change collection wiring, product data inside Shopify, or visual implementation.
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
- Contact/About is no longer a launch-readiness blocker.
- Supplier verification remains a launch-readiness blocker for the first six-product batch.
- Slice 11I refreshed the CJ evidence, captured public ZA-facing AliExpress comparison candidates, and confirmed that commercial gates remain unresolved for the first-six batch.
- Department navigation now has a documented staged destination strategy, Slice 12E records the required launch collection content plan, Slice 12F confirms the collections already exist, Slice 12G confirms the preview routes render, Slice 12H records the explicit collection-density and presentation gates, and Slice 11K confirms that paper-density sufficiency does not remove the verified-product-quality and supplier-readiness blockers.
- No product may be treated as `Import ready` until supplier, landed-cost, shipping, content, image, and risk checks are complete.
- Additional comparison and pricing review is still required before any first-batch status movement beyond `Candidate`.

## Approved execution constraints

- No publish approved.
- No Shopify push approved.
- No live theme overwrite approved.
- No product import approved.
- No checkout customization approved.
- No dynamic product/catalogue wiring approved.
- No PDP Add to Cart wiring approved.
- No cart wiring approved.
- No final legal publication approved.
- No product import or Shopify mutation inside the repo.
- No supplier credential storage.
- No Contact/About fix approved in this pass.
- Contact/About resolved state preserved from Manual Track A.1 and earlier docs-only closure passes.
- `artifacts/` must remain untracked/uncommitted.

## Documentation artefacts

- `docs/project-control.md`
- `docs/lld/mzansi-select-shopify-mvp-theme-v1.md`
- `docs/content/mzansi-select-launch-collections-v1.md`
- `docs/catalogue/mzansi-select-25-product-readiness-v1.md`

## Next expected decision

Product Owner acceptance or correction of the Slice 11K collection allocation and replacement-planning update, followed by a later approved decision on how to close supplier readiness first and whether the `Adhesive Wall Hooks Pack` replacement direction should enter a future evidence pass.

## Decisions made

- Slice 11E is treated as accepted and committed at `73144cc2db1eaade777355612d09c91002546710`.
- Slice 11F is limited to manual supplier-verification guide setup and documentation only.
- Slice 11G.1 is limited to recording the supplier-access execution blocker only.
- Slice 12 is limited to launch-readiness blocker review and next-action planning only.
- Manual Track A.1 resolved Contact/About Shopify Admin resource verification/correction and unpublished-preview route validation.
- Slice 11G.2 is accepted and committed at `3d1cdca58a89e39b994a0a5163b140063538b8f7`.
- Slice 11H is accepted and committed at `adfbc2f463497ead605580ae4bf6f2f337130fa8`.
- Slice 11I is accepted and committed at `83aa6c053db6b7597823ab24b45c04a9198db153`.
- Slice 12C navigation and page-link correctness foundation is committed at `e38970e843a4cce88d533414df4dce556f5c7cac`.
- Slice 12D department destination strategy documentation is accepted and committed at `f67381256696b43d2423066ccf3c2a8c268b7e61`.
- Slice 12E launch collection content plan is accepted and committed at `af8a5f4c4960a14a1b200e12dde5a1575addca10`.
- Slice 11G.2 is limited to supplier evidence capture only; no import, publish, or Shopify mutation is approved.
- The 4-stage readiness movement rules are now treated as durable catalogue launch-readiness criteria.
- Candidate -> Supplier verified evidence fields remain durable catalogue launch-readiness criteria.
- Supplier-verification evidence format is now treated as a durable catalogue launch-readiness rule.
- Rejection rules are now durable launch-readiness criteria.
- Slice 11H is limited to docs-only commercial gap-closure planning.
- Slice 11H target selling price bands are planning assumptions only and must not be treated as final live prices.
- Slice 11H commercial readiness thresholds are readiness gates only and must not be treated as proof of verification or import readiness.
- Slice 11I is limited to targeted supplier gap-closure evidence capture only.
- Slice 12D is limited to documentation-only department destination strategy recording.
- Slice 12E is limited to Shopify Admin launch collection-content planning only.
- Slice 12F is limited to read-only launch collection Admin readiness and exposure-risk review only.
- Slice 12G is limited to read-only launch collection preview evidence and density review only.
- Slice 12H is limited to docs-only collection readiness gap planning only.
- Slice 11K is limited to docs-only collection allocation and replacement-planning only.
- The temporary safe routing rule remains `{{ routes.all_products_collection_url }}` for launch departments until dedicated launch collections are created and approved for exposure.
- The preferred launch-ready department handles are `home-living`, `kitchen-storage`, `office-desk`, and `tech-accessories`.
- `Garden & Outdoor`, `Bath & Bedroom`, and `Cleaning & Laundry` remain expansion-ready only and should stay deferred as launch destinations.
- Launch collection title/handle alignment, intro copy, SEO title, SEO meta description, unpublished-preview HTTP `200` validation, and Online Store exposure readiness are now treated as required setup checkpoints before a later department-link switch.
- Shopify Admin read-only inspection in Slice 12F confirms the four launch collections already exist and are included on `Online Store`; the remaining question is safe exposure timing, not collection creation feasibility.
- Slice 12G preview evidence confirms that the four collection routes render in the unpublished preview theme, but the page still presents the generic static-safe collection heading and repeated placeholder-style cards rather than department-specific live collection content.
- Slice 12H makes the collection gap plan explicit: minimum preview threshold `3`, preferred public launch threshold `5`, no department link switching while any launch collection has only `1` product, and each collection page must visibly expose the department name before switch approval.
- Slice 11K records that the current `25`-product plan already meets the preferred density targets on paper, so the remaining launch gap is not raw count but evidence-backed product quality, supplier closure, shipping, margin, and collection fit.
- Slice 11K records replacement directions as planning-only and does not treat any replacement candidate as verified or import-ready.
- Unknown supplier, cost, selling price, margin, shipping, image, and import-readiness values remain `Unconfirmed`.
- Product import, Shopify push/publish, live overwrite, checkout customization, dynamic catalogue wiring, PDP Add to Cart wiring, cart wiring, final legal publication, Contact/About route remediation, supplier credential storage, and actual supplier verification remain out of scope for this pass.

## Risks / unknowns

- All `25` product slots still require supplier/source checking before any movement beyond `Candidate`.
- The first six-product verification batch still needs comparison closure, pricing decisions, and final risk acceptance before any product can move beyond `Candidate`.
- `DSers` comparison remains incomplete because the targeted queries returned `No Data` in this pass.
- The public ZA-facing AliExpress results improved comparison coverage, but exact item-page validation is still missing for the strongest replacement candidates.
- Price bands are now documented for planning, but final live pricing remains unapproved until later commercial sign-off.
- The manual route must avoid storing supplier credentials anywhere in the repo or artefacts.
- Office & Desk and Tech Accessories still require careful compatibility/returns review because several planned products are accessories with variant or quality risk.
- Kitchen & Storage includes several bulkier or packaging-sensitive items that likely need CJdropshipping-versus-DSers shipping comparison before verification.
- Contact/About route availability no longer blocks unpublished preview or launch readiness; supplier verification and later launch collection setup remain the active blockers.
- Storefront password protection is currently active, which reduces general-public exposure risk but does not remove the need to manage thin direct collection URLs carefully behind the password.
- Long South Africa delivery windows, DDU duty handling, and shipping-heavy landed costs are now the immediate commercial blockers highlighted by the captured evidence.
- If launch departments remain on `all-products` too long, browse intent clarity and department-level QA confidence remain weaker than the approved launch taxonomy intends.
- If dedicated department links are enabled before collections and content are ready, empty or sparse landing pages may weaken trust and navigation quality.
- If department links are switched while the preview template still presents a generic static-safe collection heading and placeholder-style product-card coverage, shoppers may receive a misleading browse experience even when the collection route itself is reachable.
- If density thresholds are met only through weak-fit or filler products, department trust and merchandising quality may still fail even when the collection count looks acceptable on paper.
- If replacement candidates are allowed to inherit implied readiness without evidence, the catalogue plan may appear healthier on paper than it is in verified launch terms.
- `artifacts/` remains untracked and should not be committed unless separately approved.

## Recommended sequencing

1. Manual Contact/About Shopify Admin setup and preview verification: completed via Manual Track A.1.
2. Docs-only closure for Contact/About evidence: completed in this pass.
3. Slice 11G.2 first-six supplier evidence capture: completed and committed.
4. Slice 11H docs-only commercial gap-closure plan: completed and committed.
5. Slice 11I targeted supplier gap-closure evidence pass: completed in this pass.
6. Slice 12D docs-only department destination strategy: completed in this pass.
7. Slice 12E docs-only launch collection setup content plan: completed in this pass.
8. Slice 12F read-only launch collection Admin readiness check: completed and committed.
9. Slice 12G read-only launch collection preview evidence and density review: completed in this pass.
10. Slice 12H docs-only collection readiness gap plan: completed in this pass.
11. Slice 11K docs-only collection allocation and replacement planning: completed in this pass.
12. Close supplier/product readiness gaps before relying on collection-density targets as launch decisions.
13. Decide whether the preferred `Adhesive Wall Hooks Pack` replacement direction should enter a future evidence pass.
14. Improve launch collection density and department-specific collection-page presentation without using filler products.
15. Switch launch department links from `{{ routes.all_products_collection_url }}` to dedicated collection handles only after Product Owner approval.
16. Validate the strongest surfaced replacement candidates at item-page level where still needed.
17. Docs-only closure for supplier evidence once the blocker is resolved.
18. Product Owner decision on product import planning only after the supplier blocker is resolved.

## Handoff queue

- Keep `artifacts/` excluded from any commit unless separately approved.
- Preserve the Manual Track A.1 evidence bundle as the current Contact/About unpublished-preview verification record.
- Preserve `artifacts/supplier-verification/slice-11g2/session-access-summary.md` as the initial session-access record and `artifacts/supplier-verification/slice-11g2/first-six-supplier-verification-summary.md` as the current first-batch evidence record.
- Preserve `artifacts/supplier-verification/slice-11i/first-six-gap-closure-summary.md` as the current targeted gap-closure evidence summary.
- Use the Slice 11F manual guide as execution input for any later comparison-only follow-up pass.
- Use the Slice 11H price bands and commercial thresholds as planning gates only until a later approved pricing decision is made.
- Use `docs/content/mzansi-select-launch-collections-v1.md` as the source of truth for launch collection handles, intro copy, and SEO placeholders in any later Shopify Admin setup pass.
- Use `artifacts/platform/slice-12f-launch-collection-admin-readiness-20260429-172417/` as the read-only evidence bundle for the current launch collection readiness posture.
- Use `artifacts/platform/slice-12g-launch-collection-preview-density-20260429-173855/` as the current unpublished-preview collection route and density evidence bundle.
- Keep launch department navigation on `{{ routes.all_products_collection_url }}` until the four approved launch collections exist and are approved for exposure.
- Keep launch department navigation on `{{ routes.all_products_collection_url }}` until Product Owner explicitly accepts the current collection density and direct-URL exposure posture.
- Keep launch department navigation on `{{ routes.all_products_collection_url }}` until Product Owner explicitly accepts the current preview-state collection presentation as department-appropriate, or a later approved pass replaces the generic static-safe collection heading/presentation with department-specific collection content.
- Use the Slice 12H density gates when evaluating any later launch-collection exposure decision: minimum preview threshold `3`, preferred public launch threshold `5`, and no switch while any launch collection remains at `1` product.
- Treat the Slice 11K replacement shortlist as planning-only until a later evidence pass captures supplier, shipping, margin, image, and fit support where needed.
- Do not expose expansion-ready department links as launch destinations until a later approved expansion pass.
- Do not store supplier credentials in the repo during any pass.
- Capture all required supplier evidence before recommending any status movement beyond `Candidate`.
- Follow the recorded sequencing before any product import planning decision is requested.
- Record `Tracker status` and `LLD status` in every handoff.

## Final handoff summary

This Slice 11K docs-only planning pass records that the current `25`-product allocation meets the preferred launch-density targets on paper, but the real readiness gap remains verified product quality, supplier evidence, shipping, margin, and collection fit. It keeps the first-six decisions explicit (`continue`, `replacement-watch`, `replace`), treats replacement candidates as planning-only, preserves Contact/About as resolved, keeps supplier/product readiness as the active blocker, avoids Admin mutations, avoids code changes and Shopify activity, and leaves `artifacts/` untracked and uncommitted.

---

**Footer Standard For This Pass:** Slice 11K collection allocation and replacement planning recorded. Approved source HTML unchanged. This docs-only pass records the paper-density allocation result and planning-only replacement shortlist, keeps Contact/About resolved, leaves the LLD unchanged because no durable rules changed, leaves theme/code unchanged, and keeps `artifacts/` untracked and uncommitted.
