<script>
	import SocialIcons from './SocialIcons.svelte';
</script>

<footer
	class="w-full flex justify-center flex-col laptop:flex-row laptop:justify-between items-center pt-5 pb-5 gap-5"
>
	<div class="text-sm text-center laptop:text-left order-2 laptop:order-none basis-1/3">
		<h6 class="header">Copyright</h6>
		<p class="content">Adam Bryndza</p>
	</div>
	<span class="order-3 laptop:order-none basis-1/3 flex justify-center">
		<SocialIcons />
	</span>
	<address
		class="not-italic text-center laptop:text-right text-sm order-1 laptop:order-none basis-1/3"
	>
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
