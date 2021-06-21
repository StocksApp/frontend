import React from 'react';

import classNames from 'classnames/bind';
import styles from './SubmitButton.module.css';

const cx = classNames.bind(styles);

type SubmitButtonProps = {
  text: string;
  variant?: 'success' | 'error' | 'default';
  className?: string;
};

const SubmitButton = ({
  text,
  variant = 'default',
  className,
}: SubmitButtonProps) => (
  <input
    type="submit"
    value={text}
    className={cx('button', variant, className)}
  />
);

export default SubmitButton;
