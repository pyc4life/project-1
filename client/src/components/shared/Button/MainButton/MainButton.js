import React from 'react';

import './MainButton.scss';

const MainButton = ({
    text,
    className,
    onClickHandler,
}) => (
    <button
        className={['main-button', className].filter(Boolean).join(' ')}
        type="button"
        onClick={onClickHandler}
    >
        {text}
    </button>
);

export default MainButton;
