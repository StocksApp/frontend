import axios from 'axios';
import ApiUrls from './urls';
import { DailyAsset } from '../models/interfaces';

export type MarketList = {
  [key: string]: string;
};

export const getStocks = async (): Promise<
  { ticker: string; name: string }[]
> => {
  try {
    const list = await axios.get<MarketList>(ApiUrls.stocks.get);
    return Object.entries(list.data).map(([key, value]) => ({
      ticker: key,
      name: value,
    }));
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const getTickersForStock = async (
  stock: string,
  date: string
): Promise<string[]> => {
  try {
    const list = await axios.get<string[]>(
      ApiUrls.stocks.tickersForDay(stock, date)
    );
    return list.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const getStocksForDay = async (
  stock: string,
  date: string
): Promise<DailyAsset[]> => {
  try {
    const list = await axios.get<{
      [key: string]: Omit<DailyAsset, 'name'>;
    }>(ApiUrls.stocks.stocksForDay(stock, date));
    return Object.entries(list.data).map(([key, value]) => ({
      name: key,
      ...value,
    }));
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const getTickerStocksRange = async (
  stock: string,
  ticker: string,
  from: string,
  to: string
): Promise<DailyAsset[]> => {
  try {
    const list = await axios.get<{
      [key: string]: Omit<DailyAsset, 'name'>;
    }>(ApiUrls.stocks.tickerStocksRange(stock, ticker, from, to));
    return Object.entries(list.data).map(([key, value]) => ({
      name: key,
      ...value,
    }));
  } catch (e) {
    console.log(e);
    throw e;
  }
};
