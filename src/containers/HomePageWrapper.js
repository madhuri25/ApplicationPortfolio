import React from 'react';
import { MyContext } from './App';
import HomePage from './HomePage';

const HomePageWrapper = () => (
  <MyContext.Consumer>
    {context => <HomePage context={context} />}
  </MyContext.Consumer>
);

export default HomePageWrapper;
