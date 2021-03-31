import React from 'react';
import { Link } from 'react-router-dom';

import FormControl from '../shared/FormControl';
import MainButton from '../shared/Button/MainButton';


import './LoginView.scss';

const LoginView = ({
    onChangeHandler,
    onSubmitHandler,
    errorMessage,
    usernameErrorMessage,
}) => (
    <section className="login-section" >
        <div className="login-container">

            <form className="login-form">

                <FormControl
                    name='username'
                    type='text'
                    label='Username'
                    onChangeHandler={onChangeHandler}
                    errorMessage={usernameErrorMessage}
                />

                <FormControl
                    name='password'
                    type='password'
                    label='Password'
                    onChangeHandler={onChangeHandler}
                    errorMessage={errorMessage}
                />

                <MainButton
                    onClickHandler={onSubmitHandler}
                >
                    Login
                </MainButton>

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
