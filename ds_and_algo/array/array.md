# Array

- Static array
  - Single type fixed size allocation
- Dynamic arrays
  - Single type (can be multi type) and array length can be shrunk and grown as we add or remove elements 
- Multi type arrays
  - Multiple type of elements in a single array structure


## Complexity (mostly for single type arrays)

- Traversing : O(n)
- Updating at an index: O(1)
- Deleting at an index: O(n)
  - Due to shifting of array
- Inserting at an index: O(n) 
  - Due to shifting of array
- Accessing a element at an index: O(1)


## Language contexts

- Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations. Neither the length of a JavaScript array nor the types of its elements are fixed.
  - Indexes are keys and element at a index is value for that key
  - A length element in Array object is maintained. 

## References:

[1]: [How come Javascript arrays can hold multiple data-types at same time? - Stack Overflow](https://stackoverflow.com/questions/39059473/how-come-javascript-arrays-can-hold-multiple-data-types-at-same-time)

[2]: [How are JavaScript arrays implemented? - Stack Overflow](https://stackoverflow.com/questions/365975/how-are-javascript-arrays-implemented)