# Mzansi Select Shopify MVP Theme

**Document Type:** Project Control  
**Prepared:** 2026-04-29  
**Owner:** Product Owner  
**Status:** Slice 13D docs-only local supplier proof pack update recorded; seven shortlisted products are now `Supplier proof in progress` only, `Cable Organiser / Cable Management item` is paused pending narrower exact-product proof or lower-cost confirmation, product-only margin estimates remain caveated, no product is `Supplier verified`, launch approved, import approved, or final-priced, no Shopify write action occurred in this pass, and `artifacts/` remains untracked and uncommitted  
**Version:** 3.0  
**Source of Truth:** `mzansi-select-theme.html`

## Project name

Mzansi Select Shopify MVP Theme Conversion

## Current State

- Active slice: Slice 13D docs-only local supplier proof pack update
- Active owner: Product Manager
- Next owner: Product Owner
- Last accepted slice: Slice 13C docs-only local supplier preview product shortlist update (`301374ea4155acfa99b454a77ea3cdfc72d5fdcb`)
- Last committed slice: Slice 13C docs-only local supplier preview product shortlist update (`301374ea4155acfa99b454a77ea3cdfc72d5fdcb`)
- Last theme/code implementation slice: Slice 12J preview product visibility foundation (`263e60f1588b03f4120121007411c701d342d9e4`)
- Current blockers:
  - Seven shortlisted products are now `Supplier proof in progress`, but wholesale / dropship terms, direct fulfilment workflow, shipping-cost handling, image permission, sample / product quality proof, stock reliability, final target price acceptance, and final Product Owner commercial approval remain open before any product import or `Supplier verified` decision is revisited
  - Current margin calculations are product-only estimates from public supplier prices, assume shipping is charged separately to the customer or otherwise recovered, and do not approve final pricing
  - Neat Freak looks promising for local sourcing, but order timing must not be overpromised; public guidance indicates most orders are sent within `2-7` working days after payment confirmation and can take `7-14` working days overall before / through courier delivery
  - Gadgetgyz still requires direct confirmation of shipping fee, SLA, image permission, and fulfilment workflow
  - `Cable Organiser / Cable Management item` is paused because the current definition is too broad and the visible public price signal would likely require a `R599+` sell price to preserve the target product-only margin unless a narrower or lower-cost exact item is confirmed
  - Shopify Admin automation and preview product staging remain paused/deferred until Product Owner review of the Slice 13D proof pack is completed and a later write-action pass is explicitly approved
  - International and older supplier candidate paths remain paused unless explicitly reopened
  - `ZA Dropshipping` remains a useful Shopify/local-stock test path, but the shortlisted product slots there are still pending app/admin review before product and margin proof can be relied on
  - Slice 11R keeps `Jewellery / accessory organiser` as the preferred replacement-direction `Candidate`, but the current supplier proof capture pack remains incomplete and does not yet support formal replacement approval review or `Supplier verified` movement
  - No product may move to `Supplier verified` until the remaining evidence and decisions are completed
  - Slice 11R keeps the captured `CJdropshipping` route rejected for current commercial readiness because shipping is high, delivery is long, and DDU / oversized cautions weaken the route materially
  - Slice 11R keeps the public AliExpress adjustable-box route as the preferred supplier-path candidate, but only on an evidence/planning basis and with the exact item reference still missing
  - The portable-case route remains secondary comparison only because its shipping-cost field was not independently confirmed
  - `DSers` comparison is still preferred for additional confidence, but it is not blocking continued `Candidate` status for `Jewellery / accessory organiser`
  - The preferred planning price band remains `R179-R229`; `R159` remains only a competitive lower bound
  - Shipping cost higher than product cost remains flagged, delivery expectation is not yet proven as `<=21` business days, and commercial readiness remains inconclusive pending current supplier proof
  - Slice 11K records that the `25`-product plan meets preferred launch density targets on paper (`Home & Living` `6`, `Kitchen & Storage` `7`, `Office & Desk` `6`, `Tech Accessories` `6`), but this does not close launch readiness
  - The real launch-readiness gap remains verified product quality, supplier evidence, shipping, margin, and collection fit across the planned catalogue
  - `Adhesive Wall Hooks Pack` is now replacement-directed / deferred and should no longer be treated as an active first-six verification focus
  - `Jewellery / accessory organiser` is now the preferred replacement-direction `Candidate`, but it must remain blocked until the commercial-readiness gates are met and Product Owner records formal replacement approval
  - Expansion-ready departments remain deferred as launch destinations until a later approved catalogue expansion pass
- Deferred items:
  - Slice 12K preview catalogue product staging remains paused/deferred pending later explicit approval after Product Owner review of the Slice 13D proof-pack outcome
  - Shopify Admin automation and Playwright/Admin staging remain paused/deferred pending later explicit approval after Product Owner review of the Slice 13D proof-pack outcome
  - Product import remains deferred and unapproved
  - Shopify push/publish remains deferred and unapproved
  - Broader dynamic catalogue wiring beyond collection/PDP preview rendering remains deferred and unapproved
  - Checkout customization remains deferred and unapproved
  - Final legal publication remains deferred and unapproved
- Launch readiness: Contact/About route availability is resolved in unpublished preview evidence; launch readiness remains blocked by unresolved local supplier proof, shipping-cost handling, supplier/commercial readiness, and thin collection readiness
- Product import status: Not approved and not started
- Shopify push/publish status: No Shopify write action occurred in this reconciliation pass; no publish approved; no live theme overwrite approved
- Artifacts policy: `artifacts/` must remain untracked and uncommitted unless separately approved
- Last tracker update: 2026-05-02 during Slice 13D docs-only local supplier proof pack update
- Tracker status: Updated
- Catalogue plan status: Updated
- LLD status: Unchanged with reason - Slice 13D is catalogue/supplier proof planning only and does not change durable theme, rendering, architecture, or storefront behaviour.

## Current active pass

Slice 13D docs-only local supplier proof pack update

## Slice 13D local supplier proof pack

- Product Owner accepted the Product Manager Slice 13D recommendation as an evidence-capture update only.
- `Compact Organiser Basket`, `2-Layer Carry Handle Container 3.8L`, `Hook-over Door Basket`, `Mini Plastic Divider Basket`, `Sink Strainer, stainless steel`, `Velcro Cable Tidies` / `Neat Cables Label Pack`, and `Acrylic Tablet or Phone Stand` are now `Supplier proof in progress` only.
- `Cable Organiser / Cable Management item` is paused because the current definition is too broad and the visible public price signal would likely require a `R599+` sell price unless a narrower or lower-cost exact product is confirmed.
- Product-only margin estimates in this pass are planning signals only; they assume shipping is charged separately to the customer or otherwise recovered and do not approve final pricing.
- `Supplier proof in progress` does not mean `Supplier verified`, launch approved, import approved, final-priced, delivery-approved, or claims-approved.
- Preview staging remains blocked/deferred, Slice 12K remains paused/deferred, no Shopify write action occurred in this pass, and `artifacts/` remains untracked.

## Slice 13C local supplier preview product shortlist

