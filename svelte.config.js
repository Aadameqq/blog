import { vitePreprocess } from '@sveltejs/kit/vite';
import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), sveltePreprocess()],
	kit: {
		adapter: adapter({
			pages: 'dist',
			assets: 'dist',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		paths: {
			base: process.env.BASE_PATH
		},
		prerender: {
			entries: ['/', '/404a']
		}
	}
};

export default config;
