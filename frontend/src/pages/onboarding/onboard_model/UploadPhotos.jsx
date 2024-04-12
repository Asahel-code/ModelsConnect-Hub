import PropTypes from "prop-types";
import Navigator from "../../../components/onboarding/Navigator";
import { FormControl, FormLabel } from "@chakra-ui/react";
import CustomImageInput from "../../../components/general/CustomImageInput";
import { useState } from "react";

const UploadPhotos = ({ currentStep, setCurrentStep }) => {

    const [images, setImages] = useState([]);

    console.log(images)

    return (
        <div className='px-8'>
            <Navigator
                text={"Upload your photos"}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
            />
            <div className="py-4">
                <p className="text-sm text-black font-semibold">You are allowed to upload a maximum of 10 photos</p>
                <div className="my-4">
                    <FormControl isRequired display={"flex"} flexDirection={"row"}>
                        <FormLabel fontSize={"sm"}>images</FormLabel>
                        <CustomImageInput
                            className={"h-8 w-8 bg-white"}
                            name="images"
                            multiple
                            onChange={(e) => setImages(prev => [...prev, ...e.target.files])}
                        />
                    </FormControl>
                </div>
                <div className="grid grid-cols-3 gap-y-3">
                    {images?.map((image, index) => {
                        return (
                            <div className="h-[100px] w-[120px]" key={index}>
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
        </div>
    )
}

UploadPhotos.propTypes = {
    currentStep: PropTypes.number,
    setCurrentStep: PropTypes.func,
}

export default UploadPhotos