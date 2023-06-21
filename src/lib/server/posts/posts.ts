import type { Post } from '$lib/server/posts/types/Post';
import { getPostSlugFromPath } from '$lib/server/posts/getPostSlugFromPath';
import formatMdxFile from 'gray-matter';
import type { RawPostMetadata } from '$lib/server/posts/types/RawPostMetadata';
import { markdownItInstance } from '$lib/server/shared/markdownItInstance';

const postFilesByPath: Record<string, string> = import.meta.glob('/src/content/posts/*.md', {
	as: 'raw',
	eager: true
});

export const posts: Post[] = Object.entries(postFilesByPath).map(([path, fileContent]) => {
	const slug = getPostSlugFromPath(path);

	const { data: rawMetadata, content: rawContent } = formatMdxFile(fileContent);

	const content = markdownItInstance.render(rawContent);

	return {
		...(rawMetadata as RawPostMetadata),
		slug,
		content: content
	};
});
