# CSS

## REM & EM & Pixels

- REM takes reference from html tag (The root element of the page) font size.
- EM is relative to parent and grand parent element so should be used with caution, can have multiplicative effect transitioning from parent elements to the concerned element.
- To make element adjustable to font size set in browser by user we should use `%` as unit in html tag
  - ```css
      html {
        ...
        font-size: 60%;
        ...    
      }
    ```

## References

- [Why You Should Use REM Instead of Pixels - YouTube](https://www.youtube.com/watch?v=pKX7YnkyR8g)