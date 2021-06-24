import React from 'react';
import { BsSearch } from 'react-icons/bs';

import classNames from 'classnames/bind';
import styles from './SearchBar.module.css';

const cx = classNames.bind(styles);

export type SearchBarProps = {
  className?: string;
};

const SearchBar = ({ className }: SearchBarProps) => {
  return (
    <div className={cx('wrapper', className)}>
      <BsSearch className={cx('searchIcon')} />
      <input className={cx('input')} />
    </div>
  );
};

export default SearchBar;
