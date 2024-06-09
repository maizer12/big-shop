import { Package, ShoppingCart, CreditCard, DollarSign, Calendar } from 'lucide-react';

export const dashboardCards = [
	{
		title: 'Today Orders',
		amount: '€108.12',
		details: {
			cash: '€108.12',
			card: '€0.00',
			credit: '€0.00',
		},
		icon: <Package className='text-3xl mr-2' />,
	},
	{
		title: 'Yesterday Orders',
		amount: '€0.00',
		details: {
			cash: '€0.00',
			card: '€0.00',
			credit: '€0.00',
		},
		icon: <Package className='text-3xl mr-2' />,
	},
	{
		title: 'This Month',
		amount: '€12686.58',
		details: {
			cash: '€12686.58',
			card: '€0.00',
			credit: '€0.00',
		},
		icon: <ShoppingCart className='text-3xl mr-2' />,
	},
	{
		title: 'Last Month',
		amount: '€151990.59',
		details: {
			cash: '€151990.59',
			card: '€0.00',
			credit: '€0.00',
		},
		icon: <CreditCard className='text-3xl mr-2' />,
	},
	{
		title: 'All-Time Sales',
		amount: '€468551.49',
		details: {
			cash: '€468551.49',
			card: '€0.00',
			credit: '€0.00',
		},
		icon: <DollarSign className='text-3xl mr-2' />,
	},
];
