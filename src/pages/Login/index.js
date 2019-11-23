import React, { useState } from 'react';
import Button from '../../components/simpleButton/index';
import Home from '../../pages/Home/index';
import './layouts.css';
import { login } from "../../apicalls/auth";

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [message, setMessage] = useState('');
    const [token, setToken] = useState('');

    async function handleLogin(ev) {
        ev.preventDefault();
        const aux = await login(username, password);
        setToken(aux);
        if (!token) {
            setError(true);
            const message = localStorage.getItem('responseMessage');
            if (message) {
                setMessage(message)
            }
            else
                setMessage('An error has occured');
        }
    }

    return (
        token ?
            <Home /> :
            <>
                <Button className="loginBtn" text='Login'></Button>
                <div className="login">
                    <div className="formDiv">
                        <h2>Login</h2>
                        <div>
                            <form action="/" onSubmit={handleLogin} className="loginForm">
                                <label htmlFor="username">Username</label>
                                <input required={true} placeholder="username" name="username" type="text" onChange={ev => setUsername(ev.target.value)} />
                                <label htmlFor="password">Password</label>
                                <input required={true} placeholder="password" name="password" type="password" onChange={ev => setPassword(ev.target.value)} />
                                {error && <p className="errorMessage">{message}</p>}
                                <button type="submit" className="sendBtn">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
    )
}
