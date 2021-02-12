
import React from 'react';


const ContentContainer: React.FC = ({children}) => {
	return (
		<main className="content-container flex w-9/12 px-0 mx-auto">
			<div className="content-box w-full bg-white px-4 mb-8">
				{children}
			</div>
		</main>
	);
};

export default ContentContainer;
