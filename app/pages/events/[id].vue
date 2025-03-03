<script setup lang="ts">
const route = useRoute()

const id = toRef(() => route.params.id)

const keyword = ref('')
const data = [
	{
		id: '1',
	},
	{
		id: '2',
	},
	{
		id: '3',
	},
	{
		id: '4',
	},
	{
		id: '5',
	},
	{
		id: '6',
	},

]
</script>

<!-- eslint-disable vue/no-multiple-template-root -->

<template>
	<!-- TODO: Event Description -->
	<!-- TODO: Event Side Bar -->
	<div class="flex w-full flex-col gap-y-2 items-start text-start">
		<h1 class="font-display font-semibold text-3xl tracking-tight text-pretty bg-linear-to-b from-foreground to-foreground/75 bg-clip-text text-transparent md:text-4xl">
			Test
		</h1>
		<h2 class="max-w-2xl text-pretty text-secondary md:text-lg *:[&[href]]:underline *:[&[href]]:hover:text-primary">
			Description
		</h2>
	</div>
	<div class="flex flex-col gap-5 relative">
		<div class="sticky top-0 bg-background z-20 pt-2 pb-3">
			<div class="absolute top-0 inset-x-0 h-[calc(var(--header-top)+var(--header-height)+2rem)] pointer-events-none bg-linear-to-b from-background via-background to-transparent lg:h-[calc(var(--header-top)+var(--header-height)+3rem)]" />
			<SearchBar
				v-model:keyword="keyword"
			/>
		</div>
		<BoothList
			:data="data"
		/>
	</div>
</template>
