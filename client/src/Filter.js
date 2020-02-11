import React, { useState } from 'react';
import { AutoComplete } from 'antd';

import client from './client';

export const Filter = ({ onSelect }) => {
  const [dataSource, setDataSource] = useState([]);

  const onSearch = async (value) => {
    const res = await client.stocks(value);

    setDataSource(res.data.map(s => ({ value: s.symbol, text: s.company_name })));
  };

  return <AutoComplete dataSource={dataSource} onSearch={onSearch} onSelect={onSelect} />;
}