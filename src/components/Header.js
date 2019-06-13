import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

const Header = () => (
	<header className='main-header'>
		<h2>
			<Link className='link-wrapper' to={{ pathname: `/` }}>
				Application Portfolio
			</Link>
		</h2>
	</header>
);
export default Header;
