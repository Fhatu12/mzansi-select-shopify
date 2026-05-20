# Slice 21BY — EPROLO manual SKU shortlist and comparison pass

**Document type:** Manual supplier SKU shortlist (docs only)  
**Prepared:** 2026-05-20  
**Owner:** Product Manager  
**Slice:** **21BY**  
**Upstream:** **Slice 21BX** (**PASS WITH NOTES**; commit **`f9f1bfe5d68dc18d8b95745087d8823fd798f950`**) — **Product Owner** approved **Option C** (manual **5–10** SKU review **without** app install).

**Related tracker:** `docs/project-control.md` — **`## Slice 21BY`**  
**Prior assessment:** `docs/suppliers/slice-21bx-eprolo-supplier-route-assessment.md`

---

## 1. Slice verdict

**PASS WITH NOTES** — **docs-only** manual shortlist recorded.

**Summary:** **Eight** **EPROLO** utility SKUs were reviewed at **public desk** level across Mzansi target categories. **Category and claim screening** is complete; **product price**, **South Africa shipping cost**, and **product-specific delivery estimates** were **not obtainable** without **sign-in** and use of the on-page country calculator — the same class of blocker recorded for **CJ** at public desk (**Slice 21AA**). **No** SKU reaches **strong candidate** without authenticated calculator proof. **CJdropshipping** remains the **only** international route with **accepted** **South Africa** shipping signals on a forward subset (**Slice 21AB**).

---

## 2. Method and limits

| Element | This pass |
|---------|-----------|
| **Date** | 2026-05-20 |
| **Account** | **None** — no **EPROLO** sign-in, **no** app install, **no** Shopify connection |
| **Sources** | Public product URLs on **`eprolo.com/app/product/...`**; public **`eprolo.com/shipping-methods/`**; public **`eprolo.com/project/refund-policy/`** |
| **Evidence storage** | **No** `artifacts/` commit; **no** screenshots in repo |
| **Price / ZA shipping** | Product pages expose a **Calculate shipping price by country** control and **USD** cost fields in templates, but values load after **Login / Sign Up** — **not captured** in this pass |
| **Platform signals (unverified per SKU unless stated)** | Ships from **China and US** warehouses (**shipping-methods**); **Africa** delay-refund threshold **>60 days** from warehouse dispatch (**unverified** as customer-facing delivery promise); **Netherlands Post** and **Singapore Post** support worldwide delivery (**desk signal only**) |

**Unverified rule:** Any supplier marketing, processing-time badge (**Shipment within 24 hours** / **2–3 Business days**), or apparel **7-day** return link on a product page is **unverified** for that SKU until confirmed in an authenticated calculator capture.

---

## 3. Summary table

| ID | Product name (desk) | Category fit | Product price | ZA shipping avail. | Shipping cost | Delivery estimate | Recommendation |
|----|---------------------|--------------|---------------|-------------------|---------------|-------------------|----------------|
| **BY-01** | Strong Adhesive Wash Cloth Clip / Towel Rack | Kitchen & Storage; Home & Living | **Not captured** | **Unknown** — calculator requires login | **Not captured** | **Not captured**; platform **>60 days** delay-refund band for **Africa** (**unverified** per SKU) | **watch** |
| **BY-02** | CanLoft Magnetic Canned Food Pantry Hook | Kitchen & Storage | **Not captured** | **Unknown** | **Not captured** | **Not captured** | **watch** |
| **BY-03** | Drawer Dividers 4pcs — adjustable household organiser | Home & Living; Kitchen & Storage | **Not captured** | **Unknown** | **Not captured** | **Not captured** | **candidate** |
| **BY-04** | Round Pen Holder / rotating desktop storage box | Office & Desk; Home & Living | **Not captured** | **Unknown** | **Not captured** | **Not captured** | **candidate** |
| **BY-05** | 2-in-1 Sponge Box / Soap Dispenser | Kitchen & Storage | **Not captured** | **Unknown** | **Not captured** | **Not captured** | **watch** |
| **BY-06** | Baby Bottles Dryer / drain rack | — (out of taxonomy) | **Not captured** | **Unknown** | **Not captured** | **Not captured** | **reject** |
| **BY-07** | Magic Rope Magnetic Data Cable — fast charging | Tech Accessories | **Not captured** | **Unknown** | **Not captured** | **Not captured** | **reject** |
| **BY-08** | Epsilon desk wireless charger / phone holder / speaker — 10W | Tech Accessories | **Not captured** | **Unknown** | **Not captured** | **Not captured** | **reject** |

