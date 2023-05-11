/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'border-light': 'rgba(224, 249, 255, 0.1)',
				'border-dark': 'rgb(229, 231, 235)'
			}
		}
	},
	plugins: []
};
