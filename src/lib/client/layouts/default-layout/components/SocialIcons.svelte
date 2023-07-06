<script>
	import Link from '$lib/client/components/Link.svelte';
</script>

<address>
	<ol class="flex items-center">
		<li>
			<Link><i class="icon bi bi-github" aria-label="Github"><!----></i></Link>
		</li>
		<li>
			<Link><i class="icon bi bi-facebook" aria-label="Facebook"><!----></i></Link>
		</li>
		<li>
			<Link><i class="icon bi bi-linkedin" aria-label="LinkedIn"><!----></i></Link>
		</li>
	</ol>
</address>

<style lang="postcss">
	.icon {
		@apply text-gray-300 pl-3 pr-3 text-2xl;
	}
</style>
