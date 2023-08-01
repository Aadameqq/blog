<script lang="ts">
	import DefaultLayout from '$lib/client/layouts/default-layout/DefaultLayout.svelte';
	import MdStylesProvider from '$lib/client/features/posts/features/single/components/MdStylesProvider.svelte';
	import { formatDate } from '$lib/client/features/posts/services/dateFormatter';
	import Seo from '$lib/client/components/Seo.svelte';
	import type { TPost } from '$lib/types/TPost';
	import { OgTypes } from '$lib/client/types/OgTypes';

	export let post: TPost;
</script>

<Seo
	title={post.title}
	ogType={OgTypes.ARTICLE}
	ogArticle={{ publishedTime: post.date, section: post.category.name }}
	description={post.description}
/>

<DefaultLayout>
	<main>
		<article>
			<header>
				<h1 class="text-gray-50 text-2xl laptop:text-3xl font-bold mb-3 desktop:text-4xl">
					{post.title}
				</h1>
				<div class="text-gray-400 mb-2">
					<span class="bi bi-bookmark-fill text-gray-300" aria-hidden="true"><!-- --></span>
					<span class="visually-hidden">Post's category: </span>
					<span>{post.category.name}</span>
				</div>
				<div class="text-gray-400 mb-6">
					<span class="bi bi-clock-fill text-gray-300" aria-hidden="true"><!-- --></span>
					<span class="visually-hidden">Post created at: </span>
					<time datetime={post.date}>{formatDate(post.date)}</time>
				</div>
			</header>

			<MdStylesProvider>
				<div>
					{@html post.content}
				</div>
			</MdStylesProvider>
			<section class="mt-20">
				<!--				<Comments />-->
			</section>
		</article>
	</main>
</DefaultLayout>
