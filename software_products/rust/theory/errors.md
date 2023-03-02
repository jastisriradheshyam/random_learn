# Error handling

- In rust generally we have `Result` type for handling recoverable error and `panic` function (a macro technically) for non recoverable errors

## Panic

- When panic is invoked the execution will clean up the function calls in application stack.
  - If we want this to be handled by OS then we can just do abort
- `RUST_BACKTRACE=1` before the cargo command will provide the back trace when the application panics

### Abort

```toml Cargo.toml
...

# release is just a example, we can use any other profile.
[profile.release]
panic = 'abort'
```

## Result

Result structure
```rs
// Success -> T
// Error -> E
enum Result<T, E> {
  Ok(T),
  Err(E),
}
```


Usage is basically do by using `match` conditional statement

```rs
let some_result = a_function_that_returns_result();
let final_result = match some_result {
  Ok(value) => value,
  Err(error) => panic!("hey we got some error {:?}". error)
};
```

In standard library we have `ErrorKind` for few of the libraries (it depends on library and implementation)
- `error.kind()` will return the kind of error it is

### Different approach with `unwrap_or_else` and `unwrap`

with `unwrap_or_else` we don't have to match the successful result and error manually, the final result will be returned if successful but it provide a error and invoke the assigned function if it returns an error in result.

```rs
let final_result = a_function_that_returns_result().unwrap_or_else(|error| {
  panic!("hey we got some error {:?}". error)
});
```
we also have `unwrap` function which will panic with the error without handling it if there is an error, else it will return the value if it's a successful invocation.
The `unwrap` approach is used for doing quick testing of the concept but should not be used in production, instead use `unwrap_or_else` or do matching of the result with `match`


### Different approach with `expect`

`expect` is used where we want to override the error with our custom message when error is present in the Result. Also used for prototyping phase.
```rs
let final_result = a_function_that_returns_result().expect("hey we got some error");
```

### Different approach with `?`

`?` operator will return the value is the function call is success and if there is an error will return the error to the parent function instead of continuing the code in the parent function. 
```rs
fu do_something() -> Result<FINAL_RESULT_TYPE, ERROR_TYPE> {
  let final_result = a_function_that_returns_result()?;
  Ok(final_result)
}
```
