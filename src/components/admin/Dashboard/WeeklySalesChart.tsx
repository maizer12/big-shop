'use client';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const lineData = {
	labels: ['2023-11-10', '2023-11-13', '2023-11-16'],
	datasets: [
		{
			label: 'Sales',
			data: [200, 900, 100],
			borderColor: 'green',
			backgroundColor: 'rgba(0, 255, 0, 0.3)',
		},
	],
};

export default function WeeklySalesChart() {
	return (
		<div className='bg-light-1000 rounded-lg p-8'>
			<h2 className='font-bold mb-10'>Weekly Sales</h2>
			<div className='h-[320px]  flex justify-center items-center'>
				<Line data={lineData} />
			</div>
		</div>
	);
}
