# Routing

## Common Path with multiple sub paths

```rust
warp::path!("gateway" / ..).and(login.or(login2))
```
- To declare a prefix, use `path!("v1" / ..)`.
- https://github.com/seanmonstar/warp/issues/470