import type { PostMetadata } from '$lib/server/posts/types/PostMetadata';

export type Post = PostMetadata & {
	content: string;
};
