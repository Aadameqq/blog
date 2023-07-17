<script lang="ts">
	import type { Snapshot } from './$types';
	import DefaultLayout from '$lib/client/layouts/default-layout/DefaultLayout.svelte';
	import Post from '$lib/client/features/posts/features/list/components/Post.svelte';
	import Pagination from '$lib/client/features/posts/features/list/components/pagination/Pagination.svelte';
	import Categories from '$lib/client/features/posts/features/list/components/Categories.svelte';
	import { urlGenerator } from '$lib/client/features/posts/features/list/services/url-generator/urlGenerator';
	import { base } from '$app/paths';

	export let filteredPosts; // TODO: add type

	export const snapshot: Snapshot = {
		capture: () => window.scrollY,
		restore: (scrollY: number) => window.scrollTo(0, scrollY)
	};

	$: generateUrl = urlGenerator(base, { categorySlug: filteredPosts.filters.category });
</script>

<DefaultLayout>
	<main>
		<h1>Blog</h1>
		<p>
			<span class="visually-hidden">Current category: </span>categories/{filteredPosts.filters
				.category}
		</p>
		<section>
			<Categories
				categories={filteredPosts.categories}
				currentCategorySlug={filteredPosts.filters.category}
				{generateUrl}
			/>
		</section>
		<section>
			<span class="visually-hidden">Posts: </span>
			<div>
				{#each filteredPosts.posts as post (post.slug)}
					<Post {post} />
				{/each}
			</div>
			<Pagination
				{generateUrl}
				currentPage={filteredPosts.filters.pagination.page}
				totalPages={filteredPosts.filters.pagination.totalPages}
			/>
		</section>
	</main>
</DefaultLayout>
