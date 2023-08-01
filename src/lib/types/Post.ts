export type Post = {
	title: string;
	keywords: string;
	category: {
		name: string;
		slug: string;
	};
	date: string;
	description: string;
	slug: string;
	content: string;
};
