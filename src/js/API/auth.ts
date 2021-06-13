import { Credentials } from '../models/interfaces';

export const isAuthenticated = (): boolean => {
  return !localStorage.getItem('credentials');
};

export type AuthHeader = {
  Authorization?: string;
};

export const authHeader = (): AuthHeader => {
  const credentials = localStorage.getItem('credentials');
  if (credentials) {
    return {
      Authorization: JSON.parse(credentials),
    };
  } else {
    return {};
  }
};

export const loginUser = (credentials: Credentials): void => {
  localStorage.setItem('credentials', JSON.stringify(credentials));
};
