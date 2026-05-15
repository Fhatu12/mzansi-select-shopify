# Slice 21AL — Controlled-pilot collection membership cleanup

**Document type:** DevOps / Platform execution note  
**Prepared:** 2026-05-15  
**Owner:** DevOps / Platform Engineer  
**Store:** `dropshippoc.myshopify.com`  
**Product Owner decision:** Slice 21AL **APPROVED**  
**Prior plan:** **`docs/pilot/slice-21ak-controlled-pilot-collection-hygiene-plan.md`** (**Slice 21AK** commit **`46d2e6e5e25c6e97f77f2a79a4b31dea96d2ea15`**)

## 1. DevOps verdict

**BLOCKED** — Admin collection-membership cleanup **not executed** in this pass because **no stored Shopify CLI store authentication** exists for `dropshippoc.myshopify.com` on the active working copy host. Operator-safe checklist and validated CLI workflow are recorded below for human retry after interactive `shopify store auth`.

## 2. Cleanup method (intended)

**Shopify CLI `shopify store execute`** with Admin GraphQL — **read** pre-membership, **`collectionRemoveProducts`** mutation for four handles only, **read** post-membership and draft/restricted posture. **No** Shopify Admin UI automation, **no** credential storage in repo, **no** theme/checkout/payment/customer-access changes.

**Execution status this pass:** **not run** (auth missing).

## 3. Pre-cleanup collection membership summary (documented baseline)

From accepted **Slice 21AG** / **21AH** / **21AK** records — **`controlled-pilot`** collection (**handle:** `controlled-pilot`) is expected to contain **seven** draft rows:

| Keep in collection (3 CJ staged rows) | CJ variant SKU | Handle |
| --- | --- | --- |
| Beverage & Oil Bottle Handle Holder | `CJYD230000901AZ` | `beverage-bottle-oil-bottle-handle-holder` |
| USB Bag Sealer | `CJYD211196101AZ` | `usb-bag-sealer` |
| Foldable Magnetic Phone Holder & Desktop Tablet Stand | `CJYD245830501AZ` | `foldable-magnetic-phone-holder-desktop-tablet-stand` |

| Remove from collection only (4 older unrelated draft rows) | Historical SKU | Handle |
| --- | --- | --- |
| World Map Extended Mouse Pad | `74886` | `world-map-extended-mouse-pad` |
| Gizzu USB to Type-C Cable — 2m | `GCPU2C2` | `gizzu-usb-to-type-c-cable-2m` |
| UGREEN 4-in-1 USB 2.0 Hub | `CR106-20277` | `ugreen-4-in-1-usb-2-0-hub` |
| Acrylic Tablet & Phone Stand | `DP0402` | `acrylic-tablet-phone-stand` |

**Note:** Pre-cleanup live Admin membership was **not** re-read in this pass (auth blocked).

## 4. Post-cleanup collection membership summary

**Not achieved in this pass.** Target post-state:

- **`controlled-pilot`** contains **exactly** the **3** CJ draft rows in §3.
- The **4** older unrelated draft rows are **not** members of **`controlled-pilot`**.

## 5. Target acceptance (for retry or QA)

1. **`controlled-pilot`** contains exactly the **3** CJ draft rows listed above.
2. The **4** older unrelated products are removed from **`controlled-pilot`** membership **only**.
3. All **7** affected products remain **`DRAFT`** / restricted / non-public / non-purchasable.
4. **No** publish, archive, delete, reject, media, pricing, delivery, stock, warranty, claim, checkout, payment, or customer-access changes.
5. Sanitized evidence captured under `artifacts/devops/slice-21al-controlled-pilot-collection-cleanup/<runStamp>/` — **not** committed.

## 6. Operator-safe retry checklist (human-only auth)

### Step A — Authenticate (interactive terminal only)

```bash
export NVM_DIR="$HOME/.nvm"
. "$NVM_DIR/nvm.sh"
nvm use --lts
shopify store auth --store dropshippoc.myshopify.com --scopes read_products,write_products
```

Complete Shopify Admin login and MFA in the browser flow. **Do not** paste tokens into repo files.

### Step B — Pre-read membership (sanitized output to evidence file only)

```bash
shopify store execute --store dropshippoc.myshopify.com --query '
{
  collectionByHandle(handle: "controlled-pilot") {
    id
    title
    handle
    products(first: 20) {
      nodes {
        id
        handle
        title
        status
      }
    }
  }
}'
```

Record handles + `status` only in local evidence. **Do not** commit raw Admin JSON if it could contain unexpected fields.

### Step C — Remove four products from collection only

Resolve collection GID and the four product GIDs from Step B, then run **one** bounded mutation (example shape — replace GIDs from Step B):

```bash
shopify store execute --store dropshippoc.myshopify.com --allow-mutations --query '
mutation RemoveUnrelatedControlledPilotMembers($collectionId: ID!, $productIds: [ID!]!) {
  collectionRemoveProducts(id: $collectionId, productIds: $productIds) {
    job { id }
    userErrors { field message }
  }
}' --variables '{
  "collectionId": "<controlled_pilot_collection_gid>",
  "productIds": [
    "<world_map_product_gid>",
    "<gizzu_product_gid>",
    "<ugreen_product_gid>",
    "<acrylic_product_gid>"
  ]
}'
```

**Do not** use `productDelete`, `productUpdate` with `status: ACTIVE`, publication changes, or collection deletes.

### Step D — Post-verify

Re-run Step B query. Confirm:

- **3** CJ handles remain in **`controlled-pilot`**.
- **4** Gadgetgyz-era handles are absent from collection membership.
- All **7** products still show **`DRAFT`** (or equivalent restricted draft posture).

### Step E — Docs sync

After successful execution, update **`docs/project-control.md`**, this note (verdict → **PASS**), and hand off to **QA / Test Engineer** for collection-state validation.

## 7. Safety confirmations (this pass)

| Check | Status |
| --- | --- |
| No products published | **Confirmed** — no Admin write |
| No checkout/payment/customer access enabled | **Confirmed** |
| No app install/import/sync | **Confirmed** |
| No Supplier verified / final pricing / delivery / claims approval | **Confirmed** |
| Windows repo unchanged | **Confirmed** (no cross-repo writes) |
| No credentials/tokens/Admin payloads in repo | **Confirmed** |

## 8. Evidence

**Path (local; not committed):** `artifacts/devops/slice-21al-controlled-pilot-collection-cleanup/<runStamp>/`  
**This pass:** `blocker.txt` only — auth missing.

## 9. LLD status

**LLD unchanged** — no collection cleanup executed; no app/import/sync/storefront/checkout/payment/customer-access behaviour change.

## 10. Recommended next owner

**Product Owner / Operator** — complete interactive `shopify store auth`, then **DevOps** retries bounded cleanup **or** **QA / Test Engineer** validates if operator performs Admin UI equivalent manually per checklist.

After cleanup succeeds: **QA / Test Engineer** — final validation of cleaned **`controlled-pilot`** collection state.
