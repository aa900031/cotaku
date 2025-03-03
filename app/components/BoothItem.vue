<script setup lang="ts">
const data = [
	{
		section: {
			name: 'hi',
			count: 6,
		},
		data: [
			{
				id: '1',
				name: 'product 1',
				tags: ['test', 'test 2'],
				price: 200,
			},
			{
				id: '2',
				name: 'product 2',
				tags: ['test', 'test 2'],
				price: 200,
			},
			{
				id: '3',
				name: 'product 3',
				tags: ['test', 'test 2'],
				price: 250,
			},
			{
				id: '4',
				name: 'product 4',
				tags: ['test', 'test 2'],
				price: 120,
			},
			{
				id: '5',
				name: 'product 5',
				tags: ['test', 'test 2'],
				price: 100,
			},
			{
				id: '6',
				name: 'product 6',
				tags: ['test', 'test 2'],
				price: 300,
			},
		],
	},
	{
		section: {
			name: 'hi2',
			count: 6,
		},
		data: [
			{
				id: '1',
				name: 'product 1',
				tags: ['test', 'test 2'],
				price: 200,
			},
			{
				id: '2',
				name: 'product 2',
				tags: ['test', 'test 2'],
				price: 200,
			},
			{
				id: '3',
				name: 'product 3',
				tags: ['test', 'test 2'],
				price: 250,
			},
			{
				id: '4',
				name: 'product 4',
				tags: ['test', 'test 2'],
				price: 120,
			},
			{
				id: '5',
				name: 'product 5',
				tags: ['test', 'test 2'],
				price: 100,
			},
			{
				id: '6',
				name: 'product 6',
				tags: ['test', 'test 2'],
				price: 300,
			},
		],
	},
]
const images = [
	'https://picsum.photos/468/468?random=1',
	'https://picsum.photos/468/468?random=2',
	'https://picsum.photos/468/468?random=3',
	'https://picsum.photos/468/468?random=4',
	'https://picsum.photos/468/468?random=5',
	'https://picsum.photos/468/468?random=6',
]
</script>

<template>
	<div class="flex flex-col md:flex-row relative rounded-lg border border-[var(--ui-border-accented)]">
		<div class="relative md:w-2/5 p-5 border-b border-[var(--ui-border-accented)] md:border-b-0 md:border-r">
			<div class="md:sticky md:top-18 flex flex-col">
				<div class="flex items-center">
					<UAvatar
						size="lg"
						alt="Benjamin Canac"
					/>
					<h3 class="ml-3 text-md font-semibold">
						名稱
					</h3>
				</div>
				<p class="text-sm text-muted-foreground mt-4">
					Hi
					Hi
					Hi
					Hi
					Hi
					Hi
				</p>
				<div class="mt-6">
					<UCarousel
						v-slot="{ item }"
						:items="images"
						class-names
						:ui="{
							item: 'basis-[85%] transition-opacity [&:not(.is-snapped)]:opacity-10',
						}"
					>
						<img
							:src="item"
							class="rounded-lg"
						>
					</UCarousel>
				</div>
			</div>
		</div>
		<div class="md:w-3/5 p-5">
			<ProductList
				class="-mt-5"
				:data="data"
			/>
		</div>
	</div>
</template>
