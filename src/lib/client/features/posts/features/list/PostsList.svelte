<script lang="ts">
	import DefaultLayout from '$lib/client/layouts/default-layout/DefaultLayout.svelte';
	import Pagination from '$lib/client/features/posts/features/list/components/pagination/Pagination.svelte';
	import Categories from '$lib/client/features/posts/features/list/components/categories/Categories.svelte';
	import Seo from '$lib/client/components/Seo.svelte';
	import type { TCategory } from '$lib/types/TCategory';
	import type { TPostPreview } from '$lib/types/TPostPreview';
	import PostPreview from '$lib/client/features/posts/features/list/components/PostPreview.svelte';

	export let currentCategory: TCategory | undefined;
	export let postPreviews: TPostPreview[];
	export let categories: TCategory[];
	export let totalPages: number;
	export let currentPage: number;
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
					<PostPreview {postPreview} {currentCategory} />
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
