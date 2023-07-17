<script lang="ts">
	import Link from '$lib/client/components/Link.svelte';

	export let currentPage: number;
	export let totalPages: number;
	export let generateUrl;

	$: doesPreviousPageExist = currentPage > 1;
	$: doesNextPageExist = currentPage < totalPages;
	$: previousPage = currentPage - 1 > 1 ? currentPage - 1 : undefined;
</script>

<nav>
	<span
		><Link url={generateUrl({ page: previousPage })} aria-disabled={doesPreviousPageExist}
			>Previous</Link
		></span
	>
	<span>{currentPage}</span>
	<span
		><Link url={generateUrl({ page: currentPage + 1 })} aria-disabled={doesNextPageExist}>Next</Link
		>
	</span>
</nav>
