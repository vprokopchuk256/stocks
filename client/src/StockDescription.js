import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd'

const StockDescriptionStyles = styled.div`
  padding-left: 2.5rem;
  padding-bottom: 1rem;
`;

const IconStyle = styled(Icon)`
  padding-right: 0.5rem;
`

const Desc = ({type, text}) => (
  <div>
    <span>
      <IconStyle type={type} />
      {text}
    </span>
  </div>
);

export const StockDescription = ({ symbol, companyName }) => (
  <StockDescriptionStyles>
    <Desc type="stock" text={symbol} />
    <Desc type="bank" text={companyName} />
  </StockDescriptionStyles>
);
