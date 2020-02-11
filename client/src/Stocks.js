import React, { useState, useEffect } from 'react';

import client from './client';
import { Stock } from './Stock';

export const Stocks = ({ q }) => {
  const [stocks, seStocks] = useState([]);

  useEffect(() => {
      const loadData = async () => {
        const res = await client.stocks(q)

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