import React from 'react';
import cl from './Select.module.css';

const Select = ({ value, onChange, defaultValue, options }) => {
    return (
        <select
            className={cl.mySelect}
            value={value}
            onChange={(event) => onChange(event.target.value)}
        >
            <option disabled value=''>
                {defaultValue}
            </option>
            {options.map((option) => (
                <option
                    key={option.value}
                    value={option.value}
                >
                    {option.name}
                </option>
            ))}
        </select>
    );
};

export default Select;
