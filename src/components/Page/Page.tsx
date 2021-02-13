
import React, { ReactNode } from 'react';
import { useRecoilValue } from 'recoil';
import { getErrorMessage, getIsLoading } from '../../recoil/selectors';
import Header from '../Header/Header';
import Error from '../../pages/Error/Error';
import ContentContainer from '../ContentContainer/ContentContainer';
import Loading from './Loading';

type PageProps = {
	content: ReactNode;
	breadCrumb?: ReactNode;
};

const Page: React.FC<PageProps> = ({content, breadCrumb}) => {
	const errorMessage = useRecoilValue(getErrorMessage);
	const isLoading = useRecoilValue(getIsLoading);

	return (
		<>
			<Header />

			{breadCrumb ?? <div className="mt-8" />}

			<ContentContainer>
				{
					isLoading && <Loading type="spinningBubbles" color="#FFE600" />
				}
				{
					!isLoading && !errorMessage
						?
							content
						:
							<Error />
				}
			</ContentContainer>
		</>
	);
};

export default Page;
