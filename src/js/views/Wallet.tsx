import React from 'react';

import { Assets, Charts, Summary } from '../components/Wallet';
import { SearchBar } from '../components/common';

import styles from './Wallet.module.css';

const data = {
  GPW: {
    CDProject: 330,
    Ojcowizna: 120,
  },
};

const Wallet = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Posiadane aktywa</h2>
      <SearchBar className={styles.searchbar} />
      <Assets className={styles.table} />
      <Charts className={styles.charts} data={data} />
      <Summary
        assetValue={100}
        walletFunds={200}
        blockedFunds={100}
        className={styles.summary}
      />
    </div>
  );
};

export default Wallet;
