import React from 'react';

import Navigation from '../../Navigation';
import Footer from '../../Footer';

import './MainLayout.scss';

const MainLayout = ({
    children,
}) => (
    <div className='site-wrapper'>
        <Navigation />
        <section className='site-content'>
            {children}
        </section>
        <Footer />
    </div>
);

export default MainLayout;
