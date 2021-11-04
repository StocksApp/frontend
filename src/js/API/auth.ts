import { Credentials } from '../models/interfaces';
import axios from 'axios';
import ApiUrls from './urls';

export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem('credentials');
};

export type AuthHeader = {
  Authorization?: string;
};

export const authHeader = (): AuthHeader => {
  const credentials = localStorage.getItem('credentials');
  if (credentials) {
    return {
      Authorization: credentials,
    };
  } else {
    return {};
  }
};

export const loginUser = async (credentials: Credentials): Promise<void> => {
  try {
    await axios.get<{
      userName: string;
      password: string;
    }>(ApiUrls.auth.login, {
      headers: {
        ['Content-type']: 'application/json',
        Authorization: `Basic ${credentials.login}:${credentials.password}`,
      },
    });
    localStorage.setItem(
      'credentials',
      `Basic ${credentials.login}:${credentials.password}`
    );
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const registerUser = async (
  username: string,
  password: string,
  email: string
): Promise<number> => {
  try {
    const response = await axios.post<
      {
        userName: string;
        password: string;
        email: string;
      },
      { data: { id: number } }
    >(
      ApiUrls.auth.register,
      { userName: username, password, email },
      { headers: { ['Content-type']: 'application/json' } }
    );
    localStorage.setItem('userId', `${response.data.id}`);
    return response.data.id;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
