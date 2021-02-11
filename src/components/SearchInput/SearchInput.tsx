import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { searchState } from '../../recoil/atoms';
import { getSearchText } from '../../recoil/selectors';
import Search1x from '../../assets/images/search.png';
import Search2x from '../../assets/images/search@2x.png';

const SearchInput: React.FC = () => {
	const history = useHistory();
	const setSearchContext = useSetRecoilState(searchState);
	const searchText = useRecoilValue(getSearchText);

	const handleSearchText = (newValue: string) => {
		setSearchContext((prevState: any) => ({
			...prevState,
			searchText: newValue
		}));
	}

	useEffect(() => {
		const searchParam = history.location?.search;
		if (searchParam) handleSearchText(searchParam.replace('?search=', ''));
	}, []);

	const handleSearch = () => {
		if (searchText) history.push(`/items?search=${searchText}`);
	};

	return (
		<>
			<input
				type="text"
				className="nav-search"
				value={searchText}
				onChange={(e: React.FormEvent<HTMLInputElement>) => {
					handleSearchText(e.currentTarget.value)
				}}
				placeholder="Nunca dejes de buscar"
			/>

			<div className="nav-search-append">
				<button type="submit" style={{outline: 'none'}} onClick={handleSearch}>
					<img
						srcSet={`
						${Search2x} 2x,
						${Search1x} 1x,
						`}
						alt="Ícono de búsqueda"
					/>
				</button>
			</div>
		</>
	);
};

export default SearchInput;
