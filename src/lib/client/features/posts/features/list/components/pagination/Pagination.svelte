<script lang="ts">
	import PageChangeButton from '$lib/client/features/posts/features/list/components/pagination/components/PageChangeButton.svelte';
	import { routes } from '$lib/client/config/routes';

	export let currentPage: number;
	export let totalPages: number;
	export let currentCategorySlug: string;

	$: doesPreviousPageExist = currentPage > 1;
	$: doesNextPageExist = currentPage < totalPages;
	$: previousPage = currentPage - 1 > 1 ? currentPage - 1 : undefined;
</script>

<nav class="flex justify-between w-full text-gray-300">
	<span class="basis-1/3">
		<PageChangeButton
			isActive={doesPreviousPageExist}
			url={routes.blog({ page: previousPage, categorySlug: currentCategorySlug })}
			>Previous</PageChangeButton
		>
	</span>
	<span class="basis-1/3 text-center">{currentPage}</span>
	<span class="basis-1/3 text-right">
		<PageChangeButton
			isActive={doesNextPageExist}
			url={routes.blog({ page: currentPage + 1, categorySlug: currentCategorySlug })}
			>Next</PageChangeButton
		>
	</span>
</nav>
