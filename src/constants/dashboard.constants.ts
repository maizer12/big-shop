import { Package, ShoppingCart, CreditCard, DollarSign, RefreshCw, Settings, Check } from 'lucide-react';

export const dashboardCards = [
	{
		title: 'Today Orders',
		amount: '€108.12',
		details: [
			{ type: 'cash', value: '€108.12' },
			{ type: 'card', value: '€0.00' },
			{ type: 'credit', value: '€0.00' },
		],
		icon: Package,
		color: 'bg-blue-400',
	},
	{
		title: 'Yesterday Orders',
		amount: '€0.00',
		details: [
			{ type: 'cash', value: '€0.00' },
			{ type: 'card', value: '€0.00' },
			{ type: 'credit', value: '€0.00' },
		],
		color: 'bg-blue-500',
		icon: Package,
	},
	{
		title: 'This Month',
		amount: '€12686.58',
		details: [
			{ type: 'cash', value: '€12686.58' },
			{ type: 'card', value: '€0.00' },
			{ type: 'credit', value: '€0.00' },
		],
		icon: ShoppingCart,
	},
	{
		title: 'Last Month',
		amount: '€151990.59',
		details: [
			{ type: 'cash', value: '€151990.59' },
			{ type: 'card', value: '€0.00' },
			{ type: 'credit', value: '€0.00' },
		],
		color: 'bg-blue-600',
		icon: CreditCard,
	},
	{
		title: 'All-Time Sales',
		amount: '€468551.49',
		details: [
			{ type: 'cash', value: '€468551.49' },
			{ type: 'card', value: '€0.00' },
			{ type: 'credit', value: '€0.00' },
		],
		color: 'bg-blue-700',
		icon: DollarSign,
	},
];

export const dashboardStatusCards = [
	{ title: 'Total Orders', value: '552', Icon: ShoppingCart },
	{ title: 'Orders Pending', value: '185', Icon: RefreshCw },
	{ title: 'Orders Processing', value: '45', Icon: Settings },
	{ title: 'Orders Delivered', value: '306', Icon: Check },
];