- Slice 12J is the last accepted and committed implementation slice at `263e60f1588b03f4120121007411c701d342d9e4`.
- Product Owner accepted the Product Manager recommendation for a local-first South African supplier strategy.
- The local supplier shortlist is now documented in [docs/catalogue/local-supplier-sourcing-matrix-v1.md](/d:/dev/mzansi-select-shopify/docs/catalogue/local-supplier-sourcing-matrix-v1.md).
- Supplier weighting is now recorded: `Neat Freak` is the strongest current category fit, `Gadgetgyz` is the strongest current `Tech Accessories` fit, and `ZA Dropshipping` is useful as a Shopify/local-stock test path but still requires app/admin proof before reliance.
- All shortlisted products remain `Candidate` only in this pass.
- `ZA Dropshipping` shortlist slots remain pending app/admin review.
- Slice 13D — Local supplier proof pack for first preview shortlist is the next recommended proof-pack slice.
- No Shopify write action occurred in this reconciliation pass.
- `artifacts/` remains untracked and must not be committed.

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

## Slice 11L replacement candidate supplier evidence pass (evidence-only)

Objective:

- Evaluate the preferred replacement direction `Jewellery / accessory organiser` as evidence-only follow-up for the approved `Adhesive Wall Hooks Pack` replacement plan.

Slice 11K commit hash reviewed:

- `285e1b63da0d3361b40ce127e2a8c2877b45bec9`

Evidence folder path:

- `artifacts/supplier-verification/slice-11l/`

Replacement candidate supplier evidence outcome recorded in this pass:

- `DSers` query attempts for `jewelry organizer box`, `jewellery organizer tray`, and `accessory organizer tray` redirected to the `DSers` login page, so direct DSers comparison evidence remains missing in this pass.
- `CJdropshipping` yielded a directly captured product page for `Transparent Jewelry Storage Box Jewelry Organizer Dustproof Display`.
- Captured CJ reference details include `SKU: CJCC119463801AZ`, unit price `$3.34`, material `Plastic`, storage use `Jewelry`, and page text describing `3 layers of jewelry storage + 2 velvet tray`.
- Public AliExpress comparison evidence was captured for `10 Slots ( Adjustable) Plastic Jewelry Box Storage Case...`, including visible South Africa shipping `ZAR66.42`, delivery estimate `May 12 - 21`, and visible item price `ZAR15.65`.
- The public AliExpress comparison route therefore surfaced a visible comparison landed-cost signal of `ZAR82.07`, but the preferred supplier route remains commercially incomplete because CJ South Africa shipping was not captured in this pass.

Recommendation recorded in this pass:

- `Jewellery / accessory organiser` should replace `Adhesive Wall Hooks Pack` as the preferred `Candidate` direction in planning terms.
- The replacement candidate must remain `Candidate`; it must not move to `Supplier verified` in this pass.
- The replacement direction appears to offer better `Home & Living` fit and lower adhesive-performance claim risk than `Adhesive Wall Hooks Pack`.

Missing evidence still blocking readiness:

- Logged-in `DSers` comparison evidence
- CJ South Africa shipping option confirmation
- CJ shipping cost and landed-cost closure
- Final target selling price band and gross-margin closure for the preferred supplier route
- Exact storefront image suitability review
- Final variant and quality-risk closure for the chosen organiser style

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
- No supplier credential storage
- `artifacts/` remains untracked/uncommitted

## Slice 11M replacement candidate commercial readiness plan (docs-only)

Objective:

- Define what is still required before `Jewellery / accessory organiser` can formally replace `Adhesive Wall Hooks Pack` in the `25`-product launch catalogue.

Slice 11L commit hash reviewed:

- `4de4efc4995578cd9d3c34f6aca78a4f1f184ab4`

Commercial-readiness recommendation recorded in this pass:

- `Jewellery / accessory organiser` should now be recorded as the preferred `Candidate` replacement direction in the catalogue matrix.
- `Adhesive Wall Hooks Pack` should move out of active first-six verification into replacement-directed / deferred status.
- No product is promoted to `Supplier verified` in this pass.

Planning target selling price band recorded in this pass:

- `Jewellery / accessory organiser`: planning assumption only `R159-R229`
- Basis: the captured public comparison landed-cost signal of `ZAR82.07` indicates that the earlier low-ticket wall-hooks band is no longer a credible working assumption for the preferred replacement direction.
- This is a planning assumption only, not approved live pricing, and it remains pending preferred supplier and ZA shipping confirmation.

Required landed-cost and margin gates before formal replacement approval:

- Confirm supplier item cost on the preferred route
- Confirm South Africa shipping option and shipping cost on the preferred route
- Confirm estimated landed cost
- Select the preferred supplier route (`CJdropshipping`, `DSers`, or validated comparison alternative)
- Confirm a target selling price band
- Confirm estimated gross margin percentage and gross-margin amount after supplier plus shipping cost
- Require gross margin to meet the existing planning gates: minimum `45%`, target `50%+`
- Require landed cost to stay within the existing preference gate: `<=55%` of target selling price
- Require the applicable absolute-margin gate to be met:
  - minimum `R45` for products under `R150`
  - minimum `R70` for products at `R150+`
- Reject the route if shipping makes the offer uncompetitive, margin too thin, delivery too slow for the current planning expectation, or the product becomes trust-unsafe on quality/image/claims

Missing evidence still blocking formal replacement:

- CJ South Africa shipping option and cost
- `DSers` / AliExpress comparison closure where available
- Preferred supplier selection
- Final variant / size / compartment-fit confirmation
- Storefront image suitability review
- Claim / compliance risk review
- Return / quality risk review

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
- No supplier credential storage
- `artifacts/` remains untracked/uncommitted

## Slice 11N Jewellery / accessory organiser supplier evidence closure (evidence-only)

Objective:

- Close the remaining supplier-evidence gaps for `Jewellery / accessory organiser` before any Product Owner decision on formal replacement or `Supplier verified` status.

Slice 11M commit hash reviewed:

- `12ee842ced3f237cbc24a759e11164503b6129ce`

Supplier evidence closure outcome recorded in this pass:

- `CJdropshipping` candidate reviewed:
  - Product title: `Transparent Jewelry Storage Box Jewelry Organizer Dustproof Display`
  - Supplier reference: `SKU: CJCC119463801AZ`
  - Product cost: `$3.34`
  - Variant captured: `Color(Beige)`
  - Weight captured: `1020g`
  - South Africa shipping result: `PostNL` available to ZA
  - Shipping cost result: `Shipping Fee: $41.63`
  - Estimated processing time: `1-3 days for 90% orders`
  - Estimated delivery time: `15-45 days`
  - Captured caution notes: oversized-product warning plus DDU / buyer-duties note
- `DSers` comparison closure result:
  - Session redirected to the DSers login page again in this pass
  - Logged-in DSers comparison evidence therefore remains `Missing`
