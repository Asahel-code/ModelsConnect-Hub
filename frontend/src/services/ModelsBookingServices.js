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

const fetchSpecificModelsBooking = async (id) => {
    setAuthToken(AxiosUtility);
    const res = await AxiosUtility.get(`/models_bookings/${id}`);

    return res.data;
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
    deleteModelsBooking
}

export default ModelsBookingServices;