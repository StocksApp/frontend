import React, { InputHTMLAttributes, LabelHTMLAttributes } from 'react';

import classNames from 'classnames/bind';
import styles from './Input.module.css';

const cx = classNames.bind(styles);

const Input = ({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => (
  <input className={cx('input', className)} {...props}></input>
);

const Label = ({
  className,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) => (
  <label className={cx('label', className)} {...props} />
);

Input.Label = Label;

export default Input;
