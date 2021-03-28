import React from 'react';

import MainLayout from '../Layouts/MainLayout';
import MainButton from '../shared/Button/MainButton';

import './Home.scss'

const Home = () => {

    return (
        <MainLayout>
            <div className="home-wrapper">
                <h3 className="heading">MAKE A CV TO IMPRESS</h3>
                <MainButton

                    className="get-started"
                    text='GET
                STARTED'
                />
            </div>
        </MainLayout>
    )
}

export default Home;
