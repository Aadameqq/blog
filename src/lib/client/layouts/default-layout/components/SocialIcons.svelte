<script lang="ts">
	import Link from '$lib/client/components/Link.svelte';
	import { externalLinks } from '$lib/client/config/externalLinks';

	export let iconClass = '';
</script>

<address>
	<ol class="flex items-center">
		<li>
			<Link url={externalLinks.github()}
				><span class="visually-hidden">My Github profile </span><span
					class="icon bi bi-github {iconClass}"><!----></span
				></Link
			>
		</li>
		<li>
			<Link href={externalLinks.facebook()}
				><span class="visually-hidden">My Facebook profile </span><span
					class="icon bi bi-facebook {iconClass}"><!----></span
				>
			</Link>
		</li>
		<li>
			<Link href={externalLinks.linkedIn()}
				><span class="visually-hidden">My LinkedIn profile </span><span
					class="icon bi bi-linkedin {iconClass}"><!----></span
				>
			</Link>
		</li>
	</ol>
</address>

<style lang="postcss">
	.icon {
		@apply text-gray-300 pl-2 pr-2 transition duration-300 ease-in-out hover:text-zinc-400;
	}
</style>
