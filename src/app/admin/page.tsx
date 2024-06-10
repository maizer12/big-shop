import CardDashboard from '@/components/admin/Cards/DashboardCards/CardDashboard';
import CardDashboardStatus from '@/components/admin/Cards/DashboardCards/CardDashboardStatus';
import { dashboardCards, dashboardStatusCards } from '@/constants/dashboard.constants';
import React from 'react';
import styles from './Dashboard.module.scss';

function page() {
	return (
		<>
			<h1 className='text-2xl font-bold'>Sales Overview:</h1>
			<ul className=' grid grid-cols-5 w-full gap-4 mt-9'>
				{dashboardCards.map(e => (
					<CardDashboard item={e} key={e.title} color={e.color || 'bg-blue-900'} />
				))}
			</ul>
			<ul className={styles['status-cards']}>
				{dashboardStatusCards.map(e => (
					<CardDashboardStatus item={e} key={e.title} />
				))}
			</ul>
		</>
	);
}

export default page;
