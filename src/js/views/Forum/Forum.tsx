import React from 'react';
import { BiSad } from 'react-icons/bi';

import styles from './Forum.module.css';

const Forum = () => (
  <div className={styles.wrapper}>
    <h1>Tu będzie forum</h1>
    <BiSad className={styles.icon} />
  </div>
);

export default Forum;
