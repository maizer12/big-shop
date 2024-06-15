import React from 'react';
import Link from 'next/link';
import { navbarLinks } from './navbar.constants';
import cn from 'classnames';

export default function Navbar() {
	const linkClass = (active: boolean) => cn('flex gap-4 text-lg pl-4 text-violet-400 py-3.5 items-center dark:text-white dark:opacity-[0.7]', { '!text-blue-400 dark:!opacity-[1] font-bold relative after:absolute after:w-[5px] after:h-full after:bg-blue-400 after:left-0 after:rounded-e-[20px]': active });

	return (
		<nav className='flex flex-col gap-3 '>
			{navbarLinks.map((e, i) => (
				<Link key={e.text} href={e.href} className={linkClass(i === 0)}>
					<e.icon />
					{e.text}
				</Link>
			))}
		</nav>
	);
}
