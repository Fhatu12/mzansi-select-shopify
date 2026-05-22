# Slice 21EO — live-prep catalogue simplification

**Document type:** Catalogue simplification execution record  
**Prepared:** 2026-05-22  
**Owner:** DevOps / Platform Engineer (execution) + Product Owner (direction)  
**Slice:** **21EO**  
**Store:** `dropshippoc.myshopify.com`  
**Live theme:** `148914077879` / Horizon / **live** (not published or pushed in this slice)  
**Preview theme:** `151207542967` / Mzansi Select MVP Preview / **unpublished** (unchanged)

**Upstream:**

- **Slice 21EN** — four-product media PDP validation (`f84fa61`, **PASS WITH NOTES**)
- **Slice 21EM** — `image-permission-confirmed` tag fix (`5f90d30`)
- **Slice 21EJ** — neutral programme media attach (`a90289d`)

**Product Owner direction:** Stop using generated/neutral images as the live-prep path. Hide weak products from storefront visibility. Keep a **small** launch catalogue with up to **three** suitable drawer organiser-type products that already have acceptable catalogue photography. Grow the catalogue later only when image, price, delivery, and supplier-readiness evidence exists (customer-request workflow).

**21EN superseded for launch posture:** **21EN** confirmed programme heroes render on the **preview** theme after **21EM**, but the **generated/neutral 21EJ launch path is withdrawn** by this slice. Neutral heroes remain in Admin for future supplier-readiness work but are **not** Online Store visible.

**Evidence (local; not committed):** `artifacts/catalogue/slice-21eo/`

---

## 1. Executive verdict

**PASS WITH NOTES**

Reversible **Online Store** unpublish applied to **25** products. **Three** drawer organiser-type legacy imports remain **ACTIVE** and **Online Store** visible with existing catalogue images. **No** hard deletes, **no** media upload, **no** price/inventory/claim/tag changes, **no** theme push/publish, **no** checkout enablement in this slice.

**Notes:** Post-change rendered checks on the **live Horizon** theme show **Add to Cart** on the three remaining demo PDPs (pre-existing live-theme commerce, **not** introduced by **21EO**). Card image load probes flagged possible lazy-load timing on mobile (**not** a no-image catalogue regression). **Separate** theme/commerce hardening remains required before public launch.

---

## 2. Pre-write checkpoint

| Check | Result |
| --- | --- |
| Branch | `master` @ post-**21EN** (`f84fa61`) |
| `artifacts/` | **gitignored** ✓ |
| `tools/catalogue/` | Untracked — **not** committed ✓ |
| Shopify CLI auth | **PASS** — read + write without logging secrets |
| Live theme publish | **Not** performed ✓ |
| Theme push | **Not** performed ✓ |
| Checkout / payment / customer-flow enablement | **Not** performed ✓ |
| Product import / sync / app install | **Not** performed ✓ |
| Media upload | **Not** performed ✓ |
| Hard delete | **Not** performed ✓ |
| **Supplier verified** | **Not** changed ✓ |

---

## 3. Catalogue audit summary (pre-change)

**Method:** Read-only Admin GraphQL via `shopify store execute` (paginated `products`).

| Metric | Pre **21EO** | Post **21EO** |
| --- | --- | --- |
| Total products | **43** | **43** (unchanged) |
| **ACTIVE** + **Online Store** published | **28** | **3** |
| Visible with **no** Admin media | **6** | **0** |
| Visible with **21EJ** neutral (`mzansi-*`) media | **4** | **0** |
| Visible with catalogue/import images | **18** | **3** |

### 3.1 Classification (pre-change)

| Group | Count | Online Store visible (pre) |
| --- | --- | --- |
| Legacy demo / import | **27** | **18** |
| **21EJ** local-four (neutral media) | **4** | **4** |
| **Slice 13I** preview (no media) | **3** | **3** |
| **CJ** controlled-pilot (no media) | **3** | **3** |
| **Gadgetgyz** draft pilot | **4** | **0** |
| Other draft / archived | **2** | **0** |