- Public AliExpress comparison evidence improved closure:
  - `10 Slots ( Adjustable) Plastic Jewelry Box Storage Case...`
    - Visible item price: `ZAR15.65`
    - Visible shipping: `ZAR66.42`
    - Visible delivery estimate: `May 12 - 21`
    - Evidence-only landed-cost signal: `ZAR82.07`
    - Ratings signal: `4.8`, `1008` reviews, `5,000+ sold`
  - `Portable Jewelry Box Jewelry Organizer Display Travel Jewelry Case...`
    - Visible item price: `ZAR41.39`
    - Visible delivery estimate: `May 12 - 22`
    - Ratings signal: `4.5`, `650` reviews, `5,000+ sold`
    - Shipping cost was not independently confirmed in this pass

Preferred supplier recommendation recorded in this pass:

- Do not treat `CJdropshipping` as the preferred supplier route on current evidence because the captured ZA route is shipping-heavy, long-delivery, oversized, and DDU-exposed.
- Treat the public AliExpress `10 Slots ( Adjustable) ...` route as the provisional commercial comparison leader because it is the only route in this pass with item price, ZA shipping cost, and delivery evidence captured together.
- Keep the `Portable Jewelry Box ...` route as a secondary watch candidate because it appears more giftable and category-fit friendly, but its shipping cost was not independently confirmed in this pass.
- Preferred supplier selection remains open; no route is strong enough yet for `Supplier verified`.

Commercial-readiness interpretation recorded in this pass:

- The captured `ZAR82.07` landed-cost signal from the AliExpress adjustable-box comparison sits within the planning band `R159-R229`.
- At the planning-band floor `R159`, the route implies:
  - landed-cost ratio about `51.6%`
  - gross margin about `48.4%`
  - gross-margin amount about `R76.93`
- At the planning-band ceiling `R229`, the route implies:
  - landed-cost ratio about `35.8%`
  - gross margin about `64.2%`
  - gross-margin amount about `R146.93`
- This means the captured comparison route clears the minimum landed-cost ratio and minimum gross-margin gates inside the planning band, but it does not prove the `50%+` target at the very bottom of the band.
- Shipping cost is higher than product cost on the captured adjustable-box route, so that commercial risk flag remains active.
- The CJ route now has captured shipping, but its `Ship to ZA` fee (`$41.63`) materially outweighs the item cost (`$3.34`) and its `15-45` day delivery window remains commercially weak.
- The portable-case route did not yield a confirmed shipping-cost field in this pass, so no landed-cost or gross-margin claim is recorded for that route.

Recommended status and formal replacement posture:

- Recommended status for `Jewellery / accessory organiser`: `Candidate`
- Do **not** move the product to `Supplier verified` in this pass.
- Keep `Jewellery / accessory organiser` as the preferred replacement-direction `Candidate`.
- Do not treat formal replacement of `Adhesive Wall Hooks Pack` as fully approved yet; keep it blocked until preferred supplier selection, shipping closure, landed-cost closure, and final image/variant/risk review are completed.

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
- No supplier credential storage
- `artifacts/` remains untracked/uncommitted

## Slice 11O Jewellery organiser viability and supplier-path decision (docs-only)

Objective:

- Record the current viability decision and supplier-path posture for `Jewellery / accessory organiser` without approving final replacement or `Supplier verified` status.

Slice 11N commit hash reviewed:

- `5ad34921b8c5e0d1d7c3dc60f875dec5c50a6b0c`

Supplier-path decision recorded in this pass:

- `CJdropshipping` route: rejected for current commercial readiness
  - Captured basis: `SKU: CJCC119463801AZ`, product cost `$3.34`, `PostNL` to South Africa, shipping fee `$41.63`, estimated delivery `15-45 days`
  - Decision reason: oversized-product plus DDU / buyer-duties cautions, shipping materially higher than item cost, and long delivery window make the route commercially weak for current launch planning
- AliExpress adjustable-box route: preferred supplier-path candidate
  - Captured basis: visible item price `ZAR15.65`, visible shipping `ZAR66.42`, visible delivery `May 12 - 21`, ratings signal `4.8` with `1008` reviews, sales signal `5,000+ sold`
  - Evidence-only landed-cost signal: `ZAR82.07`
  - Planning/evidence-only selling-price reference: `R159-R229`
- Portable-case route: secondary comparison only
  - Captured basis: visible item price `ZAR41.39`, visible delivery `May 12 - 22`, ratings signal `4.5` with `650` reviews, sales signal `5,000+ sold`
  - Shipping-cost field was not independently confirmed
- `DSers` comparison: still preferred for confidence, but not blocking continued `Candidate` status for the organiser route

Catalogue-position decision recorded in this pass:

- `Adhesive Wall Hooks Pack` remains replacement-directed / deferred.
- `Jewellery / accessory organiser` remains the preferred replacement-direction `Candidate`.
- No formal final replacement approval is recorded in this pass.
- No product is promoted to `Supplier verified` in this pass.
- Target selling price references and landed-cost references remain planning/evidence-only until final Product Owner commercial approval.

Evidence still needed before formal replacement approval:

- exact AliExpress adjustable-box item URL/reference
- confirmed current item price
- confirmed current shipping price to South Africa
- confirmed delivery estimate to South Africa
- estimated landed cost in ZAR
- target selling price band
- estimated gross margin
- variant/options clarity
- image suitability
- product dimensions
- description facts
- return/quality risk note
- no unsupported claims
- Product Owner commercial decision note

Evidence still needed before `Supplier verified`:

- supplier/source confirmed
- exact supplier/item reference recorded
- product cost confirmed
- South Africa shipping option confirmed
- shipping cost confirmed
- estimated landed cost calculated
- delivery expectation recorded
- variants/options checked
- image suitability checked
- description facts available
- target selling price selected
- estimated gross margin calculated
- return/quality risk reviewed
- compliance/claim risk reviewed
- final Product Owner decision recorded

Safety confirmations:

- No product import
- No Shopify push
- No publish
- No collection edits
- No department link switching
- No checkout customization
- No dynamic catalogue wiring
- No PDP Add to Cart wiring
- No cart wiring
- No final legal publication
- No theme/code changes
- No supplier credential storage
- `artifacts/` remains untracked/uncommitted

## Slice 11P Jewellery organiser DSers comparison and commercial assessment (docs-only)

Objective:

- Record the Product Manager assessment for `Jewellery / accessory organiser` after Slice 11O without approving final replacement or `Supplier verified` status.

Slice 11O commit hash reviewed:

- `fe6e64c0294488491ceef15d0ca0259f82bf03de`

DSers / supplier-path decision recorded in this pass:

- `Jewellery / accessory organiser` remains the preferred replacement-direction `Candidate`.
- `Jewellery / accessory organiser` is not formally approved as the final replacement.
- `Jewellery / accessory organiser` is not promoted to `Supplier verified`.
- AliExpress adjustable-box remains the preferred supplier-path candidate.
- `CJdropshipping` remains rejected for current commercial readiness.
- Portable-case remains secondary comparison only.
- `DSers` comparison remains preferred for added confidence, but incomplete `DSers` evidence does not block continued `Candidate` status.
- `Adhesive Wall Hooks Pack` remains replacement-directed / deferred.

