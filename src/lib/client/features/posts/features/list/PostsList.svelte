<script lang="ts">
	import type { Snapshot } from './$types';
	import DefaultLayout from '$lib/client/layouts/default-layout/DefaultLayout.svelte';
	import PostPreview from '$lib/client/features/posts/features/list/components/PostPreview.svelte';
	import Pagination from '$lib/client/features/posts/features/list/components/pagination/Pagination.svelte';
	import Categories from '$lib/client/features/posts/features/list/components/categories/Categories.svelte';
	import { urlGenerator } from '$lib/client/features/posts/features/list/services/url-generator/urlGenerator';
	import Seo from '$lib/client/components/Seo.svelte';

	export let data;

	export const snapshot: Snapshot = {
		capture: () => window.scrollY,
		restore: (scrollY: number) => window.scrollTo(0, scrollY)
	};

	$: generateUrl = urlGenerator({ categorySlug: data.currentCategory?.slug });
</script>

<Seo title={data.currentCategory ? `Category ${data.currentCategory.name}` : 'Home'} />

<DefaultLayout>
	<main>
		<h1 class="text-gray-100 text-5xl font-bold">Posts</h1>
		<p class="text-gray-400 text-sm mt-1 mb-2">
			<span class="visually-hidden">Current category: </span>categories/{data.currentCategory
				?.name || 'All'}
		</p>
		<section class="mt-6">
			<Categories
				categories={data.categories}
				currentCategorySlug={data.currentCategory?.slug}
				{generateUrl}
			/>
		</section>
		<section class="mt-8">
			<div>
				{#each data.postPreviews as postPreview (postPreview.slug)}
					<PostPreview {postPreview} />
				{/each}
				{#if data.postPreviews.length === 0}
					<div class="text-gray-200 text-lg text-center laptop:text-left">No posts</div>
				{/if}
			</div>
			{#if data.totalPages > 1}
				<div class="mt-6">
					<Pagination {generateUrl} currentPage={data.currentPage} totalPages={data.totalPages} />
				</div>
			{/if}
		</section>
	</main>
</DefaultLayout>
