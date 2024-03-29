import Md from 'markdown-it';
import type { HighlightResult } from 'highlight.js';
import highlighter from 'highlight.js';
import { base } from '$app/paths';

const surroundWithHighlightHtmlTag = (hljsResult: HighlightResult) => {
	return `<pre><code class="hljs language-${hljsResult.language}">${hljsResult.value}</code></pre>`;
};

const fallbackLanguagesSubset = ['ts', 'js', 'tsx', 'jsx', 'cpp', 'go', 'html', 'css', 'scss'];

const imagesBasePathPlugin = (basePath: string) => (md: Md) => {
	const defaultImageRenderer = md.renderer.rules.image;
	const defaultHtmlRenderer = md.renderer.rules.html_block;

	md.renderer.rules.image = (tokens, idx, options, env, self) => {
		const token = tokens[idx];

		const srcIndex = token.attrIndex('src');

		if (token.attrs && srcIndex !== undefined) {
			const src = token.attrs[srcIndex][1];
			token.attrs[srcIndex][1] = basePath + src;
		}

		return defaultImageRenderer ? defaultImageRenderer(tokens, idx, options, env, self) : '';
	};

	md.renderer.rules.html_block = (tokens, idx, options, env, self) => {
		const { content } = tokens[idx];

		tokens[idx].content = content.replaceAll('src="', `src="${base}`);

		return defaultHtmlRenderer ? defaultHtmlRenderer(tokens, idx, options, env, self) : '';
	};
};

const mdItInstance = Md({
	html: true,
	highlight: (code, language) => {
		let codeAsHtml;
		if (!language || !highlighter.getLanguage(language)) {
			console.error(new Error('Unknown language in code block in post'));
			codeAsHtml = highlighter.highlightAuto(code, fallbackLanguagesSubset);
		} else {
			codeAsHtml = highlighter.highlight(code, { language });
		}

		return surroundWithHighlightHtmlTag(codeAsHtml);
	}
}).use(imagesBasePathPlugin(base));

export const convertMdToHtml = (md: string) => {
	return mdItInstance.render(md);
};
