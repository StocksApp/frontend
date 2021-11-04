import React, { useState, useEffect } from 'react';
import { Card } from '../common';
import { useForm, Control, FieldValues } from 'react-hook-form';
import cx from 'classnames';

import styles from './NewOrderModal.module.css';
import { SelectWithLabel } from '../common/form';
import { SubmitButton, Input } from '../common/inputs';

import * as StocksAPI from '../../API/stocks';
import * as GameAPI from '../../API/game';

type Inputs = {
  market: { label: string; value: string };
  name: { label: string; value: string };
  quantity: number | undefined;
  type: { label: string; value: 'SELL' | 'BUY' };
  kind: { label: string; value: 'LC' | 'KC' };
  limit: number | undefined;
};

const NewOrderModal = ({ close: closeModal }: { close: () => void }) => {
  const { control, watch, handleSubmit, register } = useForm<Inputs>();

  const [markets, setMarkets] = useState<{ value: string; label: string }[]>(
    []
  );
  const [tickers, setTickers] = useState<{ value: string; label: string }[]>(
    []
  );

  const [isLimitDisabled, setLimitDisabled] = useState<boolean>(true);

  useEffect(() => {
    const fetchMarkets = async () => {
      try {
        const response = await StocksAPI.getStocks();
        setMarkets(
          response.map((item) => ({ label: item.name, value: item.ticker }))
        );
      } catch (e) {
        console.log(e);
      }
    };
    fetchMarkets();
  }, []);

  const watchSelectedMarket = watch('market');
  const watchSelectedKind = watch('kind');

  useEffect(() => {
    const isByAnyPrice = watchSelectedKind && watchSelectedKind.value === 'KC';
    setLimitDisabled(isByAnyPrice);
  }, [watchSelectedKind]);

  useEffect(() => {
    if (!watchSelectedMarket) return;
    const fetchTickers = async () => {
      try {
        const response = await StocksAPI.getTickersForStock(
          watchSelectedMarket.value,
          '20100401'
        );
        setTickers(response.map((item) => ({ label: item, value: item })));
      } catch (e) {
        console.log(e);
      }
    };

    fetchTickers();
  }, [watchSelectedMarket]);

  return (
    <Card className={styles.card}>
      <h2>Dodaj zlecenie</h2>
      <form
        onSubmit={handleSubmit(async (data) => {
          await GameAPI.createTransaction({
            ticker: data.name.value,
            stock: data.market.value,
            quantity: 10,
            isOrderToSell: data.type.value === 'SELL',
            dueDate: '20210823',
            actualDate: '20210402',
          });
          closeModal();
        })}
        className={styles.form}
      >
        <SelectWithLabel<string>
          options={markets}
          label="Rynek"
          control={(control as unknown) as Control<FieldValues>}
          name={'market'}
          className={styles.child}
        />
        <SelectWithLabel<string>
          options={tickers}
          label="Nazwa"
          control={(control as unknown) as Control<FieldValues>}
          name={'name'}
          className={styles.child}
        />
        <SelectWithLabel<string>
          options={[
            {
              label: `Sprzedaż`,
              value: `SELL`,
            },
            {
              label: `Kupno`,
              value: `BUY`,
            },
          ]}
          label="Kupno/Sprzedaż"
          control={(control as unknown) as Control<FieldValues>}
          name={'type'}
          className={styles.child}
        />
        <div className={cx(styles.child, styles.inputWrapper)}>
          <Input.Label>Ilość akcji</Input.Label>
          <Input className={styles.input} {...register('quantity')} />
        </div>
        <SelectWithLabel<string>
          options={[
            {
              label: `Limit Ceny`,
              value: `LC`,
            },
            {
              label: `Każda Cena`,
              value: `KC`,
            },
          ]}
          label="Rodzaj"
          control={(control as unknown) as Control<FieldValues>}
          name={'kind'}
          className={styles.child}
        />
        <div className={cx(styles.child, styles.inputWrapper)}>
          <Input.Label>Limit Ceny</Input.Label>
          <Input
            className={cx(styles.input, { [styles.disabled]: isLimitDisabled })}
            {...register('limit')}
            disabled={isLimitDisabled}
          />
        </div>
        <SubmitButton
          text={'Stwórz'}
          variant={'success'}
          className={styles.submitButton}
        />
      </form>
    </Card>
  );
};

export default NewOrderModal;
