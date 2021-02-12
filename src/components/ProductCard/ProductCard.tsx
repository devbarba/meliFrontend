import React from 'react';
import { Link } from 'react-router-dom';
import Shipping1x from '../../assets/images/shipping.png';
import Shipping2x from '../../assets/images/shipping@2x.png';
import { ISearchItemInterface } from '../../interfaces/atom.interface';

interface ProductCardProps {
	item?: ISearchItemInterface
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
	return (
		<div className="card-row w-full flex py-4">
			<div className="card-thumbnail relative w-full">
				<Link to={`/items/${item?.id}`}>
					<img
						className="w-full h-full"
						src={item?.picture.replace('-I.jpg', '-O.webp')}
						alt={item?.title}
					/>
				</Link>
			</div>

			<div className="card-detail pl-4 pt-4 w-full flex">
				<div className="product-details w-4/5">
					<div className="price-shipping flex items-center pb-4">
						<div className="product-price">
							<Link to={`/items/${item?.id}`}>
								<p className="text-2xl">{`${item?.price.amount.replace('ARS', '$')}`}</p>
							</Link>
						</div>

						{item?.free_shipping
							?
								<div className="product-shipping ml-2">
									<img
										srcSet={`
										${Shipping2x} 2x,
										${Shipping1x} 1x,
										`}
										alt="Envío gratis"
									/>
								</div>
							:
								<></>
						}
					</div>
					<div className="product-title">
						<p className="text-lg">{item?.title}</p>
					</div>
				</div>

				<div className="card-address w-1/5 pt-6">
					<p className="text-xs">{item?.state}</p>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
