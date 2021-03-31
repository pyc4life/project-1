import React from 'react';

import MainLayout from '../Layouts/MainLayout';
import MainButton from '../shared/Button/MainButton';

import authService from '../../services/authService';

import './Home.scss'

const Home = () => {

    return (
        <MainLayout>
            <div className="home-wrapper">
                <h3 className="heading">build a resume to impress</h3>
                <MainButton
                    className="build-cv-btn"
                    link="/build-resume"
                >
                    BUILD MY RESUME
                </MainButton>
            </div>
        </MainLayout>
    )
}

export default Home;
