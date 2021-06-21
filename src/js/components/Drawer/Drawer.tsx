import React from 'react';
import { useLocation } from 'react-router';

import { isAuthenticated } from '../../API/auth';
import { DropMenu } from '.';
import logo from './stocksAppIco.jpeg';

import styles from './Drawer.module.css';

const tabs = [
  {
    id: 'game',
    text: 'Rozgrywka',
    url: 'game',
    items: [
      { id: 'single', url: 'game', text: 'Jednoosobowa' },
      { id: 'history', url: 'history', text: 'Historia' },
    ],
  },
  {
    id: 'wallet',
    text: 'Portfel',
    url: 'wallet',
    items: [
      { id: 'summary', url: 'summary', text: 'Podsumowanie' },
      { id: 'history', url: 'history', text: 'Historia transakcji' },
    ],
  },
  {
    id: 'order',
    text: 'Zlecenie',
    url: 'order',
    items: [
      { id: 'current', url: 'current', text: 'Obecne zlecenia' },
      { id: 'history', url: 'history', text: 'Historia zleceń' },
    ],
  },
];

const Drawer = () => {
  if (!isAuthenticated()) return null;
  return (
    <div className={styles.drawer}>
      <img src={logo} className={styles.icon} />
      <div className={styles.userName}>Nazwa Usera</div>
      {tabs.map((menuProps) => (
        <DropMenu key={menuProps.id} {...menuProps} />
      ))}
    </div>
  );
};

export default Drawer;
