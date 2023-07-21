<script lang="ts">
	import PageChangeButton from '$lib/client/features/posts/features/list/components/pagination/components/PageChangeButton.svelte';

	export let currentPage: number;
	export let totalPages: number;
	export let generateUrl;

	$: doesPreviousPageExist = currentPage > 1;
	$: doesNextPageExist = currentPage < totalPages;
	$: previousPage = currentPage - 1 > 1 ? currentPage - 1 : undefined;
</script>

<nav class="flex justify-between w-full text-gray-300">
	<span class="basis-1/3">
		<PageChangeButton isActive={doesPreviousPageExist} url={generateUrl({ page: previousPage })}
			>Previous</PageChangeButton
		>
	</span>
	<span class="basis-1/3 text-center">{currentPage}</span>
	<span class="basis-1/3 text-right">
		<PageChangeButton isActive={doesNextPageExist} url={generateUrl({ page: currentPage + 1 })}
			>Next</PageChangeButton
		>
	</span>
</nav>
