# RNG (Random Number Generator)

Two types of generators
- Non-Deterministic Random Bit Generators (NRBGs)
  - True Random Number (or Bit) Generators
  - Hardware Random Number Generators
- Deterministic Random Bit Generators (DRBGs)
  - Pseudo-Random Number Generator (PRBGs)

## Non-Deterministic Random Bit Generators (NRBGs)

The class of generators which have physical source value part of the output that is unpredictable
- Also been called True Random Number (or Bit) Generators or Hardware Random Number Generators

## Deterministic Random Bit Generators (DRBGs)

The class of generators which have a requirement of initial value (also known as seed value) which is passed to the generator, based on which the random value is generated.
Due to the ingestion of seed they are Pseudo-Random in nature. Also been called Pseudo-Random Number Generator (PRBGs)

If the source is kept as secret then the then output can be considered as unpredictable.

## References
- https://statmath.wu.ac.at/prng/
- https://csrc.nist.gov/glossary/term/PRNG
- https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-90Ar1.pdf