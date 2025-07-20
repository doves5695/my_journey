/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			maxWidth: {
				desktop: '1240px',
				'desktop-1/2': '620px',
			},
			colors: {
				footer_menu: '#003d38',
			},
		},
	},
	plugins: [],
};
