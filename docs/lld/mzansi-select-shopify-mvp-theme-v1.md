# Mzansi Select Shopify MVP Theme V1

**Document Type:** Low-Level Design / Technical Specification  
**Prepared:** 2026-04-29  
**Owner:** Product Owner  
**Status:** Slice **16C** preserves the approved north-stars while remediating the accepted Slice **16B** blocker/high HTML foundation issues in the live Shopify theme: a skip-to-main path now precedes the repeated chrome, search and newsletter fields now have durable labels, icon-only controls keep explicit accessible names, customer-facing placeholder legal/support/social/account fragments are now honestly deferred instead of pretending to be live routes, customer-facing fonts/images are served from theme assets instead of third-party hosts, placeholder `about`/`contact` handles are noindexed while still unpublished, and the north-star mobile shell no longer blocks zoom with `maximum-scale=1.0`. **Slice 17A** then accepts the later interaction-contract audit as **PASS WITH NOTES** under canonical sequencing while preserving the original evidence label **`Slice 16B — HTML foundation and interactive UI contract audit`**; no theme/code fixes are introduced by that acceptance pass, live storefront DOM behaviour remains **INCONCLUSIVE** while preview URLs return **`/password`**, and the accepted outcome is a documented follow-up sequence rather than implementation. **Slice 17B** subsequently hardens the shared section-link contract so blank section-heading destinations no longer render dead hash anchors; approved section links remain live, while missing destinations render honest deferred copy until Product Owner routing decisions exist. **Slice 17C** then hardens the static-card commerce contract so static merchandising cards no longer present active purchase affordances without a real handler; they now render honest preview-only disabled controls while live product-card and PDP navigation remains intact. Desktop presentation remains aligned to **`mzansi-select-theme.html`**, mobile presentation remains aligned to **`mzansi-select-mobile.html`**, and the recorded work remains intentionally limited to foundation safety/accessibility and interaction-contract documentation without redesign or visual stripping.  
**Version:** 3.3  
**Source Frontend:** `D:\dev\mzansi-select-shopify\mzansi-select-theme.html` + `D:\dev\mzansi-select-shopify\mzansi-select-mobile.html`

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
- Launch department navigation (**Slice 14B**) routes the approved quartet (**`home-living`**, **`kitchen-storage`**, **`office-desk`**, **`tech-accessories`**) via **`collections['handle'].url`** (**`launch-collection-url` snippet**); expansion-ready departments remain on **`all-products`** until a later slice.
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

## Slice 15C / 15F responsive fidelity rules

- Desktop fidelity remains anchored to **`mzansi-select-theme.html`**. Mobile fidelity remains anchored to **`mzansi-select-mobile.html`**.
- Mobile overflow remediation must not use broad design flattening as the primary fix. Desktop header/nav/footer shells must not simply wrap into mobile as a substitute for the approved mobile composition.
- Approved mobile composition now includes a dedicated sticky mobile header, below-header search, slide-out drawer, bottom navigation, hero media rail treatment, two-column product-card rhythm, two-by-two trust grid, and accordion footer treatment.
- Product-card imagery must keep its approved image-first composition. Avoid broad global image-height overrides that flatten cards or break media aspect handling.
- Intentional mobile horizontal scrolling is limited to bounded rails only: announcement/ticker content, hero collage/media rail, and category strip. Page-level horizontal overflow elsewhere is a defect.
- Promo, arrivals, trust, and footer sections may reflow responsively, but their typography, spacing, borders, badges, shadows, and information hierarchy must stay visually faithful to the approved north-stars.
- Shared promo/product/cart grids that contain intrinsic-width media must use shrink-safe tracks such as **`minmax(0, 1fr)`** rather than relying on default grid minimums.
- Shrinkable promo/card/cart children must explicitly allow compression with **`min-width: 0`** where intrinsic media or long inline content would otherwise hold tracks open.
- Live product-card media anchors inside **`.prod-img`** must be block-level, full-size wrappers so linked images inherit the approved card container width instead of their intrinsic **`width`** attributes.
- The mobile breakpoint must explicitly swap desktop shells out of the render flow: **`header.site-header-desktop`**, **`nav.site-nav-desktop`**, and **`.footer-desktop`** must be hidden at **`<= 900px`**, while **`header.mob-header`** and **`nav.bottom-bar`** remain the active approved mobile chrome.
- Mobile topbar and trust-bar wrappers must stay shrink-safe with explicit **`width/max-width/min-width`** containment so long inline trust copy can scroll only inside the approved bounded topbar rail and never hold open page-level width.
- Because preview deployments may temporarily serve an older stylesheet, the critical mobile shell-swap / containment subset may also be duplicated inline in **`layout/theme.liquid`** after the main stylesheet so the approved mobile chrome remains dominant even under stale asset ordering.
- Slice **15O** strengthens that contract further by assigning explicit **`data-shell`** roles to desktop/mobile header, nav, overlay/drawer, and footer chrome, then toggling an early **`html[data-shell-mode]`** state from **`matchMedia('(max-width: 900px)')`** so shell visibility no longer depends on the stylesheet-only desktop selectors winning the cascade in preview.

## Slice 16C HTML foundation hardening rules

- The live theme document shell must expose a keyboard-accessible skip link before the repeated announcement/header/navigation chrome and target the single **`main#MainContent`** landmark.
- Search inputs in desktop and mobile header chrome must not rely on placeholder text alone; they require durable labels or equivalent accessible names while preserving the approved visual treatment.
- Newsletter preview inputs in the footer must remain visibly lightweight but now sit inside real form containers with explicit email labels so keyboard/screen-reader use does not depend on placeholder text.
- Icon-only or icon-led controls must keep explicit accessible names: menu open/close, search submit, cart entry points, deferred wishlist/favourites, and similar compact controls.
- Customer-facing launch surfaces must not expose dead placeholder destinations for support, company, social, or account helpers. If publication-ready destinations are unavailable, the surface must become an honest deferred non-interactive state rather than a fake link.
- Placeholder legal/support foundations may remain in the codebase for later approved publication work, but they must not be promoted through customer-facing navigation before publication-ready copy/routes exist. Slice **16C** reinforces this by removing live-surface entry points and adding **`noindex,nofollow`** to placeholder `about`/`contact` page handles.
- Customer-facing fonts and static imagery should be served from Shopify/theme-controlled assets where practical. Slice **16C** replaces the live theme Google Fonts + Unsplash dependence with local theme assets while preserving the approved visual direction.
- Focus treatment should remain visually restrained but consistent. Slice **16C** adds a shared **`:focus-visible`** outline contract plus honest deferred-state styling so accessibility hardening does not flatten the approved design language.
- The north-star mobile shell must not block user zoom. Slice **16C** removes the **`maximum-scale=1.0`** viewport cap from **`mzansi-select-mobile.html`** as the durable accessibility baseline for downstream work.

