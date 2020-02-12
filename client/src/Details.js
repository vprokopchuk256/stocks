import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js';
import moment from 'moment';

import client from './client';
import { StockDescription } from './StockDescription';

const HistoryChart = ({ history }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      new Chart(document.getElementById('myChart').getContext('2d'), {
        type: 'line',
        title: {
          display: false
        },
        data: {
            labels: history.map(hi => moment(hi.date).format('D MMM')),
            datasets: [{
                data: history.map(hi => hi.value),
                fill: 'none',
                lineTension: 0.5,
                pointRadius: 2,
                borderWidth: 2
            }]
        },
        options: {
            legend: {
              display: false,
            },
            scales: {
                xAxes: [{
                    position: 'bottom',
                    gridLines: {
                      color: '#E3E4E6',
                      lineWidth: 1,
                      drawTicks: false,
                    },
                    ticks: {
                      fontSize: '14',
                      fontColor: '#616161',
                      padding: 5, 
                    }
                }]
            }
        }
      });
    };
  }, [history]);

  return (
    <canvas id='myChart' ref={canvasRef} />
  )
};

export const Details = ({ symbol }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const res = await client.stock(symbol)

      setData(res.data);
    };

    loadData();
  }, [symbol]);

  return (
    data && <div>
      <StockDescription symbol={data.symbol} companyName={data.company_name} />
      <HistoryChart history={data.history} />
    </div>
  );
}