import { useErrorToast } from './useErrorToast'
import { useMutation, useQuery } from 'react-query';
import ClientServices from '../services/ClientServices';
import { useSuccessToast } from './useSuccessToast';
import { useNavigate } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { MONTHS } from '../utils/timeFormat';

export const useClient = () => {
    const handleError = useErrorToast();

    const [clientCountPerMonth, setClientCountPerMonth] = useState([]);
    const [barChartMonths, setBarChartMonths] = useState([]);

    const { isLoading, data, refetch } = useQuery({
        queryKey: ["clients"],
        queryFn: async () => await ClientServices.getAllClients(),
        onError: (error) => {
            handleError(error);
        },
    });

    useEffect(() => {
        const totalClients = Object.entries(
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
        let onboardedClientPerMonth = []
    
    
        totalClients.forEach((item) => {
            const key = Object.keys(item)[0];
            const monthOfDate = MONTHS[new Date(key).getMonth()];
            monthsArray.push(monthOfDate);
    
            const arrayOfClients = Object.values(item)[0];
    
            const totalMonthlyOnboardedClient = arrayOfClients?.reduce((acc, obj) => obj ? acc += 1 : acc, 0);
            onboardedClientPerMonth.push(totalMonthlyOnboardedClient)
        });
    
        setBarChartMonths(monthsArray);
        setClientCountPerMonth(onboardedClientPerMonth);
    },[data, isLoading]);


    const clientOnboardedSummary = useMemo(
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
                        label: "Clients",
                        data: clientCountPerMonth,
                        borderColor: 'rgb(240, 99, 12)',
                        backgroundColor: 'rgba(240, 99, 12, 0.5)',
                    },
                ],
                text: "35",
            },
        }),
        [clientCountPerMonth, barChartMonths]
    );


    return { isLoading, clients: data, clientOnboardedSummary, refetch };
}

export const useClientProfile = () => {
    const handleError = useErrorToast();

    const { isLoading, data, refetch } = useQuery({

        queryKey: ["client_profile"],
        queryFn: async () => await ClientServices.getClientProfile(),
        onError: (error) => {
            handleError(error);
        },
    });

    return { isLoading, data, refetch };
}

export const useCreateClientProfile = (refetch, isEditing, data) => {
    const handleError = useErrorToast();
    const handleSuccess = useSuccessToast();
    const navigate = useNavigate();

    const [selectedPersona, setSelectedPersona] = useState("");
    const [clientState, setClientState] = useState({
        firstName: "",
        lastName: "",
        organizationName: "",
        city: "",
        county: ""
    });

    useEffect(() => {
        if (data) {
            setClientState((prev) => ({
                ...prev,
                firstName: data?.persona === "self" && data?.name.split(" ")[0],
                lastName: data?.persona === "self" && data?.name.split(" ")[1],
                organizationName: data?.persona === "organization" && data?.name,
                county: data?.county,
                city: data?.city
            }));
            setSelectedPersona(data?.persona);
        }

    }, [data, data?.city, data?.county, data?.name, data?.persona])

    const createProfileMutation = useMutation(
        async (data) => await ClientServices.addClientProfile(data),
        {
            onSuccess: (res) => {
                handleSuccess(res);
                refetch();
                navigate('/client');
            },
            onError: (error) => {
                handleError(error);
            }
        }
    );

    const updateProfileMutation = useMutation(
        async (data) => await ClientServices.updateClientProfile(data),
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

    const handleChange = (e) => {
        const { name, value } = e.target;

        setClientState((prev) => ({ ...prev, [name]: value }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (selectedPersona === "self") {
            if (isEditing) {
                updateProfileMutation.mutateAsync({
                    name: `${clientState.firstName} ${clientState.lastName}`,
                    county: clientState?.county,
                    city: clientState?.city
                })
            } else {
                let formData = new FormData(e.currentTarget);
                let data = Object.fromEntries(formData);

                createProfileMutation.mutateAsync({
                    ...data,
                    name: `${data.firstName} ${data.lastName}`,
                    persona: selectedPersona,
                });
            }
        }
        else if (selectedPersona === "organization") {
            if (isEditing) {
                updateProfileMutation.mutateAsync({
                    name: clientState.organizationName,
                    county: clientState?.county,
                    city: clientState?.city
                });
            } else {
                let formData = new FormData(e.currentTarget);
                let data = Object.fromEntries(formData);
                createProfileMutation.mutateAsync({
                    ...data,
                    name: data.organizationName,
                    persona: selectedPersona,
                });
            }
        }
    }

    return { selectedPersona, clientState, createProfileMutation, updateProfileMutation, setSelectedPersona, handleChange, handleSubmit }
}


export const useChangeAccountState = (refetch, setIsDeleteModalOpen) => {

    const handleError = useErrorToast();
    const handleSuccess = useSuccessToast();

    const updateAccountState = useMutation(
        async (data) => await ClientServices.updateAccountState(data?.id, data?.data),
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