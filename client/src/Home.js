import React, { useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import { Details } from './Details';
import { Filter } from './Filter';

const HomeStyle = styled.div`
  position: absolute;
  left: 10%;
  width: 80%;

  @media (max-width: 50rem) {
    left: 0;
    width: 100%;
  } 
`

export const Home = () => {
  const { symbol } = useParams();
  const [selectedSymbol, setSelectedSymbol] = useState(null);

  return (
    <HomeStyle>
      {selectedSymbol && <Redirect to={`/${selectedSymbol}`} />}
      <Filter onSelect={setSelectedSymbol} />
      {symbol && <Details symbol={symbol} />}
    </HomeStyle>
  );
};