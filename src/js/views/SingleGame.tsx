import React from 'react';

import styles from './SingleGame.module.css';
import { SingleGameForm } from '../components/SingleGame';

const SingleGame = () => {
  return (
    <>
      <h2 className={styles.header}>Stwórz rozgrywkę jednoosobową</h2>
      <SingleGameForm />
    </>
  );
};

export default SingleGame;
