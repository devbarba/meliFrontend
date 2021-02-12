import React, { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { getSearchText } from '../../recoil/selectors';
import { searchState } from '../../recoil/atoms';
import Page from '../../components/Page/Page';
import ProductCardList from '../../components/ProductCard/ProductCardList';
import { GetItemByName } from '../../services/search.service';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

const Result: React.FC = () => {
	const setSearchContext = useSetRecoilState(searchState);
	const searchText = useRecoilValue(getSearchText);

	const handleSearch = async () => {
		try{
			const { data: searchResponse } = await GetItemByName({ q: searchText ?? 'Auto' });

			setSearchContext((prevState: any) => ({
				...prevState,
				isLoading: true,
				result: searchResponse
			}));
		} catch(err: unknown) {
			console.log(err);
		}
	}

	useEffect(() => {
		handleSearch();
	}, []);

	return (
		<Page
			breadCrumb={<BreadCrumb />}
			content={
				<ProductCardList />
			}
		/>
	);
};

export default Result;
