# Slice 21HU-WIN - Live Store Completion Readiness Audit

Date: 2026-06-01
Store: `https://mzansiselect.myshopify.com`
Live theme: `Mzansi Select MVP Restored #162429075681`
Mode: Read-only only (no Shopify/Admin mutation)

## Verdict
Status: **PASS WITH BLOCKERS** for opening sales/checkout.
Current storefront is stable for browse and trust review, but checkout-readiness remains blocked by commerce setup dependencies and one wishlist persistence retest gap.

## 1) Product catalogue
- Public `/products.json?limit=250` count: **48** products.
- `/collections/all`: reachable (`HTTP 200`) and rendering product list.
- Department routes (`HTTP 200` all):
  - `/collections/home-living`: weak/near-empty (very low visible product volume)
  - `/collections/kitchen-storage`: low
  - `/collections/office-desk`: low
  - `/collections/tech-accessories`: strong
  - `/collections/retro-vault-consoles-classics`: medium/strong
  - `/collections/games-toys`: medium/strong
- Automated rendered link-density sample (not exact collection product total):
  - Home Living: 9
  - Kitchen Storage: 3
  - Office Desk: 3
  - Tech Accessories: 60
  - Retro Vault Consoles Classics: 24
  - Games Toys: 45
- Duplicate-title signal found:
  - `75% Mechanical Keyboard Wired with Media Knob, APAYADO Black Gaming Keyboard,Hot-Swap,ABS Cap Transparent Character Backlighting` appears more than once.

## 2) PDP checks (sample 6 across collections)
Sampled PDPs: 6 (from live `/collections/all` product links).
- Gallery arrows: present on all 6 sampled PDPs.
- Variant/colour selector: no variant option controls detected in sampled set (likely single-variant products).
- Max 5 media: no violation observed in sampled pages.
- `Product Overview`: not present (remains removed).
- Specifications: visible on sampled pages.
- Spinner/navigation issue: not observed in sampled pages.

## 3) Wishlist
- Added 3 products: pass.
- Header count update: pass (`3`).
- Drawer above header: pass (visible, overlay behavior active).
- Mini images in drawer: pass (3 visible).
- Refresh persistence: **retest required** (automated post-refresh drawer-item selector returned 0; may be selector mismatch or true persistence gap).
- Remove item: not conclusively validated in this pass due to the same post-refresh drawer-state ambiguity.
- Mobile drawer: baseline mobile route/overflow checks passed; interactive mobile drawer needs one manual confirmation pass before launch.

## 4) Business/legal trust
- Business details: present.
- Company name: present.
- Registration number: present.
- Director/contact/address signals: present.
- Support email and phone: present.
- Footer links: contact route works (`/pages/contact` `HTTP 200`).
- Track order wording remains deferred-compatible (no checkout enablement path opened in this pass).

## 5) Commerce safety / checkout status
- Add to Cart buttons: not found.
- Quick-add: not found.
- Dynamic checkout button: not found.
- `/cart`: reachable (`HTTP 200`) but no add path exposed from storefront.
- `/checkout`: redirects (`HTTP 302`), no checkout/payment enablement performed.
- `Supplier verified` claim: not found.
- Newsletter capture: not found.
- Liquid/runtime error banners: not observed in sampled routes.

## 6) Mobile UX
Viewport tested: `390x844`.
Routes checked: home, collections/all, search, PDP sample context.
- Horizontal overflow:
  - Home: `0`
  - Collections/all: `0`
  - Search: `0`
- Usability baseline: pass on sampled routes.
- Wishlist drawer mobile interaction: requires one manual confirm pass (open/add/remove/persist) before launch sign-off.

## 7) Ranked completion blockers

### Must fix before sales
1. Confirm and document checkout/payment activation plan (gateway, test order path, failure handling).
2. Confirm shipping and fulfilment policy content/routes are final and customer-visible.
3. Confirm returns/refunds policy content/routes are final and customer-visible.
4. Re-run manual wishlist persistence/remove validation on desktop + mobile and close gap with evidence.

### Should fix before sales
1. Reduce department imbalance (Home Living / Kitchen Storage / Office Desk are weak versus Tech Accessories).
2. Resolve obvious duplicate product title entries (content hygiene and customer trust).
3. Run final PDP copy cleanup sweep for high-friction titles/descriptions still carrying supplier-style phrasing.

### Can defer
1. Custom domain go-live (keep `myshopify.com` during controlled launch if needed).
2. Advanced order-tracking flow automation (if correctly disclosed as deferred/manual).
3. Additional visual polish and long-tail QA beyond critical paths.

## Recommended next slice
**Slice 21HV-WIN - Commerce activation readiness pack**
- Lock policy pages (shipping, returns/refunds, support/contact, privacy/terms).
- Define checkout/payment enablement checklist and rollback.
- Execute manual wishlist persistence regression (desktop/mobile) with evidence.
- Confirm launch guardrails and no-mutation constraints until explicit PO approval.

## Safety statement
No product, price, description, collection, theme, app, checkout/payment, domain, or Shopify Admin mutation was performed in this audit.
