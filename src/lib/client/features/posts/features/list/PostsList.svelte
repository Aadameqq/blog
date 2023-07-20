<script lang="ts">
	import type { Snapshot } from './$types';
	import DefaultLayout from '$lib/client/layouts/default-layout/DefaultLayout.svelte';
	import Post from '$lib/client/features/posts/features/list/components/Post.svelte';
	import Pagination from '$lib/client/features/posts/features/list/components/pagination/Pagination.svelte';
	import Categories from '$lib/client/features/posts/features/list/components/Categories/Categories.svelte';
	import { urlGenerator } from '$lib/client/features/posts/features/list/services/url-generator/urlGenerator';

	export let filteredPosts; // TODO: add type

	export const snapshot: Snapshot = {
		capture: () => window.scrollY,
		restore: (scrollY: number) => window.scrollTo(0, scrollY)
	};

	$: generateUrl = urlGenerator({ categorySlug: filteredPosts.filters.category });
</script>

<DefaultLayout>
	<main>
		<h1 class="text-gray-100 text-5xl font-bold">Posts</h1>
		<p class="text-gray-300 text-sm mt-1 mb-2">
			<span class="visually-hidden">Current category: </span>categories/{filteredPosts.filters
				.category || 'All'}
		</p>
		<section class="mt-6">
			<Categories
				categories={filteredPosts.categories}
				currentCategorySlug={filteredPosts.filters.category}
				{generateUrl}
			/>
		</section>
		<section class="mt-8">
			<div>
				{#each filteredPosts.posts as post (post.slug)}
					<Post {post} />
				{/each}
			</div>
			<div class="mt-6">
				<Pagination
					{generateUrl}
					currentPage={filteredPosts.filters.pagination.page}
					totalPages={filteredPosts.filters.pagination.totalPages}
				/>
			</div>
		</section>
	</main>
</DefaultLayout>
