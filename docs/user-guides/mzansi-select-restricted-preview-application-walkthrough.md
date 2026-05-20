# Mzansi Select restricted preview application walkthrough

**Document Type:** Application walkthrough guide / click-through navigation guide  
**Prepared:** 2026-05-20  
**Owner:** Product Owner  
**Status:** Internal restricted-preview walkthrough only. This is not a public customer guide and not a launch guide. It reflects the accepted preview state after **Slice 21CB** preview-safe search (**PASS**) and **Slice 21CH** controlled-pilot client-side fallback (**PASS WITH NOTES**) on unpublished preview theme **`151207542967`**. Homepage and department route honesty remain accepted from **Slice 21BQ** (**PASS WITH NOTES**).  
**Version:** 2.0 (**Slice 21CK** refresh)

## 1. Document status

- This is an **internal restricted-preview walkthrough**.
- This is **not** a public customer guide.
- This is **not** a launch guide.
- This walkthrough is for internal reviewers and stakeholders only.
- The preview remains **password-gated**, **non-purchasable**, and **not launch-ready**.

## 2. Before you start

- Use authorised preview access only.
- Do not share preview access publicly.
- Do not enter real customer, order, or payment data.
- Do not store passwords, tokens, cookies, secrets, supplier credentials, or raw auth/session files.
- Treat the preview as a browse-and-feedback surface only.
- Use preview theme **`151207542967`** (Mzansi Select MVP Preview) when testing routes.

## 3. Walkthrough path

### Step 1: Open the restricted preview

- Open the approved internal restricted-preview route with theme context as directed by your Product Owner.
- Expected result: the preview opens only after the approved internal access step.
- Observe: the preview should remain clearly internal and non-public.
- Problem if: the preview asks for real customer, order, or payment information; exposes sensitive data; or appears publicly open without the approved restricted-access path.
- Screenshot to be refreshed: restricted preview entry screen (not captured in current QA evidence set).

### Step 2: Review the desktop homepage

- Open the homepage in a desktop viewport (**1366×768** recommended).
- Expected result: desktop header, search bar, department navigation, hero area, category strip, product rails, promo block, trust row, and footer.
- Observe: the page should read as a restricted preview, not a public launch or live checkout surface.
- Problem if: the homepage looks publicly launched, overly final, or implies that products are immediately purchasable.
- [Screenshot: desktop homepage]

### Step 3: Review the mobile homepage

- Open the homepage in a mobile viewport (**390×844** recommended).
- Expected result: mobile header, below-header search, stacked content rhythm, mobile product rails, trust blocks, accordion-style footer areas, and bottom bar.
- Observe: layout remains readable and browse-first; cart, account, and wishlist remain paused or deferred.
- Problem if: the mobile page collapses into misleading commerce controls or hides deferred states.
- [Screenshot: mobile homepage]

### Step 4: Preview-safe search (accepted **Slice 21CB**)

#### 4a. Search with a query

- Navigate to search with a preview-safe term, for example **`organiser`** (`/search?q=organiser&type=product&preview_theme_id=151207542967`).
- Expected result: the page shows the query in the title/summary area and renders **live preview-safe product cards** from **`search.results`**.
- Observe: results use **View product** only; **no** static demo headphones, watches, or unrelated placeholder products.
- Problem if: the query is ignored, static unrelated demo products appear, or purchase controls look active.
- [Screenshot: search query results desktop]

#### 4b. Bare search (no query)

- Open **`/search?preview_theme_id=151207542967`** without a query.
- Expected result: an honest **Start a preview search** prompt; **no** fake product grid.
- Problem if: unrelated demo products appear without a query.
- [Screenshot: search no-query desktop]

#### 4c. No-match search

- Search for a term unlikely to match, for example **`zzzz-no-match-preview`**.
- Expected result: honest **No preview matches** / try-another-search copy; **zero** product cards.
- Problem if: fake results or static demo cards appear on a no-match query.
- [Screenshot: search no-match desktop]

#### Search safety reminders

- Search uses a GET form only — **no** cart or checkout enablement.
- Desktop category filter remains paused where applicable.
- Mobile search behaviour should mirror the same honest states (use the desktop evidence set as the primary reference unless you are doing a live mobile pass).

### Step 5: Controlled-pilot fallback route (accepted **Slice 21CH**)

- Open **`/collections/controlled-pilot?preview_theme_id=151207542967`**.
- Expected result after the page loads:
  - The **controlled-pilot fallback** surface appears (client-side reveal).
  - Generic **Page Missing** is **not** the dominant experience.
  - A route notice explains this is served through **404** handling, not a native live collection grid.
  - Copy states **restricted preview**, **not available for purchase**, and that **Shopify Admin** collection publication work is **deferred**.
  - **Three** CJ controlled-pilot items render as live preview-safe cards or honest placeholders with **View product** only.
  - Recovery links point to homepage preview and the approved department quartet only.
