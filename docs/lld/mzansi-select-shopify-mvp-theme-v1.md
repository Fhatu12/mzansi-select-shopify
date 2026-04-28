# Mzansi Select Shopify MVP Theme V1

**Document Type:** Low-Level Design / Technical Specification  
**Prepared:** 2026-04-28  
**Owner:** Slice 5.6 docs-only PDP QA closure  
**Status:** Slice 5.5 PDP QA accepted as PASS WITH NOTES  
**Version:** 1.0  
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

Slice 5.5 PDP QA closure note:

- The uncommitted Slice 5 PDP foundation was reviewed and accepted as PASS WITH NOTES.
- Approved source hash remained `894D0F1BF015B68D77F990BCDCA958B4125BFDAEC139EEC79B4FD47D9AE4506F`.
- JSON validation passed for `config/settings_schema.json`, `templates/index.json`, `templates/collection.json`, and `templates/product.json`.
- `shopify theme check --path . --fail-level error` passed with zero blocking errors.
- `23` non-blocking `RemoteAsset` warnings remain open across `layout/theme.liquid`, `sections/category-strip.liquid`, `sections/feature-tile-grid.liquid`, `sections/hero-collage.liquid`, `sections/main-product-foundation.liquid`, `sections/promo-banner-split.liquid`, and `snippets/static-product-card.liquid`.
- No product import, Shopify login, theme list, push, preview/store action, publish, checkout change, or live product/cart wiring was introduced during the accepted review pass.

## Shopify theme folder structure

- `layout/`
  - Contains the global theme shell.
- `config/`
  - Contains minimal theme settings schema for shell-level placeholders only.
- `templates/`
  - Contains `index.json`, `collection.json`, and `product.json` for approved homepage, collection, and PDP foundations.
- `sections/`
  - Contains global shell placeholders plus homepage, collection, and PDP composition sections.
- `snippets/`
  - Contains reusable shell fragments plus homepage, collection, and PDP utility snippets.
- `assets/`
  - Contains extracted global/base shell CSS plus homepage, collection, and PDP foundation styling.
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
- `snippets/product-badge.liquid`
  - Reuses sale/new badge rendering.
- `snippets/price-stack.liquid`
  - Reuses the approved price hierarchy pattern.

Slice 4 addition:

- `sections/main-collection-foundation.liquid`
  - Carries collection/category intro, listing foundation, and empty/no-results state switching.
- `snippets/empty-state.liquid`
  - Carries reusable empty collection/no-results presentation aligned to the approved design language.

Theme Check blocker-fix addition:

- `sections/category-strip.liquid`, `sections/feature-tile-grid.liquid`, `sections/hero-collage.liquid`, `sections/promo-banner-split.liquid`, and `snippets/static-product-card.liquid`
  - Now include explicit image `width` and `height` attributes to satisfy Shopify Theme Check without changing sources, wrappers, classes, or layout intent.
- `sections/main-collection-foundation.liquid`
  - Schema name shortened from `Main collection foundation` to `Collection main` to satisfy Shopify Theme Check name-length rules.

Slice 5 addition:

- `sections/main-product-foundation.liquid`
  - Carries PDP gallery, summary, pricing, option-shell, quantity shell, support notes, detail content, and related placeholder presentation.

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

- `templates/collection.json` is now implemented to represent a static-safe collection/category page foundation only.
- No product-loop JavaScript, sorting, filtering, or Shopify collection data wiring was added for collection content sections.

Slice 5 note:

- `templates/product.json` is now implemented to represent a static-safe product detail page foundation only.
- No live product-object JavaScript or Shopify product/cart wiring was added for PDP content sections.

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
- Listing content remains static-safe placeholders until dynamic collection data wiring is explicitly approved.

Slice 5 implementation note:

- The PDP foundation uses a gallery-first layout, accepted price hierarchy, trusted-support cues, and related placeholder cards aligned to the homepage and collection visual language.
- PDP content remains static-safe placeholders until dynamic product data wiring is explicitly approved.

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

Unknown / requires implementation confirmation:

- Exact page-body layout for legal/support content

Constraint for implementation:

- Legal and support pages must retain the same header, navigation, footer, typography, container width, and muted body-copy styling as the homepage.

## 404 page pattern

Unknown / requires implementation confirmation:

- No explicit 404 layout exists in the approved HTML.

Constraint for implementation:

- 404 should reuse the approved hero typography language, practical supportive copy tone, and existing dark/ghost CTA pattern instead of introducing a novelty error page design.

## Empty states pattern

Known from source:

- Empty cart count state exists and defaults to `0`.

Unknown / requires implementation confirmation:

- Empty collection
- Empty search results
- Empty cart messaging
- Empty wishlist messaging

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

Slice 5.5 QA acceptance note:

- PDP layout structure, media/gallery placeholder, title/type/badge/rating area, price stack, option-shell, quantity/add-to-cart shell, description/spec blocks, trust/support notes, and related placeholder area were accepted for this slice.
- Accepted global chrome remained unchanged through the reviewed Slice 5 worktree.
- PDP content remains static-safe and visual-only until a later approved live product wiring pass.

Theme Check blocker-fix validation state:

- `shopify theme check --path . --fail-level error` must return zero blocking errors after this pass.
- RemoteAsset warnings for Google Fonts and remote image URLs may remain and should be reported, not cleaned up, unless separately approved.
- No Shopify login, theme list, theme push, preview theme creation, publish, product import, or checkout change should occur during this blocker-fix pass.

## Risks, unknowns, dependencies

- Secondary page designs are not explicitly present in the source HTML.
- Mobile and tablet breakpoints are not explicitly defined.
- Real Shopify cart, search, and newsletter behaviours are not represented in the static mock.
- Product ratings, wishlist flows, and review counts shown in cards require data-source decisions.
- Font hosting strategy for `DM Sans` and `Playfair Display` requires implementation choice compatible with Shopify.
- Sample imagery currently references external Unsplash URLs and needs approved asset ownership/hosting decisions.
- Homepage is now implemented as a static-safe foundation, but product, collection, search, cart, and support template implementation remain deferred beyond Slice 3.
- Chrome-level fidelity is improved, but final responsive behaviour still depends on later template/page rollout decisions.
- QA evidence capture on Windows PowerShell may require safer quoting or split-string checks in later review passes.
- Homepage cards, promo content, and arrivals content still need an approved strategy for later Shopify data replacement without changing the approved visual contract.
- Shopify preview and publish remain unapproved after the accepted Slice 3.5 QA review.
- Collection placeholders, empty-state copy, and browse behaviors still need an approved strategy for later Shopify collection data replacement without changing the approved visual contract.
- RemoteAsset warnings remain open after blocker-fix validation and require separate Product Owner approval before cleanup.
- PDP placeholders, option-shell labels, support notes, and related content still need an approved strategy for later Shopify product data replacement without changing the approved visual contract.

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
- [ ] Approved source HTML remains untouched while Slice 5 changes stay limited to PDP foundation scope with static-safe placeholder behaviour.

---

**Footer Standard For This Pass:** Slice 5 product detail page template foundation implemented. Approved source HTML unchanged. Theme changes remain limited to PDP structure, product-only styling, static-safe placeholder rendering, and documentation within the agreed slice scope.
