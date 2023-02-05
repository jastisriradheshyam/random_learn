# UNDICI / Fetch API

- A HTTP 1.1 client
  - Keep alive by default
  - LIFO scheduling
  - No pipelining
  - Unlimited connections
  - Can follow redirects
- Re-invents HTTP primitives and relies directly on `SOCKETS`
- Comes with its own built-in mocks
- **Comment**: Weird work on naming
  - HTTP 1.1 -> 11 -> UNDICI
- With NodeJS 18 fetch is globally exposed which is based on UNDICI library

## References:

[1]: [New and Exciting Features in Node.js - Lizz Parody | NodeConf EU 2022 - YouTube](https://www.youtube.com/watch?v=HssUpyhdInU)

[2]: [Node.js 18 is now available! | Node.js](https://nodejs.org/en/blog/announcements/v18-release-announce/)