import React, { forwardRef } from 'react';
import cl from './Input.module.css';

const Input = forwardRef((props, ref) => {
    return <input ref={ref} className={cl.Input} {...props} />;
});

Input.displayName = 'Input';
export default Input;
