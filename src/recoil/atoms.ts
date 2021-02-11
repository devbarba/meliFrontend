import { atom } from 'recoil';
import { IAtomSearchStateInterface } from '../interfaces/atom.interface';

export const searchState: IAtomSearchStateInterface = atom({
	key: 'searchState',
	default: {
		isLoading: false,
		searchText: '',
		result: {},
		item: {},
	},
});
