import React from 'react';

import classNames from 'classnames/bind';
import styles from './SubmitButton.module.css';

const cx = classNames.bind(styles);

type SubmitButtonProps = {
  text: string;
  variant?: 'success' | 'error' | 'default';
  className?: string;
  onClick?: () => void;
};

const SubmitButton = ({
  text,
  variant = 'default',
  className,
  onClick,
}: SubmitButtonProps) => (
  <input
    type="submit"
    value={text}
    className={cx('button', variant, className)}
    onClick={onClick}
  />
);

export default SubmitButton;