## Slice 17A interaction contract audit acceptance

- **Canonical label:** **Slice 17A — HTML interaction contract audit acceptance and documentation sync**.
- **Original source/evidence label preserved:** **`Slice 16B — HTML foundation and interactive UI contract audit`**.
- **QA verdict:** **PASS WITH NOTES**.
- **Evidence folder:** **`artifacts/qa/slice-16b-html-interaction-contract-audit/2026-05-10T000307/`**.
- **Audit inputs compared:** **`mzansi-select-theme.html`**, **`mzansi-select-mobile.html`**, **`mzansi-select-interactive-elements.txt`**, and the current Shopify theme/Liquid implementation.
- **Live DOM limitation:** Playwright reached **`/password`** on every tested preview URL. Password-page output was not treated as storefront evidence, so live storefront DOM behaviour remains **INCONCLUSIVE** until a later authenticated rerun.
- **Preview messaging variants that remain part of the durable contract:** preview surfaces may use **`Preview item`**, **`Price to be confirmed`**, and **`Delivery details to be confirmed before launch.`**; announcement / trust / footer copy may shift to cautious variants on preview routes; and **Slice 17D** now adds durable promo / nav / browse / purchase-copy rules for preview-only storefront surfaces.
- **Static vs live card distinction:** static homepage merchandising cards may preserve the approved visual affordances before full commerce wiring, but they must not be mistaken for live product-form behaviour. The accepted audit records that the static homepage **Add to Cart** button still has no handler and **`View all new in`** still falls back to **`#`**. By contrast, live collection/PDP foundations continue to use the Slice **12J / 13G / 13J** preview-safety rules rather than pretending static commerce is complete.
- **Deferred-service map:** newsletter/email capture posture is now decided in **Slice 18A** (**PASS WITH NOTES**, **Option 2** — visual section may remain only as **honest disabled/deferred preview**; **private preview** forbids collection, submit activation, and external capture integrations — see **`## Slice 18A`**); the search category/select honesty path is now covered by **Slices 17F–17L** where applicable; **Slice 18D PASS WITH NOTES** locks the **private-preview posture** for account / wishlist / social (**no** live account entry points while accounts are disabled; **no** wishlist persistence; **no** live social **`href`**); **Slice 18E** applies that posture in theme chrome — see **`## Slice 18D and Slice 18E account wishlist social deferred chrome`**.
- **Follow-up interaction-contract sequence:** **Slice 17B — Section link correctness**; **Slice 17C — Static card commerce honesty**; **Slice 17D — Promo/nav copy honesty** (**docs-only review + handoff recorded here**); **Slice 17E — Preview-safe copy implementation**; **Slice 17F — Search select honesty**; **Slice 17G — Desktop search select honesty implementation**; **Slice 17H — Newsletter/account/wishlist/social exposure decision**; **Slice 17I — Live regression after authenticated unlock**.

## Slice 17B section link correctness

- Shared section-heading markup must render a real anchor only when a non-blank approved destination exists.
- When a section heading has label text but no approved destination, the surface must render honest deferred non-link copy instead of **`href="#"`** or another fake target.
- **Slice 17B** applies that contract to the New Arrivals heading by removing the shared hash fallback; the heading remains visible and visually aligned, but it is no longer a dead link while a distinct "New In" destination is still undecided.
- This slice does **not** enable any new browse, cart, newsletter, account, wishlist, or customer-service workflow. It is limited to section-level link correctness only.

## Slice 17C static card commerce honesty

- Static merchandising cards must not present an active **Add to Cart** or similar purchase CTA unless an approved cart or purchase handler exists behind that control.
- When a static card is used only as a preview or placeholder merchandising surface, its primary commerce-style control must render as an honest disabled preview state instead of suggesting live purchase behaviour.
- **Slice 17C** applies that contract to the shared **`static-product-card`** snippet by replacing the unwired **Add to Cart** button with a disabled **Preview only** control that exposes the deferred state accessibly.
- This slice preserves live collection card links, homepage card-to-PDP navigation, PDP preview-only safety, and the earlier section-link contract from **Slice 17B**. It does **not** enable cart, checkout, payment, newsletter, account, or wishlist service wiring.

## Slice 17D promo/nav copy honesty

- Preview-only storefront copy must not claim verified demand, active discounts, active gift-card service, active checkout or payments, final delivery coverage, final return windows, or final pricing approval before those services and approvals exist.
- Avoid unsupported preview-only wording such as **`Best Sellers`**, **`Deals`**, **`Gift Cards`**, **`Limited Time Offer`**, **`Up to 30% off`**, **`Sale`**, **`Shop the Sale`**, **`Shop now`**, **`Secure Checkout`**, **`Secure Payments`**, **`Proceed to Checkout`**, **`exclusive offers`**, and similar certainty or urgency claims unless the underlying data or service is live and approved.
- Prefer browse-first preview wording instead:
  - **`Best Sellers`** → **`Selected Picks`** or **`Featured Picks`**
  - **`Deals`** → **`Featured Picks`** or **`Preview Picks`**
  - **`Gift Cards`** → **`Gift Ideas`**
  - **`New In`** / **`New Arrivals`** → **`New in Preview`** or **`Latest Preview`**
  - **`Shop now`** → **`Browse now`**
  - **`Shop the Sale`** → **`Browse preview picks`**
  - **`Limited Time Offer`** → **`Preview highlight`**
  - **`Up to 30% off`** → neutral editorial copy without a discount claim
  - **`Secure Checkout`** / **`Secure Payments`** → preview-safe payment or checkout wording only after the relevant flow is approved; otherwise use a deferred preview label instead of a live-service claim
  - **`Proceed to Checkout`** → **`Checkout preview`** or another clearly disabled preview label
  - **`exclusive offers`** → **`preview updates`**
