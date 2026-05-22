# Slice 21FL — Fresh-cache automated route confirmation

**Document type:** Read-only live rendered QA  
**Prepared:** 2026-05-22  
**Owner:** QA / Test Engineer  
**Slice:** **21FL**  
**Store:** `dropshippoc.myshopify.com`  
**Live theme:** `151207542967` / Mzansi Select MVP Preview / **live**

**Upstream:** manual verification update commit `e7d27b7`  
**Evidence (local; not committed):** `artifacts/qa/slice-21fl-fresh-cache-route-confirmation/`

---

## 1. Executive verdict

**FAIL**

This fresh-cache automated confirmation did **not** reproduce the Product Owner manual result consistently across all tested live surfaces.

The automated run confirmed:

- homepage on theme `151207542967`
- search on theme `151207542967`
- the previously problematic PDP on theme `151207542967`
- mobile `/collections/all` on theme `151207542967`
- mobile `/collections/all` product count `15`
- no checked hidden-handle leakage on mobile `/collections/all`
- no cart/add, no quick-add, no visible risky commerce, and no Liquid errors on the passing routes

However, the same fresh-cache automated run still reproduced the older failure pattern on **desktop** `/collections/all`:

- `Shopify.theme.id` returned `148914077879`
- theme name returned `Horizon`
- product count returned `17`, not `15`
- all four checked hidden handles were present
- `/cart/add` forms returned `17`
- quick-add nodes returned `72`
- visible Liquid error count returned `51`

Because the required desktop `/collections/all` route still failed in a clean automated session, **21FL fails**.

---

## 2. Pre-check

| Check | Result |
| --- | --- |
| Branch | `master` |
| `HEAD` includes accepted manual-update commit | **PASS** — `e7d27b7` |
| `artifacts/` ignored | **PASS** |
| `tools/catalogue/` untracked | **PASS** |
| Admin mutation / push / publish / rollback planned | **No** |

No Shopify Admin mutation, no theme push, no theme publish, no rollback, no checkout/payment/customer-flow enablement, no import/sync, no app install, no media upload, no product deletion, and no Supplier verified change were performed in this slice.

---

## 3. Fresh-cache cleanup steps

The run used a brand-new headed Chromium session with **no** reused Playwright storage state.

Per viewport, the harness performed:

- fresh non-persistent browser context creation
- no prior Playwright storage-state load
- origin auth state cleared before route checks
- CDP cache disable + browser-cache clear where supported
- manual storefront unlock in the browser only
- `localStorage.clear()`
- `sessionStorage.clear()`
- IndexedDB delete attempt
- Cache Storage delete attempt
- service-worker unregister attempt
- cache-busting `qa=21fl-<timestamp>-<viewport>` query params on every tested URL

Observed cleanup outcome in the run summary:

- CDP cache disable: **enabled**
- `localStorage` clear: **successful**
- `sessionStorage` clear: **successful**
- IndexedDB databases found: **none**
- Cache Storage entries found: **none**
- service-worker registrations removed: `0`

---

## 4. Routes and viewports tested

### Desktop `1366x768`

- `/`
- `/collections/all`
- `/search?q=organiser&type=product`
- `/products/modern-kitchen-accessories-soap-dispenser-set-liquid-hand-soap-dispenser-pump-bottle-brushes-holds-and-stores-sponges-scrubbers-1`

### Mobile `390x844`

- `/`
- `/collections/all`
- `/search?q=organiser&type=product`
- `/products/modern-kitchen-accessories-soap-dispenser-set-liquid-hand-soap-dispenser-pump-bottle-brushes-holds-and-stores-sponges-scrubbers-1`

---

## 5. Theme ID per route

| Route | Desktop | Mobile | Result |
| --- | --- | --- | --- |
| `/` | `151207542967` | `151207542967` | **PASS** |
| `/collections/all` | `148914077879` / Horizon | `151207542967` | **FAIL** |
| `/search?q=organiser&type=product` | `151207542967` | `151207542967` | **PASS** |
| Problem PDP | `151207542967` | `151207542967` | **PASS** |

