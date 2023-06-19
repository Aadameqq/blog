import { describe, test } from 'vitest';
import { getArrayWithRangeOfN } from '../../../../tests/utils';
import type { PostsSet } from '$lib/server/posts/types/PostsSet';
import { paginatingPostsRefiner } from '$lib/server/posts/refiners/paginatingPostsRefiner';

describe('paginatingPostsRefiner', () => {
	const testPostsSet = {
		posts: getArrayWithRangeOfN(36),
		totalCount: 36
	} as unknown as PostsSet;

	test('When page, perPage and posts parameters are provided Should return post within range from (page-1)*perPage+1 to page*perPage', ({
		expect
	}) => {
		const testPage = 2;
		const testPerPage = 10;

		const expectedRange = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

		expect(paginatingPostsRefiner(testPage, testPerPage)(testPostsSet).posts).toEqual(
			expectedRange
		);
	});

	test('When page, perPage and posts parameters are provided Should return posts totalCount unchanged', ({
		expect
	}) => {
		const testPage = 2;
		const testPerPage = 10;

		expect(paginatingPostsRefiner(testPage, testPerPage)(testPostsSet).totalCount).toEqual(
			testPostsSet.totalCount
		);
	});
});
