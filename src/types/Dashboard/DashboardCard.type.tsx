type Details = {
	type: string;
	value: string;
};

export interface DashboardCard {
	title: string;
	amount: string;
	details: Details[];
	bgColor?: string;
	color?: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
