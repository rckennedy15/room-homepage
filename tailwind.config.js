module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		colors: {
			gray: 'hsl(0, 0%, 63%)',
			black: 'hsl(0, 0%, 0%)',
			white: 'hsl(0, 0%, 100%)',
			darkGray: 'hsl(0, 0%, 27%)',
		},
		fontFamily: {
			main: ['Spartan', 'sans-serif'],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
