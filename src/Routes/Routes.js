import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import LayoutComponent from '../Layout/Layout';
import Home from '../pages/Home';

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <LayoutComponent content={<Home />} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
