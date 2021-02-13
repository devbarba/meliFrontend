export interface IAtomSearchState {
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

export interface ISearchState {
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

export interface ISearchItem{
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