Commercial readiness assessment recorded in this pass:

- Evidence-only landed-cost signal: `R82.07`
- `R159` estimated margin: `48.4%`; gross profit `R76.93`
- `R179` estimated margin: `54.2%`; gross profit `R96.93`
- `R199` estimated margin: `58.8%`; gross profit `R116.93`
- `R229` estimated margin: `64.2%`; gross profit `R146.93`
- Preferred planning price band: `R179-R229`
- `R159` remains only a competitive lower bound
- Shipping cost higher than product cost remains flagged
- Delivery expectation is not yet proven as `<=21` business days
- `Deals` rail is allowed only if final proven margin is `55%+`
- `Best Sellers` remains blocked until actual sales evidence exists
- Do not promise delivery by `Mother's Day`

Formal replacement approval remains blocked by:

- exact AliExpress adjustable-box item URL/reference
- evidence capture date/time
- confirmed current item price
- confirmed current shipping price to South Africa
- confirmed current delivery estimate to South Africa
- final landed cost in ZAR
- selected target selling price
- final gross margin
- variant/options clarity
- image suitability
- product dimensions
- description facts
- return/quality risk note
- compliance/claim risk note
- no unsupported claims check
- Product Owner commercial decision note

`Supplier verified` remains blocked by:

- confirmed supplier/source
- exact supplier/item reference
- confirmed product cost
- confirmed South Africa shipping option
- confirmed shipping cost
- calculated landed cost
- recorded delivery expectation
- checked variants/options
- checked image suitability
- available description facts
- selected target selling price
- calculated gross margin
- return/quality risk review
- compliance/claim risk review
- final Product Owner decision

Safety confirmations:

- No product import
- No Shopify push
- No publish
- No live theme overwrite
- No collection edits
- No department link switching
- No checkout customization
- No dynamic catalogue wiring
- No PDP Add to Cart wiring
- No cart wiring
- No final legal publication
- No theme/code changes
- No supplier credential storage
- No `Supplier verified` promotion
- No final replacement approval
- `artifacts/` remains untracked/uncommitted

## Slice 11Q Jewellery organiser current supplier proof and formal replacement evidence closure (docs-only)

Objective:

- Record that `Jewellery / accessory organiser` remains the preferred replacement-direction `Candidate`, but current supplier proof is still incomplete and does not yet support formal replacement approval review or `Supplier verified` movement.

Slice 11P commit hash reviewed:

- `6f4f83923f34bf9d5b39538329cc136b75bbfb89`

Current supplier-proof assessment recorded in this pass:

- `Jewellery / accessory organiser` remains the preferred replacement-direction `Candidate`.
- Do not move `Jewellery / accessory organiser` to Product Owner formal replacement approval review yet.
- Do not promote `Jewellery / accessory organiser` to `Supplier verified`.
- Do not approve `Jewellery / accessory organiser` as the final replacement.
- AliExpress adjustable-box remains the preferred supplier-path candidate.
- `DSers` evidence remains useful for supplier confidence, but incomplete and not sufficient for formal approval or `Supplier verified` status.
- `Adhesive Wall Hooks Pack` remains replacement-directed / deferred.
- Commercial readiness remains inconclusive pending current supplier proof.

Current supplier-proof summary recorded in this pass:

- Exact AliExpress adjustable-box item URL/reference: `Missing`
- `DSers` item/source reference: `Missing` or incomplete
- Evidence capture date/time: `Missing`
- Current item price: `Missing`
- Current shipping price to South Africa: `Missing`
- Current delivery estimate to South Africa: `Missing`
- Final landed cost in ZAR: `Not proven`
- Selected target selling price: planning band only `R179-R229`
- Final gross margin: `Not proven`
- Variant/options clarity: `Missing`
- Image suitability: `Missing`
- Product dimensions: `Missing`
- Description facts: `Missing`
- Return/quality risk note: `Missing`
- Compliance/claim risk note: `Missing`
- No unsupported claims check: `Missing`
- Product Owner commercial decision note: still required

Commercial assessment preserved in this pass:

- Previous landed-cost signal `R82.07` remains planning-only
- `R159` estimated margin: `48.4%`
- `R179` estimated margin: `54.2%`
- `R199` estimated margin: `58.8%`
- `R229` estimated margin: `64.2%`
- Preferred planning band remains `R179-R229`
- `R159` remains competitive lower bound only
- `Deals` rail remains conditional on final proven margin of `55%+`
- `Best Sellers` remains blocked until actual sales evidence exists
- No `Mother's Day` delivery promise is allowed

Formal replacement approval blockers still open:

- exact item URL/reference
- evidence capture date/time
- confirmed item price
- confirmed shipping price to South Africa
- confirmed delivery estimate to South Africa
- final landed cost
- selected target selling price
- final gross margin
- variant/options clarity
- image suitability
- product dimensions
- description facts
- return/quality risk note
- compliance/claim risk note
- no unsupported claims check
- Product Owner commercial decision note

`Supplier verified` blockers still open:

- confirmed supplier/source
- exact supplier/item reference
- confirmed product cost
- confirmed South Africa shipping option
- confirmed shipping cost
- calculated landed cost
- recorded delivery expectation
- checked variants/options
- checked image suitability
- available description facts
- selected target selling price
- calculated gross margin
- return/quality risk review
- compliance/claim risk review
- final Product Owner decision

Safety confirmations:

- No product import
- No Shopify push
- No publish
- No live theme overwrite
- No collection edits
- No department link switching
- No checkout customization
- No dynamic catalogue wiring
- No PDP Add to Cart wiring
- No cart wiring
- No final legal publication
- No theme/code changes
- No supplier credential storage
- No `Supplier verified` promotion
- No final replacement approval
- `artifacts/` remains untracked/uncommitted

## Slice 11R Jewellery organiser supplier proof capture status (docs-only)

Objective:

- Record that the current supplier proof capture pack for `Jewellery / accessory organiser` remains incomplete, so the product stays `Candidate` only and cannot move to formal replacement approval review or `Supplier verified` status yet.

Slice 11Q commit hash reviewed:

- `0457a5faada646d8aab78a7565596134968f65a4`

Supplier-proof capture status recorded in this pass:

- `Jewellery / accessory organiser` remains the preferred replacement-direction `Candidate`.
- Do not move `Jewellery / accessory organiser` to formal replacement approval review yet.
- Do not promote `Jewellery / accessory organiser` to `Supplier verified`.
- Do not approve `Jewellery / accessory organiser` as the final replacement.
- AliExpress adjustable-box remains the preferred supplier-path candidate, but the exact item reference is still missing.
- `DSers` remains useful for supplier confidence and supplier-path comparison, but evidence is incomplete and insufficient for formal approval or `Supplier verified` status.
- `Adhesive Wall Hooks Pack` remains replacement-directed / deferred.
- Commercial readiness remains inconclusive.

Current supplier proof status recorded in this pass:

