import type { EntryGenerator, PageServerLoad } from './$types';
import { categories } from '$lib/server/categories/categories';
import { posts } from '$lib/server/posts/posts';
import { getParamValueFromRouteIfExists } from '$lib/server/shared/paramsUtils';
import { filterPostsByCategory, sortPostsFromNewest } from '$lib/server/posts/refining';
import {
	calculatePagesFromPostsCount,
	formatPostsPage,
	paginatePosts
} from '$lib/server/posts/pagination';
import { getDtoInstance } from '$lib/server/posts/dto';

export const prerender = 'true';

export const entries: EntryGenerator = () => {
	const routes = [];
	for (let page = 2; page <= calculatePagesFromPostsCount(posts.length); page++) {
		routes.push({ route: `pages/${page}` });
	}

	categories.forEach(({ slug: categorySlug }) => {
		routes.push({ route: `categories/${categorySlug}` });

		const postsCount = calculatePagesFromPostsCount(
			filterPostsByCategory(posts, categorySlug).length
		);

		for (let page = 2; page <= postsCount; page++) {
			routes.push({ route: `categories/${categorySlug}/pages/${page}` });
		}
	});
	return routes;
};

export const load: PageServerLoad = ({ params }) => {
	console.log(1, params.route);
	const { route } = params;

	const pageParam = getParamValueFromRouteIfExists(route, 'pages');
	const categorySlugParam = getParamValueFromRouteIfExists(route, 'categories');

	const page = formatPostsPage(pageParam);

	let filteredPosts = posts;

	if (categorySlugParam) {
		filteredPosts = filterPostsByCategory(filteredPosts, categorySlugParam);
	}

	const totalCount = filteredPosts.length;

	filteredPosts = sortPostsFromNewest(filteredPosts);
	filteredPosts = paginatePosts(filteredPosts, page);

	return getDtoInstance(filteredPosts, totalCount, page, categorySlugParam);
};
