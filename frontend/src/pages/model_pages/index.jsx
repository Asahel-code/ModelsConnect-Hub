import { Outlet } from 'react-router-dom';
import ModelLayout from '../../components/layouts/ModelLayout';

const ModelPages = () => {
    return (
        <ModelLayout>
            <Outlet />
        </ModelLayout>
    )
}

export default ModelPages