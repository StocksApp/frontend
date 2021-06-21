import React from 'react';

import classNames from 'classnames/bind';
import styles from './CentralWrapper.module.css';

const cx = classNames.bind(styles);

function CentralWrapper({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cx('wrapper', className)} {...props} />;
}

export default CentralWrapper;
