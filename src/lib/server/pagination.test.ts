import { describe, expect, test } from 'vitest';
import { calculatePagesFromPostsCount, paginatePosts } from '$lib/server/pagination';
import type { Post } from '$lib/server/types/Post';
import { getArrayWithRangeOfN } from '../../tests/utils';

describe('calculatePagesFromPostsCount', () => {
	test('When postsCount and perPage parameters are provided Should return total pages', () => {
		const testPostCount = 11;
		const testPerPage = 5;
		const expectedTotalPages = 3;

		expect(calculatePagesFromPostsCount(testPostCount, testPerPage)).toEqual(expectedTotalPages);
	});
});

describe('paginatePosts', () => {
	const testPosts = getArrayWithRangeOfN(36) as unknown as Post[];

	test('When page, perPage and posts parameters are provided Should return post within range from (page-1)*perPage+1 to page*perPage', ({
		expect
	}) => {
		const testPage = 2;
		const testPerPage = 10;

		const expectedRange = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

		expect(paginatePosts(testPosts, testPage, testPerPage)).toEqual(expectedRange);
	});
});
