import api from "./api";

export async function login(username, password) {
    const resposnse = await api.post('auth/login', {
        username,
        password
    });

    localStorage.setItem('token', resposnse.data.Content);
    localStorage.setItem('responseMessage', resposnse.data.Message);
}