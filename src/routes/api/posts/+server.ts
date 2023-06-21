import type { RequestHandler } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { getAllPosts } from '$lib/server/posts/getAllPosts';
import { paginatingPostsRefiner } from '$lib/server/posts/refiners/paginatingPostsRefiner';
import { filteringByCategoryPostsRefiner } from '$lib/server/posts/refiners/filteringByCategoryPostsRefiner';
import { sortingByDatePostsRefiner } from '$lib/server/posts/refiners/sortingByDatePostsRefiner';
import { mapPostsSetToGetPostsOverviewDto } from '$lib/server/posts/mappers/mapPostsSetToGetPostsOverviewDto';
import { DEFAULT_PAGE, DEFAULT_PER_PAGE } from '$lib/server/posts/consts/pagination';

export const GET: RequestHandler = ({ url }) => {
	const page = Number(url.searchParams.get('page') || DEFAULT_PAGE);
	const category = url.searchParams.get('category') || undefined;

	if (isNaN(page) || page < 1)
		throw error(
			400,
			JSON.stringify({
				errorMessage: 'page and parameter must be number greater than 0'
			})
		);

	const postsSet = getAllPosts(
		sortingByDatePostsRefiner(),
		filteringByCategoryPostsRefiner(category),
		paginatingPostsRefiner(page, DEFAULT_PER_PAGE)
	);

	const dto = mapPostsSetToGetPostsOverviewDto(postsSet);

	return new Response(JSON.stringify(dto));
};
