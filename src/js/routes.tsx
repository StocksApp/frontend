import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AuthorizedRoute from './components/routes/AuthorizedRoute';
import { Login } from './views/Login';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <AuthorizedRoute path="/">
        <div>Hejka</div>
      </AuthorizedRoute>
    </Switch>
  );
};

export default Routes;
