import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Portfolio from '~/pages/Portfolio/Portfolio';
import Team from '~/pages/Team/Team';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/team" component={Team} />
  </Switch>
);

export default Routes;
