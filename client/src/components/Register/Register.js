import React, { useState } from 'react';

import MainLayout from '../Layouts/MainLayout';
import RegisterView from './RegisterView';

const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [doPasswordsMatch, setDoPasswordsMatch] = useState(true);

    const submitFormHandler = (e) => {

        fetch('http://localhost:3030/users', {
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

    const usernameChangeHandler = (e) => {

        const { value } = e.target;

        setUsername(value);
    };

    const passwordChangeHandler = (e) => {
        const { value } = e.target;

        setPassword(value);
    };

    const rePasswordChangeHandler = (e) => {
        const { value } = e.target;

        setRepassword(value);
    };

    const usernameOnBlurHandler = (e) => {
        const { value } = e.target;
    }

    return (
        <MainLayout>
            <RegisterView
                usernameOnBlurHandler={usernameOnBlurHandler}
                submitFormHandler={submitFormHandler}
                usernameChangeHandler={usernameChangeHandler}
                passwordChangeHandler={passwordChangeHandler}
                rePasswordChangeHandler={rePasswordChangeHandler}
            />
        </MainLayout>
    );
}

export default Register;