### 3.2 Drawer organiser-type candidates (pre-change)

| Handle | Title | Status | OS visible | Media | Kind | Recommendation |
| --- | --- | --- | --- | --- | --- | --- |
| `adjustable-pantry-organizer-utensil-cutlery-drawer-for-forks-knives-silverware-expandable-kitchen-drawer-kitchen-organizer-tray-1` | Adjustable Pantry Organizer Utensil Cutlery Drawer… | ACTIVE | Yes | **18** | catalogue-image | **KEEP** |
| `adjustable-expandable-bamboo-drawer-organizer-for-kitchen-bedroom-or-living-room-ideal-for-organizing-cutlery-silverware-knives-1` | Adjustable Expandable Bamboo Drawer Organizer… | ACTIVE | Yes | **12** | catalogue-image | **KEEP** |
| `1pcs-upgradation-adjustable-flatware-tableware-organizer-plastic-multifunctional-drawer-organizer-for-kitchen-counter-utensils-1` | Plastic Multifunctional Drawer Organizer… | ACTIVE | Yes | **16** | catalogue-image | **KEEP** |
| `five-division-drawer-divider-preview` | 5-Division Drawer Divider — Preview | ACTIVE | Yes | **1** | 21ej-neutral-generated | **HIDE** |
| `compact-cutlery-drawer-organiser-preview` | Compact Cutlery Drawer Organiser — Preview | ACTIVE | Yes | **1** | 21ej-neutral-generated | **HIDE** |
| `compact-organiser-basket` | Compact Organiser Basket | ACTIVE | Yes | **0** | no-media | **HIDE** |
| `mini-plastic-divider-basket` | Mini Plastic Divider Basket | ACTIVE | Yes | **0** | no-media | **HIDE** |
| Other organiser-titled legacy rows | Various | ACTIVE/DRAFT | Mixed | ≥6 | catalogue-image | **HIDE** (duplicate/long-handle imports; drafts already unpublished) |

Full **43**-row audit table (local): `artifacts/catalogue/slice-21eo/products-audit-table.json`

---

## 4. Live-prep catalogue decision

### 4.1 Keep-list (Online Store visible)

| # | Handle | Rationale |
| --- | --- | --- |
| 1 | `adjustable-pantry-organizer-utensil-cutlery-drawer-for-forks-knives-silverware-expandable-kitchen-drawer-kitchen-organizer-tray-1` | Drawer organiser; multi-image catalogue photography |
| 2 | `adjustable-expandable-bamboo-drawer-organizer-for-kitchen-bedroom-or-living-room-ideal-for-organizing-cutlery-silverware-knives-1` | Drawer organiser; expandable bamboo; catalogue images |
| 3 | `1pcs-upgradation-adjustable-flatware-tableware-organizer-plastic-multifunctional-drawer-organizer-for-kitchen-counter-utensils-1` | Drawer organiser; catalogue images |

### 4.2 Hide-from-visibility list (reversible unpublish from **Online Store** only)

**25** products — all other pre-change **ACTIVE** + **Online Store** rows, including:

- **Four** **21EJ** neutral-image local-first previews (`cable-tidies-set`, `five-division-drawer-divider-preview`, `compact-cutlery-drawer-organiser-preview`, `adjustable-aluminium-phone-tablet-stand-preview`)
- **Three** **13I** preview rows with **no** media (`sink-strainer-stainless-steel`, `compact-organiser-basket`, `mini-plastic-divider-basket`)
- **Three** **CJ** controlled-pilot rows with **no** media
- **Fifteen** legacy demo/import rows (cables, stands, kitchen accessories, duplicate organiser/basket imports, etc.)

**Not** hidden: **Gadgetgyz** drafts and other rows already **unpublished** from **Online Store**.

### 4.3 Future product rule (Product Owner)

Customer-request products may be added to the **visible** catalogue **only when** all of the following exist:

