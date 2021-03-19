import React from 'react';

import FormControl from '../shared/FormControl';
import MainButton from '../shared/Button/MainButton';

import './RegisterView.scss'

const RegisterView = ({
    usernameChangeHandler,
    passwordChangeHandler,
    submitFormHandler,
    rePasswordChangeHandler,
    usernameOnBlurHandler,
}) => (
    <section className="register-section" >
        <div className="register-container">

            <form className="register-form">

                <FormControl
                    name='username'
                    type='text'
                    placeholder='Eg. Jordjie39'
                    label='Username'
                    onChangeHandler={usernameChangeHandler}
                    onBlurHandler={usernameOnBlurHandler}
                />

                <FormControl
                    name='password'
                    type='password'
                    label='Password'
                    onChangeHandler={passwordChangeHandler}
                />

                <FormControl
                    name='repassword'
                    type='password'
                    label='Repeat password'
                    onChangeHandler={rePasswordChangeHandler}
                />

                <MainButton
                    text='Register'
                    onClickHandler={submitFormHandler}
                />
            </form>
        </div>
    </section>
)

export default RegisterView;
