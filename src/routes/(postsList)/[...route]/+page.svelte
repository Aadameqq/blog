<script lang="ts">
	import type { PageData } from './$types';

	import PostsList from '$lib/client/features/posts/features/list/PostsList.svelte';

	export let data: PageData;
</script>

<PostsList
	currentCategory={data.currentCategory}
	currentPage={data.currentPage}
	postPreviews={data.postPreviews}
	totalPages={data.totalPages}
	categories={data.categories}
/>
