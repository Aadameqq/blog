export const getPostSlugFromPath = (path: string) => {
	return (path.split('/').at(-1) as string).split('.')[0];
};
