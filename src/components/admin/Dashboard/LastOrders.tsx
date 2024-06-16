'use client';
import Pagination from '../../../common/admin/Pagination';
import React, { useState } from 'react';
const productData = [
	{
		productName: 'Apple MacBook Pro 17"',
		color: 'Silver',
		category: 'Laptop',
		price: '$2999',
		action: 'Edit',
	},
	{
		productName: 'Dell XPS 13',
		color: 'Black',
		category: 'Laptop',
		price: '$1999',
		action: 'Edit',
	},
	{
		productName: 'HP Spectre x360',
		color: 'Silver',
		category: 'Laptop',
		price: '$1499',
		action: 'Edit',
	},
	{
		productName: 'Lenovo ThinkPad X1',
		color: 'Black',
		category: 'Laptop',
		price: '$1899',
		action: 'Edit',
	},
	{
		productName: 'Asus ZenBook 14',
		color: 'Blue',
		category: 'Laptop',
		price: '$1399',
		action: 'Edit',
	},
	{
		productName: 'Microsoft Surface Laptop 4',
		color: 'Platinum',
		category: 'Laptop',
		price: '$1599',
		action: 'Edit',
	},
	{
		productName: 'Apple MacBook Air',
		color: 'Gold',
		category: 'Laptop',
		price: '$999',
		action: 'Edit',
	},
];

export default function LastOrders() {
	const [open, setOpen] = useState(0);

	return (
		<section className=' bg-light-1000 rounded-[20px] p-7 dark:bg-gray-800'>
			<h3 className='font-bold text-lg mb-12'>Last Orders:</h3>
			<div className='relative overflow-x-auto shadow-md mb-14'>
				<table className='w-full text-sm text-left rtl:text-right  '>
					<thead className='text-xs  uppercase bg-gray-50 dark:bg-gray-800 text-dark-900 dark:text-white'>
						<tr>
							<th scope='col' className='px-6 py-3 border-r border-t border-b border-l  dark:border-white'>
								Product name
							</th>
							<th scope='col' className='px-6 py-3 border-r border-t border-b dark:border-white'>
								Color
							</th>
							<th scope='col' className='px-6 py-3 border-r border-t border-b dark:border-white'>
								Category
							</th>
							<th scope='col' className='px-6 py-3 border-r border-t border-b dark:border-white'>
								Price
							</th>
							<th scope='col' className='px-6 py-3 border-r border-t border-b dark:border-white'>
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						{productData.map((e, i) => (
							<tr className=' dark:bg-gray-800 dark:border-white border-l  bg-gray-50 border-b ' key={i}>
								<td className='px-6 py-4 border-r dark:border-white'>{e.productName}</td>
								<td className='px-6 py-4 border-r dark:border-white'>{e.color}</td>
								<td className='px-6 py-4 border-r dark:border-white'>{e.category}</td>
								<td className='px-6 py-4 border-r dark:border-white'>{e.price}</td>
								<td className='px-6 py-4 border-r dark:border-white'>
									<a href='#' className='font-medium text-blue-400 hover:underline'>
										Edit
									</a>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<Pagination value={open} change={setOpen} sumItems={44} />
		</section>
	);
}
