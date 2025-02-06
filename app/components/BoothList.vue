<script setup lang="ts">
const props = defineProps<{
	data: any[]
}>()
</script>

<template>
	<div class="flex flex-col gap-5">
		<BoothItem
			v-for="item in data"
			:key="item.id"
		/>
	</div>
</template>
