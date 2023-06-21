export type GetPostsOverviewDto = {
	posts: {
		title: string;
		date: string;
		slug: string;
	}[];
	totalPages: number;
};
