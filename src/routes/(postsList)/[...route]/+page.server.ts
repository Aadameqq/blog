import type { EntryGenerator, PageServerLoad } from './$types';
import { categories } from '$lib/server/categories';
import { posts } from '$lib/server/posts';
import { getParamValueFromRouteIfExists } from '$lib/server/paramsUtils';
import { filterPostsByCategory, movePinnedPosts, sortPostsFromNewest } from '$lib/server/refining';
import {
	calculatePagesFromPostsCount,
	formatPostsPage,
	paginatePosts
} from '$lib/server/pagination';

export const prerender = true;

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

	if (categorySlugParam) {
		filteredPosts = movePinnedPosts(filteredPosts);
	}

	filteredPosts = paginatePosts(filteredPosts, page);

	const postPreviews = filteredPosts.map(({ title, category, date, slug, isPinned }) => ({
		title,
		category,
		date,
		slug,
		isPinned
	}));

	return {
		postPreviews,
		currentCategory: categories.find((category) => category.slug === categorySlugParam),
		totalPages: calculatePagesFromPostsCount(totalCount),
		currentPage: page
	};
};
