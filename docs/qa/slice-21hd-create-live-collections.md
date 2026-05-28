# Slice 21HD-WIN - Create and Publish Missing Live Collection Routes

Date: 2026-05-28
Store: sikhwarigroupdev.myshopify.com

## Store API auth result
Command:
shopify store auth --store sikhwarigroupdev.myshopify.com --scopes read_products,write_products,read_publications,write_publications

Result:
- Authenticated successfully as hatuwani.sikhwari@sikhwarigroup.co.za.

## Pre-check theme state
- Mzansi Select MVP Restored [live] #162429075681
- Horizon [unpublished] #158396285153

## Collections existed before
- retro-vault-consoles-classics: NO
- games-toys: NO

## Collections created
- YES (both created)
- The Retro Vault: Consoles & Classics
  - handle: retro-vault-consoles-classics
  - id: gid://shopify/Collection/488805564641
- Games & Toys
  - handle: games-toys
  - id: gid://shopify/Collection/488805597409

## Online Store publication
Online Store publication:
- id: gid://shopify/Publication/183141630177

Action:
- publishablePublish executed for both collection IDs.

Result:
- userErrors: [] for both publish calls.

## Route status before/after
Before:
- /collections/retro-vault-consoles-classics -> 404
- /collections/games-toys -> 404

After:
- /collections/retro-vault-consoles-classics -> 200
- /collections/games-toys -> 200

## Regression smoke
- / -> 200 PASS
- /collections/all -> 200 PASS
- /search?q=retro&type=product -> 200 PASS
- one current PDP -> 200 PASS

## Commerce safety checks
On sampled live search/PDP pages:
- No Add to Cart marker: PASS
- No /cart/add marker: PASS
- No quick-add marker: PASS
- No dynamic checkout marker: PASS
- No Supplier verified marker: PASS
- No newsletter capture marker: PASS
- No Liquid error marker: PASS

## Verdict
21HD PASS.

## Recommendation
Launch accepted.
