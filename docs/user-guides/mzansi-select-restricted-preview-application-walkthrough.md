# Mzansi Select restricted preview application walkthrough

**Document Type:** Application walkthrough guide / click-through navigation guide  
**Prepared:** 2026-05-19  
**Owner:** Product Owner  
**Status:** Internal restricted-preview walkthrough only. This is not a public customer guide and not a launch guide. It is intended to help internal reviewers move through the current preview safely, observe the right surfaces, and avoid treating the storefront as purchasable or launch-ready. Some browse-link behaviour accepted locally in **Slice 21BQ** still requires preview-side rendered confirmation and is marked here as the **current preview expectation** or **to be confirmed** where relevant.  
**Version:** 1.0

## 1. Document status

- This is an **internal restricted-preview walkthrough**.
- This is **not** a public customer guide.
- This is **not** a launch guide.
- This walkthrough is for internal reviewers and stakeholders only.

## 2. Before you start

- Use authorised preview access only.
- Do not share preview access publicly.
- Do not enter real customer, order, or payment data.
- Do not store passwords, tokens, cookies, secrets, supplier credentials, or raw auth/session files.
- Treat the preview as a browse-and-feedback surface only.

## 3. Walkthrough path

### Step 1: Open the restricted preview

- Click or open only the approved internal restricted-preview route.
- Expected result: the preview opens only after the approved internal access step.
- Observe: the preview should remain clearly internal and non-public.
- Problem if: the preview asks for real customer, order, or payment information; exposes sensitive data; or appears publicly open without the approved restricted-access path.
- [Screenshot placeholder: restricted preview entry]

### Step 2: Review the desktop homepage

- Open the homepage in a desktop viewport.
- Expected result: you should see the desktop header, search bar, department navigation, hero area, category strip, product rails, promo block, trust row, and footer.
- Observe: the page should read as a restricted preview, not a public launch or live checkout surface.
- Problem if: the homepage looks publicly launched, overly final, or implies that products are immediately purchasable.
- [Screenshot: desktop homepage]
- Safe evidence reference: `artifacts/qa/slice-21bj-rerun-after-21bm-auth-rendered-validation/2026-05-18-20-19-59/screenshots/homepage-desktop-1366x768.png`

### Step 3: Review the mobile homepage

- Open the homepage in a mobile viewport.
- Expected result: you should see the mobile header, below-header search, stacked content rhythm, mobile product rails, trust blocks, accordion-style footer areas, and bottom bar.
- Observe: the layout should remain readable on mobile and still present the preview as browse-first and non-purchasable.
- Problem if: the mobile page becomes hard to read, collapses into misleading commerce controls, or hides deferred states in a confusing way.
- [Screenshot: mobile homepage]
- Safe evidence reference: `artifacts/qa/slice-21bj-rerun-after-21bm-auth-rendered-validation/2026-05-18-20-19-59/screenshots/homepage-mobile-390x844.png`

### Step 4: Use the header search carefully

- Enter a simple preview-safe product term in the search input and submit the search.
- Expected result: search should submit as a browse/search action across preview items.
- Observe: the desktop category select should remain paused or disabled rather than pretending to be a live department filter.
- Problem if: the search category select appears active when it is not, search suggests checkout or purchasing, or the results posture becomes misleading.
- To be confirmed: detailed rendered validation of every latest route-honesty refinement outside the already accepted preview-safe search posture.

### Step 5: Use the approved department links

- Open the approved department links one at a time.
- Approved departments:
- Home & Living
- Kitchen & Storage
- Office & Desk
- Tech Accessories
- Expected result: these should behave as the approved browse departments for the current preview.
- Observe: each route should feel like a browse destination, not a purchase funnel.
- Problem if: an approved department leads to a broken destination, a misleading placeholder, or a customer-ready purchase state.
- [Screenshot: desktop department menu]
- Safe evidence reference: `artifacts/qa/slice-21bj-rerun-after-21bm-auth-rendered-validation/2026-05-18-20-19-59/screenshots/homepage-desktop-department-menu.png`

### Step 6: Open the mobile drawer

- Tap the mobile menu button and open the drawer.
- Expected result: the drawer should expose departments, browse links, and paused help/account states in a readable mobile layout.
- Observe: the approved department quartet should be visible; `Brands` and helper routes should remain deferred where no approved destination exists.
- Problem if: drawer links look active but are not, deferred states are unclear, or paused account/cart controls appear live.
- [Screenshot: mobile drawer open]
- Safe evidence reference: `artifacts/qa/slice-21bj-rerun-after-21bm-auth-rendered-validation/2026-05-18-20-19-59/screenshots/homepage-mobile-drawer-open-390x844.png`

### Step 7: Review bottom-bar behaviour

- On mobile, review the bottom bar without treating it as a commerce control row.
- Expected result: Home should remain a normal navigation control and Search should remain a browse utility. Cart, Wishlist, and Account should remain paused or deferred.
- Observe: the bottom bar should support navigation review without implying customer account or checkout readiness.
- Problem if: Cart, Wishlist, or Account opens a live customer flow or suggests that checkout is available.

### Step 8: Review product-card rails

- Scroll through the homepage product-card rails.
- Expected result: the rails should work as browse and review surfaces.
- Observe: some cards may open product pages where a live preview-safe product route exists; static cards should remain non-purchasable and clearly not act as Add to Cart controls.
- Problem if: a card acts like a live purchase button, hides preview-only pricing uncertainty, or makes a static card look orderable.
- [Screenshot: product-card rail]
- Safe evidence reference: the latest safe homepage screenshots above show the current product-rail presentation on both desktop and mobile.

### Step 9: Open available product pages where approved

