## Slice 21IA-K - Footer launch links and inactive sections cleanup

Date: 2026-06-04

### Scope
- Clean the customer-facing footer for launch by removing inactive or confusing footer/account links.
- Preserve working contact, policy, FAQ, wishlist, cart, Add to Cart, and checkout flow surfaces.

### Pre-check
- `git status --short --branch` showed only untracked `tools/catalogue/` before this slice.
- `shopify theme list --store mzansiselect.myshopify.com` confirmed live theme `Horizon` `#158396285153`.

### Files inspected
- `sections/site-footer.liquid`
- `sections/primary-navigation.liquid`
- `sections/site-header.liquid`
- `templates/index.json`

Repo note:
- repo does not carry `config/settings_data.json`

### Files changed
- `sections/site-footer.liquid`
- `sections/primary-navigation.liquid`
- `sections/site-header.liquid`
- `docs/qa/slice-21ia-k-footer-launch-cleanup.md`
- `docs/project-control.md`

### Footer cleanup applied

Removed from `sections/site-footer.liquid`:
- standalone Help email list item `info@sikhwarigroup.co.za`
- deferred `Track Order`
- desktop footer `Account` column
- mobile footer `Account` accordion section
- deferred `Careers`
- deferred `Affiliates`

Updated surrounding surfaces:
- kept `Contact Us` in Help, linking to `/pages/contact#contact`
- kept `Shipping`, `Returns`, `FAQ`
- kept `Privacy Policy` and `Contact Information`
- kept `Business Details`

Inactive account launch cleanup outside the footer:
- `sections/primary-navigation.liquid`
  - removed inactive mobile bottom-bar `Account`
  - removed inactive mobile drawer account copy/button
  - kept active `View cart`
- `sections/site-header.liquid`
  - removed inactive desktop header `Account` control

### Post-edit source search result

Confirmed removed from edited launch-footer/navigation files:
- `Track Order`
- `Careers`
- `Affiliates`
- inactive footer/account entries
- loose footer Help email list item

Email remained only where appropriate in source:
- footer brand support paragraph
- trust/support copy
- contact/policy/product support sections

### Files pushed
- `sections/site-footer.liquid`
- `sections/primary-navigation.liquid`
- `sections/site-header.liquid`

### Exact push command
```bash
shopify theme push --store mzansiselect.myshopify.com --theme 158396285153 --allow-live --only sections/site-footer.liquid --only sections/primary-navigation.liquid --only sections/site-header.liquid
```

### Live source-of-truth check
- Pulled the pushed live theme files back down from theme `#158396285153`.
- Pulled files matched the local edited source exactly for:
  - `sections/site-footer.liquid`
  - `sections/primary-navigation.liquid`
  - `sections/site-header.liquid`

### Route verification

Checked:
- `/`
- `/collections/all`
- `/pages/contact`
- `/pages/faq`
- `/policies/shipping-policy`
- `/policies/refund-policy`
- `/policies/contact-information`
- sampled PDP: `/products/2-inch-wireless-two-way-intercom-baby-video-monitor`
- `/cart`

HTTP result:
- all checked routes returned `200`

### Live footer verification

Route that reflected the cleaned footer immediately:
- `/collections/all`
  - footer Help no longer showed standalone email item
  - `Track Order` was absent
  - `Account` footer section was absent
  - `Careers` and `Affiliates` were absent
  - `Contact Us` remained visible
  - `Privacy Policy` and `Contact Information` remained visible

Routes that still served the old footer bundle during scripted verification:
- `/`
- `/cart`
- `/pages/contact`
- `/pages/faq`
- `/policies/shipping-policy`
- `/policies/refund-policy`
- `/policies/contact-information`
- sampled PDP

On those routes, fetched public HTML still showed:
- standalone Help email item
- `Track Order`
- footer `Account` section
- `Careers`
- `Affiliates`

### 404 and contact checks
- No 404s found on the requested verification routes themselves.
- `Contact Us` remained present and linked to `/pages/contact#contact`.
- Old phone `+27 82 997 4112` was not found in this verification sweep.
- Old personal email `Fhatuwani.Sikhwari@sikhwarigroup.co.za` was not found in this verification sweep.

### Add to Cart and cart regression
- Add to Cart regression result: PASS
  - sampled PDP still rendered `Add to Cart`
- Cart result: PASS
  - `/cart` opened successfully

### Payment/provider confirmation
- Unchanged: yes
- No changes were made to Stitch, Payflex, PayPal, PayFast, Peach, products, prices, inventory, collections, shipping rates, apps, or domain.
- No payment details were entered and no payment was authorised.

### Remaining blockers
- Public storefront serving remains route-inconsistent.
- Live theme source and pulled live theme files are correct, but several public routes still served the older footer/header/trust bundle during scripted verification.
- Preview/pilot wording also still appeared on some routes during the same fetch sweep, even though Product Owner’s incognito check reported it absent.

### Verdict
- PARTIAL PASS
- The approved footer cleanup was implemented and pushed successfully, and the live theme source now contains the intended launch-safe footer/navigation state.
- Public storefront output still varies by route, so full rendered verification was only confirmed on `/collections/all` during this slice.
