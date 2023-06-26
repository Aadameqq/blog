import type { PostsSet } from '$lib/server/posts/types/PostsSet';
import type { GetPostsOverviewDto } from '$lib/server/posts/types/dtos/GetPostsOverviewDto';
import { DEFAULT_PER_PAGE } from '$lib/server/posts/paginationConstants';

export const mapPostsSetToGetPostsOverviewDto = (postsSet: PostsSet): GetPostsOverviewDto => {
	return {
		posts: postsSet.posts.map(({ title, date, slug }) => ({ title, date, slug })),
		totalPages: Math.ceil(postsSet.totalCount / DEFAULT_PER_PAGE)
	};
};
