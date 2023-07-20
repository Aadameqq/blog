<script>
	import { page } from '$app/stores';
	import CategoriesItem from '$lib/client/features/posts/features/list/components/Categories/components/CategoriesItem.svelte';

	export let categories;
	export let currentCategorySlug;
</script>

<nav>
	<span class="visually-hidden">Categories: </span>
	<ul class="flex flex-wrap">
		<CategoriesItem isCurrent={!currentCategorySlug && page}>All</CategoriesItem>
		{#each categories as category (category.slug)}
			<CategoriesItem
				url="/categories/{category.slug}"
				isCurrent={currentCategorySlug === category.slug}>{category.name}</CategoriesItem
			>
		{/each}
	</ul>
</nav>
