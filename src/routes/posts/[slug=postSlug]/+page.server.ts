import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageServerLoad } from './$types';
import { posts } from '$lib/server/posts/posts';
import { StatusCodes } from '$lib/server/shared/enums/StatusCodes';

export const prerender = true;

// const checkRequiredMetadata = (metadata: Record<string, any>, slug: string) => {
// 	const requiredMetadataKeys: string[] = ['title', 'keywords', 'category', 'date', 'description'];
// 	const metadataKeys = Object.keys(metadata);
//
// 	requiredMetadataKeys.forEach((key) => {
// 		if (!metadataKeys.includes(key)) throw new Error(`Missing ${key} metadata key in ${slug} post`);
// 		if (!metadata[key]) throw new Error(`Missing value of ${key} metadata key in ${slug} post`);
// 	});
//
// 	if (!categories.includes(metadata['category']))
// 		throw new Error(`${slug} post's category does not exist`);
//
// 	const dateRegex = /^([1-2][0-9]|3[0-1]|0[1-9])\.(0[1-9]|1[0-2])\.([0-9]{4})$/;
//
// 	if (!dateRegex.test(metadata['date'])) throw new Error(`${slug} post's date has invalid format`);
// };

export const entries: EntryGenerator = () => {
	return posts;
};

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	const foundPost = posts.find((post) => post.slug === slug);

	if (!foundPost) throw error(StatusCodes.NOT_FOUND);

	return { post: foundPost };
};
