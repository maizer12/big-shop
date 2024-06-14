import { Bell, SunIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

function UserActionsPanel() {
	return (
		<div className='pr-8 flex items-center gap-7'>
			<SunIcon className=' text-yellow-400 w-7 h-7' />
			<div className=" text-zinc-600 after:absolute after:w-[22px] after:h-[22px] after:rounded-[50%] after:bg-red-600 after:top-[-8px] text-xs after:text-light-1000 after:flex after:justify-center after:items-center after:left-[-6px] relative after:content-['20']">
				<Bell className='w-7 h-7' />
			</div>

			<Image width={45} height={45} className='rounded-[50%]' alt='User' src='/user.webp' />
		</div>
	);
}

export default UserActionsPanel;
