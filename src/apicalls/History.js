import api from "./api";

export async function list() {
    return await api.get('history');
}