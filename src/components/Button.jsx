import React from 'react';

const Button = ({ type, text, className, disabled}) =>
    <button
        type={type}
        className={className}
        disabled={disabled}>
        Submit
    </button>

export { Button }
