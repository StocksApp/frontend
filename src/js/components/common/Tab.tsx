import React from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Tab.module.css';

const cx = classNames.bind(styles);

type TabProps = {
  text: string;
  url: string;
  selected: boolean;
  onClick?: () => void;
  className?: string;
};

const Tab = ({ text, url, selected, onClick, className }: TabProps) => (
  <Link
    to={url}
    onClick={onClick}
    className={cx('tab', { selected: selected }, className)}
  >
    {text}
  </Link>
);

export default Tab;