---

## 6. Catalogue result

### Desktop `/collections/all`

**FAIL**

- observed product count: `17`
- required product count: `15`
- checked hidden handles present:
  - `adjustable-laptop-stand`
  - `available-regular-price`
  - `keep-room-tidy-for-dirty-clothes-waterproof-fabric-foldable-hamper`
  - `usb-c-charging-cable-1-2m`

### Mobile `/collections/all`

**PASS**

- observed product count: `15`
- all four checked hidden handles absent

---

## 7. Commerce safety result

### Passing routes

Homepage, search, the problem PDP, and mobile `/collections/all` all passed the required commerce-safety checks:

- `/cart/add` forms: `0`
- quick-add nodes: `0`
- visible risky commerce elements: `0`
- no visible Add to Cart / checkout / dynamic checkout
- no Supplier verified claim
- no horizontal overflow

### Failing route

Desktop `/collections/all` failed:

- `/cart/add` forms: `17`
- quick-add nodes: `72`
- visible risky commerce elements: `17`

---

## 8. Liquid error result

### Passing routes

- homepage: `0`
- search: `0`
- problem PDP: `0`
- mobile `/collections/all`: `0`

### Failing route

- desktop `/collections/all`: `51`

---

## 9. Price-to-confirm result

**PASS**

`Price to be confirmed` remained visible on:

- homepage
- search
- problem PDP
- mobile `/collections/all`

Desktop `/collections/all` did **not** preserve that posture in the failing Horizon render.

---

## 10. Wishlist spot-check result

**FAIL IN AUTOMATION / INCONCLUSIVE AS A STOREFRONT REGRESSION**

The automated wishlist click proof did **not** pass in this harness run, but the failure appears to be harness-side rather than clear storefront breakage:

- route scans still detected wishlist button presence on MVP surfaces
  - homepage: `6`
  - search: `6`
  - problem PDP: `11`
- the dedicated wishlist click step used a narrower selector contract and did not bind to those buttons
- because of that selector mismatch, the automated wishlist step recorded `foundButton: false` on all tested surfaces

So the automated wishlist proof is **inconclusive** in **21FL** and should not, on its own, be treated as a confirmed wishlist regression against accepted **21FJ**.

---

## 11. Comparison against manual verification

This slice directly conflicts with the Product Owner manual browser-console result recorded in the earlier update:

- manual verification showed desktop `/collections/all` on `151207542967` with `15` products and no leakage
- fresh-cache automation reproduced desktop `/collections/all` on `148914077879` with `17` products and commerce leakage

That means the split-theme issue still appears **intermittent or session-dependent**, rather than cleanly closed.

---

## 12. Final assessment

The best current interpretation is:

- the issue is **not consistently reproducible** across every browser session
- it is still reproducible in a fresh automated desktop run
- the problem PDP now looks stable on MVP
- the remaining unstable surface is still **desktop `/collections/all`**

So the split-theme issue cannot yet be treated as fully closed on automated evidence.

---

## 13. Remaining launch blockers

- desktop `/collections/all` still intermittently resolves to Horizon in fresh automation
- desktop `/collections/all` still intermittently leaks hidden products and active commerce DOM
- automated wishlist click proof needs a selector-contract refresh before it can be used as a reliable regression gate

---

## 14. Evidence folder

- `artifacts/qa/slice-21fl-fresh-cache-route-confirmation/2026-05-22T14-34-21-695Z/summary.json`

---

## 15. Recommended next owner

**Product Owner** to decide whether to:

- treat this as an intermittent platform/session issue and pursue Shopify Support escalation with both manual and automated evidence, or
- approve one narrowly targeted follow-up automation/debug slice focused only on desktop `/collections/all` session variance
