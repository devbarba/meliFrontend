import React from 'react';

import Search1x from '../../assets/images/search.png';
import Search2x from '../../assets/images/search@2x.png';

const SearchInput: React.FC = () => {
	return (
		<>
			<input
				type="text"
				className="nav-search"
				placeholder="Nunca dejes de buscar"
			/>

			<div className="nav-search-append">
				<button type="submit">
					<img
						srcSet={`
						${Search2x} 2x,
						${Search1x} 1x,
						`}
						alt="Ícono de búsqueda"
					/>
				</button>
			</div>
		</>
	);
};

export default SearchInput;
