# Slice 21BD — restricted-preview review session plan

**Document type:** Internal review-session plan  
**Prepared:** 2026-05-15  
**Owner:** Product / UX review support  
**Scope:** Docs-only session-planning note for a small restricted-preview review pass. No Shopify Admin mutation, no theme edit, no publish, no product visibility/publication change, no checkout/payment/customer-order enablement, no product import/sync, and no app install.

**Accepted upstream state:** Slice **21BC** accepted **PASS WITH NOTES** in commit `5dec3fce7af9d2e6216f5e8ff4436af2e0b75610`.

## 1. Review objective

The purpose of this review session is to gather small-scale internal feedback on:

- product clarity
- trust and honesty of wording
- fit for the Mzansi Select pilot audience
- mobile readability
- desktop readability

This session is **not** intended to validate:

- purchasing behaviour
- checkout/payment
- fulfilment readiness
- supplier readiness
- public launch readiness

## 2. Suggested reviewer profile

Use **internal stakeholders only**.

Recommended reviewer types:

- Product Owner
- product or merchandising reviewer
- UX/content reviewer
- internal operations/stakeholder reviewer with no Admin-change mandate

Not in scope:

- public/customer distribution
- supplier access
- customer access

## 3. Review boundary

The review must stay inside this exact boundary:

- exact three products only:
  - `beverage-bottle-oil-bottle-handle-holder`
  - `usb-bag-sealer`
  - `foldable-magnetic-phone-holder-desktop-tablet-stand`
- post-unlock restricted preview only
- no Shopify Admin changes
- no checkout/payment/order testing
- no product mutation
- no app install/import/sync

## 4. Review materials

Use only these materials:

1. **21BB reviewer pack**  
   `docs/pilot/slice-21bb-restricted-preview-reviewer-pack.md`
2. **21BC feedback capture template**  
   `docs/pilot/slice-21bc-restricted-preview-feedback-capture.md`
3. **21BA post-unlock visibility note**  
   `docs/pilot/slice-21ba-authenticated-post-unlock-visibility-note.md`
4. **21AZ anonymous gate evidence**  
   `docs/pilot/slice-21az-controlled-pilot-visibility-url-validation.md`

These are sufficient for a bounded internal review round.

## 5. Review flow

### Step 1 — Prepare the session

- confirm reviewers are internal only
- confirm reviewers understand this is not a public launch
- share the reviewer pack and feedback template

### Step 2 — Unlock the preview manually

- use the approved restricted preview access path
- do not record or circulate passwords, cookies, tokens, or session material

### Step 3 — Open the three approved PDPs

Review only:

- `/products/beverage-bottle-oil-bottle-handle-holder?preview_theme_id=151207542967`
- `/products/usb-bag-sealer?preview_theme_id=151207542967`
- `/products/foldable-magnetic-phone-holder-desktop-tablet-stand?preview_theme_id=151207542967`

### Step 4 — Inspect on mobile and/or desktop

Reviewers should inspect on:

- mobile
- desktop
- or both, if practical

### Step 5 — Complete the feedback template

- capture observations using the **21BC** template
- keep notes factual, small, and sanitized

### Step 6 — Avoid all no-go actions

- do not attempt checkout or payment
- do not treat products as orderable
- do not share preview access publicly
- do not change Shopify Admin
- do not install apps or import/sync products

## 6. Success signals

The review round is useful if it shows that:

- preview-only status is understood
- non-purchasable posture is understood
- pricing uncertainty is understood
- delivery uncertainty is understood
- product wording does not feel misleading
- at least one product receives credible pilot-fit feedback

## 7. Stop conditions

Pause the review session and escalate if any of the following occurs:

- the reviewer cannot unlock the preview safely
- the product appears purchasable
- a checkout/payment/customer route appears
- media appears unexpectedly
- supplier-verification or final-claim wording appears unexpectedly
- the reviewer reports confusion that creates a trust risk

## 8. Feedback triage approach

Classify feedback into one of the following groups:

### 8.1 Wording issue

- wording is confusing
- wording is too vague
- wording feels too final

### 8.2 Product-fit issue

- reviewer does not see a strong fit for the Mzansi Select pilot audience
- reviewer sees a clearer fit in one product than another

### 8.3 Trust issue

- reviewer feels misled
- reviewer expects commerce or certainty where none should exist

### 8.4 Evidence gap

- feedback cannot be resolved without better supplier, pricing, delivery, or product evidence

### 8.5 No action

- observation is valid but does not require a change right now

## 9. Product Owner decision options after review

After the review round, the Product Owner may choose to:

1. keep the preview as-is
2. request wording or light design improvements
3. request a supplier / pricing / delivery evidence pass
4. request Security / Compliance re-review
5. request a tightly bounded Admin/write proposal
6. stop or defer the pilot

## 10. Sensitivity reminder

Do **not** include or circulate:

- passwords
- secrets
- tokens
- cookies
- customer data
- order data
- payment data
- supplier credentials
- raw auth/session files

## 11. Product signals to capture during the session

Reviewers should keep their observations anchored to the currently accepted signals:

- the page opens after unlock
- expected product content is visible
- preview-only / non-purchasable wording is understandable
- no Add to Cart / Buy Now is present
- no checkout/customer path appears on the approved PDPs
- no product media is present
- only generic placeholder visuals appear
- wording does not imply final supplier verification, final pricing, or final delivery certainty

## 12. Recommended next owner

**Product Owner**

The next clean move is to decide whether to run a bounded internal review session using **21BB** + **21BC** + this plan, or to hold the current restricted-preview posture without opening that feedback loop yet.
