import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AuthorizedRoute from './components/routes/AuthorizedRoute';
import { Login } from './views/Login';
import { Forum } from './views/Forum';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/stocks">
        <Login />
      </Route>
      <Route path="/analysis">
        <Login />
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
