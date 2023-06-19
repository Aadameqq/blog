import { describe, expect, test } from 'vitest';
import { getPostSlugFromPath } from '$lib/getPostSlugFromPath';

describe('getPostSlugFromPath', () => {
	test.each([
		['', ''],
		['/location/second/a.txt', 'a'],
		['abc.txt', 'abc'],
		['C://abc.txt', 'abc']
	])(
		'When path parameter is provided and includes file path Should return file name aka slug',
		(path, expectedSlug) => {
			expect(getPostSlugFromPath(path)).toBe(expectedSlug);
		}
	);
});
