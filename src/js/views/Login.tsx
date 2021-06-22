import React from 'react';
import { LoginForm } from '../components/Login';
import { CentralWrapper } from '../components/common';

const Login = () => {
  return (
    <CentralWrapper>
      <h1>Zaloguj się</h1>
      <LoginForm />
    </CentralWrapper>
  );
};

export default Login;
