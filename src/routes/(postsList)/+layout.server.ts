import { categories } from '$lib/server/categories/categories';

export const prerender = true;
export const load = () => {
	return { categories };
};
