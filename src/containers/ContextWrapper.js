import React from 'react';
import { MyContext } from './App';

const ContextWrapper = props => (
  <MyContext.Consumer>
    {context => <props.mainComponent context={context} {...props} />}
  </MyContext.Consumer>
);

export default ContextWrapper;
