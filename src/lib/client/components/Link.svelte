<script lang="ts">
	import { base } from '$app/paths';

	export let url;

	export let ariaLabel: string | undefined = undefined;
</script>

<a href="{base}{url || '/'}" aria-label={ariaLabel}>
	<slot />
</a>

<style lang="postcss">
	a:hover {
		@apply cursor-pointer;
	}
</style>
