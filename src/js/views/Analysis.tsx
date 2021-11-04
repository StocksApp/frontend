import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Select from 'react-select';

import { AnalysisChart } from '../components/Analysis';
import { Card } from '../components/common';
import * as StocksAPI from '../API/stocks';

import styles from './Analysis.module.css';

const Analysis = () => {
  const { ticker, stock } = useParams<{
    ticker: string | undefined;
    stock: string | undefined;
  }>();

  const [markets, setMarkets] = useState<{ market: string; name: string }[]>(
    []
  );
  const [tickers, setTickers] = useState<string[]>([]);

  const [selectedMarket, setSelectedMarket] = useState<string | undefined>(
    stock
  );
  const [selectedTicker, setSelectedTicker] = useState(ticker);

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
        const response = await StocksAPI.getTickersForStock(
          selectedMarket,
          '20100401'
        );
        setTickers(response);
      } catch (e) {
        console.log(e);
      }
    };

    fetchDailyStocks();
  }, [selectedMarket]);

  // const [state, setstate] = useState(initialState);
  return (
    <Card className={styles.wrapper}>
      <Select
        options={markets.map((market) => ({
          label: market.name,
          value: market.market,
        }))}
        onChange={(market) => market && setSelectedMarket(market?.value)}
        className={styles.select}
      />
      <Select
        options={tickers.map((ticker) => ({
          label: ticker,
          value: ticker,
        }))}
        onChange={(ticker) => ticker && setSelectedTicker(ticker?.value)}
        className={styles.tickerSelect}
      />
      {selectedTicker && selectedMarket && (
        <AnalysisChart
          className={styles.chart}
          ticker={selectedTicker}
          stock={selectedMarket}
        />
      )}
    </Card>
  );
};

export default Analysis;
