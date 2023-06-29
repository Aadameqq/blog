import md from 'markdown-it';
import type { HighlightResult } from 'highlight.js';
import highlighter from 'highlight.js';

const surroundWithHighlightHtmlTag = (hljsResult: HighlightResult) => {
	return `<pre><code class="hljs language-${hljsResult.language}">${hljsResult.value}</code></pre>`;
};

const fallbackLanguagesSubset = ['ts', 'js', 'tsx', 'jsx', 'cpp', 'go', 'html', 'css', 'scss'];

export const markdownItInstance = md({
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
});
