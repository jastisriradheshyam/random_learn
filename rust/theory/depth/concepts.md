# Trait

- They are like the interface with multiple methods, like a blueprint of collection of functions (function signatures) with no implementation (no body/function definition)

Example:

## Trait in IO module
```
pub trait Read {
  fn read(&mut self, buf: &mut [u8]) -> Result<usize>;
  fn read_vectored(&mut self, bufs: &mut [IoSliceMut<'_>]) -> Result<usize> { ... }
  .
  .
  .
}
```

## Implementation in File module
```
impl Read for &File {
    fn read(&mut self, buf: &mut [u8]) -> io::Result<usize> {
        self.inner.read(buf)
    }

    fn read_buf(&mut self, buf: &mut ReadBuf<'_>) -> io::Result<()> {
        self.inner.read_buf(buf)
    }

    fn read_vectored(&mut self, bufs: &mut [IoSliceMut<'_>]) -> io::Result<usize> {
        self.inner.read_vectored(bufs)
    }
    .
    .
    .
}
```

# The Rust Prelude

- The standard module has sub module prelude which are commonly used and cumbersome to import in every file, 
- the module is `std::prelude`, this one don't have to be required / use'd
- the `prelude` is other modules have to be required / use'd, but the core objective same as standard prelude module.
- https://doc.rust-lang.org/std/prelude/index.html