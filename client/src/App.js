import React, { useState } from 'react';

import './App.css';
import { Stocks } from './Stocks'
import { Filter } from './Filter'

export default () => {
  const [q, setQ] = useState('');

  return (
    <div className="App">
        <Filter onChange={setQ} />
        <Stocks q={q} />
    </div>
  );
}