- Exact AliExpress adjustable-box item URL/reference: `Missing`
- `DSers` item/source reference: `Missing` or unavailable
- Evidence capture date/time: not captured
- Current item price: not verified
- Current shipping price to South Africa: not verified
- Current delivery estimate to South Africa: not verified
- Final landed cost in ZAR: not proven
- Selected target selling price: planning band only `R179-R229`
- Final estimated gross margin: not proven
- Variant/options clarity: `Missing`
- Image suitability: `Missing`
- Product dimensions: missing for exact supplier item
- Description facts: missing for exact supplier item
- Return/quality risk note: still required
- Compliance/claim risk note: still required
- No unsupported claims check: still required

Commercial assessment preserved in this pass:

- Previous landed-cost signal `R82.07` remains planning-only
- `R159` estimated margin: `48.4%`
- `R179` estimated margin: `54.2%`
- `R199` estimated margin: `58.8%`
- `R229` estimated margin: `64.2%`
- Preferred planning band remains `R179-R229`
- `R159` remains competitive lower bound only
- `Deals` rail remains conditional on final proven margin of `55%+`
- `Best Sellers` remains blocked until actual sales evidence exists
- No `Mother's Day` delivery promise is allowed

Formal replacement approval blockers still open:

- exact AliExpress item URL/reference
- `DSers` item/source reference if used
- evidence capture date/time
- confirmed item price
- confirmed shipping price to South Africa
- confirmed delivery estimate to South Africa
- final landed cost in ZAR
- selected target selling price
- final gross margin calculation
- variant/options proof
- image suitability proof
- product dimensions
- description facts
- return/quality risk note
- compliance/claim risk note
- no unsupported claims check
- Product Owner commercial decision note

`Supplier verified` blockers still open:

- confirmed supplier/source
- exact supplier/item reference
- confirmed product cost
- confirmed South Africa shipping option
- confirmed shipping cost
- calculated landed cost
- recorded delivery expectation
- checked variants/options
- checked image suitability
- available description facts
- selected target selling price
- calculated gross margin
- return/quality risk review
- compliance/claim risk review
- final Product Owner decision

Safety confirmations:

- No product import
- No Shopify push
- No publish
- No live theme overwrite
- No collection edits
- No department link switching
- No checkout customization
- No dynamic catalogue wiring
- No PDP Add to Cart wiring
- No cart wiring
- No final legal publication
- No theme/code changes
- No supplier credential storage
- No `Supplier verified` promotion
- No final replacement approval
- `artifacts/` remains untracked/uncommitted

## Slice 12I preview catalogue staging for visible products (bounded preview-only)

Objective:

- Determine the minimum safe action needed to make a controlled set of `8-12` products reviewable in the unpublished/password-protected preview store across the four launch collections.

Prerequisite commit reviewed:

- Slice 11R committed at `cc3317d2099c0d7f9d334b6e62cd2d0da1392744`

Safe inspection results recorded in this pass:

- Shopify CLI remained available for safe read-only checks.
- Preview theme `151207542967` remains present and `unpublished`.
- Storefront root checks still indicate password protection is active, which reduces general-public exposure risk.
- Read-only Shopify Admin inspection confirmed existing Shopify product records for at least:
  - `Under Cabinet Paper Towel Holder`
  - `Adjustable Laptop Stand`
  - `Multi-Use Storage Organizer Bin`
- Read-only Shopify Admin inspection confirmed the four launch collections remain present:
  - `Home & Living`
  - `Kitchen & Storage`
  - `Office & Desk`
  - `Tech Accessories`
- Existing collection-density evidence from earlier accepted slices remains the current working reference:
  - `Home & Living`: `1`
  - `Kitchen & Storage`: `4`
  - `Office & Desk`: `1`
  - `Tech Accessories`: `1`

Preview-visibility blocker recorded in this pass:

- Repo inspection confirmed that `sections/main-collection-foundation.liquid` still renders a fixed static-safe `8`-card placeholder grid and generic collection heading content rather than live collection-product data.
- Repo inspection confirmed that `sections/main-product-foundation.liquid` still renders a static-safe PDP shell and does not consume live Shopify product title, media, price, or variant data.
- Because live catalogue/PDP visibility remains deferred in the theme, Shopify product or collection data staging would not reliably make the preferred products visible in the unpublished preview storefront.
- For that reason, no Shopify product or collection mutation was performed in this pass.

Manual preview-staging checklist recorded for a later approved pass:

- Keep storefront password protection ON and keep preview theme `151207542967` unpublished before any later preview-data staging attempt.
- Do not stage `Jewellery / accessory organiser`; it remains parked as `Candidate` only until exact supplier/item proof exists.
- Do not use `Adhesive Wall Hooks Pack` as preview filler unless the Product Owner explicitly accepts that temporary exception.
- Once live collection/PDP visibility is approved, start with the preferred preview set:
  - `Desk Cable Clips Set`
  - `Cable Management Sleeve`
  - `Screen Cleaning Kit`
  - `Sink Drain Basket / Strainer`
  - `Phone / Tablet Desk Stand`
  - `Multi-Use Storage Organizer Bin`
  - `Adjustable Laptop Stand`
  - `Under Cabinet Paper Towel Holder`
- If additional preview density is still needed after that, use planning candidates already recorded in the catalogue matrix:
  - `Sofa / Bedside Pocket Organiser`
  - `Space-Saving Hanger Set`
  - `3-in-1 Charging Cable`
- Recommended collection assignments for that later pass:
  - `Home & Living`: `Sofa / Bedside Pocket Organiser`, `Space-Saving Hanger Set`
  - `Kitchen & Storage`: `Sink Drain Basket / Strainer`, `Under-Cabinet Paper Towel Holder`
  - `Office & Desk`: `Desk Cable Clips Set`, `Cable Management Sleeve`, `Phone / Tablet Desk Stand`, `Adjustable Laptop Stand`, `Multi-Use Storage Organiser Bin`
  - `Tech Accessories`: `Screen Cleaning Kit`, `3-in-1 Charging Cable`

Preview-only controls preserved in this pass:

- Products in the preview set remain `Candidate` only.
- No product in this pass is `Supplier verified`, final launch approved, import approved, or final-price approved.
- No delivery promise, urgency claim, `Mother's Day` promise, `Deals` discount claim, or `Best Sellers` claim is approved through this pass.

Safety confirmations:

- No Shopify product creation
- No Shopify product edits
- No Shopify collection edits
- No department link switching
- No product import
- No Shopify push
- No publish
- No live theme overwrite
- No checkout customization
- No dynamic catalogue wiring
- No PDP Add to Cart wiring
- No cart wiring
- No final legal publication
- No theme/code changes
- No supplier credential storage
- `artifacts/` remains untracked/uncommitted

## Slice 12J preview product visibility foundation (bounded theme implementation)

Objective:

- Replace the static-safe collection and PDP preview foundations with the smallest safe theme changes needed so the unpublished/password-protected preview theme can render real Shopify collection products and real Shopify PDP product data.

Prerequisite commit reviewed:

- Slice 12I accepted and committed at `2f0423373b499f2f6e9fff797b6cedbed79c31fc`

Root cause confirmed in this pass:

