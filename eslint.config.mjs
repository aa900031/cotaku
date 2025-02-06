// @ts-check
import aa900031 from '@aa900031/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

export default nuxt(aa900031({
	ignores: [
		'.nuxt/',
	],
}))
