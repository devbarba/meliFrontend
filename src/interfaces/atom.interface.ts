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
	isLoading: boolean;
	searchText: string;
	result: {};
	item: {};
}
