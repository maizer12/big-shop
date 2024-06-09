import Image from 'next/image';
import React from 'react';

export default function Header() {
	return (
		<header className='header bg-green-500 min-h-[75px] fixed w-full z-10 bg-light-1000 border-light-400 border-b-2'>
			<Image width={34} height={34} src='/logo.png' alt='logo' />
		</header>
	);
}
