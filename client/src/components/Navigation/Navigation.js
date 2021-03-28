import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.scss';

const Navigation = () => (
    <nav className="nav">
        <ul className="nav-ul">
            <li className="nav-list-item">
                <Link className="nav-link" to="/">PROJECT-1 LOGO</Link>
            </li>
        </ul>
        <ul className="nav-ul nav-right">
            <li className="nav-list-item">
                <Link className="nav-link" to="/register">Register</Link>
            </li>
            <li className="nav-list-item">
                <Link className="nav-link" to="/login">Login</Link>
            </li>
        </ul>
    </nav>
);

export default Navigation;
