import React from 'react';
import ReactLoading from 'react-loading';

interface Iloading{
	type: "blank" | "balls" | "bars" | "bubbles" | "cubes" | "cylon" | "spin" | "spinningBubbles" | "spokes" | undefined;
	color: string;
}

const Loading: React.FC<Iloading> = ({ type, color }: Iloading ) => {
	return(
		<div className="flex items-center justify-center my-4">
			<ReactLoading type={type} color={color} height={'10%'} width={'10%'} />
		</div>
	);
};

export default Loading;
