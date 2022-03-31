import React from 'react';
import cl from './Button.module.css';
import clInv from './ButtonInv.module.css';

const Button = ({ children, btnType, ...props }) => {
    btnType === 'inverse'
        ? btnType = clInv.Btn
        : btnType = cl.Btn;

    return (
        <button {...props} className={btnType}>
            {children}
        </button>
    );
};

export default Button;