- Open product pages only where a product card exposes a live preview-safe browse path or where the accepted restricted-preview review set already names an approved PDP route.
- Expected result: the page should open as a review surface, not a purchase surface.
- Observe: the page should keep preview-only, non-purchasable posture clear.
- Problem if: `Add to Cart`, `Buy Now`, checkout, payment, or customer-account flow appears.
- Important boundary: the accepted structured PDP review pack in **21BB / 21BC / 21BD** remains anchored to the three approved CJ pilot products. Any broader PDP click-through should still be treated cautiously and only where the preview currently exposes it safely.

### Step 10: Review promo, trust, and footer areas

- Review the promo banner, trust/support messaging, footer link groups, social shells, account/help states, and newsletter area.
- Expected result: these should behave as browse/support review surfaces and paused shells, not active launch services.
- Observe: promo and trust wording should remain clear and not overclaim delivery, payment, support, or launch readiness.
- Problem if: newsletter capture looks live, helper routes look approved when they are not, or footer/social/account areas imply customer-ready services.

### Step 11: Complete the feedback template

- Complete the accepted feedback template after the walkthrough.
- Use: `docs/pilot/slice-21bc-restricted-preview-feedback-capture.md`
- Expected result: reviewers capture feedback about navigation, clarity, trust, readability, wording, and misleading states.
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

### Browse-link posture

- `Home` should return to the homepage.
- `Shop All` may remain intentionally broad as a general browse route.
- `New in Preview`, `Selected Picks`, and `Preview Picks` are the **current preview expectation** for anchored browse behaviour and should be treated cautiously until the relevant rendered validation is confirmed in the latest preview state.
- `Brands` should remain deferred where no approved destination exists.

## 5. What each click should do

### Homepage and shell clicks

- Logo:
  Expected destination or state: homepage.
  Reviewer should observe: stable return to the main browse surface.
  Problem if: the logo leads somewhere unexpected or broken.

- Desktop department button:
  Expected destination or state: opens the department menu.
  Reviewer should observe: approved quartet live, deferred departments still clearly paused.
  Problem if: deferred departments behave like live routes.

- Mobile menu button:
  Expected destination or state: opens the drawer.
  Reviewer should observe: departments and browse links remain readable and appropriately scoped.
  Problem if: drawer content suggests live account, checkout, or support service paths.

### Search clicks

- Search submit:
  Expected destination or state: search browse surface.
  Reviewer should observe: search behaves like a preview browse helper.
  Problem if: the search posture suggests final search/filter capability that is not really present.

- Desktop search category select:
  Expected destination or state: paused or disabled.
  Reviewer should observe: honest non-filter state.
  Problem if: the select appears live and misleading.

### Product and section clicks

- Product `View product` link where available:
  Expected destination or state: product detail page browse surface.
  Reviewer should observe: non-purchasable preview posture.
  Problem if: purchase controls or customer-order flow appears.

- Static product-card action:
  Expected destination or state: disabled or preview-only state.
  Reviewer should observe: non-purchasable card treatment.
  Problem if: a static card acts like Add to Cart.

- Promo or section browse link:
  Expected destination or state: approved browse surface or honest deferred state.
  Reviewer should observe: the click result matches the visible wording.
  Problem if: the link is dead, misleading, or over-specific without a real destination.

### Footer and support clicks

- Newsletter area:
  Expected destination or state: disabled or paused.
  Reviewer should observe: no email capture.
  Problem if: a live sign-up flow appears.

- Social, helper, account, and company items:
  Expected destination or state: deferred or paused where no approved route exists.
  Reviewer should observe: honest non-live state.
  Problem if: these areas look customer-ready or route to misleading placeholders.

## 6. What must stay disabled or deferred

- cart
- checkout
- payment
- customer accounts
- wishlist persistence
- newsletter capture
- unavailable departments
- helper, social, and account routes without approved destinations

If any of these become active-looking in a way that suggests a real customer flow, treat that as a review issue.

## 7. Screenshot placeholders

- [Screenshot: desktop homepage]
- [Screenshot: desktop department menu]
- [Screenshot: mobile homepage]
- [Screenshot: mobile drawer open]
- [Screenshot: product-card rail]

Current safe and source-backed rendered QA references:

- `artifacts/qa/slice-21bj-rerun-after-21bm-auth-rendered-validation/2026-05-18-20-19-59/screenshots/homepage-desktop-1366x768.png`
- `artifacts/qa/slice-21bj-rerun-after-21bm-auth-rendered-validation/2026-05-18-20-19-59/screenshots/homepage-desktop-department-menu.png`
- `artifacts/qa/slice-21bj-rerun-after-21bm-auth-rendered-validation/2026-05-18-20-19-59/screenshots/homepage-mobile-390x844.png`
- `artifacts/qa/slice-21bj-rerun-after-21bm-auth-rendered-validation/2026-05-18-20-19-59/screenshots/homepage-mobile-drawer-open-390x844.png`

These references are safe evidence only. They are not new source truth beyond the accepted preview state.

## 8. Reviewer checklist

- navigation is clear
- preview-only status is clear
- products do not appear purchasable
- wording is not misleading
- mobile layout is readable
- desktop layout is readable
- deferred states are understandable

## 9. Stop conditions

- product appears purchasable
- checkout, payment, or customer flow appears
- preview access asks for sensitive data
- reviewer sees real customer, order, or payment data
- confusing wording creates a trust risk

Pause the walkthrough and escalate if any of these occur.

## 10. Feedback handoff

After the walkthrough, direct reviewers to:

- `docs/pilot/slice-21bc-restricted-preview-feedback-capture.md`

Where useful, reviewers may also work alongside:

- `docs/pilot/slice-21bb-restricted-preview-reviewer-pack.md`
- `docs/pilot/slice-21bd-restricted-preview-review-session-plan.md`

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
