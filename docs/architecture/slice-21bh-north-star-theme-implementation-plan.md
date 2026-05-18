# Slice 21BH - North-star theme implementation plan

**Document type:** Docs-only technical implementation plan  
**Prepared:** 2026-05-18  
**Owner:** Product Owner  
**Scope:** Plan a bounded Shopify theme rebuild path toward the approved desktop and mobile north-star templates without enabling commerce, customer-account, import, or launch behaviour.

## Technical objective

- Rebuild the shared Shopify theme surfaces toward desktop and mobile north-star parity using `mzansi-select-theme.html` and `mzansi-select-mobile.html` as the visual source.
- Preserve the current safe controlled-preview posture: cautious copy, disabled/deferred service states, and no cart/checkout/payment/customer-account enablement.
- Reuse the current theme structure where it already matches the north-star direction.
- Avoid a broad rewrite, a second storefront stack, or a new theme architecture unless a later approved slice finds a specific blocker.

## Current theme structure inventory

### Layout

| File | Current role | Key finding |
| --- | --- | --- |
| `layout/theme.liquid` | Global document shell | Already loads `assets/theme.css`, local font assets, shared sections, skip link, shell-mode switching, and inline JS for mobile drawer behaviour. No standalone JS asset exists yet. |

### JSON templates

| File | Current role | Key finding |
| --- | --- | --- |
| `templates/index.json` | Homepage assembly | Already maps the homepage through `hero-collage`, `category-strip`, `featured-product-grid`, `promo-banner-split`, and `feature-tile-grid`. |
| `templates/collection.json` | Collection foundation | Uses `main-collection-foundation`; suitable for later browse/data work, but not the first north-star parity task. |
| `templates/product.json` | PDP foundation | Uses `main-product-foundation`; not the first rebuild target in this slice plan. |
| `templates/search.json` | Search foundation | Uses `main-search-foundation`; already follows preview-safe posture and should remain out of the first homepage rebuild bundle. |
| `templates/cart.json` | Cart foundation | Uses `main-cart-foundation`; cart remains blocked and must not be enabled. |
| `templates/page.json` | Standard page foundation | Uses `main-page-foundation`; legal/support helpers remain deferred. |
| `templates/page.contact.json` | Support page foundation | Uses `support-page-foundation`; live contact handling remains deferred. |
| `templates/404.json` | 404 / controlled-preview fallback | Uses `main-404-foundation`; current controlled-pilot route fallback remains a known bounded state. |

### Sections

| File | Current role | Key finding |
| --- | --- | --- |
| `sections/announcement-topbar.liquid` | Announcement/top bar | Already carries preview-safe topbar copy. |
| `sections/site-header.liquid` | Desktop + mobile header | Already includes search, deferred account/wishlist states, and cautious cart treatment by route state. |
| `sections/primary-navigation.liquid` | Desktop nav, mobile drawer, bottom bar | Already contains department navigation, preview-safe browse labels, deferred help states, mobile drawer, and bottom bar markup. |
| `sections/hero-collage.liquid` | Homepage hero | Already maps the hero with browse-first CTA and deferred shipping CTA. |
| `sections/category-strip.liquid` | Homepage category strip | Already maps the approved quartet plus deferred shipping/returns/FAQ items. |
| `sections/featured-product-grid.liquid` | Homepage product-card rails | Already blends live product slots with static fallback cards and preview-safe card controls. |
| `sections/promo-banner-split.liquid` | Homepage promo banner | Already uses preview-safe promo wording and browse CTA. |
| `sections/feature-tile-grid.liquid` | Homepage arrivals / feature tiles | Already maps arrival-style editorial tiles with collection-led browse links. |
| `sections/trust-bar.liquid` | Trust/message strip | Already uses preview-safe trust wording instead of live-commerce claims. |
| `sections/site-footer.liquid` | Desktop/mobile footer | Already implements deferred social, account, help, and newsletter states. |
| `sections/main-collection-foundation.liquid` | Collection page layout | Collection-led foundation exists for later work. |
| `sections/main-product-foundation.liquid` | Product page layout | PDP foundation exists for later work. |
| `sections/main-search-foundation.liquid` | Search page layout | Preview-only search shell exists for later work. |
| `sections/main-cart-foundation.liquid` | Cart shell | Cart shell is intentionally non-transactional and must remain so. |
| `sections/main-page-foundation.liquid` | Standard page shell | Legal/help placeholder structure exists. |
| `sections/support-page-foundation.liquid` | Contact/help shell | Contact remains visual-only. |
| `sections/main-404-foundation.liquid` | 404 + controlled-preview fallback | Maintains the current bounded collection fallback posture. |

### Snippets

