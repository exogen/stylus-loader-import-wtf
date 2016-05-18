## Why are stylus-loader imports insane?

1. Our entry point requires `styles/example-1`.
2. `styles/example-1` requires `./a/base` and `./variables`.
3. `./a/base` requires `./variables` – that is, `styles/a/variables`.
4. `stylus-loader` seems to think both `./variables` imports should resolve to the same file.
5. An error is thrown because we should be getting variables from both files, but we only get one.
6. Prefixing all imports with a `~` still throws an error, but we get the opposite file.
7. It works if one `./variables` is prefixed with `~` and one isn't...but why? And that isn't a general solution.
