import { vitePreprocess } from '@sveltejs/kit/vite';
import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const DEFAULT_BASE_PATH = '/';
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
			base: process.env.BASE_PATH || DEFAULT_BASE_PATH
		},
		prerender: {
			entries: ['/']
		}
	}
};

export default config;
