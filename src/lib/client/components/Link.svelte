<script lang="ts">
	import { base } from '$app/paths';

	export let url;
</script>

<a href="{base}{url || '/'}">
	<slot />
</a>

<style lang="postcss">
	a:hover {
		@apply cursor-pointer;
	}
</style>
