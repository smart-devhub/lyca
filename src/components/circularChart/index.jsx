import React, { useEffect, useRef } from 'react';
import ReactECharts from 'echarts-for-react';

const Circularchart = ({ rawData }) => {
  const chartRef = useRef(null);

  const option = {
    tooltip: {
      show: false,
    },
    series: [
      {
        type: 'gauge',
        startAngle: 90,
        endAngle: -270,
        pointer: {
          show: false,
        },
        emphasis: {
          disabled: true, // Disable hover effects
        },
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
          itemStyle: {
            color: 'var(--orange)', // Color for the filled progress line
          },
        },
        axisLine: {
          lineStyle: {
            width: 15,
          },
        },
        splitLine: {
          show: false,
          distance: 0,
          length: 10,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
          distance: 50,
        },
        data: rawData,
        title: {
          fontSize: 14,
        },
        detail: {
          width: 30,
          height: 14,
          fontSize: 25,
          fontWeight: 800,
          color: 'var(--dark)',
          formatter: '{value}%',
        },
      },
    ],
  };

  useEffect(() => {
    if (!rawData?.length) return;
    if (chartRef.current) {
      chartRef.current.getEchartsInstance().resize();
    }
  }, [rawData]);

  return (
    <>
      <ReactECharts
        opts={{ renderer: 'svg' }}
        ref={chartRef}
        option={option}
        style={{ height: '290px', width: 'auto' }}
        onChartReady={() => {
          window.addEventListener('resize', () => {
            if (chartRef.current) {
              chartRef.current.getEchartsInstance().resize();
            }
          });
        }}
      />
      <h6 className='mb-[15px] text-center'>Security Deposit Consumption</h6>
    </>
  );
};

export default Circularchart;
