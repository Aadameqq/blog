import type { Post } from '$lib/server/posts/types/Post';
import type { RawPost } from '$lib/server/posts/types/RawPost';
import { getPostSlugFromPath } from '$lib/getPostSlugFromPath';

const rawPostsByPath: Record<string, RawPost> = import.meta.globEager('/src/content/posts/*.md');

export const posts: Post[] = Object.entries(rawPostsByPath).map(([path, rawPost]) => {
	const slug = getPostSlugFromPath(path);

	const { default: content } = rawPost;

	return {
		...rawPost.metadata,
		slug,
		content
	};
});
