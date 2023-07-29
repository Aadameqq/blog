<script>
	import { onMount } from 'svelte';

	let isMounted = false;

	onMount(() => {
		isMounted = true;
	});
</script>

<div>
	<span class="visually-hidden">Comments</span>
	{#if isMounted}
		<script
			src="https://giscus.app/client.js"
			data-repo="Aadameqq/blog"
			data-repo-id="R_kgDOJinSjQ"
			data-category="Posts"
			data-category-id="DIC_kwDOJinSjc4CYNu_"
			data-mapping="title"
			data-strict="1"
			data-reactions-enabled="0"
			data-emit-metadata="0"
			data-input-position="top"
			data-theme="dark_dimmed"
			data-lang="en"
			data-loading="lazy"
			crossorigin="anonymous"
			async
		></script>
	{/if}
</div>
