<script lang="ts">
	import { base } from '$app/paths';

	export let url: string | undefined = undefined;
	export let isExternal = false;
</script>

<a
	href="{isExternal ? '' : base}{url || '/'}"
	{...$$restProps}
	{...isExternal ? { target: '_blank' } : {}}
>
	<slot />
</a>

<style lang="postcss">
	a:hover {
		@apply cursor-pointer;
	}
</style>
