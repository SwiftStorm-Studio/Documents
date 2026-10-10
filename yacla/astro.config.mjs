// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import markdoc from '@astrojs/markdoc';

export default defineConfig({
  site: 'https://docs.swiftstorm.dev',
  base: '/yacla',
  outDir: '../dist/yacla',
  integrations: [
    markdoc(),
    starlight({
      title: 'Yacla',
      favicon: '/favicon.png',
      customCss: ['./src/styles/oled.css'],
      components: {
        Header: './src/components/Header.astro',
        ThemeProvider: './src/components/ThemeProvider.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
      },
      defaultLocale: 'root',
      locales: {
        root: { label: 'English', lang: 'en' },
        ja: { label: '日本語', lang: 'ja' },
      },
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/ririf4/Yacla' }],
      sidebar: [
        {
          label: 'Guides', translations: { ja: 'ガイド' },
          items: [
            { label: 'Overview', translations: { ja: '概要' }, slug: '' },
            { label: 'Getting Started', translations: { ja: 'はじめに' }, slug: 'getting-started' },
            { label: 'Loading & Reloading', translations: { ja: '読み込みと再読み込み' }, slug: 'loading' },
            { label: 'Mapping & Validation', translations: { ja: 'マッピングと検証' }, slug: 'mapping' },
            { label: 'Annotations', translations: { ja: 'アノテーション' }, slug: 'annotations' },
            { label: 'Config Updates', translations: { ja: '設定ファイルの更新' }, slug: 'updates' },
            { label: 'Localized Defaults', translations: { ja: '多言語のデフォルト設定' }, slug: 'localization' },
            { label: 'Shared Defaults & Java', translations: { ja: '共通設定と Java' }, slug: 'shared-defaults' },
          ],
        },
        {
          label: 'Reference', translations: { ja: 'リファレンス' },
          items: [
            { label: 'Parsers & Extensions', translations: { ja: 'パーサーと拡張' }, slug: 'parsers' },
            { label: 'Upgrading to 4.2.0', translations: { ja: '4.2.0 への移行' }, slug: 'migration' },
          ],
        },
      ],
    }),
  ],
});
