<script lang="ts">
	import Link from '$lib/client/components/Link.svelte';
	import { formatDate } from '$lib/client/features/posts/services/dateFormatter';
	import { routes } from '$lib/client/config/routes';
	import type { TPostPreview } from '$lib/types/TPostPreview';
	import type { TCategory } from '$lib/types/TCategory';

	export let postPreview: TPostPreview;
</script>

<article class="border-t border-dashed border-gray-500 last:border-b group">
	<Link url={routes.post(postPreview.slug)}>
		<div
			class="py-3 flex flex-nowrap desktop:justify-between items-center flex-col desktop:flex-row"
		>
			<h3
				class="text-base desktop:text-lg transition duration-300 ease-in-out text-gray-200 underline decoration-transparent underline-offset-2 group-hover:decoration-gray-500 text-center desktop:text-left"
			>
				{postPreview.title}
			</h3>

			<div
				class="flex flex-wrap laptop:flex-nowrap text-gray-400 mt-2 desktop:mt-0 whitespace-nowrap text-sm laptop:text-base justify-center items-center"
			>
				{#if postPreview.isPinned}
					<span class="bi bi-pin-angle text-gray-300 mr-2 text-lg" aria-hidden="true" />
					<p class="font-bold text-gray-300">Pinned</p>
				{:else}
					<time datetime={postPreview.date}>{formatDate(postPreview.date)}</time>
				{/if}
				<span class="mx-2 text-gray-300">/</span>
				<p>{postPreview.category.name}</p>
			</div>
		</div>
	</Link>
</article>
