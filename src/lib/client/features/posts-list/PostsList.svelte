<script lang="ts">
	import type { Snapshot } from './$types';
	import DefaultLayout from '$lib/client/layouts/default-layout/DefaultLayout.svelte';
	import Link from '$lib/client/components/Link.svelte';

	export let filteredPostPreviews; // TODO: add type

	export const snapshot: Snapshot = {
		capture: () => window.scrollY,
		restore: (scrollY: number) => window.scrollTo(0, scrollY)
	};

	$: doesPreviousPageExist = filteredPostPreviews.filters.pagination.page > 1;
	$: doesNextPageExist =
		filteredPostPreviews.filters.pagination.page <
		filteredPostPreviews.filters.pagination.totalPages;
</script>

<!--<Link>All</Link>-->
<!--{#each filteredPostPreviews.categories as category}-->
<!--	<Link url="/categories/{category.slug}">{category.name}</Link>-->
<!--{/each}-->
<!--<br />-->
<!--<br />-->

<!--{#each filteredPostPreviews.posts as post}-->
<!--	<Link url="/posts/{post.slug}">{post.title}</Link>-->
<!--{/each}-->
<!--<br />-->
<!--<br />-->

<!--{#if doesPreviousPageExist}-->
<!--	<Link-->
<!--			url="{filteredPostPreviews.filters.category-->
<!--				? `/categories/${filteredPostPreviews.filters.category}`-->
<!--				: ''}{filteredPostPreviews.filters.pagination.page === 2-->
<!--				? ``-->
<!--				: `/pages/${filteredPostPreviews.filters.pagination.page - 1}`}"-->
<!--	>Previous-->
<!--	</Link>-->
<!--{/if}-->
<!--<span>{filteredPostPreviews.filters.pagination.page}</span>-->

<!--{#if doesNextPageExist}-->
<!--	<Link-->
<!--			url={`${-->
<!--				filteredPostPreviews.filters.category-->
<!--					? `/categories/${filteredPostPreviews.filters.category}`-->
<!--					: ''-->
<!--			}/pages/${filteredPostPreviews.filters.pagination.page + 1}`}-->
<!--	>Next-->
<!--	</Link>-->
<!--{/if}-->

<DefaultLayout>
	<main>
		<h1>Blog</h1>
		<p><span class="visually-hidden">Current category: </span>categories/Software_Architecture</p>
		<section>
			<nav>
				<span class="visually-hidden">Categories: </span>
				<ul>
					<li aria-current="page">
						<Link>Category name</Link>
					</li>
				</ul>
			</nav>
		</section>
		<section>
			<span class="visually-hidden">Posts: </span>
			<div>
				<article>
					<Link>
						<h3>Title</h3>
						<div>
							<time datetime="">Date</time>
							<span>/</span>
							<p>Category</p>
						</div>
					</Link>
				</article>
			</div>
			<nav>
				<span><Link /></span>
				<span />
				<span><Link /></span>
			</nav>
		</section>
	</main>
</DefaultLayout>
