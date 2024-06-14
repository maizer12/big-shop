'use client';
import Pagination from '@/common/admin/Pagination';
import React, { useState } from 'react';

export default function LastOrders() {
	const [open, setOpen] = useState(0);

	return (
		<section className=' bg-light-1000 rounded-[20px] p-7'>
			<h3 className='font-bold text-lg mb-12'>Last Orders:</h3>
			<div className='relative overflow-x-auto shadow-md sm:rounded-lg mb-14'>
				<table className='w-full text-sm text-left rtl:text-right  '>
					<thead className='text-xs  uppercase bg-gray-50 text-dark-900'>
						<tr>
							<th scope='col' className='px-6 py-3'>
								Product name
							</th>
							<th scope='col' className='px-6 py-3'>
								Color
							</th>
							<th scope='col' className='px-6 py-3'>
								Category
							</th>
							<th scope='col' className='px-6 py-3'>
								Price
							</th>
							<th scope='col' className='px-6 py-3'>
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className='odd:bg-white  even:bg-gray-50 border-b '>
							<th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '>
								Apple MacBook Pro 17"
							</th>
							<td className='px-6 py-4'>Silver</td>
							<td className='px-6 py-4'>Laptop</td>
							<td className='px-6 py-4'>$2999</td>
							<td className='px-6 py-4'>
								<a href='#' className='font-medium text-blue-400 hover:underline'>
									Edit
								</a>
							</td>
						</tr>
						<tr className='odd:bg-white  even:bg-gray-50 border-b '>
							<th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '>
								Apple MacBook Pro 17"
							</th>
							<td className='px-6 py-4'>Silver</td>
							<td className='px-6 py-4'>Laptop</td>
							<td className='px-6 py-4'>$2999</td>
							<td className='px-6 py-4'>
								<a href='#' className='font-medium text-blue-400 hover:underline'>
									Edit
								</a>
							</td>
						</tr>
						<tr className='odd:bg-white  even:bg-gray-50 border-b '>
							<th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '>
								Apple MacBook Pro 17"
							</th>
							<td className='px-6 py-4'>Silver</td>
							<td className='px-6 py-4'>Laptop</td>
							<td className='px-6 py-4'>$2999</td>
							<td className='px-6 py-4'>
								<a href='#' className='font-medium text-blue-400 hover:underline'>
									Edit
								</a>
							</td>
						</tr>
						<tr className='odd:bg-white  even:bg-gray-50 border-b '>
							<th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '>
								Apple MacBook Pro 17"
							</th>
							<td className='px-6 py-4'>Silver</td>
							<td className='px-6 py-4'>Laptop</td>
							<td className='px-6 py-4'>$2999</td>
							<td className='px-6 py-4'>
								<a href='#' className='font-medium text-blue-400 hover:underline'>
									Edit
								</a>
							</td>
						</tr>
						<tr className='odd:bg-white  even:bg-gray-50 border-b '>
							<th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '>
								Apple MacBook Pro 17"
							</th>
							<td className='px-6 py-4'>Silver</td>
							<td className='px-6 py-4'>Laptop</td>
							<td className='px-6 py-4'>$2999</td>
							<td className='px-6 py-4'>
								<a href='#' className='font-medium text-blue-400 hover:underline'>
									Edit
								</a>
							</td>
						</tr>
						<tr className='odd:bg-white  even:bg-gray-50 border-b '>
							<th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '>
								Apple MacBook Pro 17"
							</th>
							<td className='px-6 py-4'>Silver</td>
							<td className='px-6 py-4'>Laptop</td>
							<td className='px-6 py-4'>$2999</td>
							<td className='px-6 py-4'>
								<a href='#' className='font-medium text-blue-400 hover:underline'>
									Edit
								</a>
							</td>
						</tr>
						<tr className='odd:bg-white  even:bg-gray-50 border-b '>
							<th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '>
								Apple MacBook Pro 17"
							</th>
							<td className='px-6 py-4'>Silver</td>
							<td className='px-6 py-4'>Laptop</td>
							<td className='px-6 py-4'>$2999</td>
							<td className='px-6 py-4'>
								<a href='#' className='font-medium text-blue-400 hover:underline'>
									Edit
								</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<Pagination value={open} change={setOpen} sumItems={44} />
		</section>
	);
}