- `sections/main-collection-foundation.liquid` used section settings plus eight hardcoded `static-product-card` renders instead of `collection.title`, `collection.description`, or `collection.products`.
- `sections/main-product-foundation.liquid` used section settings plus hardcoded media, badges, pricing, option chips, and related cards instead of live `product` object data.
- Because those sections were disconnected from the native Shopify `collection` and `product` objects, real product records already present in Shopify could not appear meaningfully in preview collection routes or PDP routes.

Theme implementation recorded in this pass:

- `sections/main-collection-foundation.liquid` now prefers live `collection.title`, `collection.description`, and `collection.products`, while keeping the existing collection-shell layout and a safe empty-state path when no products exist.
- `snippets/live-product-card.liquid` was added so collection pages can keep the accepted product-card visual contract while rendering real product titles, images, prices, compare-at pricing when present, and real product links.
- `sections/main-product-foundation.liquid` now prefers live `product.title`, `product.media`, `product.description`, `product.options_with_values`, and selected-variant price data, while keeping purchase controls explicitly disabled and preview-only.
- `assets/theme.css` was updated minimally for disabled preview-only controls, live-product placeholder SVG treatment, and rich-text spacing inside the product description area.

Validation results recorded in this pass:

- `shopify theme check --path . --fail-level error` returned warning-only output after the Slice 12J Liquid changes; no slice-specific Theme Check errors remained after the related-products markup fix.
- Remaining Theme Check warnings are repo-level legacy warnings for remote assets plus warning noise caused by files under `artifacts/`; they were not changed in this pass.
- `shopify theme list` returned the currently authenticated store theme set:
  - live `148914077879` (`Horizon`)
  - unpublished `151207542967` (`Mzansi Select MVP Preview`)
  - development `151101407415`
- Product Owner-provided preview theme id `150454599863` was not present on the authenticated store and was therefore not safe to use.
- Safe identity reconciliation confirmed that unpublished theme `151207542967` (`Mzansi Select MVP Preview`) was the correct preview-validation target because it exists on `dropshippoc.myshopify.com`, is not the live theme, and is the only unpublished preview theme currently listed.
- `shopify theme push --store dropshippoc.myshopify.com --theme 151207542967 --only assets/theme.css --only sections/main-collection-foundation.liquid --only sections/main-product-foundation.liquid --only snippets/live-product-card.liquid --json` completed successfully.
- Post-push theme listing confirmed the live theme remained `148914077879` (`Horizon`) and the pushed target remained unpublished `151207542967` (`Mzansi Select MVP Preview`).

Preview-validation caveat recorded in this pass:

- Unauthenticated HTTP checks against the reconciled preview routes returned HTTP `200` but still served the storefront password wall for homepage, launch collection, and PDP preview URLs.
- A no-state-export Playwright reuse attempt against the local Chrome default profile did not yield a reusable authenticated storefront session in this pass, so browser-level confirmation of live collection cards and live PDP data remains blocked by authenticated preview access rather than by theme identity.
- Evidence for the identity reconciliation, push, and preview-access gap was written to `artifacts/platform/slice-12j-1-preview-theme-reconciliation-20260430-111007/`.

Preview-only controls preserved in this pass:

- Live collection/PDP data rendering is now enabled locally in the theme, but no product import, product edit, or collection edit was performed.
- Purchase actions remain disabled and preview-only; no Add to Cart, wishlist, cart, or checkout behaviour was enabled.
- No delivery promise, urgency claim, fake discount, unsupported scarcity claim, `Mother's Day` promise, or final launch approval was introduced in this pass.

Safety confirmations:

- No Shopify product creation
- No Shopify product edits
- No Shopify collection edits
- No product import
- No Shopify publish
- No live theme overwrite
- No checkout customization
- No final legal publication
- No supplier verification
- No `Supplier verified` promotion
- No final product approval
- No final replacement approval for `Jewellery / accessory organiser`
- No secret exposure
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

- Candidate: `18`
- Preview staged: `0`
- Supplier proof in progress: `7`
- Supplier verified: `0`

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
- `Jewellery / accessory organiser` (preferred replacement-direction candidate)
- `Sink Drain Basket / Strainer`
- `Phone / Tablet Desk Stand`

## Current six-product batch status

- All active first-six verification-focus products remain `Candidate`.
- Slice 11I refreshed the CJ product evidence for all six products.
- Public ZA-facing AliExpress search results were captured for all six products and used as the comparison fallback in this pass.
- `DSers` application pages were reachable, but targeted search queries returned `No Data`, so DSers comparison evidence remains incomplete.
- Slice 11M moves `Adhesive Wall Hooks Pack` out of the active first-six verification focus and into replacement-directed / deferred status.
- Slice 11M adds `Jewellery / accessory organiser` as the preferred replacement-direction `Candidate` in commercial-readiness planning, but not as `Supplier verified`.
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

