import React, { useState } from 'react';

import MainLayout from '../Layouts/MainLayout';
import RegisterView from './RegisterView';

const Register = () => {

    const [authInfo, setAuthInfo] = useState({});
    const [doPasswordsMatch, setDoPasswordsMatch] = useState(true);

    const onSubmitHandler = (e) => {

        const { username, password } = authInfo;

        fetch('http://localhost:3030/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password }),
        })
            .then((r) => r.json())
            .then((res) => {
                console.log(res);
            }).catch(e => {
                console.log(e);
            });
    };

    const onChangeHandler = (e) => {
        const { name, value } = e.target;

        setAuthInfo({ ...authInfo, [name]: value });
    }

    return (
        <MainLayout>
            <RegisterView
                onSubmitHandler={onSubmitHandler}
                onChangeHandler={onChangeHandler}
            />
        </MainLayout>
    );
}

export default Register;
