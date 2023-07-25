<script>
	import Link from '$lib/client/components/Link.svelte';
	import { formatDate } from '$lib/client/features/posts/services/dateFormatter';

	export let postPreview;
</script>

<article class="border-t border-dashed border-gray-500 last:border-b group">
	<Link url="/posts/{postPreview.slug}">
		<div
			class="py-3 flex flex-nowrap desktop:justify-between items-center flex-col desktop:flex-row"
		>
			<h3
				class="text-base desktop:text-lg transition duration-300 ease-in-out text-gray-200 underline decoration-transparent underline-offset-2 group-hover:decoration-gray-500 text-center desktop:text-left"
			>
				{postPreview.title}
			</h3>
			<div
				class="flex flex-wrap laptop:flex-nowrap text-gray-400 mt-2 desktop:mt-0 whitespace-nowrap text-sm laptop:text-base justify-center"
			>
				<time datetime={postPreview.date}>{formatDate(postPreview.date)}</time>
				<span class="mx-2 text-gray-300">/</span>
				<p>{postPreview.category.name}</p>
			</div>
		</div>
	</Link>
</article>
