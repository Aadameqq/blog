import { describe, expect, test } from 'vitest';
import { getParamValueFromRouteIfExists } from '$lib/server/paramsUtils';

describe('getParamValueFromRouteIfExists', () => {
	test.each([
		['test/abcdef/testparam/testcontent/abcdef/def', 'testparam', 'testcontent'],
		['', 'testparam', undefined],
		['abcdef/def', 'testparam', undefined],
		['test/abcdef/testparam/testcontent/abcdef/', 'testparam', 'testcontent'],
		['/testparam/testcontent/', 'testparam', 'testcontent']
	])(
		"When route and paramName are provided Should return param's value if it exists and undefined otherwise",
		(testRoute: string, testParam: string, expectedParamValue?: string) => {
			const response = getParamValueFromRouteIfExists(testRoute, testParam);
			expect(response).toBe(expectedParamValue);
		}
	);
});