- Department names such as **`Home & Living`**, **`Kitchen & Storage`**, **`Office & Desk`**, and **`Tech Accessories`** remain stable and may stay unchanged. Browse-first labels such as **`Shop All`**, **`Browse all products`**, **`Explore now`**, **`View product`**, **`Preview only`**, **`Preview item`**, **`Price to be confirmed`**, and **`Delivery details to be confirmed before launch.`** are acceptable while the storefront remains preview-only.
- **`New In`** / **`New Arrivals`** may remain only when the wording is explicitly preview-qualified or clearly treated as a non-final merchandising rail rather than a live stock or launch claim.
- Default global chrome must follow the same preview-safe rule set as preview-tagged PDP and collection surfaces. It is not sufficient for only preview routes to use cautious copy if the homepage, announcement bar, trust bar, promo strip, footer, or cart foundation still imply live commerce readiness.
- Newsletter/update visual treatment and honest deferred interaction semantics for the footer module are sequenced under **Slice 18A** (Product Owner compliance decision) plus **Slice 18B** (**Senior UI/UX Designer** copy + interaction-state handoff) before any capture can be enabled — see **`## Slice 18A`**. Account / wishlist / social **preview chrome honesty** is decided in **Slice 18D** and implemented in **Slice 18E** — see **`## Slice 18D and Slice 18E account wishlist social deferred chrome`**.
- **Slice 17E** implements the preview-safe copy standard from **Slice 17D** on bounded preview surfaces within its approved scope; it does **not** by itself authorize newsletter capture or integrations.
- This slice is documentation-only. It does **not** implement theme changes, enable services, or approve public launch.

## Slice 18A Newsletter compliance and handling decision (Product Owner PASS WITH NOTES)

- **Verdict:** **PASS WITH NOTES** — **approved Option 2:** retain the newsletter/update **visual** shell, but render it as **honest disabled/deferred preview** (**no live collection pretence** until **Slice 18B** aligns copy and control semantics, and a later slice may implement **after** Product Owner go-ahead).
- **Private-preview posture:** **do not** collect newsletter/update emails; **disable** email inputs as collection surfaces and **disable** submit as a capture action; **keep** the visual section **only** when honestly deferred; **do not** connect Shopify Email, Mailchimp, Klaviyo, Google Forms, marketplace apps, or **any** external email/capture service; **do not** harvest tester/customer emails.
- **Compliance rationale:** enabling capture would engage **POPIA** and adjacent obligations (consent clarity, purpose limitation, privacy-notice alignment, retention/deletion, access control, breach/export posture, unsubscribe / stop-collection expectations, customer-trust review) that are **out of scope** for the current password-gated preview posture.
- **Preconditions before any future capture approval:** consent wording; purpose of collection; privacy-notice linkage; responsible party / contact identity; consent timestamp / source capture; storage location; retention / deletion rule; access control; export / backup handling; unsubscribe / contact-to-stop expectation; **POPIA** / customer-trust review.
- **Bounded:** does **not** authorize launch, catalogue/Admin changes, theme publish, checkout/cart/payment, accounts, wishlist wiring, product claims, pricing, delivery promises, external integrations, or **`Supplier verified`** posture.
- **Recommended next slice:** **Slice 18B — Newsletter disabled/deferred copy and interaction state** (**Senior UI/UX Designer**) — **completed as UX spec** (see **`## Slice 18B`**).

## Slice 18B Newsletter disabled/deferred copy and interaction state (PASS WITH NOTES durable rules)

- **Verdict:** **PASS WITH NOTES** — Product Owner accepts this UX specification as the approved theme-implementation contract for private preview.
- **Scope:** Footer newsletter/update **visual column only** — **`sections/site-footer.liquid`** (**desktop + mobile `footer-nl`**) + **`assets/theme.css`** **`.nl-*`** disabled styling as needed. **No capture**, **no integrations** — **Slice 18A Option 2**.
- **Recommended customer copy (private preview):**
  - Title: **Updates coming later**
  - **`nl-desc`:** **We are not collecting email addresses during private preview.**
  - **`input` placeholder:** **Email sign-up paused**
  - **Button label:** **Coming later**
- **Interaction contract:** **`input type="email"`** and **primary control** are **`disabled`** with **`aria-disabled="true"`**; **button** **`type="button"`**, **`disabled`** — **no** submit, **no** POST, **no** third-party endpoints, **no** mailto signup flow. **Prefer `disabled` over `readonly`** so focus/entry is not implied.
- **Language guardrails:** Avoid Subscribe, Sign up, Get updates, Join, Exclusive offers, Discounts, Notify, Launch alerts, and **`aria-label`** text that reads as live signup.
- **Accessibility:** Honest **`<label>`** (visually hidden) describing **paused / not collecting**; optional **`aria-describedby`** from **`nl-desc`**; group **`aria-label`** must **not** say “signup”. Disabled controls may sit outside tab order — heading + description supply context.
- **Visual fidelity:** Preserve **`nl-row`** two-cell rhythm; match north-star **column presence** on **desktop + mobile** — adjust **opacity/cursor** via **`:disabled`** styling, not by deleting the module.
- **Implementation sequencing:** **Senior Full-Stack Software Architect** after Product Owner accepts spec; **minimal-diff** theme slice only.

## Slice 18D and Slice 18E account wishlist social deferred chrome

- **Slice 18D verdict (Product Owner):** **PASS WITH NOTES** — canonical decision text and approved copy palette live in **`docs/project-control.md` `## Slice 18D`**.
- **Slice 18E implementation scope:** honest **non-link / disabled** treatment only — **does not** enable customer accounts, login/register/orders, wishlist service, social destinations, checkout, capture, or persistence.

### Theme mapping (implementation)

