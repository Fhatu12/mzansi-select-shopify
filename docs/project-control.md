# Mzansi Select Shopify MVP Theme

**Document Type:** Project Control  
**Prepared:** 2026-04-29  
**Owner:** Product Owner  
**Status:** Slice 13I controlled Shopify Admin preview-only product staging completed for five approved handles on `dropshippoc.myshopify.com`; products are `ACTIVE`, published to **Online Store** only for password-protected preview review, use `preview-only` and `price-to-confirm` tags with `0.00` placeholder price, zero inventory, `DENY` inventory policy, empty media, and approved existing collection assignments only; all five remain `Supplier proof in progress` only, not `Supplier verified`, not final launch approved, not final-priced, not delivery- or claims-approved; Slice 13J preview storefront safety is **committed** (`cef5713412ef218bee4af56ae9767c78d6304859`, tracker sync `353276375a3814cbe3ed929df5696bc60d7e03d5`) with authenticated preview QA **PASS WITH NOTES**; Slice **13K** supplier proof closure **committed** (`cb61ee28fbb3e575669236310d4e5b131fc697bf`); Slice **13K.1** tracker sync **committed** (`0054d66acfe926be21127ae02ba7453989c11131`); Slice **13L** **Gadgetgyz** **`Acrylic Tablet or Phone Stand`** proof closure **committed** (`a87e8c6124d9708967dfbf2c6a208b601fe6f608`) — **stronger supplier proof** recorded while **`Acrylic Tablet or Phone Stand`** (`acrylic-tablet-phone-stand`, **Office & Desk** / **Tech Accessories**) **remains `Supplier proof in progress` / preview-only staged** — **not** `Supplier verified`, not final pricing, not launch readiness, not delivery promises, not product claims until exact shipping fee, shipping-cost handling, final margin after shipping, sample/product quality proof, Product Owner image-use acceptance, stock reliability near launch, final target selling price, customer-facing return/refund wording, and final PO commercial decision; **Slice 13L.1 committed** (`a33895a3bb242455c95da74a6c6f2c72bee946d6`); **Neat Freak** FAQ (**no reseller sales**; **no dropshipping**) stays on record; **Slice 13M** supplier-path replacement **committed** (`45eb8e23b568e8fc7f6bdd2413818caa29288e5e`); **`Slice 13N`** docs-only **committed** (`421a5514cf33430e633763741c7a0e4bf054a969`) — **`ZA Dropshipping` public/product-level reference capture inconclusive**: **no** exact catalogue matches surfaced on **public** evidence for **`Sink Strainer`**, **`Compact Organiser Basket`**, **`Mini Plastic Divider Basket`**, or **`Cable Tidies Set`**; **authenticated ZA Dropshipping app/admin access** likely required for exact refs/costs; **platform-level public signals:** Shopify integration, local-stock framing, merchant product-import framing, **no-upfront-inventory** model, **Shopify→ZAD order sync**, fulfilment **after payment**; **Shopify App Store weak review volume/rating remains a reliance risk**; **`Ecomstock` backup candidate** surfaced for **`Sink Strainer`** (title **Effective Anti-Clogging Bathroom Kitchen Sink Strainer**, SKU **`P5260S`**, **R30**, stainless steel, **0.02 kg**, **14-day** return-policy signal — **stock display inconsistent/unresolved**); **Slice 13O** docs-only **`Gadgetgyz` `Cable Tidies Set` exact-item proof** **committed** / **closed** (`3bf260b830fcc4d4a55a7ed1314538ff748cb43f`, **`docs: record gadgetgyz cable tidies proof`**) — records **PCBuilder LOCKDOWN 150mm Cable Ties (100 pcs) — Black**, SKU **`PCB-CT-25150`**, **`R20.90`**, **In Stock** — **`cable-tidies-set`** handle / storefront title **`Cable Tidies Set`** unchanged — **still `Supplier proof in progress` / preview-only** — **`ZA Dropshipping` path excluded** (**`Slice 13N`**); **`Acrylic Tablet or Phone Stand`** (**`Slice 13L` Gadgetgyz acrylic**) posture unchanged — **five** preview SKUs **`Supplier proof in progress` only**, **none** **`Supplier verified`**, **none** final-priced / launch / delivery-claim-approved — proof-closure gates **open** (shipping fee, landing margin after shipping, image PO, sample/quality, returns wording — see **`Slice 13O`**); prerequisite **Slice 13N.1 tracker sync committed** (`f10eedcaa2dd6e6b20967960bb5bebed5002e38a`); **next backlog:** **`Slice 13N.2`** / **focused **`Ecomstock` Sink Strainer** closure** (**plus **`Gadgetgyz` acrylic **`Slice 13L`** gates**)**; no **live** theme publish or live theme overwrite; checkout/shipping/markets/taxes/payments unchanged; **Slice 14** post-fix unlocked storefront regression audit **PASS WITH NOTES** (evidence **`artifacts/qa/slice-14-postfix-unlocked-storefront-regression-audit/20260503-220755`**) closes storefront recovery QA after theme commits **14B** / **14D** / **14C**; **Slice 16D** HTML foundation remediation verification is accepted **PASS WITH NOTES** with **7 remediated findings** and **1 deferred Product Owner decision**; the verified evidence folder is **`artifacts/security/slice-16d-html-foundation-remediation-verification/20260509-232645/`**; legal/support placeholder pages remain intentionally gated/deferred until public-launch preparation, private-preview work may continue from the HTML-foundation perspective, public launch remains blocked, repo-root Theme Check remains polluted by historical `artifacts/devops` JSON noise and copied legacy surfaces, and the sanitized active-theme-surface Theme Check inspected **37 files**, returned **10 `OrphanedSnippet` warnings**, **0 errors**, and **no active-theme blocking errors**; **Slice 17A** HTML interaction contract audit acceptance is recorded canonically as **PASS WITH NOTES** while preserving the original evidence label **`Slice 16B — HTML foundation and interactive UI contract audit`**; evidence lives under **`artifacts/qa/slice-16b-html-interaction-contract-audit/2026-05-10T000307/`**; live storefront DOM behaviour remains **INCONCLUSIVE** because Playwright reached **`/password`** on every tested preview URL and password-page output was not treated as storefront evidence; **Slice 17B** now removes the shared section-heading **`href=\"#\"`** fallback so blank section-link destinations render as honest deferred copy instead of dead hash links, which resolves the New Arrivals section-link defect without enabling any new service flow; **Slice 17C** now removes the unwired static-card **Add to Cart** affordance by rendering preview-only disabled commerce controls on static merchandising cards while preserving live PDP navigation and preview-safe pricing/delivery posture; `artifacts/` remains untracked and uncommitted  
**Version:** 3.10  
**Source of Truth:** `mzansi-select-theme.html`

## Project name

Mzansi Select Shopify MVP Theme Conversion

## Current State

- Active slice: **Slice 17C** — static card commerce honesty (**this pass**)
- Next implementation slice: **Slice 17D** — promo/nav copy honesty
- Next supplier proof backlog (Product Owner sequencing): **Slice 14A.1** baseline + **Slice 14 post-fix** regression confirm **P0** theme passes **14B**, **14D**, **14C** are **committed** and **QA-validated** — **supplier-proof remains separate from Slice 15A feedback** and may resume per Product Owner sequencing (not automatic) — **`Slice 13N.2`**, **`Ecomstock` Sink Strainer** backup proof closure, **`Gadgetgyz` acrylic `Slice 13L` gates`** — **`Cable Tidies Set`** **Slice 13O** (`3bf260b830fcc4d4a55a7ed1314538ff748cb43f`) — **implementation sequencing (storefront):** **1.** **14B** **2.** **14D** **3.** **14C** — **all committed** — **4.** **14E** / **14G** (**P1**)
- Active owner: Product Owner
- Next owner: **Senior UI/UX Designer** for **Slice 17D** promo/nav copy honesty after Product Owner confirms sequencing
- Last accepted slice: **Slice 17A** HTML interaction contract audit acceptance recorded **PASS WITH NOTES**; the original handoff/evidence label remains **`Slice 16B — HTML foundation and interactive UI contract audit`** and **Slice 16D** HTML foundation remediation verification remains accepted **PASS WITH NOTES**
- Last committed slice: **Slice 17C** static card commerce honesty (**this pass**) — removes the misleading static-card **Add to Cart** affordance and replaces it with an honest preview-only disabled control
- Last theme/code implementation slice: **Slice 17C** static card commerce honesty (**this pass**) — static merchandising cards no longer present active purchase affordances without a handler; earlier baseline commits include **Slice 16C** HTML foundation blocker/high remediation, **Slice 14C** (`fix(theme): make wishlist controls honest`), **Slice 14D** (`ccf4db4115b7c3b7c496fcf9be8a04e2f79869e3`), **Slice 14B** (`1bef8f0c5658426860e35f49ef94ec86c3633110`), **Slice 13J** (`cef5713412ef218bee4af56ae9767c78d6304859`), and Slice 12J (`263e60f1588b03f4120121007411c701d342d9e4`)
- Current blockers:
  - The five approved preview-only products now exist in Shopify Admin with Slice 13G safety tags and placeholder pricing, are published to **Online Store** for preview review only, and remain `Supplier proof in progress` only — not `Supplier verified`, not import-approved, not final-priced, and not launch-approved; unauthenticated preview-theme URL checks still hit the storefront password wall, so visual PDP/collection confirmation generally requires an authenticated preview session — **Slice 14A.1** (**PASS WITH NOTES**, headed Playwright after manual unlock) **did** exercise themed UI on required desktop routes + mobile subset (**`/`**, **`/collections/all`**, **`/products/cable-tidies-set`**) with preview theme **`151207542967`** — **Slice 14 post-fix** regression (**PASS WITH NOTES**, same preview theme in harness) **re-validated** after **14B/14D/14C** commits
  - **Slice 16D** verified the HTML foundation blocker/high remediation set as **PASS WITH NOTES** with **7 findings remediated** and **1 deferred Product Owner decision**; the remaining deferred item is intentional legal/support placeholder gating only, evidenced at **`artifacts/security/slice-16d-html-foundation-remediation-verification/20260509-232645/`**
  - **Slice 16C** removes launch-surface exposure to placeholder legal/support content by replacing customer-facing help/company/contact fragments and dead social/account fragments with honest deferred text, adding `noindex,nofollow` to placeholder `about`/`contact` page handles, and preserving final publication as a separate Product Owner approval gate; **private-preview work may continue from the HTML-foundation perspective**, but **public launch remains blocked** until a later content/compliance slice completes publication-ready legal/support copy, approved routing, and Product Owner launch-preparation approval
  - **Slice 17A** accepted the interaction-contract audit as **PASS WITH NOTES** without code fixes: **`View all new in`** still fell back to **`#`**, the static homepage **Add to Cart** button remained an unwired mock, newsletter collection needs a **Product Owner + Security / Compliance** decision before emails are collected, the search category select needs an honesty/wiring decision, wishlist/hearts remain mostly honest/deferred but still need a consistent launch strategy, account exposure needs a Product Owner decision if customer accounts stay disabled, preview-only promo / Best Sellers / Gift Cards / Deals wording still needs honesty review, and social/external links still need final semantic / link-safety validation
  - **Slice 17B** resolves the section-level dead/hash link defect by removing the shared **`section-heading`** **`href="#"`** fallback and rendering blank section-link destinations as honest deferred copy instead; the New Arrivals heading no longer points to a dead hash, while section links with approved URLs remain live
  - **Slice 17C** resolves the static-card commerce honesty defect by replacing the unwired static **Add to Cart** button with a disabled **Preview only** control on static merchandising cards; no cart, checkout, or purchase workflow is enabled, and live product-card / PDP navigation remains unchanged
  - **Slice 17A** live DOM behaviour remains **INCONCLUSIVE** because every tested preview URL resolved to **`/password`** in Playwright; password-page output is explicitly excluded from storefront-behaviour evidence, so any live interaction verification must wait for a later authenticated rerun (**Slice 17H**)
  - **Storefront UX gates (validated post-fix):** **Slice 14 post-fix** regression **PASS WITH NOTES** confirms **Slice 14B** quartet department routes (**`/collections/home-living`**, **`kitchen-storage`**, **`office-desk`**, **`tech-accessories`**) in nav/strip/search browse row; **Slice 14D** homepage **live card image → PDP** navigation (**`/products/cable-tidies-set`** in harness); **Slice 14C** wishlist honesty (deferred/disabled hearts, non-link header/footer); **PDP preview-only** safety; **`/search?q=strainer&type=product`** **HTTP 200**; **mobile** subset (**`/`**, **`/collections/all`**, **`/products/cable-tidies-set`**, card bridge) — **0** automated findings — **(informational)** evidence folder may include **`node_modules`** keyword noise if searched recursively — **(follow-up)** keyboard **Tab** order still merits human review where not covered by harness
  - Any later preview-store visibility test must use the documented `preview-only` and `price-to-confirm` tags so cards and PDPs show non-final placeholder pricing, suppress sale/discount treatment, and keep delivery wording cautious until Product Owner approval exists; Slice 13J adds Liquid tag normalisation, a `Mzansi Select Preview` + non-positive price guard, optional `image-permission-confirmed` before showing catalog media for `preview-only` rows, and cautious announcement/trust/footer copy on preview routes (see LLD)
  - Wholesale / dropship terms, direct fulfilment workflow, shipping-cost handling, image permission, stock reliability proof, sample / product quality proof, final target selling-range confidence, return / refund practicality under the Mzansi Select support model, and final Product Owner commercial approval remain open before any product import or `Supplier verified` decision is revisited
  - Current margin calculations are product-only estimates from public supplier prices, assume shipping is charged separately to the customer or otherwise recovered, and do not approve final pricing; low-ticket items likely need bundles or minimum-cart rules if shipping is absorbed by Mzansi Select
  - **Neat Freak (Slice 13K FAQ + Slice 13M routing):** public FAQ / help-centre evidence remains recorded as **no reseller sales** and **no dropshipping**; **`Slice 13M` removes Neat Freak from the launch `Supplier verified` path** — retain **only** as **category/catalogue benchmark** — **pause** **`Supplier verified`** reliance on Neat Freak altogether unless **written** resale / dropship / direct-fulfilment permission arrives later; sourcing evidence now routes through **`ZA Dropshipping`**, **`Ecomstock`**, and **`Gadgetgyz`** **per product/category fit**
  - **Gadgetgyz / `Acrylic Tablet or Phone Stand` (Slice 13L):** strongest operational signal among the five preview-only handles; **stronger recorded public proof** (Gadgetgyz product page; Parrot Products source for SKU **DP0402**, Acrylic Stands category, in-stock and total stock **49**; dropship workflow and delivery/returns wording on public pages) — **still `Supplier proof in progress` / preview-only staged**; **not** `Supplier verified`, not final-priced, not launch-approved, not delivery-promise- or claim-approved until exact **ZA** shipping fee, shipping-cost handling model, **final margin after shipping**, sample/product quality proof, **Product Owner acceptance of image-use evidence**, stock reliability near launch, final target sell price, customer-facing return/refund wording, and final PO commercial decision; **Deals** rail remains blocked unless **final proven margin** is **55%+**; **Best Sellers** remains blocked until actual sales evidence exists
  - `Cable Organiser / Cable Management item` is paused because the current definition is too broad and the visible public price signal would likely require a `R599+` sell price to preserve the target product-only margin unless a narrower or lower-cost exact item is confirmed
  - Preview-preparation entries are recorded only for `Sink Strainer, stainless steel`, `Compact Organiser Basket`, `Mini Plastic Divider Basket`, `Cable Tidies Set`, and `Acrylic Tablet or Phone Stand`; price display must stay hidden or placeholder-only, delivery wording must stay cautious, and supplier images must remain placeholder-only until image permission is confirmed
  - `2-Layer Carry Handle Container 3.8L` and `Hook-over Door Basket` remain lower-priority for preview-staging preparation because dimensions, image permission, delivery handling, and price positioning need stronger closure first
  - Broader Shopify Admin automation (for example Slice 12K Playwright-style flows) remains paused unless Product Owner explicitly approves a follow-on scope beyond this controlled five-product pass
  - International and older supplier candidate paths remain paused unless explicitly reopened
  - **`Gadgetgyz` / `Cable Tidies Set` (`Slice 13O`):** exact **`Gadgetgyz`** item **recorded docs-only** (**PCBuilder LOCKDOWN 150mm Cable Ties (100 pcs) — Black**, SKU **`PCB-CT-25150`**, **`R20.90`**) — **still `Supplier proof in progress` / preview-only** — **shipping fee**, **landing margin**, **stock near launch**, **image PO**, **sample/QA**, **return wording** remain **open before `Supplier verified` review** (**Slice 13O** bullets)
  - **`ZA Dropshipping` (`Slice 13M` + **`Slice 13N`):** stays **primary replacement path framing** — **`Slice 13N`:** **public-facing reference capture inconclusive** for **`Sink Strainer`**, **`Compact Organiser Basket`**, **`Mini Plastic Divider Basket`** (**`Cable Tidies Set`** has **no `ZA` backup** publicly — **`Gadgetgyz`/`Slice 13O`**, SKU **`PCB-CT-25150`**) — **authenticated app/admin workflow** remains the likely gate where **`ZA`** SKUs/prices/fees/shipping-model proof is still sought; retains **Slice 13M** rationale alongside **weak Shopify App Store review/rating density**
  - **`Ecomstock` (`Slice 13M` + **`Slice 13N`):** **backup supplier path** — **`Slice 13N` surfaced** plausible **`Sink Strainer`** SKU **`P5260S`** (**R30**, stainless steel, **0.02 kg**) with **14-day** retail return-policy signal yet **volatile stock/readout UX** — still needs dropship/per-order workflow, definitive shipping/fees/SLAs, imagery rights, QA samples, and commercial closure
  - Slice 11R keeps `Jewellery / accessory organiser` as the preferred replacement-direction `Candidate`, but the current supplier proof capture pack remains incomplete and does not yet support formal replacement approval review or `Supplier verified` movement
  - No product may move to `Supplier verified` until the remaining evidence and decisions are completed
  - Slice 11R keeps the captured `CJdropshipping` route rejected for current commercial readiness because shipping is high, delivery is long, and DDU / oversized cautions weaken the route materially
  - Slice 11R keeps the public AliExpress adjustable-box route as the preferred supplier-path candidate, but only on an evidence/planning basis and with the exact item reference still missing
  - The portable-case route remains secondary comparison only because its shipping-cost field was not independently confirmed
  - `DSers` comparison is still preferred for additional confidence, but it is not blocking continued `Candidate` status for `Jewellery / accessory organiser`
  - The preferred planning price band remains `R179-R229`; `R159` remains only a competitive lower bound
  - Shipping cost higher than product cost remains flagged, delivery expectation is not yet proven as `<=21` business days, and commercial readiness remains inconclusive pending current supplier proof
  - Slice 11K records that the `25`-product plan meets preferred launch density targets on paper (`Home & Living` `6`, `Kitchen & Storage` `7`, `Office & Desk` `6`, `Tech Accessories` `6`), but this does not close launch readiness
  - The real launch-readiness gap remains verified product quality, supplier evidence, shipping, margin, and collection fit across the planned catalogue
  - `Adhesive Wall Hooks Pack` is now replacement-directed / deferred and should no longer be treated as an active first-six verification focus
  - `Jewellery / accessory organiser` is now the preferred replacement-direction `Candidate`, but it must remain blocked until the commercial-readiness gates are met and Product Owner records formal replacement approval
  - Expansion-ready departments remain deferred as launch destinations until a later approved catalogue expansion pass
- Deferred items:
  - Slice 12K preview catalogue product staging remains paused/deferred for automation-style flows; Slice 13I completed a **narrow** Product Owner–approved manual/API product staging pass for exactly five handles only
  - Shopify Admin automation and Playwright/Admin staging remain paused/deferred unless Product Owner explicitly approves a broader write-action scope
  - Product import remains deferred and unapproved
  - Shopify push/publish remains deferred and unapproved
  - Broader dynamic catalogue wiring beyond collection/PDP preview rendering remains deferred and unapproved
  - Checkout customization remains deferred and unapproved
  - Final legal publication remains deferred and unapproved
  - Placeholder legal/support page content remains intentionally **not customer-facing** after Slice 16C; publication-quality legal/support copy and approved routing remain deferred until a later content/compliance slice and Product Owner public-launch preparation approval
- Launch readiness: Contact/About route availability is resolved in unpublished preview evidence; launch readiness remains blocked by unresolved local supplier proof, shipping-cost handling, supplier/commercial readiness, and thin collection readiness
- Product import status: Not approved for bulk/import workflows; Slice 13I created five **preview-only** catalogue rows in Admin only
- Shopify push/publish status: No **live** theme publish, no live theme overwrite; five products published to **Online Store** sales channel only for password-gated preview (Slice 13I); Slice 13J used **targeted** CLI push to **unpublished** preview theme `151207542967` for QA only (does not publish live)
- Artifacts policy: `artifacts/` must remain untracked and uncommitted unless separately approved
- Last tracker update: 2026-05-10 **implementation + docs** — **Slice 17C** static card commerce honesty completed; static merchandising cards no longer present an active **Add to Cart** affordance without a handler, and now render honest preview-only disabled controls instead
- Tracker status: **Slice 17C** implementation completed — static commerce-like card controls are now honest while **Slice 14B / 14C / 14D** behaviour, **Slice 17B** section link correctness, PDP preview-only safety, and private-preview launch constraints remain intact; **Slice 17D** promo/nav copy honesty is now the next interaction-contract remediation slice
- Catalogue plan status: **Slice 13O** (**`3bf260b…`**) + **`docs/catalogue`** companions **committed** — **canonical narrative** **`project-control`** + **`mzansi-select-25-product-readiness-v1`** + **`local-supplier-sourcing-matrix-v1`**
- Documentation sync status: **current for `project-control`** after **Slice 17C** implementation sync (**this pass**)
- LLD status: **updated in Slice 17C** for the static-card commerce contract: static merchandising cards render honest preview-only disabled controls instead of fake purchase affordances

## Current active pass

**Implementation + tracker sync (this pass):** **Slice 17C** — correct static-card commerce honesty by replacing unwired static **Add to Cart** affordances with honest preview-only disabled controls, keep approved product-card and PDP navigation intact, and leave the remaining **Slice 17D–17H** service/copy decisions untouched.

## Slice 17A HTML interaction contract audit acceptance

