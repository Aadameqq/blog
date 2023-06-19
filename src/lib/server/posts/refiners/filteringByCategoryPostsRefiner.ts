import type { PostsRefiner } from '$lib/server/posts/types/PostsRefiner';

export const filteringByCategoryPostsRefiner =
	(categorySlug?: string): PostsRefiner =>
	(data) => {
		if (!categorySlug) return data;
		const refinedPosts = data.posts.filter(
			(post) => post.category.toLowerCase() === categorySlug.toLowerCase()
		);
		return { posts: refinedPosts, totalCount: refinedPosts.length };
	};
