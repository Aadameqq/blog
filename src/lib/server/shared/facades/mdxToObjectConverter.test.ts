import { describe, expect, test } from 'vitest';
import { convertMdxToObject } from '$lib/server/shared/facades/mdxToObjectConverter';

describe('convertMdxToObject', () => {
	test('When mdx parameter is provided and contains a valid mdx Should return object containing metadata and content from mdx file', () => {
		const testMdx = `---
title: Test
keywords: test, test
category: test2
date: 12.01.2022
description: Ddsklfklsdfksdfsjdfkldsfjsjkdklkdskjf
---
# Header

- test
`;

		const expected = {
			metadata: {
				title: 'Test',
				keywords: 'test, test',
				category: 'test2',
				date: '12.01.2022',
				description: 'Ddsklfklsdfksdfsjdfkldsfjsjkdklkdskjf'
			},
			content: `# Header

- test
`
		};

		const result = convertMdxToObject(testMdx);

		expect(result).toEqual(expected);
	});
});
