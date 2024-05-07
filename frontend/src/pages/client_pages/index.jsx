import { Outlet } from 'react-router-dom';
import ClientLayout from '../../components/layouts/ClientLayout';

const ClientPages = () => {
    return (
        <ClientLayout>
            <Outlet />
        </ClientLayout>
    );
}

export default ClientPages