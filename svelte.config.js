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
			base: process.env.NODE_ENV === 'production' ? process.env.BUILD_BASE_PATH : '/' // Todo: throw error if undefined
		}
	}
};

export default config;
