import type { Post } from '$lib/server/posts/types/Post';

const DEFAULT_PAGE = 1;
const PER_PAGE = 10; // TODO: change
export const paginatePosts = (posts: Post[], page: number) => {
	return posts.slice((page - 1) * PER_PAGE, page * PER_PAGE);
};

export const formatPostsPage = (page: unknown) => {
	return Number(page) || DEFAULT_PAGE;
};

export const calculatePagesFromPostsCount = (postsCount: number) => {
	return Math.ceil(postsCount / PER_PAGE);
};
