import { describe, test } from 'vitest';
import type { PostsSet } from '$lib/server/posts/types/PostsSet';
import { filteringByCategoryPostsRefiner } from '$lib/server/posts/refiners/filteringByCategoryPostsRefiner';

describe('filteringByCategoryPostsRefiner', () => {
	const testPostsSet = {
		posts: [
			{
				category: 'catone'
			},
			{
				category: 'catOne'
			},
			{
				category: 'caTonE'
			},
			{
				category: 'cattwo'
			},
			{
				category: 'cattwo'
			}
		],
		totalCount: 5
	} as PostsSet;

	test('When categorySlug and postsSet parameters are provided Should return all posts with category equal to categorySlug without considering character case', ({
		expect
	}) => {
		const testCategory = 'CATONE';

		const expectedPosts = [
			{
				category: 'catone'
			},
			{
				category: 'catOne'
			},
			{
				category: 'caTonE'
			}
		];

		expect(filteringByCategoryPostsRefiner(testCategory)(testPostsSet).posts).toEqual(
			expectedPosts
		);
	});
	test('When categorySlug and postsSet parameters are provided Should totalCount equal to the count of found posts', ({
		expect
	}) => {
		const testCategory = 'catONE';

		const expectedCount = 3;

		expect(filteringByCategoryPostsRefiner(testCategory)(testPostsSet).totalCount).toBe(
			expectedCount
		);
	});
});
