import React, { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { getIsLoading, getResult, getSearchText } from '../../recoil/selectors';
import { errorState, searchState } from '../../recoil/atoms';
import Page from '../../components/Page/Page';
import ProductCardList from '../../components/ProductCard/ProductCardList';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import { GetItemByName } from '../../services/search.service';
import { ISearchState } from '../../interfaces/atom.interface';

const Result: React.FC = () => {
	const setErrorMessage = useSetRecoilState(errorState);
	const setSearchContext = useSetRecoilState(searchState);
	const searchText = useRecoilValue(getSearchText);
	const isLoading = useRecoilValue(getIsLoading);

	const handleSearch = async () => {
		try{
			const { data: searchResponse } = await GetItemByName({ q: searchText ?? 'Auto' });

			setSearchContext((prevState: ISearchState) => ({
				...prevState,
				isLoading: false,
				result: searchResponse
			}));
		} catch(err) {
			setErrorMessage({
				message: err
			});
		}
	}

	useEffect(() => {
		if (isLoading) handleSearch();
	}, [isLoading]);

	return (
		<Page
			breadCrumb={<BreadCrumb />}
			content={
				!isLoading ? <ProductCardList /> : <></>
			}
		/>
	);
};

export default Result;
