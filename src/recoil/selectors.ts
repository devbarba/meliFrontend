import { selector } from 'recoil';
import { errorState, searchState } from './atoms';
import { ISearchState } from '../interfaces/atom.interface';

export const getSearchText = selector({
	key: 'getSearchText',
	get: ({ get }) => {
		const search: ISearchState = get(searchState);
		return search.searchText;
	},
});

export const getResult = selector({
	key: 'getResult',
	get: ({ get }) => {
		const search: ISearchState = get(searchState);
		return search.result;
	},
});

export const getItem = selector({
	key: 'getItem',
	get: ({ get }) => {
		const search: ISearchState = get(searchState);
		return search.item?.item;
	},
});

export const getIsLoading = selector({
	key: 'getIsLoading',
	get: ({ get }) => {
		const search: ISearchState = get(searchState);
		return search.isLoading;
	},
});

export const getErrorMessage = selector({
	key: 'getErrorMessage',
	get: ({ get }) => {
		const error = get(errorState);
		return error.message;
	},
});
