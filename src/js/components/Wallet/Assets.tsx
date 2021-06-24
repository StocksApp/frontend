import React from 'react';
import { Table } from '../common';

export type AssetsProps = {
  className?: string;
};

const names = {
  name: 'Nazwa',
  market: 'Rynek',
  exchangeRate: 'Kurs',
  quantity: 'Ilość',
  purchasePrice: 'Cena zakupu',
  yield: 'Stopa zwrotu',
  profit: 'Zysk',
};

const Assets = ({ className }: AssetsProps) => {
  const { data, columns } = React.useMemo(() => {
    const data = [
      {
        name: 'CDProject',
        market: 'GPW',
        exchangeRate: 1.8,
        quantity: 100,
        purchasePrice: 1.76,
        yield: 22,
        profit: 400,
      },
      {
        name: 'Ojcowizna',
        market: 'GPW',
        exchangeRate: 2.8,
        quantity: 100,
        purchasePrice: 1.76,
        yield: 222,
        profit: 4000,
      },
    ];

    const columns = Object.keys(data[0]).map((key) => ({
      Header: names[key as keyof typeof names],
      accessor: key as keyof typeof names,
    }));

    return { data, columns };
  }, []);
  return <Table data={data} columns={columns} className={className} />;
};

export default Assets;
