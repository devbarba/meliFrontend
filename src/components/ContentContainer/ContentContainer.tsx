
import React from 'react';


const ContentContainer: React.FC = ({children}) => {
	return (
		<main className="content-container">
			<div className="content-box bg-white p-4 mt-8 mb-8">
				{children}
			</div>
		</main>
	);
};

export default ContentContainer;
