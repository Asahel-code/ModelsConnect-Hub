import { useToast } from "@chakra-ui/react";
import { toastProps } from "../utils/toastProps";
import { getError } from "../utils/getError"

export const useErrorToast = () => {

  const toast = useToast();

  const handleError = (error) => {
    toast({
      ...toastProps,
      title: "Error!",
      description: getError(error),
      status: "error",
    });
  }

  return handleError
}
