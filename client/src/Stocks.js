import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Stock } from './Stock';

export const Stocks = ({ q }) => {
  const [stocks, seStocks] = useState([]);

  useEffect(() => {
      const loadData = async () => {
        const res = await axios(`http://localhost:3000/stocks?q=${q}&limit=10`);

        console.log(res.data);

        seStocks(res.data);
      };

      loadData();
  }, [q]);

  const renderStocks = () => {
    return stocks.map(Stock);
  }

  return (
    <div>{renderStocks()}</div>
  );
};