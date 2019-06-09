import React, { createContext } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import NotFoundPage from 'containers/NotFoundPage';
import DetailedView from 'containers/DetailedView';
import AddApplication from 'containers/AddApplication';
import purple from '@material-ui/core/colors/purple';
import Container from '@material-ui/core/Container';
import data from '../data';
import HomePageWrapper from './HomePageWrapper';
const MyContext = createContext(data);

const App = () => {
  const { applications } = data;
  return (
    <div>
      <header style={{ backgroundColor: purple[700], padding: 2 }}>
        <h2 style={{ textAlign: 'center', fontFamily: 'Georgia, serif' }}>
          Application Portfolio
        </h2>
      </header>
      <Container fixed>
        <MyContext.Provider value={{ applications }}>
          <Router>
            <Switch>
              <Route exact path="/" component={HomePageWrapper} />
              <Route
                exact
                path="/detailed-view/:guid"
                component={DetailedView}
              />
              <Route exact path="/add-application" component={AddApplication} />
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
