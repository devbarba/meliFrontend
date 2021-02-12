import React from 'react';
import SearchIcon from '../../assets/images/search_icon.svg';

const ProductNotFound: React.FC = () => {
	return (
		<div className="search-info flex flex-row justify-center items-center m-12">
			<div className="search-icon inline-block mr-8 align-middle">
				<img src={SearchIcon} alt="" />
			</div>

			<div className="search-detail">
				<h3 className="search-title text-2xl font-semibold">No hay publicaciones que coincidan con tu búsqueda.</h3>
				<ul className="search-list text-base mt-4 font-normal">
					<li className="search-item list-disc ml-5 mb-0.5">
						<strong>Revisá la ortografía</strong>
						{' de la palabra.'}
					</li>
					<li className="search-item list-disc ml-5 mb-0.5">
						{'Utilizá '}
						<strong>palabras más genéricas</strong>
						{' o menos palabras.'}
					</li>
				</ul>
			</div>
		</div>
	)
};

export default ProductNotFound;
