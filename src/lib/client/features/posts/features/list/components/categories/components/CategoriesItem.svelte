<script lang="ts">
	import Link from '$lib/client/components/Link.svelte';

	export let url: string | undefined = undefined;
	export let isCurrent = false;
</script>

<li>
	<Link
		{url}
		aria-current={isCurrent && 'page'}
		class="text-gray-400 bg-zinc-800 px-2 py-1 rounded-lg border-2 border-solid border-zinc-600
		aria-current:bg-zinc-400 aria-current:text-gray-900
		aria-current:border-zinc-400 aria-current:font-bold
		transition duration-500 ease-in-out
		hover:bg-zinc-950 aria-current:hover:bg-zinc-300 aria-current:hover:border-zinc-300"
	>
		<slot />
	</Link>
</li>
