import React from 'react';

export const Filter = ({ q, onChange }) => {  
    return (
        <input type="text" value={q} onChange={(e) => onChange(e.target.value)} />
    );
};
