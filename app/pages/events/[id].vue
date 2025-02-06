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
	<SearchBar
		v-model:keyword="keyword"
	/>
	<BoothList
		:data="data"
	/>
</template>
