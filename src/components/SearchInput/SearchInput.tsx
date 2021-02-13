import React, { useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { searchState } from '../../recoil/atoms';
import { getSearchText } from '../../recoil/selectors';
import Search1x from '../../assets/images/search.png';
import Search2x from '../../assets/images/search@2x.png';
import { ISearchState } from '../../interfaces/atom.interface';

const SearchInput: React.FC = () => {
	const history = useHistory();
	const setSearchContext = useSetRecoilState(searchState);
	const searchText = useRecoilValue(getSearchText);

	const handleLoading = (newValue: boolean) => {
		setSearchContext((prevState: ISearchState) => ({
			...prevState,
			isLoading: newValue
		}));
	}

	const handleSearchText = (newValue: string) => {
		setSearchContext((prevState: ISearchState) => ({
			...prevState,
			searchText: newValue
		}));
	}

	useEffect(() => {
		const searchParam = history.location?.search;

		if (searchParam) {
			handleLoading(true);
			handleSearchText(decodeURIComponent(searchParam.replace('?search=', '')));
		}
	}, []);

	const handleSearch = () => {
		if (searchText) {
			handleLoading(true);
			history.push(`/items?search=${searchText}`);
		}
	};

	return (
		<>
			<input
				type="text"
				className="nav-search relative p-2 flex-auto pl-3.5"
				value={searchText}
				onChange={(e: React.FormEvent<HTMLInputElement>) => {
					handleSearchText(e.currentTarget.value)
				}}
				onKeyPress={(event) => {
					if(event.key === 'Enter') handleSearch();
				}}
				placeholder="Nunca dejes de buscar"
			/>

			<div className="nav-search-append flex -ml-px">
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
