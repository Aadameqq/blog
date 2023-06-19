import type { ParamMatcher } from '@sveltejs/kit';

const allowedCharsInSlug = 'abcdefghijklmnopqrstuvwxyz-';

export const match: ParamMatcher = (param) => {
	return param.split('').every((char) => allowedCharsInSlug.includes(char));
};
