import React, { useState } from 'react';

import { registerUser } from '../../API/auth';

import styles from './RegisterForm.module.css';
import { Input, SubmitButton } from '../common/inputs';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');

  const history = useHistory();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === '' || login === '' || email === '') return;
    console.log(registerUser(login, password, email));
    history.push('/login');
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input.Label htmlFor="login">Email</Input.Label>
      <Input
        type="text"
        id="email"
        name="email"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
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
        text="Zarejestruj"
      />
      <Link className={styles.link} to="/login">
        Zaloguj się
      </Link>
    </form>
  );
};

export default RegisterForm;
