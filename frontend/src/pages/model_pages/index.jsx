import { Outlet, useNavigate } from 'react-router-dom';
import ModelLayout from '../../components/layouts/ModelLayout';
import { useEffect } from 'react';
import { useModelProfile } from '../../hooks/useModel';

const ModelPages = () => {

    const navigate = useNavigate();

    const { isLoading, data } = useModelProfile();

    useEffect(() => {
        if (!isLoading && data === null) {
            navigate('/onboard/model');
        }
    }, [data, isLoading, navigate]);


    return (
        <ModelLayout>
            <div className="max-h-[91%] overflow-y-scroll p-3">
                <Outlet />
            </div>
        </ModelLayout>
    )
}

export default ModelPages