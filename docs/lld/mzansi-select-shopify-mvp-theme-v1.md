# Mzansi Select Shopify MVP Theme V1

**Document Type:** Low-Level Design / Technical Specification  
**Prepared:** 2026-04-29  
**Owner:** Product Owner  
**Status:** Slice 12J / 12J.1 preview product visibility foundation and preview-theme identity reconciliation recorded; safe targeted push completed to unpublished theme `151207542967`, while browser-level preview validation remains blocked by the storefront password wall without a reusable authenticated session  
**Version:** 2.0  
**Source Frontend:** `D:\dev\mzansi-select-shopify\mzansi-select-theme.html`

## Approved metadata/header/footer standard used in the repo

Search result from this pass:

- No pre-existing `docs/` directory was present in the inspected workspace.
- No approved Low-Level Design or Technical Specification template was found in the current repo path.
- No prior metadata/footer convention containing `Built by SG Digital`, `Sikhwari Group`, `Prepared`, `Owner`, `Status`, or `Version` was found in the inspected workspace.

Interim standard used for this document set:

- Header metadata fields: `Document Type`, `Prepared`, `Owner`, `Status`, `Version`, `Source Frontend`
- Footer convention: explicit handoff note stating implementation status and whether source theme/code files changed

Repo-level approval of this documentation standard is unknown and requires implementation confirmation.

## Source frontend path

`D:\dev\mzansi-select-shopify\mzansi-select-theme.html`

## Problem framing

The approved storefront currently exists as a static HTML file with embedded CSS and lightweight JavaScript interaction mocks. The task is to convert that approved storefront into a functional Shopify MVP theme without changing the visual identity, layout structure, information hierarchy, or brand feel established by the approved HTML.

## User goal

Help South African shoppers browse departments quickly, discover curated products confidently, understand delivery/support value immediately, and move toward add-to-cart with clear pricing and trustworthy navigation.

## Business goal

Launch a Shopify MVP storefront that preserves the approved brand presentation while enabling real catalog, navigation, search, cart, and content management workflows inside Shopify.

## Slice 12A clickable inventory backlog (durable launch-readiness expectations)

Durable expectations for launch readiness and wiring, based on the accepted Slice 12A clickable inventory:

- Site-wide links must route to one of:
  - a valid Shopify native route (e.g. `routes.root_url`, `routes.cart_url`, `routes.search_url`)
  - a valid page resource route (e.g. `/pages/about`, `/pages/contact`, policy pages as approved)
  - a valid in-page anchor **only when the destination page is known to contain that anchor**
- Global navigation/footer links must not rely on page-local anchors unless they first route to the correct page (e.g. use `/pages/about#shipping` rather than `#shipping` from arbitrary pages).
- Anchor mismatches are a publish-readiness defect. Example: footer Terms link `#terms-conditions` must match the actual Terms anchor (currently `id="terms"` in the page foundation) or be replaced with a page route.
- Department navigation requires an approved destination strategy (collections vs curated pages vs homepage sections) and an approved interaction behavior (desktop + mobile) before publish readiness.
- Launch department navigation must use a staged routing rule: keep temporary fallback routing on `all-products` until the approved launch collections exist, then switch only the approved launch departments to dedicated collection handles.
- PDP Add to Cart must be wired (product form, variant/quantity selection, add-to-cart) before any product import / commerce readiness work is treated as complete.
- Cart checkout, quantity, and remove controls must be wired before publish readiness (even if broader catalogue wiring remains deferred).
- Wishlist, newsletter, social links, brands, gift cards, and save-for-later may remain deferred only with explicit Product Owner decision recorded in the tracker.
- Live product/catalogue/search/collection wiring remains deferred until explicitly approved; placeholder shells are acceptable until then, but must be clearly labeled/treated as non-functional.

## MVP Shopify theme boundary

Included in boundary:

- Shopify Online Store theme conversion of the approved storefront design language
- Homepage implementation based on the approved HTML
- Shared site chrome: top bar, header, navigation, trust bar, footer
- Core storefront templates: home, collection, product, search, cart, standard page, 404
- Reusable product and promotional components derived from the approved HTML

Out of boundary for this document pass:

- Checkout customization
- Product import or merchandising operations
- App installation choices
- ERP, shipping, payments, CRM, or third-party integrations
- Final content population beyond the approved sample structure
- Any redesign or reinterpretation of the approved front-end aesthetic

## Must-preserve visual rules

- Typography pairing must remain `DM Sans` for body/UI and `Playfair Display` for premium headline emphasis.
- Core colour tokens extracted from the HTML must remain the baseline system:
  - `--black: #111111`
  - `--gold: #C8973A`
  - `--gold-light: #E8B85A`
  - `--cream: #FAF8F4`
  - `--white: #FFFFFF`
  - `--border: #E5E0D8`
  - `--text-muted: #888880`
  - `--text-body: #333330`
  - `--green-dark: #1A2818`
- Max content width must remain `1280px` with horizontal inner padding of `32px` where used by the source.
- Header must remain sticky with white background, subtle border, and light shadow.
- Section alternation between white and cream backgrounds must be preserved where shown in the source.
- Gold must remain an accent colour, not a dominant background colour outside approved CTA/badge usage.
- Product cards must remain bordered white cards with rounded corners, subtle hover lift, image-first composition, compact metadata, and dark add-to-cart CTA.
- Primary CTA language must retain the practical, low-friction tone already present in the source.
- Visual hierarchy must preserve the sequence: trust/value messaging first, browse/navigation second, hero third, curated commerce sections after.

## Component / section inventory extracted from the HTML

1. Top announcement bar with four trust/value points and inline SVG icons.
2. Sticky header with logo lockup, search input, category select, search button, account link, wishlist link, cart link, and cart count badge.
3. Primary navigation bar with department dropdown trigger, department menu, primary nav links, and right-side delivery/location badges.
4. Hero section with trust badge, multi-line headline, supporting body copy, primary and secondary CTAs, collage image grid, and lower-right value badge.
5. Horizontal category strip with department/service quick links, circular image or icon treatments, and sub-copy CTA lines.
6. Best Sellers product-grid section with section heading, link-out CTA, four product cards, sale/new badges, ratings, price states, wishlist hover action, and add-to-cart CTA.
7. Split promo banner with editorial copy on left and image on right.
8. New Arrivals feature grid with two large image-led promo tiles and overlay CTA treatment.
9. Kitchen & Storage product-grid section reusing the same product-card pattern as Best Sellers.
10. Trust bar with four reassurance blocks.
11. Footer with brand column, four navigation columns, newsletter sign-up column, copyright row, payment methods, and South African identity marker.
12. Toast feedback component for add-to-cart success.
13. Lightweight newsletter success/error feedback behavior.

## Shopify artefact mapping

## Slice 1 technical foundation

Slice 1 introduces only the minimal Shopify foundation needed to begin implementation without converting the full homepage yet.

Implemented foundation:

- `.gitignore`
- `layout/theme.liquid`
- `config/settings_schema.json`
- `assets/theme.css`
- `sections/announcement-topbar.liquid`
- `sections/site-header.liquid`
- `sections/primary-navigation.liquid`
- `sections/trust-bar.liquid`
- `sections/site-footer.liquid`
- `snippets/toast-feedback.liquid`
- native Shopify folder structure: `layout`, `config`, `templates`, `sections`, `snippets`, `assets`, `locales`

Deferred beyond Slice 1:

- homepage section conversion
- JSON or Liquid template implementation
- product/collection/search/cart data wiring
- section settings beyond minimal shell needs
- locale abstraction beyond what is necessary for validity

## Slice 2 chrome responsibilities

Slice 2 refines the accepted global shell baseline without converting homepage content modules.

Slice 2 scope includes:

- top bar fidelity refinement
- header fidelity refinement
- navigation fidelity refinement
- trust bar fidelity refinement
- footer fidelity refinement
- toast/cart feedback shell fidelity refinement
- chrome-only CSS alignment to the approved HTML

Slice 2 explicitly defers:

- homepage content section conversion
- category strip conversion
- product grid or product-card conversion
- promo banner conversion
- arrivals conversion
- collection, product, cart, search, page, or 404 template implementation
- product or collection data wiring beyond native chrome-level route/cart references

## Slice 3 homepage foundation responsibilities

Slice 3 converts the approved homepage structure into Shopify theme architecture while keeping content static-safe and implementation-light.

Slice 3 scope includes:

- `templates/index.json` creation with the approved homepage section order
- hero collage section implementation
- category strip section implementation
- reusable featured product grid section implementation for Best Sellers and Kitchen & Storage
- promo banner split section implementation
- new arrivals feature-tile section implementation
- homepage-only CSS extraction from the approved HTML
- reusable snippets for section headings and static-safe product-card rendering

Slice 3 explicitly defers:

- dynamic Shopify product or collection wiring
- product import or merchandising operations
- collection, PDP, search, cart, support, legal, or 404 template implementation
- add-to-cart, toast, wishlist, newsletter, or cart behavior wiring beyond the accepted chrome shell

## Slice 4 collection/category foundation responsibilities

Slice 4 introduces the first native collection/category template foundation while keeping listing content static-safe and implementation-light.

Slice 4 scope includes:

