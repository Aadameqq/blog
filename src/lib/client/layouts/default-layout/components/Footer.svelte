<script>
	import SocialIcons from './SocialIcons.svelte';
</script>

<footer
	class="flex justify-center flex-col desktop:flex-row desktop:justify-between items-center pt-5 pb-5 gap-5"
>
	<div class="text-sm text-center desktop:text-left order-2 desktop:order-none">
		<h6 class="header">Copyright</h6>
		<p class="content">Adam Bryndza</p>
	</div>
	<span class="order-3 desktop:order-none">
		<SocialIcons />
	</span>
	<address class="not-italic text-center desktop:text-right text-sm order-1 desktop:order-none">
		<h6 class="header">Mail</h6>
		<p class="content">testmail@testdomain</p>
	</address>
</footer>

<style lang="postcss">
	.header {
		@apply text-gray-300 pb-1;
	}

	.content {
		@apply text-gray-400;
	}
</style>
