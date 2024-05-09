import AxiosUtility, { setAuthToken } from "./AxiosServices";

const getClientProfile = async () => {
    setAuthToken(AxiosUtility);
    const { data: res } = await AxiosUtility.get('/clients/profile');

    return res;
}

const addClientProfile = async (data) => {
    setAuthToken(AxiosUtility);
    const { data: res } = await AxiosUtility.post('/clients/', data);

    return res;
}

const updateClientProfile = async (data) => {
    setAuthToken(AxiosUtility);
    const { data: res } = await AxiosUtility.patch('/clients/profile/update', data);

    return res;
}

const getAllClients = async () => {
    setAuthToken(AxiosUtility);
    const { data: res } = await AxiosUtility.get('/clients/');

    return res;
}

const updateAccountState = async (id, data) => {
    setAuthToken(AxiosUtility);
    const { data: res } = await AxiosUtility.patch(`/clients/${id}`, data);

    return res;
}

const deleteClient = async (id) => {
    setAuthToken(AxiosUtility);
    const { data: res } = await AxiosUtility.delete(`/clients/${id}`);

    return res;
}

const ClientServices = {
    getClientProfile,
    getAllClients,
    addClientProfile,
    updateClientProfile,
    updateAccountState,
    deleteClient
}

export default ClientServices;