import api from "./api";

export async function borrow(borrow) {
    const body = borrow;

    try {
        const response = await api.post('action/borrow', body);
        return response;
    } catch (e) {
        return e;
    }
}

export async function devolver(item) {
    const body = item;

    try {
        const response = await api.post('action/return', body);
        return response;
    } catch (e) {
        return e;
    }
}
