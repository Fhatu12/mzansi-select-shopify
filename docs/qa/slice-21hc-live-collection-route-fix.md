# Slice 21HC-WIN - Live 404 Collection Route Fix

Date: 2026-05-28
Store: sikhwarigroupdev.myshopify.com

## Goal
Create or publish two missing collection routes so both return 200:
- /collections/retro-vault-consoles-classics
- /collections/games-toys

## Pre-check
Theme state confirmed:
- Mzansi Select MVP Restored [live] #162429075681
- Horizon [unpublished] #158396285153

## Collection audit
Queried Admin GraphQL for handles:
- retro-vault-consoles-classics
- games-toys

Result:
- Both handles do not exist (collections.nodes empty).

## Admin action attempted
Attempted approved create actions using shopify store execute --allow-mutations with collectionCreate for both exact titles/handles/descriptions.

Result:
- Blocked by access scope.
- Error: Access denied for collectionCreate, required write_products scope.

## Route status before/after
Before:
- /collections/retro-vault-consoles-classics -> 404
- /collections/games-toys -> 404

After (no successful mutation possible in this execution context):
- /collections/retro-vault-consoles-classics -> 404
- /collections/games-toys -> 404

## Quick regression QA
- / -> 200 PASS
- /collections/all -> 200 PASS
- /search?q=retro&type=product -> 200 PASS
- /products/3-in-1-chess-backgammon-checkers-set-chessboard-wooden-board-games-set-educational-improve-intelligence-international-chess-game -> 200 PASS

## Commerce safety checks
On sampled live search/PDP pages:
- No Add to Cart marker: PASS
- No /cart/add marker: PASS
- No quick-add marker: PASS
- No dynamic checkout marker: PASS
- No Supplier verified marker: PASS
- No newsletter capture marker: PASS
- No Liquid error marker: PASS

## Outcome
21HC is blocked in this environment due to missing Admin write scope required to create collections.

## Recommendation
Fix first: run approved collection create/publish action with Admin credentials/app scope that includes write_products, then re-verify the two routes return 200.
