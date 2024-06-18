import React from 'react';
import Navbar from './Navbar';
import { Sheet, SheetContent } from '@/common/ui/sheet';

export default function Sidebar() {
	return (
		<aside>
			<Sheet open={true}>
				<SheetContent side='left' className='border-light-400 border-r w-full max-w-[280px] pt-28 dark:bg-gray-800 ' isWrapper={false}>
					<Navbar />
				</SheetContent>
			</Sheet>
		</aside>
	);
}
