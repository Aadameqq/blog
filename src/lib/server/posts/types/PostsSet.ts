import type { Post } from '$lib/server/posts/types/Post';

export type PostsSet = { posts: Post[]; totalCount: number };
