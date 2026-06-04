# Slice 21IA-D-WIN - Live Store Regression Audit After AutoDS Refresh

Date: 2026-06-04

## Scope

Read-only live storefront regression audit for `https://mzansiselect.myshopify.com` after Product Owner Shopify Admin changes, AutoDS product refresh, hidden/deferred section changes, and Stitch activation.

## Hard Boundaries Preserved

- No Shopify Admin changes.
- No product, variant, price, collection, shipping-rate, payment-provider, or theme-file changes.
- No real payment submitted.
- No Stitch, Payflex, PayPal, PayFast, Peach, card, bank, or wallet authorization attempted.
- Repo mutation limited to docs.
- Existing untracked `tools/catalogue/` left untouched.

## Baseline State

| Check | Result |
| --- | --- |
| Live store load | `200` on `/` |
| Cloudflare/challenge | No Cloudflare challenge on initial homepage/product JSON fetch. Shopify verification/rate limiting appeared during scripted cart/mobile/checkout checks. |
| Live theme | `Horizon` |
| Live theme ID | `158396285153` |
| Live theme role | `main` |
| Public product endpoint | `/products.json?limit=250` returned successfully |
| Public product count | `45` |
| Products with available variants | `45` |
| Products with zero available variants | `0` |
| Unavailable product list | None |

Live theme was read from the public storefront `Shopify.theme` payload:

```text
{"name":"Horizon","id":158396285153,"theme_store_id":2481,"role":"main"}
```

## Catalogue/Product Audit

All 45 public products have at least one available variant. No unavailable public products were found in `/products.json?limit=250`.

### Sampled PDP Results

| Product | HTTP | Title | Price | Images | ATC | `/cart/add` | TBC blocker | Lock script | Dynamic checkout | Variants | Gallery arrows |
| --- | ---: | --- | --- | ---: | --- | --- | --- | --- | --- | ---: | --- |
| Portable Kinetic Car Air Freshener Solar Powered Double Ring Rotating Air Cleaner Perfume Fragrance Diffuser | 200 | Yes | Yes | 6 | Yes | Yes | No | No | Absent | 0 | Updates main image |
| Multi Layered Chain Rhinestone Star Station Necklace | 429 | Blocked by Shopify verification/rate limit | Blocked | 0 | Blocked | No | No | No | Absent | 0 | Not tested |
| 800Ml Dogs Water Bottle Portable High Capacity Leakproof Pet Foldable Drinking Bowl Golden Retriever Outdoor Walking Supplies Pet Products | 200 | Yes | Render selector initially missed; PDP text shows price pattern on follow-up product check | 6 | Yes | Yes | No | No | Absent | 0 | Updates main image |
| Portable USB Rechargeable LED Pendant Light High Brightness Waterproof Outdoor Lamp for Camping Fishing Emergency Night Lighting | 200 | Yes | Render selector initially missed | 6 | Yes | Yes | No | No | Absent | 0 | Updates main image |
| SYNOKE Men Rectangular Sports Electronic Watch Waterproof 50M Night Light Large Screen Alarm Clock Trend Retro Style | 200 | Yes | Render selector initially missed | 6 | Yes | Yes | No | No | Absent | 0 | Updates main image |
| 120W Car Air Pump Electric Car Tire Inflatable Pump Portable Rechargeable Air Compressor Digital Auto Tire Inflator Equipment | 200 | Yes | Render selector initially missed | 6 | Yes | Yes | No | No | Absent | 0 | Updates main image |
| Portable Baby Changing Pad Diaper Mat for Newborn Stroller Nappy Bag One-Hand Diaper Changing Pad Babies Accessories | 200 | Yes | Render selector initially missed | 8 | Yes | Yes | No | No | Absent | 0 | Updates main image |
| Cell Phone Holder for Car Phone Holder Magnetic Cell Phone Holder Suction Cup General Smartphone Bracket Automobile Accessories | 200 | Yes | Render selector initially missed | 6 | Yes | Yes | No | No | Absent | 0 | Updates main image |
| -Mini - 7 in 1 Multifunctional LED Desk Lamp with Wireless Charger | 200 | Yes | Render selector initially missed | 6 | Yes | Yes | No | No | Absent | 0 | Updates main image |
| 15PCS Caviar Skin Care Set Face Serum Set Face Moisturizing anti Wrinkle Whitening Beauty Health Korean Facial Skin Care Suit | 200 | Yes | Render selector initially missed | 6 | Yes | Yes | No | No | Absent | 0 | Updates main image |
| K5C plus 140W H7 H11 H4 H1 Canbus Led Bulbs 4300K LED HB3 9005 HB4 9006 K6C Led Double Copper Tube 12V 2PCS | 200 | Yes | Render selector initially missed | 6 | Yes | Yes | No | No | Absent | 0 | Updates main image |
| Night Lights 5.70 in Modern Bedside Table Lamp 3-Level Dimming Battery Operated Night Light | 200 | Yes | Render selector initially missed | 6 | Yes | Yes | No | No | Absent | 0 | Updates main image |

