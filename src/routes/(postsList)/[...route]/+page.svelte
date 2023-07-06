<script lang="ts">
	import type { PageData } from './$types';
	import PostsList from '$lib/client/features/posts-list/PostsList.svelte';

	export let data: PageData;
</script>

<PostsList filteredPostPreviews={data} />
