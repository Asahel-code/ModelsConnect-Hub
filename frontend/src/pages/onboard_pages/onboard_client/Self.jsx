import PropTypes from "prop-types";
import { useState } from "react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import Navigator from "../../../components/onboarding/Navigator";
import CustomInput, { CustomSelect } from "../../../components/general/CustomInput";
import CustomImageInput from "../../../components/general/CustomImageInput";


const Self = ({ currentStep, setCurrentStep }) => {

    const [frontImage, setFrontImage] = useState("");
    const [backImage, setBackImage] = useState("");

    return (
        <div>
            <div className="px-8">
                <Navigator
                    text={"Fill in details"}
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                />
            </div>
            <div className="py-4 px-8 border-b border-gray-300">
                <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                    <FormControl isRequired>
                        <FormLabel fontSize={"sm"}>First name</FormLabel>
                        <CustomInput
                            placeholder="Enter your first name"
                            name="firstName"
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel fontSize={"sm"}>Last name</FormLabel>
                        <CustomInput
                            placeholder="Enter your first name"
                            name="firstName"
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel fontSize={"sm"}>County</FormLabel>
                        <CustomSelect
                            placeholder={"Select county"}
                            name={"county"}
                        >
                            <option>Nairobi</option>
                        </CustomSelect>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel fontSize={"sm"}>City</FormLabel>
                        <CustomInput
                            placeholder="Enter your city"
                            name="city"
                        />
                    </FormControl>
                </div>
            </div>
            <div className="py-4 px-8">
                <div className="grid grid-cols-2 gap-5">
                    <FormControl isRequired>
                        <FormLabel fontSize={"sm"}>ID card front</FormLabel>
                        <CustomImageInput
                            placeholder={"Click to upload a front photo of your ID"}
                            name="idFront"
                            image={frontImage}
                            onChange={({ target: { files } }) => files[0] && setFrontImage(files[0])}
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel fontSize={"sm"}>ID card back</FormLabel>
                        <CustomImageInput
                            placeholder={"Click to upload a back photo of your ID"}
                            name="idBack"
                            image={backImage}
                            onChange={({ target: { files } }) => files[0] && setBackImage(files[0])}
                        />
                    </FormControl>
                </div>
            </div>
        </div>
    )
}

Self.propTypes = {
    currentStep: PropTypes.number,
    setCurrentStep: PropTypes.func,
}

export default Self