- `templates/collection.json` creation for collection/category routing
- collection heading and intro foundation
- collection listing foundation using accepted static product-card placeholders
- empty collection/no-results state foundation
- collection/category CSS extraction that stays aligned to homepage card and heading rhythm
- a reusable empty-state snippet

Slice 4 explicitly defers:

- dynamic Shopify collection product wiring
- product import or catalogue setup
- sorting, filtering, pagination, or richer browse controls
- PDP, search, cart, support, legal, or 404 template implementation

Theme Check blocker-fix note:

- The collection/homepage preview blocker pass is limited to adding required image `width` and `height` attributes to placeholder images and shortening the collection section schema name to `Collection main`.
- RemoteAsset warnings remain intentionally deferred because they were not blocking unpublished preview safety.

## Slice 5 product detail page foundation responsibilities

Slice 5 introduces the first native product detail page foundation while keeping PDP content static-safe and implementation-light.

Slice 5 scope includes:

- `templates/product.json` creation for product routing
- product gallery/media placeholder foundation
- product title, pricing, badge, option-shell, quantity shell, and add-to-cart visual shell
- description/specification content foundation
- trust/support notes and related placeholder area
- PDP-only CSS extraction aligned to accepted homepage and collection card/typography rhythm

Slice 5 explicitly defers:

- live Shopify product object wiring
- live product media, options, variants, pricing, or stock states
- product forms, cart add routes, or checkout behaviour
- search, cart, support, legal, or 404 template implementation

## Slice 12J preview product visibility foundation responsibilities

Slice 12J enables real Shopify collection and PDP data rendering inside the existing accepted collection and product layouts while keeping transactional behaviour deferred.

Slice 12J scope includes:

- collection intro and listing rendering from live `collection.title`, `collection.description`, and `collection.products`
- a live product-card snippet that keeps the accepted card layout while using real product title, media, price, compare-at price when present, and product URL
- PDP rendering from live `product.title`, `product.media`, `product.description`, selected-variant price data, and `product.options_with_values`
- preview-only/disabled purchase controls so the page stays honest while cart and checkout wiring remain out of scope
- safe empty/fallback states when a collection has no products or a product has limited media/content

Slice 12J explicitly defers:

- product import or merchandising operations
- Shopify product creation or editing
- Shopify collection editing
- live Add to Cart, cart, checkout, or wishlist behaviour
- homepage, search, cart, legal/support, or navigation rework beyond what is already accepted
- publish or live-theme overwrite

Slice 5.5 PDP QA closure note:

- The uncommitted Slice 5 PDP foundation was reviewed and accepted as PASS WITH NOTES.
- Approved source hash remained `894D0F1BF015B68D77F990BCDCA958B4125BFDAEC139EEC79B4FD47D9AE4506F`.
- JSON validation passed for `config/settings_schema.json`, `templates/index.json`, `templates/collection.json`, and `templates/product.json`.
- `shopify theme check --path . --fail-level error` passed with zero blocking errors.
- `23` non-blocking `RemoteAsset` warnings remain open across `layout/theme.liquid`, `sections/category-strip.liquid`, `sections/feature-tile-grid.liquid`, `sections/hero-collage.liquid`, `sections/main-product-foundation.liquid`, `sections/promo-banner-split.liquid`, and `snippets/static-product-card.liquid`.
- No product import, Shopify login, theme list, push, preview/store action, publish, checkout change, or live product/cart wiring was introduced during the accepted review pass.

## Slice 6 search/results foundation responsibilities

Slice 6 introduces the first native search/results page foundation while keeping search content static-safe and implementation-light.

Slice 6 scope includes:

- `templates/search.json` creation for search routing
- search heading and query/result summary shell
- static-safe product results grid placeholder
- no-results state and browse/support prompt foundation
- search-only CSS extraction aligned to accepted homepage, collection, and PDP card/typography rhythm

Slice 6 explicitly defers:

- live Shopify search object wiring
- real query terms, result ranking, predictive search, or search result loops
- product import or search merchandising operations
- cart, support, legal, or 404 template implementation

Slice 6.5 search/results QA closure note:

- The uncommitted Slice 6 search/results foundation was reviewed and accepted as PASS WITH NOTES.
- Approved source hash remained `894D0F1BF015B68D77F990BCDCA958B4125BFDAEC139EEC79B4FD47D9AE4506F`.
- JSON validation passed for `config/settings_schema.json`, `templates/index.json`, `templates/collection.json`, `templates/product.json`, and `templates/search.json`.
- `shopify theme check --path . --fail-level error` passed with zero blocking errors.
- `23` non-blocking `RemoteAsset` warnings remain open across `layout/theme.liquid`, `sections/category-strip.liquid`, `sections/feature-tile-grid.liquid`, `sections/hero-collage.liquid`, `sections/main-product-foundation.liquid`, `sections/promo-banner-split.liquid`, and `snippets/static-product-card.liquid`.
- The existing `sections/site-header.liquid` `search.terms` binding was identified as pre-existing and unchanged.
- No product import, Shopify login, theme list, push, preview/store action, publish, checkout change, or live search/product/cart wiring was introduced during the accepted review pass.

## Slice 7 cart page/drawer foundation responsibilities

Slice 7 introduces the first native cart page foundation while keeping cart content static-safe and implementation-light.

Slice 7 scope includes:

- `templates/cart.json` creation for cart routing
- cart heading and intro foundation
- static-safe line-item row/card placeholder foundation
- quantity shell, subtotal summary, and checkout CTA visual shell
- support/trust note and empty-cart state foundation
- cart-only CSS extraction aligned to accepted homepage, collection, PDP, and search card/typography rhythm

Slice 7 explicitly defers:

- live Shopify cart item wiring
- cart update, remove, quantity-change, or checkout actions
- cart drawer interactivity beyond the shared accepted shell language
- product import or live cart merchandising operations
- support, legal, or 404 template implementation

Slice 7.5 cart QA closure note:

- The uncommitted Slice 7 cart foundation was reviewed and accepted as PASS WITH NOTES.
- Approved source hash remained `894D0F1BF015B68D77F990BCDCA958B4125BFDAEC139EEC79B4FD47D9AE4506F`.
- JSON validation passed for `config/settings_schema.json`, `templates/index.json`, `templates/collection.json`, `templates/product.json`, `templates/search.json`, and `templates/cart.json`.
- `shopify theme check --path . --fail-level error` passed with zero blocking errors.
- `24` non-blocking `RemoteAsset` warnings remain open across `layout/theme.liquid`, `sections/category-strip.liquid`, `sections/feature-tile-grid.liquid`, `sections/hero-collage.liquid`, `sections/main-product-foundation.liquid`, `sections/promo-banner-split.liquid`, `snippets/cart-line-item.liquid`, and `snippets/static-product-card.liquid`.
- The existing `sections/site-header.liquid` cart route link was identified as pre-existing and unchanged.
- No product import, Shopify login, theme list, push, preview/store action, publish, checkout change, or live cart/checkout wiring was introduced during the accepted review pass.

## Slice 8 legal/support foundation responsibilities

Slice 8 introduces the first native legal/support page foundations while keeping page content static-safe, South Africa-first, and implementation-light.

Slice 8 scope includes:

- `templates/page.json` creation for general legal/about/support page routing
- `sections/main-page-foundation.liquid` for About, Shipping, Returns, Privacy, Terms, and FAQ/support placeholder coverage
- `templates/page.contact.json` creation for dedicated support/contact routing
- `sections/support-page-foundation.liquid` for contact/support, shipping/returns guidance, FAQ, and policy-publication placeholder coverage
- legal/support-only CSS extraction aligned to accepted collection, PDP, search, and cart intro/card rhythm

Slice 8 explicitly defers:

- final legal wording/sign-off and live policy publication
- live support/contact/legal-policy behaviour beyond placeholder rendering
- live contact form or backend support handling
- customer accounts, authentication, or address-management flows
- Shopify push, publish, checkout customization, product import, or 404 template implementation

Slice 8.5 legal/support QA closure note:

- The uncommitted Slice 8 legal/support foundation was reviewed and accepted as PASS WITH NOTES.
- Legal/support page foundations exist and remain acceptable as foundation-only launch-direction content.
- Generic page foundation structure and dedicated contact/support page structure were accepted for this slice.
- About/store promise content was accepted as restrained and suitable for launch-direction placeholder use.
- Contact/support guidance, South Africa-first shipping/delivery guidance, cautious returns/refunds guidance, and readable FAQ/support blocks were accepted for this slice.
- Privacy and Terms sections were accepted as clearly marked placeholder content pending legal review.
- Policy-publication placeholder notice was accepted as clearly confirming that final legal publication remains deferred.
- Visual rhythm remained consistent with the accepted homepage, collection, PDP, search, and cart foundations, and global chrome remained unchanged.
- Approved source hash remained `894D0F1BF015B68D77F990BCDCA958B4125BFDAEC139EEC79B4FD47D9AE4506F`.
- JSON validation passed for `config/settings_schema.json`, `templates/index.json`, `templates/collection.json`, `templates/product.json`, `templates/search.json`, `templates/cart.json`, `templates/page.json`, and `templates/page.contact.json`.
- `shopify theme check --path . --fail-level error` passed with zero blocking errors.
- `24` non-blocking `RemoteAsset` warnings remain open across `layout/theme.liquid`, `sections/category-strip.liquid`, `sections/feature-tile-grid.liquid`, `sections/hero-collage.liquid`, `sections/main-product-foundation.liquid`, `sections/promo-banner-split.liquid`, `snippets/cart-line-item.liquid`, and `snippets/static-product-card.liquid`.
- No product import, Shopify login, theme list, push, preview/store action, publish, checkout customization, final legal sign-off, live policy publication, or customer account/auth/contact backend wiring was introduced during the accepted review pass.

