import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router';

import { isAuthenticated } from '../../API/auth';

export type AuthorizedRouteProps = RouteProps;

const AuthorizedRoute = ({ ...rest }: AuthorizedRouteProps) => {
  if (!isAuthenticated()) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: rest.location?.pathname },
        }}
      />
    );
  }
  return <Route {...rest} />;
};

export default AuthorizedRoute;
