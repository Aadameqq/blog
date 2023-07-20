<script lang="ts">
	import Link from '$lib/client/components/Link.svelte';

	export let currentPage: number;
	export let totalPages: number;
	export let generateUrl;

	$: doesPreviousPageExist = currentPage > 1;
	$: doesNextPageExist = currentPage < totalPages;
	$: previousPage = currentPage - 1 > 1 ? currentPage - 1 : undefined;
</script>

<nav class="flex justify-between w-full text-gray-300">
	<span class="basis-1/3">
		{#if doesPreviousPageExist}
			<Link class="underline underline-offset-2 " url={generateUrl({ page: previousPage })}
				>Previous</Link
			>
		{:else}
			<p class="text-gray-500 cursor-not-allowed">Previous</p>
		{/if}
	</span>
	<span class="basis-1/3 text-center">{currentPage}</span>
	<span class="basis-1/3 text-right"
		>{#if doesNextPageExist}
			<Link class="underline underline-offset-2 " url={generateUrl({ page: currentPage + 1 })}
				>Next</Link
			>
		{:else}
			<p class="text-gray-500 cursor-not-allowed">Next</p>
		{/if}
		<!--TODO: remove duplication-->
	</span>
</nav>