- **Canonical label:** **Slice 17A — HTML interaction contract audit acceptance and documentation sync**.
- **Original source/evidence label preserved:** **`Slice 16B — HTML foundation and interactive UI contract audit`**.
- **QA verdict:** **PASS WITH NOTES**.
- **Evidence folder:** **`artifacts/qa/slice-16b-html-interaction-contract-audit/2026-05-10T000307/`**.
- **Audit inputs reviewed:** **`mzansi-select-theme.html`**, **`mzansi-select-mobile.html`**, and the local reference inventory **`mzansi-select-interactive-elements.txt`**.
- **Audit outputs recorded in evidence:** interaction matrix, service mapping, dead-link list, accessibility findings, and security/link-safety findings.
- **Live DOM limitation:** Playwright reached **`/password`** on every tested preview URL, so live storefront DOM behaviour remains **INCONCLUSIVE** and password-page output was **not** treated as storefront evidence.
- **Main accepted notes:** **`View all new in`** still falls back to **`#`**; the static homepage **Add to Cart** button remains unwired; newsletter collection requires a **Product Owner + Security / Compliance** decision before emails are collected; the search category select needs an honesty/wiring decision; wishlist/hearts are mostly honest/deferred but still need a consistent launch strategy; account exposure needs a Product Owner decision if customer accounts remain disabled; preview-only promo / Best Sellers / Gift Cards / Deals wording still needs honesty review; and social/external links still need final semantic / link-safety validation.
- **Canonical follow-up slices:** **Slice 17B — Section link correctness**; **Slice 17C — Static card commerce honesty**; **Slice 17D — Promo/nav copy honesty**; **Slice 17E — Newsletter compliance and handling decision**; **Slice 17F — Search select honesty**; **Slice 17G — Account/wishlist/social exposure decision**; **Slice 17H — Live regression after authenticated unlock**.

## Slice 15H preview deployment parity verification (DevOps)

- **Scope:** bounded read-only parity verification approved by the Product Owner after **Slice 15G** mobile readiness rerun **FAIL** so preview deployment state could be checked before any further CSS remediation.
- **Evidence folder:** **`artifacts/devops/slice-15h-preview-parity-20260508-170755/`**.
- **Local HEAD check:** local repo **HEAD** matched the expected **Slice 15F** commit exactly: **`149e03288656ca0c27d87047d2903bafa75b49e5`**.
- **Theme identity check:** preview theme confirmed as **`151207542967 / Mzansi Select MVP Preview / unpublished`**; live theme confirmed as **`148914077879 / Horizon / live`**; IDs are distinct and no live-targeting actions were performed.
- **Selected remote-comparable file set from Slice 15F:** **`assets/theme.css`** only. Docs-only files from the commit were excluded from remote parity comparison as planned.
- **Parity result:** **PREVIEW STALE OR INCOMPLETE**. An isolated selected-file pull against preview theme **`151207542967`** completed without CLI error but did **not** materialize **`assets/theme.css`** inside the artifact pull path, leaving the selected remote file effectively missing for hash parity comparison.
- **Interpretation:** QA likely tested **stale or incomplete preview output**, not a reliably current preview carrying the full local **Slice 15F** selected file set. A selected-file preview push approval is therefore needed before treating **Slice 15G** as a fresh CSS signal against the committed **Slice 15F** code.
- **Push posture:** **no push was run in this pass**. A proposed selected-file push command was generated in the evidence folder for Product Owner review only.
- **Safety confirmations:** **no** **`shopify theme push`** executed; **no** publish; **no** live theme overwrite; **no** theme/source edits; **no** Shopify Admin product/collection/link/checkout/shipping/markets/tax/payment edits; **no** product import; **no** `Supplier verified` / launch / final pricing / delivery / product-claim approvals; **`artifacts/`** remains uncommitted.

## Slice 15H selected-file preview push (DevOps)

- **Decision:** Product Owner accepted **Slice 15H** parity verification as **PASS WITH NOTES** and approved a bounded selected-file preview push.
- **Evidence folder:** **`artifacts/devops/slice-15h-selected-file-preview-push-20260508-171750/`**.
- **Local HEAD at execution:** **`149e03288656ca0c27d87047d2903bafa75b49e5`**.
- **Pushed file set:** **`assets/theme.css`** only.
- **Target:** **`dropshippoc.myshopify.com`** → preview theme **`151207542967 / Mzansi Select MVP Preview / unpublished`**.
- **Push command used:** **`shopify theme push --store dropshippoc.myshopify.com --theme 151207542967 --only "assets/theme.css" --nodelete --strict --json --no-color`**.
- **Push result:** successful preview-theme upload completed; preview theme remained **`unpublished`** after the push and live theme **`148914077879 / Horizon`** remained **`live`** and unchanged.
- **Operational safety:** **no** publish occurred; **no** live overwrite occurred; **no** theme/source files were edited in this pass; **no** product import/Admin product edit/collection edit/link edit/checkout/shipping/markets/tax/payment change occurred; **`artifacts/`** remains uncommitted.
- **Next recommended owner:** **QA / Test Engineer** for **Slice 15I — mobile readiness rerun** and **Slice 15A** re-enable decision.
- **Knowledge capture:** reusable knowledge discovered — remote preview parity must be verified before assuming a committed CSS remediation failed. Asset updated — **`docs/project-control.md`** only; **`artifacts/`** remains evidence-only. Suggested repository location — defer **`docs/knowledge/mobile-overflow-qa-check.md`** until **Slice 15I** confirms the successful path. Sensitive material excluded — storefront password / secrets excluded. Follow-up needed — QA rerun after the selected-file preview push.

## Slice 15I mobile readiness rerun (QA) — accepted INCONCLUSIVE

- **Decision:** accepted by Product Owner as **INCONCLUSIVE** because password-wall instability caused invalid measurements.
- **Evidence folder:** **`artifacts/qa/slice-15i-mobile-readiness-rerun/20260508-152139/`**.
- **Outcome:** mobile readiness **not accepted**; Slice 15A sharing remains **blocked**.
- **Requirement promoted:** QA harness must **hard-stop** and produce **INCONCLUSIVE** if `final_url` is `/password` or the password wall persists — no overflow measurement or regression checks may be reported from `/password`.

## Slice 15J auth-gated mobile readiness rerun (QA) — accepted FAIL

- **Decision:** accepted by the Product Owner as **FAIL**.
- **Evidence folder:** **`artifacts/qa/slice-15j-auth-gated-mobile-readiness-rerun/20260508-165123/`**.
- **Authentication gate:** the harness hard-stop on **`/password`** worked as intended; no route was measured while still on the password wall.
- **Fail signature:** page-level horizontal overflow persisted across **`360x800`**, **`390x844`**, **`414x896`**, and **`768x1024`** with a stable authenticated signature of **`max_scroll_w=861`** and top offenders reported as **`div.tb-item`** and **`nav`**.
- **Coverage note:** the rerun exercised **19** routes and omitted **`/search?q=strainer&type=product`**; the fail verdict remained valid, but the next rerun must restore the full **20-route** set.
- **Regression checks preserved in QA evidence:** **Slice 14B** department routing **OK**, **Slice 14C** wishlist honesty **OK**, **Slice 14D** homepage card-to-PDP **OK**, PDP preview-only safety **OK**, **`/search`** reachable.

## Slice 15K mobile nav / trust-bar overflow remediation (theme)

- **Scope:** investigate the authenticated **Slice 15J** nav / trust-bar overflow signature after the approved **Slice 15H** selected-file preview push, preserve the approved north-star presentation, and apply only the smallest shell-swap / containment hardening needed.
- **Root-cause interpretation:** the authenticated **15J** screenshots showed the desktop header / nav / footer shells still rendering at narrow widths in preview while the topbar rail reported oversized **`.tb-item`** descendants. After the approved preview parity push, the current local theme no longer reproduced page-level overflow, which pointed to a stale-preview state plus a need for stronger mobile shell-swap specificity rather than a redesign of the header system.
- **Theme hardening applied:** mobile breakpoint rules now hide **`header.site-header-desktop`**, **`nav.site-nav-desktop`**, and **`.footer-desktop`** with explicit element+class targeting, keep **`header.mob-header`** and **`nav.bottom-bar`** explicitly active on mobile, and add shrink-safe **`width/max-width/min-width`** containment around the topbar and trust-bar wrappers.
- **Theme files touched:** **`assets/theme.css`**.
- **Validation (local dev preview using store data):** the current local theme at **`http://127.0.0.1:9292`** validated all **20** required routes, including **`/search?q=strainer&type=product`**, across **`360x800`**, **`390x844`**, **`414x896`**, and **`768x1024`** with **zero page-level horizontal overflow failures** after the hardening pass.
- **Theme Check note:** the exact repo-root command **`shopify theme check --path . --fail-level error`** currently reports a blocking **artifact-only** **`ValidJSON`** error from the previously captured evidence file **`artifacts/devops/slice-15h-selected-file-preview-push-20260508-171750/theme-push-output.json`**; this is not caused by active theme source in **`assets/`**, **`layout/`**, **`sections/`**, **`snippets/`**, **`templates/`**, or **`config/`**.
- **Next recommended owner:** **QA / Test Engineer** for **Slice 15L** clean mobile readiness rerun and **Slice 15A** re-enable decision.
- **Knowledge capture:** reusable knowledge discovered — hard-stopping on **`/password`** prevents invalid overflow evidence, and authenticated overflow signatures must be checked against current preview parity before treating them as fresh CSS regressions. Asset updated — **`docs/project-control.md`**. Suggested repository location — defer **`docs/knowledge/mobile-overflow-qa-check.md`** until **Slice 15L** confirms the final successful method. Sensitive material excluded — storefront password / secrets excluded. Follow-up needed — future QA runner must include **`/search?q=strainer&type=product`**.

## Slice 15L clean mobile readiness rerun (QA) — accepted FAIL

- **Decision:** accepted by the Product Owner as **FAIL**.
- **Evidence folder:** **`artifacts/qa/slice-15l-clean-mobile-readiness-rerun/20260508200032/`**.
- **Authentication gate:** no route was measured on **`/password`**.
- **Coverage:** all **20** required routes were tested, including **`/search?q=strainer&type=product`**.
- **Blocking result:** page-level horizontal overflow persisted across **`360x800`**, **`390x844`**, **`414x896`**, and **`768x1024`**.
- **Stable overflow discriminator:** **`max_scroll_w=861`** with top offenders reported as **`div.tb-item`** and **`nav / .nav-right`**.
- **Regression checks preserved in QA evidence:** **Slice 14B** department routing **PASS**, **Slice 14C** wishlist honesty **PASS**, **Slice 14D** homepage card-to-PDP **PASS**, PDP preview-only safety **PASS**, **`/search`** measured, **`/search?q=strainer&type=product`** measured.
- **Blocked path:** **Slice 15A** private preview sharing remains blocked until a later clean authenticated rerun passes.

## Slice 15M mobile topbar / nav width root-cause remediation (theme)

- **Scope:** isolate the clean authenticated **Slice 15L** overflow discriminator (**`861px`**, **`div.tb-item`**, **`nav / .nav-right`**) and correct the real source without redesigning the approved north-star layout.
- **Exact root cause found:** the unpublished preview theme was still serving a **pre-15K** **`assets/theme.css`** variant whose mobile breakpoint lacked the stronger shell-swap selectors / overrides now present locally. That stale asset left desktop header/nav/footer chrome in the mobile render flow, which reintroduced the legacy **`nav / .nav-right`** width leak and the associated **`div.tb-item`** overflow signature seen in the authenticated screenshots.
- **Evidence of parity mismatch:** a read-only pull of preview theme **`151207542967`** returned a remote **`assets/theme.css`** hash of **`2C93CDFA42255F78AAC7D21F7F4BA2CFE261895E7314ED93E1EF0B40DF4E7042`**, while local **HEAD** carried **`DB4999549F00A9E1D3C24CB87A3EB6DEB291C8957BF30606A2D29E444519CA15`** and the diff showed the preview missing the **Slice 15K** mobile shell-swap / containment rules.
- **Theme hardening applied:** the critical mobile shell-swap and topbar/trust containment rules now also live inline in **`layout/theme.liquid`** after the main stylesheet so they still win if the preview serves an older stylesheet or stale asset order. This keeps **`header.site-header-desktop`**, **`nav.site-nav-desktop`**, and **`.footer-desktop`** out of the mobile render flow while preserving the approved mobile header/bottom-bar composition.
- **Theme files touched:** **`layout/theme.liquid`**.
- **Local verification:** current local preview still validates with **zero** page-level horizontal overflow across all **20** required routes at **`360x800`**, **`390x844`**, **`414x896`**, and **`768x1024`**.
- **Theme Check note:** the exact repo-root command **`shopify theme check --path . --fail-level error`** remains blocked by the pre-existing artifact JSON error under **`artifacts/devops/slice-15h-selected-file-preview-push-20260508-171750/theme-push-output.json`**; a sanitized theme-only rerun of the active theme surface remains warning-only with **zero** errors.

## Slice 15F mobile overflow root-cause remediation (theme)

- **Scope:** remediate the **Slice 15E FAIL** by fixing the actual mobile/tablet horizontal overflow sources without stripping sections, flattening imagery, or redesigning approved layouts.
- **North-star references:** desktop/mobile fidelity remains anchored to **`D:\dev\mzansi-select-shopify\mzansi-select-theme.html`** and **`D:\dev\mzansi-select-shopify\mzansi-select-mobile.html`**.
- **Root causes corrected:** the homepage **`#deals`** promo split allowed the intrinsic **`900px`** hero image to hold open a grid track because promo children did not explicitly allow shrink; shared product-card grids on collection/PDP/search routes still allowed intrinsic **`600px`** media widths to leak through shared card/image wrappers; the cart line-item layout needed the same zero-min containment pattern for image/content columns.
- **Fix strategy:** use targeted responsive containment only — **`minmax(0, 1fr)`** grid tracks where intrinsic media sits inside cards/banners, **`min-width: 0`** on shrinkable grid/flex children, and block-level full-size media anchors inside **`.prod-img`** so live PDP/card links inherit container width instead of intrinsic image width.
- **Theme files touched:** **`assets/theme.css`** only.
- **Validation (local dev preview using store data):** local **`shopify theme dev`** preview at **`http://127.0.0.1:9292`** validated all **20** required routes across **`360x800`**, **`390x844`**, **`414x896`**, and **`768x1024`** with **zero page-level horizontal overflow failures**; **Slice 14B** department routes remained present, **Slice 14C** wishlist honesty remained intact, **Slice 14D** homepage first card still navigated to **`/products/cable-tidies-set`**, and PDP preview-only safety remained intact across the five required PDPs. **`shopify theme check --path . --fail-level error`** returned warnings only with **zero blocking errors**.
- **Disclosures:** **no** **`docs/catalogue`** edits; **no** **`artifacts/`** commit; **no** live theme overwrite; **no** publish; **no** Shopify Admin product/collection/link/checkout/shipping/markets/tax/payment edits; **no** **`Supplier verified`** / launch / final pricing / delivery / product-claim approvals.

## Slice 15C mobile overflow remediation and north-star fidelity preservation (theme)

- **Scope:** correct the uncommitted mobile overflow pass so it no longer strips, flattens, or redesigns approved storefront presentation while still removing page-level horizontal overflow.
- **North-star references:** desktop fidelity remains anchored to **`D:\dev\mzansi-select-shopify\mzansi-select-theme.html`**; mobile fidelity remains anchored to **`D:\dev\mzansi-select-shopify\mzansi-select-mobile.html`**.
- **Design-stripping issues corrected:** removed the broad global image-height override that flattened card/media treatments; removed the mobile pattern of wrapping desktop header/nav/footer shells as the primary overflow workaround; restored a dedicated mobile composition for header/search/drawer/bottom navigation/footer instead of a squeezed desktop shell.
- **Overflow root causes corrected:** desktop search/nav/footer clusters exceeding small viewports; desktop footer grid remaining six columns on mobile; product-grid collapse to one column that diverged from approved mobile rhythm; wide children lacking mobile-specific containment; section wrappers that needed intentional horizontal-scroll boundaries rather than page-level overflow.
- **Theme files touched:** **`layout/theme.liquid`**, **`sections/site-header.liquid`**, **`sections/primary-navigation.liquid`**, **`sections/site-footer.liquid`**, **`assets/theme.css`**.
- **Responsive contract for this slice:** mobile now uses a dedicated sticky header, below-header search, slide-out drawer, bottom navigation, hero media rail, two-column product cards, two-by-two trust grid, and accordion footer treatment aligned to the approved mobile north-star; desktop chrome and merchandising structure remain aligned to the approved desktop north-star.
- **Intentional horizontal scrolling only:** announcement/ticker content, hero collage rail, and category strip may scroll horizontally on mobile; page-level horizontal overflow outside those bounded rails is treated as a defect.
- **Validation (local dev preview using store data):** **`http://127.0.0.1:9292`** route-set validation across **`360x800`**, **`390x844`**, **`414x896`**, **`768x1024`** returned **`overflowFailures: 0`**, **`routeFailures: 0`**, **`previewSafetyFailures: 0`**; **Slice 14B** quartet collection routes remained present in chrome; **Slice 14D** homepage first live card still reached **`/products/cable-tidies-set`**; **Slice 14C** deferred wishlist states remained present in header/footer/cards; **preview-only** PDP safety stayed visible; **`shopify theme check --path . --fail-level error`** returned **warning-only** output with **zero blocking errors**.
- **Disclosures:** **no** **`docs/catalogue`** edits; **no** **`artifacts/`** commit; **no** live theme overwrite; **no** publish; **no** Shopify Admin product/collection/link/checkout/shipping/markets/tax/payment edits; **no** **`Supplier verified`** / launch / final pricing / delivery / product-claim approvals.

## Slice 15A private preview share and tester feedback plan (accepted)

- **Decision:** accepted by Product Owner as a controlled **feedback-only** private preview with **10–20** trusted testers.
- **Purpose:** collect human feedback on **trust**, **navigation**, **mobile usability**, **product interest**, **clarity**, **broken links/buttons**, and **unfinished/confusing areas** before any public launch decision.
- **Approved tester group:** friends; family; trusted colleagues; **2–3** people using low/mid-tier mobile phones; **1–2** people unfamiliar with the project.
- **Collection method:** **Google Forms** primary; **WhatsApp** fallback.
- **Feedback tracker columns:** `ID | Tester type | Device | Page/area | Feedback | Screenshot? | Severity | Category | Decision | Owner | Status`
- **Tester message (template):**
  - Hi, I’m testing a private preview of Mzansi Select and would appreciate your feedback.
  - This is not a live/public store yet. Please browse only.
  - Do not: try to make a real purchase; enter payment details; treat prices, delivery, or product availability as final.
  - Please check: whether the site loads properly; whether navigation makes sense; whether links, buttons, product cards, and hearts/favourites behave clearly; whether the site feels trustworthy; whether anything looks unfinished or confusing; whether the mobile experience works well.
  - Preview link: `[PASTE PRIVATE PREVIEW LINK]`
  - After browsing, please answer the feedback questions I send you. Screenshots of problems are very helpful.
- **Approved feedback questions (Google Form):**
  1. What device did you use?
  2. Were you on mobile data, Wi-Fi, or both?
  3. Which page did you start on?
  4. Did the site load properly?
  5. Did navigation make sense?
  6. Did any link or button fail?
  7. Did the product cards open correctly?
  8. Did the hearts/favourites behave as expected?
  9. Did the store feel trustworthy?
  10. Which product would you most likely buy after launch?
  11. What made you hesitate?
  12. What felt unfinished?
  13. Was anything confusing about prices, delivery, or purchase availability?
  14. Would you share this store with someone after launch?
  15. Any screenshots of issues?
- **No-sales / no-checkout constraints:** testers must **browse only**; **no purchase attempts**; **no payment details**; prices/delivery/availability treated as **non-final**.
- **Feedback triage plan:** log each submission into the tracker; set **Severity** (blocker/high/medium/low/info) and **Category** (trust, nav, mobile, links, product cards, wishlist/hearts, copy clarity, unfinished); assign **Owner**; mark **Decision** (fix now / backlog / won’t fix / needs PO decision); keep **Status** (new / triaged / in progress / done / deferred).
- **Supplier-proof remains separate:** feedback-only preview does **not** change supplier-proof gates, `Supplier verified` posture, or any import/pricing/delivery approvals.
- **Next expected follow-up:** **Slice 15B** — private preview feedback triage and launch-readiness backlog.

## Slice 14A.1 unlocked storefront interaction audit (QA)

- **QA verdict:** **PASS WITH NOTES** (Product Owner acceptance recorded **this tracker sync**). **Evidence folder:** **`artifacts/qa/slice-14a1-unlocked-storefront-interaction-audit/20260503T170500Z/`** — **`screenshots/`** (50 PNGs), **`traces/full-run.zip`**, **`unlocked-link-audit.csv`**, **`unlocked-interaction-audit.csv`**, **`unlocked-qa-report.md`**, **`automation-notes.json`**, **`unlocked-audit.mjs`**.
- **Validation summary (accepted):** storefront **unlocked** successfully for headed automation; **required desktop routes** tested with **`preview_theme_id=151207542967`**; **mobile routes** tested: **`/`**, **`/collections/all`**, **`/products/cable-tidies-set`**; **PDP preview safety** on sampled **`Cable Tidies Set`** **passed** — primary purchase control **disabled**, **Preview only** visible, **Wishlist deferred** visible; header **search** submitted to **`/search?q=strainer&type=product`**; footer **`/pages/about#shipping`** worked in-browser; **`/collections/all`** live grid cards navigated to a **PDP** in automation sample (**confirm business-intended SKU** separately).
- **Accepted P0/P1 issue record:**
  1. **Favourite/heart controls** are **not** real favourite controls — **no** `aria-pressed` change; **no** class change; **no proven** wishlist **`localStorage` / `sessionStorage` contract**; header **`#wishlist`** unchanged. **Slice 14C** makes controls **honestly disabled/deferred** (see **Slice 14C** section).
  2. **Department menu** first item **`#home-living`** — **P0** **dead/hash** route for collection routing (**expect real `/collections/...` or equivalent**). **Slice 14B** implements **`collections['handle'].url`** for the quartet in theme Liquid + updates **`mzansi-select-theme.html`** (**historical QA record retained**).
  3. **Homepage static merchandising** cards **do not navigate** — **P0** (**Slice 14D** addresses **`sections/featured-product-grid.liquid`** homepage grids; **hero** / **`feature-tile-grid`** promos unchanged **this pass**).
  4. **Storage instrumentation** unclear — observed changes **not proven** wishlist-specific.
  5. **Keyboard / Tab order** and **collection PDP mapping** — follow-up review.
- **Product Owner sequencing (post-14A.1 theme work):** **Slice 14B** / **14D** / **14C** storefront navigation theme passes **committed** — **supplier-proof backlog** gated until **`docs: record storefront recovery qa closure`** (superseded by **Slice 14 post-fix** section) — **Slice 14E** / **14G** **P1** follow-ups remain.
- **Technical QA note (reruns):** future Playwright screenshot runs may require **`PW_TEST_SCREENSHOT_NO_FONTS_READY=1`** plus **font-request blocking** to avoid Shopify screenshot stalls (“waiting for fonts to load”).
- **Disclosures:** **no** theme/code change approved by **Slice 14A.1**; **no** Shopify push/publish; **no** Admin edits — evidence under **`artifacts/`** remains **uncommitted**.

