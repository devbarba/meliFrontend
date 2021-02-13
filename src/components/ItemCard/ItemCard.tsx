import React, { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ISearchState } from '../../interfaces/atom.interface';
import { IItem, } from '../../interfaces/item.interface';
import { searchState } from '../../recoil/atoms';
import { getItem } from '../../recoil/selectors';
import Loading from '../Page/Loading';

interface ProductCardProps {
	item?: IItem
}

const ItemCard: React.FC<ProductCardProps> = ({ item }) => {
	const itemResult = useRecoilValue(getItem) as IItem;
	const setSearchContext = useSetRecoilState(searchState);

	const getCondition = (condition: string) => {
		const allConditions: any = [];
		allConditions.new = 'Nuevo';
		allConditions.used = 'Usado';
		allConditions.not_specified = 'No Especificado';
		return allConditions[condition];
	}

	useEffect(() => {
		return () => {
			setSearchContext((prevState: ISearchState) => ({
				...prevState,
				isLoading: false,
				result: {},
				item: {}
			}));
		}
	}, [setSearchContext]);

	return (
		<>
			{
				itemResult?.id
					?
						<div className="item-content flex justify-center items-center w-full py-8 px-4">
							<div className="item-picture text-center">
								<img
									className="w-9/12"
									src={item?.picture.replace('-I.jpg', '-O.jpg')}
									alt={item?.title}
								/>

								<div className="item-description flex-1">
									<p className="text-2xl font-semibold text-left py-8">Descripción del Producto</p>
									{item?.description}
								</div>
							</div>

							<div className="item-details w-full self-start order-2">
								<div className="item-details-sale text-sm pt-8 pb-4">
									<p>
										{getCondition(item?.condition ?? '')}
										{` - ${item?.sold_quantity} vendidos`}
									</p>
								</div>

								<div className="item-details-title text-2xl pb-8 font-semibold">
									<p>{item?.title}</p>
								</div>

								<div className="item-details-price text-4xl pb-8 font-semibold">
									<p>{`${item?.price?.amount.replace('ARS', '$')}`}</p>
								</div>

								<button className="item-purchase-button h-11 w-full" type="button">Comprar</button>
							</div>
						</div>
					:
						<Loading type="spinningBubbles" color="#FFE600" />

			}
		</>
	);
};

export default ItemCard;
