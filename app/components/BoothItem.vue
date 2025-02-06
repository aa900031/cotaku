<script setup lang="ts">
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

<template>
	<div class="flex flex-col md:flex-row relative rounded-lg border border-[var(--ui-border-accented)]">
		<div class="md:w-2/5 p-5 border-b border-[var(--ui-border-accented)] md:border-b-0 md:border-r">
			<div class="flex items-center mb-4">
				<UAvatar
					size="lg"
					alt="Benjamin Canac"
				/>
				<h3 class="ml-3 text-md font-semibold">
					名稱
				</h3>
			</div>
			<p class="text-sm text-muted-foreground">
				Hi
				Hi
				Hi
				Hi
				Hi
				Hi
			</p>
		</div>
		<div class="md:w-3/5 p-5">
			<ProductList
				:data="data"
			/>
		</div>
	</div>
</template>
