<script setup lang="ts">
const props = defineProps<{
	data: any[]
}>()
</script>

<!-- eslint-disable vue/require-v-for-key -->
<template>
	<div class="flex flex-col">
		<div
			v-for="item in data"
			class="relative"
		>
			<div class="mb-2 flex justify-between items-center sticky top-10.5 bg-card py-2 z-10 bg-white">
				<div class="font-medium mt-6">
					{{ item.section.name }}
				</div>
				<div class="text-sm text-muted-foreground mt-6">
					{{ $t('product.section_count', { count: item.section.count }) }}
				</div>
			</div>
			<div class="flex flex-col">
				<ProductItem
					v-for="product in item.data"
					:key="product.id"
					:data="product"
				/>
			</div>
		</div>
	</div>
</template>
