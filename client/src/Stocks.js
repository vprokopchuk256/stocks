import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Stocks = () => {
  const [stocks, seStocks] = useState([]);

  useEffect(() => {
      const loadData = async () => {
        const res = await axios('http://localhost:3000/stocks');

        console.log(res.data);

        seStocks(res.data);
      };

      loadData();
  }, []);

  const renderStocks = () => {
    return stocks.map(stock => <div key={stock.symbol}>{stock.symbol}</div>)
  }

  return (
    <div>{renderStocks()}</div>
  );
};