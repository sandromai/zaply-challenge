import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import EditionPage from '../pages/EditionPage';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/edition/:id" exact component={EditionPage} />
  </Switch>
);

export default Routes;