Product Owner review of the documented Slice 13D supplier proof pack, confirmation of the seven `Supplier proof in progress` items and the paused cable-organiser status, and approval of the next supplier-proof follow-up scope before any product import or `Supplier verified` decision is revisited.

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
- Slice 11L is accepted and committed at `4de4efc4995578cd9d3c34f6aca78a4f1f184ab4`.
- Slice 11M is accepted and committed at `12ee842ced3f237cbc24a759e11164503b6129ce`.
- Slice 11N is accepted and committed at `5ad34921b8c5e0d1d7c3dc60f875dec5c50a6b0c`.
- Slice 11O is accepted and committed at `fe6e64c0294488491ceef15d0ca0259f82bf03de`.
- Slice 11P is accepted and committed at `6f4f83923f34bf9d5b39538329cc136b75bbfb89`.
- Slice 11Q is accepted and committed at `0457a5faada646d8aab78a7565596134968f65a4`.
- Slice 11R is accepted and committed at `cc3317d2099c0d7f9d334b6e62cd2d0da1392744`.
- Slice 12I is accepted and committed at `2f0423373b499f2f6e9fff797b6cedbed79c31fc`.
- Slice 12J is accepted and committed at `263e60f1588b03f4120121007411c701d342d9e4`.
- Local-first sourcing is the approved roadmap direction.
- Slice 13A is limited to docs-only local supplier strategy, supplier-prioritisation, launch matrix, and status-model recording.
- Slice 13C is limited to docs-only local supplier preview product shortlist, supplier weighting, and Candidate-only status recording.
- Slice 13D is limited to docs-only local supplier proof-pack recording, status movement to `Supplier proof in progress` only, and paused-item recording where evidence remains too broad or commercially weak.
- `ZA Dropshipping` is the best Shopify-integration and local-stock test candidate, but should be used only as a small pilot first because public Shopify app review confidence is weak.
- `Neat Freak` is the best current category-fit supplier for `Home & Living`, `Kitchen & Storage`, `Office & Desk`, storage, organisers, kitchen, laundry, and household utility, pending wholesale / dropship terms and image-usage-rights confirmation.
- `Gadgetgyz` is the best current `Tech Accessories` test supplier, pending stock, pricing, fulfilment workflow, delivery-SLA, and return-terms confirmation.
- `Men’s Republic` and `Third Wave Distribution` are conditional suppliers only and must be verified directly before MVP reliance.
- `Dropstore`, `Mantality`, `The Scents`, `Wheeltrend`, `Printify`, and `Printful` are deferred under the current local-first MVP strategy.
- `Beauty & Hair` remains outside the launch taxonomy and female hair pieces are deferred to a later Slice 13B opportunity assessment.
- The launch collection supplier matrix is now recorded for the four approved launch departments.
- The working product status model is now `Candidate`, `Preview staged`, `Supplier proof in progress`, and `Supplier verified`.
- `Preview staged` means visible in the preview store only and does not mean supplier approval, final pricing approval, delivery approval, claims approval, or final launch approval.
- The Slice 13C shortlist is now recorded as `12` Candidate-only preview-planning products across `Neat Freak`, `Gadgetgyz`, and `ZA Dropshipping`.
- `Neat Freak` carries the strongest current category-fit weighting.
- `Gadgetgyz` carries the strongest current `Tech Accessories` weighting.
- `ZA Dropshipping` remains useful for Shopify/local-stock testing, but its shortlisted product slots remain pending app/admin review before product and margin proof can be relied on.
- Seven shortlisted products now move to `Supplier proof in progress` only: `Compact Organiser Basket`, `2-Layer Carry Handle Container 3.8L`, `Hook-over Door Basket`, `Mini Plastic Divider Basket`, `Sink Strainer, stainless steel`, `Velcro Cable Tidies` / `Neat Cables Label Pack`, and `Acrylic Tablet or Phone Stand`.
- `Cable Organiser / Cable Management item` is paused because the current evidence is too broad and the visible public price signal is commercially weak at the current definition.
- Remaining shortlisted products stay `Candidate` only unless a later approved pass records a different status with evidence.
- `Supplier proof in progress` does not mean `Supplier verified`, launch approved, import approved, final-priced, delivery-approved, or claims-approved.
- Product-only margin calculations in this pass are planning estimates only, assume shipping is charged separately or otherwise recovered, and do not approve final pricing.
- Neat Freak public fulfilment guidance suggests most orders are sent within `2-7` working days after payment confirmation and can take `7-14` working days overall before / through courier delivery, so delivery timing must not be overpromised.
- Gadgetgyz still needs direct confirmation of shipping fee, SLA, image permission, and fulfilment workflow before any later status movement beyond `Supplier proof in progress`.
- Slice 12K preview product staging is paused/deferred.
- Shopify Admin automation and product staging must not continue until Product Owner reviews the Slice 13D proof pack and a later write-action pass is explicitly approved.
- Preview staging remains blocked/deferred in this pass.
- No Shopify write action occurred in this reconciliation pass.
- `artifacts/` remains untracked and must not be committed.
- The temporary safe routing rule remains `{{ routes.all_products_collection_url }}` for launch departments until dedicated launch collections are created and approved for exposure.
- The preferred launch-ready department handles are `home-living`, `kitchen-storage`, `office-desk`, and `tech-accessories`.
- `Garden & Outdoor`, `Bath & Bedroom`, and `Cleaning & Laundry` remain expansion-ready only and should stay deferred as launch destinations.
- Launch collection title/handle alignment, intro copy, SEO title, SEO meta description, unpublished-preview HTTP `200` validation, and Online Store exposure readiness are now treated as required setup checkpoints before a later department-link switch.
- Shopify Admin read-only inspection in Slice 12F confirms the four launch collections already exist and are included on `Online Store`; the remaining question is safe exposure timing, not collection creation feasibility.
- Slice 12G preview evidence confirms that the four collection routes render in the unpublished preview theme, but the page still presents the generic static-safe collection heading and repeated placeholder-style cards rather than department-specific live collection content.
- Slice 12H makes the collection gap plan explicit: minimum preview threshold `3`, preferred public launch threshold `5`, no department link switching while any launch collection has only `1` product, and each collection page must visibly expose the department name before switch approval.
- Slice 11K records that the current `25`-product plan already meets the preferred density targets on paper, so the remaining launch gap is not raw count but evidence-backed product quality, supplier closure, shipping, margin, and collection fit.
- Slice 11L now adds product-specific replacement evidence for the preferred `Jewellery / accessory organiser` direction.
- Slice 11M records that the replacement direction should become the preferred catalogue `Candidate` path, while formal replacement remains blocked by supplier, shipping, landed-cost, margin, image, and risk closure.
- Slice 11N confirms that the captured CJ route is available to ZA but commercially weak because shipping is high, delivery is long, and DDU/oversized cautions apply; the organiser route remains `Candidate` while preferred-supplier selection stays open.
- Slice 11O rejects the captured CJ route for current commercial readiness, records the AliExpress adjustable-box route as the preferred supplier-path candidate, keeps the portable-case route as secondary comparison only, and preserves `Candidate` status with no formal final replacement approval yet.
- Slice 11P keeps the organiser route at `Candidate`, keeps the AliExpress adjustable-box route as the preferred supplier-path candidate, records the preferred planning band as `R179-R229`, and confirms that incomplete `DSers` evidence does not block `Candidate` status.
- Slice 11Q confirms that current supplier proof is still too incomplete to move the organiser route into formal replacement approval review or `Supplier verified` review, even though the AliExpress adjustable-box route remains the preferred supplier-path candidate.
- Slice 11R confirms that the supplier proof capture pack remains incomplete, that the exact AliExpress item reference is still missing, and that the organiser route must remain `Candidate` only.
- Slice 12I confirms that the current preview theme still uses static-safe collection and PDP foundations, so Shopify preview-data staging would not make real products visibly reviewable in the unpublished storefront without a later approved live-catalogue visibility step.
- Slice 12J changes the local theme so collection pages now prefer live `collection` object data and PDP pages now prefer live `product` object data while purchase actions remain disabled and preview-only.
- Unknown supplier, cost, selling price, margin, shipping, image, and import-readiness values remain `Unconfirmed`.
- Product import, Shopify push/publish, live overwrite, checkout customization, dynamic catalogue wiring, PDP Add to Cart wiring, cart wiring, final legal publication, Contact/About route remediation, supplier credential storage, and actual supplier verification remain out of scope for this pass.

## Risks / unknowns

