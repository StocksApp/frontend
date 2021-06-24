import React from 'react';
import { useForm, Control, FieldValues } from 'react-hook-form';
import { SubmitButton } from '../common/inputs';
import { SelectWithLabel, DatePickerWithLabel } from '../common/form';

import styles from './SingleGameForm.module.css';

type Inputs = {
  from: Date;
  to: Date;
  markets: string;
  duration: number;
  wallet: number;
};

const SingleGameForm = () => {
  const { control, handleSubmit } = useForm<Inputs>();

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
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
          options={[100, 200].map((item) => ({
            label: `${item}zł`,
            value: item,
          }))}
          label="Wielkość portfela"
          control={(control as unknown) as Control<FieldValues>}
          name={'wallet'}
          className={styles.child}
        />
        <SelectWithLabel<string>
          options={['GPW'].map((item) => ({ label: item, value: item }))}
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
