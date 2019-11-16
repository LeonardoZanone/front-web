import api from "./api";

export async function create(FirstName, LastName, Email, RG, Telephone) {
    const body = JSON.stringify({
        FirstName,
        LastName,
        Email,
        RG,
        Telephone
    });

    try {
        const response = await api.post('person', body);
        return response;
    } catch (e) {
        return e;
    }
    // localStorage.setItem('responseMessage', response.data.Message);
}