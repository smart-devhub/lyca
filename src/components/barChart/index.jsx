import React, { useEffect, useRef } from 'react';
import ReactECharts from 'echarts-for-react';

const BarChart = ({ data = [] }) => {
  const chartRef = useRef(null);
  const packageNames = data?.map(item => item?.packageName);
  const differenceInDays = data?.map(item => item?.differenceInDays);

  const option = {
    grid: {
      right: '0%',
    },
    xAxis: {
      type: 'category',
      data: packageNames,
      axisLabel: {
        interval: 0,
        rotate: 30,
      },
      axisLine: {
        show: false,
        interval: 0,
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      type: 'value',
      axisLine: {
        onZero: false,
      },
    },
    series: [
      {
        data: differenceInDays,
        barWidth: '15px',
        type: 'bar',
        itemStyle: {
          borderRadius: [33, 33, 0, 0], // Top-left and top-right corners rounded
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: '#F58220' }, // Gradient start color
              { offset: 1, color: '#F5822000' }, // Gradient end color
            ],
          },
        },
      },
    ],
  };

  useEffect(() => {
    if (!data?.length) return;
    if (chartRef.current) {
      chartRef.current.getEchartsInstance().resize();
    }
  }, [data]);

  return (
    <ReactECharts
      opts={{ renderer: 'svg' }}
      ref={chartRef}
      option={option}
      style={{ height: '507px', width: 'auto' }}
      onChartReady={() => {
        window.addEventListener('resize', () => {
          if (chartRef.current) {
            chartRef.current.getEchartsInstance().resize();
          }
        });
      }}
    />
  );
};

export default BarChart;
