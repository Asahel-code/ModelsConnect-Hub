import { useMutation } from "react-query"
import AuthServices from "../services/AuthServices"
import { useNavigate } from "react-router-dom"
import { useSuccessToast } from "./useSuccessToast"
import { useErrorToast } from "./useErrorToast"
import useUserStore, { useSignUpFlowStore } from "../utils/zustand/Store"
import { useState } from "react"


export const useLogin = () => {
    const navigate = useNavigate();
    const handleSuccess = useSuccessToast();
    const handleError = useErrorToast();
    const setToken = useUserStore((state) => state.setToken);

    const loginMutation = useMutation(
        async (data) => await AuthServices.login(data),
        {
            onSuccess: (res) => {
                handleSuccess({ message: "Logged in successfully" });
                setToken(res);
                navigate(res?.isModel ? "/onboard/model" : res?.isClient ? "/onboard/client" : res?.isAdmin && "/admin");
            },
            onError: (error) => {
                handleError(error);
            }
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let data = Object.fromEntries(formData);

        const reFormatPhoneNumber = "+254".concat(data?.phoneNumber?.split()[0]?.substr(1, 10))

        loginMutation.mutateAsync({ ...data, phoneNumber: reFormatPhoneNumber });
    }

    return { loginMutation, handleSubmit }
}

export const useRegister = () => {
    const navigate = useNavigate();
    const handleSuccess = useSuccessToast();
    const handleError = useErrorToast();
    const removePersona = useSignUpFlowStore((state) => state.removePersona);
    const { role } = useSignUpFlowStore((state) => state.persona);

    const modelRegistrationMutation = useMutation(
        async (data) => AuthServices.registerModel(data),
        {
            onSuccess: (res) => {
                handleSuccess(res);
                removePersona();
                navigate('/login');
            },
            onError: (error) => {
                handleError(error);
            }
        }
    );

    const clientRegistrationMutation = useMutation(
        async (data) => AuthServices.registerClient(data),
        {
            onSuccess: (res) => {
                handleSuccess(res);
                removePersona();
                navigate('/login');
            },
            onError: (error) => {
                handleError(error);
            }
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let data = Object.fromEntries(formData);

        const reFormatPhoneNumber = "+254".concat(data?.phoneNumber?.split()[0]?.substr(1, 10))

        if (data.password === data.passwordConfirmation) {
            if (role === "model") {
                modelRegistrationMutation.mutateAsync({ phoneNumber: reFormatPhoneNumber, password: data.password });
            }
            else if (role === "client") {
                clientRegistrationMutation.mutateAsync({ phoneNumber: reFormatPhoneNumber, password: data.password })
            }
        }
        else {
            handleError({ message: "Please confirm your password!" })
        }
    }

    return { modelRegistrationMutation, clientRegistrationMutation, handleSubmit }
}

export const useVerifyAccount = () => {
    const navigate = useNavigate();
    const handleSuccess = useSuccessToast();
    const handleError = useErrorToast();
    const setToken = useUserStore((state) => state.setToken);

    const verifyAccountMutation = useMutation(
        async (data) => await AuthServices.verifyAccount(data),
        {
            onSuccess: (res) => {
                handleSuccess({ message: res?.message });
                setToken(res);
                navigate(res?.isModel ? "/onboard/model" : res?.isClient ? "/onboard/client" : res?.isAdmin && "/admin");
            },
            onError: (error) => {
                handleError(error);
            }
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let data = Object.fromEntries(formData);

        verifyAccountMutation.mutateAsync(data);
    }

    return { verifyAccountMutation, handleSubmit }
}

export const useResendVerificationTokenRequest = () => {
    let countdownTime = 60;

    const [isRequested, setIsRequested] = useState(false);
    const [counter, setCounter] = useState(countdownTime);
    const handleSuccess = useSuccessToast();
    const handleError = useErrorToast();


    const countDownTimer = () => {
        var countdownInterval = setInterval(() => {
            setCounter(countdownTime--);

            if (countdownTime <= 0) {
                clearInterval(countdownInterval);
            }
        }, 1000);
    }

    const resendVerificationTokenMutation = useMutation(
        async () => await AuthServices.resendVerificationToken(),
        {
            onSuccess: (res) => {
                handleSuccess(res);
            },
            onError: (error) => {
                console.log(error)
                handleError(error);
            }
        }
    )

    const resendVerificationToken = () => {
        setIsRequested(true);

        resendVerificationTokenMutation.mutateAsync();
        countDownTimer();

        setTimeout(() => {
            setIsRequested(false);
        }, countdownTime * 1000);
    }

    return { counter, isRequested, resendVerificationToken }
}