---

## 4. Per-SKU records

### BY-01 — Strong Adhesive Wash Cloth Clip / Towel Rack

| Field | Capture |
|-------|---------|
| **Product name** | Storage Holders Racks Strong Adhesive Wash Cloth Clip Rotatable Home Improvement Bath Room Kitchen Supplies Storage Towel Rack |
| **Category fit** | **Kitchen & Storage**; **Home & Living** |
| **Product URL** | https://eprolo.com/app/product/Storage-Holders-Racks-Strong-Adhesive-Wash-Cloth-Clip-Rotatable-Home-Improvement-Bath-Room-Kitchen-Supplies-Storage-Towel-Rack |
| **Product price** | **Not captured** at public desk (login required for **USD** variant cost) |
| **South Africa shipping availability** | **Unknown** — page shows **Calculate shipping price by country**; **not run** without account |
| **Shipping cost** | **Not captured** |
| **Delivery estimate** | **Not captured** per **ZA**; page shows **Shipment within 24 hours** and **2–3 Business days** processing badges (**unverified** end-to-end to **ZA**) |
| **Refund/return notes** | Product page links **7-day unconditional returns** (apparel policy — **may not apply**); platform **refund-policy**: delay refund if **>60 days** for **Africa** (**unverified** operational match); disputes may be **denied** for some **Post NL / Electric Post NL** options to **South Africa** (**desk signal** — confirm per method) |
| **Product media quality** | Description references pack images — **not assessed** (no media-use approval) |
| **Product-claim risk** | **Moderate** — **2 kg** adhesive load, surface compatibility list; avoid absolute “works on all surfaces” customer copy |
| **Fit for Mzansi Select audience** | **Moderate** — practical kitchen/bath utility if **ZA** cost and delivery prove acceptable |
| **Closest CJ/DSers comparison** | No direct **CJ** pilot match; general organiser class only |
| **Recommendation** | **watch** — await **ZA** price/shipping proof |

---

### BY-02 — CanLoft Magnetic Canned Food Pantry Hook

| Field | Capture |
|-------|---------|
| **Product name** | CanLoft Magnetic Canned Food Hangers / Strong Magnet Hook |
| **Category fit** | **Kitchen & Storage** |
| **Product URL** | https://eprolo.com/app/product/CanLoft--Magnetic-Canned-Food-Hangers-Magnetic-Save-Space-In-Your-Pantry-Strong-Magneet-Haak-Zwart-Strong-Magnet-Hook-Hot-Sales |
| **Product price** | **Not captured** |
| **South Africa shipping availability** | **Unknown** |
| **Shipping cost** | **Not captured** |
| **Delivery estimate** | **Not captured**; same **24h / 2–3 day** warehouse badges (**unverified** for **ZA**) |
| **Refund/return notes** | Same platform posture as **BY-01** |
| **Product media quality** | **Not assessed** |
| **Product-claim risk** | **Moderate** — magnetic hold for tins; must not overstate weight limits or pantry compatibility |
| **Fit for Mzansi Select audience** | **Moderate** — niche pantry organiser |
| **Closest CJ/DSers comparison** | Distant to **CJ** kitchen rack (**CJJJJTCF09109-White**) — different item class |
| **Recommendation** | **watch** |

---

### BY-03 — Drawer Dividers 4pcs

| Field | Capture |
|-------|---------|
| **Product name** | Drawer Dividers 4pcs DIY Plastic Grid Adjustable Drawer Dividers Household Storage Makeup Socks Underwear Organizer |
| **Category fit** | **Home & Living**; **Kitchen & Storage** (crossover) |
| **Product URL** | https://eprolo.com/app/product/Drawer-Dividers-4pcs--DIY-Plastic-Grid-Plastic-Adjustable-Drawer-Dividers-Household-Storage-Makeup-Socks-Underwear-Organizer |
| **Product price** | **Not captured** |
| **South Africa shipping availability** | **Unknown** |
| **Shipping cost** | **Not captured** |
| **Delivery estimate** | **Not captured** |
| **Refund/return notes** | Platform **refund-policy** as above |
| **Product media quality** | **Not assessed** |
| **Product-claim risk** | **Low–moderate** — simple organiser; avoid “fits all drawers” without sizing proof |
| **Fit for Mzansi Select audience** | **Good** category alignment — lightweight, low claim |
| **Closest CJ/DSers comparison** | Broadly similar utility band to **CJ** organiser candidates (**Slice 21Z**); not equivalent to **3-SKU** pilot |
| **Recommendation** | **candidate** — **only** if **ZA** shipping and margin proof close |

