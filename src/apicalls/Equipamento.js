import api from "./api";

export async function create(equipamento) {
    const body = JSON.stringify(equipamento);
    return await api.post('property', body);
}

export async function list(person) {
    let response;
    if (person) {
        response = await api.get(`property/list/${person}`);
    }
    else {
        response = await api.get('property');
    }
    return response;
}

export async function get(id) {
    return await api.get(`property/${id}`);
}

export async function deleta(id) {
    return await api.delete(`property/${id}`);
}