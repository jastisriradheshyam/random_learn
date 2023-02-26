# Web Status Codes

- Success -> **200**
- Login Failure [1] -> **400**
- Auth token not matching for a resource [1] -> **401**
  - If you want to hide the fact that resource does exist but not accessible to the requesting party. -> **404**
- Resource Not found -> **404**

## References

[1]: [http - RESTful Login Failure: Return 401 or Custom Response - Stack Overflow](https://stackoverflow.com/questions/11714485/restful-login-failure-return-401-or-custom-response)

[2]: [RFC 7231: Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content](https://www.rfc-editor.org/rfc/rfc7231)

[3]: [RFC 7235: Hypertext Transfer Protocol (HTTP/1.1): Authentication](https://www.rfc-editor.org/rfc/rfc7235)