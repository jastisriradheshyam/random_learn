# CSS


## Basics
### Comments

- Single and multiline comments: `/* .... */`

### Spaces

- White space means actual spaces, tabs and new lines, they are ignored in CSS during its parsing process, but names should not have spaces.

## Basic components of CSS block

- `Properties` and `Values` are basic components of CSS block
- CSS properties and values are **case-insensitive**
- The property and value in a property-value pair are separated by a colon (`:`).


## Selectors

- Selectors are evaluated from right to left
- `body h1 + p .special {...}` here `.special` is part of `p` tag; `p` has to be adjacent to `h1` tag and lastly `h1` tag is child or part of `body` tag

## Functions 

### Math functions

- e.g. `width: calc(90% - 30px);`

### Transform functions

- e.g. `transform: rotate(0.8turn);`


## @rules

- Media rule: `@media (min-width: 30em) {`
- Import: `@import "styles2.css";`

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
- [Getting started with CSS - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/Getting_started)