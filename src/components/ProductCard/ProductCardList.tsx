import React from 'react';
import { useRecoilValue } from 'recoil';
import { getResult } from '../../recoil/selectors';
import { ISearchStateInterface } from '../../interfaces/atom.interface';
import ProductCard from './ProductCard';

const ProductCardList: React.FC = () => {
	const searchResult = useRecoilValue(getResult);

	return (
		<>
			{
				searchResult?.items.length
					?
						searchResult.items.map((item) => {
							return(
								<>
									<ProductCard item={item} />
									<div className="content-divisor w-full h-px" />
								</>
							)
						})
					:
						<></>
			}
		</>
	)
};

export default ProductCardList;
