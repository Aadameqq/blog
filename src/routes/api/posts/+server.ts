import type { RequestHandler } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { getAllPosts } from '$lib/server/posts/getAllPosts';
import { paginatingPostsRefiner } from '$lib/server/posts/refiners/paginatingPostsRefiner';
import { filteringByCategoryPostsRefiner } from '$lib/server/posts/refiners/filteringByCategoryPostsRefiner';
import { sortingByDatePostsRefiner } from '$lib/server/posts/refiners/sortingByDatePostsRefiner';
import { mapPostsSetToGetPostsOverviewDto } from '$lib/server/posts/mappers/mapPostsSetToGetPostsOverviewDto';

export const GET: RequestHandler = ({ url }) => {
	const page = Number(url.searchParams.get('page') || '1');
	const perPage = Number(url.searchParams.get('per_page') || '10');
	const category = url.searchParams.get('category') || undefined;

	if (isNaN(page) || page < 1 || isNaN(perPage) || perPage < 1)
		throw error(
			400,
			JSON.stringify({
				errorMessage: 'page and per_page parameters must be numbers greater than 0'
			})
		);

	const postsSet = getAllPosts(
		sortingByDatePostsRefiner(),
		filteringByCategoryPostsRefiner(category),
		paginatingPostsRefiner(page, perPage)
	);

	const dto = mapPostsSetToGetPostsOverviewDto(postsSet);

	return new Response(JSON.stringify(dto));
};
