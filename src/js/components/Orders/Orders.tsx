import React from 'react';
import { Table } from '../common';

export type OrdersProps = {
  className?: string;
};

const names = {
  name: 'Nazwa',
  market: 'Rynek',
  type: 'Sprzedaż/Kupno',
  kind: 'Rodzaj',
  validFor: 'Ważne przez',
};

const Orders = ({ className }: OrdersProps) => {
  const { data, columns } = React.useMemo(() => {
    const data = [
      {
        name: 'CDProject',
        market: 'GPW',
        type: 'Sprzedaż',
        kind: 'LC',
        validFor: 120,
      },
      {
        name: 'Ojcowizna',
        market: 'GPW',
        type: 'Sprzedaż',
        kind: 'KC',
        validFor: 150,
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
export default Orders;
