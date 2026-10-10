# Yacla documentation

Starlight documentation for Yacla 4.2.0, based on the source and README in
`C:/Users/main/IdeaProjects/Yacla`.

- English: `/yacla/`
- Japanese: `/yacla/ja/`
- Content: `src/content/docs/*.mdoc` and the matching `ja/` pages
- Build output: `../dist/yacla/`

The header, theme components, OLED stylesheet, and locked dependencies match
the AkkaraDB Native documentation. Keep both designs aligned when changing them.

From the repository root, use `npm run build` to build both projects or
`npm run dev:yacla` to preview this project after installing its dependencies.

When updating Yacla, check the module versions, public APIs, conversion rules,
update strategies, and localized resource resolution against the source. Update
both languages together.
