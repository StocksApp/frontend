import React from 'react';

import classNames from 'classnames/bind';
import styles from './Charts.module.css';
import ReactApexChart from 'react-apexcharts';
import { Card } from '../common';

const cx = classNames.bind(styles);

type props = React.ComponentProps<typeof ReactApexChart>;

export type ChartsProps = {
  data: {
    [key: string]: Record<string, number>;
  };
  className?: string;
};

const Charts = ({ data, className }: ChartsProps) => {
  const createPieChart = (
    title: string,
    labels: string[],
    series: number[]
  ) => {
    const options = {
      chart: {
        type: 'pie',
      },
      title: {
        text: title,
        align: 'left',
      },
      labels,
    } as props['options'];
    return (
      <ReactApexChart
        options={options}
        series={series}
        type="pie"
        height="200px"
      />
    );
  };

  return (
    <div className={cx('wrapper', className)}>
      <Card>
        {createPieChart(
          'Udział poszczególnych rynków',
          Object.keys(data),
          Object.keys(data).map((market) =>
            Object.values(data[market]).reduce(
              (currentSum, val) => currentSum + val,
              0
            )
          )
        )}
      </Card>
      {Object.keys(data).map((market) => {
        return (
          <Card key={`market_${market}`}>
            {createPieChart(
              market,
              Object.keys(data[market]),
              Object.values(data[market])
            )}
          </Card>
        );
      })}
    </div>
  );
};

export default Charts;
