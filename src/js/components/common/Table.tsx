import React from 'react';
import { useTable } from 'react-table';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Table.module.css';

const cx = classNames.bind(styles);

export type TableProps<D extends Record<string, unknown>> = {
  data: D[];
  columns: { Header: string; accessor: keyof D }[];
  className?: string;
};

const Table = <D extends Record<string, unknown>>({
  data,
  columns,
  className,
}: TableProps<D>) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()} className={cx('table', className)}>
      <thead className={cx('header')}>
        {headerGroups.map((headerGroup) => (
          // key is already included in headerGroupProps
          // eslint-disable-next-line react/jsx-key
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              // eslint-disable-next-line react/jsx-key
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody className={cx('body')} {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            // eslint-disable-next-line react/jsx-key
            <tr {...row.getRowProps()}>
              {row.cells.map((cell, index) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <td {...cell.getCellProps()} className={cx('cell')}>
                    {index === 0 ? (
                      <Link to={`/analysis/${cell.value}`}>
                        {cell.render('Cell')}
                      </Link>
                    ) : (
                      cell.render('Cell')
                    )}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Table;
