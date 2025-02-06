<script setup lang="ts">
const keyword = defineModel<string>('keyword')

const formData = shallowRef({
	keyword: unref(keyword),
})

function handleSubmit(event: SubmitEvent) {
	event.preventDefault()
	keyword.value = formData.value.keyword
}

watch(keyword, (val) => {
	formData.value = {
		keyword: val,
	}
}, {
	flush: 'sync',
})
</script>

<template>
	<div class="flex flex-col">
		<UForm
			class="flex flex-col"
			:state="formData"
			@submit="handleSubmit"
		>
			<UInput
				v-model="formData.keyword"
				size="xl"
				icon="i-lucide-search"
				:placeholder="$t('event.product_search_bar_placeholder')"
				:ui="{ trailing: 'pr-1' }"
			>
				<template #trailing>
					<UButton
						variant="ghost"
						size="lg"
						icon="i-lucide:list-filter"
					/>
				</template>
			</UInput>
		</UForm>
	</div>
</template>
