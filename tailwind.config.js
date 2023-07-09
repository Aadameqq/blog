/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			desktop: '768px'
		},
		fontFamily: {
			numbers: ['Noto Sans', 'sans-serif']
		}
	},
	plugins: []
};
