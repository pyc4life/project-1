import React, { useState } from 'react';

import MainLayout from '../Layouts/MainLayout';
import LoginView from './LoginView';

import authService from '../../services/authService';

const Login = ({
    history,
}) => {

    const [authInfo, setAuthInfo] = useState({});

    const onChangeHandler = (e) => {
        const { name, value } = e.target;

        setAuthInfo({ ...authInfo, [name]: value });
    };

    const onSubmitHandler = () => {

        authService.login(authInfo)
            .then(() => history.push('/'))
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <MainLayout>
            <LoginView
                onChangeHandler={onChangeHandler}
                onSubmitHandler={onSubmitHandler}
            />
        </MainLayout>
    )
}

export default Login;
