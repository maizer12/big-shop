type Details = {
	type: string;
	value: string;
};

export interface DashboardCard {
	title: string;
	amount: string;
	details: Details[];
	color?: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