- Observe: HTTP **404** may still apply at the network level — that is expected. The theme fallback is intentional for internal review.
- Problem if: only generic **404** copy appears with no controlled-pilot section; controlled-pilot copy appears on unrelated missing routes; **Add to Cart** / **Buy Now** / checkout / customer routes appear.
- [Screenshot: controlled-pilot fallback desktop]
- [Screenshot: controlled-pilot fallback mobile]

#### Controlled-pilot regression check (optional)

- Open **`/collections/not-a-real-controlled-pilot?preview_theme_id=151207542967`**.
- Expected result: normal generic **404** only; controlled-pilot fallback shell **must not** appear.

### Step 6: Use the approved department links

- Open the approved department links one at a time:
  - Home & Living
  - Kitchen & Storage
  - Office & Desk
  - Tech Accessories
- Expected result: approved browse departments for the current preview (**Slice 21BQ** accepted).
- Observe: each route should feel like a browse destination, not a purchase funnel.
- Problem if: a department leads to a broken destination, misleading placeholder, or customer-ready purchase state.
- [Screenshot: desktop department menu]

### Step 7: Open the mobile drawer

- Tap the mobile menu button and open the drawer.
- Expected result: departments, browse links, and paused help/account states in a readable mobile layout.
- Observe: approved department quartet visible; **Brands** and helper routes remain deferred where no approved destination exists.
- Problem if: drawer links look active but are not, or paused cart/account controls appear live.
- [Screenshot: mobile drawer open]

### Step 8: Review bottom-bar behaviour

- On mobile, review the bottom bar without treating it as a commerce control row.
- Expected result: Home and Search remain navigation/browse utilities; Cart, Wishlist, and Account remain paused or deferred.
- Problem if: Cart, Wishlist, or Account opens a live customer flow or suggests checkout is available.

### Step 9: Review product-card rails

- Scroll through the homepage product-card rails.
- Expected result: rails work as browse and review surfaces.
- Observe: live cards may open preview-safe PDPs; static cards remain non-purchasable.
- Problem if: a card acts like a live purchase button or hides preview-only pricing uncertainty.
- [Screenshot: product-card rail]

### Step 10: Open available product pages where approved

- Open product pages only where a card exposes a live preview-safe browse path or where the accepted review set names an approved PDP route.
- Expected result: review surface, not a purchase surface.
- Observe: preview-only, non-purchasable posture; **Price to be confirmed** where applicable; no supplier media on CJ pilot rows.
- Problem if: **Add to Cart**, **Buy Now**, checkout, payment, or customer-account flow appears.
- Important boundary: the structured PDP review pack in **21BB / 21BC / 21BD** remains anchored to the three approved CJ pilot products unless Product Owner expands scope.

### Step 11: Review promo, trust, and footer areas

- Review promo banner, trust/support messaging, footer link groups, social shells, account/help states, and newsletter area.
- Expected result: browse/support review surfaces and paused shells, not active launch services.
- Observe: wording must not overclaim delivery, payment, support, or launch readiness.
- Problem if: newsletter capture looks live, helper routes look approved when they are not, or footer/account areas imply customer-ready services.

### Step 12: Complete the feedback template

- Complete the accepted feedback template after the walkthrough.
- Use: `docs/pilot/slice-21bc-restricted-preview-feedback-capture.md`
- Expected result: reviewers capture navigation, clarity, trust, readability, wording, and misleading states.
- Problem if: feedback notes include sensitive information or drift into unsupported launch/commercial claims.

## 4. Navigation guidance

### Approved browse departments

- Home & Living
- Kitchen & Storage
- Office & Desk
- Tech Accessories

### Deferred departments

- Garden & Outdoor
- Bath & Bedroom
- Cleaning & Laundry

### Browse-link posture (**Slice 21BQ** accepted on preview theme)

- `Home` returns to the homepage.
- `Shop All` may remain intentionally broad.
- `New in Preview`, `Selected Picks`, and `Preview Picks` use anchored homepage sections or approved specific destinations as implemented in **21BQ**.
- `Brands` remains deferred where no approved destination exists.

## 5. What each click should do

### Search clicks

- Search submit with query:
  Expected: live preview-safe results for matching preview catalogue items.
  Problem if: static unrelated demo products appear or query is ignored.

- Bare `/search`:
  Expected: start-search prompt only.
  Problem if: fake product grid without a query.

### Controlled-pilot route

