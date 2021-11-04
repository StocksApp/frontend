import React, { useState, useEffect, useMemo } from 'react';
import ReactApexChart from 'react-apexcharts';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import * as StocksAPI from '../../API/stocks';
import { DailyAsset } from '../../models/interfaces';

dayjs.extend(customParseFormat);

type props = React.ComponentProps<typeof ReactApexChart>;

const AnalysisChart = ({
  className,
  ticker,
  stock,
}: {
  className: string;
  ticker: string;
  stock: string;
}) => {
  const [assets, setAssets] = useState<DailyAsset[]>([]);

  useEffect(() => {
    if (!ticker) return;
    const fetchTickerStocks = async () => {
      try {
        const response = await StocksAPI.getTickerStocksRange(
          stock,
          ticker,
          '20100301',
          '20100501'
        );
        setAssets(response);
      } catch (e) {
        console.log(e);
      }
    };

    fetchTickerStocks();
  }, [ticker]);

  const series = useMemo(() => {
    const data = assets.map((asset) => ({
      x: dayjs(asset.name, 'YYYYMMDD').toDate(),
      y: [asset.open, asset.high, asset.low, asset.close],
    }));
    return [{ data: data }];
  }, [assets]);
  const options = {
    chart: {
      type: 'candlestick',
      height: 350,
    },
    title: {
      text: 'CandleStick Chart',
      align: 'left',
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  } as props['options'];
  return (
    <ReactApexChart
      options={options}
      series={series}
      height={'580px'}
      type="candlestick"
      className={className}
    />
  );
};

export default AnalysisChart;
