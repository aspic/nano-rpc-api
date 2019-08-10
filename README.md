# nano-rpc-api OpenAPI Specification
[![Build Status](https://travis-ci.com/aspic/nano-rpc-api.svg?branch=master)](https://travis-ci.com/aspic/nano-rpc-api)

## Clients

* [nano-rpc-fetch](/clients/typescript-fetch) - typescript fetch client

## Links

- [Reference Documentation (ReDoc)](https://aspic.github.io/nano-rpc-api/)
- [SwaggerUI](https://aspic.github.io/nano-rpc-api/swagger-ui/)
- OpenAPI Raw Files: [JSON](https://aspic.github.io/nano-rpc-api/openapi.json) [YAML](https://aspic.github.io/nano-rpc-api/openapi.yaml)

**Warning:** All above links are updated only after Travis CI finishes deployment

## Working on specification
### Install

1. Install [Node JS](https://nodejs.org/)
2. Clone repo and run `npm install` in the repo root

### Usage

#### `npm start`
Starts the development server.

#### `npm run build`
Bundles the spec and prepares web_deploy folder with static assets.

#### `npm test`
Validates the spec.

#### `npm run gh-pages`
Deploys docs to GitHub Pages. You don't need to run it manually if you have Travis CI configured.

## Donations

Nano donations happily received 😍 ↓

<img src="nano-donation.png" width="100" alt="nano_3yxiqwmjq33z1gcdwn6t5njmfm8tdapze5p6i58jcuzdyi7g8nt3jzotzjuq">

## Status

**Node RPCs**

    ☑ account_balance
    ☑ account_block_count
    ☑ account_get
    ☑ account_history
    ☑ account_info
    ☑ account_key
    ☑ account_representative
    ☑ account_weight
    ☑ accounts_balances
    ☑ accounts_frontiers
    ☑ accounts_pending
    ☑ active_difficulty
    ☑ available_supply
    ☑ block_account
    ☑ block_confirm
    ☑ block_count
      block_count_type
    ☑ block_create
      block_hash
      block_info
      blocks
      blocks_info
      bootstrap
      bootstrap_any
      bootstrap_lazy
      bootstrap_status
      chain
      confirmation_active
      confirmation_height_currently_processing
      confirmation_history
      confirmation_info
      confirmation_quorum
      database_txn_tracker
      delegators
      delegators_count
      deterministic_key
      frontier_count
      frontiers
      keepalive
    ☑ key_create
      key_expand
      ledger
      node_id
      node_id_delete
      peers
      pending
      pending_exists
    ☑ process
      representatives
      representatives_online
      republish
      sign
      stats
      stats_clear
      stop
      successors
      validate_account_number
      version
      unchecked
      unchecked_clear
      unchecked_get
      unchecked_keys
      unopened
      uptime
      work_cancel
    ☑ work_generate
      work_peer_add
      work_peers
      work_peers_clear
      work_validate
    
**Wallet RPCs**

      account_create
      account_list
      account_move
      account_remove
      account_representative_set
    ☑ accounts_create
      block_create (optional wallet)
      password_change
      password_enter
      password_valid
    ☑ receive
      receive_minimum
      receive_minimum_set
      search_pending
      search_pending_all
      send
      sign (optional wallet)
      wallet_add
      wallet_add_watch
      wallet_balances
      wallet_change_seed
      wallet_contains
    ☑ wallet_create
      wallet_destroy
      wallet_export
      wallet_frontiers
      wallet_history
      wallet_info
      wallet_ledger
      wallet_lock
      wallet_locked
      wallet_pending
      wallet_representative
      wallet_representative_set
      wallet_republish
      wallet_work_get
      work_get
      work_set

**Unit Conversion RPCs**

      krai_from_raw
      krai_to_raw
      mrai_from_raw
      mrai_to_raw
      rai_from_raw
      rai_to_raw