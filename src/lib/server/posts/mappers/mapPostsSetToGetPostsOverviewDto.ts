import type { PostsSet } from '$lib/server/posts/types/PostsSet';
import type { GetPostsOverviewDto } from '$lib/server/posts/types/dtos/GetPostsOverviewDto';

export const mapPostsSetToGetPostsOverviewDto = (postsSet: PostsSet): GetPostsOverviewDto => {
	return {
		posts: postsSet.posts.map(({ title, date, slug }) => ({ title, date, slug })),
		totalPostsCount: postsSet.totalCount
	};
};
