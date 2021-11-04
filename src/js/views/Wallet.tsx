import React, { useState, useEffect, useMemo } from 'react';

import { Assets, Charts, Summary } from '../components/Wallet';
import { SearchBar } from '../components/common';
import * as GameAPI from '../API/game';
import { Wallet as WalletType } from '../models/interfaces';

import styles from './Wallet.module.css';

const Wallet = () => {
  const [wallet, setWallet] = useState<WalletType | undefined>();

  useEffect(() => {
    const fetchMarkets = async () => {
      try {
        const response = await GameAPI.getWallet();
        setWallet(response);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMarkets();
  }, []);

  const data = useMemo(() => {
    if (!wallet) return {};
    const data: { [key: string]: { [key: string]: number } } = {};
    wallet.securities.map((security) => {
      if (!data[security.stock]) data[security.stock] = {};
      data[security.stock] = {
        ...data[security.stock],
        [security.ticker]: security.quantity * security.actualPrice,
      };
    });
    return data;
  }, [wallet]);

  console.log(data);

  if (!wallet) return null;
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Posiadane aktywa</h2>
      <SearchBar className={styles.searchbar} />
      <Assets className={styles.table} data={wallet.securities} />
      <Charts className={styles.charts} data={data} />
      <Summary
        assetValue={wallet.securities.reduce(
          (prev, security) => prev + security.actualPrice * security.quantity,
          0
        )}
        walletFunds={wallet.totalMoney}
        blockedFunds={wallet.blockedMoney}
        className={styles.summary}
      />
    </div>
  );
};

export default Wallet;
