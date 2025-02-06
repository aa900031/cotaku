<script setup lang="ts">
useHead({
	bodyAttrs: {
		class: 'min-h-dvh flex flex-col bg-background text-foreground font-sans',
	},
})
</script>

<template>
	<div class="flex flex-col min-h-dvh">
		<!-- Header -->
		<div class="w-full max-w-[64rem] mx-auto px-6 lg:px-8 group/menu sticky top-[var(--header-top)] inset-x-0 z-[49] duration-300 max-lg:data-[state=open]:bg-background/90">
			<div class="absolute top-0 inset-x-0 h-[calc(var(--header-top)+var(--header-height)+2rem)] pointer-events-none bg-linear-to-b from-background via-background to-transparent lg:h-[calc(var(--header-top)+var(--header-height)+3rem)]" />
			<div class="relative flex flex-nowrap items-center py-3.5 gap-x-3 text-sm h-[var(--header-height)] isolate duration-300 lg:gap-4">
				<NuxtLink
					class="flex gap-x-2 gap-y-1 flex-row flex-wrap items-center place-content-start group/logo text-primary mr-auto hover:text-primary-500"
					to="/"
				>
					<span class="font-medium text-lg">
						{{ $t('common.app_name') }}
					</span>
				</NuxtLink>
				<div class="flex gap-x-2 gap-y-1 flex-row flex-wrap items-center place-content-start">
					<UButton
						:label="$t('user.sign_in')"
						variant="outline"
						disabled
					/>
				</div>
			</div>
		</div>
		<!-- Body -->
		<main class="relative w-full max-w-[64rem] mx-auto px-6 lg:px-8 flex flex-col grow py-8 gap-8 md:gap-10 md:py-10 lg:gap-12 lg:py-12">
			<slot />
		</main>
	</div>
	<!-- <div class="relative w-full max-w-[64rem] mx-auto px-6 lg:px-8">

	</div> -->
</template>
