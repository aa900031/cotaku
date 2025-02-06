export default defineNuxtConfig({
	modules: [
		'@nuxt/ui',
		'@nuxt/eslint',
		'@nuxtjs/i18n',
	],
	devtools: {
		enabled: true,
	},
	css: [
		'~/assets/css/main.css',
	],
	ui: {
		colorMode: false,
	},
	future: {
		compatibilityVersion: 4,
	},
	compatibilityDate: '2024-11-27',
	eslint: {
		config: {
			standalone: false,
			nuxt: {
				sortConfigKeys: true,
			},
		},
	},
	i18n: {
		defaultLocale: 'zh-Hant',
		lazy: true,
		langDir: '../locales',
		locales: [
			{
				code: 'zh-Hant',
				language: 'zh-Hant',
				name: '繁體中文',
				file: 'zh-Hant.json',
			},
		],
	},
})
