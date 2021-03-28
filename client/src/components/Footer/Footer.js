import React from 'react';

import './Footer.scss';

const Footer = () => (
    <footer className="footer">
        <p>Made for all</p>
        <p>&#169; No copyright {new Date().getFullYear()}</p>
    </footer>
);

export default Footer;
