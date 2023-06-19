import { describe, test } from 'vitest';
import type { PostsSet } from '$lib/server/posts/types/PostsSet';
import { sortingByDatePostsRefiner } from '$lib/server/posts/refiners/sortingByDatePostsRefiner';

describe('sortingByDatePostsRefiner', () => {
	const testPostsSet = {
		posts: [
			{
				date: '01.01.2022'
			},
			{
				date: '01.01.2023'
			},
			{
				date: '01.01.2021'
			}
		],
		totalCount: 3
	} as PostsSet;

	test('When posts and sortFromRecentDate parameters are provided and sortFromRecentDate is equal to true Should return posts sorted by date from newest to oldest', ({
		expect
	}) => {
		const expectedPosts = [
			{
				date: '01.01.2023'
			},
			{
				date: '01.01.2022'
			},
			{
				date: '01.01.2021'
			}
		];

		expect(sortingByDatePostsRefiner()(testPostsSet).posts).toEqual(expectedPosts);
	});

	test('When posts and sortFromRecentDate parameters are provided and sortFromRecentDate is equal to false Should return posts sorted by date from oldest to newest', ({
		expect
	}) => {
		const expectedPosts = [
			{
				date: '01.01.2021'
			},
			{
				date: '01.01.2022'
			},
			{
				date: '01.01.2023'
			}
		];

		expect(sortingByDatePostsRefiner(false)(testPostsSet).posts).toEqual(expectedPosts);
	});
});