| File | Current role | Key finding |
| --- | --- | --- |
| `snippets/section-heading.liquid` | Shared section heading + optional link | Already supports honest deferred non-link output when no destination is approved. |
| `snippets/static-product-card.liquid` | Static merchandising card | Already renders disabled wishlist and disabled commerce CTA. |
| `snippets/live-product-card.liquid` | Live product-backed card | Already hides media where needed, handles placeholder pricing, and routes the CTA to PDP rather than cart. |
| `snippets/product-badge.liquid` | Shared badge output | Used by both static and live card surfaces. |
| `snippets/price-stack.liquid` | Shared price display | Supports placeholder-price output and supporting notes. |
| `snippets/launch-collection-url.liquid` | Collection route helper | Already resolves approved collection handles with fallback to `routes.all_products_collection_url`. |
| `snippets/preview-route-body-class.liquid` | Route-level cautious state | Drives cautious route styling and cart suppression on preview surfaces. |
| `snippets/toast-feedback.liquid` | Toast shell | Present in the layout, but not part of the next safe homepage parity task. |
| `snippets/empty-state.liquid` | Shared empty state | Used by foundations outside the first build bundle. |
| `snippets/cart-line-item.liquid` | Cart line shell | Cart-related and therefore not part of the next safe build sequence. |

### Assets

| File group | Current role | Key finding |
| --- | --- | --- |
| `assets/theme.css` | Shared theme stylesheet | Central CSS surface for the current theme; already contains shell, drawer, hero, category, product-card, trust, footer, and responsive rules. |
| Local font assets | Typography | DM Sans and Playfair Display already live in theme assets, which matches the accepted LLD direction. |
| Local image assets | Static north-star imagery | Homepage support images already live in the theme assets instead of third-party hosts. |
| JS assets | None yet | Shared shell behaviour currently lives inline in `layout/theme.liquid`; no standalone `assets/*.js` file is present. |

## Proposed Shopify theme mapping

| North-star area | Primary current file(s) | Rebuild direction |
| --- | --- | --- |
| Header / desktop nav | `sections/site-header.liquid`, `sections/primary-navigation.liquid` | Reuse and tighten toward desktop north-star parity while preserving deferred account/wishlist/cart logic. |
| Mobile drawer | `sections/primary-navigation.liquid`, `layout/theme.liquid` | Keep the drawer in the shared nav surface; limit JS to open/close/focus management and route-safe behaviour only. |
| Hero | `sections/hero-collage.liquid` | Reuse as the hero section; align copy, spacing, and media treatment to the approved north-star without adding commerce behaviour. |
| Category strip | `sections/category-strip.liquid`, `snippets/launch-collection-url.liquid` | Reuse the existing quartet-led strip and keep unresolved info destinations deferred. |
| Merchandising / product-card rails | `sections/featured-product-grid.liquid`, `sections/feature-tile-grid.liquid`, `snippets/static-product-card.liquid`, `snippets/live-product-card.liquid`, `snippets/product-badge.liquid`, `snippets/price-stack.liquid` | Reuse the current rail architecture; keep homepage commerce controls disabled and preview-safe. |
| Search / select UI | `sections/site-header.liquid`, `sections/main-search-foundation.liquid` | Keep working browse/search submission where already present, but preserve the disabled/deferred category-select honesty posture. |
| CTA areas | `sections/hero-collage.liquid`, `sections/promo-banner-split.liquid`, `sections/feature-tile-grid.liquid`, `snippets/section-heading.liquid` | Keep browse-first CTA behaviour and honest deferred rendering for unresolved destinations. |
| Footer | `sections/site-footer.liquid` | Reuse the existing desktop/mobile footer split and preserve newsletter/account/social helper honesty states. |
| Mobile bottom bar | `sections/primary-navigation.liquid` | Keep as part of the shared nav surface and preserve deferred wishlist/account plus blocked cart posture where required. |

## Interactive element implementation status

| Status | Meaning in this repo | Current examples |
| --- | --- | --- |
| `static` | Present as stable visual structure without requiring new data wiring | Hero media, static imagery, general shell composition |
| `preview-disabled` | Intentionally visible but non-operative in preview | Static card commerce controls, newsletter controls, cautious cart states, deferred section links |
| `theme JS needed` | Requires small bounded client-side behaviour in the theme only | Mobile drawer open/close/focus handling, mobile search trigger, desktop department disclosure |
| `Shopify Liquid data needed` | Needs collection/product/route data through Liquid helpers or theme objects | Approved department routes, live collection cards, PDP-linked CTAs |
| `deferred` | Must remain unavailable in the near-term reset | Accounts, wishlist persistence, newsletter capture, live helper routes, cart/checkout/payment flows |

## Minimum viable build sequence

Build in small, safe bundles only. The first five tasks below are the minimum viable sequence for a north-star rebuild without widening scope.

