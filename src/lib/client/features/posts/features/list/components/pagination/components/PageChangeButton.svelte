<script lang="ts">
	import Link from '$lib/client/components/Link.svelte';

	export let isActive: boolean;

	export let url: string;
</script>

{#if isActive}
	<Link class="underline underline-offset-2 " {url}>
		<slot />
	</Link>
{:else}
	<p class="text-gray-500 cursor-not-allowed">
		<slot />
	</p>
{/if}
