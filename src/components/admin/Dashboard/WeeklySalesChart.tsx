'use client';
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import cn from 'classnames';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import type { TransitionStatus } from 'react-transition-group/Transition';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const lineData = {
	labels: ['2023-11-10', '2023-11-13', '2023-11-16'],
	datasets: [
		{
			label: 'Sales',
			data: [200, 900, 100],
			borderColor: '#6E63E6',
			backgroundColor: '#6E63E6',
		},
	],
};
const lineOrders = {
	labels: ['2023-11-10', '2023-11-13', '2023-11-16'],
	datasets: [
		{
			label: 'Orders',
			data: [200, 900, 100],
			borderColor: '#6E63E6',
			backgroundColor: '#6E63E6',
		},
	],
};

const tabs = [
	{ label: 'Sales', value: 'sales' },
	{ label: 'Orders', value: 'orders' },
];

const tabsContent = [
	{
		value: 'sales',
		data: lineData,
	},
	{
		value: 'orders',
		data: lineOrders,
	},
];

const transitionStyles: { [key in TransitionStatus]?: React.CSSProperties } = {
	entering: { opacity: 0 },
	entered: { opacity: 1, transition: 'opacity 600ms ease-in' },
	exiting: { opacity: 1 },
	exited: { opacity: 0, transition: 'opacity 600ms ease-in' },
};

export default function WeeklySalesChart() {
	const [tab, setTab] = useState(tabs[0].value);

	const showContent = tabsContent.find(e => e.value === tab);

	return (
		<div className='bg-light-1000 rounded-lg p-8'>
			<h2 className='font-bold mb-11  text-lg'>Weekly Sales</h2>
			<ul className='flex mb-3'>
				{tabs.map(e => (
					<li key={e.value} className={cn('p-2 !pb-1 border-b-2 cursor-pointer hover:text-blue-400 duration-500', { 'fond-bold text-blue-400 border-b-blue-400': tab === e.value })} onClick={() => setTab(e.value)}>
						{e.label}
					</li>
				))}
			</ul>
			<div style={{ height: '320px', overflow: 'hidden' }}>
				<TransitionGroup>
					{showContent && (
						<CSSTransition key={tab} timeout={100} classNames=''>
							{(state: TransitionStatus) => (
								<div className='h-[320px] flex justify-center items-center' style={{ ...transitionStyles[state], width: '100%' }}>
									<Line data={showContent.data} />
								</div>
							)}
						</CSSTransition>
					)}
				</TransitionGroup>
			</div>
		</div>
	);
}
