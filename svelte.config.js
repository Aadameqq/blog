import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import hljs from 'highlight.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		vitePreprocess(),
		sveltePreprocess(),
		mdsvex({
			extensions: ['.md'],
			highlight: {
				highlighter: function (code, language) {
					if (!language || !hljs.getLanguage(language))
						throw new Error('Unknown language in code block in post');
					// TODO: maybe return plaintext language and report
					return `<pre><code class="hljs language-${language}">${
						hljs.highlight(code, {
							language
						}).value
					}</code></pre>`;
				}
			}
		})
	],

	kit: {
		adapter: adapter({
			pages: 'dist',
			assets: 'dist',
			fallback: undefined,
			precompress: false,
			strict: true
		})
	}
};

export default config;
