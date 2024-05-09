import AxiosUtility, { setAuthToken } from "./AxiosServices";

const fetchAllModelsBooking = async () => {
    setAuthToken(AxiosUtility);
    const res = await AxiosUtility.get("/models_bookings/");

    return res.data;
}
const bookModels = async (data) => {
    setAuthToken(AxiosUtility);
    const res = await AxiosUtility.post("/models_bookings/", data);

    return res.data;
}

const updateBooking = async (id, data) => {
    setAuthToken(AxiosUtility);
    const res = await AxiosUtility.patch(`/models_bookings/${id}`, data);

    return res.data;
}


const fetchSpecificModelsBooking = async (id) => {
    setAuthToken(AxiosUtility);
    const res = await AxiosUtility.get(`/models_bookings/${id}`);

    return res.data;
}

const fetchCLientModelsBooking = async () => {
    setAuthToken(AxiosUtility);
    const {data:res} = await AxiosUtility.get('/models_bookings/client');

    return res;
}

const fetchModelModelsBooking = async () => {
    setAuthToken(AxiosUtility);
    const {data:res} = await AxiosUtility.get('/models_bookings/model');

    return res;
}

const deleteModelsBooking = async (id) => {
    setAuthToken(AxiosUtility);
    const res = await AxiosUtility.delete(`/models_bookings/${id}`);

    return res.data;
}

const ModelsBookingServices = {
    fetchAllModelsBooking,
    fetchSpecificModelsBooking,
    bookModels,
    updateBooking,
    fetchCLientModelsBooking,
    fetchModelModelsBooking,
    deleteModelsBooking
}

export default ModelsBookingServices;