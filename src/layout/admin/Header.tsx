'use client';
import Link from 'next/link';
import React from 'react';
import UserActionsPanel from './UserActionsPanel';

export default function Header() {
	return (
		<header className='py-2 fixed w-full z-50 bg-light-1000 border-light-400 border-b min-h-[72px] flex items-center justify-between dark:bg-gray-800 dark:border-gray-900'>
			<div className='max-w-[280px] flex items-center justify-between w-full pl-4'>
				<Link href='/' className=' text-2xl font-bold text-dark-900 dark:text-light-1000'>
					METU
				</Link>
				<button className='flex flex-col justify-center items-center mr-2'>
					<div className='w-6 h-[2px] rounded-[12px] bg-zinc-600 mb-[6px] dark:bg-light-1000'></div>
					<div className='w-6 h-[2px] rounded-[12px] bg-zinc-600 mb-[6px] dark:bg-light-1000'></div>
					<div className='w-6 h-[2px] rounded-[12px] bg-zinc-600 dark:bg-light-1000'></div>
				</button>
			</div>
			<UserActionsPanel />
		</header>
	);
}
