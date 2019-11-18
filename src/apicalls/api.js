import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

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

    if (error.response.status === 401) {
        localStorage.setItem('token', null);
        return <Redirect to='login'></Redirect>
        // remover token, redirecionar para login...
    }
})

export default api;