
import React, { ReactNode } from 'react';
import ContentContainer from '../ContentContainer/ContentContainer';
import Header from '../Header/Header';

type PageProps = {
	content: ReactNode;
};

const Page: React.FC<PageProps> = ({content}) => {
	return (
		<>
			<Header />
			<ContentContainer>
				{content}
			</ContentContainer>
		</>
	);
};

export default Page;
