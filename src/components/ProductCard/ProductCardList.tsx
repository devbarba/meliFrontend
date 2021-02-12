import React from 'react';
import { useRecoilValue } from 'recoil';
import { getResult } from '../../recoil/selectors';
import ProductCard from './ProductCard';
import ProductNotFound from './ProductNotFound';

const ProductCardList: React.FC = () => {
	const searchResult = useRecoilValue(getResult);

	return (
		<>
			{
				searchResult?.items.length
					?
						searchResult.items.map((item, idx) => {
							const counter = idx;
							return(
								<div key={counter}>
									<ProductCard item={item} />
									<div className="content-divisor w-full h-px" />
								</div>
							)
						})
					:
						<ProductNotFound />

			}
		</>
	)
};

export default ProductCardList;
