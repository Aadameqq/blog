import { categories } from '$lib/server/categories';

export const prerender = true;
export const load = () => {
	return { categories };
};
