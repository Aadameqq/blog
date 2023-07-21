<script lang="ts">
	import Link from '$lib/client/components/Link.svelte';

	export let url;
	export let isCurrent: boolean;
</script>

<li class="mx-2 first:ml-0 last:mr-0">
	<Link
		{url}
		aria-current={isCurrent && 'page'}
		class="text-gray-400 bg-zinc-800 px-3 py-1.5 rounded-lg border-2 border-solid border-zinc-600
		aria-current:bg-zinc-400 aria-current:text-gray-900
		aria-current:border-zinc-400 aria-current:font-bold
		transition duration-500 ease-in-out
		hover:bg-zinc-950 aria-current:hover:bg-zinc-300 aria-current:hover:border-zinc-300"
	>
		<slot />
	</Link>
</li>
