export const routes = {
	post: (slug: string) => `/posts/${slug}`,
	blog: ({ page, categorySlug }: { page?: string | number; categorySlug?: string }) => {
		let url = '';
		if (categorySlug) {
			url += `/categories/${categorySlug}`;
		}
		if (page) {
			url += `/pages/${page}`;
		}
		return url;
	}
};
