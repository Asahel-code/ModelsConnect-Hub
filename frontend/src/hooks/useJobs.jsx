import { useErrorToast } from './useErrorToast';
import { useQuery } from 'react-query';
import ModelsBookingServices from '../services/ModelsBookingServices';

export const useJobs = () => {
    const handleError = useErrorToast();

    const { isLoading, data, refetch } = useQuery({
        queryKey: ["jobs"],
        queryFn: async () => await ModelsBookingServices.fetchAllModelsBooking(),
        onError: (error) => {
            handleError(error);
        },
    });

    return { isLoading, jobs: data, refetch };
}
