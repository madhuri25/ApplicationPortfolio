import React, { createContext } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import NotFoundPage from 'containers/NotFoundPage';
import DetailedView from 'containers/DetailedView';
import AddApplicationForm from 'containers/AddApplicationForm';
import AddVersionForm from 'containers/AddVersionForm';
import data from '../data';
import ContextWrapper from './ContextWrapper';
import HomePage from './HomePage';
const MyContext = createContext(data);

const App = () => {
  const { applications } = data;
  return (
        <MyContext.Provider value={{ applications }}>
          <Router basename={process.env.REACT_APP_PUBLIC_URL}>
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <ContextWrapper mainComponent={HomePage} {...props} />
                )}
              />
              <Route
                exact
                path="/detailed-view/:guid"
                render={props => (
                  <ContextWrapper mainComponent={DetailedView} {...props} />
                )}
              />
              <Route
                exact
                path="/add-application"
                render={props => (
                  <ContextWrapper
                    mainComponent={AddApplicationForm}
                    {...props}
                  />
                )}
              />
              <Route
                exact
                path="/add-version/:guid"
                render={props => (
                  <ContextWrapper mainComponent={AddVersionForm} {...props} />
                )}
              />
              <Route path="" component={NotFoundPage} />
            </Switch>
          </Router>
        </MyContext.Provider>
  );
};

export default App;
export { MyContext };
