<script setup lang="ts">
const props = defineProps<{
	data: any
}>()
</script>

<!-- eslint-disable vue/valid-v-for -->

<template>
	<div class="flex items-center justify-between py-4 border-b last:border-b-0 hover:bg-secondary/20 transition-colors border-[var(--ui-border-accented)]">
		<div class="flex flex-col gap-y-1.5">
			<div class="font-semibold text-foreground">
				{{ data.name }}
			</div>
			<div
				v-if="data.tags.length"
				class="flex gap-x-1.5 gap-y-1 flex-row flex-wrap items-center place-content-start"
			>
				<UBadge
					v-for="tag in data.tags"
					:label="tag"
					size="sm"
				/>
			</div>
		</div>

		<div class="flex items-center gap-4">
			<span class="font-bold text-lg">
				{{ data.price }}
			</span>
			<!-- TODO: 加入購物車按鈕 -->
		</div>
	</div>
</template>
