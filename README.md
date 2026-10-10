# SwiftStorm Studio Document

Static documentation host for `docs.swiftstorm.dev`.

## Layout

- `/` is a small documentation navigation page.
- `/akkaradb-native/` contains the AkkaraDB Native Starlight documentation.
- `/yacla/` contains the Yacla 4.2.0 Starlight documentation, with Japanese pages at `/yacla/ja/`.

Both projects use the same header, search, language selector, and light/dark/OLED themes.

## Local preview

```bash
npm --prefix yacla ci
npm run dev:yacla
```

Open `http://127.0.0.1:4322/yacla/ja/` for the Japanese documentation.

## Build

```bash
npm run build
```

Cloudflare Pages settings:

```text
Build command: npm run build
Build output directory: dist
```
