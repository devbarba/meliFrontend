import React from 'react';

import Logo from '../Logo/Logo';
import SearchInput from '../SearchInput/SearchInput';

const Header: React.FC = () => {
	return (
		<header className="nav-header w-full flex py-3.5">
			<div className="nav-container flex w-9/12 px-0 mx-auto">
				<div className="nav-logo flex" role="button" tabIndex={0}>
					<Logo />
				</div>

				<div className="nav-search-container w-full flex relative flex-wrap">
					<SearchInput />
				</div>
			</div>
		</header>
	);
};

export default Header;
