type UrlParams =
	| {
			categorySlug?: string;
			page?: string;
	  }
	| undefined;

const DEFAULT_URL = '/';

// TODO: move base path
export const urlGenerator = (basePath: string, initialParams: UrlParams) => (params: UrlParams) => {
	const { categorySlug, page } = {
		...initialParams,
		...params
	};

	let url = '';
	if (categorySlug) {
		url += `/categories/${categorySlug}`;
	}
	if (page) {
		url += `/pages/${page}`;
	}
	return url || DEFAULT_URL;
};
