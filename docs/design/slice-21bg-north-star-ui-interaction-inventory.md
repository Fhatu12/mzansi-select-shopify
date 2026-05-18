# Slice 21BG - North-star UI and interaction inventory reset

**Document type:** Docs-only UI and interaction inventory  
**Prepared:** 2026-05-18  
**Owner:** Product Owner  
**Scope:** Re-centre the project around the approved desktop and mobile north-star storefront templates before further Shopify implementation work. No theme edits, no Shopify Admin mutation, no publish, no product visibility/publication change, no checkout/payment/customer-order enablement, no product import/sync, no app install, and no media enablement.

## Inputs reviewed

- `docs/project-control.md`
- `docs/audits/slice-21bf-north-star-boundedness-drift-audit.md`
- `mzansi-select-theme.html`
- `mzansi-select-mobile.html`
- `docs/lld/mzansi-select-shopify-mvp-theme-v1.md`
- `docs/pilot/mzansi-select-controlled-live-pilot-v1.md`

## Input gap

- The uploaded planning input `Connecting a custom store front end to shopify.rtf` was not present in the workspace during this slice, so it could not be reviewed or treated as source truth.

## North-star source files reviewed

| Source file | Role in reset | Key observed patterns |
| --- | --- | --- |
| `mzansi-select-theme.html` | Approved desktop north-star | Desktop header with search and account/wishlist/cart chrome, department hover menu, hero collage, category strip, merchandising rails, promo banner, trust bar, newsletter shell, and footer link columns. |
| `mzansi-select-mobile.html` | Approved mobile north-star | Sticky mobile header, below-header search, slide-out drawer, hero media rail, category strip, two-column product rhythm, trust grid, accordion footer, sticky bottom navigation, and lightweight theme JS interactions. |

## Page-level structure

| Area | Desktop north-star | Mobile north-star | Reset note |
| --- | --- | --- | --- |
| Header | Logo, search input, category select, search submit, account, wishlist, cart count | Sticky logo row, menu trigger, wishlist, cart badge, separate search row | Preserve separate desktop and mobile shells; do not collapse desktop chrome into mobile. |
| Navigation | Department trigger with dropdown menu, primary nav links, trust badges in nav rail | Slide-out drawer for shop + department links, bottom navigation bar | Use north-star navigation patterns as the ordering source before deeper data work. |
| Hero | Badge, headline, supporting copy, primary and secondary CTAs, image collage | Badge, headline, supporting copy, CTAs, horizontal image rail, trust pill | Keep hero as browse-first and editorial, not commerce-final. |
| Category / department areas | Department/category strip with four main departments plus shipping, returns, FAQ | Scrollable category strip with same content pattern | Approved quartet remains the first browse priority. |
| Product card areas | Best Sellers grid and Kitchen & Storage grid with badges, ratings, prices, wishlist, add-to-cart | Equivalent two-column merchandising grids | Treat homepage cards as static merchandising until real product/card wiring is intentionally approved. |
| Search / filter / select UI | Search input, category select, submit button | Search input and submit button | Search shell is part of the north-star, but live search/filter behaviour is still not the next commerce step. |
| CTA areas | Hero CTAs, section-heading links, promo CTA, arrival-card links, category-strip links | Same classes of CTA in mobile-scaled form | Link honesty and preview-safe wording must be applied before wider wiring. |
| Footer | Footer link columns, social icons, newsletter shell, payment-method pills | Accordion footer, social icons, newsletter shell, payment-method pills | Footer remains a visual shell first; accounts, newsletter capture, and social destinations stay bounded. |
| Modal / drawer / mobile menu areas | No modal; desktop uses hover/focus department dropdown | Drawer overlay, nav drawer, close button, sticky bottom bar | Mobile drawer and bottom bar are first-class north-star elements and should be implemented as safe theme JS only. |

## Interactive elements inventory

