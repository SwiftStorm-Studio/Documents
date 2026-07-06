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
							label: 'High-Level API',
							translations: { ja: '高レベル API' },
							items: [
								{ label: 'Overview', translations: { ja: '概要' }, slug: 'api/high-level' },
								{ label: 'Usage', translations: { ja: '使い方' }, slug: 'api/high-level/usage' },
								{
									label: 'Architecture',
									translations: { ja: 'アーキテクチャ' },
									slug: 'api/high-level/architecture',
								},
								{ label: 'AkkaraDB', translations: { ja: 'AkkaraDB' }, slug: 'api/high-level/akkaradb' },
								{ label: 'PackedTable', translations: { ja: 'PackedTable' }, slug: 'api/high-level/packed-table' },
								{ label: 'Query', translations: { ja: 'Query' }, slug: 'api/high-level/query' },
								{ label: 'Ref And Join', translations: { ja: 'Ref と Join' }, slug: 'api/high-level/refs-joins' },
								{
									label: 'Schema And Foreign Keys',
									translations: { ja: 'Schema と Foreign Key' },
									slug: 'api/high-level/schema',
								},
								{
									label: 'BinPack And Compatibility',
									translations: { ja: 'BinPack と Compatibility' },
									slug: 'api/high-level/binpack',
								},
							],
						},
						{
							label: 'Low-Level API',
							translations: { ja: '低レベル API' },
							items: [
								{ label: 'Overview', translations: { ja: '概要' }, slug: 'api/low-level' },
								{
									label: 'AkkEngine',
									items: [
										{ label: 'Overview', translations: { ja: '概要' }, slug: 'api/low-level/akkengine' },
										{ label: 'Usage', translations: { ja: '使い方' }, slug: 'api/low-level/akkengine/usage' },
										{
											label: 'Architecture',
											translations: { ja: 'アーキテクチャ' },
											slug: 'api/low-level/akkengine/architecture',
										},
										{ label: 'Options', translations: { ja: '設定オプション' }, slug: 'api/low-level/options' },
										{ label: 'Stats', translations: { ja: '統計情報' }, slug: 'api/low-level/stats' },
									],
								},
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
								{
									label: 'VersionLog',
									translations: { ja: 'VersionLog' },
									items: [
										{ label: 'Overview', translations: { ja: '概要' }, slug: 'api/low-level/version-log' },
										{ label: 'Usage', translations: { ja: '使い方' }, slug: 'api/low-level/version-log/usage' },
										{
											label: 'Architecture',
											translations: { ja: 'アーキテクチャ' },
											slug: 'api/low-level/version-log/architecture',
										},
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
