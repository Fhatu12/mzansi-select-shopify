# Slice 21BB — restricted-preview reviewer pack

**Document type:** Internal reviewer pack  
**Prepared:** 2026-05-15  
**Owner:** Product / UX review support  
**Scope:** Restricted internal preview guidance only. No Shopify Admin mutation, no theme edit, no publish, no product visibility/publication change, no checkout/payment/customer-order enablement, no product import/sync, and no app install.

**Accepted upstream state:** Slice **21BA** accepted **PASS WITH NOTES** in commit `fd8c2626ba30c4974e49fbf65a70a8fef2326a0d`.

## 1. Purpose of this restricted preview

This pack helps internal reviewers inspect the current controlled-pilot CJ three-product preview in a safe, consistent way.

The purpose is to gather useful feedback on:

- whether each product page is understandable
- whether the preview-only / non-purchasable posture is clear
- whether the wording feels honest and not commercially misleading
- whether the pages are readable on desktop and mobile

This is a **review exercise**, not a buying journey.

## 2. This is not a public launch

This preview is **not** a public launch.

- access remains restricted
- anonymous storefront access remains password-gated
- the preview exists for internal review only
- the current controlled-pilot collection route is not a general success surface

Reviewers should treat this as a bounded internal preview, not as a live customer-ready release.

## 3. These products are not available for purchase

The current preview posture is intentionally **non-purchasable**.

Reviewers should expect:

- no Add to Cart
- no Buy Now
- no checkout/payment path
- no real customer-order flow

If anything on the surface suggests otherwise, that feedback is important and should be recorded.

## 4. Exact products to review

Review only these exact three product pages:

1. `beverage-bottle-oil-bottle-handle-holder`  
   **Beverage & Oil Bottle Handle Holder**
2. `usb-bag-sealer`  
   **USB Bag Sealer**
3. `foldable-magnetic-phone-holder-desktop-tablet-stand`  
   **Foldable Magnetic Phone Holder & Desktop Tablet Stand**

No broader catalogue review is requested in this pack.

## 5. What reviewers should check

For each of the three product pages, reviewers should check the following:

### 5.1 Access and page load

- does the page open successfully after the approved preview unlock step?
- does the page feel stable and readable?

### 5.2 Product clarity

- is the product purpose understandable at a glance?
- is the wording easy to follow?
- does anything feel vague, confusing, or awkward?

### 5.3 Preview-only / non-purchasable clarity

- is it clear that this is a preview-only surface?
- is it clear that the product is **not** currently available for purchase?
- is the absence of commerce actions understandable rather than confusing?

### 5.4 Honesty of wording

- does the page avoid implying final supplier verification?
- does the page avoid implying final pricing?
- does the page avoid implying final delivery certainty?
- does the page avoid implying final stock certainty?

### 5.5 Checkout expectation

- would a normal reviewer understand that checkout/payment is not part of this preview?
- does anything suggest that ordering should be possible when it is not?

### 5.6 Desktop readability

- is the page easy to read and scan on desktop?
- does the layout feel coherent?

### 5.7 Mobile readability

- is the page easy to read and scan on mobile?
- does the content still feel clear without media?

## 6. What reviewers must not do

Reviewers must **not**:

- attempt checkout or payment
- treat the products as orderable
- share preview access publicly
- share the storefront password
- change Shopify Admin settings or data
- install apps
- import or sync products
- treat missing media as an error unless it causes misleading understanding

## 7. Feedback questions for reviewers

Reviewers should answer, as simply and honestly as possible:

1. Is the product clear?
2. Is the preview-only status clear?
3. Is pricing uncertainty clear?
4. Is delivery uncertainty clear?
5. Would this product fit the Mzansi Select pilot audience?
6. Is there any wording that feels misleading, too final, or too vague?
7. Is the page easier to understand on desktop, mobile, or both?

## 8. Internal reviewer notes

Use this section for lightweight internal notes:

- Which product page was reviewed?
- What felt clear?
- What felt unclear?
- Any wording that should be softened, clarified, or removed?
- Any mobile readability concern?
- Any desktop readability concern?
- Any mistaken expectation that a reviewer might be able to buy the product?

## 9. Known current limitations

Reviewers should expect the following current limitations:

- the preview is password-gated
- product media is intentionally absent
- final pricing is not approved
- final delivery wording is not approved
- supplier verification is not approved
- `/collections/controlled-pilot` may remain informational and **404**-routed after unlock

These are known limitations, not surprises.

## 10. Source evidence summary

This reviewer pack is grounded in the accepted evidence from **21AZ** and **21BA**:

### 10.1 From 21AZ — anonymous visibility

- anonymous storefront access remains password-gated
- direct live PDP routes do not expose product content anonymously
- direct preview PDP routes do not expose product content anonymously
- low-noise search and collection route checks also terminated at the password gate

### 10.2 From 21BA — restricted post-unlock visibility

- the three approved CJ PDP preview routes are reviewable after successful manual unlock
- desktop `1366x768` and mobile `390x844` both passed
- expected CJ PDP content is visible
- Gadgetgyz is absent
- Add to Cart / Buy Now is absent
- checkout/customer signals are absent on the three PDPs
- `media=no`
- only generic placeholder visuals are present
- `/collections/controlled-pilot` remains informational/non-blocking if still **404**-routed

## 11. Sensitivity note

Do **not** include or share:

- passwords
- secrets
- tokens
- cookies
- customer data
- order data
- payment data
- supplier credentials
- raw auth/session files

Review notes should stay sanitized and focused on wording, clarity, and reviewer experience.

## 12. Recommended next owner

**Product Owner**

The next clean decision is whether this reviewer pack should now be used for a bounded internal review round, or whether the current restricted-preview posture should simply remain documented without widening internal circulation.
