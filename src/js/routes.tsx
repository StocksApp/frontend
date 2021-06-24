import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AuthorizedRoute from './components/routes/AuthorizedRoute';
import { Login, Forum, Stocks, Analysis, SingleGame } from './views';
import { CentralWrapper } from './components/common';

const Routes = () => {
  return (
    <Switch>
      <CentralWrapper>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/stocks">
          <Stocks />
        </Route>
        <Route path="/analysis">
          <Analysis />
        </Route>
        <Route path="/forum">
          <Forum />
        </Route>
        <AuthorizedRoute path="/game">
          <Route path="/game/single">
            <SingleGame />
          </Route>
        </AuthorizedRoute>
      </CentralWrapper>
    </Switch>
  );
};

export default Routes;
