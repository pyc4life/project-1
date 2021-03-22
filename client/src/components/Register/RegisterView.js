import React from 'react';

import FormControl from '../shared/FormControl';
import MainButton from '../shared/Button/MainButton';

import './RegisterView.scss'

const RegisterView = ({
    onChangeHandler,
    onSubmitHandler,
}) => (
    <section className="register-section" >
        <div className="register-container">

            <form className="register-form">

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

                <FormControl
                    name='repassword'
                    type='password'
                    label='Repeat password'
                    onChangeHandler={onChangeHandler}
                />

                <MainButton
                    text='Register'
                    onClickHandler={onSubmitHandler}
                />
            </form>
        </div>
    </section>
)

export default RegisterView;
