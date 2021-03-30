import React, { useState } from 'react';

import MainLayout from '../Layouts/MainLayout';
import LoginView from './LoginView';

import authService from '../../services/authService';

const Login = ({
    history,
}) => {

    const [authInfo, setAuthInfo] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [usernameErrorMessage, setUsernameErrorMessage] = useState('');

    const onChangeHandler = (e) => {
        const { name, value } = e.target;

        setAuthInfo({ ...authInfo, [name]: value });
    };

    const onSubmitHandler = () => {

        let isOkayToSubmit = true;

        if (!authInfo.username) {
            setUsernameErrorMessage('Username is required');
            isOkayToSubmit = false;
        } else {
            setUsernameErrorMessage('');
        }

        if (!authInfo.password) {
            setErrorMessage('Password is required');
            isOkayToSubmit = false;
        } else {
            setErrorMessage('');
        }

        if (!isOkayToSubmit) { return; }
        authService.login(authInfo)
            .then((res) => {
                if (res.message === 'not register' || res.message === 'wrong password') {
                    setErrorMessage('Wrong username or password');
                    return;
                } else {
                    setErrorMessage('');
                }

                history.push('/');
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <MainLayout>
            <LoginView
                onChangeHandler={onChangeHandler}
                onSubmitHandler={onSubmitHandler}
                errorMessage={errorMessage}
                usernameErrorMessage={usernameErrorMessage}
            />
        </MainLayout>
    );
};

export default Login;