## Slice 9 404 / generic empty-state foundation responsibilities

Slice 9 introduces the first native 404 foundation while keeping recovery content static-safe, helpful, and implementation-light.

Slice 9 scope includes:

- `templates/404.json` creation for native Shopify 404 routing
- `sections/main-404-foundation.liquid` for 404 hero, generic empty-state reuse, and recovery-path coverage
- 404-only CSS extraction aligned to accepted search, cart, and legal/support empty-state rhythm
- safe recovery links for continue shopping, browse categories, contact support, and return home

Slice 9 explicitly defers:

- live routing analytics, search suggestions, or auto-recovery behaviour
- live support/contact backend handling
- customer accounts, authentication, or address-management flows
- Shopify push, publish, checkout customization, product import, or broader live catalogue wiring

Slice 9.5 404/generic empty-state QA closure note:

- The uncommitted Slice 9 404/generic empty-state foundation was reviewed and accepted as PASS WITH NOTES.
- The 404 template foundation exists and is structurally valid.
- The generic empty-state pattern remains reusable and visually consistent with the accepted storefront foundations.
- Recovery links for continue shopping, browse categories, contact support, and return home were all present in the reviewed Slice 9 files.
- Tone remained clear, helpful, and consistent with the accepted Mzansi Select direction.
- Visual rhythm remained aligned with the accepted homepage, collection, PDP, search, cart, and support foundations, and global chrome remained unchanged.
- Approved source hash remained `894D0F1BF015B68D77F990BCDCA958B4125BFDAEC139EEC79B4FD47D9AE4506F`.
- JSON validation passed for `config/settings_schema.json`, `templates/index.json`, `templates/collection.json`, `templates/product.json`, `templates/search.json`, `templates/cart.json`, `templates/page.json`, `templates/page.contact.json`, and `templates/404.json`.
- `shopify theme check --path . --fail-level error` passed with zero blocking errors.
- `24` non-blocking `RemoteAsset` warnings remain open across `layout/theme.liquid`, `sections/category-strip.liquid`, `sections/feature-tile-grid.liquid`, `sections/hero-collage.liquid`, `sections/main-product-foundation.liquid`, `sections/promo-banner-split.liquid`, `snippets/cart-line-item.liquid`, and `snippets/static-product-card.liquid`.
- No product import, Shopify push, publish, login, theme-list, checkout customization, store action, final legal sign-off, live policy publication, customer account/auth/contact backend wiring, or dynamic product/catalogue wiring was introduced during the accepted review pass.

## Shopify theme folder structure

- `layout/`
  - Contains the global theme shell.
- `config/`
  - Contains minimal theme settings schema for shell-level placeholders only.
- `templates/`
  - Contains `index.json`, `collection.json`, `product.json`, `search.json`, `cart.json`, `page.json`, `page.contact.json`, and `404.json` for approved homepage, collection, PDP, search/results, cart, legal/support, and 404 foundations.
- `sections/`
  - Contains global shell placeholders plus homepage, collection, PDP, search/results, cart, legal/support, and 404 composition sections.
- `snippets/`
  - Contains reusable shell fragments plus homepage, collection, PDP, search/results, cart, and 404 utility snippets.
- `assets/`
  - Contains extracted global/base shell CSS plus homepage, collection, PDP, search/results, cart, legal/support, and 404 foundation styling.
- `locales/`
  - Reserved for later slice internationalization or repeated string extraction if needed.

## Slice 1 responsibilities

### `layout/theme.liquid`

- Owns the valid Shopify document shell.
- Loads the approved font pair used by the source storefront.
- Includes `{{ content_for_header }}`.
- Includes `{{ content_for_layout }}`.
- Loads `{{ 'theme.css' | asset_url | stylesheet_tag }}`.
- Renders only the persistent shell placeholders:
  - announcement topbar
  - site header
  - primary navigation
  - trust bar
  - site footer
  - toast/cart feedback container
- Continues to exclude homepage content section conversion in Slice 2.

### `config/settings_schema.json`

- Provides only minimal shell-level global settings.
- Supports repeated shell text where global reuse is helpful:
  - brand tagline
  - search placeholder
  - footer country label
- Intentionally avoids broad merchant configurability in Slice 1.

### `assets/theme.css`

- Contains only approved global/base extraction needed for the shell.
- Includes:
  - source colour tokens
  - global reset/base rules
  - base typography and font usage
  - container rhythm used by shell components
  - topbar styling
  - header/search/action styling
  - navigation shell styling
  - trust bar styling
  - footer styling
  - toast styling
- Excludes full homepage section conversion such as hero, category strip, product grids, promo modules, and arrivals modules.

Slice 2 refinement note:

- Chrome/base CSS may be refined where needed for closer fidelity to the approved source.
- Homepage module CSS remains deferred.

Slice 3 addition:

- `assets/theme.css` now includes homepage module styling for hero, category strip, section headings, product-card placeholders, promo banner, and arrivals tiles.
- Homepage CSS remains source-derived and does not introduce Shopify product-loop styling differences.

Slice 4 addition:

- `assets/theme.css` now includes collection/category foundation styling for intro, collection listing wrapper, and empty-state presentation.
- Collection CSS remains source-aligned and reuses existing grid/card language rather than inventing a new browsing treatment.

Slice 5 addition:

- `assets/theme.css` now includes product detail page foundation styling for gallery, summary, option-shell, quantity shell, support panels, and related placeholder area.
- PDP CSS remains source-aligned and reuses the same pricing, CTA, and product-card design language already accepted on homepage and collection foundations.

Slice 6 addition:

- `assets/theme.css` now includes search/results foundation styling for the search hero, query summary shell, browse/support prompt, and results-page spacing.
- Search/results CSS remains source-aligned and reuses the same heading, CTA, empty-state, and product-card language already accepted on homepage, collection, and PDP foundations.

Slice 7 addition:

- `assets/theme.css` now includes cart foundation styling for the cart hero, line-item shells, order-summary shell, support prompt, and empty-cart spacing.
- Cart CSS remains source-aligned and reuses the same heading, CTA, price-stack, and cream/white card language already accepted on homepage, collection, PDP, and search/results foundations.

Slice 8 addition:

- `assets/theme.css` now includes legal/support foundation styling for generic page heroes, support-page heroes, legal/policy cards, FAQ blocks, and support guidance panels.
- Legal/support CSS remains source-aligned and reuses the same heading, card, and cream/white rhythm already accepted on collection, PDP, search/results, and cart foundations.

Slice 9 addition:

- `assets/theme.css` now includes 404 foundation styling for the hero shell, recovery-card layout, and recovery-link treatment.
- 404 CSS remains source-aligned and reuses the same empty-state surface, heading hierarchy, spacing rhythm, and premium-practical recovery tone already accepted across search, cart, and legal/support foundations.

### Shell placeholder responsibilities

- `sections/announcement-topbar.liquid`
  - Carries the approved trust-message strip structure.
- `sections/site-header.liquid`
  - Carries the approved logo, search shell, account/wishlist/cart action structure.
- `sections/primary-navigation.liquid`
  - Carries the approved department trigger/menu and primary nav shell.
- `sections/trust-bar.liquid`
  - Carries the approved reassurance block shell.
- `sections/site-footer.liquid`
  - Carries the approved footer information architecture shell.
- `snippets/toast-feedback.liquid`
  - Carries the structural toast/cart feedback container only.

Slice 2 refinement note:

- These shell files now prioritize closer alignment to the approved HTML's structure, identifiers, and chrome-level copy while remaining implementation-light.

Slice 3 addition:

- `sections/hero-collage.liquid`
  - Carries the approved hero copy, CTA shell, collage grid, and value badge.
- `sections/category-strip.liquid`
  - Carries the approved horizontal department/service strip.
- `sections/featured-product-grid.liquid`
  - Reuses one static-safe product-grid implementation for Best Sellers and Kitchen & Storage.
- `sections/promo-banner-split.liquid`
  - Carries the approved editorial promo band.
- `sections/feature-tile-grid.liquid`
  - Carries the approved New Arrivals tile layout.
- `snippets/section-heading.liquid`
  - Reuses the approved section title/link pattern.
- `snippets/static-product-card.liquid`
  - Carries static-safe product-card markup only.
- `snippets/live-product-card.liquid`
  - Reuses the accepted product-card contract while rendering live Shopify product title, image, price, compare-at pricing, and product-link data for collection and related-product contexts.
- `snippets/product-badge.liquid`
  - Reuses sale/new badge rendering.
- `snippets/price-stack.liquid`
  - Reuses the approved price hierarchy pattern.

Slice 4 addition:

- `sections/main-collection-foundation.liquid`
  - Carries collection/category intro, listing foundation, and empty/no-results state switching.
  - Slice 12J now makes this section prefer live `collection.title`, `collection.description`, and `collection.products` while keeping the accepted layout structure.
