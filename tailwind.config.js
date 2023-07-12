/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			laptop: '768px',
			desktop: '1500px'
		},
		fontFamily: {
			numbers: ['Noto Sans', 'sans-serif'],
			code: ['Fira Code', 'monospace']
		},
		extend: {
			colors: {
				bg: '#171717',
				scrollbar: '#181818',
				code: '#282b2e'
			}
		}
	},
	plugins: []
};
