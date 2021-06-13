import React, { useState } from 'react';

import { loginUser } from '../../API/auth';

const LoginForm = () => {
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('');

  const handleSubmit = () => {
    loginUser({ password, login });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="login">Login</label>
      <input
        type="text"
        id="login"
        name="login"
        value={login}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setLogin(e.target.value)
        }
      />
      <label htmlFor="password">Hasło</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default LoginForm;
