<script lang="ts">
	import { createInfiniteQuery } from '@tanstack/svelte-query';
	import { axiosInstance } from '../axiosInstance';
	import type { PageData } from './$types';

	export let data: PageData;

	const POSTS_PER_PAGE = 1;

	const calculatePagesNumberFromPostsCount = (count: number) => {
		return Math.ceil(count / POSTS_PER_PAGE);
	};

	let category = '';

	let totalPages = calculatePagesNumberFromPostsCount(data.postsSet.totalPostsCount);

	$: query = createInfiniteQuery({
		queryKey: ['posts', category],
		queryFn: async ({ pageParam = 1 }) => {
			console.log(`/posts?page=${pageParam}&category=${category}`);
			const fetchedPosts = await axiosInstance.get(
				`/posts?page=${pageParam}&per_page=${POSTS_PER_PAGE}&category=${category}`
			);
			totalPages = calculatePagesNumberFromPostsCount(Number(fetchedPosts.data.totalPostsCount));
			return fetchedPosts.data.posts;
		},
		initialData: {
			pageParams: [undefined],
			pages: [data.postsSet.posts]
		},
		enabled: !!category,
		getNextPageParam: (lastPage, pages) => {
			if (pages.length < totalPages) {
				return pages.length + 1;
			}
			return undefined;
		}
	});

	const changeCategory = (newCategory: string) => {
		category = newCategory;
	};
</script>

{#each data.categories as category (category)}
	<button on:click={() => changeCategory(category.slug)}>{category.name}</button>
{/each}

{#if $query.data?.pages}
	{#each $query.data.pages as group}
		{#each group as post (post.slug)}
			<a href={`/posts/${post.slug}`}>{post.slug}</a>
		{/each}
	{/each}
{/if}

{#if $query.isError}
	<p>Error</p>
{/if}

{#if $query.hasNextPage}
	{#if $query.isLoading || $query.isFetchingNextPage}
		<button disabled>Loading...</button>
	{:else}
		<button on:click={$query.fetchNextPage}>Show more</button>
	{/if}
{/if}
