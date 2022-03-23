import React from 'react';
import cl from './Button.module.css';
import clInv from './ButtonInv.module.css';

const Button = ({ children, classes = cl.Btn, ...props }) => {
    if (classes === 'inverse') {
        classes = clInv.Btn;
    }
    return (
        <button {...props} className={classes}>
            {children}
        </button>
    );
};

export default Button;
