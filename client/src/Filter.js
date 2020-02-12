import React, { useState } from 'react';
import { AutoComplete, Input, Button, Icon } from 'antd';
import styled from 'styled-components';

import client from './client';

const AutoCompleteStyles = styled(AutoComplete)`
  width: 100%;
  padding-left: 5rem;
  padding-right: 5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const Filter = ({ onSelect }) => {
  const [dataSource, setDataSource] = useState([]);

  const onSearch = async (value) => {
    const res = await client.stocks(value);

    setDataSource(res.data.map(s => ({ value: s.symbol, text: s.company_name })));
  };

  return (
    <div>
      <AutoCompleteStyles dataSource={dataSource} onSearch={onSearch} onSelect={onSelect} placeholder="Company name">
        <Input
          suffix={(
            <Icon type="search" />
          )}
        />
      </AutoCompleteStyles>
    </div>
  );
}