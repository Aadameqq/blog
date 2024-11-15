export type TPost = {
	title: string;
	keywords: string;
	category: {
		name: string;
		slug: string;
	};
	date: string;
	description: string;
	slug: string;
	isGloballyPinned: boolean;
	isCategoryPinned: boolean;
	content: string;
};
