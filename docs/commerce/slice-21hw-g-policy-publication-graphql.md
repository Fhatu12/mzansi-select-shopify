# Slice 21HW-G-WIN - Publish approved policies via Shopify Admin GraphQL (no Playwright login)

Date: 2026-06-01

## 21HW-G verdict
**BLOCKED (Shopify CLI mutation argument parsing on Windows shell)**

## Store auth result
- Command used:
  - `shopify store auth --store sikhwarigroupdev.myshopify.com --scopes read_legal_policies,write_legal_policies`
- Result: success.
- Authenticated account: `fhatuwani.sikhwari@sikhwarigroup.co.za`.
- Baseline GraphQL probe succeeded:
  - `query { shop { name id } }` returned shop `Mzansi Select` and valid shop ID.

## Mutation execution attempt details
Goal mutation:
- `shopPolicyUpdate(shopPolicy: { type, body })` for:
  - `SHIPPING_POLICY`
  - `REFUND_POLICY`
  - `CONTACT_INFORMATION` (if supported)

Observed blocker:
- On Windows CLI execution, mutation invocations were rejected by argument parsing before GraphQL execution, with errors like:
  - `Unexpected argument: ...`
  - `Invalid GraphQL syntax: Syntax Error: Expected Name, found <EOF>.`

Schema confirmation:
- Introspection confirms `shopPolicyUpdate` exists on `Mutation` type in this Admin API schema.
- Therefore blocker is execution formatting/parsing in this shell path, not policy-scope authorization.

## Shipping policy update result
- **No successful mutation committed** in this slice due CLI parsing blocker.

## Refund policy update result
- **No successful mutation committed** in this slice due CLI parsing blocker.

## Contact information policy result
- **No successful mutation committed** in this slice due CLI parsing blocker.

## UserErrors result
- No authoritative `userErrors` payload captured for policy mutations because mutations did not execute cleanly.
- Slice stopped at tooling parse failure boundary.

## Artifacts
Raw CLI outputs captured under:
- `artifacts/graphql/slice-21hw-g/`

No artifacts were committed.

## Storefront verification result
Public route checks from same-day baseline remain healthy:
- `/` -> 200
- `/collections/all` -> 200
- `/pages/contact` -> 200
- sample PDP -> 200

## Policy link/page verification result
- **Not completed as pass criterion** because policy mutation did not complete.

## Shipping setup verification result
- PO-confirmed setup accepted as unchanged:
  - South Africa only
  - Standard delivery R99
  - Free over R1,500
  - International disabled
  - No Metro/Regional split
- This slice made no shipping mutations.

## Payment activation status
- No PayFast enablement performed.
- No Peach Payments enablement performed.
- No payment-provider activation steps performed.

## Remaining blockers
1. Windows `shopify store execute` mutation payload parsing needs a working invocation pattern for multiline/quoted policy bodies.
2. After mutation execution works, re-run policy verification query and storefront policy-link checks.

## Recommended next slice
- **21HW-H-WIN**: Use a minimal local helper that executes Admin GraphQL via a direct HTTP call with Shopify CLI-provided access context (or a verified `shopify store execute` file-based mutation wrapper syntax) to publish the three policy types and capture definitive `userErrors`/verification responses.
