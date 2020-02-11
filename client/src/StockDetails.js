import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import client from './client';

export const StockDetails = () => {
  const [data, setData] = useState({});

  const { symbol } = useParams();

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
        <Link to='/'>Back</Link>
    </div>
  );
};