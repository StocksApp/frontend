import React, { useState } from 'react';
import { GoTriangleDown } from 'react-icons/go';
import { GoTriangleRight } from 'react-icons/go';

import classNames from 'classnames/bind';
import styles from './DropMenu.module.css';
import { Link, useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

type Item = {
  id: string;
  text: string;
  url: string;
};

type DropMenuProps = Item & {
  items: Item[];
  className?: string;
};

const DropMenu = ({ text, url, items, className }: DropMenuProps) => {
  const [isOpen, setOpen] = useState(false);
  const { pathname } = useLocation<{ pathname: string }>();

  return (
    <div className={cx('wrapper')}>
      <div
        className={cx('tab', 'withMarker', className)}
        onClick={() => setOpen((open) => !open)}
      >
        {isOpen ? <GoTriangleDown /> : <GoTriangleRight />}
        <div>{text}</div>
      </div>
      {isOpen &&
        items.map((item) => (
          <Link
            className={cx('tab', 'item', {
              selected: pathname.includes(`/${url}/${item.url}`),
            })}
            key={item.id}
            to={`/${url}/${item.url}`}
          >
            {item.text}
          </Link>
        ))}
    </div>
  );
};

export default DropMenu;
