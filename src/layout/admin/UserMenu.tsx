import React from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from '../../common/ui/dropdown-menu';
import Image from 'next/image';
import { LayoutGridIcon, LogOut, Settings } from 'lucide-react';

const userMenuItems = [
	{
		label: 'Dashboard',
		icon: LayoutGridIcon,
	},
	{
		label: 'Edit Profile',
		icon: Settings,
	},
	{
		label: 'Log Out',
		icon: LogOut,
	},
];

export default function UserMenu() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className='rounded-[50%] cursor-pointer'>
				<Image width={45} height={45} alt='User' className='rounded-[50%] cursor-pointer' src='/user.webp' />
			</DropdownMenuTrigger>
			<DropdownMenuContent className='right-[-20px] top-1 absolute pt-2'>
				{userMenuItems.map(e => (
					<DropdownMenuLabel className='flex items-center gap-2 mb-2 cursor-pointer duration-500 hover:text-blue-400'>
						<e.icon />
						{e.label}
					</DropdownMenuLabel>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
