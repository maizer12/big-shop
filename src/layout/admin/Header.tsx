import Link from 'next/link';
import React from 'react';

export default function Header() {
	return (
		<header className='py-2 fixed w-full z-50 bg-light-1000 border-light-400 border-b min-h-[72px] flex items-center justify-between '>
			<div className='max-w-[280px] flex items-center justify-between w-full pl-4'>
				<Link href='/' className=' text-2xl font-bold text-dark-900 '>
					METU
				</Link>
				<button className='flex flex-col justify-center items-center mr-2'>
					<div className='w-6 h-[3px] rounded-[4px] bg-dark-900 mb-1'></div>
					<div className='w-6 h-[3px] rounded-[4px] bg-dark-900 mb-1'></div>
					<div className='w-6 h-[3px] rounded-[4px] bg-dark-900 '></div>
				</button>
			</div>
		</header>
	);
}
