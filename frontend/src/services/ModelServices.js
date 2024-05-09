import AxiosUtility, { setAuthToken } from "./AxiosServices";

const getModelProfile = async () => {
    setAuthToken(AxiosUtility);
    const { data: res } = await AxiosUtility.get('/models/profile');

    return res;
}

const createModelProfile = async (data) => {
    setAuthToken(AxiosUtility);
    const { data: res } = await AxiosUtility.post('/models/', data);

    return res;
}

const updateModelProfile = async (data) => {
    setAuthToken(AxiosUtility);
    const { data: res } = await AxiosUtility.patch('/models/profile/update', data);

    return res;
}

const addModelImages = async (data) => {
    setAuthToken(AxiosUtility);
    const { data: res } = await AxiosUtility.patch('/models/images', data);

    return res;
}

const getAllModels = async () => {
    setAuthToken(AxiosUtility);
    const { data: res } = await AxiosUtility.get('/models/');

    return res;
}

const getAllAvailableModels = async () => {
    setAuthToken(AxiosUtility);
    const { data: res } = await AxiosUtility.get('/models/available');

    return res;
}

const getSpecificModel = async (id) => {
    setAuthToken(AxiosUtility);
    const { data: res } = await AxiosUtility.get(`/models/${id}`);

    return res;
}

const updateAccountState = async (id, data) => {
    setAuthToken(AxiosUtility);
    const { data: res } = await AxiosUtility.patch(`/models/${id}`, data);

    return res;
}

const deleteModelImages = async (image) => {
    setAuthToken(AxiosUtility);
    const { data: res } = await AxiosUtility.delete(`/models/images?image=${image}`);

    return res;
}

const deleteModel = async (id) => {
    setAuthToken(AxiosUtility);
    const { data: res } = await AxiosUtility.delete(`/models/${id}`);

    return res;
}

const ModelServices = {
    getModelProfile,
    getAllAvailableModels,
    createModelProfile,
    updateModelProfile,
    addModelImages,
    getAllModels,
    getSpecificModel,
    updateAccountState,
    deleteModelImages,
    deleteModel
}

export default ModelServices;