---

### BY-04 — Round Pen Holder / rotating desktop storage box

| Field | Capture |
|-------|---------|
| **Product name** | Creative Simple Multi Functional Round Pen Holder Office Rotating Simple Makeup Brush Large Capacity Pen Holder Storage Box |
| **Category fit** | **Office & Desk**; **Home & Living** |
| **Product URL** | https://eprolo.com/app/product/Creative-Simple-Multi-Functional-Round-Pen-Holder-Office-Rotating-Simple-Makeup-Brush-Large-Capacity-Pen-Holder-Storage-Box |
| **Product price** | **Not captured** |
| **South Africa shipping availability** | **Unknown** |
| **Shipping cost** | **Not captured** |
| **Delivery estimate** | **Not captured** |
| **Refund/return notes** | Platform **refund-policy** as above |
| **Product media quality** | **Not assessed** |
| **Product-claim risk** | **Low–moderate** — desk organiser; cosmetics crossover copy should be trimmed for Mzansi |
| **Fit for Mzansi Select audience** | **Good** — aligns with **Office & Desk** preview taxonomy |
| **Closest CJ/DSers comparison** | Office organiser class; not a match to **CJYD245830501AZ** phone/tablet stand |
| **Recommendation** | **candidate** — pending **ZA** calculator proof |

---

### BY-05 — 2-in-1 Sponge Box / Soap Dispenser

| Field | Capture |
|-------|---------|
| **Product name** | 2-in-1 Sponge Box Soap Dispenser Double Layer Kitchen Plastic Soap Dispenser Sponge Scrubber Holder Multifunctional soap Box |
| **Category fit** | **Kitchen & Storage** |
| **Product URL** | https://eprolo.com/app/product/2-in-1-Sponge-Box-Soap-Dispenser-Double-Layer-Kitchen-Plastic-Soap-Dispenser-Sponge-Scrubber-Holder-Multifunctional-soap-Box-H5 |
| **Product price** | **Not captured** |
| **South Africa shipping availability** | **Unknown** |
| **Shipping cost** | **Not captured** |
| **Delivery estimate** | **Not captured** |
| **Refund/return notes** | Platform **refund-policy** as above |
| **Product media quality** | **Not assessed** |
| **Product-claim risk** | **Moderate–high** — kitchen/soap contact; same caution class as **CJ** **USB Bag Sealer** (**CJYD211196101AZ**) — no food-preservation or safety-critical claims |
| **Fit for Mzansi Select audience** | **Conditional** — only with softened copy |
| **Closest CJ/DSers comparison** | Functional neighbour to **CJ** bag sealer — **different** mechanism; **CJ** row already carries claim controls |
| **Recommendation** | **watch** — do **not** prefer over **CJ** sealer without superior **ZA** economics |

---

### BY-06 — Baby Bottles Dryer / drain rack

| Field | Capture |
|-------|---------|
| **Product name** | Baby Bottles Dryer Milk Bottle Drain Rack Bottle Rack Drying Washing Drying Feeding Bottles Dryer for Space Saving |
| **Category fit** | **Out of scope** — baby/feeding category (**not** in approved Mzansi launch quartet for this pass) |
| **Product URL** | https://eprolo.com/app/product/baby-bottles-dryer-milk-bottle-drain-rack-bottle-rack-drying--washing-drying-feeding-bottles-dryer-for-space-saving |
| **Product price** | **Not captured** |
| **South Africa shipping availability** | **Unknown** |
| **Shipping cost** | **Not captured** |
| **Delivery estimate** | **Not captured** |
| **Refund/return notes** | Platform **refund-policy** as above |
| **Product media quality** | **Not assessed** |
| **Product-claim risk** | **High** — **BPA-free**, **baby-level**, hygiene/speed claims in description |
| **Fit for Mzansi Select audience** | **Poor** — outside current controlled taxonomy |
| **Closest CJ/DSers comparison** | None |
| **Recommendation** | **reject** |

