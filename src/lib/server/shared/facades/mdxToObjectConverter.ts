import grayMatter from 'gray-matter';

export const convertMdxToObject = <MetadataType extends object>(mdx: string) => {
	const { data, content } = grayMatter(mdx);

	return { metadata: data as MetadataType, content };
};
