import React from 'react';

import './FormControl.scss';

const FormControl = ({
    name,
    placeholder,
    label,
    type,
    onChangeHandler,
    onBlurHandler,
    errorMessage,
}) => (
    <div className="form-control">
        <label
            htmlFor={name}
            className="form-control-label"
        >
            {label}
        </label>
        <input
            className="form-control-input"
            id={name}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
        />
        <p className="form-control-warning">{errorMessage}</p>
    </div>
);

export default FormControl;
