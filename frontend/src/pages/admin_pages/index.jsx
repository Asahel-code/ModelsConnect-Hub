import { Outlet } from 'react-router-dom';
import AdminLayout from "../../components/layouts/AdminLayout"

const AdminPages = () => {
    return (
        <AdminLayout>
            <div className="max-h-[91%] overflow-y-scroll p-3">
                <Outlet />
            </div>
        </AdminLayout>
    )
}

export default AdminPages