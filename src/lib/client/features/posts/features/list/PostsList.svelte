<script lang="ts">
	import type { Snapshot } from './$types';
	import DefaultLayout from '$lib/client/layouts/default-layout/DefaultLayout.svelte';
	import PostPreview from '$lib/client/features/posts/features/list/components/PostPreview.svelte';
	import Pagination from '$lib/client/features/posts/features/list/components/pagination/Pagination.svelte';
	import Categories from '$lib/client/features/posts/features/list/components/categories/Categories.svelte';
	import Seo from '$lib/client/components/Seo.svelte';
	import type { Category } from '$lib/types/Category';

	export let currentCategory: Category | undefined;
	export let postPreviews: PostPreview[];
	export let categories: Category[];
	export let totalPages: number;
	export let currentPage: number;

	export const snapshot: Snapshot = {
		capture: () => window.scrollY,
		restore: (scrollY: number) => window.scrollTo(0, scrollY)
	};
</script>

<Seo title={currentCategory ? `Category ${currentCategory.name}` : 'Home'} />

<DefaultLayout>
	<main>
		<h1 class="text-gray-100 text-5xl font-bold">Posts</h1>
		<p class="text-gray-400 text-sm mt-1 mb-2">
			<span class="visually-hidden">Current category: </span>categories/{currentCategory?.name ||
				'All'}
		</p>
		<section class="mt-6">
			<Categories {categories} currentCategorySlug={currentCategory?.slug} />
		</section>
		<section class="mt-8">
			<div>
				{#each postPreviews as postPreview (postPreview.slug)}
					<PostPreview {postPreview} />
				{/each}
				{#if postPreviews.length === 0}
					<div class="text-gray-200 text-lg text-center laptop:text-left">No posts</div>
				{/if}
			</div>
			{#if totalPages > 1}
				<div class="mt-6">
					<Pagination currentCategorySlug={currentCategory?.slug} {currentPage} {totalPages} />
				</div>
			{/if}
		</section>
	</main>
</DefaultLayout>
