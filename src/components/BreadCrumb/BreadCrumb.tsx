import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { getResult } from '../../recoil/selectors';

const BreadCrumb: React.FC = () => {
	const searchResult = useRecoilValue(getResult);
	const categoriesLength = searchResult?.categories.length;

	return (
		<div className="content-container flex w-9/12 px-0 mx-auto justify-start my-4">
			{
				categoriesLength
					?
						searchResult?.categories.map((cat, idx) => {
							return(
								<>
									<span className="breadcrumb-span pr-2 text-sm">{cat}</span>
									{categoriesLength > idx + 1
										?
											<i className="fas fa-chevron-right pr-2 text-sm" />
										: <></>
									}
								</>
							)
						})
					:
						<></>
			}
		</div>
	);
};

export default BreadCrumb;
