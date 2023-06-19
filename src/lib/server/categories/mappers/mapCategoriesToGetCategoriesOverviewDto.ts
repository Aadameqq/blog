import type { Category } from '$lib/server/categories/types/Category';
import type { GetCategoriesOverviewDto } from '$lib/server/categories/types/dtos/GetCategoriesOverviewDto';

export const mapCategoriesToGetCategoriesOverviewDto = (
	categories: Category[]
): GetCategoriesOverviewDto => {
	return categories.map(({ name, slug }) => ({ name, slug }));
};