| Element name | Desktop presence | Mobile presence | Intended behaviour | Current Shopify status if known | Implementation status | Risk notes |
| --- | --- | --- | --- | --- | --- | --- |
| Logo / home link | Yes | Yes | Return to home route | LLD expects valid native routes such as `routes.root_url`; current theme state not re-inspected in this slice | `static` | Low risk if routed to the real home route only |
| Header search input | Yes | Yes | Enter browse/search query | LLD says live product/catalogue/search wiring remains deferred until explicitly approved | `preview-disabled` | Risk of implying live catalogue search too early |
| Search category select | Yes | No | Narrow search by department/category | LLD says search select honesty is separately tracked; live behaviour not confirmed here | `preview-disabled` | Risk of fake filtering if visible but unwired |
| Search submit button | Yes | Yes | Submit query to search route | Real search can later map to `routes.search_url`; not the current north-star reset priority | `preview-disabled` | Risk of widening scope into live search and results parity |
| Account entry points | Yes | Yes | Open sign-in/account area | LLD says account chrome should remain honest deferred while accounts are disabled | `deferred` | Customer account flows are explicitly blocked |
| Wishlist entry points | Yes | Yes | Save/view favourites | LLD says no wishlist persistence in the private-preview posture | `deferred` | Risks false statefulness and hidden service expectations |
| Cart entry points and counters | Yes | Yes | Open cart and show item count | Current preview lane keeps cart/checkout blocked; north-star HTML only increments local counters | `preview-disabled` | Highest scope-creep risk because it suggests purchasability |
| Desktop department trigger | Yes | No | Open hover/focus department menu | LLD names approved department routing and desktop/mobile behaviour as an implementation concern | `needs theme JS` | Must not become a dead button; ensure keyboard support |
| Desktop department links | Yes | No | Browse department destinations | LLD says approved quartet routes via collection handles; expansion-ready destinations remain later | `needs Shopify data` | Non-quartet items must not pretend to be approved launch routes |
| Primary nav links (`Home`, `Shop All`, `New In`, `Best Sellers`, `Deals`, `Brands`) | Yes | Via drawer | Browse core store destinations | LLD says preview copy honesty still applies; some labels such as `Best Sellers` and `Deals` are risky in preview | `preview-disabled` | Live-commerce wording can drift ahead of approved data/service truth |
| Mobile menu button | No | Yes | Toggle drawer open/closed | North-star mobile file uses local JS open/close behaviour | `needs theme JS` | Must preserve focus/escape/body-scroll behaviour without introducing broad JS |
| Drawer overlay and close button | No | Yes | Close mobile drawer | North-star mobile file uses local JS close behaviour | `needs theme JS` | Low technical risk; moderate accessibility risk if half-implemented |
| Drawer shop / department links | No | Yes | Navigate to core browse destinations | Destination posture mirrors desktop nav and department links | `needs Shopify data` | Same route honesty risk as desktop nav |
| Drawer login / register buttons | No | Yes | Enter customer account flows | Accounts remain blocked | `deferred` | Explicitly outside the approved lane |
| Drawer help / track-order links | No | Yes | Reach support/help destinations | Current destination readiness not re-validated in this slice | `deferred` | Risk of exposing placeholder routes as if live |
| Hero primary CTA (`Browse all products`) | Yes | Yes | Take customer into browse flow | Browse-first wording is acceptable; destination still needs an approved route decision | `needs Shopify data` | Should not route to a dead or placeholder destination |
| Hero secondary CTA (`Shipping info` / `Shipping`) | Yes | Yes | Open shipping information route or section | LLD warns against fake anchors and placeholder route drift | `deferred` | Shipping claims remain sensitive while delivery posture is still bounded |
| Hero media rail / collage | Yes | Yes | Desktop collage display; mobile touch-scroll rail | North-star visual behaviour is clear; no live data requirement yet | `static` | Keep as purely visual until asset strategy is approved |
| Category-strip links | Yes | Yes | Browse approved departments or approved info pages | Quartet collections are the clearest next route candidates; info destinations need PO-approved routes | `needs Shopify data` | Shipping/returns/FAQ cards must not jump to dead links |
| Section-heading links (`View all`, `View all products`, `View all new in`) | Yes | Yes | Open section-related collection/list page | LLD Slice 17B says blank destinations must become honest deferred non-links | `preview-disabled` | Dead `#` links were already called out as a contract defect |
| Product-card wishlist buttons | Yes | Yes | Save item to wishlist | No wishlist persistence approved | `deferred` | Avoid any fake saved state |
| Product-card add-to-cart buttons | Yes | Yes | Add line item/cart update | LLD Slice 17C says static homepage cards must not present active add-to-cart behaviour without a real handler | `preview-disabled` | Strong purchasability signal; do not re-enable in the next slice |
| Promo CTA (`Shop the Sale`) | Yes | Yes | Open a promo/curated products route | LLD Slice 17D says sale/discount language is not preview-safe by default | `preview-disabled` | Risk of unsupported pricing, urgency, and promo claims |
| Arrival-card links (`Explore now`) | Yes | Yes | Open arrival/new-in destinations | `New In` and `New Arrivals` need preview-safe wording or a real approved destination | `needs Shopify data` | Risk of implying live launch cadence |
| Footer link groups (`Shop`, `Help`, `Account`, `Company`) | Yes | Yes | Reach standard informational/browse destinations | LLD says customer-facing placeholder support/company/account routes must become honest deferred states if not ready | `deferred` | High dead-link risk across support, account, and company destinations |
| Footer social icons | Yes | Yes | Open approved social profiles | LLD says no live social `href` in the private-preview posture | `deferred` | Avoid fake outbound links and unintended public signals |
| Newsletter email input | Yes | Yes | Capture update email | LLD Slice 18A says private preview must not collect email addresses | `preview-disabled` | POPIA and consent risk if treated as live capture |
| Newsletter subscribe button | Yes | Yes | Submit newsletter capture | LLD Slice 18A keeps submit disabled/deferred | `preview-disabled` | Same capture/compliance risk as the input |
| Footer accordion triggers | No | Yes | Expand/collapse footer link groups | North-star mobile file uses local JS accordion behaviour | `needs theme JS` | Low risk if implemented as progressive enhancement |
| Bottom bar Home / Search / Wishlist / Account buttons | No | Yes | Mobile quick navigation between core surfaces | North-star mobile file shows local active-state JS only; live destinations not yet approved for all items | `needs theme JS` | Wishlist/account still need deferred semantics even if the bar is built |
| Bottom bar centre cart button | No | Yes | Mobile cart shortcut | Cart remains blocked; north-star file only updates a local counter | `preview-disabled` | Same cart/purchasability risk as header cart |

