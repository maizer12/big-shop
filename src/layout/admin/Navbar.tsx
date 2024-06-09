import React from 'react';
import Link from 'next/link';
import { navbarLinks } from './navbar.constants';
import cn from 'classnames';

export default function Navbar() {
	const linkClass = (active: boolean) => cn('flex gap-4 text-lg pl-8 text-violet-400 py-3.5 items-center rounded-[12px]', { '!text-blue-900 bg-blue-400': active });

	return (
		<nav className='flex flex-col gap-3 px-2'>
			{navbarLinks.map((e, i) => (
				<Link key={e.text} href={e.href} className={linkClass(i === 0)}>
					<e.icon />
					{e.text}
				</Link>
			))}
		</nav>
	);
}