---

### BY-07 — Magic Rope Magnetic Data Cable (fast charging)

| Field | Capture |
|-------|---------|
| **Product name** | Magic Rope Magnetic Data Cable for Android IOS Type C Micro USB Magnetic Charging Cable Self Winding Data Cable Fast Charging |
| **Category fit** | **Tech Accessories** |
| **Product URL** | https://eprolo.com/app/product/Magic-Rope-Magnetic-Data-Cable-for-Android-IOS-Type-C-Micro-USB-Magnetic-Charging-Cable-Self-Winding-Data-Cable-Fast-Charging |
| **Product price** | **Not captured** |
| **South Africa shipping availability** | **Unknown** |
| **Shipping cost** | **Not captured** |
| **Delivery estimate** | **Not captured** |
| **Refund/return notes** | Platform **refund-policy** as above |
| **Product media quality** | **Not assessed** |
| **Product-claim risk** | **High** — **fast charging**, multi-platform compatibility (**Slice 21Z** deferral class) |
| **Fit for Mzansi Select audience** | **Poor** for conservative pilot |
| **Closest CJ/DSers comparison** | **DSers** AliExpress cable class — higher honesty burden |
| **Recommendation** | **reject** |

---

### BY-08 — Epsilon desk wireless charger / holder / speaker (10W)

| Field | Capture |
|-------|---------|
| **Product name** | Epsilon Portable Mini Chair Wireless Charger Desk Mobile Phone Holder Wireless Charger 10W Fast Charge With Bracket Speaker |
| **Category fit** | **Tech Accessories** |
| **Product URL** | https://eprolo.com/app/product/Epsilon-Portable-Mini-Chair-Wireless-Charger-Desk-Mobile-Phone-Holder-Wireless-Charger-10W-Fast-Charge-With-Bracket-Speaker |
| **Product price** | **Not captured** |
| **South Africa shipping availability** | **Unknown** |
| **Shipping cost** | **Not captured** |
| **Delivery estimate** | **Not captured** |
| **Refund/return notes** | Platform **refund-policy** as above |
| **Product media quality** | **Not assessed** |
| **Product-claim risk** | **High** — **10W fast charge**, wireless, speaker combo (**Slice 21Z** wireless-charger rejection class) |
| **Fit for Mzansi Select audience** | **Poor** |
| **Closest CJ/DSers comparison** | **CJ** **CJCD167028701AZ** (3-in-1 wireless charger) — **rejected/deferred** in **Slice 21Z** |
| **Recommendation** | **reject** |

---

## 5. Top 3 candidate SKUs

**Category-only shortlist** — **none** are **strong candidate** without **ZA** price/shipping proof.

| Rank | ID | Product | Why shortlisted |
|------|-----|---------|-----------------|
| 1 | **BY-03** | Drawer Dividers 4pcs | Low claim risk; **Home & Living** / storage fit; lightweight |
| 2 | **BY-04** | Round Pen Holder / desktop storage box | **Office & Desk** alignment |
| 3 | **BY-01** | Adhesive towel / cloth clip rack | Practical **Kitchen & Storage** utility; moderate claim control possible |

**Not promoted to strong candidate:** missing **ZA** shipping cost, delivery band, and landed margin vs **CJ** **Slice 21AB** benchmarks (**$6.21–$8.65** shipping band on accepted subset — **CJ** evidence only).

---

## 6. Rejected SKUs and reasons

| ID | Product | Reason |
|----|---------|--------|
| **BY-06** | Baby bottle dryer rack | Outside approved category taxonomy; baby/hygiene claims |
| **BY-07** | Magic Rope magnetic fast-charge cable | High claim risk — fast charge / universal compatibility |
| **BY-08** | 10W wireless charger / speaker holder | Same rejection class as **CJ** wireless charger deferrals (**Slice 21Z**) |

**Additional desk rejects considered but not expanded to full rows:** vacuum food sealer (food-appliance claims); **Stanley**-specific water-bottle carrier (brand/compatibility risk); floor tripod phone stand (bulky parcel / weak pilot overlap).

---

## 7. Gaps needing proof

