import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:65345/api/'
});

export default api;