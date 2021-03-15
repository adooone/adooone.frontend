import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import Home from './Home';
import Portfolio from '~/pages/Portfolio';
import Team from '~/pages/Team';
import { viewState } from '~/core/store/atoms/view';

const Routes: React.FC = () => {
  const location = useLocation();
  const setPage = useSetRecoilState(viewState);

  useEffect(() => {
    setPage((prevState) => {
      const newState = Object.assign({}, prevState);
      newState.page = location.pathname;
      return newState;
    });
  }, [location.pathname]);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/team" component={Team} />
    </Switch>
  );
};

export default Routes;
