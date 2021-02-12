
import React, { ReactNode } from 'react';
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import ContentContainer from '../ContentContainer/ContentContainer';
import Header from '../Header/Header';

type PageProps = {
	content: ReactNode;
	breadCrumb?: ReactNode;
};

const Page: React.FC<PageProps> = ({content, breadCrumb}) => {
	return (
		<>
			<Header />

			{breadCrumb ?? <div className="mt-8" />}

			<ContentContainer>
				{content}
			</ContentContainer>
		</>
	);
};

export default Page;
