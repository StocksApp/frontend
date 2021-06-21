import React from 'react';
import { BiSad } from 'react-icons/bi';

import styles from './Forum.module.css';
import { CentralWrapper } from '../components/common';

const Forum = () => (
  <CentralWrapper>
    <h1>Tu będzie forum</h1>
    <BiSad className={styles.icon} />
  </CentralWrapper>
);

export default Forum;
