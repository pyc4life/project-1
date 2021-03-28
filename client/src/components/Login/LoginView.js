import React from 'react';
import { Link } from 'react-router-dom';

import FormControl from '../shared/FormControl';
import MainButton from '../shared/Button/MainButton';


import './LoginView.scss';

const LoginView = ({
    onChangeHandler,
    onSubmitHandler,
    errorMessage,
}) => (
    <section className="login-section" >
        <div className="login-container">

            <form className="login-form">

                <FormControl
                    name='username'
                    type='text'
                    placeholder='Eg. Jordjie39'
                    label='Username'
                    onChangeHandler={onChangeHandler}
                    errorMessage={errorMessage}
                />

                <FormControl
                    name='password'
                    type='password'
                    label='Password'
                    onChangeHandler={onChangeHandler}
                    errorMessage={errorMessage}
                />

                <MainButton
                    text='Login'
                    onClickHandler={onSubmitHandler}
                />

                <Link
                    className="not-register-yet"
                    to="/register"
                >
                    <span>Sign up</span>
                </Link>
            </form>
        </div>
    </section>
);

export default LoginView;
