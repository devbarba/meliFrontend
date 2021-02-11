import React from 'react';
import { Link } from 'react-router-dom';

import Logo1x from '../../assets/images/logo.png';
import Logo2x from '../../assets/images/logo@2x.png';

const Logo: React.FC = () => {
	return (
		<Link to="/">
			<img
				srcSet={`
				${Logo2x} 2x,
				${Logo1x} 1x,
				`}
				alt="Mercado Libre Argentina"
			/>
		</Link>
	);
};

export default Logo;
