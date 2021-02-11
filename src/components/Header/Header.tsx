import React from 'react';

import Logo from '../Logo/Logo';
import SearchInput from '../SearchInput/SearchInput';

const Header: React.FC = () => {
	return (
		<header className="nav-header">
			<div className="nav-container">
				<div className="nav-logo" role="button" tabIndex={0}>
					<Logo />
				</div>

				<div className="nav-search-container">
					<SearchInput />
				</div>
			</div>
		</header>
	);
};

export default Header;
