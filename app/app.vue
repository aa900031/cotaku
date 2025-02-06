<script setup lang="ts">
import { en, zh_hant } from '@nuxt/ui/locale'

const { locale } = useI18n()

const currentLocale = computed(() => {
	switch (unref(locale)) {
		case 'zh-Hant':
			return zh_hant
		default:
			return en
	}
})
</script>

<template>
	<NuxtRouteAnnouncer />
	<UApp
		:locale="currentLocale"
	>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</UApp>
</template>
