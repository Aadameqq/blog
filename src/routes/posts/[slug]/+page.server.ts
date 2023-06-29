import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageServerLoad } from './$types';
import { posts } from '$lib/server/posts/posts';
import { StatusCodes } from '$lib/server/shared/enums/StatusCodes';

export const prerender = true;

export const entries: EntryGenerator = () => {
	return posts;
};

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	const foundPost = posts.find((post) => post.slug === slug);

	if (!foundPost) throw error(StatusCodes.NOT_FOUND);

	return { post: foundPost };
};
