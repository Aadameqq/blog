<script lang="ts">
	import type { PageData } from './$types';
	import Post from '$lib/client/features/posts/features/single/Post.svelte';

	export let data: PageData;
</script>

<Post post={data.post} />
