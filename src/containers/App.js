import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import NotFoundPage from 'containers/NotFoundPage';
import HomePage from 'containers/HomePage';
import DetailedView from 'containers/DetailedView';
import purple from '@material-ui/core/colors/purple';
export default function App() {
  return (
    <div>
        <header style={{ backgroundColor: purple[700], padding: 2 }}>
          <h2 style={{ textAlign: 'center', fontFamily: 'Georgia, serif' }}>
            Application Portfolio
          </h2>
        </header>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/detailed-view/:guid" component={DetailedView} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}
