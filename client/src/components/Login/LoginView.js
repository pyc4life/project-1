import React from 'react';

import FormControl from '../shared/FormControl';
import MainButton from '../shared/Button/MainButton';

import './LoginView.scss';

const LoginView = ({
    onChangeHandler,
    onSubmitHandler,
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
                />

                <FormControl
                    name='password'
                    type='password'
                    label='Password'
                    onChangeHandler={onChangeHandler}
                />

                <MainButton
                    text='Login'
                    onClickHandler={onSubmitHandler}
                />
            </form>
        </div>
    </section>
);

export default LoginView;