Follow-up rendered text check on the first PDP confirmed the price text is visible as `R 16.20`.

### PDP Regression Notes

The sampled PDPs still render old controlled-pilot/deferred language that conflicts with active checkout/payment readiness:

```text
CONTROLLED PILOT PREVIEW
Controlled pilot view - not a public launch.
Controlled pilot is active. Add to cart is enabled for approved checkout verification.
Invite-only pilot: live titles and layout may render for review. Pricing is not final; this is not a full catalogue launch.
Checkout and accounts remain disabled or deferred unless a later go/no-go enables them.
Availability: Preview catalogue item - not available to buy
```

This is a launch blocker because the same PDPs expose Add to Cart and live prices while also telling customers checkout/payments are disabled or deferred.

## Homepage And Hidden/Deferred Sections

| Check | Result |
| --- | --- |
| Homepage status | `200` |
| Rendered main sections | 11 |
| Broken/missing images | None detected in sampled render |
| Missing-image placeholders | None detected in sampled render |
| Hero/decorative tiles | Acceptable in sampled render |
| Old deferred messages | No visible homepage text matches from the first scripted selector pass, but PDP/footer stale messages remain |

Homepage support links:

| Link | Result |
| --- | --- |
| Shipping policy | `200` |
| Refund policy | `200` |
| FAQ | `200` |
| Contact page | `200` |

## Collections And Navigation

`/collections/all` returned `200` and rendered product links.

Visible collection/navigation results:

| Route | HTTP | Product links detected | Result |
| --- | ---: | ---: | --- |
| `/collections/all` | 200 | 135 | OK |
| `/collections/home-living` | 200 | 9 | OK |
| `/collections/kitchen-storage` | 200 | 3 | OK |
| `/collections/tech-accessories` | 200 | 6 | OK |
| `/collections/office-desk` | 200 | 0 | Empty department |
| `/collections/retro-vault-consoles-classics` | 200 | 0 | Empty department |
| `/collections/games-toys` | 200 | 0 | Empty department |

Broken visible navigation/footer routes:

| Route | HTTP | Issue |
| --- | ---: | --- |
| `/pages/about#about-us` | 404 | Footer company link points to missing page |
| `/pages/about#privacy-policy` | 404 | Footer privacy link points to missing page |
| `/pages/about#terms` | 0 during scripted run after rate limiting | Same missing `/pages/about` base route likely applies |

## Cart And Checkout Flow

Test product selected:

```text
Portable Kinetic Car Air Freshener Solar Powered Double Ring Rotating Air Cleaner Perfume Fragrance Diffuser
```

Cart/checkout result:

| Check | Result |
| --- | --- |
| Add to Cart click attempted | Yes |
| Cart page opened | Browser stayed on `/cart` |
| Cart line item | Blocked |
| Quantity | Blocked |
| Subtotal | Blocked |
| Checkout button | Blocked |
| Checkout entry | Not reached |
| Shipping rates | Not reachable |
| Free shipping threshold | Not safely testable |
| International shipping | Not reachable |

Blocker text:

```text
Your connection needs to be verified before you can proceed
```

This appears to be Shopify storefront verification/rate limiting during scripted cart/checkout checks, not a normal customer-facing cart state from the first page load.

## Payment Visibility

Payment-provider checkout visibility could not be fully verified because scripted cart/checkout entry was blocked before checkout.

| Method | Checkout visibility |
| --- | --- |
| Stitch | Not reachable in checkout |
| Payflex | Not reachable in checkout |
| PayPal | Not reachable in checkout |
| PayFast | Not reachable in checkout |
| Peach | Not reachable in checkout |
| Card | Not reachable in checkout |
| Other | Not reachable in checkout |

Public footer payment badges currently show:

```text
VISA, Mastercard, Instant EFT, Zapper, Mobicred, PayFlex
```

Stitch is not visible in the public footer payment badge list.

No payment authorization was attempted.

## Trust/Legal/Contact

| Surface | HTTP | Support email | Customer-facing phone | Business details |
| --- | ---: | --- | --- | --- |
| Shipping policy | 200 | Not found in page body | No | Yes |
| Refund policy | 200 | Not found in page body | No | Yes |
| Contact information policy | 200 | Yes | No | Yes |
| FAQ | 200 | Not found in page body | No | Yes |
| Contact page | 200 | Not found by scripted exact email check | No phone regex match | Yes |