| Gap | Why it blocks route elevation |
|-----|------------------------------|
| **Per-SKU USD cost** | Required for landed-cost and margin vs **CJ** pilot staging prices (**R249** / **R279** / **R699** planning only) |
| **Per-SKU South Africa shipping cost** | **Mandatory** per **Slice 21X** / **21BX** |
| **Per-SKU delivery estimate to ZA** | Must beat or match **CJ** **20–60 day** honesty band with acceptable economics |
| **“No shipping method available” watch** | **Slice 21BX** community signal — must be ruled out per SKU |
| **Customs / duties treatment** | **Unverified** — DDU risk |
| **Refund path for non-apparel home goods** | Apparel **7-day** links on pages may **not** apply |
| **Media / content-use approval** | **Blocked** project-wide |
| **Authenticated calculator capture** | Same follow-on class as **Slice 21AB** for **CJ** |

---

## 8. EPROLO vs CJ / DSers observations

| Observation | Detail |
|-------------|--------|
| **Route stack** | **EPROLO** stays **additional only**; **CJ** **first**; **DSers** **second** / benchmark (**Slice 21X** unchanged) |
| **Proof depth** | **CJ** has **authenticated ZA** calculator subset + **3-SKU** controlled-pilot staging/preview chain; **EPROLO** has **category desk review only** after **21BY** |
| **Public desk parity** | **EPROLO** public product pages resemble **CJ** **Slice 21AA** — titles and descriptions visible; **price** and **ZA** shipping **not** obtainable without sign-in |
| **Delivery honesty** | **EPROLO** platform cites **>60 days** delay-refund for **Africa** — consistent with **long imported-route** posture; **not** a fast/local replacement |
| **Consolidation claim** | **EPROLO** still **may** reduce tooling fragmentation (**unverified**) — **insufficient** to outweigh **CJ** evidence |
| **DSers** | **Not executed**; **EPROLO** does **not** replace **DSers** benchmarking role |

---

## 9. Key risks (unchanged + confirmed)

- **Incomplete commercial proof** at desk — cannot approve economics or route swap.
- **Login-gated calculator** — risk of wasted install if public proof stays blocked.
- **Claim-heavy catalogue noise** — fashion, baby, wireless, and fast-charge SKUs dominate search surfaces.
- **Refund/dispute exclusions** for some postal methods to **South Africa** (**refund-policy** desk signal).
- **Import drift** if app install ever approved without controls.
- **Customer trust** if storefront copy outruns **ZA** proof.

---

## 10. Product Manager recommendation to Product Owner

**Recommendation:** Accept **Slice 21BY** as **PASS WITH NOTES**. **Keep** **CJdropshipping** as the **only** international **execution** route for the controlled pilot. **Do not** install **EPROLO** or open **Option D** (bounded app-install planning) yet.

**Suggested Product Owner decision:**

| Option | Action |
|--------|--------|
| **F1 (recommended)** | **Continue EPROLO watch** — approve a **future** **Slice 21BZ** (or equivalent) **authenticated** **ZA** shipping calculator capture for **BY-03**, **BY-04**, and **BY-01** only — **local evidence not committed**; **no** app install |
| **F2** | **Pause EPROLO** — no further supplier work until **route-honesty** / **21BU** preview acceptance closes |
| **F3** | **Reject EPROLO route** for the **current** pilot — sufficient desk friction and missing **ZA** proof |
| **F4** | **Not recommended** — elevate **EPROLO** above **CJ** or approve app install now |

**Do not approve:** **EPROLO** app install; Shopify **Admin** mutation; import/sync; checkout/payment; **`Supplier verified`**; route replacement of **CJ**.

---

## 11. What must remain blocked

Same as **Slice 21BX** and headline project gates: **customer access**; **checkout/payment**; **public launch**; **app install/import/sync**; **Admin** mutation; **publication/media** widening; **`artifacts/`** / **`zadropshipping/`** commit; secrets/PII in repo.

---

## 12. LLD and behaviour

**Unchanged.**

---

## 13. Recommended next owner

**Product Owner** — choose **F1**, **F2**, or **F3**. If **F1**, assign **Product Manager** authenticated desk capture (mirroring **Slice 21AB** hygiene). **Security / Compliance** only if **Option D** from **21BX** is reopened after **ZA** proof exists.