- All `25` product slots still require supplier/source checking before any movement beyond `Candidate`.
- The first six-product verification batch still needs comparison closure, pricing decisions, and final risk acceptance before any product can move beyond `Candidate`.
- `DSers` comparison remains incomplete for the preferred replacement direction because the session redirected to the login page again in this pass.
- The captured CJ replacement candidate now has ZA closure, but the route is still commercially weak because shipping materially outweighs item cost and the delivery/DDU posture is unattractive for current launch planning.
- The public ZA-facing AliExpress comparison improves comparison coverage and provides a usable landed-cost signal, but it still does not close preferred-supplier selection or final merchandising-fit risk for the preferred candidate.
- The preferred supplier-path candidate still needs exact item-reference confirmation, current ZA shipping reconfirmation, product-dimensions clarity, and final Product Owner commercial approval before formal replacement can be approved.
- The preferred path now has stronger planning-margin visibility, but delivery expectation is still not proven as `<=21` business days and the path remains blocked from `Supplier verified`.
- Current supplier proof is stale/incomplete because exact current item URL, item price, shipping price, delivery estimate, evidence timestamping, dimensions, image suitability, description facts, and risk notes are still missing.
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
11. Slice 11K docs-only collection allocation and replacement planning: completed and committed.
12. Slice 11L replacement candidate supplier evidence pass: completed and committed.
13. Slice 11M replacement candidate commercial readiness plan: completed and committed.
14. Slice 11N supplier evidence closure for `Jewellery / accessory organiser`: completed and committed.
15. Slice 11O supplier-path decision for `Jewellery / accessory organiser`: completed and committed.
16. Slice 11P DSers comparison and commercial assessment for `Jewellery / accessory organiser`: completed and committed.
17. Slice 11Q current supplier proof and formal replacement evidence closure for `Jewellery / accessory organiser`: completed and committed.
18. Slice 11R supplier proof capture status for `Jewellery / accessory organiser`: completed and committed.
19. Slice 12I preview catalogue staging blocked-status update: completed and committed.
20. Slice 12J preview product visibility foundation: completed and committed.
21. Slice 12K preview product staging and Playwright/Admin staging retry: paused/deferred pending local supplier shortlist approval.
22. Slice 13A docs-only local supplier pivot and launch sourcing matrix update: completed and committed.
23. Slice 13C docs-only local supplier preview product shortlist update: completed and committed.
24. Post-Slice 13C tracker sync: completed and committed.
25. Slice 13D docs-only local supplier proof pack update: completed locally in this pass.
26. Product Owner review of the Slice 13D supplier proof pack and decision on the next supplier-proof follow-up scope.
27. Keep the seven promoted items at `Supplier proof in progress` only, keep `Cable Organiser / Cable Management item` paused unless narrowed or re-costed successfully, keep `ZA Dropshipping` slots pending app/admin review, and keep `Beauty & Hair` outside the launch taxonomy.
28. Resume preview product staging, Shopify Admin automation, or other Shopify write actions only after Product Owner approves a later write-action follow-up path.

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
- Use `artifacts/supplier-verification/slice-11l/jewellery-accessory-organiser-evidence-summary.md` as the current replacement-direction evidence summary for the preferred `Adhesive Wall Hooks Pack` replacement path.
- Use `artifacts/supplier-verification/slice-11n/jewellery-accessory-organiser-evidence-summary.md` as the current supplier-evidence-closure summary for the organiser replacement route.
- Use [docs/catalogue/local-supplier-sourcing-matrix-v1.md](/d:/dev/mzansi-select-shopify/docs/catalogue/local-supplier-sourcing-matrix-v1.md) as the source of truth for the approved local-first supplier strategy, supplier tiers, and launch collection supplier matrix.
- Use the Slice 13D proof pack there as the source of truth for the current local supplier follow-up status on the first preview shortlist.
- Use the Slice 12J local theme changes before approving any later preview-data staging; collection and PDP routes now prefer live Shopify data where present, while purchase actions remain disabled and preview-only.
- Treat Slice 12K Playwright/Admin staging work as parked for later until Product Owner reviews the Slice 13D proof-pack outcome and explicitly approves a later write-action pass.
- Do not continue Shopify Admin automation, preview product staging, or other Shopify write work until Product Owner reviews the Slice 13D proof-pack outcome and explicitly approves a later write-action pass.
- Treat `Preview staged` as preview-store visibility only; it does not imply supplier approval, launch approval, final pricing approval, delivery approval, or claims approval.
- Treat `Compact Organiser Basket`, `2-Layer Carry Handle Container 3.8L`, `Hook-over Door Basket`, `Mini Plastic Divider Basket`, `Sink Strainer, stainless steel`, `Velcro Cable Tidies` / `Neat Cables Label Pack`, and `Acrylic Tablet or Phone Stand` as `Supplier proof in progress` only until the remaining evidence gaps and Product Owner commercial decision are closed.
- Treat `Cable Organiser / Cable Management item` as paused until a narrower exact product or lower-cost confirmation is captured.
- Treat the remaining Slice 13C shortlisted products as `Candidate` only unless a later approved pass records a different status with evidence.
- Treat the two `ZA Dropshipping` shortlist slots as pending app/admin review until product, stock, and margin proof is captured inside that workflow.
- Keep female hair pieces outside the launch taxonomy and treat them as a later Slice 13B opportunity assessment only.
- Keep launch department navigation on `{{ routes.all_products_collection_url }}` until the four approved launch collections exist and are approved for exposure.
- Keep launch department navigation on `{{ routes.all_products_collection_url }}` until Product Owner explicitly accepts the current collection density and direct-URL exposure posture.
- Keep launch department navigation on `{{ routes.all_products_collection_url }}` until Product Owner explicitly accepts the current collection density and preview presentation as department-appropriate after the Slice 12J live-data rendering path is validated on the approved unpublished theme.
- Use the Slice 12H density gates when evaluating any later launch-collection exposure decision: minimum preview threshold `3`, preferred public launch threshold `5`, and no switch while any launch collection remains at `1` product.
- Treat the Slice 11K replacement shortlist as planning-only except where Slice 11L now adds product-specific evidence; even there, the preferred `Jewellery / accessory organiser` candidate must remain `Candidate` until shipping, landed cost, and comparison closure are complete.
- Use the Slice 11R supplier-proof capture status before allowing `Jewellery / accessory organiser` to move into formal replacement approval review or to formally replace `Adhesive Wall Hooks Pack` in the live launch catalogue matrix.
- Use the Slice 12J preview-rendering foundation before approving any later Shopify product-data staging intended for visible storefront review; the local theme now prefers live Shopify collection/PDP data where present, the safe push target is reconciled, and the remaining blocker is authenticated storefront preview access.
- Do not expose expansion-ready department links as launch destinations until a later approved expansion pass.
- Do not store supplier credentials in the repo during any pass.
- Capture all required supplier evidence before recommending any status movement beyond `Candidate`.
- Follow the recorded sequencing before any product import planning decision is requested.
- Record `Tracker status` and `LLD status` in every handoff.

## Final handoff summary

This Slice 13D docs-only pass records the first local supplier proof pack against the shortlist, moves seven products to `Supplier proof in progress` only, pauses `Cable Organiser / Cable Management item` because the current definition is too broad and commercially weak, records the product-only margin caveat plus fulfilment/shipping blockers, and keeps all launch, import, pricing, staging, and verification approvals blocked. No Shopify write action occurred in this pass, supplier/product readiness remains the active blocker set, and `artifacts/` remains untracked and uncommitted.

---

**Footer Standard For This Pass:** Slice 13D docs-only local supplier proof pack update recorded. Approved source HTML unchanged. This pass documents seven `Supplier proof in progress` items, the paused cable-organiser status, the product-only margin caveat, the open fulfilment/shipping blockers, leaves the LLD unchanged because no durable theme/data-rendering rule changed, records that no Shopify write action occurred, and keeps `artifacts/` untracked and uncommitted.
