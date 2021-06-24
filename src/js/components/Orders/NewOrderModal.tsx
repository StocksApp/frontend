import React from 'react';
import { Card } from '../common';
import { useForm, Control, FieldValues } from 'react-hook-form';
import cx from 'classnames';

import styles from './NewOrderModal.module.css';
import { SelectWithLabel } from '../common/form';
import { SubmitButton, Input } from '../common/inputs';

type Inputs = {
  market: string;
  name: string;
  kind: 'BUY' | 'SELL';
  type: string;
  limit: number | undefined;
};

const NewOrderModal = () => {
  const { control, handleSubmit } = useForm<Inputs>();

  return (
    <Card className={styles.card}>
      <h2>Dodaj zlecenie</h2>
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className={styles.form}
      >
        <SelectWithLabel<string>
          options={[
            {
              label: `GPW`,
              value: `GPW`,
            },
          ]}
          label="Rynek"
          control={(control as unknown) as Control<FieldValues>}
          name={'market'}
          className={styles.child}
        />
        <SelectWithLabel<string>
          options={[
            {
              label: `CDProject`,
              value: `CDProject`,
            },
          ]}
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
          <Input name="limit" className={styles.input} />
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
