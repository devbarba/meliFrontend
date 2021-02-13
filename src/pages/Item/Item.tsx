// @ts-nocheck
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { getIsLoading, getItem } from '../../recoil/selectors';
import { errorState, searchState } from '../../recoil/atoms';
import Page from '../../components/Page/Page';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import { GetItemById } from '../../services/item.service';
import { ISearchStateInterface } from '../../interfaces/atom.interface';
import ItemCard from '../../components/ItemCard/ItemCard';
import { ItemItemInterface } from '../../interfaces/item.interface';

interface matchParams {
	id: string;
}

const Item: React.FC = () => {
	const params: matchParams = useParams();
	const setErrorMessage = useSetRecoilState(errorState);
	const setSearchContext = useSetRecoilState(searchState);
	const actualItem: ItemItemInterface = useRecoilValue(getItem);
	const isLoading = useRecoilValue(getIsLoading);

	const handleGetItem = async (itemId: string) => {
		try{
			const { data: itemResponse } = await GetItemById(itemId);

			setSearchContext((prevState: ISearchStateInterface) => ({
				...prevState,
				isLoading: false,
				item: itemResponse
			}));
		} catch(err) {
			setErrorMessage({
				message: err
			});
		}
	}

	useEffect(() => {
		const idParam = params.id;
		if (idParam) handleGetItem(idParam);
	}, []);

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
