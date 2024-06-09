type Details = {
	cash: string;
	card: string;
	credit: string;
};

export interface DashboardCard {
	title: string;
	amount: string;
	details: Details;
	icon: React.ReactNode;
}