- **`sections/site-header.liquid`**: desktop **Account** uses the same **`hdr-action hdr-action--deferred` span** pattern as deferred wishlist (**no** **`routes.account_url`**); mobile header wishlist keeps deferred icon treatment with **Slice 18D**-aligned assistive copy (**Favourites paused** / **Save feature coming later**).
- **`sections/primary-navigation.liquid`**: mobile drawer **Sign in** becomes a **`button`**, **`type="button"`**, **`disabled`**, **`aria-disabled="true"`**, visible label **Customer accounts paused**; bottom-bar **Account** becomes **`bb-item bb-item--deferred`** (**no** account route). **Cart** links remain on **`routes.cart_url`** (cart remains a separate preview policy).
- **`sections/site-footer.liquid`**: **Account** column removes **`routes.account_url`** / **`routes.account_login_url`** anchors; entries are **`f-link-deferred`** spans using approved strings (**Account coming later**, **Orders not available in preview**, **Save feature coming later**, **Addresses not available in preview**, **Customer accounts paused**); footer social icons stay non-navigating **`span.f-social--deferred`** placeholders with **Slice 18D**-aligned **`aria-label`** (**Social links coming later**; **Follow links paused during preview**; **Social profiles to be confirmed**).
- **`sections/main-product-foundation.liquid`**: PDP wishlist control visible label **Favourites paused** with matching **`aria-label`**.
- **`snippets/live-product-card.liquid`**, **`snippets/static-product-card.liquid`**, **`sections/main-search-foundation.liquid`**: heart controls remain native **`button`**, **`disabled`**, with standardized **Favourites paused / Save feature coming later** **`aria-label`** text (**no** **`localStorage`**, **no** customer APIs).
- **`assets/theme.css`**: disabled **`button.drawer-btn`** styling supports the deferred drawer account control without mimicking a live **Sign in** link.

### Tooling note

- Repo-root **`shopify theme check --path . --fail-level error`** is configured to **ignore** **`artifacts/**`** via **`.theme-check.yml`** so historical devops JSON snapshots do not produce **ValidJSON** false positives against the active theme surface.

## Slice 17F search select honesty

- **Acceptance verdict:** **Slice 17F — Search select honesty decision** is accepted as **PASS WITH NOTES**.
- Preserve the working Shopify search route and query submission contract that already exists in header chrome: the search input may continue to submit **`q`** to **`routes.search_url`**, and the mobile search path may continue using its hidden **`type=product`** value while live search/filter wiring remains deferred.
- A search category/select control must **not** remain interactive if it does not change search scope or filtering behaviour in a real, user-visible way. An active-looking control whose options all submit the same value is misleading even when the underlying search route itself works.
- The current desktop header select is therefore treated as a **preview honesty defect** rather than a missing feature request: all visible options currently resolve to the same **`type=product`** behaviour, so the UI implies department filtering that does not exist.
- For preview-only operation, prefer the smallest honest treatment:
  - keep the working search input and submit button
  - keep the visual slot only if needed to preserve the approved header composition
  - render the category/select as disabled or otherwise clearly deferred when it is not wired
  - use short preview-safe wording such as **`All preview items`**, **`Preview categories`**, **`Category preview`**, or helper copy such as **`Department filter coming soon`**
- Do **not** wire new department filtering, predictive search, Search & Discovery facets, or collection-scoped query logic inside a preview-honesty slice unless that behaviour already exists and can be exposed with minimal risk.
- If a later approved implementation keeps the desktop control visible but inactive, it must use honest accessibility semantics:
  - clear label text that reflects preview status rather than live filtering
  - disabled or non-focusable semantics consistent with the chosen control pattern
  - explanatory assistive text where needed so screen-reader users are not led to expect unavailable filtering
  - keyboard focus should remain on the working search input and submit path rather than a fake filter
- The search results template may remain a static-safe preview foundation while live search data stays deferred, but its visible controls must not overstate live query handling, ranking, category scoping, or filtering readiness.
- **Recommended next implementation slice:** **Slice 17G** — minimal-diff desktop search select honesty implementation.

## Slice 17G desktop search select honesty implementation

- **Implementation result:** the approved minimal-diff desktop honesty change is now applied in the live theme code.
- The desktop header keeps its working **GET** search form to **`routes.search_url`**, preserves the **`q`** input and submit button, and continues to scope searches through **`type=product`**.
- The visible desktop category/select no longer presents as a working department filter. It now renders as a disabled preview-only control labelled **`All preview items`**, while a hidden **`type=product`** input preserves the existing search-route contract.
- Deferred explanatory accessibility copy communicates that department filtering is still coming later, and mobile search remains unchanged because it never exposed the misleading desktop category select.
- No predictive search, Search & Discovery facets, collection-scoped search, or new filtering service is introduced by this slice.

## Slice 17I authenticated preview regression for search select honesty

- **Acceptance verdict:** **Slice 17I** is accepted as **PASS WITH NOTES**.
- **Evidence:** **`artifacts/qa/slice-17i-authenticated-preview-search-select-regression-rerun/20260510-142913/`**.
- **Validated preview routes:** **`/?preview_theme_id=151207542967`**, **`/search?preview_theme_id=151207542967`**, and **`/search?q=strainer&type=product&preview_theme_id=151207542967`** on **`151207542967 / Mzansi Select MVP Preview / unpublished`**.
- **Accepted results:** desktop search submit **PASS WITH NOTES**; **`type=product`** preservation **PASS**; disabled/deferred desktop search select honesty **PASS**; mobile search regression **PASS WITH NOTES**; no predictive search, facets, collection-scoped search, or new filtering service **PASS**; no obvious desktop or mobile header regression found.
- **Validated interaction contract:** the real unpublished preview storefront now confirms that the desktop header search continues to submit to Shopify **`/search`**, preserves **`q`** and **`type=product`**, and keeps the visible desktop scope control in an honest disabled/deferred state labelled **`All preview items`** while mobile search remains unchanged.
- **Former follow-up (closed):** the **`/search`** body/card preview-commerce honesty gap called out after **Slice 17G** is now remediated and accepted across **Slices 17J / 17K / 17L** (**Slice 17L** authenticated card CTA regression **PASS**, evidence **`artifacts/qa/slice-17l-authenticated-preview-search-card-cta-honesty-20260510-143839/`**).

## Slice 17J search page body preview-commerce honesty remediation