- `snippets/empty-state.liquid`
  - Carries reusable empty collection/no-results presentation aligned to the approved design language.

Theme Check blocker-fix addition:

- `sections/category-strip.liquid`, `sections/feature-tile-grid.liquid`, `sections/hero-collage.liquid`, `sections/promo-banner-split.liquid`, and `snippets/static-product-card.liquid`
  - Now include explicit image `width` and `height` attributes to satisfy Shopify Theme Check without changing sources, wrappers, classes, or layout intent.
- `sections/main-collection-foundation.liquid`
  - Schema name shortened from `Main collection foundation` to `Collection main` to satisfy Shopify Theme Check name-length rules.

Slice 5 addition:

- `sections/main-product-foundation.liquid`
  - Carries PDP gallery, summary, pricing, option-shell, quantity shell, support notes, detail content, and related presentation.
  - Slice 12J now makes this section prefer live `product` object data while leaving purchase actions disabled and preview-only.

Slice 6 addition:

- `sections/main-search-foundation.liquid`
  - Carries search heading, query/result summary shell, static-safe results grid, no-results state, and browse/support prompt presentation.

Slice 7 addition:

- `sections/main-cart-foundation.liquid`
  - Carries cart heading, static-safe line-item list, subtotal summary shell, checkout CTA shell, support note, and empty-cart presentation.
- `snippets/cart-line-item.liquid`
  - Carries reusable static-safe cart row presentation including image, badges, pricing, quantity shell, and remove action shell.

Slice 8 addition:

- `sections/main-page-foundation.liquid`
  - Carries About, Shipping, Returns, Privacy, Terms, and FAQ/support placeholder presentation.
- `sections/support-page-foundation.liquid`
  - Carries support intro, contact/support guidance cards, shipping/returns guidance, FAQ, and policy-publication placeholder presentation.

Slice 9 addition:

- `sections/main-404-foundation.liquid`
  - Carries 404 hero messaging, generic empty-state reuse, and safe recovery links for shopping, categories, support, and home.

### Sections

- `announcement-topbar`
  - Maps the black trust strip with four value propositions.
- `site-header`
  - Maps logo, search, account/wishlist/cart actions.
- `primary-navigation`
  - Maps department trigger/menu, main links, and nav badges.
- `hero-collage`
  - Maps hero copy, CTAs, collage grid, and value badge.
- `category-strip`
  - Maps department/service quick links.
- `featured-product-grid`
  - Reusable for Best Sellers and Kitchen & Storage.
- `promo-banner-split`
  - Maps the limited-time split banner.
- `feature-tile-grid`
  - Maps New Arrivals two-tile promotional grid.
- `trust-bar`
  - Maps the four trust blocks.
- `site-footer`
  - Maps all footer columns, newsletter form, and footer-bottom row.
- `global-feedback`
  - Optional section or global render slot for cart feedback toast if retained in theme architecture.

### Snippets

- `logo-lockup`
- `icon-inline`
- `header-action-link`
- `department-menu-item`
- `nav-badge`
- `category-strip-item`
- `section-heading`
- `product-card`
- `product-badge`
- `rating-stars`
- `price-stack`
- `promo-cta`
- `feature-tile`
- `trust-item`
- `footer-link-list`
- `social-icon-link`
- `payment-pill`
- `newsletter-form`
- `toast-feedback`

### Templates

- `index`
- `collection`
- `product`
- `search`
- `cart`
- `page`
- `404`

### Assets

- Global storefront CSS extracted from source tokens, spacing, typography, card, hero, navigation, and footer patterns
- Small interaction JavaScript for cart badge/toast handling where compatible with Shopify cart flow
- Icon system derived from inline SVG used in the approved HTML
- Approved font delivery strategy for `DM Sans` and `Playfair Display`

Slice 1 note:

- Only the shell/base subset of global storefront CSS is implemented in `assets/theme.css`.
- JavaScript remains deferred because mock storefront interactions have not yet been replaced with Shopify data wiring.

Slice 2 note:

- No JavaScript wiring was added in this slice.
- Toast and cart shell identifiers were refined only to support later implementation compatibility.

Slice 3 note:

- `templates/index.json` is now implemented to represent the approved homepage order only.
- No product-loop JavaScript or Shopify storefront data wiring was added for homepage content sections.

Slice 4 note:

- `templates/collection.json` continues to host the accepted collection/category page foundation.
- Slice 12J now makes `sections/main-collection-foundation.liquid` prefer live `collection` object data when products exist, while sorting, filtering, pagination, and broader merchandising logic remain deferred.

Slice 5 note:

- `templates/product.json` continues to host the accepted product detail page foundation.
- Slice 12J now makes `sections/main-product-foundation.liquid` prefer live `product` object data while keeping Add to Cart, cart, checkout, and broader transactional behaviour deferred.

Slice 6 note:

- `templates/search.json` is now implemented to represent a static-safe search/results foundation only.
- No live search-object JavaScript, query loops, predictive search, or product/cart wiring was added for search content sections.

Slice 7 note:

- `templates/cart.json` is now implemented to represent a static-safe cart foundation only.
- No live cart object JavaScript, cart forms, quantity updates, cart routes, or checkout wiring was added for cart content sections.

Slice 8 note:

- `templates/page.json` and `templates/page.contact.json` are now implemented to represent static-safe legal/support foundations only.
- No live contact-form JavaScript, customer account/auth wiring, or policy-publication workflow was added for legal/support content sections.

Slice 9 note:

- `templates/404.json` is now implemented to represent a static-safe 404 recovery foundation only.
- No live routing analytics, search recovery, support backend handling, or catalogue loops were added for 404 content sections.

### Settings

- Brand colour tokens with approved defaults matching source values
- Typography settings locked or defaulted to the approved font pairing
- Header nav link management
- Department menu item management
- Top-bar trust item management
- Hero copy, CTA labels, and hero imagery management
- Category strip item management
- Featured collection/product source selection for reusable product-grid section
- Promo banner content and image management
- Feature tile content and image management
- Trust bar content management
- Footer menus, social links, newsletter text, and payment-label management

## Homepage structure mapping

Required homepage order extracted from the approved HTML:

1. Top announcement bar
2. Sticky header
3. Primary navigation with department menu
4. Hero collage section
5. Category strip
6. Best Sellers product grid
7. Promo banner split section
8. New Arrivals feature tiles
9. Kitchen & Storage product grid
10. Trust bar
11. Footer
12. Global toast feedback layer

Homepage implementation notes:

- The hero is the primary editorial statement and must not be displaced below product grids.
- The category strip is a visual bridge between hero and commerce modules and should remain immediately below the hero.
- Best Sellers and Kitchen & Storage reuse the same structural product-card system and should be implemented from the same underlying pattern.
- White and cream background alternation should be preserved exactly where shown.
- Slice 3 implements this order in `templates/index.json` using static-safe sections and snippets rather than Shopify product data loops.

## Collection/category page pattern

Known from source:

- Shared header, navigation, product-card, section-heading, trust bar, and footer patterns are valid for collection pages.
- Product merchandising should visually inherit the existing `products-grid` and `product-card` treatment.

Unknown / requires implementation confirmation:

- Exact collection hero or intro layout
- Filter placement and style
- Sort control placement and style
- Pagination or infinite-scroll approach
- Whether the category strip repeats on collection pages

Constraint for implementation:

- If a collection intro is added, it must reuse the homepage design language: cream/white background banding, Playfair section headline styling, muted support copy, gold-accent CTA language, and the same `1280px` container rhythm.

Slice 4 implementation note:

- The collection foundation now uses a cream intro panel, a homepage-aligned listing heading, the shared product-card snippet, and a reusable empty-state surface.
- Slice 12J now replaces the previous placeholder-card path with live `collection.products` rendering where products exist, while filters, sorting, pagination, and broader merchandising logic remain deferred.

Slice 5 implementation note:

- The PDP foundation uses a gallery-first layout, accepted price hierarchy, preview-safe support cues, and related product cards aligned to the homepage and collection visual language.
- Slice 12J now replaces the previous static-safe PDP shell with live `product` object rendering for title, media, price, description, and option values while keeping purchase actions disabled and preview-only.

## Durable Shopify collection taxonomy

Strongest department evidence from the approved source:

- `Home & Living`
- `Kitchen & Storage`
- `Office & Desk`
- `Tech Accessories`

These four departments are reinforced by the department dropdown, the category strip, the search category selector, and the product-card type labels shown in the approved storefront. They should be treated as the launch-stable Shopify browse taxonomy for the future catalogue plan.

Expansion-ready department candidates from the approved source:

- `Garden & Outdoor`
- `Bath & Bedroom`
- `Cleaning & Laundry`

These appear in the approved department dropdown and fit the accepted storefront feel, but they are not reinforced by the category strip or search selector. They may become live Shopify department collections only when launch product density is strong enough to avoid thin collection pages or navigation bloat.

Department versus merchandising-rail distinction:

- Treat `Shop All` as an umbrella browse collection rather than a department.
- Treat `Best Sellers`, `Deals`, `New In`, and `New Arrivals` as merchandising rails or manual/smart collections rather than stable departments.
- Treat any future `Featured`, `Trending`, or `Seasonal` surfaces the same way unless later approved source changes establish them as true browse departments.
- Treat the homepage `Kitchen & Storage` product grid as a featured department rail that reuses the real `Kitchen & Storage` collection, not as a separate taxonomy node.

