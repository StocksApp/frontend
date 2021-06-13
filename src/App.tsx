import React from 'react';

import Routes from './js/routes';
import URLS from './js/API/urls';
import UTILS from './js/API/utils';
import { Header } from './js/components/Header';

import styles from './App.module.css';
import { Drawer } from './js/components/Drawer';

const App = () => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.centralWrapper}>
        <Drawer />
        <div className={styles.central}>
          <Routes />
        </div>
      </div>
    </div>
  );
};
export default App;