- **Implementation result:** the `/search` page body keeps its approved static preview-search layout and route posture, but its placeholder commerce presentation is now aligned with preview-only honesty rules.
- Static search-result cards in the search foundation must **not** present active purchase affordances, live discount framing, or final-looking price claims when the underlying search surface remains a placeholder. The accepted remediation therefore uses **`Preview item`** badges, **`Price to be confirmed`** placeholder pricing, and disabled preview-only CTA treatment on those cards.
- The decorative body-level search utility inside the static search foundation must not read as a second live search or purchase step when it is only a shell. In this accepted remediation it remains visually present but exposes an honest disabled **`Preview only`** state.
- This slice does **not** change the working search route contract owned by the header/mobile search forms: **`routes.search_url`**, **`q`**, and **`type=product`** behaviour remain intact, while predictive search, Search & Discovery facets, collection-scoped search, and new filtering services remain deferred.

## Slice 17K authenticated preview regression for search page body honesty

- **QA verdict:** **FAIL**.
- **Evidence:** **`artifacts/qa/slice-17k-authenticated-preview-search-body-honesty/20260510-154857/`**.
- **Validated preview routes:** **`/search?preview_theme_id=151207542967`** and **`/search?q=strainer&type=product&preview_theme_id=151207542967`** on **`151207542967 / Mzansi Select MVP Preview / unpublished`**.
- **Confirmed passes:** the `/search` shell rendered, the decorative body-search button stayed disabled as **`Preview only`**, **`Preview item`** badges rendered, **`Price to be confirmed`** rendered, no predictive search/facets/collection-scoped search/new filtering service appeared, and route/query preservation remained intact.
- **Confirmed failure:** search-result card CTAs still rendered active-looking **`Add to Cart`** buttons in the real preview theme, so the page body remained commercially misleading even though the shell copy and placeholder pricing were correct.

## Slice 17L search card CTA preview-commerce remediation

- **Implementation result:** the `/search` section now owns its preview card CTA markup directly instead of depending on shared card CTA parity in the preview theme.
- **Durable contract clarification:** for the static preview-search foundation, card CTA honesty must be enforced at the `/search` section source when selected-file preview pushes are expected to stage only search-surface files. This avoids preview drift where the shell is updated but an older shared snippet still exposes live-looking purchase CTAs.
- Search-result cards in the `/search` foundation must therefore render disabled **`Preview only`** CTA buttons with explicit preview/deferred semantics directly from the section-level rendering path, while still preserving **`Preview item`** badges and **`Price to be confirmed`** placeholder pricing.
- **Final `/search` preview-commerce CTA honesty contract (Slice 17L authenticated QA PASS):** each visible card CTA shows **`Preview only`** on **`button`** elements with **`type="button"`**, native **`disabled`** (clicks must not initiate commerce flows), and **`aria-disabled="true"`**; the **`/search` body must not retain an enabled-looking `Add to Cart` control**; card grid, spacing, responsive layout, and **`/search`** route contracts stay preserved; during these checks, networks must remain free of **`/cart/add`**, checkout, predictive search, facets, collection-scoped search, or new filtering service traffic (**`artifacts/qa/slice-17l-authenticated-preview-search-card-cta-honesty-20260510-143839/`**).
- This slice still does **not** change the working search route contract owned by the header/mobile search forms: **`routes.search_url`**, **`q`**, and **`type=product`** remain intact, and predictive search, Search & Discovery facets, collection-scoped search, and new filtering services remain deferred.

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

## Slice 13G preview-only product safety control responsibilities

Slice 13G adds the smallest durable preview-safety rule needed before any later preview-store product visibility pass.

Slice 13G scope includes:

- tag-based preview-state detection on live product cards and PDPs using `preview-only` and `price-to-confirm`
- placeholder price rendering (`Price to be confirmed`) whenever either tag is present
- suppression of sale / compare-at / discount treatment whenever preview-only placeholder pricing is active
- explicit non-final preview wording on tagged PDPs so delivery and launch-readiness do not appear approved
- CSS-only support for the above safety state without redesigning the accepted card or PDP layouts

Slice 13G explicitly defers:

- product import or merchandising operations
- Shopify Admin product creation or editing
- actual preview staging
- live Add to Cart, cart, checkout, or wishlist behaviour
- collection/link changes, publish, or live-theme overwrite
- any broader catalogue automation beyond the minimal preview-safety state

## Slice 13J preview-only storefront safety gap fix responsibilities

Slice 13J tightens preview-only storefront safety after Slice 13I authenticated preview validation (PASS WITH NOTES) so staged `0.00` placeholder products do not read as final shop pricing, supplier media, or launch-ready delivery promises.

Slice 13J scope includes:

- robust tag parsing for `preview-only` and `price-to-confirm` (handles common spacing variants by normalising tags before comparison)
- a bounded secondary guard: when the variant price is `0` (or non-positive) and the vendor normalises to `Mzansi Select Preview`, cards and PDPs treat pricing as non-final and show `Price to be confirmed` even if safety tags were mistyped in Admin
- optional `image-permission-confirmed` tag: when absent and `preview-only` is present, collection cards and PDP galleries use theme placeholder imagery instead of catalog media (avoids supplier promotional overlays without documented permission)
- PDP delivery line remains the exact string `Delivery details to be confirmed before launch.` for `preview-only` products, surfaced as a visible paragraph
- cautious alternate announcement, trust-bar, and footer description copy only when `body` carries class `preview-route-cautious` (product template with `preview-only`, or first-page collection products including any `preview-only` item), without redesigning the global shell
- PDP reassurance copy avoids implying live final pricing when preview placeholder pricing or `preview-only` applies

Slice 13J explicit non-goals:

- no Shopify publish, live theme overwrite, checkout/shipping/markets/tax/payment changes, or Supplier verified promotion
- no removal of Shopify-injected structured data in `content_for_header` (store-level SEO JSON-LD may still reference numeric price; theme-visible price remains guarded)

## Slice 14B launch department collection routing responsibilities

Slice **14B** directs the four approved launch departments away from **`all-products`-only placeholders** toward **real Shopify collection URLs** (`/collections/{handle}`) in key browse shells.

Slice **14B** scope includes:

