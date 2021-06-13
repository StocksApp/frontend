import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthorizedRoute from './components/routes/AuthorizedRoute';
import { Header } from './components/Header';

const Routes = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/login">
          <div>Login</div>
        </Route>
        <AuthorizedRoute path="/">
          <div>Hejka</div>
        </AuthorizedRoute>
      </Switch>
    </div>
  );
};

export default Routes;
