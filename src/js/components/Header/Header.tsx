import React, { useState } from 'react';

import { Tab } from '../common';
import Icon from '../common/Icon';

import styles from './Header.module.css';
import { useLocation } from 'react-router';
import { isAuthenticated } from '../../API/auth';

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
      <Icon url="../../../images/money.png" className={styles.icon} />
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
      {!isAuthenticated() && (
        <Tab
          text="Login"
          url="/login"
          className={styles.rightContent}
          selected={pathname.includes(HeaderState.Login)}
        />
      )}
    </div>
  );
};

export default Header;
