import type { TPost } from '$lib/types/TPost';

export const parseDate = (str: string): number => {
	const [day, month, year] = str.split('.');
	return Date.UTC(Number(year), Number(month)-1, Number(day));
}