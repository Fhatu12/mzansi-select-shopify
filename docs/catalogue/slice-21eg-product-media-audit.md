# Slice 21EG — product catalogue and media audit (read-only)

**Document type:** Read-only catalogue / media audit  
**Prepared:** 2026-05-21  
**Owner:** Product Manager  
**Slice:** **21EG**  
**Store:** `dropshippoc.myshopify.com`  
**Preview theme:** `151207542967` (restricted preview — **21DF** / **21EE**)

**Read-first:** `docs/project-control.md`; `docs/suppliers/slice-21dl-current-imported-product-audit.md`; `docs/devops/slice-21eb-four-local-admin-execution.md`; `docs/qa/slice-21ec-four-local-pdp-validation.md`; `docs/qa/slice-21ee-dw-hl-02-pdp-validation.md`

**Method:** Shopify CLI **`shopify store execute -j`** — read-only Admin GraphQL (`products` connection, paginated). **No** mutations, **no** media upload, **no** publication changes.

**Raw evidence (local; not committed):** `artifacts/catalogue/slice-21eg/` — `products-page*.json`, `products-audit.json`, `products-audit.csv`, `audit-summary.json`

**Capture note:** **21DL** recorded **40** products; this read found **43** (**+3** net-new local preview rows and/or catalogue drift).

---

## 1. Executive verdict

**PASS WITH NOTES**

The Product Owner observation is **confirmed**: **28** **ACTIVE** products are visible in Admin; **most** of those (**~24**) carry **one or more Shopify-hosted product images** that look like **imported/demo catalogue** assets — **not** programme-approved supplier media. **Fifteen** products have **0** Admin media (programme preview rows + drafts); on the **preview theme** those PDPs use **theme placeholder** visuals (**21EC** / **21EE** — **no** supplier photos).

**No** Admin/write or media enablement is implied by this audit.

| Finding | Detail |
| --- | --- |
| **Total products** | **43** |
| **ACTIVE (matches “~28” PO view)** | **28** |
| **With Admin media (≥1 image)** | **28** — predominantly **legacy/demo** handles |
| **No Admin media** | **15** — includes **accepted four** local-first + **3** **CJ** + **3** **13I** + **4** **Gadgetgyz** drafts + misc |
| **Accepted four local-first** | **0** Admin media — **acceptable** for restricted preview **temporarily** (theme placeholder) |
| **Image-use risk** | **High** on demo **ACTIVE** rows — rights **unknown**; **not** launch-safe |

---

## 2. Product count summary

| Metric | Count |
| --- | --- |
| **Total products** | **43** |
| **ACTIVE** | **28** |
| **DRAFT** | **14** |
| **ARCHIVED** | **1** |
| **Online Store published** | **28** (all **ACTIVE** in this read) |
| **In `controlled-pilot` collection** | **3** (**CJ** only) |
| **With `preview-only` tag** | **7** |
| **With `local-supplier-route` tag** | **4** |

### 2.1 Classification counts

| Classification | Count |
| --- | --- |
| **accepted-four-local-first-preview** | **4** |
| **cj-controlled-pilot** | **3** |
| **slice-13i-preview** | **3** |
| **gadgetgyz-draft** | **4** |
| **legacy-demo-catalogue** (tagged subset) | **2** |
| **unknown-manual** (Horizon/demo imports) | **27** |

---

## 3. Media state summary

| Media state (Admin) | Products | Typical storefront on preview theme |
| --- | --- | --- |
| **no-media** | **15** | Theme **placeholder** / broken-image-safe shell (**21EC** class) |
| **supplier-or-catalogue-image** | **28** | **Shopify CDN** product photos on PDP (demo imports) |

**Classification rules (desk):**

| State | Rule |
| --- | --- |
| **no-media** | `mediaCount` **0** |
| **supplier-or-catalogue-image** | `cdn.shopify.com/.../files/` image URLs — treated as **unapproved** catalogue import unless **PO** image-use gate says otherwise |
| **shopify-placeholder** | Reserved — **none** detected in Admin media on this pass |
| **custom-preview-placeholder** | Theme-only — **not** stored in Admin |

