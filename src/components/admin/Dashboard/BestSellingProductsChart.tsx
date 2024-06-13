'use client';
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const pieData = {
	labels: ['Green Leaf Lettuce', 'Rainbow Chard', 'Clementine', 'Parsley'],
	datasets: [
		{
			data: [30, 20, 25, 25],
			backgroundColor: ['#4caf50', '#2196f3', '#ff9800', '#8bc34a'],
		},
	],
};

export default function BestSellingProductsChart() {
	return (
		<div className='bg-light-1000 rounded-lg p-8'>
			<h2 className='font-bold mb-10'>Best Selling Products</h2>
			<div className='max-h-[320px]  flex justify-center items-center'>
				<Pie data={pieData} />
			</div>
		</div>
	);
}
