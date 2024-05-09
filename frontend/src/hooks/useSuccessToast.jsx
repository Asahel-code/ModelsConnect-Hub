import { useToast } from '@chakra-ui/react';
import { toastProps } from '../utils/toastProps';

export const useSuccessToast = () => {

    const toast = useToast();

    const handleSuccess = (response) => {
        toast({
            ...toastProps,
            title: "Success",
            description: response.message,
            status: "success",
        })
    }

    return handleSuccess
}
