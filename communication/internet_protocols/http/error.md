# HTTP Errors

Along with the the body, status code will accompany to identify the response as an error

```json
{
  "type": "ERROR_TYPE_IN_URI_FORMAT",
  "title": "ERROR_TITLE",
  "detail": "DETAILED_INFO_ABOUT_ERROR",
  "instance": "HTTP_ROUTE_WITHOUT_QUERY_PARAMS",
}
```

## References:

[1]: [RFC 7807: Problem Details for HTTP APIs](https://www.rfc-editor.org/rfc/rfc7807)