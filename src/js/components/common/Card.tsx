import React from 'react';

import classNames from 'classnames/bind';
import styles from './Card.module.css';

const cx = classNames.bind(styles);

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

const Card = ({ className, ...props }: CardProps) => {
  return <div className={cx('card', className)} {...props}></div>;
};

export default Card;
