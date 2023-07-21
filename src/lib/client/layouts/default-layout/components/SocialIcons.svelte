<script>
	import Link from '$lib/client/components/Link.svelte';
</script>

<address>
	<ol class="flex items-center">
		<li>
			<Link
				><span class="visually-hidden">My Github profile </span><span class="icon bi bi-github"
					><!----></span
				></Link
			>
		</li>
		<li>
			<Link
				><span class="visually-hidden">My Facebook profile </span><span class="icon bi bi-facebook"
					><!----></span
				>
			</Link>
		</li>
		<li>
			<Link
				><span class="visually-hidden">My LinkedIn profile </span><span class="icon bi bi-linkedin"
					><!----></span
				>
			</Link>
		</li>
	</ol>
</address>

<style lang="postcss">
	.icon {
		@apply text-gray-300 pl-3 pr-3 text-2xl desktop:text-3xl transition duration-300 ease-in-out hover:text-zinc-400;
	}
</style>