## Slice 14 post-fix unlocked storefront regression audit (QA)

- **QA verdict:** **PASS WITH NOTES** (Product Owner acceptance). **Evidence folder:** **`artifacts/qa/slice-14-postfix-unlocked-storefront-regression-audit/20260503-220755`** — harness outputs include **`qa-report.md`**, **`link-audit.csv`**, **`interaction-audit.csv`**, **`automation-notes.json`**, **`audit-runner.mjs`**, **`screenshots/`**, **`traces/full-run.zip`**; **`artifacts/`** stays **gitignored** / **uncommitted**.
- **Validated after theme commits 14B / 14D / 14C:** launch **department** routing to **`/collections/{handle}`** quartet; **homepage live card** image link → **PDP** (**`/products/cable-tidies-set`** in harness); **wishlist** honesty (**deferred/disabled** controls, **no** fake **`#wishlist`** route); **PDP preview-only** safety; **search** route **`/search?q=strainer&type=product`**; **desktop** route set + **mobile** subset per harness; **0** automated findings.
- **Notes (informational):** recursive text search under the evidence folder may hit generic **`password` / `session`** language inside vendored **`node_modules`** documentation — **not** a storefront credential leak; reviewed primary artifacts contained **no** storefront password value, cookie, authorization header, access token, or API secret.
- **Sequencing:** **supplier-proof** work **may resume only after** this **`project-control` + LLD** docs-closure commit; Product Owner still owns backlog ordering (**`Slice 13N.2`**, **`Ecomstock`**, **`Gadgetgyz` acrylic gates**, **`Slice 13O` Cable Tidies**, etc.).
- **Disclosures:** **docs-only** closure sync; **no** theme/code edits; **no** **`docs/catalogue`** edits; **no** **`artifacts/`** commit; **no** Shopify push/publish/live overwrite; **no** Admin product/collection/link/checkout/shipping/markets/tax/payment edits; **no** **`Supplier verified`** promotion; **no** launch / final pricing / delivery-promise / product-claim approvals.

## Slice 14B launch department collection routing (theme)

- **Scope:** replace dead/hash or **`all-products`-only** launch-department destinations with **real Shopify collection URLs** for handles **`home-living`**, **`kitchen-storage`**, **`office-desk`**, **`tech-accessories`**.
- **Theme:** **`snippets/launch-collection-url.liquid`** outputs **`collections['handle'].url`** or **`{{ routes.all_products_collection_url }}`** if the collection drop is missing — consumed by **`sections/primary-navigation.liquid`** (department menu), **`sections/category-strip.liquid`** (first four tiles), **`sections/main-search-foundation.liquid`** (browse department links). **Expansion** departments (**Garden**, **Bath**, **Cleaning**) remain **`all-products`**.
- **Source HTML:** **`mzansi-select-theme.html`** first four department + strip tiles use **`/collections/{handle}`** for parity.
- **Docs:** **`docs/lld/mzansi-select-shopify-mvp-theme-v1.md`** records the **Slice 14B** contract.
- **Disclosures:** **no** wishlist (**14C**); **Slice 14B** scope **excluded** homepage **`featured-product-grid`** PDP bridging (**Slice 14D** is a **separate** theme commit); **no** **`docs/catalogue`** edits, **no** **`artifacts/`** commit, **no** Shopify push/publish, **no** Admin product/collection/checkout changes, **no** **`Supplier verified`** / launch / pricing / delivery / claim approvals.

## Slice 14D homepage featured product grid to PDP bridging (theme)

- **Scope:** **`sections/featured-product-grid.liquid`** (**Best Sellers** + **Kitchen & Storage** presets on **`templates/index.json`**) resolves **Slice 13I** preview product handles via **`all_products[handle]`**; when present, renders **`live-product-card`** (**`View product`** CTA, **Slice 13J** preview safety retained); when absent, prior **`static-product-card`** for that slot (**no** invented **`/products/...`** **`href`**).
- **Handles — Best Sellers (4):** **`cable-tidies-set`**, **`acrylic-tablet-phone-stand`**, **`sink-strainer-stainless-steel`**, **`compact-organiser-basket`**.
- **Handles — Kitchen & Storage (4):** **`cable-tidies-set`**, **`sink-strainer-stainless-steel`**, **`compact-organiser-basket`**, **`mini-plastic-divider-basket`**.
- **Section “View all”:** **`templates/index.json`** sets **`section_link_url`** to **`/collections/all`**; Liquid defaults blank **`section_link_url`** to **`routes.all_products_collection_url`**.
- **Disclosures:** **no** wishlist (**14C**), **no** **`feature-tile-grid`** / hero collage PDP rewiring, **no** **`docs/catalogue`** edits, **no** **`artifacts/`** commit, **no** Shopify push/publish, **no** Admin edits, **no** **`Supplier verified`** / launch / pricing / delivery / claim approvals.

## Slice 14C wishlist honesty / deferred hearts (theme)

- **Scope:** remove misleading **interactive** wishlist affordances — **no** fake “save” copy on enabled-looking hearts; **no** header **`href="#wishlist"`** placeholder route; **no** footer hash wishlist link.
- **Product cards:** **`snippets/static-product-card.liquid`** — **`.p-wish`** **`disabled`**, **`aria-disabled="true"`**, **`aria-label`** “Wishlist coming soon…”. **`snippets/live-product-card.liquid`** — same pattern with product title in **`aria-label`**.
- **Chrome:** **`sections/site-header.liquid`** — wishlist **`<span class="hdr-action hdr-action--deferred">`** with **`aria-label`**. **`sections/site-footer.liquid`** — wishlist **`<span class="f-link-deferred">`** + visually hidden “coming soon”.
- **PDP:** **`sections/main-product-foundation.liquid`** — **`Wishlist deferred`** button **`aria-disabled`** + **`aria-label`**.
- **CSS:** **`assets/theme.css`** — **`.hdr-action--deferred`**, **`.p-wish:disabled`**, **`.f-link-deferred`**, **`.visually-hidden`** (footer screen-reader hint).
- **Disclosures:** **no** account wishlist, **no** **`localStorage` / `sessionStorage`** persistence, **no** **`featured-product-grid`** / **Slice 14D** handle list edits, **no** **Slice 14B** department routing edits, **no** **`docs/catalogue`**, **no** **`artifacts/`** commit, **no** Shopify push/publish, **no** Admin edits, **no** **`Supplier verified`** / commercial approvals.

## Slice 13O docs-only Gadgetgyz Cable Tidies Set exact-item capture

- Product Owner accepted the Product Manager Slice 13O recommendation as a **docs-only** **`Gadgetgyz` `Cable Tidies Set`** exact-item proof update; documentation **committed** **`3bf260b830fcc4d4a55a7ed1314538ff748cb43f`** (`docs: record gadgetgyz cable tidies proof`). **No** product import, **no** additional preview staging, **no** Shopify Admin product edits, **no** collection/link edits, **no** theme push/publish, **no** live theme overwrite, **no** checkout/shipping/markets/tax/payment changes, **no** `Supplier verified` promotion, **no** final launch / final pricing / delivery-promise / product-claim approvals, **no** `Beauty & Hair` launch-taxonomy addition.
- **Product:** **`Cable Tidies Set`** — handle **`cable-tidies-set`** — storefront title **`Cable Tidies Set`** (**unchanged**) — collections **Office & Desk** / **Tech Accessories** — supplier path **`Gadgetgyz`** — **supplier/internal reference:** **PCBuilder LOCKDOWN 150mm Cable Ties (100 pcs) — Black** — **current status:** **`Supplier proof in progress` / preview-only staged** — **continue proof closure**; **do not** move to **`Supplier verified` review**; **do not** approve final pricing, launch readiness, delivery promises, or product claims.
- **Evidence recorded — exact Gadgetgyz match:** **PCBuilder LOCKDOWN 150mm Cable Ties (100 pcs) — Black** — SKU **`PCB-CT-25150`** — category **Cable Management** — stock signal **In Stock** — current price **R20.90** — material **94v-2 Certified Nylon 66** — quantity **100 pcs** — product dimensions **2.5 × 150 mm** — product weight **40 g** — additional dimensions **11 × 1 × 22 mm** — warranty **None**.
- **Handle/title:** preview handle **`cable-tidies-set`** and storefront title **`Cable Tidies Set`** **remain**; supplier/internal wording records **PCBuilder LOCKDOWN 150mm Cable Ties (100 pcs) — Black**.
- **Fulfilment (Gadgetgyz dropshipping workflow signals):** merchant may sell products on own store and **forward customer orders** to Gadgetgyz; Gadgetgyz ships **without Gadgetgyz logo / invoice**; **tracking status** available in workflow.
- **Shipping / delivery:** **shipping fee not closed**; delivery costs **excluded** from product prices, **shown separately at checkout**, and **may vary by order**; supplier states delivery target **within 2–5 working days** after order confirmation and payment unless otherwise stated — **no delivery promise approved** for Mzansi Select.
- **Returns / refunds:** returns **within 7 days** of product delivery; **wrong or damaged** items may be returned for **refund or replacement**; **Mzansi Select customer-facing return wording still needs approval**.
- **Image usage:** Gadgetgyz dropshipping page gives a **strong image-usage signal** (free images/descriptions; logo-free upload wording); **Product Owner must still explicitly accept** image-use evidence before launch use.
- **Commercial assessment (planning-only, product-only gross margin vs supplier price R20.90):** recommended internal selling range **R79–R119** — product-only gross margin at **R79** about **73.5%** — at **R99** about **78.9%** — at **R119** about **82.4%** — **final margin remains blocked** until shipping-cost handling is confirmed; **Deals** rail remains blocked unless **final proven margin** is **55%+**; **Best Sellers** remains blocked until actual sales evidence exists.
- **Sample / product quality (recommendation):** order or inspect **one sample** before **`Supplier verified` review** — check **pack quantity**, **actual tie dimensions**, **material feel**, **packaging condition**, **visual fit** for **Office & Desk** / **Tech Accessories**, whether **appearance matches supplier images**.
- **Unsupported-claims rule — allowed conservative copy:** *A simple set of black cable ties for organising desk, charger, computer, and small electronic cables.* **Avoid:** premium-quality, heavy-duty claims (unless PO accepts exact supplier wording), guaranteed-stock, fast-delivery, best-seller, prevents-damage, airflow-improvement, or warranty claims.
- **Remaining blockers:** exact shipping fee to a **South African** customer; **final shipping-cost handling model**; **final margin after shipping**; Product Owner acceptance of image usage evidence; sample/product quality proof; stock reliability confirmation close to launch; **final target selling price**; customer-facing return/refund wording; **final Product Owner commercial decision**.
- **`Supplier verified` review — products ready:** **none.**

## Slice 13K docs-only supplier proof closure update

- Product Owner accepted the Product Manager recommendation as a **docs-only** supplier proof closure update; documentation **committed** in git as `cb61ee28fbb3e575669236310d4e5b131fc697bf`. **No** product import, **no** additional preview staging, **no** Shopify Admin product edits, **no** collection/link edits, **no** theme push/publish, **no** live theme overwrite, **no** checkout/shipping/markets/tax/payment changes, **no** `Supplier verified` promotion, **no** final launch / final pricing / delivery-promise / product-claim approvals, **no** `Beauty & Hair` launch-taxonomy addition.
- **All five** preview-only staged handles may remain **visible** in preview; **none** is ready for **`Supplier verified` review** or **launch approval**; **do not reject** product concepts yet.
- **Neat Freak:** **FAQ `Supplier verified` blocker** remains on record; **`Slice 13M` removes Neat Freak from the launch `Supplier verified` path** — **benchmark/category fit only** — **not viable** unless **written** permission later (**Slice 13K** historical wording preserved for audit).
- **`Gadgetgyz` / `Acrylic Tablet or Phone Stand`:** **Slice 13L** posture unchanged — **`Supplier proof in progress`**, **still blocked** from `Supplier verified` — see **Slice 13L** section.
- **Per-handle decisions (`Slice 13K` baseline + `Slice 13M` supplier-path replacement):** preview-only staged; **none** **`Supplier verified`**; **do not reject** concepts:
  1. **`Sink Strainer — Stainless Steel`** (`sink-strainer-stainless-steel`) — **`Slice 13N`:** **no exact `ZA Dropshipping` match publicly surfaced** — **`Ecomstock` backup signal found** (SKU **`P5260S`**, **R30**, stainless steel, **0.02 kg**, return-policy signal ~**14 days** — **stock display inconsistent**/unconfirmed); **planning-only product-only margins** (**R30** cost): ~**62.0%** at sell **R79**, ~**69.7%** at sell **R99** — **final margin blocked until shipping-cost handling confirms** — **Recommendation:** prioritise **`Ecomstock`** backup closure **unless authenticated `ZA` app exposes a sharper match** — handle **`sink-strainer-stainless-steel` unchanged**.
  2. **`Compact Organiser Basket`** (`compact-organiser-basket`) — **`ZA` / `Ecomstock`:** **no verified public matches** (**`Slice 13N`**) — **`Supplier proof in progress`** — **`ZA`** authenticated search then **`Ecomstock`** backup**.
  3. **`Mini Plastic Divider Basket`** (`mini-plastic-divider-basket`) — **`ZA` / `Ecomstock`:** **same as Compact** — **`Supplier proof in progress`** (**`ZA` authenticated search then `Ecomstock` contingency**).
  4. **`Cable Tidies Set`** (`cable-tidies-set`) — **`Slice 13O`:** **`Gadgetgyz`** exact match **recorded docs-only** (**PCBuilder LOCKDOWN 150mm Cable Ties (100 pcs) — Black**, SKU **`PCB-CT-25150`**, **`R20.90`**) — **documentation git** **`3bf260b830fcc4d4a55a7ed1314538ff748cb43f`** — **`ZA Dropshipping` backup not found publicly** (**`Slice 13N`**) — **still** `Supplier proof in progress` / preview-only — **not** `Supplier verified` — proof-closure gates per **Slice 13O** section.
  5. **`Acrylic Tablet or Phone Stand`** (`acrylic-tablet-phone-stand`) — **`Gadgetgyz`** (**Tech Accessories**) — **`Slice 13L`** gates — **`Supplier proof in progress` / preview-only**.
- **`Slice 13M` readiness rule:** **No** preview-only product **`Supplier verified`**, **none** approved for **final pricing**, **launch readiness**, **delivery promises**, **product claims**.
- **Commercial / fulfilment / image-rights summary (`Slice 13M`):** **`Neat Freak` launch SV closure** redirects proof work to **`ZA Dropshipping`** / **`Ecomstock`** / **`Gadgetgyz`** lanes; **`Slice 13N`** records **`ZA`/`Ecomstock` factual capture** outcomes (below). Product copy stays **conservative and factual**.

## Slice 13L docs-only Gadgetgyz Acrylic Tablet or Phone Stand proof closure

- Product Owner accepted the Product Manager recommendation as a **docs-only** proof-closure update; documentation **committed** in git as `a87e8c6124d9708967dfbf2c6a208b601fe6f608`. **No** product import, **no** additional preview staging, **no** Shopify Admin product edits, **no** collection/link edits, **no** theme push/publish, **no** live theme overwrite, **no** checkout/shipping/markets/tax/payment changes, **no** `Supplier verified` promotion, **no** final launch / final pricing / delivery-promise / product-claim approvals, **no** `Beauty & Hair` launch-taxonomy addition.
- **Product:** **`Acrylic Tablet or Phone Stand`** — handle **`acrylic-tablet-phone-stand`** — supplier path **`Gadgetgyz`** — collections **Office & Desk** / **Tech Accessories** — **current status:** **`Supplier proof in progress` / preview-only staged** — **keep** at that status; **do not** advance to **`Supplier verified` review**; **do not** approve final pricing, launch readiness, delivery promises, or product claims.
- **Evidence recorded (public pages):** Exact product reference on **Gadgetgyz**; SKU / reference **DP0402**; price **R158.89**; weight **0.5 kg**; dimensions **90 x 145 x 145 mm**; Gadgetgyz product page **in-stock** signal; **Parrot Products** source page confirms SKU **DP0402**, **Acrylic Stands** category, in-stock status, and **total stock 49**; **Gadgetgyz dropshipping** workflow located; wording supports uploading products **without Gadgetgyz logo** and **forwarding orders** to Gadgetgyz after customer order; delivery terms state delivery costs are **excluded** from product prices, **shown separately at checkout**, and **may vary by order**; delivery target **2–5 working days** after order confirmation and payment unless otherwise stated; returns evidence: returns **within 7 days of delivery**; **wrong or damaged** items may be returned for **refund or replacement**.
- **Commercial assessment (planning-only, product-only gross margin vs supplier price R158.89):** Recommended internal selling range **R329–R379**; product-only gross margin at **R329** about **51.7%**; at **R349** about **54.5%**; at **R379** about **58.1%**; **final margin unproven** until exact shipping fee and shipping-cost handling are closed; **Deals** rail remains blocked unless **final proven margin** is **55%+**; **Best Sellers** remains blocked until actual sales evidence exists.
- **Image usage:** Dropshipping page gives a **strong image-usage signal**; **Product Owner must still explicitly accept** the evidence before supplier images are used for launch (Admin `image-permission-confirmed` remains a controlled decision).
- **Sample / product quality (recommendation):** Order or inspect **one sample** before **`Supplier verified` review** — check acrylic finish, packaging, stability, real phone/tablet fit, and match to public images.
- **Unsupported-claims rule — allowed conservative copy:** *A clear acrylic stand designed to hold a tablet or phone on a desk, counter, or work surface.* **Avoid:** best-seller, premium-quality, guaranteed-stock, fast-delivery, universal-compatibility, or warranty claims unless separately confirmed; **no** `Supplier verified` or launch-ready wording in customer-facing copy until gates close.
- **Remaining blockers:** Exact shipping fee to a **South African** customer; final shipping-cost handling model; **final margin after shipping**; sample/product quality proof; Product Owner acceptance of image-use evidence; stock reliability confirmation close to launch; final target selling price; customer-facing return/refund wording aligned to Mzansi Select support model; final Product Owner commercial decision.

## Slice 13M docs-only Neat Freak supplier-path replacement

- Product Owner accepted the Product Manager recommendation as a **docs-only** supplier-path replacement update. **No** product import, **no** Shopify Admin product edits, **no** additional preview staging, **no** collection/link edits, **no** theme push/publish, **no** live theme overwrite, **no** checkout/shipping/markets/tax/payment changes, **no** `Supplier verified` promotion, **no** final launch / final pricing / delivery-promise / product-claim approvals, **no** `Beauty & Hair` launch-taxonomy addition.
- **1. Neat Freak:** **Removed from launch `Supplier verified` path** — keep **only** as **category/catalogue benchmark** — **do not** treat as viable **`Supplier verified` launch path** unless **written** resale/dropship/direct-fulfilment permission is obtained **later** — **pause only** the Neat Freak **`Supplier verified`** path, **not** product concepts.
- **2. `ZA Dropshipping`:** **Primary replacement path** for **Home & Kitchen / storage-style** preview products — Shopify integration, local-stock positioning, **no-inventory model**, fulfilment workflow, sample-order signal — **blocked** by missing exact app/admin **product references**, **current costs**, **shipping fee**, **delivery model**, **image usage**, **sample proof**, and commercial closure.
- **3. `Ecomstock`:** **Backup path** — SA wholesale/retail category positioning — **blocked** by unclear **dropship workflow**, exact **product references**, **fulfilment process**, **shipping fee**, **image usage**, **sample proof**.
- **4. `Gadgetgyz`:** **Preferred replacement path** for **`Cable Tidies Set`** and **`Tech Accessories`** (**`Acrylic Tablet or Phone Stand`** continues **Gadgetgyz**) — **stronger public dropship workflow** than **Ecomstock** for those lanes — exact **`Cable Tidies Set`** Gadgetgyz item **recorded docs-only (`Slice 13O`, `PCB-CT-25150`)** — **`Supplier proof in progress`** continues until shipping/margin/image/sample/returns/commercial gates close.
- **Product-by-product routing (`Slice 13M` sequencing; `Slice 13N` factual outcomes in next section):** each row **stays `Supplier proof in progress` / preview-only staged**; **do not reject** concepts; **none** ready for **`Supplier verified` review**:
  1. **`Sink Strainer — Stainless Steel`** — **`ZA Dropshipping` first**, **`Ecomstock` backup** (**`Slice 13N`:** public **`ZA`** exact reference **not found**; **`Ecomstock`** backup candidate recorded).
  2. **`Compact Organiser Basket`** — **`ZA Dropshipping` first**, **`Ecomstock` backup** (**`Slice 13N`:** no verified public equivalents).
  3. **`Mini Plastic Divider Basket`** — **`ZA Dropshipping` first**, **`Ecomstock` backup** (**same as Compact** **`Slice 13N`** posture).
  4. **`Cable Tidies Set`** — **`Gadgetgyz`** — **`ZA Dropshipping` path excluded** (**`Slice 13N`**) — **`Slice 13O`** exact item **`PCB-CT-25150`** **docs committed** (`3bf260b830fcc4d4a55a7ed1314538ff748cb43f`); **product** proof closure continues.
  5. **`Acrylic Tablet or Phone Stand`** — continue **`Gadgetgyz`** (**Slice 13L** posture).
- **Remaining evidence blockers (replacement paths collectively):** exact replacement **URLs/references**; **supplier/source confirmation** per SKU; **app/admin access proof** where needed; **current product cost**; **shipping fee** or **delivery-cost model**; **delivery / SLA expectation**; **stock reliability**; **image usage permission**; **sample/product quality proof**; **return/refund practicality**; **final margin after shipping model**; **final Product Owner commercial decision**.
- **`Slice 13N` follow-on** (**committed** `421a5514cf33430e633763741c7a0e4bf054a969`; see **`Slice 13N`** section): **`ZA`** public catalogue reference capture **inconclusive**; next supplier proof options **`Slice 13N.2`** / **Ecomstock sink closure** / **`Slice 13L` acrylic gates**; **`Slice 13O` Cable Tidies** exact-item docs **committed** (`3bf260b830fcc4d4a55a7ed1314538ff748cb43f`).
- **`Gadgetgyz` Cable Tidies (`Slice 13O`):** exact match **PCBuilder LOCKDOWN…** / **`PCB-CT-25150`** **captured docs-only** — **`ZA Dropshipping` backup for `Cable Tidies Set` remains paused** (**`Slice 13N`**) — **`Supplier proof in progress`** until **Slice 13O** gates close.

