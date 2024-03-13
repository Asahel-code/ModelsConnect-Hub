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

const fetchClientModelsBooking = async () => {
    setAuthToken(AxiosUtility);
    const res = await AxiosUtility.get(`/models_bookings/cleint_models_booking`);

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
    fetchClientModelsBooking,
    bookModels,
    deleteModelsBooking
}

export default ModelsBookingServices;