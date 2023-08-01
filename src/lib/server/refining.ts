import type { TPost } from '$lib/types/TPost';

const SHOULD_SWAP = 1;
const SHOULD_NOT_SWAP = -1;
export const sortPostsFromNewest = (posts: TPost[]) => {
	return posts.sort((first, second) => {
		if (new Date(first.date) > new Date(second.date)) {
			return SHOULD_NOT_SWAP;
		}
		return SHOULD_SWAP;
	});
};

export const filterPostsByCategory = (posts: TPost[], categorySlug: string) => {
	return posts.filter((post) => post.category.slug === categorySlug);
};