## Slice 13N docs-only ZA Dropshipping product reference capture outcome

- **Git:** documentation **committed** as `421a5514cf33430e633763741c7a0e4bf054a969` (**`docs/project-control.md`** + companion catalogue files in that commit).
- Product Owner accepted documentation that **`Slice 13N`** is **docs-only inconclusive capture** absent **authenticated `ZA Dropshipping` app/admin**. **No** product import, **no** Shopify Admin edits, **no** preview staging, **no** collection/link churn, **no** theme pushes, **no** checkout/shipping/tax tweaks, **`Supplier verified`/launch/final-price/delivery/product-claim approvals** remain **disallowed**, **Beauty & Hair** taxonomy frozen.
- **Platform-level (`ZA Dropshipping`, public collateral):** still **logical primary replacement conduit** (**Slice 13M** rationale preserved) citing Shopify integration framing, perceived local-stock narrative, importer UX, merchant **no upfront inventory**, **Shopify ↔ ZAD order sync**, fulfilment **after shopper payment**. **Evidence gap:** catalogue-level **SKU-to-handle mapping** unseen from public vantage — **assume authenticated session required**. **Confidence risk:** Shopify App Store **reviews sparse / rating tepid**.
- **Per SKU outcomes (`Supplier proof in progress` persists; unchanged handles):**
  1. **`Sink Strainer — Stainless Steel` (`sink-strainer-stainless-steel`) — `ZA` exact match publicly:** **none** surfaced; **`Ecomstock`** candidate **Effective Anti-Clogging Bathroom Kitchen Sink Strainer** — SKU **`P5260S`**, **R30**, stainless steel mass **~0.02 kg**, return window signal **≈14 days** for qualifying retail purchasers — **stock UI inconsistent**/unknown reliability — **Recommendation:** pursue **`Ecomstock` Sink Strainer backup closure** pending Product Owner prioritisation versus **`Slice 13N.2` authenticated `ZA` lookup**.
  2. **`Compact Organiser Basket` (`compact-organiser-basket`) — `ZA` exact match publicly:** none; **`Ecomstock`**: unconfirmed equivalent — **`Supplier proof in progress`** — **Recommendation:** **`ZA`** authenticated sourcing first → **`Ecomstock`** contingency.
  3. **`Mini Plastic Divider Basket` (`mini-plastic-divider-basket`) — mirrors Compact** (**`ZA`/`Ecomstock`** still open publicly).
  4. **`Cable Tidies Set` (`cable-tidies-set`) — `ZA` backup match publicly:** **none** (**exclude from **`ZA Dropshipping`** track for now**) — **`Gadgetgyz` canonical path** — **`Slice 13O`:** **PCBuilder LOCKDOWN 150mm Cable Ties (100 pcs) — Black**, SKU **`PCB-CT-25150`** (**R20.90**, **In Stock**) — **documentation committed** (**`3bf260b830fcc4d4a55a7ed1314538ff748cb43f`**) — **`Supplier proof in progress`** / preview-only **unchanged**; proof-closure gates per **Slice 13O**.
  5. **`Acrylic Tablet or Phone Stand`:** unaffected detail-wise — maintain **`Gadgetgyz` / `Slice 13L`** gating (**separate blocker stack** remains valid).
