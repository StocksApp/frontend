import React, { useEffect, useState } from 'react';
import { useForm, Control, FieldValues } from 'react-hook-form';
import { SubmitButton } from '../common/inputs';
import { SelectWithLabel, DatePickerWithLabel } from '../common/form';

import * as GameAPI from '../../API/game';
import * as StocksAPI from '../../API/stocks';

import styles from './SingleGameForm.module.css';

type Inputs = {
  from: Date;
  to: Date;
  markets: { label: string; value: string };
  duration: { label: string; value: number };
  wallet: { label: string; value: number };
};

const SingleGameForm = () => {
  const { control, handleSubmit } = useForm<Inputs>();
  const [markets, setMarkets] = useState<{ name: string; market: string }[]>(
    []
  );

  useEffect(() => {
    const fetchMarkets = async () => {
      try {
        const response = await StocksAPI.getStocks();
        setMarkets(
          response.map((item) => ({ name: item.name, market: item.ticker }))
        );
      } catch (e) {
        console.log(e);
      }
    };
    fetchMarkets();
  }, []);

  return (
    <form
      onSubmit={handleSubmit((data) => {
        GameAPI.createGame({
          ...data,
          markets: data.markets.value,
          wallet: data.wallet.value,
          duration: data.duration.value,
        });
      })}
      className={styles.form}
    >
      <div className={styles.formWrapper}>
        <DatePickerWithLabel
          control={(control as unknown) as Control<FieldValues>}
          name={'from'}
          label="Początek okresu"
          className={styles.child}
        />
        <DatePickerWithLabel
          control={(control as unknown) as Control<FieldValues>}
          name={'to'}
          label="Koniec okresu"
          className={styles.child}
        />
        <SelectWithLabel<number>
          options={[100000, 150000, 200000].map((item) => ({
            label: `${item}zł`,
            value: item,
          }))}
          label="Wielkość portfela"
          control={(control as unknown) as Control<FieldValues>}
          name={'wallet'}
          className={styles.child}
        />
        <SelectWithLabel<string>
          options={markets.map((item) => ({
            label: item.name,
            value: item.market,
          }))}
          control={(control as unknown) as Control<FieldValues>}
          name={'markets'}
          label="Rynki"
          className={styles.child}
        />
        <SelectWithLabel<number>
          options={[2, 3, 4, 5].map((item) => ({
            label: `${item} dni`,
            value: item,
          }))}
          control={(control as unknown) as Control<FieldValues>}
          name={'duration'}
          label="Długość tury"
          className={styles.child}
        />
      </div>
      <SubmitButton
        text={'Stwórz'}
        variant={'success'}
        className={styles.submitButton}
      />
    </form>
  );
};

export default SingleGameForm;
