import type { Post } from '$lib/server/posts/types/Post';
import type { RawPostMetadata } from '$lib/server/posts/types/RawPostMetadata';
import { getPostSlugFromPath } from '$lib/server/posts/postSlugUtils';
import { validatePostAndThrowErrors } from '$lib/server/posts/postValidation';
import { convertMdxToObject } from '$lib/server/shared/facades/mdxToObjectConverter';
import { convertMdToHtml } from '$lib/server/shared/facades/mdToHtmlConverter';
import { categories } from '$lib/server/categories/categories';

const postFilesByPath: Record<string, string> = import.meta.glob('/src/content/posts/*.md', {
	as: 'raw',
	eager: true
});

export const posts: Post[] = Object.entries(postFilesByPath).map(([path, fileContent]) => {
	const slug = getPostSlugFromPath(path);

	const { metadata: rawMetadata, content: rawContent } =
		convertMdxToObject<RawPostMetadata>(fileContent);

	const content = convertMdToHtml(rawContent);

	const post = {
		...rawMetadata,
		slug,
		content: content
	};

	validatePostAndThrowErrors(post, categories);

	return post;
});
