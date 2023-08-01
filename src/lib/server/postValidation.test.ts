import { describe, expect, test } from 'vitest';
import { errorGetter, validatePostAndThrowErrors } from '$lib/server/postValidation';
import type { TPost } from '$lib/types/TPost';
import type { TCategory } from '$lib/types/TCategory';

describe('validatePostAndThrowErrors', () => {
	const testSlug = 'test-slug';
	const getError = errorGetter(testSlug);

	const testCategorySlugs = ['test', 'test1', 'test2'];

	const testCategories = testCategorySlugs.map((category) => ({ slug: category })) as TCategory[];

	test.each([
		{ field: 'title', values: [undefined, '', 1] },
		{ field: 'keywords', values: [undefined, '', 1] },
		{ field: 'categorySlug', values: [undefined, '', 'abcd'] },
		{ field: 'date', values: [undefined, '', 'abcd', '00.11.12'] },
		{ field: 'description', values: [undefined, '', 1] },
		{ field: 'slug', values: [undefined, '', 1, 'abc_', 'abcd.efgh'] },
		{ field: 'content', values: [undefined, '', 1] }
	])(
		'When post parameter is provided and value of field $field is invalid Should throw an error',
		({ field, values }) => {
			values.forEach((value) => {
				const testPost = {
					slug: testSlug,
					[field]: value
				} as unknown as TPost;

				expect(() => validatePostAndThrowErrors(testPost, testCategories)).toThrowError();

				try {
					validatePostAndThrowErrors(testPost, testCategories);
				} catch (err: any) {
					if (err && err.errors) {
						expect(err.errors).toEqual(
							expect.arrayContaining([
								field === 'slug' ? errorGetter(value as string)(field) : getError(field)
							])
						);
					} else throw err;
				}
			});
		}
	);

	test.each([
		{ field: 'title', values: ['abc'] },
		{ field: 'keywords', values: ['abc'] },
		{ field: 'category', values: testCategories },
		{ field: 'date', values: ['01.01.2010', '11.11.2012'] },
		{ field: 'description', values: ['ABC'] },
		{ field: 'slug', values: [testSlug] },
		{ field: 'content', values: ['abcdef'] }
	])(
		'When post parameter is provided and value of field $field is valid Should not throw an error',
		({ field, values }) => {
			values.forEach((value) => {
				const testPost = {
					slug: testSlug,
					[field]: value
				} as unknown as TPost;

				try {
					validatePostAndThrowErrors(testPost, testCategories);
				} catch (err: any) {
					if (err && err.errors) {
						expect(err.errors).not.toEqual(expect.arrayContaining([getError(field)]));
					}
				}
			});
		}
	);
});
