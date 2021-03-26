import React, { useState } from 'react';

import MainLayout from '../Layouts/MainLayout';
import RegisterView from './RegisterView';

import authService from '../../services/authService';

const Register = ({
    history,
}) => {

    // const [authInfo, setAuthInfo] = useState({});
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [usernameErrorMessage, setUsernameErrorMessage] = useState('');

    const onSubmitHandler = (e) => {

        setUsernameErrorMessage('');

        if (passwordErrorMessage !== '') {
            return;
        }

        authService.register({ username, password })
            .then((res) => {
                if (res.message === 'Username is already taken.') {
                    setUsernameErrorMessage('Username is already taken');
                    return;
                }
                history.push('/login');
            }).catch(error => console.log(error));
    };

    const onChangeHandlerUsername = (e) => {
        const { value } = e.target;

        setUsername(value);

    };

    const onChangeHandlerPassword = (e) => {
        const { value } = e.target;

        setPasswordErrorMessage('');
        setPassword(value);

        if (value.length < 7) {
            setPasswordErrorMessage('Password length must be more than 6 characters');
        }

        if (value !== rePassword) {
            setPasswordErrorMessage('Passwords don\'t match');
        }

    };

    const onChangeHandlerRePassword = (e) => {
        const { value } = e.target;

        setPasswordErrorMessage('');
        setRePassword(value);

        if (value.length < 7) {
            setPasswordErrorMessage('Password length must be more than 6 characters');
        }

        if (value !== password) {
            setPasswordErrorMessage('Passwords don\'t match');
        }
    };

    return (
        <MainLayout>
            <RegisterView
                onSubmitHandler={onSubmitHandler}
                onChangeHandlerUsername={onChangeHandlerUsername}
                onChangeHandlerPassword={onChangeHandlerPassword}
                onChangeHandlerRePassword={onChangeHandlerRePassword}
                passwordErrorMessage={passwordErrorMessage}
                usernameErrorMessage={usernameErrorMessage}
            />
        </MainLayout>
    );
}

export default Register;