1. **Shell / header / nav parity**
   - Tighten `layout/theme.liquid`, `sections/site-header.liquid`, `sections/primary-navigation.liquid`, and `assets/theme.css` around the approved desktop/mobile shell.
   - Preserve skip link, shell-mode handling, and current preview-safe account/wishlist/cart states.

2. **Hero / category strip parity**
   - Tighten `sections/hero-collage.liquid` and `sections/category-strip.liquid` to the approved north-star layout and spacing.
   - Keep hero browse CTA live only where an approved browse route already exists; keep shipping/info CTA deferred.

3. **Product-card rail parity with disabled commerce controls**
   - Tighten `sections/featured-product-grid.liquid`, `sections/feature-tile-grid.liquid`, `snippets/static-product-card.liquid`, and `snippets/live-product-card.liquid`.
   - Preserve PDP-only live-card CTAs and disabled static-card commerce controls.

4. **Mobile drawer / bottom-bar safe behaviour**
   - Tighten the mobile drawer and bottom bar inside `sections/primary-navigation.liquid` and shared shell logic in `layout/theme.liquid`.
   - Keep behaviour limited to open/close, focus, and safe navigation triggers; do not enable wishlist/account/cart flows.

5. **Footer / newsletter / account / wishlist honesty states**
   - Tighten `sections/site-footer.liquid` and related CSS so the footer matches the north-star while preserving approved deferred semantics.
   - Do not turn visual shells into live helper or capture services.

6. **Section-link and CTA correctness pass**
   - Review `snippets/section-heading.liquid`, promo CTA usage, arrivals links, and browse copy so north-star parity does not reintroduce dead links or over-claiming.

7. **Homepage integration pass only after the above**
   - Use `templates/index.json` as the homepage composition surface.
   - Avoid touching collection/PDP/search/cart foundations in the first implementation bundle unless a blocker is discovered.

## File-level implementation plan

### Likely files to change

- `layout/theme.liquid`
- `templates/index.json`
- `sections/site-header.liquid`
- `sections/primary-navigation.liquid`
- `sections/hero-collage.liquid`
- `sections/category-strip.liquid`
- `sections/featured-product-grid.liquid`
- `sections/promo-banner-split.liquid`
- `sections/feature-tile-grid.liquid`
- `sections/trust-bar.liquid`
- `sections/site-footer.liquid`
- `snippets/section-heading.liquid`
- `snippets/static-product-card.liquid`
- `snippets/live-product-card.liquid`
- `snippets/launch-collection-url.liquid`
- `assets/theme.css`

### Files that must not change yet

- `templates/cart.json`
- `templates/product.json`
- `templates/search.json`
- `sections/main-cart-foundation.liquid`
- `sections/main-product-foundation.liquid`
- `sections/main-search-foundation.liquid`
- `snippets/cart-line-item.liquid`
- Any file or setting that would enable cart mutations, checkout URL generation, payment flows, customer accounts, product import/sync, or public launch behaviour

### New files if later needed

Prefer reuse first. If repetition or inline-script sprawl becomes a real blocker, the safest later additions would be:

- `assets/theme-shell.js`
- `snippets/deferred-link.liquid`
- `snippets/mobile-nav-item.liquid`

These are proposed names only, not current repo files.

## Quality gates

- `shopify theme check` must pass at the accepted fail level for the active theme surface.
- Local or preview render checks may be used if the toolchain is available, but this slice does not require or approve any publish action.
- Homepage visual review must include a desktop check at `1366x768`.
- Homepage visual review must include a mobile check at `390x844`.
- Desktop and mobile shell swap must remain correct; no desktop-shell fallback should dominate the mobile composition.
- No customer-facing `href="#"` fallbacks should remain where no approved destination exists.
- No cart, checkout, account, customer, payment, newsletter-capture, or wishlist-persistence flow may become enabled.
- Preview-safe pricing, delivery, returns, and support wording must remain intact on rebuild surfaces.

## Security and secrets guardrails

- Do not place any Storefront API token in the repo.
- Do not commit any `.env` file or secret-bearing config file.
- Do not store tokens, cookies, passwords, customer data, order data, payment data, or supplier credentials in docs, code, or assets.
- Do not enable checkout, payment, customer orders, or customer accounts in this rebuild path.
- Do not introduce external script integrations, embed SDKs, or app-based front-end dependencies in the near-term north-star rebuild.

## Deferred Shopify connection steps

These remain out of scope for the near-term theme rebuild and should be treated as later, separately approved connection work:

- Storefront API token setup
- Cart API wiring
- Checkout URL generation
- Buy Button JS
- Hydrogen
- JS Buy SDK or other token-based custom storefront wiring
- Supplier-driven product import or sync
- App-based catalogue/feed sync

## Recommended next owner

**Senior Full-Stack Software Architect** for a bounded implementation slice that starts with shell/header/nav parity and keeps all blocked/deferred commerce and customer flows out of scope.
