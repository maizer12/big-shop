import React from 'react';
import Navbar from './Navbar';

export default function Sidebar() {
	return (
		<aside className='border-light-400 border-r-2 w-full max-w-[280px] pt-24'>
			<Navbar />
		</aside>
	);
}
