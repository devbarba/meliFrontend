export interface IAtomSearchStateInterface {
	key: string;
	default?: {
		isLoading: boolean;
		searchText: string;
		result: {};
		item: {};
	},
	__tag: any;
	__cTag: any;
}

export interface ISearchStateInterface {
	isLoading?: boolean;
	searchText?: string;
	result?: {
		author: {
			name: string;
			lastname: string;
		},
		categories: [],
		items: []
	};
	item?: {
		author: {
			name: string;
			lastname: string;
		},
		item: {},
	};
}

export interface ISearchItemInterface{
	id: string;
	title: string;
	price: {
		currency: string;
		amount: string;
	},
	picture: string;
	condition: string;
	free_shipping: boolean;
	state: string;
}
