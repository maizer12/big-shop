import { Box, Users, ShoppingCart, Package, Clipboard, User, ShoppingBag, LayoutGrid, Settings } from 'lucide-react';

const catalogMenu = [
	{ href: '#', label: 'Products' },
	{ href: '#', label: 'Products' },
	{ href: '#', label: 'Products' },
	{ href: '#', label: 'Products' },
	{ href: '#', label: 'Products' },
];

export const navbarLinks = [
	{ href: '#', text: 'Dashboard', icon: LayoutGrid },
	{ href: '#', text: 'Catalogue', icon: Box, menu: catalogMenu },
	{ href: '#', text: 'Customers', icon: Users },
	{ href: '#', text: 'Markets', icon: ShoppingCart },
	{ href: '#', text: 'Farmers', icon: Package },
	{ href: '#', text: 'Orders', icon: Clipboard },
	{ href: '#', text: 'Staff', icon: User },
	{ href: '#', text: 'Setting', icon: Settings },
];
