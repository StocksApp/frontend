import React, { useState, useEffect, useMemo } from 'react';
import Select from 'react-select';

import { Table, SearchBar } from '../components/common';
import * as StocksAPI from '../API/stocks';
import { DailyAsset } from '../models/interfaces';

const names = {
  name: 'Nazwa',
  // change: 'Zmiana %',
  open: 'Cena Otwarcia',
  low: 'Najniższa Cena',
  high: 'Najwyższa Cena',
  close: 'Cena zamknięcia',
  vol: 'Wolumen',
};

import styles from './Stocks.module.css';

const Stocks = () => {
  const [markets, setMarkets] = useState<{ market: string; name: string }[]>(
    []
  );
  const [selectedMarket, setSelectedMarket] = useState<string>();
  const [tableData, setTableData] = useState<DailyAsset[]>([]);

  useEffect(() => {
    const fetchMarkets = async () => {
      try {
        const response = await StocksAPI.getStocks();
        setMarkets(
          response.map((item) => ({ name: item.name, market: item.ticker }))
        );
      } catch (e) {
        console.log(e);
      }
    };
    fetchMarkets();
  }, []);
  useEffect(() => {
    if (!selectedMarket) return;
    const fetchDailyStocks = async () => {
      try {
        const response = await StocksAPI.getStocksForDay(
          selectedMarket,
          '20100401'
        );
        setTableData(response);
      } catch (e) {
        console.log(e);
      }
    };

    fetchDailyStocks();
  }, [selectedMarket]);

  const { data, columns } = useMemo(() => {
    const columns = Object.keys(names).map((key) => ({
      Header: names[key as keyof typeof names],
      accessor: key as keyof typeof names,
    }));

    return { data: tableData, columns };
  }, [tableData]);

  if (markets.length === 0) return <div>Loading</div>;
  return (
    <div className={styles.wrapper}>
      <Select
        options={markets.map((market) => ({
          label: market.name,
          value: market.market,
        }))}
        onChange={(market) => market && setSelectedMarket(market?.value)}
        className={styles.select}
      />
      <SearchBar className={styles.searchbar} />
      <Table
        data={data}
        columns={columns}
        className={styles.table}
        withLink={selectedMarket}
      />
    </div>
  );
};

export default Stocks;
