import React, { useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';

import { Details } from './Details';
import { Filter } from './Filter';

export const Home = () => {
  const { symbol } = useParams();
  const [selectedSymbol, setSelectedSymbol] = useState(null);

  return (
    <div>
      {selectedSymbol && <Redirect to={`/${selectedSymbol}`} />}
      <Filter onSelect={setSelectedSymbol} />
      {symbol && <Details symbol={symbol} />}
    </div>
  );
};