**Preview acceptability (restricted preview only):**

| Group | Admin media | Preview acceptable? |
| --- | --- | --- |
| **Accepted four local-first** | **0** | **Yes** — temporary theme placeholder only |
| **CJ + 13I programme** | **0** | **Yes** — same |
| **Demo ACTIVE (~24)** | **1–34** images each | **Temporary only** — clutter + **rights unknown** |
| **Gadgetgyz DRAFT** | **0** | N/A — unpublished |

---

## 4. Product-by-product audit table

Full CSV: `artifacts/catalogue/slice-21eg/products-audit.csv` (local). Summary columns below — **all 43** products.

| Handle | Status | Class | Media | Media state | Online Store | Price | AFS | Rec. action |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **five-division-drawer-divider-preview** | ACTIVE | local-four | 0 | no-media | Yes | 0.00 | false | keep-placeholder-temporarily |
| **adjustable-aluminium-phone-tablet-stand-preview** | ACTIVE | local-four | 0 | no-media | Yes | 0.00 | false | keep-placeholder-temporarily |
| **cable-tidies-set** | ACTIVE | local-four | 0 | no-media | Yes | 0.00 | false | keep-placeholder-temporarily |
| **compact-cutlery-drawer-organiser-preview** | ACTIVE | local-four | 0 | no-media | Yes | 0.00 | false | keep-placeholder-temporarily |
| **beverage-bottle-oil-bottle-handle-holder** | ACTIVE | CJ | 0 | no-media | Yes | 249.00 | false | keep-as-is |
| **foldable-magnetic-phone-holder-desktop-tablet-stand** | ACTIVE | CJ | 0 | no-media | Yes | 699.00 | false | keep-as-is |
| **usb-bag-sealer** | ACTIVE | CJ | 0 | no-media | Yes | 279.00 | false | keep-as-is |
| **compact-organiser-basket** | ACTIVE | 13I | 0 | no-media | Yes | 0.00 | true | keep-as-is |
| **mini-plastic-divider-basket** | ACTIVE | 13I | 0 | no-media | Yes | 0.00 | true | keep-as-is |
| **sink-strainer-stainless-steel** | ACTIVE | 13I | 0 | no-media | Yes | 0.00 | true | keep-as-is |
| **acrylic-tablet-phone-stand** | DRAFT | Gadgetgyz | 0 | no-media | No | 249.00 | true | cleanup-later |
| **gizzu-usb-to-type-c-cable-2m** | DRAFT | Gadgetgyz | 0 | no-media | No | 129.00 | true | cleanup-later |
| **ugreen-4-in-1-usb-2-0-hub** | DRAFT | Gadgetgyz | 0 | no-media | No | 279.00 | true | cleanup-later |
| **world-map-extended-mouse-pad** | DRAFT | Gadgetgyz | 0 | no-media | No | 219.00 | true | cleanup-later |
| **handwoven-cotton-organizer-basket** | ACTIVE | legacy-demo | 4 | catalogue-image | Yes | — | — | hide-archive-later |
| **available-regular-price** | ACTIVE | legacy-demo | 5 | catalogue-image | Yes | — | — | hide-archive-later |
| **adjustable-laptop-stand** | ACTIVE | unknown-manual | 10 | catalogue-image | Yes | — | — | exclude-from-launch |
| **kitchen-utensil-holder** | ACTIVE | unknown-manual | 6 | catalogue-image | Yes | — | — | exclude-from-launch |
| **usb-c-charging-cable-1-2m** | ACTIVE | unknown-manual | 6 | catalogue-image | Yes | — | — | exclude-from-launch |
| *(+ 23 more unknown-manual / demo handles)* | ACTIVE/DRAFT | unknown-manual | 1–34 | catalogue-image | mixed | — | — | exclude / cleanup |
| **sold-out** | ARCHIVED | unknown-manual | 0 | no-media | No | — | — | cleanup-later |

*Remaining **23** **unknown-manual** rows are listed in local CSV; predominantly long-import **ACTIVE** demo titles with **6–34** images each.*

