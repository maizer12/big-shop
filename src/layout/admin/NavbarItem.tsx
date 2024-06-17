import React from 'react';
import Link from 'next/link';
import { LucideProps } from 'lucide-react';
import cn from 'classnames';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../common/ui/accordion';

interface ItemType {
	text: string;
	href: string;
	menu?: {
		href: string;
		label: string;
	}[];
	icon: React.ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>>;
}

export default function NavbarItem({ item, active }: { item: ItemType; active: boolean }) {
	const { href, text, icon: Icon, menu } = item;

	if (menu) {
		return (
			<Accordion type='single' collapsible>
				<AccordionItem value={item.text}>
					<AccordionTrigger>
						<button className='flex gap-4 text-lg pl-4 text-violet-400 py-3.5 items-center dark:text-white dark:opacity-[0.7] w-fit'>
							<Icon />
							{text}
						</button>
					</AccordionTrigger>
					<AccordionContent className='flex flex-col p-6 pl-8 py-4 bg-light-50 dark:bg-slate-600 gap-2'>
						{menu.map((e, i) => (
							<Link href={e.href} key={i} className='text-base '>
								{e.label}
							</Link>
						))}
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		);
	}

	return (
		<Link href={href} className={cn('flex gap-4 text-lg pl-4 text-violet-400 py-3.5 items-center dark:text-white dark:opacity-[0.7]', { '!text-blue-400 dark:!opacity-[1] font-bold relative after:absolute after:w-[5px] after:h-full after:bg-blue-400 after:left-0 after:rounded-e-[20px]': active })}>
			<Icon />
			{text}
		</Link>
	);
}
