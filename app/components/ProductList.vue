<script setup lang="ts">
const props = defineProps<{
	data: any[]
}>()
</script>

<template>
	<div class="flex flex-col">
		<ProductItem
			v-for="item in data"
			:key="item.id"
		/>
	</div>
</template>
