import type { PostMetadata } from '$lib/server/types/PostMetadata';

export type Post = PostMetadata & {
	content: string;
};
