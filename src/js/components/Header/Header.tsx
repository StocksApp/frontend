import React, { useState } from 'react';

import { Tab } from '.';
import Icon from '../common/Icon';

import styles from './Header.module.css';

enum HeaderState {
  Stocks = 'Stocks',
  Analysis = 'Analysis',
  Forum = 'Forum',
  Login = 'Login',
  Default = '',
}

const Header = () => {
  const [selected, setSelected] = useState<HeaderState>(HeaderState.Default);
  return (
    <div className={styles.header}>
      <Icon url="../../../images/money.png" className={styles.icon} />
      <div className={styles.navigationTabs}>
        <Tab
          text="Notowania"
          url="/stocks"
          selected={selected === HeaderState.Stocks}
          onClick={() => setSelected(HeaderState.Stocks)}
        />
        <Tab
          text="Analiza Techniczna"
          url="/analysis"
          selected={selected === HeaderState.Analysis}
          onClick={() => setSelected(HeaderState.Analysis)}
        />
        <Tab
          text="Forum"
          url="/forum"
          selected={selected === HeaderState.Forum}
          onClick={() => setSelected(HeaderState.Forum)}
        />
      </div>
      <Tab
        text="Login"
        url="/login"
        className={styles.rightContent}
        selected={selected === HeaderState.Login}
        onClick={() => setSelected(HeaderState.Login)}
      />
    </div>
  );
};

export default Header;
