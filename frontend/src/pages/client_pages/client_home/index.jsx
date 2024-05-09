import { useAvailableModel } from "../../../hooks/useModel";
import { ImageView } from "../../model_pages/model_gallery";
import { Link } from "react-router-dom";


const ClientHome = () => {

    const { isLoading, data } = useAvailableModel();
    return (
        <div className="mt-3">
            <h3 className="text-3xl font-bold">Welcome</h3>
            <div className="flex justify-center mt-5">
                <h3 className="text-xl font-semibold">Available Models</h3>
            </div>
            <div className="grid grid-cols-4 gap-x-2 gap-y-3 mt-7">
                {!isLoading && data?.map((model, index) => (
                    <Link key={index} to={`/client/home/${model?._id}`}>
                        <ImageView
                            className={"hover:scale-105 transition-all cursor-pointer"}
                            src={model?.images[0]}
                        />
                    </Link>
                ))}

            </div>
        </div>
    )
}

export default ClientHome