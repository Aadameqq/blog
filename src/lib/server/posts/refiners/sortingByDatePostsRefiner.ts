import type { PostsRefiner } from '$lib/server/posts/types/PostsRefiner';

const SHOULD_SWAP = 1;
const SHOULD_NOT_SWAP = -1;

export const sortingByDatePostsRefiner =
	(sortFromRecentDate = true): PostsRefiner =>
	({ posts, totalCount }) => {
		const refinedPosts = posts.sort((first, second) => {
			if (new Date(first.date) > new Date(second.date)) {
				return sortFromRecentDate ? SHOULD_NOT_SWAP : SHOULD_SWAP;
			}
			return sortFromRecentDate ? SHOULD_SWAP : SHOULD_NOT_SWAP;
		});
		return { posts: refinedPosts, totalCount };
	};
