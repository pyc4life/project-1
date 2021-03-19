import React from 'react';

import Navigation from '../../Navigation';
import Footer from '../../Footer';

import './MainLayout.scss';

const MainLayout = ({
    children,
}) => (
    <div className='site-wrapper'>
        <Navigation />
        {children}
        <Footer />
    </div>
);

export default MainLayout;
