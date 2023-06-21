import type { RequestHandler } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { getAllPosts } from '$lib/server/posts/getAllPosts';
import { paginatingPostsRefiner } from '$lib/server/posts/refiners/paginatingPostsRefiner';
import { filteringByCategorySlugPostsRefiner } from '$lib/server/posts/refiners/filteringByCategorySlugPostsRefiner';
import { sortingByDatePostsRefiner } from '$lib/server/posts/refiners/sortingByDatePostsRefiner';
import { mapPostsSetToGetPostsOverviewDto } from '$lib/server/posts/mappers/mapPostsSetToGetPostsOverviewDto';
import { DEFAULT_PER_PAGE } from '$lib/server/posts/consts/pagination';
import { StatusCodes } from '$lib/server/shared/enums/StatusCodes';

export const GET: RequestHandler = ({ url }) => {
	const page = Number(url.searchParams.get('page'));
	const categorySlug = url.searchParams.get('category_slug') || undefined;

	if (isNaN(page) || page < 1)
		throw error(
			StatusCodes.BAD_REQUEST,
			JSON.stringify({
				errorMessage: 'page and parameter must be number greater than 0'
			})
		);

	const postsSet = getAllPosts(
		sortingByDatePostsRefiner(),
		filteringByCategorySlugPostsRefiner(categorySlug),
		paginatingPostsRefiner(page, DEFAULT_PER_PAGE)
	);

	const dto = mapPostsSetToGetPostsOverviewDto(postsSet);

	return new Response(JSON.stringify(dto));
};
