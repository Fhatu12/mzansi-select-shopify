# Slice 21ES — catalogue removal round 2 (post-21EQ)

**Document type:** Bounded Admin visibility removal  
**Prepared:** 2026-05-22  
**Owner:** DevOps / Platform Engineer  
**Slice:** **21ES**  
**Store:** `dropshippoc.myshopify.com`  
**Online Store publication:** `gid://shopify/Publication/169105293495`  
**Live theme:** `148914077879` / Horizon / **live** (unchanged)  
**Preview theme:** `151207542967` / Mzansi Select MVP Preview / **unpublished** (unchanged)

**Upstream:**

- **Slice 21EQ** — visibility restore (`cfb0358`) — **22** Online Store visible products
- **Slice 21EO** — six Product Owner keep-hidden products (unchanged in this slice)

**Product Owner instruction:** Reversibly remove **five** additional products from **Online Store** visibility. **Expected visible count:** **17**.

**Evidence (local; not committed):** `artifacts/catalogue/slice-21es/`

---

## 1. Executive verdict

**PASS WITH NOTES**

**Five** `publishableUnpublish` operations succeeded. Post-write Admin read-back: **17** **ACTIVE** + **Online Store** visible (was **22**). All **five** round-2 removals are unpublished; original **six** **21EQ** keep-hidden rows remain unpublished. **No** other products touched.

**Note:** Password-gated live storefront render check was **not** completed in this session (manual unlock timeout). Visibility outcome is confirmed via Admin read-back (same class as **21EQ** pre-storefront confirmation). QA may rerun `artifacts/catalogue/slice-21es/run-storefront-verify.mjs` with `--manual-unlock` posture.

---

## 2. Pre-write checkpoint

| Check | Result |
| --- | --- |
| Branch | `master` @ **21EQ** (`cfb0358`) |
| `artifacts/` | **gitignored** ✓ |
| `tools/catalogue/` | Untracked — **not** committed ✓ |
| Shopify CLI auth | **PASS** |
| Theme publish / push / checkout / import / media / delete / claims | **Not** performed ✓ |

---

## 3. Target verification (five removals)

| # | Product Owner title | Handle | Ambiguous? | Was OS visible? |
| ---: | --- | --- | --- | --- |
| 1 | 5-Division Drawer Divider — Preview | `five-division-drawer-divider-preview` | No | Yes |
| 2 | Adjustable Aluminium Phone & Tablet Stand — Preview | `adjustable-aluminium-phone-tablet-stand-preview` | No | Yes |
| 3 | Cable Tidies Set (100 pcs) — Preview | `cable-tidies-set` | No | Yes |
| 4 | Compact Cutlery Drawer Organiser — Preview | `compact-cutlery-drawer-organiser-preview` | No | Yes |
| 5 | Under Cabinet Paper Towel Holder Plastic Wrap Storage… | `under-cabinet-paper-towel-holder-plastic-wrap-storage-holder-wall-mounted-paper-towel-holder-for-kitchen-or-bathroom` | No | Yes |

**Before state (sample):**

| Handle | Media | Tags (summary) |
| --- | ---: | --- |
| `five-division-drawer-divider-preview` | 1 | preview-only, 21EJ neutral, local-supplier-route |
| `adjustable-aluminium-phone-tablet-stand-preview` | 1 | preview-only, 21EJ neutral, local-supplier-route |
| `cable-tidies-set` | 1 | preview-only, 21EJ neutral, local-supplier-route |
| `compact-cutlery-drawer-organiser-preview` | 1 | preview-only, 21EJ neutral, local-supplier-route |
| `under-cabinet-paper-towel-holder-plastic-wrap-storage-holder-wall-mounted-paper-towel-holder-for-kitchen-or-bathroom` | 8 | legacy demo import |

---

## 4. Bounded Admin actions

| Action | Detail |
| --- | --- |
| Mutation | `publishableUnpublish` |
| Channel | **Online Store** only (`169105293495`) |
| Products unpublished | **5** (round 2 only) |
| Unchanged | Status, title, description, price, inventory, variants, vendor, type, tags, SEO, media, metafields, collections |

---

## 5. Post-write verification (Admin)

