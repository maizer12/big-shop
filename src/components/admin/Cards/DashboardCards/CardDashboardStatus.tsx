import React from 'react';
import styles from './DashboardCards.module.scss';
import { DashboardCardStatus } from '@/types/Dashboard/DashboardCardStatus.type';
import cn from 'classnames';

interface IProps {
	item: DashboardCardStatus;
}

export default function CardDashboardStatus({ item }: IProps) {
	const { bgColor, color } = item;

	return (
		<li className={styles['card-status'] + ' dark:bg-gray-800'}>
			<div className={cn(styles.icon, bgColor, color) + ' dark:bg-white'}>
				<item.Icon />
			</div>
			<div>
				<p className='text-base text-dark-400 dark:text-slate-300'>{item.title}</p>
				<h4 className='text-2xl font-bold text-dark-900 dark:text-white'>{item.value}</h4>
			</div>
		</li>
	);
}
