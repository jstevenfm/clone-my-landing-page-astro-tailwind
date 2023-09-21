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
			keyframes: {
        typing: {
          'from': { width: '0' }
        },
        blink: {
          '50%': { 'border-color': 'transparent' },
        },
        down: {
          '0%, 100%': {
						transform: 'translateY(-60%)',
						'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': {
						transform: 'translateY(60%)',
						'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1) '},
        }
      }
		},
	},
	plugins: [],
}
