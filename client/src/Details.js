import React, { useState, useEffect } from 'react';

import client from './client';

export const Details = ({ symbol }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const loadData = async () => {
      const res = await client.stock(symbol)

      console.log(res.data);

      setData(res.data);
    };

    loadData();
  }, [symbol]);

  return (
    <div>
      <div>{data.symbol}</div>
      <div>{data.company_name}</div>
    </div>
  );
}