- **Products ready for `Supplier verified` review:** **none** — every preview handle remains **`Supplier proof in progress` / preview-only staged** only (**no final pricing**, **delivery promises**, **product claims**, **launch approval**, or **`Supplier verified` promotion`).
- **Commercial planning knobs (`Ecomstock` sink strainer, product-only maths):** **`R30` buy at `R79` sell ⇒ ~62.0% product-only GM**; **`R30` vs `R99` sell ⇒ ~69.7%** — **`final landed margin unstated`** until courier/shipping policy locked — **no approved sell price**. **Rails:** **Deals** remain blocked until **`≥55% final proven blended margin`**; **Best Sellers** blocked until transactional sales proof exists (**Slice 13L**-aligned rule inherited).
- **Remaining blockers (union, non-exhaustive):** authenticated **`ZA Dropshipping`** app/admin **product references**; **`ZA`** product costs; **`ZA`** shipping fee or delivery-cost model; **`ZA`** delivery/SLA per product; **image usage permission** (**`ZA`** and **`Ecomstock`**); **sample/product quality proof**; **stock reliability** (**`ZA`**, **`Ecomstock`**); **final margin after shipping**; **Product Owner commercial decision**; **`Ecomstock`** dropship / customer-by-customer fulfilment workflow; **`Ecomstock`** shipping fee and delivery SLA; **`Slice 13O` `Gadgetgyz` `Cable Tidies Set` product-proof closure** (exact SKU **`PCB-CT-25150`** **documented git** **`3bf260b…`** — **operational**/commercial gates remain: shipping fee, landed margin, image PO, sample/QA, returns wording, stock near launch, final sell price, final PO commercial decision).
- **Next planning forks:** **1.** **`Slice 13N.2`** authenticated **`ZA Dropshipping`** app/admin reference capture — **2.** focused **`Ecomstock` Sink Strainer** backup proof closure — **3.** **`Slice 13L` Gadgetgyz acrylic gates** — **Product Owner sequencing** (**`Slice 13O` Cable Tidies** docs **closed** **`3bf260b…`**).

## Slice 13J preview-only storefront safety gap fix

- Bounded follow-up to Slice 13I (PASS WITH NOTES) before launch-readiness, final pricing, final product approval, supplier verification, or publish consideration.
- **Root cause of visible `R 0`:** Theme previously relied on substring tag tokens (`|preview-only|`). Any Admin tag spelling drift, spacing variant, or missing tag while the variant remained at `0.00` still rendered `money_without_trailing_zeros` output (`R 0`). Slice 13J normalises tags per token, adds a secondary guard for non-positive price when vendor is `Mzansi Select Preview`, and keeps placeholder copy as the exact string `Price to be confirmed`.
- **Theme changes (git commit `cef5713412ef218bee4af56ae9767c78d6304859`):** `layout/theme.liquid`, `snippets/preview-route-body-class.liquid`, `snippets/live-product-card.liquid`, `sections/main-product-foundation.liquid`, `sections/trust-bar.liquid`, `sections/announcement-topbar.liquid`, `sections/site-footer.liquid`, `assets/theme.css`, plus LLD / catalogue / project-control documentation in that same commit.
- **Delivery:** PDPs for `preview-only` products show exactly `Delivery details to be confirmed before launch.` as a visible paragraph.
- **Global marketing copy:** Announcement topbar, trust bar, and footer brand description gain cautious alternates only when `body.preview-route-cautious` applies (preview-only PDP, or collection first page containing a preview-only product). Other routes unchanged.
- **Imagery:** `preview-only` products render theme placeholder images unless `image-permission-confirmed` is present; no new supplier assets added in-repo.
- **Explicit exclusions:** No publish, no live theme overwrite, no checkout/shipping/markets/tax/payment edits, no Supplier verified promotion, no final approvals, no Beauty & Hair taxonomy change, no `artifacts/` commit.

## Slice 13I controlled Shopify Admin preview-only product staging

- Product Owner approved a **controlled** Shopify Admin write-action pass for **exactly five** preview-only products on `dropshippoc.myshopify.com` (no theme publish, no live theme overwrite).
- **Preview theme** validated before writes: `151207542967` / Mzansi Select MVP Preview — `unpublished`. **Live theme** validated: `148914077879` / Horizon — `live`.
- Repo **HEAD** matched Slice 13G commit `0b594c40a97bca29481e947092d4854f4910b9a4` at run start.
- **Products created** (none of the five handles existed before; all **created** via Admin GraphQL `productCreate`, then `publishablePublish` to **Online Store**):
  1. `Sink Strainer — Stainless Steel` — handle `sink-strainer-stainless-steel` — collections: **Kitchen & Storage** — tags: `preview-only`, `price-to-confirm`, `supplier-proof-in-progress`, `local-supplier-candidate`, `supplier-neat-freak`
  2. `Compact Organiser Basket` — `compact-organiser-basket` — **Home & Living**, **Kitchen & Storage** — same tag set
  3. `Mini Plastic Divider Basket` — `mini-plastic-divider-basket` — **Kitchen & Storage**, **Office & Desk** — same tag set
  4. `Cable Tidies Set` — `cable-tidies-set` — **Office & Desk**, **Tech Accessories** — same tag set
  5. `Acrylic Tablet or Phone Stand` — `acrylic-tablet-phone-stand` — **Office & Desk**, **Tech Accessories** — tags include `supplier-gadgetgyz` instead of `supplier-neat-freak`
- **Vendor / type:** `Mzansi Select Preview` / `Preview Catalogue` (organisation only).
- **Variants:** price `0.00`, compare-at blank, inventory quantity `0`, inventory policy `DENY` (continue selling when out of stock **false**), **no** product media.
- **Collections:** only existing launch collections above — **no** create/delete/rename/restructure.
- **Evidence folder:** `artifacts/platform/slice-13i-preview-only-product-staging-20260503-003149` (matrix, CLI preflight, GraphQL validation output).
- **Preview URL checks (unauthenticated):** listed PDP and collection `preview_theme_id` URLs return **HTTP 200** but **storefront password** HTML — visual validation of placeholder price copy, delivery line, and purchase-disabled state **blocked** without authenticated preview; do not bypass password protection.
- **Rollback / removal plan:** set product to Draft or Archive; unpublish from Online Store; remove from collections if needed; delete products only with Product Owner approval; record rollback in this tracker; do not change theme code for rollback.
- **Safety confirmations:** no publish of theme, no live theme overwrite, no checkout/shipping/markets/tax/payment settings edit, no discounts, no compare-at, no supplier images, no `Supplier verified` promotion, no final launch/pricing/delivery/claims approval, no Beauty & Hair taxonomy change, no Jewellery organiser final replacement approval, no credentials or tokens written into repo docs.

## Slice 13G preview-only product staging safety controls

- Product Owner accepted the Product Manager recommendation to prepare preview-only product safety controls before any actual preview staging begins.
- The local theme now supports a minimal tag-based safety convention for later preview-store visibility testing:
  - `preview-only`
  - `price-to-confirm`
- If either tag is present, collection cards and PDP price treatment now shows `Price to be confirmed` instead of presenting live variant pricing as final.
- If `preview-only` is present, cards and PDPs now surface `Preview item`, PDP delivery wording stays `Delivery details to be confirmed before launch.`, and sale / compare-at / discount treatment is suppressed.
- Preview-only safety controls do not approve actual preview staging, product import, `Supplier verified` movement, final pricing, delivery promises, supplier-backed claims, or launch approval.
- Slice 12K remains paused/deferred, Shopify Admin automation remains paused/deferred, no Shopify write action occurred in this pass, and `artifacts/` remains untracked.

## Slice 13F preview-staging preparation pack

- Product Owner accepted the Product Manager Slice 13F recommendation as preview-staging preparation only.
- Five prepared products are now documented with proposed handles, collection assignments, conservative preview copy, placeholder-image approach, hidden / placeholder price guidance, cautious delivery wording, and blocker lists: `Sink Strainer - Stainless Steel`, `Compact Organiser Basket`, `Mini Plastic Divider Basket`, `Cable Tidies Set`, and `Acrylic Tablet or Phone Stand`.
- All five prepared products remain `Supplier proof in progress` only.
- Preview staged, if later approved, means visible in the preview store only and does not mean `Supplier verified`, launch approved, final pricing approved, supplier approved, delivery approved, or claims approved.
- No actual preview staging is approved in this pass.
- Product copy must stay factual and conservative, and no best-seller, premium-quality, guaranteed-stock, delivery-promise, or unsupported supplier-backed claim is approved.
- Price display must remain hidden or placeholder-only until Product Owner approves final pricing and shipping-cost handling.
- Preview staging remains blocked/deferred, Slice 12K remains paused/deferred, no Shopify write action occurred in this pass, and `artifacts/` remains untracked.

## Slice 13E supplier proof gap closure

- Product Owner accepted the Product Manager Slice 13E recommendation as a docs-only supplier proof gap-closure update.
- `Compact Organiser Basket`, `2-Layer Carry Handle Container 3.8L`, `Hook-over Door Basket`, `Mini Plastic Divider Basket`, `Sink Strainer, stainless steel`, `Velcro Cable Tidies` / `Neat Cables Label Pack`, and `Acrylic Tablet or Phone Stand` all remain `Supplier proof in progress` only.
- No product is ready for `Supplier verified` review in this pass.
- Preview-staging preparation is recorded only for `Sink Strainer, stainless steel`, `Compact Organiser Basket`, `Mini Plastic Divider Basket`, `Velcro Cable Tidies` / `Neat Cables Label Pack`, and `Acrylic Tablet or Phone Stand`; no actual preview staging is approved.
- `2-Layer Carry Handle Container 3.8L` and `Hook-over Door Basket` remain valid candidates, but lower-priority for preview-staging preparation because dimensions, image permission, delivery handling, and price positioning still need stronger closure first.
- `Cable Organiser / Cable Management item` remains paused unless narrowed to a specific lower-cost item or wholesale pricing is confirmed.
- Product copy may be written only as factual, conservative preview copy; do not approve fast-delivery promises, best-seller claims, premium-quality claims, guaranteed-stock claims, or supplier-backed claims unless evidence confirms them.
- Preview staging remains blocked/deferred, Slice 12K remains paused/deferred, no Shopify write action occurred in this pass, and `artifacts/` remains untracked.

## Slice 13D local supplier proof pack

- Product Owner accepted the Product Manager Slice 13D recommendation as an evidence-capture update only.
- `Compact Organiser Basket`, `2-Layer Carry Handle Container 3.8L`, `Hook-over Door Basket`, `Mini Plastic Divider Basket`, `Sink Strainer, stainless steel`, `Velcro Cable Tidies` / `Neat Cables Label Pack`, and `Acrylic Tablet or Phone Stand` are now `Supplier proof in progress` only.
- `Cable Organiser / Cable Management item` is paused because the current definition is too broad and the visible public price signal would likely require a `R599+` sell price unless a narrower or lower-cost exact product is confirmed.
- Product-only margin estimates in this pass are planning signals only; they assume shipping is charged separately to the customer or otherwise recovered and do not approve final pricing.
- `Supplier proof in progress` does not mean `Supplier verified`, launch approved, import approved, final-priced, delivery-approved, or claims-approved.
- Preview staging remains blocked/deferred, Slice 12K remains paused/deferred, no Shopify write action occurred in this pass, and `artifacts/` remains untracked.

## Slice 13C local supplier preview product shortlist

- Slice 12J is the last accepted and committed implementation slice at `263e60f1588b03f4120121007411c701d342d9e4`.
- Product Owner accepted the Product Manager recommendation for a local-first South African supplier strategy.
- The local supplier shortlist is now documented in [docs/catalogue/local-supplier-sourcing-matrix-v1.md](/d:/dev/mzansi-select-shopify/docs/catalogue/local-supplier-sourcing-matrix-v1.md).
- Supplier weighting is now recorded: `Neat Freak` is the strongest current category fit, `Gadgetgyz` is the strongest current `Tech Accessories` fit, and `ZA Dropshipping` is useful as a Shopify/local-stock test path but still requires app/admin proof before reliance.
- All shortlisted products remain `Candidate` only in this pass.
- `ZA Dropshipping` shortlist slots remain pending app/admin review.
- Slice 13D — Local supplier proof pack for first preview shortlist is the next recommended proof-pack slice.
- No Shopify write action occurred in this reconciliation pass.
- `artifacts/` remains untracked and must not be committed.

## Slice 12A / 12B clickable inventory backlog (docs-only)

- Slice 12A site-wide clickable items and fields inventory is accepted as PASS WITH NOTES.
- Slice 12B records the clickable inventory backlog only (documentation-only). No implementation is approved in Slice 12B.
- Accepted findings to carry forward:
  - Several site-wide links use hash-only anchors without matching targets (dead anchors).
  - Some anchors exist only on specific page templates, making them unreliable from global nav/footer contexts.
  - Footer Terms link mismatch: `#terms-conditions` vs page anchor `id="terms"` (must be resolved before publish readiness).
  - Product cards, PDP Add to Cart, cart checkout, cart quantity/remove, wishlist, newsletter, social links, and search/category filtering remain shells or deferred.
  - Department navigation needs an approved destination strategy and likely interaction wiring.
  - Contact/About route blocker is treated as previously handled and was not modified in Slice 12A/12B.
- Launch blockers (wiring/backlog):
  - Navigation correctness for primary/footer links.
  - Department menu behavior.
  - PDP Add to Cart flow.
  - Cart checkout path and cart item controls (quantity/remove).
- Scope confirmations (still out of scope for Slice 12B):
  - No theme/code changes
  - No Shopify push/publish/live overwrite
  - No product import
  - No checkout customization
  - No dynamic catalogue wiring
  - No Contact/About remediation
  - No final legal publication
- Next Product Owner decision pending: approve a dedicated wiring/backlog implementation slice and confirm which items are required before product import vs before publish.

## Slice 12C navigation and page-link correctness foundation (bounded fix)

Objective:

- Fix primary and footer navigation targets so they reliably route to valid Shopify routes, valid page resources, or valid page-specific anchors routed via the correct page.

Corrections implemented in this pass:

- Converted global hash-only help/policy anchors to page-routed anchors where the anchor exists:
  - `#shipping` -> `/pages/about#shipping`
  - `#returns` -> `/pages/about#returns`
  - `#faq` -> `/pages/about#faq`
  - `#about-us` -> `/pages/about#about-us`
  - `#privacy-policy` -> `/pages/about#privacy-policy`
- Resolved the Terms anchor mismatch:
  - `#terms-conditions` -> `/pages/about#terms`
- Converted Contact and Track Order footer links to route to the known support page resource:
  - `#contact` / `#track-order` -> `/pages/contact#contact`
- Department menu and key browse links now route to `{{ routes.all_products_collection_url }}` as a safe destination until a collection strategy is approved.
- Deals link routes to the homepage deals section when present:
  - `#deals` -> `{{ routes.root_url }}#deals`

Deferred placeholders left unchanged (explicitly deferred; not silently wired):

- Social links (`#facebook`, `#instagram`, `#tiktok`, `#youtube`)
- Careers (`#careers`) and Affiliates (`#affiliates`)
- Wishlist and Saved Addresses anchors (`#wishlist`, `#saved-addresses`)

Scope confirmations (still out of scope for Slice 12C):

- No product import
- No Shopify push/publish/live overwrite
- No checkout customization
- No dynamic catalogue wiring
- No PDP Add to Cart wiring
- No cart checkout/quantity/remove wiring
- No final legal publication

## Slice 12D department menu and collection destination strategy (docs-only)

Objective:

- Define a safe staged destination rule for department navigation before any cart wiring, PDP Add to Cart wiring, product import, Shopify push, or publish action.

Recommended staged strategy:

- Temporary safe state before collections/products exist:
  - Keep the four launch departments routed to `{{ routes.all_products_collection_url }}`.
  - Keep the three expansion-ready departments deferred from launch exposure; they should not become active launch destinations yet.
  - Treat empty collection states as acceptable for unpublished preview or internal QA only, not as the preferred live destination for primary department navigation.
- Launch-ready destination state once Shopify collections exist:
  - Move only the accepted launch departments to dedicated collection URLs:
    - `/collections/home-living`
    - `/collections/kitchen-storage`
    - `/collections/office-desk`
    - `/collections/tech-accessories`
  - Switch those links only after the Shopify Admin setup exists, the handles are stable, the collections are visible to Online Store, and the Product Owner confirms they are ready to replace the temporary `all-products` routing.
- Expansion-ready destination state:
  - Keep `Garden & Outdoor`, `Bath & Bedroom`, and `Cleaning & Laundry` hidden/deferred as launch destinations.
  - Proposed future handles may be reserved for later use, but they should not be exposed in primary navigation or the category strip until a later approved expansion pass.

Proposed collection handles:

- Launch:
  - `home-living`
  - `kitchen-storage`
  - `office-desk`
  - `tech-accessories`
- Expansion-ready only:
  - `garden-outdoor`
  - `bath-bedroom`
  - `cleaning-laundry`

Required Shopify store-content setup before link activation:

- Create the four launch collections in Shopify Admin with the approved handles.
- Confirm each collection is assigned to the Online Store sales channel before any navigation switch.
- Reuse the approved collection template foundation; do not redesign collection layouts.
- Prepare collection intro copy, imagery, and SEO metadata only within the approved brand/content direction.
- Do not expose department links to empty dedicated collections for live launch navigation until the Product Owner approves the destination switch.

Risk summary captured in this pass:

- If all launch departments keep landing on `all-products`, browse intent stays safe but department relevance remains diluted and navigation QA stays in a temporary fallback state.
- If dedicated department links are activated before real collections/content exist, customers may land on sparse or empty collection pages that undermine launch confidence.
- No code changes are approved in Slice 12D; this pass records the rule set only.

## Slice 12E launch collection setup content plan (docs-only)

Objective:

- Record the approved Shopify Admin collection-content plan for the four launch collections before any collection creation, product import, or navigation switch is approved.

Content-planning outcome recorded in this pass:

- The four approved launch collections now have named handles, intro copy, SEO title targets, and SEO meta-description targets recorded in the docs.
- The current department-link fallback remains `{{ routes.all_products_collection_url }}` until a later approved setup pass creates the launch collections and the Product Owner approves the switch.
- Empty collections remain acceptable for unpublished preview review only.
- Expansion collections remain deferred from launch setup and launch navigation.
- No Shopify Admin creation, no product import, and no code changes are approved in Slice 12E.

## Slice 12F launch collection Admin setup readiness check (readiness-only)

Objective:

- Confirm the safest Shopify Admin path for creating or verifying the four approved launch collections before any collection creation, link switching, product import, Shopify push, or publish action.

Reference doc reviewed:

- `docs/content/mzansi-select-launch-collections-v1.md`

Approved collection handles reviewed:

- `home-living`
- `kitchen-storage`
- `office-desk`
- `tech-accessories`

Read-only findings captured in this pass:

- Shopify CLI access was available in read-only mode.
- Preview theme `151207542967` remains present as `unpublished`.
- The storefront root is password protected, so direct live exposure risk is reduced behind the password page.
- The four approved launch collections already exist in Shopify Admin with matching titles and matching search-engine listing handles:
  - `Home & Living` -> `home-living`
  - `Kitchen & Storage` -> `kitchen-storage`
  - `Office & Desk` -> `office-desk`
  - `Tech Accessories` -> `tech-accessories`
- All four launch collections are currently included on the `Online Store` sales channel.
- Current collection density remains thin:
  - `Home & Living` -> `1` product
  - `Kitchen & Storage` -> `4` products
  - `Office & Desk` -> `1` product
  - `Tech Accessories` -> `1` product

Live exposure risk assessment:

- Because the collections are already included on `Online Store`, direct collection URLs exist and can be reached if a visitor has storefront access.
- Because the storefront password page is active, general-public exposure is reduced, but the collections still exist behind the password and remain a thin-page risk for any authenticated preview or password-enabled reviewer traffic.

Password-gate confirmation result:

- Confirmed ON from the storefront root response; the store currently serves a password page to unauthenticated visitors.

Empty collection URL safety result:

- Empty collections are acceptable only for unpublished preview review.
- For live launch-navigation purposes, empty or thin collection pages are still not considered safe destinations.
- In the current store state, the collections are not empty, but three of the four launch collections are still too thin to recommend link switching away from `all-products`.

Recommended safest Admin setup route:

- Do not create new launch collections now because the approved four launch collections already exist.
- Keep the current department links routed to `{{ routes.all_products_collection_url }}`.
- Treat the safest next Admin route as read-only verification plus later controlled content/product-density improvement before any Product Owner-approved link switch.
- If a later Admin pass is approved, prefer verifying or refining the existing collections rather than recreating them.

Evidence required before collection creation or link switching approval:

- Confirm the existing collection titles, handles, and SEO content still match the approved Slice 12E content plan.
- Capture unpublished-preview evidence that each collection route returns the expected collection page state.
- Confirm acceptable product density and merchandising quality for each launch collection.
- Confirm the Product Owner accepts any remaining thin-page risk before switching department links.
- Keep product import/readiness, supplier readiness, and link-switch approval as separate gated decisions.

Safety confirmations:

- No Shopify Admin collection creation
- No theme/code change
- No product import
- No Shopify push
- No publish
- No live overwrite
- No checkout customization
- No dynamic catalogue wiring
- No PDP Add to Cart wiring
- No cart wiring
- No final legal publication
- `artifacts/` remains untracked/uncommitted

Evidence folder path:

- `artifacts/platform/slice-12f-launch-collection-admin-readiness-20260429-172417`

## Slice 12G launch collection preview evidence and density review (read-only)

Objective:

- Capture unpublished-preview route evidence for the four approved launch collections and assess whether any collection is suitable for future department link-switch consideration.

Slice 12F commit hash reviewed:

- `621eeb08923120b6f8c33213c2b98159fce18ede`

Collection routes reviewed:

- `https://dropshippoc.myshopify.com/collections/home-living?preview_theme_id=151207542967`
- `https://dropshippoc.myshopify.com/collections/kitchen-storage?preview_theme_id=151207542967`
- `https://dropshippoc.myshopify.com/collections/office-desk?preview_theme_id=151207542967`
- `https://dropshippoc.myshopify.com/collections/tech-accessories?preview_theme_id=151207542967`

Per-collection evidence summary:

- `Home & Living`
  - Route result: reachable in authenticated unpublished preview with HTTP `200`
  - Visible title: `Everyday Essentials`
  - Handle evidence: SEO title confirms `Home & Living`; preview URL resolved to `/collections/home-living`
  - Rough preview card count: `8` visible `.product-card` elements
  - Admin density from Slice 12F: `1` product (`thin`)
  - Preview acceptability: acceptable for preview-route evidence only
  - Future link-switch consideration: not ready
  - Notes: the preview route renders, but the visible heading remains generic rather than department-specific and the Admin collection remains thin
- `Kitchen & Storage`
  - Route result: reachable in authenticated unpublished preview with HTTP `200`
  - Visible title: `Everyday Essentials`
  - Handle evidence: SEO title confirms `Kitchen & Storage`; preview URL resolved to `/collections/kitchen-storage`
  - Rough preview card count: `8` visible `.product-card` elements
  - Admin density from Slice 12F: `4` products (`some content`, still below a strong navigation-ready threshold)
  - Preview acceptability: acceptable for preview-route evidence only
  - Future link-switch consideration: not ready
  - Notes: this is the strongest current collection, but the preview still presents generic static-safe collection content and the Admin density is not yet strong enough for a confident department-link switch
- `Office & Desk`
  - Route result: reachable in authenticated unpublished preview with HTTP `200`
  - Visible title: `Everyday Essentials`
  - Handle evidence: SEO title confirms `Office & Desk`; preview URL resolved to `/collections/office-desk`
  - Rough preview card count: `8` visible `.product-card` elements
  - Admin density from Slice 12F: `1` product (`thin`)
  - Preview acceptability: acceptable for preview-route evidence only
  - Future link-switch consideration: not ready
  - Notes: preview rendering is available, but the collection is still thin and the page does not yet present a department-specific collection title/state
- `Tech Accessories`
  - Route result: reachable in authenticated unpublished preview with HTTP `200`
  - Visible title: `Everyday Essentials`
  - Handle evidence: SEO title confirms `Tech Accessories`; preview URL resolved to `/collections/tech-accessories`
  - Rough preview card count: `8` visible `.product-card` elements
  - Admin density from Slice 12F: `1` product (`thin`)
  - Preview acceptability: acceptable for preview-route evidence only
  - Future link-switch consideration: not ready
  - Notes: preview rendering is available, but the collection is still thin and the page does not yet present a department-specific collection title/state

Route-evidence interpretation captured in this pass:

- All four collection routes are reachable in the unpublished preview theme and can be reviewed safely in a read-only workflow.
- The preview theme currently renders a generic static-safe collection heading (`Everyday Essentials`) and a repeated placeholder-style product-card set across the four routes, so the visible preview card count is not treated as proof of real collection density.
- SEO page titles do reflect the specific collection names, which helps confirm the handles are wired correctly at the route level.
- Meta descriptions could not be confirmed from the rendered page in this pass.

Future link-switch consideration result:

- No launch collection is ready for future department link-switch consideration in this pass.
- `Kitchen & Storage` is the strongest current candidate because it has the highest confirmed Admin count (`4`), but it still falls short of a confident navigation-ready density threshold and still renders through the generic static-safe collection presentation.
- The current safe rule remains: keep launch department links routed to `{{ routes.all_products_collection_url }}` until Product Owner approval follows stronger collection density, better department-specific collection presentation, and accepted preview evidence.

Safety confirmations:

- No Shopify Admin collection creation
- No collection edits
- No department link switching
- No product import
- No Shopify push
- No publish
- No live overwrite
- No checkout customization
- No dynamic catalogue wiring
- No PDP Add to Cart wiring
- No cart wiring
- No final legal publication
- `artifacts/` remains untracked/uncommitted

Evidence folder path:

- `artifacts/platform/slice-12g-launch-collection-preview-density-20260429-173855`

## Slice 12H collection readiness gap plan update (docs-only)

Objective:

- Record the approved launch-collection readiness gaps, density gates, merchandising expectations, and next-work priorities before any collection edits, department link switching, product import, or Shopify action is approved.

Slice 12G commit hash reviewed:

- `000330334ea9a84f0392ff9e68a779f2c2bebb18`

Current collection readiness recorded in this pass:

- `Home & Living`: route evidence `HTTP 200`; Admin density `1`; current status `not ready`
- `Kitchen & Storage`: route evidence `HTTP 200`; Admin density `4`; current status `closest to ready`, but still needs merchandising/content review
- `Office & Desk`: route evidence `HTTP 200`; Admin density `1`; current status `not ready`
- `Tech Accessories`: route evidence `HTTP 200`; Admin density `1`; current status `not ready`

Approved collection-readiness rules recorded in this pass:

- Minimum preview threshold: `3` products per launch collection
- Preferred public launch threshold: `5` products per launch collection
- No department link switching while any launch collection has only `1` product
- Preferred launch density targets:
  - `Home & Living`: `5-6` products
  - `Kitchen & Storage`: `6-7` products
  - `Office & Desk`: `5-6` products
  - `Tech Accessories`: `6-7` products

Visible collection-content expectation recorded in this pass:

- The generic visible heading `Everyday Essentials` is acceptable as temporary preview/template evidence only.
- Before department link switching, each collection page must clearly show its actual department name:
  - `Home & Living`
  - `Kitchen & Storage`
  - `Office & Desk`
  - `Tech Accessories`
- If `Everyday Essentials` remains as a shared design phrase, the department name must still be visible and clear on the collection page.

Merchandising quality expectations recorded in this pass:

- Products must match the department intent.
- No filler products should be used to reach density thresholds.
- Product cards must have usable titles, images, and prices before launch-navigation exposure is considered.
- `Best Sellers` remains blocked until actual sales evidence exists.
- `Deals` should be used only where margin supports a genuine discount.
- `New In` / `New Arrivals` may be used for launch products.
- `Featured` / `Trending` / `Seasonal` remain merchandising rails, not departments.
- `Mother's Day` / `Winter-ready` positioning may be used only where product fit, timing, shipping expectation, and margin support it.
- Seasonal copy is campaign/merchandising copy, not permanent taxonomy.

Recommended next work focus recorded in this pass:

1. Product readiness / supplier verification
2. Collection content / density
3. Collection template presentation
4. PDP / cart wiring after credible product coverage exists

Safety confirmations:

- No collection edits
- No department link switching
- No product import
- No Shopify push
- No publish
- No live overwrite
- No checkout customization
- No dynamic catalogue wiring
- No PDP Add to Cart wiring
- No cart wiring
- No final legal publication
- No theme/code changes
- `artifacts/` remains untracked/uncommitted

## Slice 11K collection-density product allocation and replacement shortlist update (docs-only)

Objective:

- Record the paper-density allocation posture of the current `25`-product plan and capture the approved replacement shortlist directions without claiming new supplier, cost, margin, shipping, image, or import readiness.

Slice 12H commit hash reviewed:

- `7d60b983fc11fdd6b758a50cf09cf056628ee28b`

Collection-density summary recorded in this pass:

- `Home & Living`: target `5-6`; current plan count `6`
- `Kitchen & Storage`: target `6-7`; current plan count `7`
- `Office & Desk`: target `5-6`; current plan count `6`
- `Tech Accessories`: target `6-7`; current plan count `6`

Main conclusion recorded in this pass:

- The `25`-product plan meets preferred launch density targets on paper.
- The real readiness gap remains verified product quality, supplier evidence, shipping, margin, and collection fit.

First-six allocation decisions recorded in this pass:

- `Desk Cable Clips Set`: continue
- `Cable Management Sleeve`: replacement-watch
- `Screen Cleaning Kit`: continue
- `Adhesive Wall Hooks Pack`: replace
- `Sink Drain Basket / Strainer`: replacement-watch
- `Phone / Tablet Desk Stand`: continue

Replacement shortlist directions recorded in this pass:

- `Adhesive Wall Hooks Pack` -> `Jewellery / accessory organiser` or `drawer organiser tray`
- `Cable Management Sleeve` -> `reusable cable ties / velcro cable straps` or `desk mat / large mouse pad`
- `Sink Drain Basket / Strainer` -> `silicone dish drying mat` or `thermal lunch bag`
- Preferred immediate replacement direction: `Adhesive Wall Hooks Pack` -> `Jewellery / accessory organiser`
- Reason recorded: better `Home & Living` fit, stronger `Mother's Day` / giftable angle, lower claim risk, and keeps collection density intact

Planning-only controls preserved in this pass:

- Replacement candidates are planning-only.
- No replacement candidate may be treated as supplier-verified, cost-verified, margin-verified, shipping-verified, image-ready, or import-ready unless existing supplier evidence already supports it.
- All products remain `Candidate` unless existing supplier evidence supports movement.
- Department link switching remains blocked until collection density, product quality, and visible presentation gates are met.
- `Best Sellers` remains blocked until real sales evidence exists.
- `Deals` still requires genuine margin support.

Safety confirmations:

- No collection edits
- No department link switching
- No product import
- No Shopify push
- No publish
- No live overwrite
- No checkout customization
- No dynamic catalogue wiring
- No PDP Add to Cart wiring
- No cart wiring
- No final legal publication
- No theme/code changes
- `artifacts/` remains untracked/uncommitted

## Slice 11L replacement candidate supplier evidence pass (evidence-only)

Objective:

- Evaluate the preferred replacement direction `Jewellery / accessory organiser` as evidence-only follow-up for the approved `Adhesive Wall Hooks Pack` replacement plan.

Slice 11K commit hash reviewed:

- `285e1b63da0d3361b40ce127e2a8c2877b45bec9`

Evidence folder path:

- `artifacts/supplier-verification/slice-11l/`

Replacement candidate supplier evidence outcome recorded in this pass:

- `DSers` query attempts for `jewelry organizer box`, `jewellery organizer tray`, and `accessory organizer tray` redirected to the `DSers` login page, so direct DSers comparison evidence remains missing in this pass.
- `CJdropshipping` yielded a directly captured product page for `Transparent Jewelry Storage Box Jewelry Organizer Dustproof Display`.
- Captured CJ reference details include `SKU: CJCC119463801AZ`, unit price `$3.34`, material `Plastic`, storage use `Jewelry`, and page text describing `3 layers of jewelry storage + 2 velvet tray`.
- Public AliExpress comparison evidence was captured for `10 Slots ( Adjustable) Plastic Jewelry Box Storage Case...`, including visible South Africa shipping `ZAR66.42`, delivery estimate `May 12 - 21`, and visible item price `ZAR15.65`.
- The public AliExpress comparison route therefore surfaced a visible comparison landed-cost signal of `ZAR82.07`, but the preferred supplier route remains commercially incomplete because CJ South Africa shipping was not captured in this pass.

Recommendation recorded in this pass:

- `Jewellery / accessory organiser` should replace `Adhesive Wall Hooks Pack` as the preferred `Candidate` direction in planning terms.
- The replacement candidate must remain `Candidate`; it must not move to `Supplier verified` in this pass.
- The replacement direction appears to offer better `Home & Living` fit and lower adhesive-performance claim risk than `Adhesive Wall Hooks Pack`.

Missing evidence still blocking readiness:

- Logged-in `DSers` comparison evidence
- CJ South Africa shipping option confirmation
- CJ shipping cost and landed-cost closure
- Final target selling price band and gross-margin closure for the preferred supplier route
- Exact storefront image suitability review
- Final variant and quality-risk closure for the chosen organiser style

Safety confirmations:

- No collection edits
- No department link switching
- No product import
- No Shopify push
- No publish
- No live overwrite
- No checkout customization
- No dynamic catalogue wiring
- No PDP Add to Cart wiring
- No cart wiring
- No final legal publication
- No theme/code changes
- No supplier credential storage
- `artifacts/` remains untracked/uncommitted

## Slice 11M replacement candidate commercial readiness plan (docs-only)

Objective:

- Define what is still required before `Jewellery / accessory organiser` can formally replace `Adhesive Wall Hooks Pack` in the `25`-product launch catalogue.

Slice 11L commit hash reviewed:

- `4de4efc4995578cd9d3c34f6aca78a4f1f184ab4`

Commercial-readiness recommendation recorded in this pass:

- `Jewellery / accessory organiser` should now be recorded as the preferred `Candidate` replacement direction in the catalogue matrix.
- `Adhesive Wall Hooks Pack` should move out of active first-six verification into replacement-directed / deferred status.
- No product is promoted to `Supplier verified` in this pass.

Planning target selling price band recorded in this pass:

- `Jewellery / accessory organiser`: planning assumption only `R159-R229`
- Basis: the captured public comparison landed-cost signal of `ZAR82.07` indicates that the earlier low-ticket wall-hooks band is no longer a credible working assumption for the preferred replacement direction.
- This is a planning assumption only, not approved live pricing, and it remains pending preferred supplier and ZA shipping confirmation.

Required landed-cost and margin gates before formal replacement approval:

- Confirm supplier item cost on the preferred route
- Confirm South Africa shipping option and shipping cost on the preferred route
- Confirm estimated landed cost
- Select the preferred supplier route (`CJdropshipping`, `DSers`, or validated comparison alternative)
- Confirm a target selling price band
- Confirm estimated gross margin percentage and gross-margin amount after supplier plus shipping cost
- Require gross margin to meet the existing planning gates: minimum `45%`, target `50%+`
- Require landed cost to stay within the existing preference gate: `<=55%` of target selling price
- Require the applicable absolute-margin gate to be met:
  - minimum `R45` for products under `R150`
  - minimum `R70` for products at `R150+`
- Reject the route if shipping makes the offer uncompetitive, margin too thin, delivery too slow for the current planning expectation, or the product becomes trust-unsafe on quality/image/claims

Missing evidence still blocking formal replacement:

- CJ South Africa shipping option and cost
- `DSers` / AliExpress comparison closure where available
- Preferred supplier selection
- Final variant / size / compartment-fit confirmation
- Storefront image suitability review
- Claim / compliance risk review
- Return / quality risk review

Safety confirmations:

- No collection edits
- No department link switching
- No product import
- No Shopify push
- No publish
- No live overwrite
- No checkout customization
- No dynamic catalogue wiring
- No PDP Add to Cart wiring
- No cart wiring
- No final legal publication
- No theme/code changes
- No supplier credential storage
- `artifacts/` remains untracked/uncommitted

## Slice 11N Jewellery / accessory organiser supplier evidence closure (evidence-only)

Objective:

- Close the remaining supplier-evidence gaps for `Jewellery / accessory organiser` before any Product Owner decision on formal replacement or `Supplier verified` status.

Slice 11M commit hash reviewed:

- `12ee842ced3f237cbc24a759e11164503b6129ce`

Supplier evidence closure outcome recorded in this pass:

- `CJdropshipping` candidate reviewed:
  - Product title: `Transparent Jewelry Storage Box Jewelry Organizer Dustproof Display`
  - Supplier reference: `SKU: CJCC119463801AZ`
  - Product cost: `$3.34`
  - Variant captured: `Color(Beige)`
  - Weight captured: `1020g`
  - South Africa shipping result: `PostNL` available to ZA
  - Shipping cost result: `Shipping Fee: $41.63`
  - Estimated processing time: `1-3 days for 90% orders`
  - Estimated delivery time: `15-45 days`
  - Captured caution notes: oversized-product warning plus DDU / buyer-duties note
- `DSers` comparison closure result:
  - Session redirected to the DSers login page again in this pass
  - Logged-in DSers comparison evidence therefore remains `Missing`
- Public AliExpress comparison evidence improved closure:
  - `10 Slots ( Adjustable) Plastic Jewelry Box Storage Case...`
    - Visible item price: `ZAR15.65`
    - Visible shipping: `ZAR66.42`
    - Visible delivery estimate: `May 12 - 21`
    - Evidence-only landed-cost signal: `ZAR82.07`
    - Ratings signal: `4.8`, `1008` reviews, `5,000+ sold`
  - `Portable Jewelry Box Jewelry Organizer Display Travel Jewelry Case...`
    - Visible item price: `ZAR41.39`
    - Visible delivery estimate: `May 12 - 22`
    - Ratings signal: `4.5`, `650` reviews, `5,000+ sold`
    - Shipping cost was not independently confirmed in this pass

Preferred supplier recommendation recorded in this pass:

- Do not treat `CJdropshipping` as the preferred supplier route on current evidence because the captured ZA route is shipping-heavy, long-delivery, oversized, and DDU-exposed.
- Treat the public AliExpress `10 Slots ( Adjustable) ...` route as the provisional commercial comparison leader because it is the only route in this pass with item price, ZA shipping cost, and delivery evidence captured together.
- Keep the `Portable Jewelry Box ...` route as a secondary watch candidate because it appears more giftable and category-fit friendly, but its shipping cost was not independently confirmed in this pass.
- Preferred supplier selection remains open; no route is strong enough yet for `Supplier verified`.

Commercial-readiness interpretation recorded in this pass:

- The captured `ZAR82.07` landed-cost signal from the AliExpress adjustable-box comparison sits within the planning band `R159-R229`.
- At the planning-band floor `R159`, the route implies:
  - landed-cost ratio about `51.6%`
  - gross margin about `48.4%`
  - gross-margin amount about `R76.93`
- At the planning-band ceiling `R229`, the route implies:
  - landed-cost ratio about `35.8%`
  - gross margin about `64.2%`
  - gross-margin amount about `R146.93`
- This means the captured comparison route clears the minimum landed-cost ratio and minimum gross-margin gates inside the planning band, but it does not prove the `50%+` target at the very bottom of the band.
- Shipping cost is higher than product cost on the captured adjustable-box route, so that commercial risk flag remains active.
- The CJ route now has captured shipping, but its `Ship to ZA` fee (`$41.63`) materially outweighs the item cost (`$3.34`) and its `15-45` day delivery window remains commercially weak.
- The portable-case route did not yield a confirmed shipping-cost field in this pass, so no landed-cost or gross-margin claim is recorded for that route.

Recommended status and formal replacement posture:

- Recommended status for `Jewellery / accessory organiser`: `Candidate`
- Do **not** move the product to `Supplier verified` in this pass.
- Keep `Jewellery / accessory organiser` as the preferred replacement-direction `Candidate`.
- Do not treat formal replacement of `Adhesive Wall Hooks Pack` as fully approved yet; keep it blocked until preferred supplier selection, shipping closure, landed-cost closure, and final image/variant/risk review are completed.

Safety confirmations:

- No collection edits
- No department link switching
- No product import
- No Shopify push
- No publish
- No live overwrite
- No checkout customization
- No dynamic catalogue wiring
- No PDP Add to Cart wiring
- No cart wiring
- No final legal publication
- No theme/code changes
- No supplier credential storage
- `artifacts/` remains untracked/uncommitted

## Slice 11O Jewellery organiser viability and supplier-path decision (docs-only)

Objective:

- Record the current viability decision and supplier-path posture for `Jewellery / accessory organiser` without approving final replacement or `Supplier verified` status.

Slice 11N commit hash reviewed:

- `5ad34921b8c5e0d1d7c3dc60f875dec5c50a6b0c`

Supplier-path decision recorded in this pass:

- `CJdropshipping` route: rejected for current commercial readiness
  - Captured basis: `SKU: CJCC119463801AZ`, product cost `$3.34`, `PostNL` to South Africa, shipping fee `$41.63`, estimated delivery `15-45 days`
  - Decision reason: oversized-product plus DDU / buyer-duties cautions, shipping materially higher than item cost, and long delivery window make the route commercially weak for current launch planning
- AliExpress adjustable-box route: preferred supplier-path candidate
  - Captured basis: visible item price `ZAR15.65`, visible shipping `ZAR66.42`, visible delivery `May 12 - 21`, ratings signal `4.8` with `1008` reviews, sales signal `5,000+ sold`
  - Evidence-only landed-cost signal: `ZAR82.07`
  - Planning/evidence-only selling-price reference: `R159-R229`
- Portable-case route: secondary comparison only
  - Captured basis: visible item price `ZAR41.39`, visible delivery `May 12 - 22`, ratings signal `4.5` with `650` reviews, sales signal `5,000+ sold`
  - Shipping-cost field was not independently confirmed
- `DSers` comparison: still preferred for confidence, but not blocking continued `Candidate` status for the organiser route

Catalogue-position decision recorded in this pass:

- `Adhesive Wall Hooks Pack` remains replacement-directed / deferred.
- `Jewellery / accessory organiser` remains the preferred replacement-direction `Candidate`.
- No formal final replacement approval is recorded in this pass.
- No product is promoted to `Supplier verified` in this pass.
- Target selling price references and landed-cost references remain planning/evidence-only until final Product Owner commercial approval.

Evidence still needed before formal replacement approval:

- exact AliExpress adjustable-box item URL/reference
- confirmed current item price
- confirmed current shipping price to South Africa
- confirmed delivery estimate to South Africa
- estimated landed cost in ZAR
- target selling price band
- estimated gross margin
- variant/options clarity
- image suitability
- product dimensions
- description facts
- return/quality risk note
- no unsupported claims
- Product Owner commercial decision note

Evidence still needed before `Supplier verified`:

- supplier/source confirmed
- exact supplier/item reference recorded
- product cost confirmed
- South Africa shipping option confirmed
- shipping cost confirmed
- estimated landed cost calculated
- delivery expectation recorded
- variants/options checked
- image suitability checked
- description facts available
- target selling price selected
- estimated gross margin calculated
- return/quality risk reviewed
- compliance/claim risk reviewed
- final Product Owner decision recorded

Safety confirmations:

- No product import
- No Shopify push
- No publish
- No collection edits
- No department link switching
- No checkout customization
- No dynamic catalogue wiring
- No PDP Add to Cart wiring
- No cart wiring
- No final legal publication
- No theme/code changes
- No supplier credential storage
- `artifacts/` remains untracked/uncommitted

## Slice 11P Jewellery organiser DSers comparison and commercial assessment (docs-only)

Objective:

- Record the Product Manager assessment for `Jewellery / accessory organiser` after Slice 11O without approving final replacement or `Supplier verified` status.

Slice 11O commit hash reviewed:

- `fe6e64c0294488491ceef15d0ca0259f82bf03de`

DSers / supplier-path decision recorded in this pass:

- `Jewellery / accessory organiser` remains the preferred replacement-direction `Candidate`.
- `Jewellery / accessory organiser` is not formally approved as the final replacement.
- `Jewellery / accessory organiser` is not promoted to `Supplier verified`.
- AliExpress adjustable-box remains the preferred supplier-path candidate.
- `CJdropshipping` remains rejected for current commercial readiness.
- Portable-case remains secondary comparison only.
- `DSers` comparison remains preferred for added confidence, but incomplete `DSers` evidence does not block continued `Candidate` status.
- `Adhesive Wall Hooks Pack` remains replacement-directed / deferred.

Commercial readiness assessment recorded in this pass:

- Evidence-only landed-cost signal: `R82.07`
- `R159` estimated margin: `48.4%`; gross profit `R76.93`
- `R179` estimated margin: `54.2%`; gross profit `R96.93`
- `R199` estimated margin: `58.8%`; gross profit `R116.93`
- `R229` estimated margin: `64.2%`; gross profit `R146.93`
- Preferred planning price band: `R179-R229`
- `R159` remains only a competitive lower bound
- Shipping cost higher than product cost remains flagged
- Delivery expectation is not yet proven as `<=21` business days
- `Deals` rail is allowed only if final proven margin is `55%+`
- `Best Sellers` remains blocked until actual sales evidence exists
- Do not promise delivery by `Mother's Day`

Formal replacement approval remains blocked by:

- exact AliExpress adjustable-box item URL/reference
- evidence capture date/time
- confirmed current item price
- confirmed current shipping price to South Africa
- confirmed current delivery estimate to South Africa
- final landed cost in ZAR
- selected target selling price
- final gross margin
- variant/options clarity
- image suitability
- product dimensions
- description facts
- return/quality risk note
- compliance/claim risk note
- no unsupported claims check
- Product Owner commercial decision note

`Supplier verified` remains blocked by:

- confirmed supplier/source
- exact supplier/item reference
- confirmed product cost
- confirmed South Africa shipping option
- confirmed shipping cost
- calculated landed cost
- recorded delivery expectation
- checked variants/options
- checked image suitability
- available description facts
- selected target selling price
- calculated gross margin
- return/quality risk review
- compliance/claim risk review
- final Product Owner decision

Safety confirmations:

- No product import
- No Shopify push
- No publish
- No live theme overwrite
- No collection edits
- No department link switching
- No checkout customization
- No dynamic catalogue wiring
- No PDP Add to Cart wiring
- No cart wiring
- No final legal publication
- No theme/code changes
- No supplier credential storage
- No `Supplier verified` promotion
- No final replacement approval
- `artifacts/` remains untracked/uncommitted

## Slice 11Q Jewellery organiser current supplier proof and formal replacement evidence closure (docs-only)

Objective:

- Record that `Jewellery / accessory organiser` remains the preferred replacement-direction `Candidate`, but current supplier proof is still incomplete and does not yet support formal replacement approval review or `Supplier verified` movement.

Slice 11P commit hash reviewed:

- `6f4f83923f34bf9d5b39538329cc136b75bbfb89`

Current supplier-proof assessment recorded in this pass:

- `Jewellery / accessory organiser` remains the preferred replacement-direction `Candidate`.
- Do not move `Jewellery / accessory organiser` to Product Owner formal replacement approval review yet.
- Do not promote `Jewellery / accessory organiser` to `Supplier verified`.
- Do not approve `Jewellery / accessory organiser` as the final replacement.
- AliExpress adjustable-box remains the preferred supplier-path candidate.
- `DSers` evidence remains useful for supplier confidence, but incomplete and not sufficient for formal approval or `Supplier verified` status.
- `Adhesive Wall Hooks Pack` remains replacement-directed / deferred.
- Commercial readiness remains inconclusive pending current supplier proof.

Current supplier-proof summary recorded in this pass:

- Exact AliExpress adjustable-box item URL/reference: `Missing`
- `DSers` item/source reference: `Missing` or incomplete
- Evidence capture date/time: `Missing`
- Current item price: `Missing`
- Current shipping price to South Africa: `Missing`
- Current delivery estimate to South Africa: `Missing`
- Final landed cost in ZAR: `Not proven`
- Selected target selling price: planning band only `R179-R229`
- Final gross margin: `Not proven`
- Variant/options clarity: `Missing`
- Image suitability: `Missing`
- Product dimensions: `Missing`
- Description facts: `Missing`
- Return/quality risk note: `Missing`
- Compliance/claim risk note: `Missing`
- No unsupported claims check: `Missing`
- Product Owner commercial decision note: still required

Commercial assessment preserved in this pass:

- Previous landed-cost signal `R82.07` remains planning-only
- `R159` estimated margin: `48.4%`
- `R179` estimated margin: `54.2%`
- `R199` estimated margin: `58.8%`
- `R229` estimated margin: `64.2%`
- Preferred planning band remains `R179-R229`
- `R159` remains competitive lower bound only
- `Deals` rail remains conditional on final proven margin of `55%+`
- `Best Sellers` remains blocked until actual sales evidence exists
- No `Mother's Day` delivery promise is allowed

Formal replacement approval blockers still open:

- exact item URL/reference
- evidence capture date/time
- confirmed item price
- confirmed shipping price to South Africa
- confirmed delivery estimate to South Africa
- final landed cost
- selected target selling price
- final gross margin
- variant/options clarity
- image suitability
- product dimensions
- description facts
- return/quality risk note
- compliance/claim risk note
- no unsupported claims check
- Product Owner commercial decision note

`Supplier verified` blockers still open:

- confirmed supplier/source
- exact supplier/item reference
- confirmed product cost
- confirmed South Africa shipping option
- confirmed shipping cost
- calculated landed cost
- recorded delivery expectation
- checked variants/options
- checked image suitability
- available description facts
- selected target selling price
- calculated gross margin
- return/quality risk review
- compliance/claim risk review
- final Product Owner decision

Safety confirmations:

- No product import
- No Shopify push
- No publish
- No live theme overwrite
- No collection edits
- No department link switching
- No checkout customization
- No dynamic catalogue wiring
- No PDP Add to Cart wiring
- No cart wiring
- No final legal publication
- No theme/code changes
- No supplier credential storage
- No `Supplier verified` promotion
- No final replacement approval
- `artifacts/` remains untracked/uncommitted

## Slice 11R Jewellery organiser supplier proof capture status (docs-only)

Objective:

- Record that the current supplier proof capture pack for `Jewellery / accessory organiser` remains incomplete, so the product stays `Candidate` only and cannot move to formal replacement approval review or `Supplier verified` status yet.

Slice 11Q commit hash reviewed:

- `0457a5faada646d8aab78a7565596134968f65a4`

Supplier-proof capture status recorded in this pass:

- `Jewellery / accessory organiser` remains the preferred replacement-direction `Candidate`.
- Do not move `Jewellery / accessory organiser` to formal replacement approval review yet.
- Do not promote `Jewellery / accessory organiser` to `Supplier verified`.
- Do not approve `Jewellery / accessory organiser` as the final replacement.
- AliExpress adjustable-box remains the preferred supplier-path candidate, but the exact item reference is still missing.
- `DSers` remains useful for supplier confidence and supplier-path comparison, but evidence is incomplete and insufficient for formal approval or `Supplier verified` status.
- `Adhesive Wall Hooks Pack` remains replacement-directed / deferred.
- Commercial readiness remains inconclusive.

Current supplier proof status recorded in this pass:

- Exact AliExpress adjustable-box item URL/reference: `Missing`
- `DSers` item/source reference: `Missing` or unavailable
- Evidence capture date/time: not captured
- Current item price: not verified
- Current shipping price to South Africa: not verified
- Current delivery estimate to South Africa: not verified
- Final landed cost in ZAR: not proven
- Selected target selling price: planning band only `R179-R229`
- Final estimated gross margin: not proven
- Variant/options clarity: `Missing`
- Image suitability: `Missing`
- Product dimensions: missing for exact supplier item
- Description facts: missing for exact supplier item
- Return/quality risk note: still required
- Compliance/claim risk note: still required
- No unsupported claims check: still required

Commercial assessment preserved in this pass:

- Previous landed-cost signal `R82.07` remains planning-only
- `R159` estimated margin: `48.4%`
- `R179` estimated margin: `54.2%`
- `R199` estimated margin: `58.8%`
- `R229` estimated margin: `64.2%`
- Preferred planning band remains `R179-R229`
- `R159` remains competitive lower bound only
- `Deals` rail remains conditional on final proven margin of `55%+`
- `Best Sellers` remains blocked until actual sales evidence exists
- No `Mother's Day` delivery promise is allowed

Formal replacement approval blockers still open:

- exact AliExpress item URL/reference
- `DSers` item/source reference if used
- evidence capture date/time
- confirmed item price
- confirmed shipping price to South Africa
- confirmed delivery estimate to South Africa
- final landed cost in ZAR
- selected target selling price
- final gross margin calculation
- variant/options proof
- image suitability proof
- product dimensions
- description facts
- return/quality risk note
- compliance/claim risk note
- no unsupported claims check
- Product Owner commercial decision note

`Supplier verified` blockers still open:

- confirmed supplier/source
- exact supplier/item reference
- confirmed product cost
- confirmed South Africa shipping option
- confirmed shipping cost
- calculated landed cost
- recorded delivery expectation
- checked variants/options
- checked image suitability
- available description facts
- selected target selling price
- calculated gross margin
- return/quality risk review
- compliance/claim risk review
- final Product Owner decision

Safety confirmations:

- No product import
- No Shopify push
- No publish
- No live theme overwrite
- No collection edits
- No department link switching
- No checkout customization
- No dynamic catalogue wiring
- No PDP Add to Cart wiring
- No cart wiring
- No final legal publication
- No theme/code changes
- No supplier credential storage
- No `Supplier verified` promotion
- No final replacement approval
- `artifacts/` remains untracked/uncommitted

## Slice 12I preview catalogue staging for visible products (bounded preview-only)

Objective:

- Determine the minimum safe action needed to make a controlled set of `8-12` products reviewable in the unpublished/password-protected preview store across the four launch collections.

Prerequisite commit reviewed:

- Slice 11R committed at `cc3317d2099c0d7f9d334b6e62cd2d0da1392744`

Safe inspection results recorded in this pass:

- Shopify CLI remained available for safe read-only checks.
- Preview theme `151207542967` remains present and `unpublished`.
- Storefront root checks still indicate password protection is active, which reduces general-public exposure risk.
- Read-only Shopify Admin inspection confirmed existing Shopify product records for at least:
  - `Under Cabinet Paper Towel Holder`
  - `Adjustable Laptop Stand`
  - `Multi-Use Storage Organizer Bin`
- Read-only Shopify Admin inspection confirmed the four launch collections remain present:
  - `Home & Living`
  - `Kitchen & Storage`
  - `Office & Desk`
  - `Tech Accessories`
- Existing collection-density evidence from earlier accepted slices remains the current working reference:
  - `Home & Living`: `1`
  - `Kitchen & Storage`: `4`
  - `Office & Desk`: `1`
  - `Tech Accessories`: `1`

Preview-visibility blocker recorded in this pass:

- Repo inspection confirmed that `sections/main-collection-foundation.liquid` still renders a fixed static-safe `8`-card placeholder grid and generic collection heading content rather than live collection-product data.
- Repo inspection confirmed that `sections/main-product-foundation.liquid` still renders a static-safe PDP shell and does not consume live Shopify product title, media, price, or variant data.
- Because live catalogue/PDP visibility remains deferred in the theme, Shopify product or collection data staging would not reliably make the preferred products visible in the unpublished preview storefront.
- For that reason, no Shopify product or collection mutation was performed in this pass.

Manual preview-staging checklist recorded for a later approved pass:

- Keep storefront password protection ON and keep preview theme `151207542967` unpublished before any later preview-data staging attempt.
- Do not stage `Jewellery / accessory organiser`; it remains parked as `Candidate` only until exact supplier/item proof exists.
- Do not use `Adhesive Wall Hooks Pack` as preview filler unless the Product Owner explicitly accepts that temporary exception.
- Once live collection/PDP visibility is approved, start with the preferred preview set:
  - `Desk Cable Clips Set`
  - `Cable Management Sleeve`
  - `Screen Cleaning Kit`
  - `Sink Drain Basket / Strainer`
  - `Phone / Tablet Desk Stand`
  - `Multi-Use Storage Organizer Bin`
  - `Adjustable Laptop Stand`
  - `Under Cabinet Paper Towel Holder`
- If additional preview density is still needed after that, use planning candidates already recorded in the catalogue matrix:
  - `Sofa / Bedside Pocket Organiser`
  - `Space-Saving Hanger Set`
  - `3-in-1 Charging Cable`
- Recommended collection assignments for that later pass:
  - `Home & Living`: `Sofa / Bedside Pocket Organiser`, `Space-Saving Hanger Set`
  - `Kitchen & Storage`: `Sink Drain Basket / Strainer`, `Under-Cabinet Paper Towel Holder`
  - `Office & Desk`: `Desk Cable Clips Set`, `Cable Management Sleeve`, `Phone / Tablet Desk Stand`, `Adjustable Laptop Stand`, `Multi-Use Storage Organiser Bin`
  - `Tech Accessories`: `Screen Cleaning Kit`, `3-in-1 Charging Cable`

Preview-only controls preserved in this pass:

- Products in the preview set remain `Candidate` only.
- No product in this pass is `Supplier verified`, final launch approved, import approved, or final-price approved.
- No delivery promise, urgency claim, `Mother's Day` promise, `Deals` discount claim, or `Best Sellers` claim is approved through this pass.

Safety confirmations:

- No Shopify product creation
- No Shopify product edits
- No Shopify collection edits
- No department link switching
- No product import
- No Shopify push
- No publish
- No live theme overwrite
- No checkout customization
- No dynamic catalogue wiring
- No PDP Add to Cart wiring
- No cart wiring
- No final legal publication
- No theme/code changes
- No supplier credential storage
- `artifacts/` remains untracked/uncommitted

## Slice 12J preview product visibility foundation (bounded theme implementation)

Objective:

- Replace the static-safe collection and PDP preview foundations with the smallest safe theme changes needed so the unpublished/password-protected preview theme can render real Shopify collection products and real Shopify PDP product data.

Prerequisite commit reviewed:

- Slice 12I accepted and committed at `2f0423373b499f2f6e9fff797b6cedbed79c31fc`

Root cause confirmed in this pass:

- `sections/main-collection-foundation.liquid` used section settings plus eight hardcoded `static-product-card` renders instead of `collection.title`, `collection.description`, or `collection.products`.
- `sections/main-product-foundation.liquid` used section settings plus hardcoded media, badges, pricing, option chips, and related cards instead of live `product` object data.
- Because those sections were disconnected from the native Shopify `collection` and `product` objects, real product records already present in Shopify could not appear meaningfully in preview collection routes or PDP routes.

Theme implementation recorded in this pass:

- `sections/main-collection-foundation.liquid` now prefers live `collection.title`, `collection.description`, and `collection.products`, while keeping the existing collection-shell layout and a safe empty-state path when no products exist.
- `snippets/live-product-card.liquid` was added so collection pages can keep the accepted product-card visual contract while rendering real product titles, images, prices, compare-at pricing when present, and real product links.
- `sections/main-product-foundation.liquid` now prefers live `product.title`, `product.media`, `product.description`, `product.options_with_values`, and selected-variant price data, while keeping purchase controls explicitly disabled and preview-only.
- `assets/theme.css` was updated minimally for disabled preview-only controls, live-product placeholder SVG treatment, and rich-text spacing inside the product description area.

Validation results recorded in this pass:

- `shopify theme check --path . --fail-level error` returned warning-only output after the Slice 12J Liquid changes; no slice-specific Theme Check errors remained after the related-products markup fix.
- Remaining Theme Check warnings are repo-level legacy warnings for remote assets plus warning noise caused by files under `artifacts/`; they were not changed in this pass.
- `shopify theme list` returned the currently authenticated store theme set:
  - live `148914077879` (`Horizon`)
  - unpublished `151207542967` (`Mzansi Select MVP Preview`)
  - development `151101407415`
- Product Owner-provided preview theme id `150454599863` was not present on the authenticated store and was therefore not safe to use.
- Safe identity reconciliation confirmed that unpublished theme `151207542967` (`Mzansi Select MVP Preview`) was the correct preview-validation target because it exists on `dropshippoc.myshopify.com`, is not the live theme, and is the only unpublished preview theme currently listed.
- `shopify theme push --store dropshippoc.myshopify.com --theme 151207542967 --only assets/theme.css --only sections/main-collection-foundation.liquid --only sections/main-product-foundation.liquid --only snippets/live-product-card.liquid --json` completed successfully.
- Post-push theme listing confirmed the live theme remained `148914077879` (`Horizon`) and the pushed target remained unpublished `151207542967` (`Mzansi Select MVP Preview`).

Preview-validation caveat recorded in this pass:

- Unauthenticated HTTP checks against the reconciled preview routes returned HTTP `200` but still served the storefront password wall for homepage, launch collection, and PDP preview URLs.
- A no-state-export Playwright reuse attempt against the local Chrome default profile did not yield a reusable authenticated storefront session in this pass, so browser-level confirmation of live collection cards and live PDP data remains blocked by authenticated preview access rather than by theme identity.
- Evidence for the identity reconciliation, push, and preview-access gap was written to `artifacts/platform/slice-12j-1-preview-theme-reconciliation-20260430-111007/`.

Preview-only controls preserved in this pass:

- Live collection/PDP data rendering is now enabled locally in the theme, but no product import, product edit, or collection edit was performed.
- Purchase actions remain disabled and preview-only; no Add to Cart, wishlist, cart, or checkout behaviour was enabled.
- No delivery promise, urgency claim, fake discount, unsupported scarcity claim, `Mother's Day` promise, or final launch approval was introduced in this pass.

Safety confirmations:

- No Shopify product creation
- No Shopify product edits
- No Shopify collection edits
- No product import
- No Shopify publish
- No live theme overwrite
- No checkout customization
- No final legal publication
- No supplier verification
- No `Supplier verified` promotion
- No final product approval
- No final replacement approval for `Jewellery / accessory organiser`
- No secret exposure
- `artifacts/` remains untracked/uncommitted

## Source of truth

The approved frontend source of truth for this project is `D:\dev\mzansi-select-shopify\mzansi-select-theme.html`.

All future Shopify implementation work must preserve the approved visual design and structure represented by this file.

## Documentation-control rules

- No meaningful slice may be accepted as closed unless `docs/project-control.md` is updated or explicitly marked unchanged with a reason.
- Every handoff must include:
  - `Tracker status: Updated / Unchanged / Needs update before next acceptance`
  - `LLD status: Updated / Unchanged / Needs update before next acceptance`
- Product Owner acceptance is blocked when the agreed tracker or living specification is stale.
- `docs/project-control.md` is the live execution-state tracker for this project.
- `docs/lld/mzansi-select-shopify-mvp-theme-v1.md` is the durable living specification for product, page, catalogue, structure, and launch-readiness requirements.
- Update the LLD only when durable product rules, page behaviour, catalogue rules, or launch criteria change; otherwise mark it unchanged with a reason in the handoff.

## Source inspected

- `mzansi-select-theme.html`
- `docs/project-control.md`
- `docs/catalogue/mzansi-select-25-product-readiness-v1.md`
- `docs/lld/mzansi-select-shopify-mvp-theme-v1.md`
- `docs/content/mzansi-select-launch-collections-v1.md`
- `sections/primary-navigation.liquid`
- `sections/category-strip.liquid`
- `artifacts/platform/slice-12f-launch-collection-admin-readiness-20260429-172417/`
- Existing approved Slice 11F and Contact/About closure commit history
- `artifacts/supplier-verification/slice-11g2/session-access-summary.md`
- `artifacts/supplier-verification/slice-11g2/first-six-supplier-verification-summary.md`
- `artifacts/supplier-verification/slice-11g2/*.json`
- `artifacts/supplier-verification/slice-11i/first-six-gap-closure-summary.md`
- `artifacts/supplier-verification/slice-11i/*.json`

## Current status

- Slice 9 theme foundation remains the latest completed theme/code implementation baseline.
- Slice 10 unpublished preview refresh remains committed at `e91d529`.
- Slice 10.6 docs-only authenticated preview QA closure remains committed at `5d74ddc`.
- Slice 10.7 Contact/About route availability diagnosis remains committed at `ae9ac7d`.
- Manual Track A.1 completed Shopify Admin resource verification/correction and unpublished-preview re-test for Contact/About route availability.
- Slice 10.9 tracker correction remains committed at `5e2ea07`.
- Slice 11A storefront taxonomy recommendation remains committed at `662e4bb7c8c8df2b4cb73bd7c234d7e071f465e2`.
- Slice 11B catalogue readiness matrix remains committed at `a0bfbb1a0f3428be6251004dc0f90e0a9e1f3987`.
- Slice 11C sourcing/readiness planning remains committed at `c88024b5a8544421b114bb9eaaeac1d136405de6`.
- Slice 11D first product verification batch plan remains committed at `ee410452e1651a6b9d8df71e99d2b34e8e2d1851`.
- Slice 11E first product research outcome remains committed at `73144cc2db1eaade777355612d09c91002546710`.
- Slice 11F records the manual logged-in supplier-verification guide and durable evidence format without changing theme/code files, product data, or Shopify state.
- Slice 11G.1 records that the first logged-in supplier-verification execution pass is attempted/planned but blocked/incomplete because supplier-tool login access is required and was not used in this docs-only pass.
- Slice 12 records the launch-readiness blocker review, Contact/About evidence closure, and next-action plan without changing theme/code files, product data, supplier state, or Shopify state.
- Slice 11G.2 completed Playwright-assisted first-six supplier evidence capture against authenticated local `CJdropshipping` product pages without importing any product or touching Shopify.
- Slice 11H records the first-six commercial gap-closure plan, planning price bands, and readiness thresholds without changing theme/code files, product data, supplier state, or Shopify state.
- Slice 11I refreshed CJ evidence, captured public ZA-facing AliExpress comparison candidates, and recorded a targeted gap-closure summary without changing theme/code files, product data, supplier state, or Shopify state.
- Slice 12D records the staged department menu and collection destination strategy only; no theme/code files, product data, or Shopify state were changed in this pass.
- Slice 12E records the launch collection setup content plan only; no theme/code files, product data, or Shopify state were changed in this pass.
- Slice 12F records a read-only Admin readiness and risk posture only; no theme/code files, product data, or Shopify state were changed in this pass.
- Slice 12G records read-only unpublished-preview collection-route evidence and density posture only; no theme/code files, product data, or Shopify state were changed in this pass.
- Slice 12H records collection-readiness gap planning only; no theme/code files, product data, or Shopify state were changed in this pass.
- Slice 11K records collection-density allocation and replacement planning only; no theme/code files, product data, or Shopify state were changed in this pass.

## Current readiness summary

- Candidate: `18`
- Preview staged: `0`
- Supplier proof in progress: `7`
- Supplier verified: `0`

## Slice 11I targeted gap-closure status

- Targeted supplier gap-closure evidence scope only: approved.
- Product import approval: not granted.
- Shopify push approval: not granted.
- Shopify push/publish approval: not granted.
- Publish approval: not granted.
- Live theme overwrite approval: not granted.
- Dynamic catalogue wiring approval: not granted.
- Checkout customization approval: not granted.
- Contact/About implementation fix approval: not granted in this pass.
- Final legal publication approval: not granted in this pass.
- Actual supplier verification approval: not granted in this pass.
- Supplier credential storage approval: not granted in this pass.
- Supplier-account access: the existing local browser session was reused for CJ and DSers inspection; no auth state was saved in the repo.
- Execution result: refreshed CJ evidence and public ZA-facing AliExpress comparison evidence were recorded for all six first-batch products; no product was promoted beyond `Candidate`.
- Contact/About blocker: resolved in unpublished preview evidence.
- Supplier verification blocker: preserved and still unresolved.

## First verification batch

- `Desk Cable Clips Set`
- `Cable Management Sleeve`
- `Screen Cleaning Kit`
- `Jewellery / accessory organiser` (preferred replacement-direction candidate)
- `Sink Drain Basket / Strainer`
- `Phone / Tablet Desk Stand`

## Current six-product batch status

- All active first-six verification-focus products remain `Candidate`.
- Slice 11I refreshed the CJ product evidence for all six products.
- Public ZA-facing AliExpress search results were captured for all six products and used as the comparison fallback in this pass.
- `DSers` application pages were reachable, but targeted search queries returned `No Data`, so DSers comparison evidence remains incomplete.
- Slice 11M moves `Adhesive Wall Hooks Pack` out of the active first-six verification focus and into replacement-directed / deferred status.
- Slice 11M adds `Jewellery / accessory organiser` as the preferred replacement-direction `Candidate` in commercial-readiness planning, but not as `Supplier verified`.
- No supplier credential storage has occurred in this pass.
- No product was promoted to `Supplier verified`.
- Final target selling price, estimated gross margin, and import readiness remain unapproved and unresolved.
- No product import or import-readiness movement has occurred in this pass.

## Contact/About resolved state

- `Contact Us` already existed, remained visible to Online Store, kept the `page.contact` template assignment, and its handle was corrected from `contact-us` to `contact`.
- `About` did not exist, was created, is visible to Online Store, uses the default page template, and has handle `about`.
- Preview routes returned HTTP `200`:
  - `https://dropshippoc.myshopify.com/pages/contact?preview_theme_id=151207542967`
  - `https://dropshippoc.myshopify.com/pages/about?preview_theme_id=151207542967`
- Contact/About route availability remains resolved in unpublished preview evidence and is not a launch-readiness blocker.
- Evidence paths:
  - `artifacts/qa/manual-track-a1-fix-2026-04-29T07-11-26-367Z/fix-summary.md`
  - `artifacts/qa/manual-track-a1-fix-2026-04-29T07-11-26-367Z/contact-admin-editor.png`
  - `artifacts/qa/manual-track-a1-fix-2026-04-29T07-11-26-367Z/about-admin-editor.png`
  - `artifacts/qa/manual-track-a1-fix-2026-04-29T07-11-26-367Z/contact-preview.png`
  - `artifacts/qa/manual-track-a1-fix-2026-04-29T07-11-26-367Z/about-preview.png`

## Remaining launch-readiness blocker summary

- Track B blocker: Slice 11G supplier verification remains incomplete because the refreshed evidence still leaves exact-match source confirmation, delivery validation, and/or commercial gate closure open.
- Track C blocker: the launch collections already exist and are included on `Online Store`, but product density is still thin and direct collection URLs should remain unlinked from launch department navigation until Product Owner approval.
- Slice 11I targeted evidence outcome:
  - `Desk Cable Clips Set`: AliExpress ZA comparison materially improved cost visibility, but exact match confirmation is still open
  - `Cable Management Sleeve`: comparison coverage improved, but the captured price points still look margin-weak inside the approved band
  - `Screen Cleaning Kit`: refreshed evidence confirmed the liquid/non-liquid wording conflict and margin remains weak on captured comparisons
  - `Adhesive Wall Hooks Pack`: the current CJ source remains unusable for ZA, but public ZA-facing replacement candidates were surfaced
  - `Sink Drain Basket / Strainer`: package-size evidence improved, but fit dimensions and stronger image support are still missing
  - `Phone / Tablet Desk Stand`: comparison coverage improved, but captured sources still miss the approved commercial gates
- No first-batch product is ready to move beyond `Candidate` yet because comparison, delivery, and margin decisions remain incomplete.
- Contact/About route availability is resolved and is no longer part of the launch-readiness blocker set.
- The four launch collections no longer need creation planning, but they still need later preview-state evidence and Product Owner approval before department-link switching is considered safe.
- The first-batch products still blocked at `Candidate` are:
  - `Desk Cable Clips Set`
  - `Cable Management Sleeve`
  - `Screen Cleaning Kit`
  - `Adhesive Wall Hooks Pack`
  - `Sink Drain Basket / Strainer`
  - `Phone / Tablet Desk Stand`

## Remaining action plan

Track B — supplier verification and commercial gap closure:

- Keep all six products at `Candidate` until exact-match source confirmation, delivery validation, and commercial gate review are completed.
- Continue comparison work where still needed, especially where DSers returned `No Data` and AliExpress public search results still need item-page confirmation.
- Treat the Slice 11H target selling price bands as planning assumptions only until a later approved pricing decision is made.
- Use the durable commercial thresholds as readiness gates only: minimum estimated gross margin `45%`, target gross margin `50%+`, landed cost ratio at or below `55%` of target selling price, minimum absolute gross margin `R45` under `R150`, minimum absolute gross margin `R70` at `R150+`, preferred South Africa delivery expectation `<=21` business days, and a risk flag whenever shipping cost is higher than product cost.
- Decide whether to keep `Adhesive Wall Hooks Pack` in the first-six set based on item-page verification of the surfaced ZA-facing replacement candidates.
- No product may move to `Supplier verified` until the required evidence is captured for each first-batch product.

## Evidence requirements recorded per first-batch product

Use logged-in `CJdropshipping` / `DSers` / `AliExpress` tools to confirm:

- supplier/source link or internal reference
- supplier SKU/SPU/reference
- product cost
- South Africa shipping option
- shipping cost
- estimated landed cost
- delivery expectation
- variants/options
- minimum image quality
- image suitability
- description facts
- target selling price
- estimated gross margin
- margin risk
- return/quality risk
- compliance/claim risk
- decision note
- recommended status
- next action

## Approved launch catalogue structure

- Launch departments:
  - `Home & Living` — `6` product slots
  - `Kitchen & Storage` — `7` product slots
  - `Office & Desk` — `5` product slots
  - `Tech Accessories` — `7` product slots
- Total approved launch catalogue planning coverage: `25` product slots
- Expansion-ready only:
  - `Garden & Outdoor`
  - `Bath & Bedroom`
  - `Cleaning & Laundry`
- Merchandising rails, not departments:
  - `Shop All`
  - `Best Sellers`
  - `Deals`
  - `New In`
  - `New Arrivals`
  - `Featured`
  - `Trending`
  - `Seasonal`

## Sourcing/readiness gap summary

- The catalogue now has `25` named candidate slots and no `TBD` slot names.
- No slot is yet `Supplier verified`.
- No slot is yet `Content ready`.
- No slot is yet `Import ready`.
- All `25` slots still carry unconfirmed supplier/cost/shipping/content evidence and must move through the durable 4-stage readiness flow before any import approval is considered.
- The first six-product verification batch now has a public-research outcome, a manual execution guide, a CJ-based evidence bundle, a commercial gap-closure plan, and a targeted gap-closure evidence set, but no item moves beyond `Candidate` until comparison and pricing decisions are complete.
- This pass preserves the Contact/About resolved state, and the active launch-readiness blockers remain supplier/product readiness plus later launch-collection exposure and link-switch approval.

## Current product state

The repository remains a Git-initialized Shopify theme foundation with implementation completed through Slice 9 and unpublished-preview validation recorded through Slice 10.7:

- The approved static HTML source remains unchanged.
- Global chrome, homepage, collection, product, search, cart, legal/support, and 404 foundation work exists in native Shopify theme structure.
- Slice 11F adds manual-verification guide documentation only. Slice 11G.1 adds blocker-record documentation only. Slice 12 adds blocker-plan and Contact/About evidence-closure documentation only. Slice 11G.2 adds supplier evidence capture and documentation only. Slice 11H adds commercial gap-closure planning and durable readiness-threshold documentation only. Slice 11I adds targeted supplier gap-closure evidence only. None of these passes change collection wiring, product data inside Shopify, or visual implementation.
- Slice 12D adds department destination strategy documentation only, Slice 12E adds launch collection setup content-planning documentation only, and Slice 12F adds launch collection Admin readiness/risk documentation only. None of these passes change collection wiring, product data inside Shopify, or visual implementation.
- Product import remains unapproved.
- Shopify push/publish remains unapproved.
- Live theme overwrite remains unapproved.
- Dynamic product/catalogue wiring remains unapproved.
- `artifacts/` remains untracked and must not be committed unless separately approved.

## Launch-readiness blockers

- Contact/About route availability is resolved in unpublished preview evidence.
- `Contact Us` existed, remained visible to Online Store, and its handle was corrected to `contact`.
- `About` was created, is visible to Online Store, and uses handle `about`.
- Preview verification confirmed HTTP `200` for `/pages/contact?preview_theme_id=151207542967` and `/pages/about?preview_theme_id=151207542967`.
- Contact/About is no longer a launch-readiness blocker.
- Supplier verification remains a launch-readiness blocker for the first six-product batch.
- Slice 11I refreshed the CJ evidence, captured public ZA-facing AliExpress comparison candidates, and confirmed that commercial gates remain unresolved for the first-six batch.
- Department navigation now has a documented staged destination strategy, Slice 12E records the required launch collection content plan, Slice 12F confirms the collections already exist, Slice 12G confirms the preview routes render, Slice 12H records the explicit collection-density and presentation gates, and Slice 11K confirms that paper-density sufficiency does not remove the verified-product-quality and supplier-readiness blockers.
- No product may be treated as `Import ready` until supplier, landed-cost, shipping, content, image, and risk checks are complete.
- Additional comparison and pricing review is still required before any first-batch status movement beyond `Candidate`.

## Approved execution constraints

- No publish approved.
- No Shopify push approved.
- No live theme overwrite approved.
- No product import approved.
- No checkout customization approved.
- No dynamic product/catalogue wiring approved.
- No PDP Add to Cart wiring approved.
- No cart wiring approved.
- No final legal publication approved.
- No product import or Shopify mutation inside the repo.
- No supplier credential storage.
- No Contact/About fix approved in this pass.
- Contact/About resolved state preserved from Manual Track A.1 and earlier docs-only closure passes.
- `artifacts/` must remain untracked/uncommitted.

## Documentation artefacts

- `docs/project-control.md`
- `docs/lld/mzansi-select-shopify-mvp-theme-v1.md`
- `docs/content/mzansi-select-launch-collections-v1.md`
- `docs/catalogue/mzansi-select-25-product-readiness-v1.md`

## Next expected decision

Product Owner review of the documented Slice 13F preview-staging preparation pack, confirmation of the five prepared entries and their blocker posture, and approval of the next supplier-proof or later staging-preparation follow-up scope before any product import, actual preview staging, or `Supplier verified` decision is revisited.

## Decisions made

- Slice 11E is treated as accepted and committed at `73144cc2db1eaade777355612d09c91002546710`.
- Slice 11F is limited to manual supplier-verification guide setup and documentation only.
- Slice 11G.1 is limited to recording the supplier-access execution blocker only.
- Slice 12 is limited to launch-readiness blocker review and next-action planning only.
- Manual Track A.1 resolved Contact/About Shopify Admin resource verification/correction and unpublished-preview route validation.
- Slice 11G.2 is accepted and committed at `3d1cdca58a89e39b994a0a5163b140063538b8f7`.
- Slice 11H is accepted and committed at `adfbc2f463497ead605580ae4bf6f2f337130fa8`.
- Slice 11I is accepted and committed at `83aa6c053db6b7597823ab24b45c04a9198db153`.
- Slice 12C navigation and page-link correctness foundation is committed at `e38970e843a4cce88d533414df4dce556f5c7cac`.
- Slice 12D department destination strategy documentation is accepted and committed at `f67381256696b43d2423066ccf3c2a8c268b7e61`.
- Slice 12E launch collection content plan is accepted and committed at `af8a5f4c4960a14a1b200e12dde5a1575addca10`.
- Slice 11G.2 is limited to supplier evidence capture only; no import, publish, or Shopify mutation is approved.
- The 4-stage readiness movement rules are now treated as durable catalogue launch-readiness criteria.
- Candidate -> Supplier verified evidence fields remain durable catalogue launch-readiness criteria.
- Supplier-verification evidence format is now treated as a durable catalogue launch-readiness rule.
- Rejection rules are now durable launch-readiness criteria.
- Slice 11H is limited to docs-only commercial gap-closure planning.
- Slice 11H target selling price bands are planning assumptions only and must not be treated as final live prices.
- Slice 11H commercial readiness thresholds are readiness gates only and must not be treated as proof of verification or import readiness.
- Slice 11I is limited to targeted supplier gap-closure evidence capture only.
- Slice 12D is limited to documentation-only department destination strategy recording.
- Slice 12E is limited to Shopify Admin launch collection-content planning only.
- Slice 12F is limited to read-only launch collection Admin readiness and exposure-risk review only.
- Slice 12G is limited to read-only launch collection preview evidence and density review only.
- Slice 12H is limited to docs-only collection readiness gap planning only.
- Slice 11K is limited to docs-only collection allocation and replacement-planning only.
- Slice 11L is accepted and committed at `4de4efc4995578cd9d3c34f6aca78a4f1f184ab4`.
- Slice 11M is accepted and committed at `12ee842ced3f237cbc24a759e11164503b6129ce`.
- Slice 11N is accepted and committed at `5ad34921b8c5e0d1d7c3dc60f875dec5c50a6b0c`.
- Slice 11O is accepted and committed at `fe6e64c0294488491ceef15d0ca0259f82bf03de`.
- Slice 11P is accepted and committed at `6f4f83923f34bf9d5b39538329cc136b75bbfb89`.
- Slice 11Q is accepted and committed at `0457a5faada646d8aab78a7565596134968f65a4`.
- Slice 11R is accepted and committed at `cc3317d2099c0d7f9d334b6e62cd2d0da1392744`.
- Slice 12I is accepted and committed at `2f0423373b499f2f6e9fff797b6cedbed79c31fc`.
- Slice 12J is accepted and committed at `263e60f1588b03f4120121007411c701d342d9e4`.
- Local-first sourcing is the approved roadmap direction.
- Slice 13A is limited to docs-only local supplier strategy, supplier-prioritisation, launch matrix, and status-model recording.
- Slice 13C is limited to docs-only local supplier preview product shortlist, supplier weighting, and Candidate-only status recording.
- Slice 13D is limited to docs-only local supplier proof-pack recording, status movement to `Supplier proof in progress` only, and paused-item recording where evidence remains too broad or commercially weak.
- Slice 13E is limited to docs-only supplier proof gap-closure recording, keeping the seven shortlisted items at `Supplier proof in progress` only, recording a preview-preparation subset without actual staging approval, and preserving the visible supplier / fulfilment / image-rights / shipping blockers.
- Slice 13F is limited to docs-only preview-staging preparation pack recording, proposed handles / collection assignments / conservative preview copy, placeholder-image and hidden-price guidance, and blocker recording only.
- `ZA Dropshipping` is the best Shopify-integration and local-stock test candidate, but should be used only as a small pilot first because public Shopify app review confidence is weak.
- `Neat Freak` is the best current category-fit supplier for `Home & Living`, `Kitchen & Storage`, `Office & Desk`, storage, organisers, kitchen, laundry, and household utility, pending wholesale / dropship terms and image-usage-rights confirmation.
- `Gadgetgyz` is the best current `Tech Accessories` test supplier, pending stock, pricing, fulfilment workflow, delivery-SLA, and return-terms confirmation.
- `Men’s Republic` and `Third Wave Distribution` are conditional suppliers only and must be verified directly before MVP reliance.
- `Dropstore`, `Mantality`, `The Scents`, `Wheeltrend`, `Printify`, and `Printful` are deferred under the current local-first MVP strategy.
- `Beauty & Hair` remains outside the launch taxonomy and female hair pieces are deferred to a later Slice 13B opportunity assessment.
- The launch collection supplier matrix is now recorded for the four approved launch departments.
- The working product status model is now `Candidate`, `Preview staged`, `Supplier proof in progress`, and `Supplier verified`.
- `Preview staged` means visible in the preview store only and does not mean supplier approval, final pricing approval, delivery approval, claims approval, or final launch approval.
- The Slice 13C shortlist is now recorded as `12` Candidate-only preview-planning products across `Neat Freak`, `Gadgetgyz`, and `ZA Dropshipping`.
- `Neat Freak` carries the strongest current category-fit weighting.
- `Gadgetgyz` carries the strongest current `Tech Accessories` weighting.
- `ZA Dropshipping` remains useful for Shopify/local-stock testing, but its shortlisted product slots remain pending app/admin review before product and margin proof can be relied on.
- Seven shortlisted products remain `Supplier proof in progress` only: `Compact Organiser Basket`, `2-Layer Carry Handle Container 3.8L`, `Hook-over Door Basket`, `Mini Plastic Divider Basket`, `Sink Strainer, stainless steel`, `Velcro Cable Tidies` / `Neat Cables Label Pack`, and `Acrylic Tablet or Phone Stand`.
- `Cable Organiser / Cable Management item` is paused because the current evidence is too broad and the visible public price signal is commercially weak at the current definition.
- Remaining shortlisted products stay `Candidate` only unless a later approved pass records a different status with evidence.
- `Supplier proof in progress` does not mean `Supplier verified`, launch approved, import approved, final-priced, delivery-approved, or claims-approved.
- Product-only margin calculations in this pass are planning estimates only, assume shipping is charged separately or otherwise recovered, and do not approve final pricing.
- No shortlisted product is ready for `Supplier verified` review in this pass.
- `Sink Strainer - Stainless Steel`, `Compact Organiser Basket`, `Mini Plastic Divider Basket`, `Cable Tidies Set`, and `Acrylic Tablet or Phone Stand` are the five prepared preview-staging pack entries on paper only; no actual preview staging is approved.
- Proposed handles for that preparation pack are `sink-strainer-stainless-steel`, `compact-organiser-basket`, `mini-plastic-divider-basket`, `cable-tidies-set`, and `acrylic-tablet-phone-stand`.
- `2-Layer Carry Handle Container 3.8L` and `Hook-over Door Basket` remain lower-priority for preview-staging preparation because dimensions, image permission, delivery handling, and price positioning need stronger closure first.
- Neat Freak public evidence now supports local retail fulfilment, shipping fees, delivery estimates, and returns-process visibility, but delivery wording must stay cautious because orders can take `7-14` working days and stock may not always be on hand; wholesale / dropship terms, direct-to-customer fulfilment for Mzansi Select, image usage permission, stock reliability, and sample / product quality remain unconfirmed.
- Gadgetgyz shows a stronger dropship-workflow signal than Neat Freak and the `Acrylic Tablet or Phone Stand` now has strong product / SKU evidence, but exact shipping fee, SLA, image permission, supplier workflow confirmation, and final Product Owner commercial decision still block any later movement beyond `Supplier proof in progress`.
- Slice 12K preview product staging is paused/deferred.
- Shopify Admin automation and product staging must not continue until Product Owner reviews the Slice 13F preparation pack and a later write-action pass is explicitly approved.
- Preview staging remains blocked/deferred in this pass.
- No Shopify write action occurred in this reconciliation pass.
- `artifacts/` remains untracked and must not be committed.
- The temporary safe routing rule remains `{{ routes.all_products_collection_url }}` for launch departments until dedicated launch collections are created and approved for exposure.
- The preferred launch-ready department handles are `home-living`, `kitchen-storage`, `office-desk`, and `tech-accessories`.
- `Garden & Outdoor`, `Bath & Bedroom`, and `Cleaning & Laundry` remain expansion-ready only and should stay deferred as launch destinations.
- Launch collection title/handle alignment, intro copy, SEO title, SEO meta description, unpublished-preview HTTP `200` validation, and Online Store exposure readiness are now treated as required setup checkpoints before a later department-link switch.
- Shopify Admin read-only inspection in Slice 12F confirms the four launch collections already exist and are included on `Online Store`; the remaining question is safe exposure timing, not collection creation feasibility.
- Slice 12G preview evidence confirms that the four collection routes render in the unpublished preview theme, but the page still presents the generic static-safe collection heading and repeated placeholder-style cards rather than department-specific live collection content.
- Slice 12H makes the collection gap plan explicit: minimum preview threshold `3`, preferred public launch threshold `5`, no department link switching while any launch collection has only `1` product, and each collection page must visibly expose the department name before switch approval.
- Slice 11K records that the current `25`-product plan already meets the preferred density targets on paper, so the remaining launch gap is not raw count but evidence-backed product quality, supplier closure, shipping, margin, and collection fit.
- Slice 11L now adds product-specific replacement evidence for the preferred `Jewellery / accessory organiser` direction.
- Slice 11M records that the replacement direction should become the preferred catalogue `Candidate` path, while formal replacement remains blocked by supplier, shipping, landed-cost, margin, image, and risk closure.
- Slice 11N confirms that the captured CJ route is available to ZA but commercially weak because shipping is high, delivery is long, and DDU/oversized cautions apply; the organiser route remains `Candidate` while preferred-supplier selection stays open.
- Slice 11O rejects the captured CJ route for current commercial readiness, records the AliExpress adjustable-box route as the preferred supplier-path candidate, keeps the portable-case route as secondary comparison only, and preserves `Candidate` status with no formal final replacement approval yet.
- Slice 11P keeps the organiser route at `Candidate`, keeps the AliExpress adjustable-box route as the preferred supplier-path candidate, records the preferred planning band as `R179-R229`, and confirms that incomplete `DSers` evidence does not block `Candidate` status.
- Slice 11Q confirms that current supplier proof is still too incomplete to move the organiser route into formal replacement approval review or `Supplier verified` review, even though the AliExpress adjustable-box route remains the preferred supplier-path candidate.
- Slice 11R confirms that the supplier proof capture pack remains incomplete, that the exact AliExpress item reference is still missing, and that the organiser route must remain `Candidate` only.
- Slice 12I confirms that the current preview theme still uses static-safe collection and PDP foundations, so Shopify preview-data staging would not make real products visibly reviewable in the unpublished storefront without a later approved live-catalogue visibility step.
- Slice 12J changes the local theme so collection pages now prefer live `collection` object data and PDP pages now prefer live `product` object data while purchase actions remain disabled and preview-only.
- Unknown supplier, cost, selling price, margin, shipping, image, and import-readiness values remain `Unconfirmed`.
- Product import, Shopify push/publish, live overwrite, checkout customization, dynamic catalogue wiring, PDP Add to Cart wiring, cart wiring, final legal publication, Contact/About route remediation, supplier credential storage, and actual supplier verification remain out of scope for this pass.

## Risks / unknowns

- All `25` product slots still require supplier/source checking before any movement beyond `Candidate`.
- The first six-product verification batch still needs comparison closure, pricing decisions, and final risk acceptance before any product can move beyond `Candidate`.
- `DSers` comparison remains incomplete for the preferred replacement direction because the session redirected to the login page again in this pass.
- The captured CJ replacement candidate now has ZA closure, but the route is still commercially weak because shipping materially outweighs item cost and the delivery/DDU posture is unattractive for current launch planning.
- The public ZA-facing AliExpress comparison improves comparison coverage and provides a usable landed-cost signal, but it still does not close preferred-supplier selection or final merchandising-fit risk for the preferred candidate.
- The preferred supplier-path candidate still needs exact item-reference confirmation, current ZA shipping reconfirmation, product-dimensions clarity, and final Product Owner commercial approval before formal replacement can be approved.
- The preferred path now has stronger planning-margin visibility, but delivery expectation is still not proven as `<=21` business days and the path remains blocked from `Supplier verified`.
- Current supplier proof is stale/incomplete because exact current item URL, item price, shipping price, delivery estimate, evidence timestamping, dimensions, image suitability, description facts, and risk notes are still missing.
- Price bands are now documented for planning, but final live pricing remains unapproved until later commercial sign-off.
- The manual route must avoid storing supplier credentials anywhere in the repo or artefacts.
- Office & Desk and Tech Accessories still require careful compatibility/returns review because several planned products are accessories with variant or quality risk.
- Kitchen & Storage includes several bulkier or packaging-sensitive items that likely need CJdropshipping-versus-DSers shipping comparison before verification.
- Contact/About route availability no longer blocks unpublished preview or launch readiness; supplier verification and later launch collection setup remain the active blockers.
- Storefront password protection is currently active, which reduces general-public exposure risk but does not remove the need to manage thin direct collection URLs carefully behind the password.
- Long South Africa delivery windows, DDU duty handling, and shipping-heavy landed costs are now the immediate commercial blockers highlighted by the captured evidence.
- If launch departments remain on `all-products` too long, browse intent clarity and department-level QA confidence remain weaker than the approved launch taxonomy intends.
- If dedicated department links are enabled before collections and content are ready, empty or sparse landing pages may weaken trust and navigation quality.
- If department links are switched while the preview template still presents a generic static-safe collection heading and placeholder-style product-card coverage, shoppers may receive a misleading browse experience even when the collection route itself is reachable.
- If density thresholds are met only through weak-fit or filler products, department trust and merchandising quality may still fail even when the collection count looks acceptable on paper.
- If replacement candidates are allowed to inherit implied readiness without evidence, the catalogue plan may appear healthier on paper than it is in verified launch terms.
- `artifacts/` remains untracked and should not be committed unless separately approved.

## Recommended sequencing

1. Manual Contact/About Shopify Admin setup and preview verification: completed via Manual Track A.1.
2. Docs-only closure for Contact/About evidence: completed in this pass.
3. Slice 11G.2 first-six supplier evidence capture: completed and committed.
4. Slice 11H docs-only commercial gap-closure plan: completed and committed.
5. Slice 11I targeted supplier gap-closure evidence pass: completed in this pass.
6. Slice 12D docs-only department destination strategy: completed in this pass.
7. Slice 12E docs-only launch collection setup content plan: completed in this pass.
8. Slice 12F read-only launch collection Admin readiness check: completed and committed.
9. Slice 12G read-only launch collection preview evidence and density review: completed in this pass.
10. Slice 12H docs-only collection readiness gap plan: completed in this pass.
11. Slice 11K docs-only collection allocation and replacement planning: completed and committed.
12. Slice 11L replacement candidate supplier evidence pass: completed and committed.
13. Slice 11M replacement candidate commercial readiness plan: completed and committed.
14. Slice 11N supplier evidence closure for `Jewellery / accessory organiser`: completed and committed.
15. Slice 11O supplier-path decision for `Jewellery / accessory organiser`: completed and committed.
16. Slice 11P DSers comparison and commercial assessment for `Jewellery / accessory organiser`: completed and committed.
17. Slice 11Q current supplier proof and formal replacement evidence closure for `Jewellery / accessory organiser`: completed and committed.
18. Slice 11R supplier proof capture status for `Jewellery / accessory organiser`: completed and committed.
19. Slice 12I preview catalogue staging blocked-status update: completed and committed.
20. Slice 12J preview product visibility foundation: completed and committed.
21. Slice 12K preview product staging and Playwright/Admin staging retry: paused/deferred pending local supplier shortlist approval.
22. Slice 13A docs-only local supplier pivot and launch sourcing matrix update: completed and committed.
23. Slice 13C docs-only local supplier preview product shortlist update: completed and committed.
24. Post-Slice 13C tracker sync: completed and committed.
25. Slice 13D docs-only local supplier proof pack update: completed and committed.
26. Slice 13E docs-only supplier proof gap-closure update: completed and committed.
27. Slice 13F docs-only preview-staging preparation pack update: completed and committed.
28. Slice 13G preview-only product staging safety controls: completed and committed at `0b594c40a97bca29481e947092d4854f4910b9a4`.
29. Slice 13I controlled Shopify Admin preview-only product staging for five approved handles: completed in this pass (documented locally; not committed until Product Owner review).
30. Product Owner review of Slice 13I Admin outcome, authenticated preview-theme PDP/collection validation when password access is available, and decision on any follow-on write scope.
31. Keep the seven shortlisted proof-pack items at `Supplier proof in progress` only, keep `Cable Organiser / Cable Management item` paused unless narrowed or re-costed successfully, keep `ZA Dropshipping` slots pending app/admin review, and keep `Beauty & Hair` outside the launch taxonomy.
32. Resume broader Shopify Admin automation or additional product staging only after Product Owner explicitly approves a follow-up path beyond Slice 13I.

## Handoff queue

- Keep `artifacts/` excluded from any commit unless separately approved.
- Preserve the Manual Track A.1 evidence bundle as the current Contact/About unpublished-preview verification record.
- Preserve `artifacts/supplier-verification/slice-11g2/session-access-summary.md` as the initial session-access record and `artifacts/supplier-verification/slice-11g2/first-six-supplier-verification-summary.md` as the current first-batch evidence record.
- Preserve `artifacts/supplier-verification/slice-11i/first-six-gap-closure-summary.md` as the current targeted gap-closure evidence summary.
- Use the Slice 11F manual guide as execution input for any later comparison-only follow-up pass.
- Use the Slice 11H price bands and commercial thresholds as planning gates only until a later approved pricing decision is made.
- Use `docs/content/mzansi-select-launch-collections-v1.md` as the source of truth for launch collection handles, intro copy, and SEO placeholders in any later Shopify Admin setup pass.
- Use `artifacts/platform/slice-12f-launch-collection-admin-readiness-20260429-172417/` as the read-only evidence bundle for the current launch collection readiness posture.
- Use `artifacts/platform/slice-12g-launch-collection-preview-density-20260429-173855/` as the current unpublished-preview collection route and density evidence bundle.
- Use `artifacts/supplier-verification/slice-11l/jewellery-accessory-organiser-evidence-summary.md` as the current replacement-direction evidence summary for the preferred `Adhesive Wall Hooks Pack` replacement path.
- Use `artifacts/supplier-verification/slice-11n/jewellery-accessory-organiser-evidence-summary.md` as the current supplier-evidence-closure summary for the organiser replacement route.
- Use [docs/catalogue/local-supplier-sourcing-matrix-v1.md](/d:/dev/mzansi-select-shopify/docs/catalogue/local-supplier-sourcing-matrix-v1.md) as the source of truth for the approved local-first supplier strategy, supplier tiers, and launch collection supplier matrix.
- Use the Slice 13F preparation pack there as the source of truth for the current preview-preparation posture on the first shortlist subset.
- Use the Slice 12J local theme changes before approving any later preview-data staging; collection and PDP routes now prefer live Shopify data where present, while purchase actions remain disabled and preview-only.
- Treat Slice 12K Playwright/Admin staging work as parked for broader automation until Product Owner reviews Slice 13I and any later write-action scope.
- Do not expand Shopify Admin automation or additional product writes beyond the approved Slice 13I five-product scope until Product Owner explicitly approves a follow-up path.
- Treat `Preview staged` as preview-store visibility only; it does not imply supplier approval, launch approval, final pricing approval, delivery approval, or claims approval.
- Treat `Compact Organiser Basket`, `2-Layer Carry Handle Container 3.8L`, `Hook-over Door Basket`, `Mini Plastic Divider Basket`, `Sink Strainer, stainless steel`, `Velcro Cable Tidies` / `Neat Cables Label Pack`, and `Acrylic Tablet or Phone Stand` as `Supplier proof in progress` only until the remaining evidence gaps and Product Owner commercial decision are closed.
- Treat `Sink Strainer - Stainless Steel`, `Compact Organiser Basket`, `Mini Plastic Divider Basket`, `Cable Tidies Set`, and `Acrylic Tablet or Phone Stand` as the Slice 13F preparation-pack subset; Slice 13I now created matching **preview-only** Shopify products for those five handles — still not `Supplier verified`, not final-priced, not delivery- or claims-approved, and not final launch approved.
- Treat `2-Layer Carry Handle Container 3.8L` and `Hook-over Door Basket` as lower-priority for preview-staging preparation until dimensions, image permission, delivery handling, and price-positioning closure improve.
- Treat `Cable Organiser / Cable Management item` as paused until a narrower exact product or lower-cost confirmation is captured.
- Treat the remaining Slice 13C shortlisted products as `Candidate` only unless a later approved pass records a different status with evidence.
- Treat the two `ZA Dropshipping` shortlist slots as pending app/admin review until product, stock, and margin proof is captured inside that workflow.
- Keep female hair pieces outside the launch taxonomy and treat them as a later Slice 13B opportunity assessment only.
- Keep launch department navigation on `{{ routes.all_products_collection_url }}` until the four approved launch collections exist and are approved for exposure.
- Keep launch department navigation on `{{ routes.all_products_collection_url }}` until Product Owner explicitly accepts the current collection density and direct-URL exposure posture.
- Keep launch department navigation on `{{ routes.all_products_collection_url }}` until Product Owner explicitly accepts the current collection density and preview presentation as department-appropriate after the Slice 12J live-data rendering path is validated on the approved unpublished theme.
- Use the Slice 12H density gates when evaluating any later launch-collection exposure decision: minimum preview threshold `3`, preferred public launch threshold `5`, and no switch while any launch collection remains at `1` product.
- Treat the Slice 11K replacement shortlist as planning-only except where Slice 11L now adds product-specific evidence; even there, the preferred `Jewellery / accessory organiser` candidate must remain `Candidate` until shipping, landed cost, and comparison closure are complete.
- Use the Slice 11R supplier-proof capture status before allowing `Jewellery / accessory organiser` to move into formal replacement approval review or to formally replace `Adhesive Wall Hooks Pack` in the live launch catalogue matrix.
- Use the Slice 12J preview-rendering foundation before approving any later Shopify product-data staging intended for visible storefront review; the local theme now prefers live Shopify collection/PDP data where present, the safe push target is reconciled, and the remaining blocker is authenticated storefront preview access.
- Do not expose expansion-ready department links as launch destinations until a later approved expansion pass.
- Do not store supplier credentials in the repo during any pass.
- Capture all required supplier evidence before recommending any status movement beyond `Candidate`.
- Follow the recorded sequencing before any product import planning decision is requested.
- Record `Tracker status` and `LLD status` in every handoff.

## Final handoff summary

Slice 13I executed a Product Owner–approved **narrow** Shopify Admin pass: five preview-only products were **created**, assigned only to existing launch collections, tagged for Slice 13G storefront safety, priced at `0.00` placeholder with zero stock and `DENY` oversell, with empty media, and published to **Online Store** for password-gated preview review. No theme publish, no live theme overwrite, no checkout/shipping/market/tax/payment edits, and no collection structure changes. All five remain `Supplier proof in progress` only. Unauthenticated `preview_theme_id` URL checks still return the storefront password page — authenticated preview remains required to confirm PDP/collection rendering. Evidence: `artifacts/platform/slice-13i-preview-only-product-staging-20260503-003149`. `artifacts/` remains untracked and uncommitted.

---

**Footer Standard For This Pass:** Slice 13I controlled Shopify Admin preview-only product staging recorded locally. Five products created with approved tags, placeholder pricing, and Online Store publication for preview only; no theme code change in this pass; broader automation still gated by Product Owner; `artifacts/` remains untracked and uncommitted pending Product Owner review before any docs commit.

## Slice 15M preview push

- Slice 15M final strict-safe clean theme-surface selected-file push completed.
- Temp surface included selected files plus recursive validation dependencies only.
- Only `assets/theme.css` and `layout/theme.liquid` were selected for push.
- Target was preview theme `151207542967 / Mzansi Select MVP Preview / unpublished`.
- Live theme `148914077879 / Horizon` remained live and untouched.
- No publish/live overwrite/Admin/product/collection/checkout/commercial changes occurred.
- Evidence folder: `artifacts/devops/slice-15m-final-strict-clean-theme-surface-push-20260508-230417/`.
- Next recommended owner: QA / Test Engineer for Slice 15N.

## Slice 15N clean authenticated mobile readiness rerun (QA) — accepted FAIL

- **Decision:** accepted by the Product Owner as **FAIL**.
- **Evidence folder:** **`artifacts/qa/slice-15n-clean-mobile-readiness-rerun/20260508-230846/`**.
- **Authentication gate:** no route was measured on **`/password`**.
- **Coverage:** all **20** required routes were tested, including **`/search?q=strainer&type=product`**, across the required mobile/tablet viewports; the optional desktop baseline also ran.
- **Blocking result:** page-level horizontal overflow persisted on **all 20 routes** at **`360x800`**, **`390x844`**, **`414x896`**, and **`768x1024`**.
- **Persistent overflow signature:** **`max_scroll_w=861`** with top offenders **`div.tb-item`** and **`nav .nav-right`**; the earlier **Slice 15G** **`908px`** / **`section#deals`** signature is no longer the active blocker.
- **Regression checks preserved in QA evidence:** **Slice 14B** department routing **PASS**, **Slice 14C** wishlist honesty **PASS**, **Slice 14D** homepage card-to-PDP **PASS**, PDP preview-only safety **PASS**, **`/search`** **HTTP 200** and measured, **`/search?q=strainer&type=product`** **HTTP 200** and measured.
- **Blocked path:** **Slice 15A** private preview sharing remains blocked until a later clean authenticated rerun passes.

## Slice 15O persistent topbar / nav **861px** overflow remediation (theme)

- **Scope:** preserve the approved north-star presentation while eliminating the shared authenticated mobile/tablet overflow source behind the persistent **`861px`** **`div.tb-item`** / **`nav .nav-right`** signature.
- **Exact root cause found:** the mobile shell-swap depended on the stylesheet-only selector block **`@media (max-width: 900px) { header.site-header-desktop, nav.site-nav-desktop, .footer-desktop { display: none !important; } }`**. When that shell-only CSS path was not the active winner in preview, desktop header/nav/footer chrome remained in the mobile render flow and reopened the page width through desktop topbar/nav descendants, which matches the authenticated QA screenshots and the persistent **`div.tb-item`** / **`nav .nav-right`** offender signature.
- **Theme hardening applied:** **`layout/theme.liquid`** now sets an early **`data-shell-mode`** runtime flag from **`matchMedia('(max-width: 900px)')`** and enforces the shell swap through stable **`data-shell`** hooks on desktop/mobile header, nav, overlay/drawer, and footer markup. This keeps the approved mobile composition active even if preview serves the wrong stylesheet winner or stale shell-only cascade.
- **Theme files touched:** **`layout/theme.liquid`**, **`sections/site-header.liquid`**, **`sections/primary-navigation.liquid`**, **`sections/site-footer.liquid`**.
- **Theme Check note:** repo-root **`shopify theme check --path . --fail-level error`** still fails only on pre-existing artifact JSON files under **`artifacts/devops/`**; a sanitized active-theme-surface rerun against **`assets/`**, **`config/`**, **`layout/`**, **`locales/`**, **`sections/`**, **`snippets/`**, and **`templates/`** returns **warnings only** with **zero errors**.
- **Local validation (theme dev surface):** all **20** required routes at **`http://127.0.0.1:9292`**, including **`/search?q=strainer&type=product`**, returned **HTTP 200** and **zero page-level horizontal overflow failures** across **`360x800`**, **`390x844`**, **`414x896`**, and **`768x1024`** after the hardening pass.
- **Regression checks preserved locally:** **Slice 14B** department routing remained present in chrome across all required viewports, **Slice 14C** wishlist honesty remained intact (**no `#wishlist` route, no pressed toggle states**), **Slice 14D** homepage first card still reached **`/products/cable-tidies-set`**, and preview-only PDP safety remained intact across all required PDP routes.
- **Next recommended owner:** **Product Owner** for bounded preview-only selected-file push approval; then **DevOps / Platform Engineer** for the approved unpublished preview push and **QA / Test Engineer** for **Slice 15P** rerun plus the later **Slice 15A** re-enable decision.

## Slice 15O selected-file preview push

- Slice 15O selected-file preview push completed.
- Target preview theme: `151207542967 / Mzansi Select MVP Preview / unpublished`.
- Live theme `148914077879 / Horizon` remained live and untouched.
- Push command selected only `layout/theme.liquid`, `sections/site-header.liquid`, `sections/primary-navigation.liquid`, and `sections/site-footer.liquid`.
- A clean temp theme surface was used for strict validation before upload.
- Evidence folder: `artifacts/devops/slice-15o-selected-file-preview-push-20260509-064419/`.
- No publish/live overwrite/Admin/product/collection/checkout/commercial changes occurred.
- Next recommended owner: QA / Test Engineer for Slice 15P.

## Slice 15P clean mobile readiness rerun (QA) — accepted PASS WITH NOTES

- **Decision:** accepted by the Product Owner as **PASS WITH NOTES**.
- **Evidence folder:** **`artifacts/qa/slice-15p-clean-mobile-readiness-rerun/20260509-070620/`**.
- **Preview theme tested:** **`151207542967 / Mzansi Select MVP Preview / unpublished`**.
- **Authentication gate:** no route was measured on **`/password`**.
- **Coverage:** all **20** required routes were tested, including **`/search?q=strainer&type=product`**; required mobile/tablet viewports **`360x800`**, **`390x844`**, **`414x896`**, and **`768x1024`** passed; optional **`1440x1000`** desktop baseline also ran.
- **Overflow result:** page-level horizontal overflow is resolved across all required mobile/tablet viewports; the previous **`861px`** topbar / nav signature is gone and **`max_overflow_px=0`** across all required routes/viewports.
- **Regression checks preserved in QA evidence:** **Slice 14B** department routing remains intact, **Slice 14C** wishlist honesty remains intact, **Slice 14D** homepage card-to-PDP navigation remains intact, PDP preview-only safety remains intact, and both **`/search`** plus **`/search?q=strainer&type=product`** pass. Mobile shell/global chrome remained usable.
- **Notes recorded:** legal/support link automation expected **`/policies/`** links on home/collection pages, but footer markup routes privacy/terms via **`/pages/about#privacy-policy`** and **`/pages/about#terms`**; dedicated **`/policies/*`** routes still loaded with **HTTP 200** and no overflow. Some off-canvas / drawer / chrome elements still appear in bounding-box reporting, but they do **not** create document-level horizontal overflow.
- **Slice 15A posture:** private preview sharing is re-enabled from the QA mobile-readiness perspective and remains **feedback-only private preview testing**.
- **Guardrails preserved:** **no** public launch approval, **no** checkout/payment testing approval, **no** product import approval, **no** Shopify Admin edit approval, **no** **`Supplier verified`** promotion, **no** final pricing approval, **no** delivery promise approval, and **no** product-claim approval.
- **Next recommended owner:** **Product Owner / user** to execute controlled **Slice 15A** private preview sharing.
