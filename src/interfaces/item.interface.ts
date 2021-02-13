export interface itemInterfaceResult {
    author: object;
    item: object;
}

export interface itemResultInterface{
	author?: {
		name: string;
		lastname: string;
	};
    item?: {
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
	},
}


export interface ItemItemInterface{
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
