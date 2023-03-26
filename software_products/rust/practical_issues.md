# Practical Issues

- [rust - Blocking waiting for file lock on package cache when I added dependency to Cargo.toml file - Stack Overflow](https://stackoverflow.com/questions/72264451/blocking-waiting-for-file-lock-on-package-cache-when-i-added-dependency-to-cargo)

## Slow package download

- in either project directory or user home directory add the directory `.cargo` and file in it with file name `config.toml`

### file content

```toml
[net]
git-fetch-with-cli = true

[source.crates-io]
registry = "git://github.com/rust-lang/crates.io-index.git"
```

- [rust - How do I debug `cargo build` hanging at "Updating crates.io index"? - Stack Overflow](https://stackoverflow.com/questions/53361052/how-do-i-debug-cargo-build-hanging-at-updating-crates-io-index)
- [Cargo-update: exceedingly slow progress on update when local registry/index is used and git-fetch-with-cli is false · Issue #9167 · rust-lang/cargo · GitHub](https://github.com/rust-lang/cargo/issues/9167)
- [Configuration - The Cargo Book](https://doc.rust-lang.org/cargo/reference/config.html)