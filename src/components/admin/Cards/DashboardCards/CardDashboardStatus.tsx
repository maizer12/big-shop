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
		<li className={styles['card-status']}>
			<div className={cn(styles.icon, bgColor, color)}>
				<item.Icon />
			</div>
			<div>
				<p className={styles.name}>{item.title}</p>
				<h4 className={styles.value}>{item.value}</h4>
			</div>
		</li>
	);
}