- `/collections/controlled-pilot`:
  Expected: controlled-pilot fallback reveal with three CJ items and safe recovery links.
  Problem if: generic **404** only, or native collection grid implying full catalogue/checkout readiness.

### Product clicks

- **View product** on live cards:
  Expected: non-purchasable PDP browse surface.
  Problem if: purchase or customer-order flow appears.

## 6. What must stay disabled or deferred

- checkout
- payment
- cart (live add / checkout path)
- customer accounts
- wishlist persistence
- newsletter capture
- native Shopify Admin **`controlled-pilot`** collection publication (deferred separate slice)
- product import / sync
- app installs
- public launch
- unavailable departments
- helper, social, and account routes without approved destinations

If any of these become active-looking as real customer flows, treat that as a review issue.

## 7. Screenshot references (source-backed)

Current rendered QA evidence used for the refreshed PDF export (**Slice 21CK**):

### Homepage and navigation (**21BJ** / **21BQ** class)

- [Screenshot: desktop homepage]
- [Screenshot: desktop department menu]
- [Screenshot: mobile homepage]
- [Screenshot: mobile drawer open]
- [Screenshot: product-card rail]

Evidence paths:

- `artifacts/qa/slice-21bj-rerun-after-21bm-auth-rendered-validation/2026-05-18-20-19-59/screenshots/homepage-desktop-1366x768.png`
- `artifacts/qa/slice-21bj-rerun-after-21bm-auth-rendered-validation/2026-05-18-20-19-59/screenshots/homepage-desktop-department-menu.png`
- `artifacts/qa/slice-21bj-rerun-after-21bm-auth-rendered-validation/2026-05-18-20-19-59/screenshots/homepage-mobile-390x844.png`
- `artifacts/qa/slice-21bj-rerun-after-21bm-auth-rendered-validation/2026-05-18-20-19-59/screenshots/homepage-mobile-drawer-open-390x844.png`

### Search (**21CB** rendered validation)

- [Screenshot: search query results desktop]
- [Screenshot: search no-query desktop]
- [Screenshot: search no-match desktop]

Evidence paths:

- `artifacts/qa/slice-21cb-search-rendered-validation/2026-05-20-19-1/screenshots/organiser-desktop-2026-05-20-19-1.png`
- `artifacts/qa/slice-21cb-search-rendered-validation/2026-05-20-19-1/screenshots/no-query-desktop-2026-05-20-19-1.png`
- `artifacts/qa/slice-21cb-search-rendered-validation/2026-05-20-19-1/screenshots/no-match-desktop-2026-05-20-19-1.png`

### Controlled-pilot fallback (**21CH** rendered validation)

- [Screenshot: controlled-pilot fallback desktop]
- [Screenshot: controlled-pilot fallback mobile]

Evidence paths:

- `artifacts/qa/slice-21ch-controlled-pilot-rendered-validation/2026-05-20-20-5/screenshots/controlled-pilot-desktop-2026-05-20-20-5.png`
- `artifacts/qa/slice-21ch-controlled-pilot-rendered-validation/2026-05-20-20-5/screenshots/controlled-pilot-mobile-2026-05-20-20-5.png`

These references are safe evidence only. They are not new source truth beyond the accepted preview state.

## 8. Reviewer checklist

- navigation is clear
- preview-only status is clear
- search honours queries and honest empty states
- controlled-pilot fallback is understandable
- products do not appear purchasable
- wording is not misleading
- mobile layout is readable
- desktop layout is readable
- deferred states are understandable

## 9. Stop conditions

Pause the walkthrough and escalate if any of these occur:

- a product appears purchasable
- checkout, payment, or customer flow appears active
- route wording is misleading (for example generic **404** on controlled-pilot when fallback should appear, or controlled-pilot fallback on unrelated routes)
- preview access asks for sensitive data
- reviewer sees real customer, order, or payment data
- confusing wording creates a trust risk

## 10. Feedback handoff

After the walkthrough, direct reviewers to:

- `docs/pilot/slice-21bc-restricted-preview-feedback-capture.md`

Where useful, reviewers may also work alongside:

- `docs/pilot/slice-21bb-restricted-preview-reviewer-pack.md`
- `docs/pilot/slice-21bd-restricted-preview-review-session-plan.md`
- `docs/checkpoints/slice-21cj-restricted-preview-readiness-checkpoint.md`

## 11. Sensitivity and privacy

Do not include or circulate:

- passwords
- secrets
- tokens
- cookies
- customer data
- order data
- payment data
- supplier credentials
- raw auth/session files

Keep notes factual, internal, and sanitized.

## 12. Footer and signature

Prepared by SG Digital  
A division of Sikhwari Group (Pty) Ltd

Built by SG Digital | A division of Sikhwari Group (Pty) Ltd
