import { Outlet } from 'react-router-dom';
import ClientLayout from '../../components/layouts/ClientLayout';

const ClientPages = () => {
    return (
        <ClientLayout>
            <div className="max-h-[91%] overflow-y-scroll p-3">
                <Outlet />
            </div>
        </ClientLayout>
    );
}

export default ClientPages