| Metric | Before | After | Expected |
| --- | ---: | ---: | ---: |
| **ACTIVE** + **Online Store** visible | **22** | **17** | **17** |
| Round-2 removals hidden | — | **5/5** | **5** |
| **21EQ** keep-hidden (six) still hidden | **6/6** | **6/6** | **6** |
| Unintended unpublish outside five | — | **0** | **0** |

**Currently visible (17 handles):**

`1pc-self-adhesive-wall-mounted-paper-tissue-rack-suitable-for-kitchen-bathroom-under-cabinet-sink-cling-film-storage-punch-free-1`, `1pcs-upgradation-adjustable-flatware-tableware-organizer-plastic-multifunctional-drawer-organizer-for-kitchen-counter-utensils-1`, `2-tier-under-sink-sliding-storage-basket-multifunctional-organizer-rack-with-hooks-hanging-cup-space-saving-for-bathroom-kitchen-1`, `adjustable-expandable-bamboo-drawer-organizer-for-kitchen-bedroom-or-living-room-ideal-for-organizing-cutlery-silverware-knives-1`, `adjustable-laptop-stand`, `adjustable-pantry-organizer-utensil-cutlery-drawer-for-forks-knives-silverware-expandable-kitchen-drawer-kitchen-organizer-tray-1`, `available-regular-price`, `handmade-cotton-organizer-basket-vegetable-platter-tabletop-flat-tray-for-bread-candy-fruit-vegetable-1`, `handwoven-cotton-organizer-basket`, `keep-room-tidy-for-dirty-clothes-waterproof-fabric-foldable-hamper`, `kitchen-utensil-holder`, `modern-kitchen-accessories-soap-dispenser-set-liquid-hand-soap-dispenser-pump-bottle-brushes-holds-and-stores-sponges-scrubbers-1`, `paper-towel-holders-stainless-steel-roll-holder-paper-towels-self-adhesive-under-cabinet-for-kitchen-storage-and-organization`, `silicone-cup-sleeve-heat-insulation-bottle-sleeves-non-slip-mug-sleeve-glass-bottle-cover-for-mugs-ceramic-coffee-cups-wraps-1`, `soap-dispenser-box-press-dispenser-scrubbing-liquid-container-kitchen-bathroom-automatic-detergent-foam-box-with-sponge-holder-1`, `under-cabinet-paper-towel-holder`, `usb-c-charging-cable-1-2m`

**Total hidden from Online Store (11):** six **21EQ** + five **21ES** (product records preserved).

---

## 6. Storefront verification summary

| Check | Result |
| --- | --- |
| Live rendered homepage / search / `/collections/all` | **Deferred** — password gate; manual unlock not completed in execution session |
| Admin-aligned expectation | **PASS** — **17** published products should surface on `/collections/all` when unlocked (cf. **21EQ** **22** link count) |
| Commerce gating | **Unresolved** — live Horizon **Add to Cart** not remediated in this slice |

**Harness (local):** `artifacts/catalogue/slice-21es/run-storefront-verify.mjs`

---

## 7. Rollback

Republish a removed product: `publishablePublish` to publication `169105293495` only. Full **21ES** rollback: republish all five round-2 handles (returns visible count to **22**).

---

## 8. Remaining launch blockers

1. **Checkout / payment / customer-flow gating** on live Horizon — **must** be resolved before launch approval.  
2. Image-rights / price / supplier-readiness on remaining **17** visible rows.  
3. Four **21EJ** local-first previews are now **off** the storefront (round-2 removal) — aligns with withdrawn neutral launch path.

---

## 9. Commands executed

```bash
git status --short --branch
git check-ignore -v artifacts/
shopify store execute --store dropshippoc.myshopify.com --query '{ shop { name } }'
node artifacts/catalogue/slice-21es/run-remove.mjs
```

---

## 10. Strict confirmations

- **No** credentials, cookies, tokens, or customer/order/payment data in this doc.  
- **No** `artifacts/` or `tools/catalogue/` committed.

---

## Next owner

**Product Owner** — accept **17**-product visible catalogue; **QA / Test Engineer** optional password-gated storefront confirm; approve **commerce-gating** slice before launch.
