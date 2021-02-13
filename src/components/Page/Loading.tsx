import React from 'react';
import ReactLoading from 'react-loading';
import { useRecoilValue } from 'recoil';
import { getErrorMessage } from '../../recoil/selectors';
import ProductNotFound from '../ProductCard/ProductNotFound';

interface Iloading{
	type: "blank" | "balls" | "bars" | "bubbles" | "cubes" | "cylon" | "spin" | "spinningBubbles" | "spokes" | undefined;
	color: string;
}

const Loading: React.FC<Iloading> = ({ type, color }: Iloading ) => {
	const errorMessage = useRecoilValue(getErrorMessage);

	return(
		(!errorMessage
			?
				<div className="flex items-center justify-center my-4">
					<ReactLoading type={type} color={color} height={'10%'} width={'10%'} />
				</div>
			:
				<ProductNotFound />
		)
	);
};

export default Loading;
