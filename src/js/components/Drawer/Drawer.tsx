import React from 'react';

import { isAuthenticated } from '../../API/auth';

import styles from './Drawer.module.css';
import { Tab } from '../common';
import { useLocation } from 'react-router';

const tabs = [
  { id: 'game', text: 'Rozgrywka' },
  { id: 'wallet', text: 'Portfel' },
  { id: 'order', text: 'Zlecenia' },
  { id: 'profile', text: 'Profil' },
];

const Drawer = () => {
  const { pathname } = useLocation<{ pathname: string }>();
  console.log(isAuthenticated());
  if (!isAuthenticated()) return null;
  return (
    <div className={styles.drawer}>
      <img src="./stocksAppIco.jpeg" className={styles.icon} />
      <div className={styles.userName}>Nazwa Usera</div>
      {tabs.map(({ id, text }) => (
        <Tab
          key={`drawer_tab_${id}`}
          text={text}
          url={`/${id}`}
          selected={pathname.includes(id)}
          className={styles.category}
        />
      ))}
    </div>
  );
};

export default Drawer;
