import { useMutation, useQuery } from 'react-query';
import ModelServices from '../services/ModelServices';
import { useErrorToast } from './useErrorToast';
import { useSuccessToast } from './useSuccessToast';
import { useNavigate } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { MONTHS } from '../utils/timeFormat';

export const useModel = () => {
    const handleError = useErrorToast();

    const [modelCountPerMonth, setModelCountPerMonth] = useState([]);
    const [barChartMonths, setBarChartMonths] = useState([]);

    const { isLoading, data, refetch } = useQuery({
        queryKey: ["models"],
        queryFn: async () => await ModelServices.getAllModels(),
        onError: (error) => {
            handleError(error);
        },
    });

    useEffect(() => {
        const totalModels = Object.entries(
            !isLoading && data?.reduce((b, a) => {
                let month = a?.createdAt.split("T")[0].substr(0, 7);
                if (Object.prototype.hasOwnProperty.call(b, month))
                    b[month]?.push(a);
                else
                    b[month] = [a];
                return b;
            }, Object.create(null))
        )
            .sort((a, b) => a[0].localeCompare(b[0]))
            .map((e) => ({ [e[0]]: e[1] }));
    
        let monthsArray = []
        let onboardedModelsPerMonth = []
    
    
        totalModels.forEach((item) => {
            const key = Object.keys(item)[0];
            const monthOfDate = MONTHS[new Date(key).getMonth()];
            monthsArray.push(monthOfDate);
    
            const arrayOfModels = Object.values(item)[0];
    
            const totalMonthlyOnboardedModels = arrayOfModels?.reduce((acc, obj) => obj ? acc += 1 : acc, 0);
            onboardedModelsPerMonth.push(totalMonthlyOnboardedModels)
        });
    
        setBarChartMonths(monthsArray);
        setModelCountPerMonth(onboardedModelsPerMonth);
    },[data, isLoading]);


    const modelOnboardedSummary = useMemo(
        () => ({
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                },
            },

            data: {
                labels: barChartMonths,
                datasets: [
                    {
                        label: "Models",
                        data: modelCountPerMonth,
                        borderColor: 'rgb(240, 99, 12)',
                        backgroundColor: 'rgba(240, 99, 12, 0.5)',
                    },
                ],
                text: "35",
            },
        }),
        [modelCountPerMonth, barChartMonths]
    );


    return { isLoading, models: data, modelOnboardedSummary, refetch };
}

export const useAvailableModel = () => {
    const handleError = useErrorToast();

    const { isLoading, data, refetch } = useQuery({
        queryKey: ["models/available"],
        queryFn: async () => await ModelServices.getAllAvailableModels(),
        onError: (error) => {
            handleError(error);
        },
    });

    return { isLoading, data, refetch };
}


export const useSpecifcModel = (id) => {
    const handleError = useErrorToast();

    const { isLoading, data, refetch } = useQuery({
        queryKey: [`models/${id}`],
        queryFn: async () => await ModelServices.getSpecificModel(id),
        onError: (error) => {
            handleError(error);
        },
    });

    return { isLoading, data, refetch };
}

export const useModelProfile = () => {
    const handleError = useErrorToast();

    const { isLoading, data, refetch } = useQuery({
        queryKey: ["model_profile"],
        queryFn: async () => await ModelServices.getModelProfile(),
        onError: (error) => {
            handleError(error);
        },
    });

    return { isLoading, data, refetch };
}

export const useCreateModelProfile = (refetch, isEditing, data)  => {
    const handleError = useErrorToast();
    const handleSuccess = useSuccessToast();
    const navigate = useNavigate();

    const [modelState, setModelState] = useState({
        firstName: "",
        lastName: "",
        county: "",
        city: "",
        gender: "",
        height: "",
        skinColor: ""
    });
    const [images, setImages] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setModelState((prev) => ({ ...prev, [name]: value }));
    };

    useEffect(() => {
        if (data) {
            setModelState((prev) => ({
                ...prev,
                firstName: data?.name?.split(" ")[0],
                lastName: data?.name?.split(" ")[1],
                county: data?.county,
                city: data?.city,
                gender: data?.gender,
                height: data?.height,
                skinColor: data?.skinColor
            }))
        }

    }, [data, data?.city, data?.county, data?.gender, data?.height, data?.name, data?.skinColor]);


    const createProfileMutation = useMutation(
        async (data) => await ModelServices.createModelProfile(data),
        {
            onSuccess: (res) => {
                handleSuccess(res);
                refetch();
                navigate('/model');
            },
            onError: (error) => {
                handleError(error);
            }
        }
    );

    const updateModelProfileMutation = useMutation(
        async (data) => await ModelServices.updateModelProfile(data),
        {
            onSuccess: (res) => {
                handleSuccess(res);
                refetch();
            },
            onError: (error) => {
                handleError(error);
            }
        }
    );

    const handleSubmit = () => {
        const formData = new FormData();

        formData.append("name", `${modelState.firstName} ${modelState.lastName}`);
        formData.append("county", modelState.county);
        formData.append("city", modelState.city);
        formData.append("gender", modelState.gender);
        formData.append("height", modelState.height);
        formData.append("skinColor", modelState.skinColor);
        Object.values(images).forEach(image => {
            formData.append('images', image);
        });

        if (isEditing) {
            updateModelProfileMutation.mutateAsync({
                ...modelState,
                name: `${modelState.firstName} ${modelState.lastName}`
            });
        } else {
            createProfileMutation.mutateAsync(formData);
        }
    }

    return { modelState, images, createProfileMutation, updateModelProfileMutation, setImages, handleChange, handleSubmit }
}

export const useAddModelImages = (refetch, handleCancel) => {

    const handleError = useErrorToast();
    const handleSuccess = useSuccessToast();
    const [images, setImages] = useState([]);

    const addImagesMutation = useMutation(
        async (data) => await ModelServices.addModelImages(data),
        {
            onSuccess: (res) => {
                handleSuccess(res);
                refetch();
                handleCancel();
            },
            onError: (error) => {
                handleError(error);
            }
        }
    );

    const handleSubmit = () => {
        const formData = new FormData();

        Object.values(images).forEach(image => {
            formData.append('images', image);
        });

        addImagesMutation.mutateAsync(formData);
    }

    return { images, addImagesMutation, setImages, handleSubmit }
}

export const useDeleteModelImage = (refetch) => {

    const handleError = useErrorToast();
    const handleSuccess = useSuccessToast();

    const deleteMutation = useMutation(
        async (data) => await ModelServices.deleteModelImages(data),
        {
            onSuccess: (res) => {
                handleSuccess(res);
                refetch();
            },
            onError: (error) => {
                handleError(error);
            }
        }
    );

    const handleDelete = (image) => {
        deleteMutation.mutateAsync(image);
    }

    return { handleDelete }
}

export const useChangeAccountState = (refetch, setIsDeleteModalOpen) => {

    const handleError = useErrorToast();
    const handleSuccess = useSuccessToast();

    const updateAccountState = useMutation(
        async (data) => await ModelServices.updateAccountState(data?.id, data?.data),
        {
            onSuccess: (res) => {
                handleSuccess(res);
                refetch();
                setIsDeleteModalOpen(false);
            },
            onError: (error) => {
                handleError(error);
            }
        }
    )

    const handleUpdate = (data) => {
        updateAccountState.mutateAsync(data);
    }

    return { handleUpdate }
}