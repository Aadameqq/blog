import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

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

export const load: PageLoad = async ({ params }) => {
	const { slug } = params;

	const { metadata, default: content } = await import(`/src/content/posts/${slug}.md`);

	const foundPost = {
		...metadata,
		content,
		slug
	};

	if (!foundPost) throw error(404);

	return { post: foundPost };
};
