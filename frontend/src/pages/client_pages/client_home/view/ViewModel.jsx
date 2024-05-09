import Breadcrumb from "../../../../components/general/Breadcrumb";
import { MdOutlineHome } from "react-icons/md";
import { ImageView } from "../../../model_pages/model_gallery";
import { useParams } from "react-router-dom";
import { useSpecifcModel } from "../../../../hooks/useModel";


const ViewModel = () => {
    let { id } = useParams();

    const { isLoading, data } = useSpecifcModel(id);
    return (
        <div className="mt-3">
            <Breadcrumb
                icon={<MdOutlineHome />}
                title={"Home"}
                subtitle={id}
            />
            <div className="mt-4 flex flex-col gap-4">
                <h3><span className="font-semibold text-xl">Name:</span> {data?.name ?? ""}</h3>
                <h3><span className="font-semibold text-xl">Location:</span> {`${data?.county} ${data?.city}` ?? ""}</h3>
                <h3><span className="font-semibold text-xl">Height:</span> {data?.height ?? ""} Inches</h3>
                <h3><span className="font-semibold text-xl">Skin tone:</span> {data?.skinColor ?? ""}</h3>
            </div>
            <div className="mt-6 mb-3 flex justify-center">
                <h4 className="font-[1000] text-2xl capitalize">{data?.name ?? ""}&apos;s Portfolio</h4>
            </div>
            <div className="grid grid-cols-3 gap-x-2 gap-y-3">
                {!isLoading && data?.images?.map((image, index) =>
                    <ImageView
                        key={index}
                        src={image}
                    />
                )}

            </div>
        </div>
    )
}

export default ViewModel