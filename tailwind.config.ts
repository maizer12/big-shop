import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/layout/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		colors: {
			light: {
				50: '#F9FAF5', // Фон боковой панели
				200: '#EDEEF2', // Светло-серый (фоновые элементы)
				300: '#ECEDF0', // Светло-серый (другие фоновые элементы)
				400: '#EDEDED', // Светло-серый для разделительных линий
				1000: '#FFFFFF', // Цвет фона (белый)
			},
			violet: {
				400: '#747475',
			},
			blue: {
				400: '#6E63E6',
				500: '#DD81D5',
				600: '#E2A8A7',
				700: '#B0DE0A',
				900: '#086FF3', // Голубой для графиков и выделений
			},
			red: {
				900: '#EF4444', // Красный для уведомлений
			},
			dark: {
				400: '#797979',
				900: '#000000', // Цвет текста (черный)
			},
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
	safelist: ['bg-blue-400', 'bg-blue-900', 'bg-blue-700', 'bg-blue-600', 'bg-blue-500', 'bg-dark-900', 'bg-color-blue-400', 'bg-color-blue-900', 'bg-color-dark-900'],
};
export default config;
