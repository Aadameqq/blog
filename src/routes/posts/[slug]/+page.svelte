<script lang="ts">
	import type { PageData } from './$types';
	import DefaultLayout from '$lib/client/layouts/default-layout/DefaultLayout.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.post.title}</title>
</svelte:head>
<DefaultLayout>
	{@html data.post.content}
</DefaultLayout>
