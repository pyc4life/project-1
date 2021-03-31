import React from 'react';
import { Link } from 'react-router-dom';

import './MainButton.scss';

const MainButton = ({
    children,
    className,
    onClickHandler,
    link,
}) => {

    const classes = ['main-button', className].filter(Boolean).join(' ');

    return (
        link ?
            <Link
                className={classes}
                to={link}
            >
                {children}
            </Link> :
            <button
                className={classes}
                type="button"
                onClick={onClickHandler}
            >
                {children}
            </button>
    );
}

export default MainButton;
