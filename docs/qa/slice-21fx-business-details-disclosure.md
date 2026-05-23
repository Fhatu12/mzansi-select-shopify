# Slice 21FX Business Details Disclosure (South Africa)

- **Date:** 2026-05-23
- **Verdict:** **BLOCKED**
- **Scope:** Extract public company details from approved certificates folder and add storefront disclosure
- **Live theme:** `151207542967` / `Mzansi Select MVP Preview`

## Pre-check

- Repo: `/home/fhatu/dev/mzansi-select-shopify`
- Branch: `master`
- `artifacts/` ignore rule confirmed
- `tools/catalogue/` remained untracked and uncommitted
- No checkout/payment enablement, product mutation, import/sync, `Supplier verified`, media upload, theme publish, or full theme sync was performed or planned for this slice

## Source Folder Used

- `/mnt/d/PTY LTD/Certificates`

## Candidate Filenames Inspected (filename/size/modified time only)

- `BEE.pdf` (256,901 bytes; 2026-02-26 10:49)
- `COR14.1.pdf` (62,702 bytes; 2026-02-26 11:02)
- `COR14.1A.pdf` (339,310 bytes; 2026-02-26 11:02)
- `COR14.3.pdf` (167,404 bytes; 2026-02-26 11:02)
- `COR15.1A.pdf` (355,851 bytes; 2026-02-26 11:02)
- `WELCOME.pdf` (98,338 bytes; 2026-02-26 11:02)

## Extraction Attempt

- Text extraction utilities were not available in this environment:
  - `pdftotext`: not available
  - `pdfinfo`: not available
  - `qpdf`, `mutool`, `gs`, `pdftk`: not available
- A conservative fallback (`strings`) did not produce readable text for these PDFs, indicating the content is likely compressed and/or image-based.
- OCR was not attempted in this slice to avoid repeated OCR and unintended capture of private certificate metadata.

## Required Public Details (Blocked)

The documents could not be safely parsed here, so the following fields are **missing/unconfirmed**:

- Full legal company name: **MISSING**
- Company registration number: **MISSING**
- Director name(s) (if present): **MISSING**
- Registered/physical operating address (if present): **MISSING**

Notes:
- Trading/store name is known: `Mzansi Select` (approved)
- Support email/phone was not pulled from certificates and is not introduced in this slice

## Theme / Storefront Changes

- **None** (stop condition reached; no guessing)
- No theme push performed

## Safety Confirmation

- No certificate files were copied into the repo
- No certificate contents were committed
- No personal identifiers, signing marks, private addresses, or certificate metadata were added to the project
- Commerce posture unchanged (catalogue-only)

## Next Owner / Unblock Options

To complete 21FX, one of the following is needed:

1. Provide an explicit approved text snippet (legal name, registration number, directors if applicable, registered address) in the slice approval thread so it can be added without parsing certificates.
2. Install/approve a local text extraction toolchain for PDFs (for example `pdftotext` or a trusted PDF parser) and rerun extraction, still recording only the required public fields.
