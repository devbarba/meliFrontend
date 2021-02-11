import React from 'react';
import Page from '../../components/Page/Page';

const Home: React.FC = () => {
	return (
		<Page
			content={
				<p className="text-center mt-12 mb-12 text-3xl">
					¡Comienza a buscar!
				</p>
			}
		/>
	);
};

export default Home;
