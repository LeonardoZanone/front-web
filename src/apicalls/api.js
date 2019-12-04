import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import ConnectionError from '../pages/ConnectionError/index';
import Routes from '../routes/router';

const api = axios.create({
    baseURL: 'http://localhost:5000/api/',
    headers: {
        'Content-Type': 'application/json'
    }
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
})

api.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response && error.response.status === 401) {
        localStorage.setItem('token', '');
        ReactDOM.render(<Routes />, document.getElementById('root'));
        // eslint-disable-next-line no-throw-literal
        throw {};
    }
    else {
        ReactDOM.render(<ConnectionError />, document.getElementById('root'));
    }
    // eslint-disable-next-line no-throw-literal
    throw {};
})

export default api;