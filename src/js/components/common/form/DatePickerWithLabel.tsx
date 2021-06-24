import React from 'react';
import { Controller, Control } from 'react-hook-form';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import classNames from 'classnames/bind';
import styles from './DatePickerWithLabel.module.css';

const cx = classNames.bind(styles);

type DatePickerProps = {
  name: string;
  control: Control;
  className?: string;
  label?: string;
};

const DatePickerWithLabel = ({
  name,
  className,
  control,
  label,
}: DatePickerProps) => {
  return (
    <div className={cx('wrapper', className)}>
      <label className={cx('label')}>{label}</label>

      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <ReactDatePicker
            wrapperClassName={cx('pickerWrapper')}
            className={cx('picker')}
            placeholderText="Select date"
            onChange={(e) => field.onChange(e)}
            selected={field.value}
          />
        )}
      />
    </div>
  );
};

DatePickerWithLabel.displayName = 'DatePickerWithLabel';

export default DatePickerWithLabel;