## Shopify mapping

Only `layout/theme.liquid`, `sections/site-header.liquid`, `sections/primary-navigation.liquid`, `sections/site-footer.liquid`, and the shared `static-product-card` snippet are directly named in the inspected LLD. The remaining section/snippet names below are recommended likely targets rather than confirmed current file paths.

| Surface area | Likely layout file | Likely JSON template | Likely section | Likely snippet | Likely asset CSS/JS | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Global desktop/mobile shell | `layout/theme.liquid` | `templates/index.json` | `sections/site-header.liquid`, `sections/primary-navigation.liquid`, `sections/site-footer.liquid` | `snippets/deferred-link.liquid`, `snippets/icon-label.liquid` | `assets/theme.css`, `assets/theme.js` | Use one shell system with explicit desktop/mobile visibility, not a rewrite. |
| Home hero | `layout/theme.liquid` | `templates/index.json` | `sections/home-hero.liquid` | `snippets/hero-badge.liquid` | `assets/theme.css` | Hero can start as static content parity before live data. |
| Category / department strip | `layout/theme.liquid` | `templates/index.json` | `sections/home-category-strip.liquid` | `snippets/department-card.liquid` | `assets/theme.css` | Approved quartet should be the first real browse mapping. |
| Merchandising rails and promo | `layout/theme.liquid` | `templates/index.json` | `sections/home-featured-grid.liquid`, `sections/home-promo-banner.liquid`, `sections/home-arrivals-grid.liquid` | `snippets/static-product-card.liquid`, `snippets/arrival-card.liquid` | `assets/theme.css` | Keep static-card honesty and preview-safe copy intact. |
| Trust bar | `layout/theme.liquid` | `templates/index.json` | `sections/home-trust-bar.liquid` | `snippets/trust-item.liquid` | `assets/theme.css` | Copy will need preview-safe wording review before parity is called done. |
| Mobile drawer and bottom bar | `layout/theme.liquid` | `templates/index.json` | `sections/primary-navigation.liquid` or `sections/mobile-chrome.liquid` | `snippets/mobile-drawer-link.liquid`, `snippets/bottom-bar-item.liquid` | `assets/theme.css`, `assets/theme.js` | Keep JS small and bounded to open/close/active-state behaviour. |
| Footer newsletter and deferred service states | `layout/theme.liquid` | `templates/index.json` | `sections/site-footer.liquid` | `snippets/deferred-newsletter.liquid`, `snippets/deferred-service-chip.liquid` | `assets/theme.css`, `assets/theme.js` | Submit/capture remains disabled until a later compliance-approved slice. |

