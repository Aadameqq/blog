import type { PostsSet } from '$lib/server/posts/types/PostsSet';

export type PostsRefiner = ({ posts, totalCount }: PostsSet) => PostsSet;
