import { posts } from '$lib/server/posts/posts';
import type { PostsRefiner } from '$lib/server/posts/types/PostsRefiner';

export const getAllPosts = (...refiners: PostsRefiner[]) => {
	let refinersData = { posts, totalCount: posts.length };

	refiners.forEach((refiner) => {
		refinersData = refiner(refinersData);
	});

	return refinersData;
};
