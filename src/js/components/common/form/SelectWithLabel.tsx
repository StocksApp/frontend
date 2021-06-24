// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { CSSProperties } from 'react';
import Select from 'react-select';
import { Controller, Control } from 'react-hook-form';

import classNames from 'classnames/bind';
import styles from './SelectWithLabel.module.css';

const cx = classNames.bind(styles);

type SelectProps<ValueType> = {
  options: { label: string; value: ValueType }[];
  name: string;
  control: Control;
  className?: string;
  label?: string;
};

const customStyles = {
  menu: (provided: CSSProperties, state) => ({
    ...provided,
    width: state.selectProps.width,
    minWidth: '200px',
    width: '100%',
    color: state.selectProps.menuColor,
    padding: 19,
    fontSize: '20px',
  }),

  container: (provided: CSSProperties) => ({
    ...provided,
    minWidth: '200px',
    width: '60%',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '25px',
  }),

  control: (provided: CSSProperties) => ({
    ...provided,
    width: '100%',
    borderRadius: '25px',
    padding: '9px',
    fontSize: '20px',
  }),

  valueContainer: (provided: CSSProperties) => ({
    ...provided,
    textAlign: 'center',
    justifyContent: 'center',
  }),

  singleValue: (provided: CSSProperties, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};

const SelectWithLabel = <ValueType,>({
  options,
  name,
  className,
  control,
  label,
}: SelectProps<ValueType>) => {
  return (
    <div className={cx('wrapper', className)}>
      <label className={cx('label')}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select {...field} options={options} styles={customStyles} />
        )}
      ></Controller>
    </div>
  );
};

SelectWithLabel.displayName = 'SelectWithLabel';

export default SelectWithLabel;
