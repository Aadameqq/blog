import type { Post } from '$lib/server/types/Post';
import type { RawPostMetadata } from '$lib/server/types/RawPostMetadata';
import { getPostSlugFromPath } from '$lib/server/postSlugUtils';
import { validatePostAndThrowErrors } from '$lib/server/postValidation';
import { convertMdxToObject } from '$lib/server/facades/mdxToObjectConverter';
import { convertMdToHtml } from '$lib/server/facades/mdToHtmlConverter';
import { categories } from '$lib/server/categories';
import type { Category } from '$lib/server/types/Category';

const postFilesByPath: Record<string, string> = import.meta.glob('/src/content/posts/*.md', {
	as: 'raw',
	eager: true
});

export const posts: Post[] = Object.entries(postFilesByPath).map(([path, fileContent]) => {
	const slug = getPostSlugFromPath(path);

	const { metadata: rawMetadata, content: rawContent } =
		convertMdxToObject<RawPostMetadata>(fileContent);

	const content = convertMdToHtml(rawContent);

	const { categorySlug, ...restRawMetadata } = rawMetadata;

	const post = {
		...restRawMetadata,
		category: categories.find((category) => category.slug === categorySlug) as Category,
		slug,
		content: content
	};

	validatePostAndThrowErrors(post, categories);

	return post;
});
