import React from 'react';
import ReactApexChart from 'react-apexcharts';

type props = React.ComponentProps<typeof ReactApexChart>;

const AnalysisChart = () => {
  const series: { data: { x: Date; y: number[] }[] }[] = [{ data: [] }];
  for (let i = 0; i < 50; i++) {
    series[0].data.push({
      x: new Date(2016 + i / 365, (i / 31) % 12, i % 28),
      y: [51.98 + i, 56.29 + i, 51.59 + i, 53.85 + i],
    });
  }
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
      height={'620px'}
      width={'1400px'}
      type="candlestick"
    />
  );
};

export default AnalysisChart;
