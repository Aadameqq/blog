/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			laptop: '768px',
			desktop: '1280px'
		},
		fontFamily: {
			numbers: ['Noto Sans', 'sans-serif'],
			code: ['JetBrains Mono', 'monospace']
		},
		extend: {
			colors: {
				bg: '#171717',
				scrollbar: '#181818',
				code: '#1d1d1e'
			},
			aria: {
				current: 'current="page"'
			}
		}
	},
	plugins: []
};
