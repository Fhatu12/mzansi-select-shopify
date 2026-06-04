# Slice 21IA-N - Final launch-readiness QA

Date: 2026-06-04

## Objective
Run final read-only launch-readiness QA from the Windows QA workspace against the current live storefront and treat a clean browser context as the verification source of truth.

## Execution context
- Windows workspace used: `D:\\dev\\mzansi-select-shopify-winqa`
- WSL source repo used only for documentation and commit:
  - `\\wsl$\\Ubuntu-Dev\\home\\fhatu\\dev\\mzansi-select-shopify`
- Live store: `https://mzansiselect.myshopify.com`
- Live theme confirmed: `Horizon` `#158396285153`
- Safety mode: read-only customer-flow QA only; no Shopify Admin changes, no theme push, no payment submission

## Route health
- Verified route response and visible render for:
  - `/`
  - `/collections/all`
  - `/pages/contact`
  - `/pages/faq`
  - `/policies/shipping-policy`
  - `/policies/refund-policy`
  - `/policies/privacy-policy`
  - `/cart`
  - sampled PDP: `/products/mini-7-in-1-multifunctional-led-desk-lamp-with-wireless-charger`
- Result:
  - all checked routes returned `200`
  - no Liquid errors were observed on checked routes

## Homepage and footer cleanup result
- In the clean Playwright browser context used for this slice, the homepage still showed:
  - `PREVIEW HIGHLIGHT`
  - `Tech & Home Preview Picks`
  - `Browse preview picks`
  - `Modern Living Room Collection`
- `Modern Living Collection` was not visible on the homepage in this run.
- Footer/header cleanup items did pass:
  - `Contact Us` visible and linked to `/pages/contact#contact`
  - `Track Order` hidden
  - `Careers` hidden
  - `Affiliates` hidden
  - `Account` section hidden
  - no old phone number found
  - no old personal email found
  - no standalone footer Help email item found

## Catalogue verification
- Public product count on `/collections/all`: `45`
- Unavailable products visible in the public collection grid: `0`
- Sampled collection cards showed images and prices.
- Sampled current PDP showed:
  - image visible
  - price visible
  - `Add to Cart` visible

## Cart flow
- Added one available low-value product to cart:
  - product: `-Mini - 7 in 1 Multifunctional LED Desk Lamp with Wireless Charger`
  - variant ID used by the storefront form: `48439852925153`
- Verified:
  - cart line item visible
  - quantity visible
  - subtotal visible
  - checkout button visible
- Stopped before payment authorization.

## Checkout and payment visibility
- Checkout opened successfully.
- Provider labels visible by name on the reached checkout step:
  - Stitch: `no`
  - Payflex: `no`
  - PayPal: `no`
  - PayFast: `no`
  - Peach: `no`
- No real payment was submitted.
- No card or bank details were entered.

## Mobile verification
- Checked mobile render for:
  - homepage
  - `/collections/all`
  - sampled PDP
  - `/cart`
- Result:
  - no horizontal overflow on checked mobile routes
  - mobile PDP `Add to Cart` visible
  - mobile cart checkout button visible after adding the sampled product
  - no Liquid errors observed on checked mobile routes

## Regression checks
- Wishlist drawer: pass
  - trigger visible
  - drawer opened successfully
- PDP gallery arrows: partial
  - arrows visible
  - interaction attempted
  - main image change was not proven in this sampled run
- FAQ, policy, and support links: pass
- Liquid error sweep on checked routes: pass

## Verdict
- Status: **no-go for final launch sign-off**

## Must-fix
- Homepage still exposes preview-era wording in the clean Windows-side browser context used for this QA:
  - `PREVIEW HIGHLIGHT`
  - `Tech & Home Preview Picks`
  - `Browse preview picks`
  - `Modern Living Room Collection`
- Because the visible homepage still contains launch-blocking preview wording, final launch readiness is not yet confirmed from this run.

## Should-fix
- Re-check PDP gallery arrow behavior with a multi-image sampled product and confirm the main media changes visibly after navigation.
- Normalize public verification between manual incognito checks and automated clean-browser checks, since this slice still observed homepage preview wording despite the reported manual cache confirmation.

## Launch recommendation
- **No-go** until the homepage preview wording discrepancy is resolved in the verification environment used for final QA.

## Safety confirmation
- No Shopify Admin changes were made.
- No product, price, shipping, payment-provider, or theme changes were made.
- No payment was submitted or authorized.
- `tools/catalogue/` remained untracked and untouched.
