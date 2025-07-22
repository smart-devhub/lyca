import { useEffect, useRef } from 'react';
// @import dependencies
import ReactECharts from 'echarts-for-react';
// @import styles
import styles from './index.module.scss';

const DoubleLineChart = ({
  graphHeight,
  rawData1,
  rawData2,
  xAxisData,
  isBottom = false,
  rotateLabels = 30,
  xAxisMargin = 0,
  chartType = 'orange',
  tooltipName1 = 'Dataset 1',
  tooltipName2 = 'Dataset 2',
}) => {
  const chartRef = useRef(null);
  const commonProperties = {
    type: 'line',
    smooth: true,
    symbol: 'none',
    emphasis: {
      disabled: true,
    },
  };

  const orangeGradient = [
    { offset: 0, color: 'rgba(241, 124, 32, 0.23)' },
    { offset: 1, color: 'rgba(241, 124, 32, 0)' },
  ];

  const oliveGreenGradient = [
    { offset: 0, color: 'rgba(154, 184, 61, 0.23)' },
    { offset: 1, color: 'rgba(154, 184, 61, 0)' },
  ];

  const gradient = {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: chartType == 'orange' ? orangeGradient : oliveGreenGradient,
    global: false,
  };

  const color = chartType === 'orange' ? 'var(--orange)' : 'var(--oliveGreen)';

  const option = {
    grid: {
      top: '2%',
      left: '1.5%',
      right: '7%',
      bottom: '3%',
      containLabel: true,
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: xAxisData,
      boundaryGap: false,
      axisLine: { show: false },
      axisTick: false,

      axisLabel: {
        interval: 0,
        rotate: rotateLabels,
        margin: xAxisMargin,
        textStyle: {
          fontSize: 12,
          color: '#8B8B8B',
          align: 'center',
          padding: [9, 0, 0, 0],
        },
      },
    },
    yAxis: {
      type: 'value',
      splitLine: { show: false },
      axisLabel: {
        formatter: value => (Number.isInteger(value) ? value : ''), // Hide decimals
        textStyle: {
          fontSize: 14,
          color: '#8B8B8B',
        },
      },
    },
    series: [
      {
        ...commonProperties,
        name: tooltipName1,
        lineStyle: {
          color: color,
          width: 2,
        },
        itemStyle: {
          color: color, // Circle color
        },
        areaStyle: {
          color: gradient,
        },
        data: rawData1,
      },
      {
        ...(rawData2
          ? {
              ...commonProperties,
              name: tooltipName2,
              lineStyle: { color: 'var(--oliveGreen)', width: 2 },
              data: rawData2,
              itemStyle: {
                color: 'var(--oliveGreen)', // Circle color
              },
            }
          : {}),
      },
    ],
  };

  useEffect(() => {
    if (!rawData1?.length && !rawData2?.length) return;
    if (chartRef.current) {
      chartRef.current.getEchartsInstance().resize();
    }
  }, [rawData1, rawData2]);

  return (
    <div className={`${isBottom ? styles.chartWrapper : ''}`}>
      <ReactECharts
        opts={{ renderer: 'svg' }}
        ref={chartRef}
        option={option}
        style={{ height: graphHeight, width: 'auto' }}
        onChartReady={() => {
          window.addEventListener('resize', () => {
            if (chartRef.current) {
              chartRef.current.getEchartsInstance().resize();
            }
          });
        }}
      />
    </div>
  );
};

export default DoubleLineChart;