1. Acceptable **real** product photography (not programme neutral/generated stand-ins)  
2. Approved **price** posture  
3. Delivery / fulfilment evidence  
4. Supplier-readiness evidence  
5. Explicit Product Owner approval for **Online Store** visibility  

Until then, rows may remain in Admin as **ACTIVE** but **unpublished** from **Online Store** for reversible staging.

---

## 5. Bounded Admin actions

| Action | Detail |
| --- | --- |
| Mutation | `publishableUnpublish` per product |
| Channel | **Online Store** only (`gid://shopify/Publication/169105293495`) |
| Products affected | **25** |
| Status | **ACTIVE** preserved on all rows |
| Fields unchanged | Title, description, price, inventory, variants, vendor, type, tags, SEO, metafields, media, collections |
| **Supplier verified** | **Not** set |
| Reversibility | `publishablePublish` to same publication restores visibility |

**Post-write Admin read-back:** **3** products **ACTIVE** + **Online Store** published; **0** visible no-media; **0** visible neutral **21EJ** media.

---

## 6. Storefront verification summary

**Method:** Password-gated manual unlock on **live** storefront (Horizon); mobile **390×844**; evidence `artifacts/catalogue/slice-21eo/storefront-verify.json`.

| Route | Visible product handles (sample) | Hidden samples absent? | Notes |
| --- | --- | --- | --- |
| Homepage `/` | **3** keep-list only | **PASS** — no `cable-tidies-set`, previews, CJ | Image probe timing (**NOTE**) |
| Search `?q=organiser` | **3** keep-list | **PASS** | Same |
| Search `?q=cable` | **3** keep-list only (no cable SKU) | **PASS** | Same |
| `/collections/all` | **3** keep-list | **PASS** | Same |
| PDP (each keep) | Direct URL loads | N/A | **NOTE:** live theme shows **Add to Cart** (pre-existing) |

**PASS criteria for this slice (visibility):** **Met** — weak/no-image/neutral products no longer appear in homepage, search, or all-products card surfaces sampled.

**Out of scope / follow-on:** Disable or preview-safe-wrap live-theme purchase CTAs; image-rights review on the three kept imports; MVP preview theme alignment (**151207542967**) if PO wants restricted-preview parity.

---

## 7. Risks and rollback

| Risk | Mitigation |
| --- | --- |
| Kept imports may lack PO image-use approval | Treat as **temporary** live-prep placeholders; replace when approved photography exists |
| Live Horizon PDPs may allow purchase | **No** change in **21EO**; requires separate commerce-gating slice before launch |
| Neutral **21EJ** media still in Admin | Hidden from storefront; available for future re-publish after real images |
| Over-broad search on live theme | Only **3** products published — search cannot surface hidden handles |

**Rollback:** Re-publish required handles to **Online Store** via `publishablePublish` using pre-slice publication snapshot in `artifacts/catalogue/slice-21eo/products-audit-table.json` (pre-run file preserved in gitignored evidence).

---

## 8. Commands executed

```bash
git status --short --branch
git check-ignore -v artifacts/
shopify store execute --store dropshippoc.myshopify.com --query '{ shop { name } }'
node artifacts/catalogue/slice-21eo/run-audit.mjs
node artifacts/catalogue/slice-21eo/run-unpublish.mjs
node artifacts/catalogue/slice-21eo/run-audit.mjs   # post-check
PLAYWRIGHT_BROWSERS_PATH=~/.cache/ms-playwright \
  node artifacts/catalogue/slice-21eo/run-storefront-verify.mjs
```

---

## 9. Strict confirmations

- **No** credentials, cookies, tokens, HAR, customer/order/payment data, or supplier credentials in this doc.
- **No** `artifacts/` or `tools/catalogue/` committed.
- **No** hard deletes.

---

## Next owner

**Product Owner** — accept the **three-product** live-prep catalogue posture; approve follow-on slices for (1) live-theme purchase CTA / checkout gating, (2) image-rights and copy cleanup on kept imports, (3) real photography + supplier evidence before expanding the visible catalogue per the customer-request rule.
