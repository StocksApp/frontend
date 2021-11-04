import React, { useState } from 'react';

import { loginUser } from '../../API/auth';

import styles from './LoginForm.module.css';
import { Input, SubmitButton } from '../common/inputs';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('');
  const history = useHistory();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === '' || login === '') return;
    loginUser({ password, login });
    history.push('/');
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input.Label htmlFor="login">Login</Input.Label>
      <Input
        type="text"
        id="login"
        name="login"
        value={login}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setLogin(e.target.value)
        }
      />
      <Input.Label htmlFor="password">Hasło</Input.Label>
      <Input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
      />
      <SubmitButton
        variant={login && password ? 'success' : undefined}
        text="Zaloguj"
      />
      <Link className={styles.link} to="/register">
        Zarejestruj się
      </Link>
    </form>
  );
};

export default LoginForm;
