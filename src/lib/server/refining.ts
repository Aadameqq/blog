import type { TPost } from '$lib/types/TPost';

const SHOULD_SWAP = 1;
const SHOULD_NOT_SWAP = -1;

const shouldSwap = (first: TPost, second: TPost) => {
	if (new Date(first.date) > new Date(second.date)) {
		return SHOULD_NOT_SWAP;
	}
	return SHOULD_SWAP;
};

export const sortPostsFromNewest = (posts: TPost[]) => {
	return posts.sort(shouldSwap);
};

export const filterPostsByCategory = (posts: TPost[], categorySlug: string) => {
	return posts.filter((post) => post.category.slug === categorySlug);
};

export const movePinnedPosts = (posts: TPost[]) => {
	return posts.sort((first, second) => {
		if (second.isPinned) {
			if (first.isPinned) {
				return shouldSwap(first, second);
			}
			return SHOULD_SWAP;
		}
		return SHOULD_NOT_SWAP;
	});
};
