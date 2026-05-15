# Slice 21AP — CJ imported-supplier publish-for-preview technical plan

**Document type:** Senior Full-Stack Software Architect planning note
**Prepared:** 2026-05-15
**Owner:** Senior Full-Stack Software Architect
**Scope:** Documentation only; no Shopify Admin, storefront, supplier, media, checkout, payment, customer-access, app-install, import, or sync action executed in this slice.
**Upstream decision:** Slice **21AO** — **PASS WITH NOTES**; ready for publish-for-preview **planning only**.

## 1. Architect verdict

**PASS WITH NOTES**

The safest future path is a **visibility-only preview widening** for the exact three accepted CJ controlled-pilot rows, behind the existing **password-gated / restricted preview** posture, with the products remaining **non-purchasable** and with **no media exposure** unless separately approved first. This slice records the future path; it does **not** authorize execution.

## 2. Recommended future publish-for-preview approach

If a later Product Owner-approved execution slice is opened, use the narrowest possible approach:

1. Keep the active set bounded to the existing **3** CJ controlled-pilot rows only:
   - `CJYD230000901AZ` — Beverage & Oil Bottle Holder
   - `CJYD211196101AZ` — USB Bag Sealer
   - `CJYD245830501AZ` — Foldable Magnetic Phone Holder & Desktop Tablet Stand
2. Preserve the current **restricted/password-gated preview** posture; do **not** widen customer access.
3. Expose only the approved preview routes needed for review, preferably through the unpublished preview-theme pattern already used in prior QA, not a live-theme publish.
4. Keep every product **non-purchasable** unless a later Product Owner **customer-access** pass explicitly approves otherwise.
5. Keep exact imported-supplier, controlled-pilot, refund/cancellation, and claim-control wording from the accepted CJ field specification; do not introduce new commercial promises.
6. Default to **no images/media** until media/source-use approval is separately complete.

This is intentionally a small lantern, not a floodlight: enough visibility for review, no extra commerce surface.

## 3. Exact future execution boundaries

### In scope for a later execution slice only

- Widen preview visibility for the exact **3** CJ rows above, and no others.
- Keep the **`controlled-pilot`** collection as the only intended collection route for this imported-supplier preview set.
- Keep status/visibility assumptions explicit:
  - current baseline before execution: **DRAFT / unpublished / restricted / non-purchasable**
  - future preview target, if approved: **preview-visible only within restricted access**, still **non-purchasable**
- Verify pre- and post-change membership using **`products.edges`** plus **`inCollection`** where available.
- Run QA immediately after any implementation.

### Out of scope now and for any future execution slice unless separately approved

- Publishing for public/customer access
- Removing password or restricted-preview controls
- Making products purchasable
- Checkout/payment enablement
- Public launch
- `Supplier verified`
- Final pricing, final delivery promises, final stock, warranty, or product-claim approval
- Media upload or image exposure without approved source-use review
- CJ app install, Shopify authorization, import, sync, or supplier-account integration
- Any row outside the **3** accepted CJ members

## 4. Proposed future Admin/storefront actions — do not execute now

### Future Admin actions, if separately approved later

1. Capture pre-change evidence for all three products and the **`controlled-pilot`** collection.
2. Confirm all three rows still match the accepted field spec and remain the only intended members.
3. If the future visibility model requires a product-status or publication change, apply it only to the exact three rows and only to the approved preview channel/route.
4. Do **not** alter prices, claims, tags, variants, inventory, checkout/payment settings, or media beyond the approved visibility delta.
5. Preserve a rollback-ready record of the exact prior status/publication state before any change.

### Future storefront actions, if separately approved later

1. Keep review behind the password/restricted-preview gate.
2. Surface only the approved **`controlled-pilot`** collection/PDP routes needed for review.
3. Keep disabled/non-purchase affordances honest; no add-to-cart, checkout, or payment implication unless separately approved later.
4. Preserve imported-route disclosure on card/PDP surfaces wherever the product is visible.
5. Avoid live-theme publication; prefer the established unpublished preview-theme workflow until a later Product Owner decision says otherwise.

## 5. Safety controls

- **Boundary control:** exact **3** CJ rows only; no reserve/deferred rows.
- **Visibility control:** password-gated or otherwise restricted preview remains mandatory.
- **Commerce control:** non-purchasable posture remains mandatory until later customer-access approval.
- **Route control:** **`controlled-pilot`** remains the bounded preview collection route; no broadened merchandising routes by default.
- **Membership control:** validate with **`products.edges`** and **`inCollection`**; do not rely on aggregate count alone.
- **Wording control:** no `Supplier verified`, launch-ready, best-seller, sale/deal, fast/local/guaranteed-delivery, final-price, final-stock, warranty, or public-launch implication.
- **Claims control:** product-specific blocked-claim lists remain authoritative, especially for **USB Bag Sealer**.
- **Media control:** no image/media exposure before Product Owner-approved source-use review.
- **Integration control:** no CJ app install/import/sync without separate approval.

## 6. Required wording/content restrictions

