import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';

import * as GameAPI from '../../API/game';

import styles from './NextTurn.module.css';

const NextTurn = () => {
  const handleClick = () => GameAPI.nextTurn();
  return <BsFillPlayFill onClick={handleClick} className={styles.button} />;
};

export default NextTurn;
