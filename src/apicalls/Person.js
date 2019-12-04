import api from "./api";

export async function create(person) {
    const body = JSON.stringify(person);
    return await api.post('person', body);
}

export async function edit(person) {
    const body = JSON.stringify(person);
    return await api.put('person', body);
}

export async function list() {
    return await api.get('person');
}

export async function get(id) {
    return await api.get(`person/${id}`);
}

export async function deleta(id) {
    return await api.delete(`person/${id}`);
}

export async function checkEmail(email) {
    return await api.post('person/checkemail', JSON.stringify({ Email: email }));
}
