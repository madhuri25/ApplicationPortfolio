import React, { createContext } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import NotFoundPage from 'containers/NotFoundPage';
import DetailedView from 'containers/DetailedView';
import AddApplicationForm from 'containers/AddApplicationForm';
import AddVersionForm from 'containers/AddVersionForm';
import purple from '@material-ui/core/colors/purple';
import Container from '@material-ui/core/Container';
import data from '../data';
import ContextWrapper from './ContextWrapper';
import HomePage from './HomePage';
const MyContext = createContext(data);

const App = () => {
  const { applications } = data;
  return (
    <div>
      <header style={{ backgroundColor: purple[700], padding: 2 }}>
        <h2 style={{ textAlign: 'center', fontFamily: 'Georgia, serif' }} onclick={()=>{}}>
           Application Portfolio
        </h2>
      </header>
      <Container fixed>
        <MyContext.Provider value={{ applications }}>
          <Router>
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
      </Container>
    </div>
  );
};

export default App;
export { MyContext };
