import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/layout/**/*.{js,ts,jsx,tsx,mdx}', './src/constants/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				light: {
					50: '#F9FAF5',
					200: '#EDEEF2',
					300: '#ECEDF0',
					400: '#EDEDED',
					1000: '#FFFFFF',
				},
				violet: {
					400: '#747475',
				},
				blue: {
					400: '#6E63E6',
				},
				red: {
					900: '#EF4444',
				},
				dark: {
					400: '#797979',
					900: '#000000',
				},
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
	safelist: [],
};
export default config;
