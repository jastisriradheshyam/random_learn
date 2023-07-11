# Typescript

- [TypeScript: Should you use Types or Interfaces? - YouTube](https://www.youtube.com/watch?v=zM9UPcIyyhQ)

## Types file

In Typescript types should be either co-located incase not shared or should be present in types.ts file if shared, should not add them to types.d.ts files it is for `.js` files and may not be replicated in `out` directory 

- https://github.com/microsoft/TypeScript/issues/52593#issuecomment-1419505081

## Naming

- type name and variable name can be same (with no changes in casing), but to be better understanding, type/interface has first letter upper case
- generics have `<T,V,U, ...>` but that would be non descriptive to user, to make it more sensible use names with `T` prefix like, `<TData, TError>`
- type names should be singular unless it is of array

### Reference

- [Why do we name our types this way? - YouTube](https://www.youtube.com/watch?v=qA65QjWCl60)