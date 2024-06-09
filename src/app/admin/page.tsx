import CardDashboard from '@/components/admin/Cards/CardDashboard';
import { dashboardCards } from '@/constants/dashboard.constants';
import React from 'react';

function page() {
	return (
		<>
			<h1 className='text-2xl font-bold text-blue-400'>Sales Overview:</h1>
			<ul className=' grid grid-cols-5 w-full gap-4 mt-16'>
				{dashboardCards.map(e => (
					<CardDashboard item={e} />
				))}
			</ul>
		</>
	);
}

export default page;
