import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthorizedRoute from './components/routes/AuthorizedRoute';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login">
        <div>Login</div>
      </Route>
      <AuthorizedRoute path="/">
        <div>Hejka</div>
      </AuthorizedRoute>
    </Switch>
  );
};

export default Routes;
