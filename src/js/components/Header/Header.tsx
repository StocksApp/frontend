import React from 'react';
import { useLocation } from 'react-router';

import { Tab } from '../common';
import Icon from '../common/Icon';
import { isAuthenticated } from '../../API/auth';
import logo from '../../../images/money.png';

import styles from './Header.module.css';
import NextTurn from './NextTurn';

enum HeaderState {
  Stocks = 'stocks',
  Analysis = 'analysis',
  Forum = 'forum',
  Login = 'login',
}

const Header = () => {
  const { pathname } = useLocation<{ pathname: string }>();
  return (
    <div className={styles.header}>
      <Icon url={logo} className={styles.icon} />
      <div className={styles.navigationTabs}>
        <Tab
          text="Notowania"
          url="/stocks"
          selected={pathname.includes(HeaderState.Stocks)}
        />
        <Tab
          text="Analiza Techniczna"
          url="/analysis"
          selected={pathname.includes(HeaderState.Analysis)}
        />
        <Tab
          text="Forum"
          url="/forum"
          selected={pathname.includes(HeaderState.Forum)}
        />
      </div>
      {isAuthenticated() ? (
        <NextTurn />
      ) : (
        <Tab
          text="Login"
          url="/login"
          className={styles.rightContent}
          selected={
            pathname.includes(HeaderState.Login) ||
            pathname.includes('register')
          }
        />
      )}
    </div>
  );
};

export default Header;
