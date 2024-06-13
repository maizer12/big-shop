import CardDashboard from '@/components/admin/Cards/DashboardCards/CardDashboard';
import CardDashboardStatus from '@/components/admin/Cards/DashboardCards/CardDashboardStatus';
import { dashboardCards, dashboardStatusCards } from '@/constants/dashboard.constants';
import React from 'react';
import styles from './Dashboard.module.scss';
import WeeklySalesChart from '@/components/admin/Dashboard/WeeklySalesChart';
import BestSellingProductsChart from '@/components/admin/Dashboard/BestSellingProductsChart';

function page() {
	return (
		<>
			<h1 className='text-2xl font-bold'>Sales Overview:</h1>
			<ul className=' grid grid-cols-5 w-full gap-4 mt-9'>
				{dashboardCards.map(e => (
					<CardDashboard item={e} key={e.title} />
				))}
			</ul>
			<ul className={styles['status-cards']}>
				{dashboardStatusCards.map(e => (
					<CardDashboardStatus item={e} key={e.title} />
				))}
			</ul>
			<section className='mt-9 grid  grid-cols-2 gap-10 pb-14'>
				<WeeklySalesChart />
				<BestSellingProductsChart />
			</section>
		</>
	);
}

export default page;
