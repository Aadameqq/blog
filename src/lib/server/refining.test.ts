import { describe, test } from 'vitest';
import {
	filterCategoryPinnedPosts,
	filterGloballyHiddenPosts,
	filterPostsByCategory,
	movePinnedPosts,
	sortPostsFromNewest
} from '$lib/server/refining';
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

describe('movePinnedPosts', () => {
	const testPosts = [
		{
			date: '15.01.2022',
			isCategoryPinned: true,
			isGloballyPinned: false
		},
		{
			date: '01.01.2022',
			isGloballyPinned: true,
			isCategoryPinned: false
		},
		{
			date: '01.01.2023'
		},
		{
			date: '01.01.2021'
		},
		{
			date: '30.02.2022',
			isGloballyPinned: true,
			isCategoryPinned: false
		}
	] as unknown as TPost[];

	test('When posts parameter is provided Should return posts with the pinned ones at the beginning', ({
		expect
	}) => {
		const expectedPosts = [
			{
				date: '15.01.2022',
				isCategoryPinned: true,
				isGloballyPinned: false
			},
			{
				date: '01.01.2022',
				isGloballyPinned: true,
				isCategoryPinned: false
			},
			{
				date: '30.02.2022',
				isGloballyPinned: true,
				isCategoryPinned: false
			},
			{
				date: '01.01.2023'
			},
			{
				date: '01.01.2021'
			}
		];

		expect(movePinnedPosts(testPosts)).toEqual(expectedPosts);
	});
});

describe('filterCategoryPinnedPosts', () => {
	const testPosts = [
		{
			slug: '1',
			isCategoryPinned: true
		},
		{
			slug: '2',
			isGloballyPinned: true
		},
		{
			slug: '3',
			isCategoryPinned: true
		},
		{
			slug: '4'
		}
	] as unknown as TPost[];

	test('When posts parameter is provided Should return posts that are not category pinned', ({
		expect
	}) => {
		const expectedPosts = [
			{
				slug: '2',
				isGloballyPinned: true
			},
			{
				slug: '4'
			}
		];

		expect(filterCategoryPinnedPosts(testPosts)).toEqual(expectedPosts);
	});
});
describe('filterGloballyHiddenPosts', () => {
	const testPosts = [
		{
			slug: '1',
			isGloballyHidden: true
		},
		{
			slug: '2'
		},
		{
			slug: '3',
			isGloballyHidden: true
		},
		{
			slug: '4'
		}
	] as unknown as TPost[];

	test('When posts parameter is provided Should return posts that are not globally hidden', ({
		expect
	}) => {
		const expectedPosts = [
			{
				slug: '2'
			},
			{
				slug: '4'
			}
		];

		expect(filterGloballyHiddenPosts(testPosts)).toEqual(expectedPosts);
	});
});
