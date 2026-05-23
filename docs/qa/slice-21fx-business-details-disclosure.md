# Slice 21FX Business Details Disclosure (South Africa)

- **Date:** 2026-05-23
- **Verdict:** **PASS WITH NOTES**
- **Scope:** Extract public company details from approved certificates folder and add storefront disclosure
- **Live theme:** `151207542967` / `Mzansi Select MVP Preview`
- **Run context:** retry after initial extraction blocker

## Pre-check

- Repo: `/home/fhatu/dev/mzansi-select-shopify`
- Branch: `master`
- `artifacts/` ignore rule confirmed
- `tools/catalogue/` remained untracked and uncommitted
- No checkout/payment enablement, product mutation, import/sync, `Supplier verified`, media upload, theme publish, or full theme sync was performed

## Source Folder Used

- `/mnt/d/PTY LTD/Certificates`

## Candidate Filenames Inspected (filename/size/modified time only)

- `BEE.pdf` (256,901 bytes; 2026-02-26 10:49)
- `COR14.1.pdf` (62,702 bytes; 2026-02-26 11:02)
- `COR14.1A.pdf` (339,310 bytes; 2026-02-26 11:02)
- `COR14.3.pdf` (167,404 bytes; 2026-02-26 11:02)
- `COR15.1A.pdf` (355,851 bytes; 2026-02-26 11:02)
- `WELCOME.pdf` (98,338 bytes; 2026-02-26 11:02)

## Extraction Method

- Native PDF tools were unavailable in this environment.
- A temporary Node-based parser (`pdfjs-dist`) was installed outside the repo (`/tmp/...`) and used only for text extraction.
- No certificate files were copied into the repository.
- Only required public disclosure fields were recorded.

## Public Details Extracted

- Trading/store name: `Mzansi Select`
- Full legal company name: `SIKHWARI GROUP (PTY) LTD`
- Registration number: `2026/166219/07`
- Director name (clearly present): `Fhatuwani Sikhwari`
- Registered address (clearly present): `Unit 93 Amber Hill, 26 Lemonwood St, Centurion, Gauteng, 0144`
- Support contact: existing storefront `Contact Us` route (no support email/phone added)

## Missing / Uncertain Fields

- Additional director names: not added because only one director was clearly surfaced in extracted records.
- Dedicated support email/phone: not added because no already-approved values were present in project sources.

## Storefront Implementation

- Added new section: `sections/business-details-foundation.liquid`
- Added template: `templates/page.business-details.json` (for future dedicated page use)
- Added disclosure surface to the existing contact route by updating `templates/page.contact.json`
- Added footer link label **Business Details** (desktop and mobile company lists) pointing to `/pages/contact#business-details`
- Added compact footer legal line with legal entity and registration number

## Route / Link Result

- Business Details link: `/pages/contact#business-details`
- Existing contact route remains the primary disclosure surface in this slice
- Dedicated `/pages/business-details` creation through Admin API is blocked by current API scope (`pages` access denied), so this slice uses the existing page route safely

## Files Changed

- `sections/business-details-foundation.liquid`
- `templates/page.contact.json`
- `templates/page.business-details.json`
- `sections/site-footer.liquid`
- `docs/qa/slice-21fx-business-details-disclosure.md`
- `docs/project-control.md`

## Files Pushed To Live Theme

- `sections/business-details-foundation.liquid`
- `templates/page.contact.json`
- `templates/page.business-details.json`
- `sections/site-footer.liquid`

Push command:

```bash
shopify theme push --store dropshippoc.myshopify.com --theme 151207542967 --allow-live --nodelete --json --no-color --only sections/business-details-foundation.liquid --only templates/page.contact.json --only templates/page.business-details.json --only sections/site-footer.liquid
```

## Safety Result

- No private certificate artifacts were copied into repo
- No personal identifiers beyond director name were added
- No product/admin product changes
- No checkout/payment/customer-flow enablement
- No `Supplier verified` claim added
- Newsletter/email capture remains disabled from prior slice
- No Add to Cart, cart/add, quick-add, or dynamic checkout behaviour was introduced by this slice

## Validation Notes

- `shopify theme check --fail-level error` reran and remained blocked by pre-existing repo-wide issues (`305` offences, `264` errors, `41` warnings)
- Storefront lock still blocks unauthenticated public route rendering checks in this environment

## Remaining Go-Live Blockers

- Storefront access lock still blocks full public route validation in this environment.
- If a separate dedicated `/pages/business-details` page is mandatory, an auth with `pages` write scope (or manual Admin page creation) is still needed.
