import { DashboardCard } from '@/types/DashboardCard.type';
import React from 'react';
import cn from 'classnames';

interface IProps {
	item: DashboardCard;
	color: string;
}

export default function CardDashboard({ item, color }: IProps) {
	const test = cn('w-14 h-14 flex justify-center rounded-[8px] items-center', color);
	return (
		<li className='bg-light-1000 rounded-lg flex flex-col py-6 px-6'>
			<div className={test}>
				<item.icon className='text-blue-800 w-12 h-12 relative z-10 block text-light-1000' strokeWidth={1} />
			</div>
			<h5 className='mt-2 font-medium'>{item.title}</h5>
			<h4 className='font-bold mt-3 text-2xl'>{item.amount}</h4>
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
