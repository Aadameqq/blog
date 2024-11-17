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
	const pinned = posts.filter((post) => post.isCategoryPinned || post.isGloballyPinned);
	const notPinned = posts.filter((post) => !post.isCategoryPinned && !post.isGloballyPinned);

	return [...pinned, ...notPinned];
};

export const filterCategoryPinnedPosts = (posts: TPost[]) => {
	return posts.filter((post) => !post.isCategoryPinned);
};

export const filterGloballyHiddenPosts = (posts: TPost[]) => {
	return posts.filter((post) => !post.isGloballyHidden);
};
