# Slice 21FI — post-fix wishlist rendered QA

**Document type:** Read-only rendered QA  
**Prepared:** 2026-05-22  
**Owner:** QA / Test Engineer  
**Slice:** **21FI**  
**Store:** `dropshippoc.myshopify.com`  
**Live theme:** `151207542967` / Mzansi Select MVP Preview / **live**

**Upstream:** **21FH** (`3f236f411650fbc0629c2b04acd221a5f2995dbd`)  
**Evidence (local; not committed):** `artifacts/qa/slice-21fi-post-fix-wishlist-rendered-qa/`

---

## 1. Executive verdict

**FAIL**

The **21FH** script-loading correction improved wishlist behaviour on **search** and on the tested **tech PDPs**, but wishlist behaviour is still **not reliable on homepage product cards**. Because homepage card toggling remains inconsistent and failed the required localStorage write on both desktop and mobile checks, **21FI does not meet full PASS criteria**.

---

## 2. Pre-check

| Check | Result |
| --- | --- |
| Branch | `master` |
| `HEAD` includes **21FH** | **PASS** — `3f236f411650fbc0629c2b04acd221a5f2995dbd` |
| `artifacts/` ignored | **PASS** |
| `tools/catalogue/` untracked | **PASS** |
| Admin/theme/publish/commerce mutation planned | **No** — read-only QA only |

No Shopify Admin mutation, no theme push, no publish, no checkout/payment/customer-flow enablement, no import/sync, no app install, no media upload, no deletion, and no Supplier verified change were performed in this slice.

---

## 3. Unlock method

- **Method:** headed Chromium, **manual unlock**
- Password was entered in the browser window only
- No password, cookie, token, auth/session file, HAR, trace, screenshot, or raw sensitive output was stored

---

## 4. Routes and viewports tested

### Desktop `1366x768`

- `/`
- `/search?q=organiser&type=product`
- `/products/1pcs-upgradation-adjustable-flatware-tableware-organizer-plastic-multifunctional-drawer-organizer-for-kitchen-counter-utensils-1`
- `/products/low-delay-wireless-tws-games-sports-headset`
- `/products/vertical-office-mouse-wireless-mouse-vertical-mouse`

### Mobile `390x844`

- `/`
- `/search?q=organiser&type=product`
- `/products/low-delay-wireless-tws-games-sports-headset`
- `/products/vertical-office-mouse-wireless-mouse-vertical-mouse`

---

## 5. Wishlist results

### Homepage product cards

**FAIL**

Homepage card behaviour was not stable across repeated live loads:

- desktop pass **A**: wishlist script present, hearts visible, no Liquid error
- desktop pass **B** on the same route: wishlist script absent, visible Liquid error returned
- mobile homepage: wishlist script present and no Liquid error, but the first homepage heart still did **not** toggle state or write localStorage

Observed homepage click result on both desktop and mobile:

- `aria-pressed` stayed `false`
- label stayed `Add ... to wishlist`
- class stayed `p-wish`
- `mzansi-wishlist-v1` remained empty

### Search product cards

**PASS**

On `/search?q=organiser&type=product`:

- heart toggled correctly
- `aria-pressed` updated to `true`
- label changed from **Add** to **Remove**
- class changed to `p-wish is-saved`
- `mzansi-wishlist-v1` was written

Stored data was limited to public metadata only:

- `handle`
- `title`
- `url`

### PDP wishlist hearts

**PASS WITH NOTES**

Tested PDPs:

1. `1pcs-upgradation-adjustable-flatware-tableware-organizer-plastic-multifunctional-drawer-organizer-for-kitchen-counter-utensils-1`  
   Reached via search sync path — wishlist state persisted and synced correctly on that route chain.
2. `low-delay-wireless-tws-games-sports-headset`  
   Desktop and mobile toggle **PASS**
3. `vertical-office-mouse-wireless-mouse-vertical-mouse`  
   Desktop and mobile toggle **PASS**

One additional homepage-linked PDP route was inconsistent in the earlier desktop run and exposed non-MVP behaviour:

- no wishlist button
- visible Liquid error
- `quickAdd: 3`

Because this was not the required tech PDP path and the main reproducible failure remained on homepage cards, it is recorded as a **note** rather than the primary blocker.

---

## 6. localStorage result

### `mzansi-wishlist-v1`

**Mixed**

**PASS on search + tech PDPs**

Examples captured:

```json
[
  {
    "handle": "low-delay-wireless-tws-games-sports-headset",
    "title": "Low-delay Wireless TWS Games, Sports Headset",
    "url": "/products/low-delay-wireless-tws-games-sports-headset"
  }
]
```

