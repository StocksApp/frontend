import React from 'react';
import { Table } from '../common';
import { Asset } from '../../models/interfaces';

export type AssetsProps = {
  className?: string;
  data: Asset[];
};

const names = {
  ticker: 'Nazwa',
  stock: 'Rynek',
  actualPrice: 'Kurs',
  quantity: 'Ilość',
};

const Assets = ({ className, data }: AssetsProps) => {
  const columns = Object.keys(names).map((key) => ({
    Header: names[key as keyof typeof names],
    accessor: key as keyof typeof names,
  }));
  return <Table data={data} columns={columns} className={className} />;
};

export default Assets;
