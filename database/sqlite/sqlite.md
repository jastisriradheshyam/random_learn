# SQLite

- released in August 2000
- SQLite is embedded in the process of the host application
- Currently (2023) over one trillion SQLite databases [1]

## Notable features

- Cross-platform
  - SQLite’s file format is a US Library of Congress recommended storage format for the preservation of digital content [2]
- Compact and self-contained
- Reliable
- Fast
- SQLite provides full ACID guarantees

## Alternatives or Similar DB's

- DuckDB (the SQLite for analytics)
  - columnar storage [1]
  - parallel and vectorized query processing [1]
  - multi-version concurrency control optimized for extract-transform-load (ETL) operations [1]

## Architecture

- SQLite follows a modular design
- Four groups of modules
  - `core` modules
    - responsible for ingesting and executing SQL statements
  - `compiler` modules
    - translate a SQL statement into a bytecode program that can be executed by the virtual machine
  - `backend` modules
    - facilitate access database pages and interact with the operating system to persist data
  - `accessory` modules
    - a large suite of tests and utilities for memory allocation, string operations, and random number generation

### `compiler` modules

- Consists of
  - > tokenizer
  - > parser
  - > code generator
- The aforementioned components translated SQL into bytecode program.
  - A bytecode program consists of one or more virtual instructions.
  - Each virtual instruction includes a unique opcode and several operands.

### `core` modules

- 

## References

- [1]:[SQLite: Past, Present, and Future](https://www.vldb.org/pvldb/vol15/p3535-gaffney.pdf)
- [2]:2021. Recommended Formats Statement. Technical Report. United States Library of Congress