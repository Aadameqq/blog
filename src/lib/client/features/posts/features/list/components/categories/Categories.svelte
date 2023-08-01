<script lang="ts">
	import CategoriesItem from '$lib/client/features/posts/features/list/components/categories/components/CategoriesItem.svelte';
	import { routes } from '$lib/client/config/routes';
	import type { TCategory } from '$lib/types/TCategory';

	export let categories: TCategory[];
	export let currentCategorySlug: string | undefined;
</script>

<nav>
	<span class="visually-hidden">Categories: </span>
	<ul class="flex flex-wrap gap-y-6 gap-x-4">
		<CategoriesItem isCurrent={!currentCategorySlug}>All</CategoriesItem>
		{#each categories as category (category.slug)}
			<CategoriesItem
				url={routes.blog({ categorySlug: category.slug })}
				isCurrent={currentCategorySlug === category.slug}>{category.name}</CategoriesItem
			>
		{/each}
	</ul>
</nav>
