# Web Browser Storage

## List of storage options
- Cookies
- Local Storage
- Session Storage
- Indexed DB
- Web SQL
- Cache storage

## Cookies

- JS access: `document.cookie`
- Types based on attributes
  - Session cookies
    - `Expires` or `Max-Age` attributes are missing, will make cookie to be cleared on Browser close 
  - Persistent cookies
    - `Expires` or `Max-Age` attributes are present
- Operations are synchronous

## Local Storage

- Part of Web Storage API
- No expiration
- key value based implementation where both the key and value has to be strings
- JS check for support: `if (typeof(Storage) !== "undefined")`
- No cross (sub)domain sharing - Same origin Policy
- Operations are synchronous

## Session Storage

- Part of Web Storage API
- Expired once tab is closed
- key value based implementation where both the key and value has to be strings
- JS check for support: `if (typeof(Storage) !== "undefined")`
- No cross (sub)domain sharing - Same origin Policy
- Operations are synchronous
- Caution: **Duplicating a tab copies the tab's sessionStorage into the new tab.**

## Indexed DB

- Operations are asynchronous
- No cross (sub)domain sharing - Same origin Policy
- JS check for support: `if (window.indexedDB)`

## Web SQL

- Not recommend to use as it is not part of W3C standard and not supported by all browsers
- No cross (sub)domain sharing - Same origin Policy
- JS check for support: `if (window.openDatabase)`

## Cache storage

- JS check for support: `if('caches' in window)`

## References
- https://betterprogramming.pub/the-different-types-of-browser-storage-82b918cb3cf8
- https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
- https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
- https://developer.chrome.com/docs/devtools/storage/websql/
- https://www.w3.org/TR/webdatabase/#status-of-this-document
- https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm
- https://www.w3.org/Security/wiki/Same_Origin_Policy