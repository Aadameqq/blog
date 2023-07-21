<script>
	import Link from '$lib/client/components/Link.svelte';
	import { formatDate } from '$lib/client/features/posts/services/dateFormatter';

	export let post;
</script>

<article class="border-t border-dashed border-gray-500 last:border-b group">
	<Link url="/posts/{post.slug}">
		<div class="py-4 flex flex-nowrap justify-between items-center">
			<h3
				class="transition duration-2000 ease-in-out text-gray-50 group-hover:underline group-hover:underline-offset-2 group-hover:decoration-gray-400 group-hover:decoration-0.5"
			>
				{post.title}
			</h3>
			<div class="flex flex-nowrap text-gray-400">
				<time datetime={post.date}>{formatDate(post.date)}</time>
				<span class="mx-2 text-gray-300">/</span>
				<p>Category</p>
			</div>
		</div>
	</Link>
</article>
