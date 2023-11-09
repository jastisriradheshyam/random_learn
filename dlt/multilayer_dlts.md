# Multilayer DLT's

- There is a main chain which we call Layer 1 chain and there are chains that operate utilizing layer 1 chain as base chain which are called layer 2 chains.
- Layer 2 chains combines multiple transactions and combine the data in compressed format and send it to layer 1 chain.
- There can be multilayered chains (layer 3, layer 4, etc.) like this which can depend on another chain as base chain.

## Optimistic Layer 2 Rollups

These types of Layer 2 solutions don't do any computation by default, they propose the new state to Mainnet (Layer 1) as calldata to the deployed smart contract.

- Examples
  - Optimism
    - Single round fraud/fault proofs
    - Relies on Layer 1 to execute Layer 2 transactions
    - Uses WETH (Wrapped ETH) along with ERC20 token compatibility
  - Arbitrum
    - Multi round fraud/fault proofs
    - Transactions are not entirely executed on Layer 1
    - Uses WETH (Wrapped ETH) along with ERC20 token compatibility
  - Metis
    - Hard fork of Optimism
    - Uses multiple sequencers
    - Uses its own virtual machine, Metis Virtual Machine (MVM)

## ZK (Zero Knowledge) Rollups

- Examples
  - zkSync
  - STARKNET
  - Ploygon zkEVM

## Concepts

### fraud/fault proofs

- state commitments are published to ethereum without any direct proof of the validity of these commitments. The commitments are under challenge window (in general 7 days, can any fixed time), if the proposed state commitment is not challenged, then it is considered final. If commitment is considered final, ethereum smart contract can accept proofs about the state of Optimism based on the commitment. If a commitment is channeled it has to be go through fault proof process which can incur gas fees due to Layer 1 execution processes.
#### Reference
- https://github.com/ethereum-optimism/optimism/blob/develop/specs/fault-proof.md
- https://community.optimism.io/docs/protocol/2-rollup-protocol/#fault-proofs