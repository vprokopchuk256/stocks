import React, { useState } from 'react';

import { Filter } from './Filter';
import { Stocks } from './Stocks';

export const Main = () => {
  const [q, setQ] = useState('');

  return (
    <div>
      <Filter onChange={setQ} />
      <Stocks q={q} />
    </div>
  );
};