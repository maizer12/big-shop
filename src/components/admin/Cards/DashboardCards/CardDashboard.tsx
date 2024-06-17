import { DashboardCard } from '@/types/Dashboard/DashboardCard.type';
import React from 'react';
import cn from 'classnames';

interface IProps {
	item: DashboardCard;
}

export default function CardDashboard({ item }: IProps) {
	const { color, bgColor, amount, title } = item;

	return (
		<li className='bg-light-1000 rounded-lg flex flex-col py-6 px-6 dark:bg-gray-800'>
			<div className={cn('w-14 h-14 flex justify-center rounded-[8px] items-center p-2 dark:bg-white ', bgColor, color)}>
				<item.icon className='w-12 h-12 relative z-10 block' strokeWidth={1} />
			</div>
			<h5 className='mt-2 font-medium text-violet-400'>{title}</h5>
			<h4 className='font-bold mt-3 text-2xl dark:text-light-400'>{amount}</h4>
			<ul className='mt-4 w-full'>
				{item.details.map(e => (
					<li key={e.type} className='w-full flex justify-between'>
						<span className=' first-letter:uppercase'>{e.type}:</span> {e.value}
					</li>
				))}
			</ul>
		</li>
	);
}
