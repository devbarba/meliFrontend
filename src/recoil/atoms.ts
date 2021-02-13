import { atom } from 'recoil';
import { IAtomSearchState } from '../interfaces/atom.interface';

export const searchState: IAtomSearchState = atom({
	key: 'searchState',
	default: {
		isLoading: false,
		searchText: '',
		result: {
			author: {
				name: '',
				lastname: '',
			},
			categories: [],
			items: []
		},
		item: {
			author: {
				name: '',
				lastname: '',
			},
			item: {},
		},
	},
});

export const errorState = atom({
	key: 'errorState',
	default: {
		message: ''
	},
});
