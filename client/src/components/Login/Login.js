import React, { useState } from 'react';

import MainLayout from '../Layouts/MainLayout';
import LoginView from './LoginView';

const Login = ({
    history,
}) => {

    const [authInfo, setAuthInfo] = useState({});

    const onChangeHandler = (e) => {
        const { name, value } = e.target;

        setAuthInfo({ ...authInfo, [name]: value });
    }

    const onSubmitHandler = () => {

        fetch('http://localhost:3030/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(authInfo),
        })
            .then((r) => r.json())
            .then((res) => {
               history.push('/')
            }).catch(e => {
                console.log(e);
            });
    }


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
