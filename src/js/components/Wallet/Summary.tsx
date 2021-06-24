import React from 'react';
import { Card } from '../common';

export type SummaryProps = {
  assetValue: number;
  walletFunds: number;
  blockedFunds: number;
  className?: string;
};

import styles from './Summary.module.css';

const Summary = ({
  assetValue,
  walletFunds,
  blockedFunds,
  className,
}: SummaryProps) => {
  return (
    <Card className={className}>
      <h4>Podsumowanie</h4>
      <div className={styles.wrapper}>
        <div>Kapitalizacja aktywów</div>
        <div>{`${assetValue} zł`}</div>
        <div>Dostępna gotówka</div>
        <div>{`${walletFunds} zł`}</div>
        <div>Zablokowane środki</div>
        <div>{`${blockedFunds} zł`}</div>
        <div>Łącznie</div>
        <div>{`${assetValue + assetValue + blockedFunds} zł`}</div>
      </div>
    </Card>
  );
};

export default Summary;