- **`snippets/launch-collection-url.liquid`**: emits **`collections[handle].url`** when present, otherwise **`{{ routes.all_products_collection_url }}`** (defensive Liquid only; does **not** authorise omitting collections in Shopify Admin).
- **`sections/primary-navigation.liquid`**, **`sections/category-strip.liquid`**, and **`sections/main-search-foundation.liquid`**: first four department targets use **`{% render 'launch-collection-url', handle: '…' %}`**.
- **`mzansi-select-theme.html`**: parity update — quartet `href`s use **`/collections/home-living`**, **`/collections/kitchen-storage`**, **`/collections/office-desk`**, **`/collections/tech-accessories`**.

Slice **14B** explicit non-goals:

- no wishlist / heart behavioural work (**Slice 14C**)
- no homepage merchandising static-card PDP navigation (**Slice 14D** — delivered in a separate theme pass after **Slice 14B**)
- no Shopify publish, checkout/shipping/markets/tax/payment changes, **`Supplier verified` promotion**, bulk product import, or Admin edits implied solely by routing

## Slice 14D homepage featured grid to PDP bridging responsibilities

Slice **14D** removes non-navigating homepage merchandising **product grids** ( **`sections/featured-product-grid.liquid`** ) for the **Slice 13I** five-preview-handle set by preferring **`{% render 'live-product-card', product: all_products[handle], cta_label: 'View product' %}`** when the drop resolves.

Slice **14D** scope includes:

- **`sections/featured-product-grid.liquid`**: **`best_sellers`** preset iterates handles **`cable-tidies-set`**, **`acrylic-tablet-phone-stand`**, **`sink-strainer-stainless-steel`**, **`compact-organiser-basket`**; **`kitchen_storage`** preset iterates **`cable-tidies-set`**, **`sink-strainer-stainless-steel`**, **`compact-organiser-basket`**, **`mini-plastic-divider-basket`**. Per slot, **`live-product-card`** when **`all_products[handle]`** is non-blank; otherwise the prior **`static-product-card`** placeholder for that grid position (no invented PDP **`href`**).
- **`templates/index.json`**: **`section_link_url`** for both grids set to **`/collections/all`** so “View all” is not a dead **`#`** when the setting is unset in older themes; section Liquid also defaults blank **`section_link_url`** to **`routes.all_products_collection_url`**.
- Preview safety remains on **`live-product-card`** (**Slice 13J**): **`View product`** link CTA, disabled wishlist, placeholder pricing rules — **no** Add to Cart enablement introduced by **Slice 14D**.

Slice **14D** explicit non-goals:

- no wishlist / heart behaviour (**Slice 14C**)
- no **`feature-tile-grid`** / hero collage merchandising tile rewiring (**Slice 14A.1** follow-up if needed later)
- no department routing regressions (**Slice 14B** contract unchanged)
- no Shopify publish, **`Supplier verified`**, bulk import, Admin edits, checkout/shipping/markets/tax/payment changes

## Slice 14C wishlist honesty / deferred hearts responsibilities

Slice **14C** addresses **Slice 14A.1** QA findings that heart controls were **not** real favourites (**no** `aria-pressed`, **no** persistence contract) while still **looking** interactive.

Slice **14C** scope includes:

- **`snippets/static-product-card.liquid`**: **`.p-wish`** is **`disabled`** with **`aria-disabled="true"`** and honest deferred **`aria-label`** (**Slice 18E** standardizes copy to **Favourites paused** / **Save feature coming later** — replaces misleading “save to wishlist” wording).
- **`snippets/live-product-card.liquid`**: same **`disabled` / `aria-disabled`** pattern; **`aria-label`** references the live **`product.title`** with the same deferred vocabulary.
- **`sections/site-header.liquid`**: wishlist chrome is a **`<span class="hdr-action hdr-action--deferred">`** (not an **`href`** fake route); **Slice 18E** also defers desktop **Account** the same way (**no** **`routes.account_*`**).
- **`sections/site-footer.liquid`**: wishlist Account column entry is a **`<span class="f-link-deferred">`**; **Slice 18E** aligns visible copy to **Save feature coming later** and removes live account anchors from the column.
- **`sections/main-product-foundation.liquid`**: PDP wishlist remains a disabled control; **Slice 18E** sets visible label **`Favourites paused`** with matching **`aria-label`**.
- **`assets/theme.css`**: **`.hdr-action--deferred`**, **`.p-wish:disabled` / `[aria-disabled="true"]`**, **`.f-link-deferred`**, **`.visually-hidden`**.

Slice **14C** explicit non-goals:

- no customer-account wishlist, **no** **`localStorage` / `sessionStorage`** wishlist persistence
- no **`aria-pressed`** favourite toggle without a real persisted wishlist implementation
- no **Slice 14B** department routing edits, no **Slice 14D** **`featured-product-grid`** handle wiring edits

## Slice 14 post-fix unlocked storefront regression audit (QA closure)

- **QA verdict:** **PASS WITH NOTES** (Product Owner acceptance). **Evidence:** **`artifacts/qa/slice-14-postfix-unlocked-storefront-regression-audit/20260503-220755`** — primary text artifacts (**`qa-report.md`**, **`link-audit.csv`**, **`interaction-audit.csv`**, **`automation-notes.json`**) plus screenshots/trace; **`artifacts/`** not committed.
- **Behavioural confirmation (implementation):** **14B** — quartet department links resolve to **`/collections/home-living`**, **`/collections/kitchen-storage`**, **`/collections/office-desk`**, **`/collections/tech-accessories`** in **primary-navigation**, **category-strip** (first four tiles), **main-search-foundation** browse row; **14D** — homepage **`.product-card .prod-img a[href*="/products/"]`** navigates to **PDP** in harness; **14C** — hearts and chrome wishlist remain **honestly deferred/disabled** (see **Slice 14C** section); **PDP** — **Preview only** / **Wishlist deferred** / preview copy unchanged in intent from **Slices 12J / 13G / 13J**; **search** — **`/search?q=strainer&type=product`** loads (**static-safe search foundation** unchanged); **mobile** — subset of routes + card bridge exercised.
- **Notes (informational):** evidence tree may contain **`node_modules`** with generic auth/session wording in upstream docs — not a merchant secret leak from reviewed report/CSVs/JSON; no storefront password value recorded in those artifacts per closure review.
- **Sequencing:** **`docs/project-control.md`** records that **supplier-proof** work **may resume only after** the **`docs: record storefront recovery qa closure`** commit.

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
  - Carries the approved logo, search shell, account/wishlist/cart action structure; Slice **14C** renders wishlist as **`hdr-action--deferred`** (**non-link**, **`aria-label`**) instead of **`#wishlist`**.
