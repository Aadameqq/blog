import { describe, test } from 'vitest';
import { filterPostsByCategory, sortPostsFromNewest } from '$lib/server/refining';
import type { TPost } from '$lib/types/TPost';

describe('filterPostsByCategory', () => {
	const testPosts = [
		{
			category: { slug: 'catone' }
		},
		{
			category: { slug: 'catOne' }
		},
		{
			category: { slug: 'caTonE' }
		},
		{
			category: { slug: 'cattwo' }
		},
		{
			category: { slug: 'cattwo' }
		}
	] as unknown as TPost[];

	test('When categorySlug and posts parameters are provided Should return all posts with given category slug', ({
		expect
	}) => {
		const testCategorySlug = 'cattwo';

		const expectedPosts = [
			{
				category: { slug: 'cattwo' }
			},
			{
				category: { slug: 'cattwo' }
			}
		];

		expect(filterPostsByCategory(testPosts, testCategorySlug)).toEqual(expectedPosts);
	});
});

describe('sortPostsFromNewest', () => {
	const testPosts = [
		{
			date: '01.01.2022'
		},
		{
			date: '01.01.2023'
		},
		{
			date: '01.01.2021'
		}
	] as unknown as TPost[];

	test('When posts parameter is provided Should return posts sorted by date from newest to oldest', ({
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

		expect(sortPostsFromNewest(testPosts)).toEqual(expectedPosts);
	});
});