Regression: live homepage/footer still exposes the old customer-facing personal contact details:

```text
mailto:Fhatuwani.Sikhwari@sikhwarigroup.co.za
tel:+27829974112
```

Expected support email is:

```text
info@sikhwarigroup.co.za
```

This indicates the live theme is not aligned with the 21IA-C phone replacement docs/theme state, or the currently published theme differs from the previously updated theme.

## Mobile QA

Mobile viewport: `390x844`.

| Route | HTTP | Horizontal overflow | Key result |
| --- | ---: | --- | --- |
| `/` | 200 | No | Home loads |
| `/collections/all` | 429 | No | Blocked by Shopify verification/rate limiting |
| `/collections/home-living` | 429 | No | Blocked by Shopify verification/rate limiting |
| PDP test route | 429 | No | Add to Cart not verifiable after block |
| `/cart` | 429 | No | Cart/checkout not verifiable after block |

Mobile pass is therefore incomplete. The one successful mobile page did not show horizontal overflow.

## Regression Classification

### Must Fix Before Launch/Sales

| Issue | Evidence | Likely owner |
| --- | --- | --- |
| Stale controlled-pilot/preview/no-public-launch text remains on live PDPs while prices and Add to Cart are visible | Sampled PDP text includes `CONTROLLED PILOT PREVIEW`, `not a public launch`, `Pricing is not final`, and `checkout/payments stay disabled` | Theme/code issue |
| Old customer-facing phone link remains live | Homepage/footer links include `tel:+27829974112` | Theme/code issue / live theme drift |
| Footer still uses non-target support email | Homepage/footer includes `mailto:Fhatuwani.Sikhwari@sikhwarigroup.co.za`; expected `info@sikhwarigroup.co.za` | Theme/code issue / live theme drift |
| Broken company/legal footer links | `/pages/about#about-us` and `/pages/about#privacy-policy` return `404` | Shopify Admin/page issue or theme navigation issue |
| Cart/checkout cannot be verified by automation due Shopify verification gate | `/cart` showed `Your connection needs to be verified before you can proceed` during scripted flow | Cache/render/bot-protection issue; manual browser verification needed |
| Stitch active checkout visibility not verified | Checkout blocked before payment step | Payment provider issue / checkout access verification |

### Should Fix Soon

| Issue | Evidence | Likely owner |
| --- | --- | --- |
| Empty visible department collection routes remain in navigation | Office & Desk, Retro Vault, Games & Toys return `200` but expose 0 product links | Shopify Admin/product/collection issue |
| Stitch not visible in footer payment badges | Footer badges list VISA, Mastercard, Instant EFT, Zapper, Mobicred, PayFlex only | Theme/content issue |
| Contact/support consistency incomplete across pages | Only contact-information policy matched `info@sikhwarigroup.co.za`; homepage/footer still uses old address | Theme/content issue |
| Mobile QA incomplete after verification block | Mobile collection/PDP/cart routes returned `429` after scripted sweep | Cache/render/bot-protection issue |

### Can Defer

| Issue | Evidence | Likely owner |
| --- | --- | --- |
| Product titles are long/import-like on many PDPs | AutoDS titles remain verbose in sampled PDP list | Product/data issue |
| Some sampled products have no variant selector despite multiple variants in product JSON | Selector count was low/zero in scripted sample; requires manual spot-check after stale pilot copy is fixed | Theme/code issue or product option render issue |

## 21IA-D Verdict

**Fail / blocked for launch-readiness.**

The refreshed catalogue is publicly present and available at the product-data level: 45/45 products have available variants, sampled PDPs mostly return `200`, stale `Price to be confirmed` and `pdp-catalogue-lock.js` blockers are absent, Add to Cart is visible, and gallery arrows update the main image.

However, launch/sales readiness is blocked by stale live controlled-pilot copy on PDPs, live customer-facing old phone/support contact details, broken `/pages/about` footer links, empty visible department collections, and inability to complete cart/checkout/payment verification because Shopify verification/rate limiting interrupted the scripted flow.

## Recommended Next Slice

Slice 21IA-E-WIN:

1. Align the currently published live theme `Horizon #158396285153` with the latest intended post-21IA-C support/contact and commerce-copy state.
2. Remove or replace stale controlled-pilot PDP and footer language now that checkout/payment is expected to be active.
3. Fix `/pages/about` footer links or create/publish the expected About page.
4. Reconcile visible department collections against the AutoDS catalogue.
5. Rerun cart/checkout/payment QA from a manual unlocked browser session and record Stitch visibility before authorization.