Non-collection informational paths from the approved source:

- `Shipping`
- `Returns`
- `FAQ`
- `Contact Us`
- `About Us`
- `Track Order`
- `Privacy Policy`
- `Terms & Conditions`

These are part of the help/company page ecosystem and must not be implemented as Shopify catalogue departments.

Category addition rules:

- New top-level departments may be recommended only when they reuse the existing department-led browse structure, card rhythm, and navigation feel already approved in the source.
- New top-level departments must not be introduced solely to support a short-term promotion, new-arrivals rail, or deal campaign.
- If a category idea is primarily time-bound, trend-led, promotional, or editorial, it should default to a merchandising collection or homepage rail rather than to permanent taxonomy.
- Expansion-ready departments already present in the approved source are preferred over inventing net-new top-level taxonomy.

Launch catalogue readiness criteria affected by taxonomy:

- The future 25-product readiness matrix should be built around the four launch-stable departments first.
- Additional departments should only enter launch scope once they can support a credible collection landing page and at least one reused merchandising surface without looking sparse.
- The readiness matrix must score stable departments separately from merchandising rails and separately from informational pages.
- Contact/About route availability is already resolved in unpublished preview evidence, but launch-readiness remains blocked until supplier and commercial readiness gates are met.

## Launch catalogue planning rules

Approved launch departments and coverage counts:

- `Home & Living` — `6` product slots
- `Kitchen & Storage` — `7` product slots
- `Office & Desk` — `5` product slots
- `Tech Accessories` — `7` product slots
- Total approved launch planning coverage: `25` product slots

Expansion-ready only:

- `Garden & Outdoor`
- `Bath & Bedroom`
- `Cleaning & Laundry`

Merchandising rails remain distinct from departments:

- `Shop All`
- `Best Sellers`
- `Deals`
- `New In`
- `New Arrivals`
- `Featured`
- `Trending`
- `Seasonal`

These may drive homepage merchandising, manual collections, or smart collections later, but they must not replace or dilute the stable department-led browse taxonomy.

## Department destination strategy

Temporary safe routing before collections/products exist:

- The accepted temporary safe destination for launch departments is `{{ routes.all_products_collection_url }}`.
- This temporary rule applies to the four approved launch departments in both the primary department menu and the homepage category strip.
- The temporary fallback avoids broken or empty department destinations while collection resources and approved launch content are still missing.

Launch-ready routing once approved collections exist:

- The preferred dedicated launch collection handles are:
  - `home-living`
  - `kitchen-storage`
  - `office-desk`
  - `tech-accessories`
- Once those collections exist in Shopify and are approved for exposure, the four launch department links should route to:
  - `/collections/home-living`
  - `/collections/kitchen-storage`
  - `/collections/office-desk`
  - `/collections/tech-accessories`
- Launch department links should not switch to dedicated collection URLs until the underlying collections are created, visible to Online Store, and accepted as ready to replace the temporary fallback.

Collection-readiness thresholds before link-switch review:

- Minimum preview threshold: `3` products per launch collection.
- Preferred public launch threshold: `5` products per launch collection.
- No department link switching is allowed while any launch collection still has only `1` product.
- Preferred launch density targets are:
  - `Home & Living`: `5-6` products
  - `Kitchen & Storage`: `6-7` products
  - `Office & Desk`: `5-6` products
  - `Tech Accessories`: `6-7` products

Expansion-ready department exposure rule:

- `Garden & Outdoor`, `Bath & Bedroom`, and `Cleaning & Laundry` remain expansion-ready only.
- Proposed future handles may be reserved as:
  - `garden-outdoor`
  - `bath-bedroom`
  - `cleaning-laundry`
- Expansion-ready departments should stay deferred from launch navigation exposure until a later approved catalogue expansion pass confirms that those destinations are intentionally ready.

Empty collection guidance:

- Empty or sparse collection states are acceptable for unpublished preview QA and internal setup only.
- Empty collections are not the preferred live primary-navigation destination for launch departments.
- If a dedicated department collection is still empty, the safer live fallback remains `all-products` until the Product Owner approves the switch.

Risks and dependencies:

- Keeping launch departments on `all-products` for too long weakens department intent clarity and makes the accepted taxonomy less visible in browse behaviour.
- Activating dedicated department links too early risks sending shoppers to sparse or empty collection pages that feel unfinished.
- Shopify Admin setup is required before activation: collection creation, handle confirmation, Online Store availability, and approved collection content direction.
- This strategy changes destination rules only; it does not approve product import, dynamic catalogue wiring, PDP Add to Cart wiring, cart wiring, Shopify push, or publish activity.

## Launch collection setup content rules

Approved launch collection content requirements:

- Each approved launch collection must have:
  - the approved collection title
  - the approved collection handle
  - short intro copy
  - SEO title
  - SEO meta description
- The approved launch collections are:
  - `Home & Living` -> `home-living`
  - `Kitchen & Storage` -> `kitchen-storage`
  - `Office & Desk` -> `office-desk`
  - `Tech Accessories` -> `tech-accessories`

Online Store exposure readiness rules:

- Collection title and handle must match the approved strategy before exposure.
- Short intro copy must be added before preview readiness is treated as complete.
- SEO title and meta description must be added before the collection is treated as ready for destination-switch review.
- The collection route must return HTTP `200` in unpublished preview before it is treated as preview-ready.
- A launch collection should be made available to Online Store only when it is intentionally ready for preview review.
- Public launch navigation should avoid empty or thin department pages.
- Department links should remain on `all-products` until the Product Owner approves switching to the dedicated collection URLs.

Visible collection-content expectation:

- The generic phrase `Everyday Essentials` is acceptable as temporary preview/template evidence only.
- Before department link switching, each launch collection page must clearly show its actual department name:
  - `Home & Living`
  - `Kitchen & Storage`
  - `Office & Desk`
  - `Tech Accessories`
- If `Everyday Essentials` remains as a shared design phrase, the department name must still be visible and clear on the page.

Merchandising quality expectations:

- Products placed in each launch collection must match the department intent.
- Filler products must not be used to reach readiness thresholds.
- Product cards must have usable titles, images, and prices before public navigation exposure is considered acceptable.
- `Best Sellers` remains blocked until real sales evidence exists.
- `Deals` should be used only where margin supports a genuine discount.
- `New In` / `New Arrivals` can be used for launch products.
- `Featured` / `Trending` / `Seasonal` remain merchandising rails, not departments.
- `Mother's Day` / `Winter-ready` positioning may be used only where product fit, timing, shipping expectation, and margin support it.
- Seasonal copy is campaign/merchandising copy, not permanent taxonomy.

Empty preview collection guidance:

- Empty collections are acceptable during unpublished preview review only.
- Empty collections are not sufficient for public launch navigation readiness.
- If a collection is still empty or thin, preview review may continue, but the launch department destination should remain on `all-products`.
- Even when the preview route returns HTTP `200`, the page is not ready for link-switch review if department naming is unclear or if density thresholds are met only through weak-fit or filler products.

Expansion collection deferral:

- `garden-outdoor`, `bath-bedroom`, and `cleaning-laundry` remain deferred from launch collection setup and launch navigation exposure.
- Expansion collection handles may be reserved for later use, but they should not enter launch setup scope without a later approved expansion pass.

Constraints carried into any later setup pass:

- No product import is implied by collection-content setup planning.
- No Shopify push, publish, live overwrite, checkout customization, dynamic catalogue wiring, PDP Add to Cart wiring, or cart wiring is implied by these rules.
- No collection edit or department link switch is implied by collection-readiness planning alone.

Catalogue readiness statuses for planning:

- `Candidate`
- `Supplier verified`
- `Content ready`
- `Import ready`
- `Rejected`

Readiness-rule constraints:

- Unknown product titles, supplier details, cost, target selling price, margin, and shipping assumptions must remain `TBD` or `Unconfirmed` until verified.
- Confirmed product names may be carried into readiness planning only when they exist in the approved source HTML or accepted project documentation.
- Planning price bands may be recorded before verification only when they are clearly labeled as planning assumptions rather than live prices.
- Product import remains unapproved in this slice even where planning records a product slot.
- No slot should be treated as launch-ready for import until supplier, cost, margin, shipping, content, image, and risk verification are complete.
- No merchandising rail should override the catalogue-readiness gates recorded below.

Durable 4-stage readiness movement rules:

- `Candidate` -> `Supplier verified` only when supplier/source, landed cost, and South Africa shipping are checked.
- `Supplier verified` -> `Content ready` only when product title, description, images, variants, and risk notes are ready.
- `Content ready` -> `Import ready` only when margin, shipping, supplier, content, image, and risk checks are complete.
- No product may be considered `Import ready` unless all required supplier, cost, margin, shipping, content, image, and risk checks are complete.

Durable Candidate -> Supplier verified evidence fields:

- Supplier/source confirmed
- Supplier link or internal reference captured
- Supplier SKU/SPU/reference captured
- Product cost captured
- Landed cost estimated
- South Africa shipping option checked
- Shipping cost captured
- South Africa shipping expectation checked
- Delivery expectation captured
- Variant/options checked
- Minimum image quality checked
- Basic description facts available
- Target selling price recorded
- Estimated gross margin recorded
- Margin risk reviewed
- Return/quality risk reviewed
- Compliance/claim risk reviewed
- Decision note recorded
- Recommended status recorded: `Candidate` / `Supplier verified` / `Rejected`
- Next action recorded

