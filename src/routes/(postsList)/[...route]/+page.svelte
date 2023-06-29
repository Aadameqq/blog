<script lang="ts">
	import type { PageData, Snapshot } from './$types';

	export let data: PageData;

	export const snapshot: Snapshot = {
		capture: () => window.scrollY,
		restore: (scrollY: number) => window.scrollTo(0, scrollY)
	};

	$: doesPreviousPageExist = data.currentPage > 1;
	$: doesNextPageExist = data.currentPage < data.totalPages;
</script>

<a href={'/'}>All</a>
{#each data.categories as category}
	<a href="/categories/{category.slug}">{category.name}</a>
{/each}
<br />
<br />

{#each data.posts as post}
	<a href="/posts/{post.slug}">{post.title}</a>
{/each}
<br />
<br />

{#if doesPreviousPageExist}
	<a
		href="{data.currentCategory ? `/categories/${data.currentCategory}` : ''}{data.currentPage === 2
			? `/`
			: `/pages/${data.currentPage - 1}`}">Previous</a
	>
{/if}
<span>{data.currentPage}</span>

{#if doesNextPageExist}
	<a
		href={`${data.currentCategory ? `/categories/${data.currentCategory}` : ''}/pages/${
			data.currentPage + 1
		}`}>Next</a
	>
{/if}
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
<p>aaaa</p>
