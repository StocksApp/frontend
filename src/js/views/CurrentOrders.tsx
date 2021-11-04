import React from 'react';
import { SubmitButton } from '../components/common/inputs';
import Popup from 'reactjs-popup';

import styles from './CurrentOrders.module.css';
import { Orders, NewOrderModal } from '../components/Orders';

const CurrentOrders = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Obecne zlecenia</h2>
      <Popup
        trigger={
          <div>
            <SubmitButton className={styles.button} text="Dodaj" />
          </div>
        }
        modal
      >
        {(close: () => void) => <NewOrderModal close={close} />}
      </Popup>
      <Orders className={styles.table} />
    </div>
  );
};

export default CurrentOrders;
