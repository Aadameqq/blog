import { getAllPosts } from '$lib/server/posts/getAllPosts';
import { paginatingPostsRefiner } from '$lib/server/posts/refiners/paginatingPostsRefiner';
import { sortingByDatePostsRefiner } from '$lib/server/posts/refiners/sortingByDatePostsRefiner';
import { mapCategoriesToGetCategoriesOverviewDto } from '$lib/server/categories/mappers/mapCategoriesToGetCategoriesOverviewDto';
import { mapPostsSetToGetPostsOverviewDto } from '$lib/server/posts/mappers/mapPostsSetToGetPostsOverviewDto';
import { categories } from '$lib/server/categories/categories';
import type { GetHomepageContentDto } from '$lib/server/blog/types/dtos/GetHomepageContentDto';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async () => {
	const postsSet = getAllPosts(sortingByDatePostsRefiner(), paginatingPostsRefiner());

	const categoriesDto = mapCategoriesToGetCategoriesOverviewDto(categories);
	const postsDto = mapPostsSetToGetPostsOverviewDto(postsSet);

	const dto: GetHomepageContentDto = {
		postsSet: postsDto,
		categories: categoriesDto
	};

	return dto;
};
