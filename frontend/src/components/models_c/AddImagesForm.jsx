import PropTypes from "prop-types";
import { Modal } from 'antd';
import CustomButton from '../general/CustomButton';
import CustomImageInput from "../general/CustomImageInput";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { useAddModelImages } from "../../hooks/useModel";
import LoadingButton from "../general/LoadingButton";


const AddImagesForm = ({ isModalOpen, handleOk, handleCancel, refetch }) => {

    const { images, addImagesMutation, setImages, handleSubmit } = useAddModelImages(refetch, handleCancel);

    return (
        <Modal
            className={"max-w-[700px] px-0 "}
            width={"60%"}
            title={"Upload your Images"}
            open={isModalOpen}
            style={{ top: 20 }}
            onOk={handleOk}
            onCancel={() => {
                handleCancel();
            }}
            footer={[
                <div
                    key={"close"}
                    className="flex items-center justify-end space-x-4"
                >
                    <CustomButton
                        variant={"outline"}
                        text={"Cancel"}
                        width={"fit"}
                        onClick={handleCancel}
                    />
                    {addImagesMutation.isLoading ? (
                        <LoadingButton
                            loadingText={"Creating..."}
                        />
                    ) : (
                        < CustomButton
                            onClick={handleSubmit}
                            variant={"solid"}
                            text={"Submit"}
                            width={"fit"}
                        />
                    )}
                </div>
            ]}
        >
            <div className="my-4">
                <FormControl isRequired>
                    <FormLabel fontSize={"sm"}>Click to upload images</FormLabel>
                    <CustomImageInput
                        className={"h-8 w-8 bg-transparent"}
                        name="images"
                        multiple
                        onChange={(e) => setImages(prev => [...prev, ...e.target.files])}
                    />
                </FormControl>
                <div className="grid grid-cols-4 gap-2">
                    {images?.map((image, index) => {
                        return (
                            <div className="h-[120px] w-full" key={index}>
                                <img
                                    src={URL.createObjectURL(image)}
                                    alt=""
                                    className="h-full w-full rounded-lg object-cover"
                                />
                            </div>
                        )
                    })}
                    {!images?.length && (
                        <div className="h-[100px] w-[120px]">
                            <img
                                src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                alt=""
                                className="h-full w-full rounded-lg object-cover"
                            />
                        </div>
                    )}
                </div>
            </div>
        </Modal>
    )
}

AddImagesForm.propTypes = {
    isModalOpen: PropTypes.bool,
    handleOk: PropTypes.func,
    handleCancel: PropTypes.func,
    refetch: PropTypes.func
}

export default AddImagesForm