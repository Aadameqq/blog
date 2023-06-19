import type { MdFile } from '$lib/server/shared/types/MdFile';
import type { RawPostMetadata } from '$lib/server/posts/types/RawPostMetadata';

export type RawPost = MdFile<RawPostMetadata>;