## Integration method recommendation

| Method | Fit for this repo | Strengths | Risks / drawbacks | Recommendation |
| --- | --- | --- | --- | --- |
| Shopify theme-native Liquid / sections | Strong | Aligns with the current repo, existing LLD, approved desktop/mobile shells, and small-slice implementation approach; easiest way to preserve preview-safe routing and honest deferred states | Requires careful section/snippet decomposition and disciplined copy/state handling | **Best near-term method** |
| Storefront API with custom JS on top of the theme | Moderate later, weak now | Helpful later for richer read-only catalogue/search interactions without a full rewrite | Adds another integration layer before shell parity is complete; increases JS complexity and drift risk | Not the next step |
| Buy Button JS | Weak | Simple for isolated embeds | Poor fit for a full homepage/header/nav/footer/mobile-shell rebuild; commerce-biased and not a north-star shell solution | Do not use for this reset |
| Hydrogen | Poor near-term fit | Powerful for a custom headless storefront | Broad rewrite, separate runtime/deployment model, and unnecessary scope expansion relative to the current theme repo | Do not use for the near-term reset |

**Recommended near-term method:** stay theme-native with Liquid, JSON templates, sections, snippets, and small bounded theme JS for drawer/accordion/mobile-shell behaviour only. This matches the repo shape, keeps the north-star files as the visual source, and avoids introducing a second storefront stack before safe shell parity exists.

## Explicitly blocked / deferred

- Cart remains blocked.
- Checkout remains blocked.
- Payment remains blocked.
- Customer account flows remain blocked.
- Product import and sync remain blocked.
- Public launch remains blocked.
- Wishlist persistence remains deferred.
- Newsletter capture remains deferred.
- Live social, support, and company helper destinations remain deferred unless an approved route already exists.
- Media enablement beyond already approved static north-star references remains deferred.

## Recommended implementation order

1. Build the shared desktop/mobile shell first: header, desktop nav, mobile drawer, bottom bar, trust/footer structure, and honest deferred states for account, wishlist, cart, social, and newsletter.
2. Build the homepage hero, category strip, and trust sections to north-star visual parity with static or editor-managed content only.
3. Apply section-link correctness and preview-safe wording before wiring additional browse destinations, especially around `Best Sellers`, `Deals`, `Sale`, `Secure Payments`, and delivery claims.
4. Implement static merchandising rails with shared preview-safe card snippets, keeping purchase controls disabled and clearly labelled.
5. Wire the approved department browse paths next, starting with the approved quartet only and leaving expansion-ready or unresolved routes deferred.
6. Add small theme JS only where the north-star genuinely needs it: mobile drawer, footer accordion, desktop department disclosure, and other non-commerce shell interactions.
7. Leave cart, checkout, payment, accounts, import/sync, and any broad data rewrite out of scope until the north-star shell and safe browse interactions are stable.

## Acceptance criteria for the next build slice

- The next build slice is limited to visual parity and safe browse interactions on the homepage and shared chrome.
- Desktop and mobile shells visibly follow `mzansi-select-theme.html` and `mzansi-select-mobile.html` without collapsing one shell into the other.
- Account, wishlist, cart, newsletter, and other blocked flows render as honest deferred or preview-disabled states rather than active service controls.
- No customer-facing `href="#"` fallbacks remain where no approved route exists.
- Approved department browse links are either wired to approved destinations or rendered as explicit deferred states.
- No cart, checkout, payment, customer account, product import/sync, or public-launch capability is enabled.
- The slice remains a small theme-native increment, not a broad rewrite.

## Recommended next owner

**Senior Full-Stack Software Architect** for a tightly bounded visual-parity / safe-interaction implementation slice based on this inventory.
