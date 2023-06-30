<script lang="ts">
	import type { PageData, Snapshot } from './$types';
	import { base } from '$app/paths';

	export let data: PageData;

	export const snapshot: Snapshot = {
		capture: () => window.scrollY,
		restore: (scrollY: number) => window.scrollTo(0, scrollY)
	};

	$: doesPreviousPageExist = data.filters.pagination.page > 1;
	$: doesNextPageExist = data.filters.pagination.page < data.filters.pagination.totalPages;
</script>

<a href={base || `/`}>All</a>
{#each data.categories as category}
	<a href="{base}/categories/{category.slug}">{category.name}</a>
{/each}
<br />
<br />

{#each data.posts as post}
	<a href="{base}/posts/{post.slug}">{post.title}</a>
{/each}
<br />
<br />

{#if doesPreviousPageExist}
	<a
		href="{base}{data.filters.category ? `/categories/${data.filters.category}` : ''}{data.filters
			.pagination.page === 2
			? ``
			: `/pages/${data.filters.pagination.page - 1}`}">Previous</a
	>
{/if} // TODO: fix when both are undefined and base is undefined should be "/" instead of ""
<span>{data.filters.pagination.page}</span>

{#if doesNextPageExist}
	<a
		href={`${base}${data.filters.category ? `/categories/${data.filters.category}` : ''}/pages/${
			data.filters.pagination.page + 1
		}`}>Next</a
	>
{/if}
