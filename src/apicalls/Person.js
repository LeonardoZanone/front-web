import api from "./api";

export async function create(person) {
    const body = JSON.stringify(person);

    try {
        const response = await api.post('person', body);
        return response;
    } catch (e) {
        return e;
    }
}

export async function list() {
    try {
        const response = await api.get('person');
        return response;
    } catch (e) {
        return e;
    }
}