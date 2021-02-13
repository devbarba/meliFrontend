export interface IItemResult {
    author?: {
		name: string;
		lastname: string;
	};
    item?: {
		id: string;
		title: string;
		category: {
			id: string;
		},
		price: {
			currency: string;
			amount: string;
		},
		picture: string;
		condition: string;
		free_shipping: boolean;
		sold_quantity: number;
		description: string;
	},
}

export interface IItem{
	id: string;
	title: string;
	price: {
		currency: string;
		amount: string;
	},
	picture: string;
	condition: string;
	free_shipping: boolean;
	sold_quantity: number;
	description: string;
}
