import React from 'react';
import cn from 'classnames';

interface IProps {
	value: number;
	change: (a: number) => void;
	showItems?: number;
	sumItems: number;
}

export default function Pagination({ value, change, sumItems, showItems = 10 }: IProps) {
	const sumPages = Math.ceil(sumItems / showItems);
	const startItems = value * showItems + showItems;

	return (
		<div className='flex items-center justify-between'>
			<h5>
				Showing{' '}
				<span className='font-bold'>
					{value * showItems} - {startItems <= sumItems ? startItems : sumItems}
				</span>{' '}
				of <span className='font-bold'>{sumItems}</span>
			</h5>
			<ul className='flex gap-2'>
				{[...new Array(sumPages)].map((e, i) => (
					<li className={cn('border w-[32px] h-[32px] flex justify-center items-center cursor-pointer rounded-sm duration-500 hover:border-blue-400', { 'border-blue-400 ': value === i })} onClick={() => change(i)}>
						{i + 1}
					</li>
				))}
			</ul>
		</div>
	);
}
