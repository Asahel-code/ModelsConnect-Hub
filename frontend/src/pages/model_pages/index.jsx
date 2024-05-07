import { Outlet } from 'react-router-dom';
import ModelLayout from '../../components/layouts/ModelLayout';

const ModelPages = () => {
    return (
        <ModelLayout>
            <div className="max-h-[91%] overflow-y-scroll p-3">
                <Outlet />
            </div>
        </ModelLayout>
    )
}

export default ModelPages