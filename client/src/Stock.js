import React from 'react';

export const Stock = ({symbol, company_name}) => {
    return (
        <div key={symbol}>
            <div>{symbol}</div>
            <div>{company_name}</div>
        </div>
    );
};