Durable commercial readiness gates:

- Estimated gross margin must reach at least `45%` before a product can be considered commercially ready for status movement beyond `Candidate`.
- Target gross margin should reach `50%+` wherever the product is intended to remain a durable catalogue candidate.
- Preferred landed cost ratio is landed cost at or below `55%` of the target selling price.
- Products under `R150` should retain at least `R45` absolute gross margin.
- Products at `R150+` should retain at least `R70` absolute gross margin.
- Preferred delivery expectation to South Africa is `<=21` business days.
- A commercial risk flag must be recorded whenever shipping cost is higher than product cost.
- `Deals` rail is allowed only when gross margin is proven at `55%+`.
- `Best Sellers` rail remains blocked until actual sales evidence exists.
- Planning price bands remain assumptions only and must not be treated as live pricing unless later approved.
- No product import is approved merely because a planning price band or commercial threshold has been recorded.

Durable rejection rules:

- Reject products with poor or unreliable South Africa shipping.
- Reject products with unclear variants or compatibility.
- Reject products with weak margin once verified.
- Reject products with bad images or unsupported claims.
- Reject products with high breakage, return, or support risk when the value case is weak.

## Product detail page pattern

Known from source:

- Product pricing language, badges, ratings, wishlist affordance, and add-to-cart CTA style are already established by the homepage product-card pattern.
- Supporting trust signals should remain visible via shared top bar, nav badges, trust bar, and footer.

Unknown / requires implementation confirmation:

- Exact gallery layout
- Variant picker layout
- Quantity selector treatment
- Product description/tab structure
- Related products placement
- Sticky purchase panel behavior

Constraint for implementation:

- Any product-page purchase area must reuse the approved colour system, button styling, typography, and compact price hierarchy already shown in product cards instead of introducing a new design treatment.

## Search/results pattern

Known from source:

- Search is a primary header behaviour and includes an input, category selector, and explicit search button.
- Search results should reuse the established section heading and product grid/card patterns.

Unknown / requires implementation confirmation:

- Search results header copy
- Search suggestion or predictive search behaviour
- No-results merchandising logic

Constraint for implementation:

- Search results pages must feel like an extension of the homepage rather than a utility-only layout.

Slice 6 implementation note:

- The search/results foundation uses a cream intro shell, a static query summary, the accepted product-card grid rhythm, a reusable empty-state surface, and a browse/support recovery prompt.
- Search content remains static-safe placeholders until live Shopify search wiring is explicitly approved.

## Cart page / drawer pattern

Known from source:

- Cart presence is communicated through the header cart icon, numeric count badge, add-to-cart button feedback, and compact toast confirmation.
- Cart trust and support language should stay consistent with the top bar, nav badges, trust bar, and footer reassurance patterns.

Slice 7 implementation note:

- The cart foundation uses a cream intro shell, static-safe line-item cards, a calm order-summary panel, support reassurance, and a reusable empty-state surface.
- Cart content remains static-safe placeholders until live Shopify cart and checkout wiring is explicitly approved.

## Cart drawer / cart page pattern

Known from source:

- Cart presence is communicated through the header cart icon, numeric count badge, add-to-cart button feedback, and temporary toast confirmation.

Unknown / requires implementation confirmation:

- Whether MVP uses a cart drawer, a dedicated cart page, or both
- Line-item layout
- Cart upsell treatment
- Empty-cart layout
- Error handling layout

Constraint for implementation:

- Cart success feedback should preserve the approved tone and compact confirmation style shown by the toast interaction.

## Legal/support page pattern

Known from source:

- Help, Shipping, Returns, FAQ, Contact Us, Privacy Policy, and Terms & Conditions are present in the navigation ecosystem and footer link structure.

Slice 8 implementation decision:

- Use a general page template plus a dedicated contact/support template to establish static-safe legal/support structure without implying final legal approval.
- Keep copy clear, honest, South Africa-first, and explicitly marked as placeholder where policy or operational details still need confirmation.
- Avoid live contact forms, customer account flows, or backend support handling in this slice.

Constraint for implementation:

- Legal and support pages must retain the same header, navigation, footer, typography, container width, muted body-copy styling, and premium-practical tone already accepted across the storefront.

## 404 page pattern

Slice 9 implementation decision:

- Use a single 404 template plus one main section to establish a calm recovery-oriented empty-state page without inventing a novelty error layout.
- Reuse the existing empty-state surface and section-heading language where practical so the 404 page feels native to the same storefront system.
- Provide simple recovery links back to shopping, categories, support, and home while keeping all behaviour static-safe.

Constraint for implementation:

- 404 must reuse the approved hero typography language, practical supportive copy tone, and existing dark/ghost CTA pattern instead of introducing a novelty error page design.

## Empty states pattern

Known from source:

- Empty cart count state exists and defaults to `0`.

Unknown / requires implementation confirmation:

- Empty wishlist messaging

Slice 9 implementation note:

- The current foundation set now covers empty collection, empty search, empty cart, and 404 recovery states through a shared empty-state visual pattern.
- The empty collection pattern is acceptable as an unpublished preview/setup state, but it should not become the preferred live destination for launch department navigation when `all-products` remains the safer fallback.
- The empty collection pattern is also acceptable during launch collection setup review, but only until title/handle/content/SEO checks and unpublished-preview HTTP `200` validation are complete.

Constraint for implementation:

- Empty states should use the same muted text colour, Playfair-led heading hierarchy where appropriate, and existing dark/ghost CTA button patterns.

## Header/footer/navigation consistency rules

- Top bar, sticky header, and navigation are part of the brand shell and should remain globally consistent across homepage, collection, product, search, support, and legal templates.
- Logo lockup must preserve the mixed-type treatment: bold `Mzansi` plus italic gold `Select`, with the small uppercase tagline below.
- Header search must remain prominent and centered within the header structure rather than being reduced to a minor icon-only affordance.
- Department navigation must preserve its dark green trigger, dropdown positioning, and white panel with gold top border.
- Active nav links must retain the gold text treatment and gold underline rule.
- Footer must retain the multi-column information structure, newsletter placement, payment pill row, and South African brand marker.

## Responsive behaviour

### Mobile

Known from source:

- No explicit mobile breakpoints or mobile-only layout rules are defined in the approved HTML/CSS.
- Existing source behaviour includes flexible wrapping in buttons and footer-bottom content plus horizontal scroll for the category strip.

Unknown / requires implementation confirmation:

- Mobile nav collapse pattern
- Mobile search behaviour
- Mobile hero stacking rules
- Mobile product-grid column count
- Mobile footer column stacking order

Constraint for implementation:

- Mobile adaptation must preserve the same component order, typography hierarchy, colours, and premium-practical brand feel without introducing a simplified visual language.

### Tablet

Known from source:

- No explicit tablet breakpoints or tablet-only layout rules are defined in the approved HTML/CSS.

Unknown / requires implementation confirmation:

- Tablet column counts for hero, product grids, arrivals tiles, trust bar, and footer

Constraint for implementation:

- Tablet layouts should preserve the desktop composition logic as far as possible while reducing columns only as needed for fit.

### Desktop

Extracted desktop layout rules from the approved HTML:

- `1280px` max-width containers with `32px` horizontal padding
- Two-column hero layout
- Three-column by three-row collage composition with one wide tile and one tall tile
- Four-column product grids
- Two-column promo banner
- Two-column New Arrivals tile grid
- Four-column trust grid
- Six-column footer layout with a wider brand column

## Component states

### Default

- All major components ship in a clean neutral default state with white, cream, dark green, muted grey, and gold accents.

### Hover

- Search button changes from black to gold.
- Header action text changes to gold.
- Department trigger darkens.
- Department menu items gain cream background and gold accent.
- Nav links shift to gold.
- Hero/product/arrival imagery scales subtly on hover.
- Product cards lift with shadow.
- Wishlist button becomes visible on product-card hover.
- Add-to-cart buttons, promo CTA, arrival CTA, social icons, and footer links all have defined hover treatments.

### Focus

- Search wrapper has a gold `focus-within` border.
- Newsletter email input has a gold focus border.
- Department menu is also opened by button focus in the static source.

### Active

- Primary nav active state is explicitly defined with gold text and a gold underline.

### Disabled

- No disabled states are defined in the approved HTML. Disabled-state treatment is unknown / requires implementation confirmation.

### Loading

- No explicit loading-state components are defined in the approved HTML. Loading-state treatment is unknown / requires implementation confirmation.

### Empty

- Cart count begins at `0`.
- Broader empty-state components are unknown / requires implementation confirmation.

### Error

- Newsletter validation mock changes the email border to red on invalid input.
- No broader storefront error pattern is defined in the approved HTML.

### Success

- Add-to-cart mock updates the button label to `✓ Added!`, applies a green success background, increments the cart badge, and triggers a toast message.
- Newsletter mock changes the button label to `✓ You're in!` with a green success background.

## Accessibility notes

