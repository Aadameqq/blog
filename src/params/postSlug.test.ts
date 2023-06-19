import { describe, test } from 'vitest';
import { match } from './postSlug';

describe('postSlug matcher', () => {
	test('When slug parameter is provided and includes any forbidden characters Should return false', ({
		expect
	}) => {
		const testSlug = 'abcdefghj!';

		expect(match(testSlug)).toBe(false);
	});

	test('When slug parameter is provided and do not include any forbidden characters Should return true', ({
		expect
	}) => {
		const testSlug = 'abcdefghj-';

		expect(match(testSlug)).toBe(true);
	});
});