---

## 5. Accepted preview products — media status

| Launch ID | Handle | Admin media | Storefront (**21EE**) | Media risk | Recommendation |
| --- | --- | --- | --- | --- | --- |
| **DW-TA-01** | `cable-tidies-set` | **0** | Theme placeholder; **PASS** | no-image-available | **keep-placeholder-temporarily** |
| **DW-HL-02** | `five-division-drawer-divider-preview` | **0** | Theme placeholder; **PASS** | no-image-available | **keep-placeholder-temporarily** |
| **DW-KS-04** | `compact-cutlery-drawer-organiser-preview` | **0** | Theme placeholder; **PASS** | no-image-available | **keep-placeholder-temporarily** |
| **DW-OD-05** | `adjustable-aluminium-phone-tablet-stand-preview` | **0** | Theme placeholder; **PASS** | no-image-available | **keep-placeholder-temporarily** |

**Before approved images:** **PO** image-use gate required (**21DZ** / **21EB** — media **blocked**). **Do not** upload supplier URLs without separate approval slice.

---

## 6. Legacy / demo products needing cleanup

| Pattern | Count | Issue | Suggested programme action |
| --- | --- | --- | --- |
| Long-handle **ACTIVE** imports (organisers, cables, dispensers, etc.) | **~24** | **Shopify CDN** photos; no programme tags; pollutes search/collections | **hide-archive-later** or bulk **DRAFT** after PO cleanup slice |
| Duplicate **DRAFT** + **ACTIVE** pairs | **~8** pairs | Import noise | Consolidate/delete duplicates |
| **Gadgetgyz** pilot **DRAFT** (4) | **4** | Unpublished; pilot **closed** | **cleanup-later** |
| **ARCHIVED** `sold-out` | **1** | Stale | **cleanup-later** |

**Why PO sees “temporary Shopify images”:** Demo products retain **native Admin product media** (multi-image galleries). Programme preview rows **do not** — they rely on **theme** placeholders.

---

## 7. Products needing image / media approval

| Priority | Products | Need |
| --- | --- | --- |
| **P1** | **Accepted four** local-first | Approved **image-use** + source (supplier sample or neutral asset) before any media enablement slice |
| **P2** | **3** **CJ** + **3** **13I** (if kept in preview) | Same gate if moving beyond placeholder |
| **P3** | **~24** demo **ACTIVE** | **Not** for launch — decide archive vs replace vs leave out of preview search |

---

## 8. Products safe to keep temporarily (restricted preview)

| Group | Count | Rationale |
| --- | --- | --- |
| **Accepted four local-first** | **4** | **21EE** **PASS** with **0** Admin media + theme placeholder |
| **CJ controlled-pilot** | **3** | **0** media; non-purchasable; preview tags |
| **13I preview (excl. cable-tidies)** | **3** | **0** media; historical preview posture |
| **Demo ACTIVE** | **0** for launch planning | May remain visible until cleanup — **not** “safe” for launch |

---

## 9. Recommended Product Owner options

| Option | Description | **21EG** alignment |
| --- | --- | --- |
| **A** | Approve **media sourcing plan** for **accepted four** only (no upload yet) | **Recommended** |
| **B** | Approve **cleanup/archive planning** for **~24** demo **ACTIVE** products | **Recommended** in parallel |
| **C** | **Keep restricted preview as-is** temporarily (placeholders on programme rows) | **Valid** — matches **21EE** |
| **D** | **Pause** catalogue/media work | Always valid |

**Not recommended now:** Bulk media upload, supplier URL imports, or removing theme placeholder gates without image-use **PO**.

---

## 10. Strict confirmations

- **Read-only** — **no** Admin mutation, media upload, publication change, theme push, import/sync, or app install.
- **No** `artifacts/` or credentials committed.
- **No** customer/order/payment data or supplier credentials in this doc.

---

## Next owner

**Product Owner** — choose **§9** options **A** + **B** (media plan for **four** + demo cleanup planning) or **C** (hold).
