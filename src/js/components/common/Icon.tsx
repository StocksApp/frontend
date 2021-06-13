import React from 'react';

import classNames from 'classnames/bind';
import styles from './Icon.module.css';

const cx = classNames.bind(styles);

export type IconProps = {
  className?: string;
  url: string;
  variant?: 'xs' | 's' | 'm' | 'l';
};

const Icon = ({ className, url, variant = 'm' }: IconProps) => (
  <div className={cx('avatar', `${variant}Size`, className)}>
    <img src={url} alt="icon" className={styles.photo} />
  </div>
);

export default Icon;
