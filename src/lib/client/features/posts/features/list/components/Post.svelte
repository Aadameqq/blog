<script>
	import Link from '$lib/client/components/Link.svelte';
	import { formatDate } from '$lib/client/features/posts/services/dateFormatter';

	export let post;
</script>

<article>
	<Link url="/posts/{post.slug}">
		<h3>{post.title}</h3>
		<div>
			<time datetime={post.date}>{formatDate(post.date)}</time>
			<span>/</span>
			<p>Category</p>
		</div>
	</Link>
</article>