```json
[
  {
    "handle": "vertical-office-mouse-wireless-mouse-vertical-mouse",
    "title": "Vertical Office Mouse Wireless Mouse Vertical Mouse",
    "url": "/products/vertical-office-mouse-wireless-mouse-vertical-mouse"
  }
]
```

**FAIL on homepage cards**

- homepage card click left `mzansi-wishlist-v1` empty on desktop
- homepage card click left `mzansi-wishlist-v1` empty on mobile

---

## 7. Reload persistence result

### Search card to PDP chain

**PASS**

For the search result product:

- card toggle wrote `mzansi-wishlist-v1`
- PDP loaded with saved state
- reload preserved saved state
- removing on PDP cleared state back on the card

### Tech PDPs

**PASS**

Desktop and mobile tech PDP toggles updated saved state correctly and wrote public-metadata-only localStorage entries.

### Homepage cards

**FAIL**

Homepage card toggle did not write storage, so reload persistence could not be proven there.

---

## 8. Card/PDP sync result

### Search card ↔ PDP

**PASS**

The search product verified full sync:

- card saved state propagated to PDP
- PDP reload preserved state
- removing on PDP reset the card state

### Homepage card ↔ PDP

**FAIL**

Because the homepage card did not write saved state reliably, homepage card/PDP sync is **not proven** and currently fails the required acceptance bar.

---

## 9. Accessibility label result

**Mixed**

**PASS**

- search cards
- tested tech PDPs

Observed correct transitions:

- `aria-pressed="false"` → `aria-pressed="true"`
- label `Add ... to wishlist` → `Remove ... from wishlist`

**FAIL**

- homepage card labels did not change when clicked

---

## 10. Commerce safety result

**PASS WITH NOTES**

On all passing search/PDP surfaces:

- no Add to Cart
- no `/cart/add` forms
- no quick-add
- no dynamic checkout
- no checkout links
- no login/email/backend/customer dependency for wishlist
- no Supplier verified claim
- price-to-confirm remained visible
- no mobile horizontal overflow on tested mobile routes

Notes:

- the inconsistent homepage-linked/non-tech PDP route in the earlier desktop run exposed `quickAdd: 3`
- `/collections/all` split-theme issue **21FC-C** remains separate and unchanged

---

## 11. Route-level summary

| Surface | Result | Notes |
| --- | --- | --- |
| Homepage desktop | **FAIL** | first repeated load passed script presence, second repeated load returned Liquid error; click did not write storage |
| Homepage mobile | **FAIL** | script present, no overflow, but click still did not toggle/write storage |
| Search desktop | **PASS** | card toggle, storage write, reload persistence, PDP sync all passed |
| Search mobile | **PASS** | route safe; mobile card toggle wrote storage correctly |
| Tech PDP desktop | **PASS** | both tested tech PDPs toggled and wrote storage |
| Tech PDP mobile | **PASS** | both tested tech PDPs toggled and wrote storage |

---

## 12. Evidence folder

Primary run:

- `artifacts/qa/slice-21fi-post-fix-wishlist-rendered-qa/2026-05-22T13-03-18/summary.json`

Desktop confirmation run:

- `artifacts/qa/slice-21fi-post-fix-wishlist-rendered-qa/2026-05-22T13-05-58-confirm/confirmation.json`

Mobile run:

- `artifacts/qa/slice-21fi-post-fix-wishlist-rendered-qa/2026-05-22T13-07-17-mobile/mobile-summary.json`

---

## 13. Remaining blockers

1. **Homepage wishlist card behaviour still fails** — no reliable toggle/localStorage write on the tested homepage heart.
2. **Homepage route appears unstable** — repeated desktop loads alternated between:
   - wishlist script present, no Liquid error
   - wishlist script absent, visible Liquid error
3. **Homepage card/PDP sync not proven** because homepage save state fails.
4. **21FC-C split-theme issue** remains separate and unchanged.

---

## 14. Recommended next owner

**Senior Full-Stack Software Architect / Theme Engineer**

Recommended next slice:

- inspect why homepage card hearts remain non-functional after the 21FH loader fix
- compare homepage card click surface against the passing search card surface
- check whether homepage card overlays, event interception, or mixed rendered assets are preventing the toggle from firing consistently

---

## 15. Safety

This document excludes credentials, cookies, tokens, auth/session files, customer data, order data, payment data, supplier credentials, private dashboard material, HAR, traces, screenshots, and raw sensitive Admin output.