- `sections/primary-navigation.liquid`
  - Carries the approved department trigger/menu and primary nav shell; Slice **14B** resolves the approved launch quartet through **`snippets/launch-collection-url.liquid`**.
- `sections/trust-bar.liquid`
  - Carries the approved reassurance block shell.
- `sections/site-footer.liquid`
  - Carries the approved footer information architecture shell; Slice **14C** renders Account-column wishlist as **non-link** **`f-link-deferred`**.
- `snippets/toast-feedback.liquid`
  - Carries the structural toast/cart feedback container only.

Slice 2 refinement note:

- These shell files now prioritize closer alignment to the approved HTML's structure, identifiers, and chrome-level copy while remaining implementation-light.

Slice 3 addition:

- `sections/hero-collage.liquid`
  - Carries the approved hero copy, CTA shell, collage grid, and value badge.
- `sections/category-strip.liquid`
  - Carries the approved horizontal department/service strip; Slice **14B** applies **`launch-collection-url`** to the first four department tiles (**Shipping / Returns / FAQ anchors unchanged**).
- `sections/featured-product-grid.liquid`
  - Reuses **`static-product-card`** fallbacks and **`live-product-card`** for **Slice 13I** preview handles when **`all_products[handle]`** resolves (**Slice 14D**); section heading link defaults to **`all-products`** when **`section_link_url`** unset.
- `sections/promo-banner-split.liquid`
  - Carries the approved editorial promo band.
- `sections/feature-tile-grid.liquid`
  - Carries the approved New Arrivals tile layout.
- `snippets/section-heading.liquid`
  - Reuses the approved section title/link pattern.
- `snippets/static-product-card.liquid`
  - Carries static-safe product-card markup only; Slice **14C** keeps **`.p-wish`** **disabled** with honest **`aria-label`** (no save-to-wishlist pretence).
- `snippets/live-product-card.liquid`
  - Reuses the accepted product-card contract while rendering live Shopify product title, image, price, compare-at pricing, and product-link data for collection and related-product contexts; Slice **14C** aligns **`.p-wish`** with the same deferred pattern.
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
  - Carries search heading, query/result summary shell, static-safe results grid, no-results state, and browse/support prompt presentation; Slice **14B** routes browse-department shortcuts through **`launch-collection-url`**.

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

## Slice 21D Minimal-diff controlled pilot trust wording implementation planning (Slice 21C PASS WITH NOTES)

This section records a **planning-only** implementation approach for controlled live pilot trust wording and interaction states. It does **not** approve theme implementation, product import, Shopify Admin edits, payments enablement, publish/live overwrite, or public launch.

### Pilot scope (approved for planning)

- Controlled live pilot (invite-only), not public launch
- Initial cap: `10` total pilot orders
- Supplier: `Gadgetgyz` only
- Pilot products (4):
  1. `Acrylic Tablet & Phone Stand` — `DP0402`
  2. `UGREEN 4-in-1 USB 2.0 Hub` — `CR106-20277`
  3. `Gizzu USB to Type-C Cable — 2m` — `GCPU2C2`
  4. `World Map Extended Mouse Pad` — `74886`

### Approved wording posture (constraints)

- Honest controlled-pilot language only
- No public-launch wording
- No `Supplier verified` wording
- No final pricing wording
- No guaranteed delivery wording
- No unsupported product claims
- No Best Seller / Deals / Sale claims
- No guaranteed stock wording

### Files/surfaces likely affected (for a later bounded implementation slice)

- `sections/site-header.liquid` (topbar/search shell trust cues)
- `snippets/live-product-card.liquid`, `snippets/static-product-card.liquid` (product card badges/CTAs/pricing labels)
- `sections/main-product-foundation.liquid` (pilot PDP trust band + preview-only/pilot copy)
- `sections/main-cart-foundation.liquid` + `templates/cart.json` (cart/summary and checkout-adjacent wording)
- `sections/main-search-foundation.liquid` + `templates/search.json` (search card/summary copy)
- `templates/product.json` (PDP section composition)
- Reference north-stars: `mzansi-select-theme.html`, `mzansi-select-mobile.html`, `mzansi-select-interactive-elements.txt`

### Minimal implementation approach (planning)

- Prefer **copy-first** minimal diffs localized to the above surfaces.
- Introduce **one** pilot-state guard (theme setting or tag-driven convention) to switch between **preview** and **controlled pilot** trust language, without implicitly enabling purchase flows.
- Preserve existing preview safety conventions (`preview-only`, `price-to-confirm`, placeholder pricing, disabled commerce controls) unless a later explicit go/no-go authorizes a bounded pilot purchase path.

### Pilot wording/state map by surface (planning)

- **Product cards**: show a controlled-pilot badge; avoid “Sale/Deals/Best Seller”; avoid stock guarantees; avoid checkout/payment promises.
- **Pilot PDPs**: clearly distinguish “controlled pilot item” vs “public launch”; conservative delivery/returns wording; no claims beyond evidence; no `Supplier verified`.
- **Cart-adjacent**: treat checkout/payment as deferred unless explicitly enabled; use pilot-only caution labels; avoid “secure checkout” language unless payments are enabled and validated.
- **Footer/support/contact references**: frame support as invite-only pilot support; keep public-launch language out.

### Disabled/deferred states that must remain until go/no-go

- Add to Cart and checkout/payment enablement (unless explicitly approved in a later bounded slice)
- Any import/staging/Admin automation beyond separately approved scope
- Any claims implying final delivery SLAs, final returns policy, final pricing, or launch readiness

### Validation plan (QA)

- Confirm pilot surfaces never show public-launch, `Supplier verified`, final pricing, guaranteed delivery, unsupported claims, or sale/deals/best-seller signals.
- Confirm pages remain non-purchasable unless a later slice explicitly enables a bounded pilot purchase path.
- Confirm desktop/mobile parity and preservation of north-star visual rhythm.

