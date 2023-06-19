import type { GetPostsOverviewDto } from '$lib/server/posts/types/dtos/GetPostsOverviewDto';
import type { GetCategoriesOverviewDto } from '$lib/server/categories/types/dtos/GetCategoriesOverviewDto';

export type GetHomepageContentDto = {
	postsSet: GetPostsOverviewDto;
	categories: GetCategoriesOverviewDto;
};
