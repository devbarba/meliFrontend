import React from 'react';
import { useRecoilValue } from 'recoil';
import { getErrorMessage } from '../../recoil/selectors';

const Error: React.FC = () => {
	const errorMessage = useRecoilValue(getErrorMessage);

	return (
		<p>{errorMessage}</p>
	);
};

export default Error;