- Keep the accepted long-delivery imported-supplier wording clear on every affected preview surface.
- Keep controlled-pilot framing clear; these are not launch-ready catalogue entries.
- Do **not** introduce `Supplier verified` wording anywhere.
- Do **not** imply final price, final delivery, final stock, warranty, product-claim approval, or public launch.
- **USB Bag Sealer** must continue to avoid unsupported airtight/vacuum/freshness/heat-safe/burn-safe/industrial/guaranteed-seal language.
- Customer-facing copy must not mention CJ references or supplier-account details.

## 7. Required media/source-use checks before any image exposure

Before any future image becomes visible:

1. Confirm the source of every asset.
2. Confirm reuse rights / supplier permission / Product Owner acceptance.
3. Confirm the image does not introduce unsupported claims, certification cues, safety implications, accessories, colours, or bundle contents not approved in text.
4. Confirm no supplier-account screenshots, private evidence, watermarks, or embedded sensitive data are used.
5. Re-run Product Owner content review before exposure.

Until all five pass, the correct preview posture is **no media**.

## 8. QA validation required after any future implementation

A future implementation is incomplete until QA confirms:

1. **Membership:** **`controlled-pilot`** contains exactly the three CJ members using **`products.edges`** plus **`inCollection`** where available.
2. **Visibility:** only the intended preview routes are exposed; password/restricted-preview access remains intact.
3. **Commerce safety:** products remain non-purchasable; no active add-to-cart, checkout, payment, or customer-account implication appears.
4. **Content:** exact imported-route/controlled-pilot wording remains present; prohibited claims remain absent; **USB Bag Sealer** restrictions remain intact.
5. **Media:** no images appear unless the source-use gate was approved first.
6. **Cross-surface review:** desktop + mobile collection cards and PDPs are checked after the change.
7. **Removed-row absence:** older Gadgetgyz-era rows remain outside **`controlled-pilot`**.
8. **Evidence hygiene:** only sanitized results are committed; private QA/admin evidence stays local and uncommitted.

## 9. Security / Compliance re-review gates

- **Before any customer access:** mandatory Security / Compliance re-review after QA passes.
- **Before any checkout/payment widening:** separate re-review; this plan grants no authority.
- **Before any password-gate removal or public launch:** separate re-review; this plan grants no authority.
- **Before any CJ app install/import/sync:** separate permission/privacy review; Slice **21Y** posture remains binding.
- **Before any media exposure if source-use posture changes:** Product Owner review first, then Security / Compliance re-check if customer-facing risk broadens.

## 10. Rollback / reversal plan for any future visibility-widening action

If a future preview widening must be reversed:

1. Revert the three products to **DRAFT / unpublished / restricted** state captured in pre-change evidence.
2. Remove any newly granted preview publication/route exposure while preserving the approved row data.
3. Re-confirm **`controlled-pilot`** membership remains exactly the three CJ rows and no extra rows were added.
4. Remove any exposed media or copy that failed review.
5. Re-run the same QA checks used after implementation.
6. Record a sanitized rollback note; do **not** commit Admin payloads, screenshots with sensitive data, credentials, cookies, or browser state.
7. Escalate to Product Owner + Security / Compliance before any renewed widening attempt.

## 11. Remaining blockers

- Publish-for-preview **execution** approval
- Customer access
- Checkout/payment
- Public launch
- `Supplier verified`
- Final pricing / delivery / stock / warranty / product claims
- Media/source-use approval
- Any CJ app install/import/sync approval
- Any move beyond the exact 3-row controlled-pilot boundary

## 12. Recommended next owner

**Product Owner** — decide whether to open a separate bounded **execution** slice from this plan, or hold until the still-open commercial/media gates are materially stronger.

## 13. Documentation status

- **`docs/project-control.md`:** updated for Slice **21AP**.
- **Planning/spec doc:** created — this file.
- **LLD:** **unchanged** — this pass documents a possible future visibility operation but does not newly approve or change app/import/sync/storefront/checkout/payment/customer-access behaviour.

## 14. Knowledge capture

- **Reusable knowledge discovered:** Safe preview widening can be treated as a visibility-control problem, not a launch problem, when exact membership, restricted access, non-purchasability, claim discipline, and rollback are all explicit.
- **Asset created/updated:** this planning note; `docs/project-control.md` tracker sync.
- **Suggested repository location:** `docs/pilot/` for future bounded preview-execution plans that sit between readiness review and implementation.
- **Sensitive material excluded:** credentials, tokens, cookies, browser state, Admin payloads, supplier-account data, customer/order/payment data, and local artifact contents.
- **Follow-up needed:** Product Owner decision on whether to open a future execution slice; separate media/source-use decision before any image exposure; QA + Security / Compliance rerun before any customer-access widening.

## 15. Confirmation no out-of-scope action occurred

Confirmed for Slice **21AP**: no publish-for-preview execution, no Shopify Admin mutation, no product publish, no purchasability enablement, no media upload, no checkout/payment enablement, no customer-access enablement, no `Supplier verified` approval, no final commercial approval, no CJ app install, no import/sync, and no sensitive material committed.
