import { DashboardCard } from '@/types/DashboardCard.type';
import React from 'react';

interface IProps {
	item: DashboardCard;
}

export default function CardDashboard({ item }: IProps) {
	return <li className='bg-light-50 rounded-md'>{item.icon}</li>;
}
