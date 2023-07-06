<script lang="ts">
	import type { Snapshot } from './$types';
	import Link from '$lib/client/components/Link.svelte';
	import DefaultLayout from '$lib/client/layouts/default-layout/DefaultLayout.svelte';

	export let filteredPostPreviews; // TODO: add type

	export const snapshot: Snapshot = {
		capture: () => window.scrollY,
		restore: (scrollY: number) => window.scrollTo(0, scrollY)
	};

	$: doesPreviousPageExist = filteredPostPreviews.filters.pagination.page > 1;
	$: doesNextPageExist =
		filteredPostPreviews.filters.pagination.page <
		filteredPostPreviews.filters.pagination.totalPages;
</script>

<DefaultLayout>
	<Link>All</Link>
	{#each filteredPostPreviews.categories as category}
		<Link url="/categories/{category.slug}">{category.name}</Link>
	{/each}
	<br />
	<br />

	{#each filteredPostPreviews.posts as post}
		<Link url="/posts/{post.slug}">{post.title}</Link>
	{/each}
	<br />
	<br />

	{#if doesPreviousPageExist}
		<Link
			url="{filteredPostPreviews.filters.category
				? `/categories/${filteredPostPreviews.filters.category}`
				: ''}{filteredPostPreviews.filters.pagination.page === 2
				? ``
				: `/pages/${filteredPostPreviews.filters.pagination.page - 1}`}"
			>Previous
		</Link>
	{/if}
	<span>{filteredPostPreviews.filters.pagination.page}</span>

	{#if doesNextPageExist}
		<Link
			url={`${
				filteredPostPreviews.filters.category
					? `/categories/${filteredPostPreviews.filters.category}`
					: ''
			}/pages/${filteredPostPreviews.filters.pagination.page + 1}`}
			>Next
		</Link>
	{/if}
</DefaultLayout>
