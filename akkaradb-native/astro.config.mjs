// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.swiftstorm.dev',
	base: '/akkaradb-native',
	outDir: '../dist/akkaradb-native',
	integrations: [
		markdoc(),
		starlight({
			title: 'AkkaraDB Native',
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
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/SwiftStorm-Studio/AkkaraDB' }],
			sidebar: [
				{
					label: 'Guides',
					translations: { ja: 'ガイド' },
					items: [
						{ label: 'Overview', translations: { ja: '概要' }, slug: '' },
						{
							label: 'Low-Level API',
							translations: { ja: '低レベル API' },
							items: [
								{
									label: 'AkkEngine',
									items: [
										{ label: 'Core Usage', translations: { ja: '基本操作' }, slug: 'api/low-level' },
										{
											label: 'API Server',
											translations: { ja: 'API サーバー' },
											items: [
												{ label: 'Overview', translations: { ja: '概要' }, slug: 'api/low-level/api-server' },
												{ label: 'Usage', translations: { ja: '使い方' }, slug: 'api/low-level/api-server/usage' },
												{
													label: 'Architecture',
													translations: { ja: 'アーキテクチャ' },
													slug: 'api/low-level/api-server/architecture',
												},
											],
										},
										{
											label: 'Cluster',
											translations: { ja: 'Cluster' },
											items: [
												{ label: 'Overview', translations: { ja: '概要' }, slug: 'api/low-level/cluster' },
												{ label: 'Usage', translations: { ja: '使い方' }, slug: 'api/low-level/cluster/usage' },
												{
													label: 'Architecture',
													translations: { ja: 'アーキテクチャ' },
													slug: 'api/low-level/cluster/architecture',
												},
											],
										},
										{ label: 'VersionLog', translations: { ja: 'VersionLog' }, slug: 'api/low-level/version-log' },
										{ label: 'Options', translations: { ja: '設定オプション' }, slug: 'api/low-level/options' },
										{ label: 'Stats', translations: { ja: '統計情報' }, slug: 'api/low-level/stats' },
									],
								},
							],
						},
					],
				},
			],
		}),
	],
});
