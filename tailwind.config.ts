import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/layout/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		colors: {
			light: {
				50: '#F8F9FB', // Фон боковой панели
				200: '#EDEEF2', // Светло-серый (фоновые элементы)
				300: '#ECEDF0', // Светло-серый (другие фоновые элементы)
				400: '#E5E7EB', // Светло-серый для разделительных линий
				1000: '#FFFFFF', // Цвет фона (белый)
			},
			violet: {
				400: '#A199BA',
			},
			blue: {
				400: '#3C779F', // Светло-голубой для активных элементов
				900: '#00263C', // Голубой для графиков и выделений
			},
			red: {
				900: '#EF4444', // Красный для уведомлений
			},
			dark: {
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
};
export default config;
