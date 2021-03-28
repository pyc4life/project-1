import React from 'react';
import { Link } from 'react-router-dom';

import FormControl from '../shared/FormControl';
import MainButton from '../shared/Button/MainButton';

import './RegisterView.scss'

const RegisterView = ({
    onChangeHandlerUsername,
    onChangeHandlerPassword,
    onChangeHandlerRePassword,
    onSubmitHandler,
    passwordErrorMessage,
    usernameErrorMessage,
}) => (
    <section className="register-section" >
        <div className="register-container">

            <form className="register-form">

                <FormControl
                    name='username'
                    type='text'
                    placeholder='Eg. Jordjie39'
                    label='Username'
                    onChangeHandler={onChangeHandlerUsername}
                    errorMessage={usernameErrorMessage}
                />

                <FormControl
                    name='password'
                    type='password'
                    label='Password'
                    onChangeHandler={onChangeHandlerPassword}
                    errorMessage={passwordErrorMessage}
                />

                <FormControl
                    name='rePassword'
                    type='password'
                    label='Repeat password'
                    onChangeHandler={onChangeHandlerRePassword}
                    errorMessage={passwordErrorMessage}
                />

                <MainButton
                    text='Register'
                    onClickHandler={onSubmitHandler}
                />

                <Link
                    className="already-register"
                    to="/login"
                >
                    <span>Sign in</span>
                </Link>
            </form>
        </div>
    </section>
)

export default RegisterView;
