import type { Post } from '$lib/server/posts/types/Post';

const SHOULD_SWAP = 1;
const SHOULD_NOT_SWAP = -1;
export const sortPostsFromNewest = (posts: Post[]) => {
	return posts.sort((first, second) => {
		if (new Date(first.date) > new Date(second.date)) {
			return SHOULD_NOT_SWAP;
		}
		return SHOULD_SWAP;
	});
};

export const filterPostsByCategory = (posts: Post[], categorySlug: string) => {
	return posts.filter((post) => post.category.toLowerCase() === categorySlug.toLowerCase());
};
