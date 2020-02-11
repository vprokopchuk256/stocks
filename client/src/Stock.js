import React from 'react';

import {
  Link
} from "react-router-dom";

export const Stock = ({symbol, company_name}) => {
    return (
        <div key={symbol}>
            <Link to={symbol}>{symbol}</Link>
            <div>{company_name}</div>
        </div>
    );
};