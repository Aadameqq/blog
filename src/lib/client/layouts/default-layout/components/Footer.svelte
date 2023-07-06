<script>
	import SocialIcons from './SocialIcons.svelte';
</script>

<footer class="flex justify-between items-center h-[80px]">
	<div class="text-sm">
		<h6 class="header">Copyright</h6>
		<p class="content">Adam Bryndza</p>
	</div>
	<SocialIcons />
	<address class="not-italic text-right text-sm">
		<h6 class="header">Mail</h6>
		<p class="content">testmail@testdomain</p>
	</address>
</footer>

<style lang="postcss">
	.header {
		@apply font-bold text-gray-300;
	}

	.content {
		@apply text-gray-400;
	}
</style>
