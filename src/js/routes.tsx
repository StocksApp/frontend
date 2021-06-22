import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AuthorizedRoute from './components/routes/AuthorizedRoute';
import { Login, Forum, Stocks, Analysis } from './views';

const Routes = () => {
  return (
    <Switch>
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
      <AuthorizedRoute path="/">
        <div>Hejka</div>
      </AuthorizedRoute>
    </Switch>
  );
};

export default Routes;
