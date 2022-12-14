/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '1024px',
		},

		extend: {
			colors: {
				White: 'hsl(0, 0%, 100%)',
				Black: 'hsl(0, 0%, 0%)',
				'Dark-Gray': 'hsl(0, 0%, 55%)',
				'Very-Dark-Gray': 'hsl(0, 0%, 41%)',
			},

			backgroundImage: {
				hero: "url('/src/assets/mobile/image-hero.jpg')",
				'hero-desktop': "url('/src/assets/desktop/image-hero.jpg')",
			},

			fontFamily: {
				alata: ['"Alata"', 'sans-serif'],
				josefin: ['"Josefin Sans"', 'sans-serif'],
			},
		},
	},
};
