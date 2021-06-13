import React from 'react';

import styles from './Login.module.css';
import { LoginForm } from '../../components/Login';

const Login = () => {
  return (
    <div className={styles.login}>
      <h1>Zaloguj się</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
