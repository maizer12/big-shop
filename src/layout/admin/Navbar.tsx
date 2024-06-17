import React from 'react';
import { navbarLinks } from './navbar.constants';
import NavbarItem from './NavbarItem';

export default function Navbar() {
	return (
		<nav className='flex flex-col gap-3 '>
			{navbarLinks.map((e, i) => (
				<NavbarItem item={e} active={i === 0} />
			))}
		</nav>
	);
}
