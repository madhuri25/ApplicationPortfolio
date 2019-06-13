import React from 'react';
import purple from '@material-ui/core/colors/purple';
import { Link } from 'react-router-dom';

const Header = () => (
	<header style={{ backgroundColor: purple[700], padding: 2 }}>
		<h2 style={{ textAlign: 'center', fontFamily: 'Georgia, serif' }}>
			<Link style={{ textDecoration: 'none', color: 'black' }} to={{ pathname: `/` }}>
				Application Portfolio
			</Link>
		</h2>
	</header>
);
export default Header;
