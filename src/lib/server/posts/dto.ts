import type { Post } from '$lib/server/posts/types/Post';
import { calculatePagesFromPostsCount } from '$lib/server/posts/pagination';

export const getDtoInstance = (
	posts: Post[],
	totalCount: number,
	currentPage: number,
	currentCategory?: string
) => {
	return {
		posts: posts.map(({ title, date, slug }) => ({ title, date, slug })),
		totalPages: calculatePagesFromPostsCount(totalCount),
		currentPage,
		currentCategory
	};
};
