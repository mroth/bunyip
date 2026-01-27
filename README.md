# bun starter project

To install dependencies:

```bash
bun install
```

To run:

```bash
bun start
```

## Editor setup

Linting and formatting come from [oxlint](https://oxc.rs/docs/guide/usage/linter) and
[oxfmt](https://oxc.rs/docs/guide/usage/formatter). Both need the Oxc editor extension —
without it, format-on-save silently does nothing.

- **VS Code / Cursor** — you'll be prompted to install the recommended
  [Oxc extension](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode).
- **Zed** — install the [Oxc extension](https://zed.dev/extensions/oxc) manually via
  `zed: extensions`. Zed cannot auto-install extensions per project; to automate it across
  all your projects, add `"auto_install_extensions": { "oxc": true }` to your global
  `~/.config/zed/settings.json`.

Editor settings are checked in at `.vscode/settings.json` and `.zed/settings.json`.

This project was created using `bun create` with the mroth/bunyip template.
[Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
