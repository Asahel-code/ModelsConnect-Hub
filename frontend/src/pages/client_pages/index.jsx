import { Outlet, useNavigate } from 'react-router-dom';
import ClientLayout from '../../components/layouts/ClientLayout';
import { useClientProfile } from '../../hooks/useClient';
import { useEffect } from 'react';

const ClientPages = () => {

    const navigate = useNavigate();

    const { isLoading, data } = useClientProfile();

    useEffect(() => {
        if (!isLoading && data === null) {
            navigate('/onboard/client');
        }
    }, [data, isLoading, navigate]);
    return (
        <ClientLayout>
            <div className="max-h-[91%] overflow-y-scroll p-3">
                <Outlet />
            </div>
        </ClientLayout>
    );
}

export default ClientPages