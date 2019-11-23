import api from "./api";

export async function create(equipamento) {
    const body = JSON.stringify(equipamento);

    try {
        const response = await api.post('property', body);
        return response;
    } catch (e) {
        return e;
    }
}

export async function list() {
    try {
        const response = await api.get('property');
        return response;
    } catch (e) {
        return e;
    }
}