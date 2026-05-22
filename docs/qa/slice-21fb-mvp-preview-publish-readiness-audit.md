# Slice 21FB — MVP preview publish-readiness audit

**Document type:** Read-only MVP preview publish-readiness audit  
**Prepared:** 2026-05-22  
**Owner:** QA / Test Engineer  
**Slice:** **21FB**  
**Store:** `dropshippoc.myshopify.com`  
**Preview theme:** `151207542967` / Mzansi Select MVP Preview / **unpublished**  
**Live theme (comparison only):** `148914077879` / Horizon / **live** — **not** pushed or published in this slice

**Upstream:**

- **Slice 21EZ** (`0af08e3`) — Admin **13** visible / **15** hidden
- **Slice 21FA** (`fcc77cd`) — live Horizon QA **FAIL**
- **Slice 21FA-B** (`0285154`) — live commerce gate **PASS WITH NOTES**; grid count still **17**

**Evidence (local; not committed):**

- Admin: `artifacts/catalogue/slice-21fb/2026-05-22T10-17-58/admin-baseline.json`
- Rendered QA: `artifacts/catalogue/slice-21fb/2026-05-22T10-19-21/summary.json`

---

## 1. Executive verdict

**PASS WITH NOTES**

MVP preview theme **`151207542967`** is **safer and closer** to a bounded catalogue-only MVP launch than the current live Horizon theme. Publishing MVP preview (with separate Product Owner approval for **publish** only) would **reduce** current launch risk on catalogue visibility, commerce gating, and mobile listing surfaces.

| Area | MVP preview | Live Horizon (21FA / 21FA-B) |
| --- | --- | --- |
| `/collections/all` product count | **13** — **PASS** | **17** — **FAIL** |
| **21EZ** four removals absent | **PASS** (all routes) | **FAIL** — still in grid HTML |
| Commerce gate — listings (desktop + mobile) | **PASS** — **0** cart/quick-add/ATC | **FAIL** on mobile collection (**17** forms in **21FA**); desktop **PASS** post-**21FA-B** |
| Commerce gate — PDPs | **13/13 PASS** | **13/13 PASS** post-**21FA-B** |
| Hidden **15** visible on storefront | **PASS** — none linked | **FAIL** — four **21EZ** handles still linked |
| Demo/static placeholder products | **PASS** | **PASS** |
| Supplier verified | **PASS** — none | **PASS** — none |
| Mobile horizontal overflow | **PASS** (`375/375`) | Not re-run; prior **21CT** issues on preview were fixed in **21DC–21DD** |

**This slice does not approve theme publish, live overwrite, checkout, or customer-flow enablement.**

---

## 2. Pre-check

| Check | Result |
| --- | --- |
| Branch | `master` @ **`0285154`** (`fix: align live storefront to 13-sku baseline`) |
| `artifacts/` | **gitignored** ✓ (`.gitignore:5`) |
| `tools/catalogue/` | Untracked — **not** committed ✓ |
| Theme publish | **Not** planned or performed ✓ |
| Live theme push | **Not** performed ✓ |
| Shopify Admin mutation | **Not** performed ✓ |
| Checkout / payment / customer-flow | **Not** enabled ✓ |
| Product import/sync, app install, media, delete, price/inventory/claims | **Not** performed ✓ |

---

## 3. Admin catalogue baseline

**Publication:** `gid://shopify/Publication/169105293495` (Online Store)  
**Method:** read-only `shopify store execute` GraphQL (`artifacts/catalogue/slice-21fb/run-admin-baseline.mjs`)

| Metric | Result | Expected |
| --- | ---: | ---: |
| Online Store visible | **13** | **13** |
| Hidden from Online Store | **15** (all checked handles **unpublished**) | **15** |
| Commerce tags on visible set | **`non-purchasable`** + **`price-to-confirm`** on **13/13** | **13/13** |
| Supplier verified on visible | **None** | **None** |

**21EZ removals (must stay hidden):** all **four** `published: false` — `adjustable-laptop-stand`, `usb-c-charging-cable-1-2m`, `available-regular-price`, `keep-room-tidy-for-dirty-clothes-waterproof-fabric-foldable-hamper`.

---

## 4. Routes and viewports tested

**Preview parameter:** `?preview_theme_id=151207542967` on all storefront URLs  
**Unlock:** manual password (headed Chromium; **no** password stored in docs or evidence)

| Viewport | Size |
| --- | --- |
| Desktop | **1366×768** |
| Mobile | **390×844** |

| Route | Desktop | Mobile |
| --- | --- | --- |
| Homepage `/` | ✓ | ✓ |
| `/collections/all` | ✓ | ✓ |
| `/search?q=organiser&type=product` | ✓ | ✓ |
| **13** visible PDPs (`/products/{handle}`) | ✓ (all **13**) | — (desktop only for PDP sweep) |

**Harness:** `artifacts/catalogue/slice-21fb/run-mvp-preview-qa.mjs`

---

## 5. Hidden-product absence

| Surface | Four **21EZ** removals absent? | Product link count | Notes |
| --- | --- | ---: | --- |
| Homepage | **PASS** | **6** | Rails show subset of catalogue (expected) |
| `/collections/all` | **PASS** | **13** | Matches Admin visible count |
| Search organiser | **PASS** | **6** | Matches visible organiser subset |
| All **15** hidden handles | **PASS** | — | None linked on tested routes |

