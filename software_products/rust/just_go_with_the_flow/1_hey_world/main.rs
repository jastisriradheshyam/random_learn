use std::io;
use std::io::Write;

fn main() {
  let message = "Hey World";

  let stdout = io::stdout();

  let mut handle = stdout.lock();
  handle.write_all(message.as_bytes()).expect("Failed to write to stdout");
}
