import React from 'react';
import Header from './Header';
import Container from '@material-ui/core/Container';

const Layout = (props) => (
	<div>
		<Header />
		<Container fixed>{props.children}</Container>
	</div>
);

export default Layout;