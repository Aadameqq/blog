<script lang="ts">
	import { page } from '$app/stores';
	import CategoriesItem from '$lib/client/features/posts/features/list/components/categories/components/CategoriesItem.svelte';

	export let categories;
	export let currentCategorySlug: string;
</script>

<nav>
	<span class="visually-hidden">Categories: </span>
	<ul class="flex flex-wrap gap-y-6 gap-x-4">
		<CategoriesItem isCurrent={!currentCategorySlug && page}>All</CategoriesItem>
		{#each categories as category (category.slug)}
			<CategoriesItem
				url="/categories/{category.slug}"
				isCurrent={currentCategorySlug === category.slug}>{category.name}</CategoriesItem
			>
		{/each}
	</ul>
</nav>