- The approved HTML includes alt text on content images, which should be preserved and made data-driven in Shopify.
- Search, cart, wishlist, and account actions should remain keyboard reachable.
- Custom interactive elements require explicit focus-visible treatment in production, because the source only defines limited focus styling.
- Department menu hover/focus behaviour needs accessible keyboard and screen-reader treatment in Shopify implementation.
- Newsletter input should receive an associated visible or programmatic label during implementation.
- Inline SVG icons should be reviewed for decorative versus semantic usage and marked appropriately with `aria-hidden` where needed.
- A skip-link pattern is not present in the source and requires implementation confirmation.

## Developer handoff notes for Shopify Liquid conversion

- Treat `mzansi-select-theme.html` as the immutable visual reference for the MVP storefront.
- Extract the source token system, spacing, and component classes into theme CSS before introducing any new page templates.
- Build reusable Liquid around the already-proven patterns instead of creating one-off page implementations.
- Reuse the same `product-card` markup contract across homepage sections, collections, search results, related products, and cart upsells where applicable.
- Preserve inline SVG proportions and stroke weights when converting to snippets or icon includes.
- Replace mock cart interactions with Shopify-compatible cart behaviour while keeping the same success tone and compact feedback affordance.
- Replace mock newsletter logic with approved form handling only after keeping the same form footprint and success/error feel.
- Do not invent unapproved layout blocks for collection, product, cart, legal, search, or 404 templates. Where the homepage does not define the exact structure, implement only after design/architecture confirmation.
- Use theme settings to control content, not the design language.

Slice 1 completion note:

- The foundation now exists for the global shell only.
- Homepage content modules, JSON templates, and real storefront data wiring remain deferred to later slices.

Slice 2 testing and preview expectations:

- Verify the rendered global shell against the approved HTML for:
  - top bar copy and separators
  - logo lockup treatment
  - search shell proportions
  - account/wishlist/cart action rhythm
  - nav active treatment and department shell
  - trust bar block styling
  - footer grid, payment pills, and country marker
  - toast shell structure and hidden state styling
- Verify `layout/theme.liquid` still references `theme.css`, `content_for_header`, and `content_for_layout`.
- Verify no homepage content modules were introduced.
- Verify no product, collection, cart, or search template/data wiring was introduced beyond chrome-level native references.

Slice 2.5 QA closure note:

- Reviewed commit: `63dc32dd20ef921d92dff993f83071a4d3666de6`
- Reviewed commit message: `feat: refine Shopify global chrome foundation`
- QA result accepted as PASS WITH NOTES.
- Approved source hash remained `894D0F1BF015B68D77F990BCDCA958B4125BFDAEC139EEC79B4FD47D9AE4506F`.
- Global chrome fidelity for the top bar, header, navigation, trust bar, footer, cart badge shell, toast shell, and global layout shell was accepted for this slice.
- One `rg` evidence command failed due to PowerShell quoting, so exact output for that individual check was not captured in the review record.
- Responsive behaviour, font hosting strategy, toast/cart/newsletter wiring, and homepage/product/collection/search/cart/support template implementation remain deferred.

Slice 3 testing and preview expectations:

- Verify `templates/index.json` parses as valid JSON and renders the approved homepage section order:
  - hero collage
  - category strip
  - Best Sellers grid
  - promo banner
  - New Arrivals tiles
  - Kitchen & Storage grid
- Verify `layout/theme.liquid` still references `theme.css`, `content_for_header`, and `content_for_layout`.
- Verify homepage section classes and visual rhythm remain aligned with the approved HTML.
- Verify Best Sellers and Kitchen & Storage use static-safe placeholder cards only.
- Verify no `collection.products`, `product.title`, `product.price`, `for product in`, or `paginate collection` wiring was introduced.
- Verify no Shopify push, publish, or product import activity occurred.

Slice 3.5 homepage QA closure note:

- Reviewed commit: `9066067d8699dfadfb0b012a8f038a34c6537fb5`
- Reviewed commit message: `feat: add Shopify homepage composition foundation`
- QA result accepted as PASS WITH NOTES.
- Approved source hash remained `894D0F1BF015B68D77F990BCDCA958B4125BFDAEC139EEC79B4FD47D9AE4506F`.
- Homepage section order, hero collage, category strip, featured product grids, promo split, feature tile grid, section headings, static product cards, badges, and price stack were accepted for this slice.
- Placeholder/static-safe homepage content remains acceptable because dynamic product wiring is still deferred.
- Accepted global chrome remained unchanged through the reviewed Slice 3 commit.
- Dynamic product wiring, product import, collection/PDP/search/cart/legal-support/404 templates, broader responsive QA, and Shopify preview/publish remain deferred.

Slice 4 testing and preview expectations:

- Verify `templates/collection.json` parses as valid JSON.
- Verify `sections/main-collection-foundation.liquid` renders collection intro, listing foundation, and empty-state foundation.
- Verify the listing foundation reuses the accepted product-card, badge, and price snippets.
- Verify `layout/theme.liquid` still references `theme.css`, `content_for_header`, and `content_for_layout`.
- Verify no `collection.products`, `product.title`, `product.price`, `paginate collection`, `for product in`, `sort_by`, or `filter` wiring was introduced.
- Verify no Shopify push, publish, or product import activity occurred.

Slice 5 testing and preview expectations:

- Verify `templates/product.json` parses as valid JSON.
- Verify `sections/main-product-foundation.liquid` renders product title, gallery, price stack, option-shell, quantity shell, description/spec content, support notes, and related placeholder area.
- Verify new PDP images include explicit `width` and `height` attributes so Theme Check continues to pass with zero blocking errors.
- Verify `layout/theme.liquid` still references `theme.css`, `content_for_header`, and `content_for_layout`.
- Verify no `product.title`, `product.price`, `product.variants`, `product.media`, `product.images`, `form 'product'`, `routes.cart_add_url`, or checkout/cart wiring was introduced.
- Verify no Shopify push, publish, login, theme list, or product import activity occurred.

Slice 6 testing and preview expectations:

- Verify `templates/search.json` parses as valid JSON.
- Verify `sections/main-search-foundation.liquid` renders search title, query summary shell, static-safe results grid, no-results state, and browse/support prompt.
- Verify `layout/theme.liquid` still references `theme.css`, `content_for_header`, and `content_for_layout`.
- Verify no `search.results`, `search.terms`, `item.title`, `item.price`, `product.title`, `product.price`, `form 'product'`, `routes.cart_add_url`, `paginate search`, or loop-based search/product wiring was introduced.
- Verify no Shopify push, publish, login, theme list, or product import activity occurred.

Slice 6.5 QA acceptance note:

- Search heading, query/result summary shell, static-safe results grid, no-results state, and browse/support prompt were accepted for this slice.
- Accepted global chrome remained unchanged through the reviewed Slice 6 worktree.
- Search/results content remains static-safe and visual-only until a later approved live search/product wiring pass.
- The existing `site-header` `search.terms` binding remains outside Slice 6 implementation scope and was not changed.

Slice 7 testing and preview expectations:

- Verify `templates/cart.json` parses as valid JSON.
- Verify `sections/main-cart-foundation.liquid` renders cart title, line-item shells, order-summary shell, support note, and empty-cart state.
- Verify `snippets/cart-line-item.liquid` renders placeholder media, price stack, quantity shell, and remove-action shell without introducing live cart behaviour.
- Verify `layout/theme.liquid` still references `theme.css`, `content_for_header`, and `content_for_layout`.
- Verify no `cart.items`, `item.product`, `item.title`, `item.price`, `item.quantity`, `routes.cart_url`, `routes.cart_change_url`, `routes.cart_update_url`, `routes.cart_add_url`, `checkout_url`, or `form 'cart'` wiring was introduced.
- Verify no Shopify push, publish, login, theme list, or product import activity occurred.

Slice 8 testing and preview expectations:

- Verify `templates/page.json` parses as valid JSON.
- Verify `templates/page.contact.json` parses as valid JSON when present.
- Verify `sections/main-page-foundation.liquid` renders About, Shipping, Returns, Privacy, Terms, and FAQ/support placeholder structure.
- Verify `sections/support-page-foundation.liquid` renders support intro, contact/support guidance cards, shipping/returns guidance, FAQ coverage, and policy-publication placeholder language.
- Verify `layout/theme.liquid` still references `theme.css`, `content_for_header`, and `content_for_layout`.
- Verify no `form 'contact'`, `customer_login`, `customer_register`, `customer_address`, `checkout`, `cart.items`, `product.title`, `product.price`, `collection.products`, or `search.results` wiring was introduced.
- Verify no Shopify push, publish, login, theme list, or product import activity occurred.

Slice 9 testing and preview expectations:

- Verify `templates/404.json` parses as valid JSON.
- Verify `sections/main-404-foundation.liquid` renders the 404 hero, shared empty-state surface, and recovery links for continue shopping, browse categories, contact support, and return home.
- Verify `layout/theme.liquid` still references `theme.css`, `content_for_header`, and `content_for_layout`.
- Verify no `collection.products`, `search.results`, `product.title`, `product.price`, `cart.items`, `customer_login`, `customer_register`, `form 'contact'`, or `checkout` wiring was introduced in the 404 foundation.
- Verify no Shopify push, publish, login, theme list, or product import activity occurred.

Slice 9.5 QA acceptance note:

