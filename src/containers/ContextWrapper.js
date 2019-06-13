import React from 'react';
import { MyContext } from './App';
import Layout from '../components/Layout';
import PropTypes from 'prop-types';

const ContextWrapper = (props) => (
	<Layout>
		<MyContext.Consumer>{(context) => <props.mainComponent context={context} {...props} />}</MyContext.Consumer>
	</Layout>
);

ContextWrapper.propTypes = {
	mainComponent: PropTypes.func.isRequired,
};

export default ContextWrapper;
