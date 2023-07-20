type UrlParams =
	| {
			categorySlug?: string;
			page?: string;
	  }
	| undefined;

export const urlGenerator = (initialParams: UrlParams) => (params: UrlParams) => {
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
	return url;
};