- 404 foundation structure, shared empty-state reuse, recovery links, tone clarity, and visual rhythm were accepted for this slice.
- Accepted global chrome remained unchanged through the reviewed Slice 9 worktree.
- The approved source HTML remained unchanged through the reviewed Slice 9 worktree.
- Product import, Shopify push/publish, checkout customization, final legal wording/sign-off, live policy publication, customer account/auth/contact backend wiring, dynamic product/catalogue wiring, and broader live-store behaviour remain deferred.

Slice 8.5 QA acceptance note:

- Generic legal/support foundation structure, dedicated support/contact structure, About/store promise block, shipping/delivery guidance, returns/refunds guidance, privacy/terms placeholder state, FAQ/support readability, and deferred policy-publication messaging were accepted for this slice.
- Accepted global chrome remained unchanged through the reviewed Slice 8 worktree.
- Legal/support content remains static-safe, South Africa-first, and visual/content-direction only until later approved live legal/support behaviour.
- Final legal wording/sign-off, live policy publication, customer account/auth/contact backend wiring, product import, Shopify push/publish, checkout customization, and broader live support/contact/legal-policy behaviour remain deferred.

Slice 7.5 QA acceptance note:

- Cart heading and intro, filled-cart line-item shell, quantity shell, subtotal/summary shell, checkout CTA visual shell, support/trust note, and empty-cart state were accepted for this slice.
- Accepted global chrome remained unchanged through the reviewed Slice 7 worktree.
- Cart content remains static-safe and visual-only until a later approved live cart/checkout wiring pass.
- The existing `site-header` cart route link remains outside Slice 7 implementation scope and was not changed.

Slice 5.5 QA acceptance note:

- PDP layout structure, media/gallery placeholder, title/type/badge/rating area, price stack, option-shell, quantity/add-to-cart shell, description/spec blocks, trust/support notes, and related placeholder area were accepted for this slice.
- Accepted global chrome remained unchanged through the reviewed Slice 5 worktree.
- PDP content remains static-safe and visual-only until a later approved live product wiring pass.

Theme Check blocker-fix validation state:

- `shopify theme check --path . --fail-level error` must return zero blocking errors after this pass.
- RemoteAsset warnings for Google Fonts and remote image URLs may remain and should be reported, not cleaned up, unless separately approved.
- No Shopify login, theme list, theme push, preview theme creation, publish, product import, or checkout change should occur during this blocker-fix pass.

Slice 12J validation note:

- `shopify theme check --path . --fail-level error` returned warning-only output after the Slice 12J changes; no slice-specific errors remained after the related-products markup fix.
- Repo-level Theme Check warnings still include remote assets plus warning noise from files stored under `artifacts/`; those were not changed in Slice 12J.
- Safe CLI validation showed the authenticated store theme list included live theme `148914077879` (`Horizon`), unpublished theme `151207542967` (`Mzansi Select MVP Preview`), and development theme `151101407415`, while the Product Owner-provided push target `150454599863` was not present.
- Safe identity reconciliation therefore treated `151207542967` as the correct unpublished preview-validation target and used it for a targeted push of `assets/theme.css`, `sections/main-collection-foundation.liquid`, `sections/main-product-foundation.liquid`, and `snippets/live-product-card.liquid`.
- Post-push theme listing confirmed the live theme metadata remained unchanged and the pushed target remained unpublished.
- Unauthenticated HTTP checks against homepage, launch collection, and PDP preview URLs still served the storefront password wall, so route-level browser validation remains blocked by authenticated preview access rather than by theme identity.
- A no-state-export Playwright reuse attempt against the local Chrome default profile did not yield a reusable authenticated session in this pass, so no browser screenshots of unlocked collection/PDP routes were captured.
- Evidence folder for the identity reconciliation, push, and access-gap checks: `artifacts/platform/slice-12j-1-preview-theme-reconciliation-20260430-111007/`.

## Risks, unknowns, dependencies

- Secondary page designs are not explicitly present in the source HTML.
- Mobile and tablet breakpoints are not explicitly defined.
- Real Shopify cart, search, and newsletter behaviours are not represented in the static mock.
- Product ratings, wishlist flows, and review counts shown in cards require data-source decisions.
- Font hosting strategy for `DM Sans` and `Playfair Display` requires implementation choice compatible with Shopify.
- Sample imagery currently references external Unsplash URLs and needs approved asset ownership/hosting decisions.
- Homepage is now implemented as a static-safe foundation, and 404 template implementation now exists as a static-safe recovery foundation.
- Chrome-level fidelity is improved, but final responsive behaviour still depends on later template/page rollout decisions.
- QA evidence capture on Windows PowerShell may require safer quoting or split-string checks in later review passes.
- Homepage cards, promo content, and arrivals content still need an approved strategy for later Shopify data replacement without changing the approved visual contract.
- Shopify preview and publish remain unapproved after the accepted Slice 3.5 QA review.
- Collection filtering, sorting, pagination, and richer browse controls still need an approved strategy beyond the Slice 12J live product-card rendering path.
- `24` non-blocking `RemoteAsset` warnings remain open after Slice 9.5 QA validation and require separate Product Owner approval before cleanup.
- PDP cart, checkout, wishlist, richer media interaction, and any merchandising logic beyond the Slice 12J live product-data path still need explicit approval.
- Search placeholder queries, result ranking, browse recovery behaviours, and no-results merchandising still need an approved strategy for later Shopify search data replacement without changing the approved visual contract.
- Cart placeholder line items, subtotal logic, drawer behaviour, checkout actions, and recovery/upsell behaviours still need an approved strategy for later Shopify cart data replacement without changing the approved visual contract.
- Legal/support placeholder policy wording, final legal wording/sign-off, live policy publication, live support/contact/legal-policy behaviour, live contact details, backend support handling, and publication readiness still need explicit approval before launch use.
- Broader empty-state coverage beyond the current collection, search, cart, and 404 foundations still needs explicit approval where live data and merchandising logic are involved.
- Live-store behavior, dynamic product/catalogue wiring, and any auto-recovery logic remain deferred for the Slice 9 404 foundation.
- Authenticated preview QA evidence was captured in headed Playwright for Slice 10.5B and accepted as PASS WITH NOTES; publish/launch-readiness remains blocked until the Product Owner resolves whether Contact/About `404` route availability is expected or requires a dedicated defect/scope slice.
- Slice 11A taxonomy guidance now supports a four-department launch-first catalogue model with three expansion-ready department candidates, and Slice 11B now records the approved `25`-slot planning matrix without approving import or live catalogue operations.
- Department navigation currently uses a safe temporary fallback to `all-products`; dedicated launch collection routing now depends on Shopify Admin collection setup, collection-density/presentation readiness, and later Product Owner approval for exposure.
- Contact/About route availability was later reconciled as resolved in unpublished preview evidence through Manual Track A.1, so it no longer belongs in the active launch blocker set.
- The local Slice 12J theme now supports live collection/PDP rendering, the correct unpublished preview theme has been reconciled as `151207542967`, and the remaining validation blocker is authenticated storefront access through the password wall.

## Slice 10.5 / 10.5B authenticated preview QA closure (PASS WITH NOTES)

Evidence folder accepted:

- `artifacts/qa/slice-10-5b-authenticated-playwright-preview/20260428-210501/`

Route coverage captured (unpublished preview theme `151207542967`):

- `/?preview_theme_id=151207542967`
- `/collections/all?preview_theme_id=151207542967`
- `/products/adjustable-laptop-stand?preview_theme_id=151207542967`
- `/search?preview_theme_id=151207542967`
- `/cart?preview_theme_id=151207542967`
- `/pages/contact?preview_theme_id=151207542967` rendered HTTP `404`
- `/pages/about?preview_theme_id=151207542967` rendered HTTP `404`
- `/404-check-missing-page?preview_theme_id=151207542967` rendered HTTP `404` as expected for a missing route check

Notes recorded:

- Storefront unlock was completed manually in a headed Playwright window.
- The storefront password was not requested, printed, or stored.
- No Shopify push/publish/live overwrite/product import/checkout customization/dynamic product wiring occurred during evidence capture.
- The preview theme remained `unpublished`; publish/launch-readiness remains deferred.

## Acceptance checklist

- [ ] Homepage implementation order matches the approved HTML exactly.
- [ ] Header, navigation, footer, and trust shell remain globally consistent.
- [ ] Typography pairing and hierarchy match the approved source.
- [ ] Colour tokens match the approved source values.
- [ ] Container widths, padding rhythm, border styles, and radius usage remain aligned to the approved source.
- [ ] Product-card structure is reused consistently across all commerce surfaces.
- [ ] No new visual language is introduced on secondary pages.
- [ ] Unknown patterns are resolved through implementation confirmation rather than invention.
- [ ] Shopify settings expose content management without enabling brand drift.
- [ ] Approved source HTML remains untouched while Slice 9 changes stay limited to 404/generic empty-state foundation scope with static-safe placeholder behaviour.

---

**Footer Standard For This Pass:** Slice 12J / 12J.1 preview product visibility foundation recorded. Approved source HTML unchanged. This pass updates durable collection/PDP rendering behaviour so the local theme prefers live Shopify product data where available, reconciles the safe unpublished preview target as `151207542967`, records a targeted unpublished push without publish or live overwrite, preserves the approved visual/navigation structure, and leaves product import, publish, and live overwrite unapproved.