---

## 6. Commerce-gate results

| Surface | cart/add forms | quick-add | enabled ATC | dynamic checkout | Price to be confirmed (PDP) |
| --- | ---: | ---: | ---: | ---: | --- |
| Homepage (desktop + mobile) | **0** | **0** | **0** | **0** | n/a |
| `/collections/all` (desktop + mobile) | **0** | **0** | **0** | **0** | n/a |
| Search organiser (desktop + mobile) | **0** | **0** | **0** | **0** | n/a |
| **13** PDPs | **0** | **0** | **0** | **0** | **13/13** (body/summary copy) |

**Supplier verified:** not observed on any tested surface.

**Product cards:** link to PDPs; **no** Add to Cart, **no** cart/add forms, **no** checkout path from product surfaces.

---

## 7. Visual and layout

| Check | Result |
| --- | --- |
| Homepage visually acceptable | **PASS WITH NOTES** — MVP sections present (`hero-collage`, product rails); subset of **13** on homepage is expected |
| Search / collection usable | **PASS** |
| PDPs usable as catalogue pages | **PASS** |
| Mobile horizontal overflow | **PASS** — `documentElement` **375/375** on homepage, collection, search |
| Newsletter / account | **Deferred / safe** — footer newsletter inputs **disabled** (“Email sign-up paused”); no active account checkout path exercised |
| Broken sections / missing layout | **None observed** on tested routes |

**Non-blocking notes:**

- Harness flagged benign footer/legal **“coming soon”** / **placeholder** copy on deferred links and policy stubs — intentional preview-safe deferrals, not demo product placeholders.
- PDP gate notice element (`.product-commerce-gate-notice`) not always present in DOM; **“Price to be confirmed”** and **0** purchase affordances still **PASS** via summary copy and commerce probes.

---

## 8. Comparison — MVP preview vs live Horizon

| Risk | Live Horizon today | MVP preview |
| --- | --- | --- |
| Catalogue count drift (**13** Admin vs storefront) | **High** — **17** cards on `/collections/all` after **21FA-B** | **Low** — **13** cards align with Admin |
| Unpublished SKUs on storefront | **High** — **four** **21EZ** handles still in live grid | **Low** — **0** hidden handles on tested surfaces |
| Mobile listing commerce leak | **High** (**21FA**) — mitigated on desktop post-**21FA-B**; Horizon quick-add pipeline | **Low** — **0** forms on mobile collection |
| Theme architecture | Horizon `main-collection` + `content_for` cards + ongoing patch debt | MVP `main-collection-foundation` + `live-product-card` + prior **21EV**/**21EU** preview work |
| Publish readiness | **Not** recommended as-is for catalogue-only MVP | **Recommended candidate** for bounded publish **after** PO publish approval |

**Conclusion:** For a **catalogue-only**, **non-purchasable** MVP, MVP preview is **safer** than continuing Horizon-first patching. Publishing MVP preview would **reduce** launch risk relative to leaving **148914077879** live, provided publish is executed as a **controlled** slice (publish approval, password/restricted access, Security re-review, **no** checkout enablement).

---

## 9. Blockers before publishing MVP preview

| Blocker | Owner |
| --- | --- |
| Explicit Product Owner approval for **theme publish** (not granted in **21FB**) | **Product Owner** |
| Bounded publish execution slice (publish **`151207542967`** or duplicate-to-live workflow — **not** this audit) | **DevOps / Platform Engineer** |
| Post-publish rendered QA on **live** role (or continued password gate policy) | **QA / Test Engineer** |
| Checkout / payment / customer-flow remain **blocked** | **Product Owner** |
| **21EY** launch-readiness: **0/13** commerce-ready; image-rights / supplier-proof / claim gates still open | **Product Manager** |
| Security / Compliance re-review if customer-facing URL policy changes | **Security / Compliance Engineer** |

**Not blockers for preview quality (already acceptable on preview):** Admin **13/15** baseline, commerce gate, hidden absence, mobile overflow on tested routes.

---

## 10. Rollback and publish notes (next slice)

- **Rollback:** keep live **`148914077879`** published; do **not** overwrite live until PO approves. If MVP preview is published by mistake, re-publish previous live theme from Shopify Admin theme library (Horizon backup).
- **Recommended publish path:** PO-approved **21FC** (or equivalent) — publish **`151207542967`** only after sign-off; re-run **13**-SKU storefront QA on **live** URL; confirm password/restriction policy.
- **Do not** enable checkout, markets payments, or customer accounts in the same slice as theme publish.

---

## 11. Commands executed

```bash
git status --short --branch
git log -1 --oneline
git check-ignore -v artifacts/
node artifacts/catalogue/slice-21fb/run-admin-baseline.mjs
node artifacts/catalogue/slice-21fb/run-mvp-preview-qa.mjs
```

---

## 12. Recommended next owner

**Product Owner** — accept **21FB** verdict; approve a **bounded MVP preview publish** slice (separate from this read-only audit) **or** explicitly defer publish and continue non-storefront gates (image rights, supplier proof, Security).

**Secondary:** **DevOps / Platform Engineer** — execute publish-only slice when approved; **QA** — post-publish live-role validation.