### DevOps preview/live safety considerations

- If later implementation is approved: use bounded `shopify theme push --only` with strict file lists; do not publish/overwrite live theme without explicit Product Owner approval.
- Keep `artifacts/` untracked and uncommitted.

### Security/compliance risks or unresolved wording gaps

- Checkout/payment language must reflect actual enabled capabilities (no “secure checkout” claims unless enabled/validated).
- Delivery/returns wording must remain conservative and non-final until policy publication is approved.
- Prohibit absolute/performance guarantees unless evidence is captured.

## Slice 21E Minimal-diff controlled pilot trust wording implementation (theme)

**Slice 21E** implements the **Slice 21D** plan in the theme (repo) with **no** payments, **no** checkout enablement, **no** Shopify push/publish, **no** Admin/import/staging actions in this slice.

### Storefront guard

- Theme setting **`controlled_pilot_trust_mode`** in **`config/settings_schema.json`** (`Slice 1 shell` group), default **`true`**. When **`false`**, sections fall back to the prior generic private-preview copy paths where dual wording exists.

### Files changed (implementation)

- `config/settings_schema.json` — pilot trust checkbox
- `sections/main-product-foundation.liquid` — pilot PDP copy, badges, reassurance, support band, availability line; suppress compare-at “sale” presentation when pilot mode is on
- `sections/main-search-foundation.liquid` — pilot placeholder cards, schema defaults, search CTA label
- `sections/main-cart-foundation.liquid` — pilot cart summary, returns row, checkout button disabled + honest copy, support pills, line badges, schema defaults
- `sections/site-footer.liquid` — pilot footer descriptions and help `visually-hidden` hints (desktop + mobile)
- `snippets/live-product-card.liquid` — pilot badges, suppress sale badge and compare strikethrough when pilot mode is on; pilot price note
- `snippets/static-product-card.liquid` — pilot badges, strip promotional was/save when pilot mode is on; CTA label/aria
- `templates/product.json`, `templates/search.json`, `templates/cart.json` — section setting defaults aligned to pilot copy

### Behaviour preserved

- Account, wishlist, newsletter, social remain deferred/disabled as before; no new routes or services; north-star HTML references unchanged.

## Department destination strategy

**Slice 14B active theme contract:**

- Dedicated launch handles (**`home-living`**, **`kitchen-storage`**, **`office-desk`**, **`tech-accessories`**) resolve in Liquid to **`collections['handle'].url`** via **`snippets/launch-collection-url.liquid`**.
- Fallback: if **`collections['handle']`** is unavailable at render time, **`{{ routes.all_products_collection_url }}`** is emitted (thin-store safety — does **not** replace Admin collection readiness expectations in **`project-control`**).
- Surfaces wired in **Slice 14B**: **`sections/primary-navigation.liquid`** (**department dropdown**), **`sections/category-strip.liquid`** (**first four department tiles** — **Shipping**, **Returns**, **FAQ** still use **`/pages/about`** anchors), **`sections/main-search-foundation.liquid`** (**browse department links row**).
- **`mzansi-select-theme.html`** uses relative **`/collections/{handle}`** for the quartet so the static source matches routed behaviour.

**Expansion-ready departments** (`Garden & Outdoor`, `Bath & Bedroom`, `Cleaning & Laundry`) remain on **`{{ routes.all_products_collection_url }}`** until another approved slice assigns collection URLs.

Historical note (before **Slice 14B**): the launch quartet defaulted to **`all-products`** everywhere in Liquid pending collection activation.

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
- Slice **14B** activates dedicated quartet URLs at the Liquid layer; storefront operational readiness and density expectations remain governed separately in **`docs/project-control.md`** (theme falls back to **`all-products`** when **`collections['handle']`** fails).

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

Slice 13G validation note:

- The live card and PDP foundations required a small preview-safety guard because they still rendered live variant pricing and sale states by default for any staged product.
- The accepted minimal convention is tag-based rather than metafield-based for now:
  - `preview-only`
  - `price-to-confirm`
- When either tag is present, cards and PDPs now show `Price to be confirmed` instead of final public pricing.
- When `preview-only` is present, cards and PDPs now surface `Preview item`, PDP delivery wording stays `Delivery details to be confirmed before launch.`, and sale/discount treatment is suppressed.
- Purchase controls remain disabled as before, and no Shopify Admin write action, preview staging, publish, or live overwrite is introduced by this slice.

Slice 13J validation note:

- Theme-visible collection cards and PDP price stacks show `Price to be confirmed` when safety tags parse correctly or when the variant price is non-positive with vendor `Mzansi Select Preview`.
- For `preview-only` products, catalog media is suppressed in favour of theme placeholders unless the `image-permission-confirmed` tag is present (Product Owner evidence required before using this tag).
- Global announcement, trust-bar, and footer description swap to cautious copy only on `preview-route-cautious` routes (preview-only PDP, or collection first page listing a preview-only product).
- Shopify `content_for_header` JSON-LD may still expose a numeric offer price for crawlers; that is outside Liquid theme removal scope and remains a known residual risk unless addressed in a later store-level or platform-approved pass.

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
- Preview-only safety depends on consistent product tagging; Slice 13J reduces but does not eliminate this risk by adding vendor+zero-price fallback parsing and cautious global copy on preview routes. Residual JSON-LD price exposure may still exist from Shopify core injection.

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

**Footer Standard For This Pass:** Slices **14B** (department URLs), **14D** (homepage **`featured-product-grid`** → **`live-product-card`**), and **14C** (honest deferred wishlist / hearts: **`static-product-card`**, **`live-product-card`**, **`site-header`**, **`site-footer`**, **`main-product-foundation`**, **`theme.css`**) are recorded above. **Slice 14 post-fix** unlocked storefront regression audit **PASS WITH NOTES** (**evidence** **`artifacts/qa/slice-14-postfix-unlocked-storefront-regression-audit/20260503-220755`**) closes formal QA traceability for those behaviours after the theme commits landed. No account wishlist persistence, **`Supplier verified`**, publish/live-overwrite approval, checkout/shipping/market/tax/payment change, catalogue doc edit, or Admin edit is implied by **Slice 14C** UI honesty alone or by this docs-only QA closure note.
