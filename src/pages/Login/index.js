import React from 'react';
import Button from '../../components/simpleButton/index';
import './layouts.css';
import { login } from "../../apicalls/auth";

export default function Login({ history }) {
    const state = {
        error: null,
        errorClass: 'hidden'
    }
    function handleLogin(ev) {
        ev.preventDefault();
        login('', '');
        const token = localStorage.getItem('token');
        if (token != null) {
            const message = localStorage.getItem('responseMessage');
            if (message) {
                state.error = message;
                state.errorClass = 'errorMessage';
            }
            else
                alert('An error has occurred');
        }
    }

    return (
        <>
            <Button className="loginBtn" text='Login'></Button>
            <div className="login">
                <div className="formDiv">
                    <h2>Login</h2>
                    <div>
                        <form action="/" onSubmit={handleLogin} className="loginForm">
                            <label htmlFor="username">Username</label>
                            <input required='true' placeholder="username" name="username" type="text" />
                            <label htmlFor="password">Password</label>
                            <input required='true' placeholder="password" name="password" type="password" />
                            <p className={state.errorClass}>{state.error}</p>
                            <button type="submit" className="sendBtn">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
