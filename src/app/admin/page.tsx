import CardDashboard from '@/components/admin/Cards/CardDashboard';
import { dashboardCards } from '@/constants/dashboard.constants';
import React from 'react';

function page() {
	return (
		<>
			<h1 className='text-2xl font-bold'>Sales Overview:</h1>
			<ul className=' grid grid-cols-5 w-full gap-4 mt-9'>
				{dashboardCards.map(e => (
					<CardDashboard item={e} key={e.title} color={e.color || 'bg-blue-900'} />
				))}
			</ul>
		</>
	);
}

export default page;
