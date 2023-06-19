import type { RawPostMetadata } from '$lib/server/posts/types/RawPostMetadata';

export type PostMetadata = RawPostMetadata & {
	slug: string;
};
