import type { TPost } from '$lib/types/TPost';

const DEFAULT_PAGE = 1;
const DEFAULT_PER_PAGE = 8;
export const paginatePosts = (posts: TPost[], page: number, perPage = DEFAULT_PER_PAGE) => {
	return posts.slice((page - 1) * perPage, page * perPage);
};

export const formatPostsPage = (page: unknown) => {
	return Number(page) || DEFAULT_PAGE;
};

export const calculatePagesFromPostsCount = (postsCount: number, perPage = DEFAULT_PER_PAGE) => {
	return Math.ceil(postsCount / perPage);
};
