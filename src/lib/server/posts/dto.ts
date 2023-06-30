import type { Post } from '$lib/server/posts/types/Post';
import { calculatePagesFromPostsCount } from '$lib/server/posts/pagination';

export const getFilteredPostPreviewsDtoInstance = (
	posts: Post[],
	totalCount: number,
	pageFilter: number,
	categoryFilter?: string
) => {
	return {
		posts: posts.map(({ title, date, slug }) => ({ title, date, slug })),
		filters: {
			pagination: {
				page: pageFilter,
				totalPages: calculatePagesFromPostsCount(totalCount)
			},
			category: categoryFilter
		}
	};
};
