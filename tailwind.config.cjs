/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'royalblue': '#27336E',
				'pinkpurple': '#8478F8',
				'ctagreen': '#73FBD3'
			},
			fontFamily: {
				'notosans': ['"Noto Sans JP"', 'sans-serif;']
			},
		},
	},
	plugins: [],
}
