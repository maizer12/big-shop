import React from 'react';
import { Bell, X } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from '../../common/ui/dropdown-menu';
import Image from 'next/image';
import cn from 'classnames';

const notifications = [
	{
		id: 1,
		message: 'Yellow Sweet Corn Stock out, please check!',
		type: 'Stock Out',
		typeColor: 'red', // цвет для типа уведомления
		date: 'Dec 12 2021 - 12:40PM',
		icon: 'corn', // иконка для уведомления (например, название иконки из библиотеки)
		action: 'checkStock',
	},
	{
		id: 2,
		message: 'Sam L. Placed $300 USD order!',
		type: 'New Order',
		typeColor: 'green',
		date: 'Nov 30 2021 - 2:40PM',
		icon: 'order',
		action: 'viewOrder',
	},
	{
		id: 3,
		message: 'Radicchio Stock out, please check!',
		type: 'Stock Out',
		typeColor: 'red',
		date: 'Dec 15 2021 - 12:40PM',
		icon: 'radicchio',
		action: 'checkStock',
	},
	{
		id: 4,
		message: 'Organic Baby Carrot Stock out, please check!',
		type: 'Stock Out',
		typeColor: 'red',
		date: 'Dec 20 2021 - 12:40PM',
		icon: 'carrot',
		action: 'checkStock',
	},
	{
		id: 5,
		message: 'Orange Stock out, please check!',
		type: 'Stock Out',
		typeColor: 'red',
		date: 'Dec 25 2021 - 12:40PM',
		icon: 'orange',
		action: 'checkStock',
	},
];

export default function UserNotification() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className='rounded-[50%] cursor-pointer'>
				<div className=" text-zinc-600 after:absolute after:w-[22px] after:h-[22px] after:rounded-[50%] after:bg-red-600 after:top-[-8px] text-xs after:text-light-1000 after:flex after:justify-center after:items-center after:left-[-6px] relative after:content-['20'] cursor-pointer dark:text-light-1000">
					<Bell className='w-7 h-7' />
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='right-[-20px] top-1 absolute pt-2 w-[350px] '>
				{notifications.map((e, i) => (
					<DropdownMenuLabel className='flex items-center gap-2 justify-between mb-2'>
						<Image width={45} height={45} src='/user.webp' alt='User' className='rounded-[50%]' />
						<div className=''>
							<h4 className='font-normal'>{e.message.slice(0, 28) + '...'}</h4>
							<div className='flex mt-2 gap-2 items-center'>
								<span className={cn('font-normal dark:text-black  px-2 rounded-[20px] bg-red-100', { '!bg-green-200': e.type === 'New Order' })}>{e.type}</span>
								<span className='font-normal text-xs'>{e.date}</span>
							</div>
						</div>
						<button className='cursor-pointer hover:text-red-600 duration-500 '>
							<X className='w-5 h-5' />
						</button>
					</DropdownMenuLabel>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
