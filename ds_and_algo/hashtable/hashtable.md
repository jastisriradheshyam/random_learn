# Hash Table

In a array the content is addressable by using hash functions.
collisions in hash table is practically unavoidable.
here cell is also known as bucket (can store any type of data - linked list, array, or other data structure)

## time complexity

- worst case: O(n)
- best case: Ω(1)

## collision resolutions / handling

- Separate chaining (open hashing)

in this strategy we chain the value if another value is already present in the cell.

- Open addressing (closed hashing)

after hash is generated, 
if cell is empty then add the value to the cell
else if cell is not empty then add the value to next cell, repeat until empty cell is found and add to the cell which is empty.

$h_i = h(key) + c(i) \% n$

where `i` is the `0,1,2,...,n-1` and n is number of elements in hashtable

expanding c(i):
- `c(0) = 0`
- `c(i)%n must be a permutation of {0,1,2,...,n-1}`

c(i) in case of:
- linear probing : `i`
- quadratic probing : $+=i^2$
- double hashing : $i * h_p(key)$
    - $h_p$: It must never evaluate to zero
    - Must make sure that all cells can be probed

- Cache conscious collision resolution


## References

- https://dx.doi.org/10.5120/17411-7990
- https://en.wikipedia.org/wiki/Hash_collision
- https://www.youtube.com/watch?v=zLnJcAt1aKs
