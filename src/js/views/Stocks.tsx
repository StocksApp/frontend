import React from 'react';
import { CentralWrapper, Table } from '../components/common';

const names = {
  name: 'Nazwa',
  change: 'Zmiana %',
  lastWeek: 'Ostatni tydzień',
  openValue: 'Cena Otwarcia',
  lowestValue: 'Najniższa Cena',
  highestValue: 'Najwyższa Cena',
  closeValue: 'Cena zamknięcia',
  quantity: 'Wolumen',
};

const Stocks = () => {
  const { data, columns } = React.useMemo(() => {
    const data = [
      {
        name: 'CDProject',
        change: '-0.6%',
        lastWeek: '',
        openValue: 120.22,
        lowestValue: 100.22,
        highestValue: 150.22,
        closeValue: 140.22,
        quantity: 10006,
      },
      {
        name: 'Ojcowizna',
        change: '20%',
        lastWeek: '',
        openValue: 220.22,
        lowestValue: 220.22,
        highestValue: 650.22,
        closeValue: 520.22,
        quantity: 50006,
      },
    ];

    const columns = Object.keys(data[0]).map((key) => ({
      Header: names[key as keyof typeof names],
      accessor: key as keyof typeof names,
    }));

    return { data, columns };
  }, []);
  console.log(data, columns);
  return (
    <CentralWrapper>
      <Table data={data} columns={columns} />
    </CentralWrapper>
  );
};

export default Stocks;
