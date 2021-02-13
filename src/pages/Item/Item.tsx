import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { getIsLoading, getItem, getResult } from '../../recoil/selectors';
import { errorState, searchState } from '../../recoil/atoms';
import Page from '../../components/Page/Page';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import { GetItemById } from '../../services/item.service';
import { ISearchState } from '../../interfaces/atom.interface';
import ItemCard from '../../components/ItemCard/ItemCard';
import { IItem } from '../../interfaces/item.interface';
import { GetCategoriesById } from '../../services/category.service';

interface matchParams {
	id: string;
}

const Item: React.FC = () => {
	const params: matchParams = useParams();
	const setErrorMessage = useSetRecoilState(errorState);
	const setSearchContext = useSetRecoilState(searchState);
	const actualItem: IItem = useRecoilValue(getItem) as IItem;
	const isLoading = useRecoilValue(getIsLoading);
	const searchResult = useRecoilValue(getResult);
	const categoriesLength = searchResult?.categories?.length;

	const handleGetItem = async (itemId: string) => {
		try{
			const { data: itemResponse } = await GetItemById(itemId);

			setSearchContext((prevState: ISearchState) => ({
				...prevState,
				isLoading: false,
				item: itemResponse
			}));

			if (!categoriesLength) handleGetCategories(itemResponse.item?.category?.id ?? '')
		} catch(err) {
			setErrorMessage({
				message: err
			});
		}
	}

	const handleGetCategories = async (categoryId: string) => {
		try{
			const { data: categoriesResponse } = await GetCategoriesById(categoryId);

			setSearchContext((prevState: ISearchState) => ({
				...prevState,
				result: {...prevState.result, categories: categoriesResponse.nested_categories}
			}));
		} catch(err) {
			setErrorMessage({
				message: err
			});
		}
	}

	useEffect(() => {
		const idParam = params.id;

		// setLoading();
		if (idParam && !isLoading) handleGetItem(idParam);
	}, [isLoading]);

	return (
		<Page
			breadCrumb={<BreadCrumb />}
			content={
				!isLoading ? <ItemCard item={actualItem} /> : <></>
			}
		/>
	);
};

export default Item;
