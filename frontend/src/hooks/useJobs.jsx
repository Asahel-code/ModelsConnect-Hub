import { useErrorToast } from './useErrorToast';
import { useMutation, useQuery } from 'react-query';
import ModelsBookingServices from '../services/ModelsBookingServices';
import { useSuccessToast } from './useSuccessToast';
import { useEffect, useMemo, useState } from 'react';
import { useClientProfile } from './useClient';
import { MONTHS } from '../utils/timeFormat';

export const useJobs = () => {
    const handleError = useErrorToast();

    const [jobsCountPerMonth, setJobsCountPerMonth] = useState([]);
    const [barChartMonths, setBarChartMonths] = useState([]);

    const [jobsCountPerCounty, setJobsCountPerCounty] = useState([]);
    const [pieChartCounties, setPieChartCounties] = useState([]);

    const { isLoading, data, refetch } = useQuery({
        queryKey: ["jobs"],
        queryFn: async () => await ModelsBookingServices.fetchAllModelsBooking(),
        onError: (error) => {
            handleError(error);
        },
    });

    useEffect(() => {
        const totalJobs = Object.entries(
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
        let jobsCreatedPerMonth = []


        totalJobs.forEach((item) => {
            const key = Object.keys(item)[0];
            const monthOfDate = MONTHS[new Date(key).getMonth()];
            monthsArray.push(monthOfDate);

            const arrayOfJobs = Object.values(item)[0];

            const totalMonthlyJobsCreation = arrayOfJobs?.reduce((acc, obj) => obj ? acc += 1 : acc, 0);
            jobsCreatedPerMonth.push(totalMonthlyJobsCreation)
        });

        const jobsCount = Object.entries(
            !isLoading && data?.reduce((b, a) => {
                let county = a?.county;
                if (Object.prototype.hasOwnProperty.call(b, county))
                    b[county]?.push(a);
                else
                    b[county] = [a];
                return b;
            }, Object.create(null))
        )
            .sort((a, b) => a[0].localeCompare(b[0]))
            .map((e) => ({ [e[0]]: e[1] }));

        let countiesArray = []
        let jobsPerCounty = []

        jobsCount.forEach((item) => {
            const key = Object.keys(item)[0];
            countiesArray.push(key);

            const arrayOfJobs = Object.values(item)[0];

            const totalCountyJobsCreation = arrayOfJobs?.reduce((acc, obj) => obj ? acc += 1 : acc, 0);
            jobsPerCounty.push(totalCountyJobsCreation)
        });


        setBarChartMonths(monthsArray);
        setJobsCountPerMonth(jobsCreatedPerMonth);

        setPieChartCounties(countiesArray);
        setJobsCountPerCounty(jobsPerCounty);


    }, [data, isLoading]);


    const jobsCreationSummary = useMemo(
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
                        label: "Jobs",
                        data: jobsCountPerMonth,
                        borderColor: 'rgb(240, 99, 12)',
                        backgroundColor: 'rgba(240, 99, 12, 0.5)',
                    },
                ],
                text: "35",
            },
        }),
        [jobsCountPerMonth, barChartMonths]
    );

    const jobsPerCountySummary = useMemo(
        () => ({
            options: {
                plugins: {
                    centerText: {
                        display: true,
                        text: "90%",
                    },
                    legend: {
                        display: true,
                        position: "bottom",
                    },
                },
            },

            data: {
                labels: pieChartCounties,
                datasets: [
                    {
                        label: "Jobs",
                        data: jobsCountPerCounty,
                        backgroundColor: [
                            "#6EF07B",
                            "#6FCDFB",
                            "#FF65C1",
                            "#BB1600",
                            "#FFCF63",
                        ],
                    },
                ],
                text: "35",
            },
        }),
        [jobsCountPerCounty, pieChartCounties]
    );

    return { isLoading, jobs: data, jobsCreationSummary, jobsPerCountySummary, refetch };
}

export const useClientsJobs = () => {
    const handleError = useErrorToast();

    const { isLoading, data, refetch } = useQuery({
        queryKey: ["jobs/clients"],
        queryFn: async () => await ModelsBookingServices.fetchCLientModelsBooking(),
        onError: (error) => {
            handleError(error);
        },
    });

    return { isLoading, jobs: data, refetch };
}

export const useModelsJobs = () => {
    const handleError = useErrorToast();

    const { isLoading, data, refetch } = useQuery({
        queryKey: ["jobs/models"],
        queryFn: async () => await ModelsBookingServices.fetchModelModelsBooking(),
        onError: (error) => {
            handleError(error);
        },
    });

    return { isLoading, jobs: data, refetch };
}

export const useCreateJob = (refetch, handleCancel, isEditing, editState) => {
    const handleError = useErrorToast();
    const handleSuccess = useSuccessToast();

    const { data } = useClientProfile();

    const [jobState, setJobState] = useState({
        jobTitle: "",
        county: "",
        city: "",
        description: "",
        startDate: "",
        endDate: "",
    });

    const [models, setModels] = useState([]);

    useEffect(() => {
        if (editState) {
            setJobState((prev) => ({
                ...prev,
                jobTitle: editState?.jobTitle,
                county: editState?.county,
                city: editState?.city,
                description: editState?.description,
                startDate: editState?.startDate,
                endDate: editState?.endDate,
            }))
        }
    }, [editState]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setJobState((prev) => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (e) => {
        const { value } = e.target;

        setModels((prev) => ([
            ...prev,
            value
        ]));
    };

    const createJobMutation = useMutation(
        async (data) => await ModelsBookingServices.bookModels(data),
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

    const updateJobMutation = useMutation(
        async (data) => await ModelsBookingServices.updateBooking(editState?._id, data),
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
    )

    const handleSubmit = () => {
        if (isEditing) {
            updateJobMutation.mutateAsync(jobState);
        } else {
            createJobMutation.mutateAsync({ ...jobState, models: models, client: data?._id });
        }

    }

    return { jobState, createJobMutation, handleChange, handleSelectChange, handleSubmit }
}


export const useDeleteContract = (refetch, setIsDeleteModalOpen) => {

    const handleError = useErrorToast();
    const handleSuccess = useSuccessToast();

    const handleDelete = async (id) => {
        try {
            await ModelsBookingServices.deleteModelsBooking(id).then(() => {
                handleSuccess({ messsage: "Contract deleted successfully." });
                setIsDeleteModalOpen(false);
                refetch();
            })
        } catch (err) {
            handleError(err);
        }
    }

    return { handleDelete }
}
