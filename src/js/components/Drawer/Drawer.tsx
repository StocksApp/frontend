import React from 'react';

import { isAuthenticated } from '../../API/auth';
import { DropMenu } from '.';
import logo from './stocksAppIco.jpeg';

import styles from './Drawer.module.css';
import { tabs } from '../../constants';

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
