import type { PostsRefiner } from '$lib/server/posts/types/PostsRefiner';

export const paginatingPostsRefiner =
	(page: number, perPage: number): PostsRefiner =>
	({ posts, totalCount }) => {
		const refinedPosts = posts.slice((page - 1) * perPage, page * perPage);
		return { posts: refinedPosts, totalCount };
	};
