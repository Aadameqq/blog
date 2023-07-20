<script>
	import Link from '$lib/client/components/Link.svelte';
	import { formatDate } from '$lib/client/features/posts/services/dateFormatter';

	export let post;
</script>

<article class="border-t border-dashed border-gray-500 last:border-b">
	<Link url="/posts/{post.slug}">
		<div class="py-4 flex flex-nowrap justify-between">
			<h3 class="text-gray-200">{post.title}</h3>
			<div class="flex flex-nowrap text-gray-400">
				<time datetime={post.date}>{formatDate(post.date)}</time>
				<span class="mx-2 text-gray-300">/</span>
				<p>Category</p>
			</div>
		</div>
	</Link>
</article>
