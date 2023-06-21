import md from 'markdown-it';
import type { HighlightResult } from 'highlight.js';
import hljs from 'highlight.js';

const surroundWithHighlightHtmlTag = (hljsResult: HighlightResult) => {
	return `<pre><code class="hljs language-${hljsResult.language}">${hljsResult.value}</code></pre>`;
};

const languageSubset = ['ts', 'js', 'tsx', 'jsx', 'cpp', 'go', 'html', 'css', 'scss'];

export const markdownItInstance = md({
	highlight: (code, language) => {
		let codeAsHtml;
		if (!language || !hljs.getLanguage(language)) {
			console.error(new Error('Unknown language in code block in post'));
			codeAsHtml = hljs.highlightAuto(code, languageSubset);
		} else {
			codeAsHtml = hljs.highlight(code, { language });
		}

		return surroundWithHighlightHtmlTag(codeAsHtml);
	}
});
