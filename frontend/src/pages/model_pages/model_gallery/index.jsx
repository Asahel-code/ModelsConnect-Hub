import PropTypes from "prop-types"
import { RiGalleryView } from "react-icons/ri"
import Breadcrumb from "../../../components/general/Breadcrumb"
import CustomButton from "../../../components/general/CustomButton"
import AddImagesForm from "../../../components/models_c/AddImagesForm"
import { useState } from "react"
import { useDeleteModelImage, useModelProfile } from "../../../hooks/useModel"
import { MdDeleteOutline } from "react-icons/md";

const ModelGallery = () => {

    const [isFormOpen, setIsFormOpen] = useState(false);

    const { isLoading, data, refetch } = useModelProfile();

    const { handleDelete } = useDeleteModelImage(refetch);

    return (
        <div className="mt-3">
            <Breadcrumb
                icon={<RiGalleryView />}
                title={"Gallery"}
            />
            <div className="mt-8">
                <div className="flex justify-end">
                    <CustomButton
                        width={"150px"}
                        variant={"solid"}
                        text={"Add photos"}
                        onClick={() => setIsFormOpen(true)}
                    />
                </div>

                <div className="grid grid-cols-4 gap-x-2 gap-y-3 mt-7">
                    {!isLoading && data?.images?.map((image, index) => (
                        <ImageView
                            key={index}
                            src={image}
                            isDeletable={true}
                            handleDelete={() => handleDelete(image)}
                        />
                    ))}
                </div>
            </div>

            <AddImagesForm
                isModalOpen={isFormOpen}
                handleCancel={() => {
                    setIsFormOpen(false);
                }}
                refetch={refetch}
            />
        </div>
    )
}

export default ModelGallery

export const ImageView = ({ src, className, isDeletable = false, handleDelete, ...rest }) => (
    <div className={`w-full h-72 relative ${className}`} {...rest}>
        <img src={src} alt={"img"} className="object-cover h-full w-full rounded-lg" />
        {isDeletable && (
            <div
                className="absolute bottom-1 right-2 cursor-pointer"
                onClick={handleDelete}
            >
                <MdDeleteOutline className="text-primary_red text-xl" />
            </div>
        )}
    </div>
);

ImageView.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
    isDeletable: PropTypes.bool,
    handleDelete: PropTypes.func
}
