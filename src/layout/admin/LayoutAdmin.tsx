import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

export default function LayoutAdmin({ children }: { children: ReactNode }) {
	return (
		<>
			<Header />
			<div className='flex h-screen'>
				<Sidebar />
				<main className='pt-28 px-8 w-full bg-light-50 overflow-auto pb-14'>{children}</main>
			</div>
		</>
	);
}
